import livros from "./storage/livrosEmprestados.json"

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
					{livros.map((livro) => (
						<tr key={livro.idLivro} className="text-center">
							<td>{livro.titulo}</td>
							<td>{livro.entrega}</td>
							<td>{livro.limite}</td>
							<td><button>Renovar</button></td>
						</tr>
					))}
				</tbody>
			</table>

			<br></br>
			<button><a href="/" className="remove-layout">Voltar</a></button>
		</div>
	)
}
