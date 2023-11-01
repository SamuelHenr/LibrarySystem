import LivroEmprestado from '../interfaces/livro-emprestado';
import { useEffect, useState } from 'react'
import FileHandler from '../repositories/fileHandler';
import {renewBook, returnBook} from "../services/renew-book";

export default function EmprestimosPage () {

	const [livros, setBooks] = useState<LivroEmprestado[]>([])

	useEffect(() => {
		const fileHandler = new FileHandler();
		const books = fileHandler.getLivrosEmprestados();
		if(books) setBooks(books);
	  }, []);

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
					{livros.length? (
						livros.map((livro) => (
							<tr key={livro.idLivro} className="text-center">
								<td>{livro.titulo}</td>
								<td>{livro.entrega}</td>
								<td>{livro.limite}</td>
								<td>
									<button onClick={() => renewBook(livro)}>Renovar</button>
									<button className="ml-5" onClick={() => returnBook(livro)}>Devolver</button>
								</td>
							</tr>
						))
					) : (
						<tr className="text-center">
							<td colSpan={4}>Nenhum livro emprestado para este usuário!</td>
						</tr>
					)
					}
				</tbody>
			</table>

			<br></br>
			<button><a href="/" className="remove-layout">Voltar</a></button>
		</div>
	)
}
