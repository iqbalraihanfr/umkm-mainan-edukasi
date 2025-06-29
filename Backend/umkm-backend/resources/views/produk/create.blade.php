@extends('layouts.app')

@section('content')
    <div class="container max-w-3xl mx-auto py-8 px-6 bg-white rounded shadow">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">➕ Tambah Produk Baru</h2>

        <form method="POST" action="{{ route('produk-admin.store') }}" enctype="multipart/form-data" class="space-y-6">
            @csrf

            <div>
                <label class="block text-gray-700 font-medium mb-2">Nama Produk</label>
                <input type="text" name="nama"
                    class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required>
            </div>

            <div>
                <label class="block text-gray-700 font-medium mb-2">Kategori</label>
                <input type="text" name="kategori"
                    class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required>
            </div>

            <div>
                <label class="block text-gray-700 font-medium mb-2">Harga</label>
                <input type="number" name="harga"
                    class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required>
            </div>

            <div>
                <label class="block text-gray-700 font-medium mb-2">Deskripsi</label>
                <textarea name="deskripsi" rows="4"
                    class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
            </div>

            <div>
                <label class="block text-gray-700 font-medium mb-2">Gambar Produk</label>
                <input type="file" name="gambar"
                    class="w-full border border-gray-300 rounded px-4 py-2 bg-white file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:bg-gray-100">
            </div>

            <div class="pt-4">
                <button type="submit"
                    class="bg-green-600 hover:bg-green-700 transition-colors text-white font-semibold px-6 py-2 rounded shadow">
                    💾 Simpan Produk
                </button>
            </div>
        </form>
    </div>
@endsection
