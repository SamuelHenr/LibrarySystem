
export default function EmprestimosPage () {
	return (
		<div >
			<h1>Livros emprestados</h1>

			<table className="w-60">
				<thead>
					<tr>
						<th style={{ width: "55%" }}>Título</th>
						<th style={{ width: "15%" }}>Data de entrega</th>
						<th style={{ width: "15%" }}>Limite de renovações</th>
						<th style={{ width: "15%" }}>Ações</th>
					</tr>
				</thead>
				<tbody>
					<tr className="text-center">
						<td>Título</td>
						<td>Data de entrega</td>
						<td>Renovações</td>
						<td>Renovar</td>
					</tr>
				</tbody>
			</table>

			<br></br>
			<button><a href="/" className="remove-layout">Voltar</a></button>
		</div>
	)
}
