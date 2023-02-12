<template>
  <div>
    <table class="table-auto w-full rounded-lg shadow-md">
      <thead>
        <tr class="bg-indigo-500 text-white">
          <th class="px-4 py-2">Stock Symbol</th>
          <th class="px-4 py-2">Company Name</th>
          <th class="px-4 py-2">Last Price</th>
          <th class="px-4 py-2">Change</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-gray-200">
          <td class="border px-4 py-2 text-indigo-600 font-bold">AAPL</td>
          <td class="border px-4 py-2">Apple Inc.</td>
          <td class="border px-4 py-2 text-indigo-600 font-bold">$119.24</td>
          <td class="border px-4 py-2 text-green-600 font-bold">+0.33%</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 text-indigo-600 font-bold">AMZN</td>
          <td class="border px-4 py-2">Amazon.com Inc.</td>
          <td class="border px-4 py-2 text-indigo-600 font-bold">$3,383.00</td>
          <td class="border px-4 py-2 text-green-600 font-bold">+1.47%</td>
        </tr>
        <tr class="bg-gray-200">
          <td class="border px-4 py-2 text-indigo-600 font-bold">GOOGL</td>
          <td class="border px-4 py-2">Alphabet Inc.</td>
          <td class="border px-4 py-2 text-indigo-600 font-bold">$2,508.00</td>
          <td class="border px-4 py-2 text-green-600 font-bold">+0.65%</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
