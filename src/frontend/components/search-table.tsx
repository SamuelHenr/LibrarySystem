import '../page-styles.css';
import Livro from "../../interfaces/livro";
import { lendBook } from "../../services/lend-book";
import FileHandler from '../../repositories/fileHandler';

interface TableSearchParameter {
	livros: Livro[]
}

export default function SearchTable ({livros}: TableSearchParameter) {

	return (
		<div>
			{livros.length? (
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
					{livros.map((livro) => (
						<tr key={livro.id} className="text-center">
							<td>{livro.titulo}</td>
							<td>{livro.autor}</td>
							<td>{livro.assunto}</td>
							<td>{livro.publicacao}</td>
							<td>{livro.reserva}</td>
							<td><button onClick={() => lendBook(livro, new FileHandler())}>Emprestar</button></td>
						</tr>
					))}
				</tbody>
			</table>
			) : (<></>)}
		</div>
	)
}
