const db = require('../config');
const mysql = require('mysql2/promise');
const User = require('../model/User');
const Piece = require('../model/Piece');

export async function getAllPieces() {
	let connection = await db.getConnection();
	return await connection.execute(`SELECT * FROM piece;`).then(rows => {
		console.log('pieces successfully retrieved');
		return rows[0];
	});
}

export async function createPiece(piece) {
	let connection = await db.getConnection();
	try {
		await connection.execute(
			`INSERT INTO piece (id, label, description, ownerName) VALUES (null, '${piece.label}', '${piece.description}', '${piece.ownerName}')`,
		);
		return 'piece succesfully created :p';
	} catch (error) {
		console.log(error);
		return error;
	}
}

export async function updatePiece(piece) {
	let connection = await db.getConnection();
	try {
		connection.execute(
			`UPDATE piece SET label = '${piece.label}', description = '${piece.description}', ownerName = '${piece.ownerName}' WHERE id = '${piece.id}'`,
		);
		return 'piece succesfully updated';
	} catch (error) {
		console.log(error);
		return error;
	}
}

export async function deletePiece(id) {
	let connection = await db.getConnection();
	try {
		await connection.execute(`DELETE FROM piece WHERE id='${id}'`);
		return 'piece succesfully deleted :p';
	} catch (error) {
		console.log(error);
		return error;
	}
}

export async function getFullPiece(id) {
	let connection = await db.getConnection();
	return await connection
		.execute(`SELECT * FROM piece WHERE id='${id}'`)
		.then(rows => {
			console.log('piece successfully retrieved');
			return rows[0];
		});
}

export async function asignUserToPiece(pieceId, ownerName) {
	let connection = await db.getConnection();
	try {
		connection.execute(
			`UPDATE piece SET ownerName = '${ownerName}' WHERE id = '${pieceId}'`,
		);
		return 'piece succesfully updated';
	} catch (error) {
		console.log(error);
		return error;
	}
}

export async function removeUserFromPiece(pieceId) {
	let connection = await db.getConnection();
	try {
		connection.execute(
			`UPDATE piece SET ownerName = null WHERE id = '${pieceId}'`,
		);
		return 'piece succesfully updated';
	} catch (error) {
		console.log(error);
		return error;
	}
}
