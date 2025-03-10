import React from 'react';
import Card from './ui/Card';
import './AdminDashboard.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FiDollarSign, FiHome, FiEye, FiBarChart2 } from 'react-icons/fi';

const data = [
  { name: 'Jan', income: 35000, expense: 15000 },
  { name: 'Feb', income: 30000, expense: 12000 },
  { name: 'Mar', income: 45000, expense: 20000 },
  { name: 'Apr', income: 40000, expense: 18000 },
  { name: 'May', income: 50000, expense: 25000 },
  { name: 'Jun', income: 45000, expense: 20000 },
];

const AdminDashboard = () => {
  return (
    <div className="p-8 bg-fffaef min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Monitor Your Property</h1>
      <div className="grid grid-cols-4 gap-4 mb-8">
        <Card className="p-4 shadow-lg rounded-xl bg-white">
          <FiDollarSign className="text-4xl mb-2 text-orange-600" />
          <p className="text-xl font-semibold">Total Income</p>
          <p>$1,400,353.93</p>
        </Card>
        <Card className="p-4 shadow-lg rounded-xl bg-white">
          <FiBarChart2 className="text-4xl mb-2 text-orange-600" />
          <p className="text-xl font-semibold">Total Expenses</p>
          <p>$220,852.00</p>
        </Card>
        <Card className="p-4 shadow-lg rounded-xl bg-white">
          <FiHome className="text-4xl mb-2 text-orange-600" />
          <p className="text-xl font-semibold">Total Property</p>
          <p>823</p>
        </Card>
        <Card className="p-4 shadow-lg rounded-xl bg-white">
          <FiEye className="text-4xl mb-2 text-orange-600" />
          <p className="text-xl font-semibold">Total Views</p>
          <p>83,923</p>
        </Card>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Monthly Performance</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} className="bg-white p-4 rounded-xl shadow-lg">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="income" fill="#BF8501" />
          <Bar dataKey="expense" fill="#8A6434" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AdminDashboard;
