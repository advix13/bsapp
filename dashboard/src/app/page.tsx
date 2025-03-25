'use client';

import React from 'react';
import DashboardCards from '@/components/dashboard/DashboardCards';
import RecentSales from '@/components/dashboard/RecentSales';
import StockLevels from '@/components/dashboard/StockLevels';
import Products from '@/components/dashboard/Products';

export default function Home() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>BlueSpring Dashboard</h1>
      <p>Welcome to the BlueSpring water and ice distribution dashboard.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Quick Links</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="/dashboard" style={{ color: '#0070f3', textDecoration: 'none' }}>Dashboard</a>
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="/inventory" style={{ color: '#0070f3', textDecoration: 'none' }}>Inventory</a>
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="/orders" style={{ color: '#0070f3', textDecoration: 'none' }}>Orders</a>
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="/customers" style={{ color: '#0070f3', textDecoration: 'none' }}>Customers</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
