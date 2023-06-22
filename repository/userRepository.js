const db = require('../config');
const mysql = require('mysql2/promise');
const User = require('../model/User');
const pieceController = require('../controller/pieceController');

export async function getAllUser() {
	let connection = await db.getConnection();
	return await connection.execute(`SELECT * FROM user;`).then(rows => {
		console.log("users successfully retrieved");
		return rows[0];
	});
}

export async function createUser(user) {
	let connection = await db.getConnection();
	try {
		await connection.execute(
			`INSERT INTO user (id, username, password, email, phoneNumber) VALUES (null, '${user.username}', '${user.password}', '${user.email}', '${user.phoneNumber}')`);
		return 'user succesfully created :p';
	} catch (error) {
		console.log(error);
		return error;
	}
}

export async function updateUser(user) {
	let connection = await db.getConnection();
	try {
		connection.execute(
			`UPDATE user SET username = '${user.username}', email = '${user.email}', phoneNumber = '${user.phoneNumber}' WHERE id = '${user.id}'`,
		);
		return("user succesfully updated");
	} catch (error) {
		console.log(error);
		return error;
	}
}

export async function deleteUser(id){
	let connection = await db.getConnection();
	try {
		await connection.execute(`DELETE FROM user WHERE id='${id}'`);
		return 'user succesfully deleted :p';
	} catch (error) {
		console.log(error);
		return error;
	}
}

export async function getFullUser(id) {
	let connection = await db.getConnection();
	return await connection.execute(`SELECT * FROM user WHERE id='${id}'`).then(rows => {
		console.log("user successfully retrieved");
		return rows[0];
	});
}

export async function getPieceFromUser(id) {
	let connection = await db.getConnection();
	return await connection.execute(`SELECT * FROM piece WHERE ownerId='${id}'`).then(rows => {
		console.log("piece succesfully retrieved for this user");
		return rows[0];
	});
}


