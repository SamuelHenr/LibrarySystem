import '../page-styles.css'

export default function SearchTable () {

	return (
		<table className="w-100">
			<thead>
				<tr>
					<th style={{ width: "20%" }}>Título</th>
					<th style={{ width: "20%" }}>Autor</th>
					<th style={{ width: "20%" }}>Assunto</th>
					<th style={{ width: "20%" }}>Data de publicação</th>
					<th style={{ width: "10%" }}>Reservas</th>
					<th style={{ width: "10%" }}>Ações</th>
				</tr>
			</thead>
			<tbody>
				<tr className="text-center">
					<td>Título</td>
					<td>Autor</td>
					<td>Assunto</td>
					<td>Data de publicação</td>
					<td>Exemplares</td>
					<td>Emprestar</td>
				</tr>
			</tbody>
		</table>
	)
}
