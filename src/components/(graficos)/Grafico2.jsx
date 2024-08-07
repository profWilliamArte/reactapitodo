import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Grafico2 = () => {
    const [ratings, setRatings] = useState([]);
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://dummyjson.com/products?limit=200');
            const json = await response.json();
            const ratingData = {};
            
            json.products.forEach(product => {
                const rating = Math.trunc(product.rating);
                ratingData[rating] = (ratingData[rating] || 0) + product.stock;
            });

            setRatings(Object.keys(ratingData).map(Number));
            setStocks(Object.values(ratingData));
        };

        fetchData();
    }, []);

    const chartData = {
        labels: ratings,
        datasets: [
            {
                label: 'Stock por Rating',
                data: stocks,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Stock por Rating',
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
            },
        },
    };

    return (
        <div>
            <Pie data={chartData} options={options} width={400} height={400} />
        </div>
    );
}

export default Grafico2;

