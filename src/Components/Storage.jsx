import React, { useEffect, useState } from 'react';

const Storage = () => {
	const [visits, setVisits] = useState(0);
	const controller = new AbortController();
	const signal = controller.signal;

	useEffect(() => {
		if (!signal.aborted) {
			// Se o sinal não foi abortado, seguir com a lógica
			// Recupera visitas do localStorage
			const savedVisits = JSON.parse(
				localStorage.getItem('visits') || '0'
			);

			const newVisits = savedVisits + 1;
			setVisits(newVisits);

			localStorage.setItem('visits', JSON.stringify(newVisits));
		}
		// Cleanup para evitar efeitos duplicados
		return () => controller.abort(); // Abortando sinal para não renderizar novamente
	}, []);

	const resetVisits = () => {
		setVisits(0);
		localStorage.setItem('visits', '0');
	};

	return (
		<div className="Storage mb-[20px]">
			<h1 className="mb-[20px]  font-bold">Contador de visitas</h1>
			<p className="mb-[20px]">
				Utilizamos useEffect, useState, localStorage e AbortController
			</p>
			<p className="text-[#ff0000] text-[42px] font-bold mb-[20px]">
				{visits}
			</p>
			<button onClick={resetVisits}>Zerar</button>
		</div>
	);
};

export default Storage;
