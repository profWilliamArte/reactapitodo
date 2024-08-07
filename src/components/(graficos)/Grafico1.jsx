import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Registra los componentes que utilizarás
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Grafico1 = () => {
    const [categories, setCategories] = useState([]);
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://dummyjson.com/products?limit=200');
            const json = await response.json();
            const categoryData = {}; 
            json.products.forEach(product => {
                const category = product.category;
                categoryData[category] = (categoryData[category] || 0) + product.stock;
            });

            setCategories(Object.keys(categoryData));
            setStocks(Object.values(categoryData));
        };

        fetchData();
    }, []);

    const chartData = {
        labels: categories,
        datasets: [
            {
                label: 'Stock por Categoria',
                data: stocks,
                backgroundColor: 'rgba(231, 76, 60, 0.8)',
                borderColor: 'rgba(231, 76, 60, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h5 className='text-center'>Stock por Categoria</h5>
            <Bar data={chartData} options={options} />
        </div>
    );
}

export default Grafico1;
