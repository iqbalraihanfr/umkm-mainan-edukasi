@extends('layouts.app')

@section('content')
    <div class="container py-8 px-4 mx-auto">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">📦 Daftar Produk UMKM</h2>

        <div class="mb-4">
            <a href="{{ route('produk-admin.create') }}"
                class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow">
                + Tambah Produk
            </a>
        </div>

        @if (session('success'))
            <div class="bg-green-100 border-l-4 border-green-500 text-green-800 p-4 mb-6 rounded shadow-sm">
                {{ session('success') }}
            </div>
        @endif

        <div class="overflow-x-auto rounded-lg shadow border bg-white">
            <table class="min-w-full table-auto text-sm text-left text-gray-700">
                <thead class="bg-gray-100 uppercase text-xs text-gray-600">
                    <tr>
                        <th class="px-6 py-3">Gambar</th>
                        <th class="px-6 py-3">Nama</th>
                        <th class="px-6 py-3">Kategori</th>
                        <th class="px-6 py-3">Harga</th>
                        <th class="px-6 py-3 text-center">Aksi</th>
                    </tr>
                </thead>
                <tbody class="divide-y">
                    @forelse ($produk as $item)
                        <tr class="hover:bg-gray-50 transition">
                            <td class="px-6 py-4">
                                <img src="{{ asset('uploads/' . $item->gambar) }}" alt="gambar produk"
                                    class="w-14 h-14 rounded object-cover">
                            </td>
                            <td class="px-6 py-4 font-medium">{{ $item->nama }}</td>
                            <td class="px-6 py-4">{{ $item->kategori }}</td>
                            <td class="px-6 py-4">Rp {{ number_format($item->harga, 0, ',', '.') }}</td>
                            <td class="px-6 py-4 text-center">
                                <a href="{{ route('produk-admin.edit', $item->id) }}"
                                    class="inline-block text-blue-600 hover:underline mr-2">Edit</a>
                                <form action="{{ route('produk-admin.destroy', $item->id) }}" method="POST" class="inline">
                                    @csrf @method('DELETE')
                                    <button onclick="return confirm('Yakin hapus produk?')"
                                        class="text-red-600 hover:underline">Hapus</button>
                                </form>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="5" class="text-center text-gray-500 py-6">Belum ada produk yang ditambahkan.
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>
@endsection
