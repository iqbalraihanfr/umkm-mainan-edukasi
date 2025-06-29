<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Produk;
use Illuminate\Http\Request;

class ProdukAdminController extends Controller
{
    public function index()
    {
        $produk = Produk::all();
        return view('produk.index', compact('produk'));
    }

    public function create()
    {
        return view('produk.create');
    }

    public function store(Request $request)
{
    $validated = $request->validate([
        'nama' => 'required|string',
        'kategori' => 'required|string',
        'harga' => 'required|numeric',
        'deskripsi' => 'nullable|string',
        'gambar' => 'nullable|image',
    ]);

    if ($request->hasFile('gambar')) {
        $file = $request->file('gambar');
        $filename = time() . '_' . $file->getClientOriginalName();
        $file->move(public_path('uploads'), $filename);
        $validated['gambar'] = $filename;
    }

    Produk::create($validated);
    return redirect()->route('produk-admin.index')->with('success', 'Produk berhasil ditambahkan!');
}


    public function edit($id)
    {
        $produk = Produk::findOrFail($id);
        return view('produk.edit', compact('produk'));
    }

    public function update(Request $request, $id)
{
    $produk = Produk::findOrFail($id);

    $validated = $request->validate([
        'nama' => 'required|string',
        'kategori' => 'required|string',
        'harga' => 'required|numeric',
        'deskripsi' => 'nullable|string',
        'gambar' => 'nullable|image',
    ]);

    if ($request->hasFile('gambar')) {
        $file = $request->file('gambar');
        $filename = time() . '_' . $file->getClientOriginalName();
        $file->move(public_path('uploads'), $filename);
        $validated['gambar'] = $filename;
    }

    $produk->update($validated);
    return redirect()->route('produk-admin.index')->with('success', 'Produk berhasil diperbarui!');
}


    public function destroy($id)
    {
        $produk = Produk::findOrFail($id);
        $produk->delete();

        return redirect()->route('produk-admin.index')->with('success', 'Produk berhasil dihapus!');
    }
}
