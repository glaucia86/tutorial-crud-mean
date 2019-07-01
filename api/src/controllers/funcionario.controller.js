// @ts-nocheck
/**
 * Arquivo: src/controllers/funcionario.controller.js
 * Descrição: arquivo responsável pelo CRUD da classe 'Funcionário'
 * Data: 27/06/2019
 * Author: Glaucia Lemos
 */

const Funcionario = require('../models/funcionario.model');

// ==> Método responsável por criar um novo(a) 'Funcionário(a)':

// Async & Await:
exports.create = async (req, res) => {
  const novoFuncionario = new Funcionario(req.body);
  const funcionario = await novoFuncionario.save();
  res.status(201).send({ message: 'Funcionário(a) criado(a) com sucesso!', funcionario });
};

// ==> Método responsável por selecionar todos os Funcionários:
exports.findAll = (req, res) => {
  Funcionario.find()
    .then((funcionarios) => {
      res.status(200).send(funcionarios);
    }).catch((err) => {
      res.status(500).send({ message: 'Erro ao selecionar todos(as) os(as) Funcionários(as)' || err.message });
    });
};

// ==> Método responsável por selecionar 'Funcionario' pelo 'Id':
exports.findById = (req, res) => {
  Funcionario.findById(req.params.id)
    .then((funcionario) => {
      if (!funcionario) {
        return res.status(404).send({ message: `Funcionário(a) não encontrado(a) ${req.params.id}` });
      }

      res.status(200).send(funcionario);
    }).catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(400).send({ message: `Id do Funcionário(a) não encontrado(a) ${req.params.id}` });
      }

      res.status(500).send({ message: 'Erro ao selecionar os(as) Funcionários(as) || err.message' });
    });
};

// ==> Método responsável por atualizar 'Funcionário' pelo 'Id':
exports.update = (req, res) => {
  // Validar os campos
  if (!req.body.nomeFuncionario) {
    return res.status(400).send({ message: 'Os campos não podem ser vazios! ' });
  }

  // Encontrar 'Id' do Funcionário e depois atualizar os dados via 'request':
  Funcionario.findByIdAndUpdate(req.params.id, {
    nomeFuncionario: req.body.nomeFuncionario,
    cargo: req.body.cargo,
    numeroIdentificador: req.body.numeroIdentificador,
  }, { new: true })
    .then((funcionario) => {
      if (!funcionario) {
        res.status(404).send({ message: `Funcionário(a) não encontrado(a) ${req.params.id}` });
      }

      res.status(200).send({ message: 'Funcionário(a) atualizado(a) com sucesso!', funcionario });
    }).catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({ message: `Erro ao encontrar o Id do Funcionário(a) ${req.params.id}` });
      }

      res.status(500).send({ message: `Erro ao atualizar os dados do(a) Funcionário(a) ${req.params.id}` });
    });
};

// ==> Método responsável por excluir 'Funcionário' pelo 'Id':
exports.delete = (req, res) => {
  Funcionario.findByIdAndDelete(req.params.id)
    .then((funcionario) => {
      if (!funcionario) {
        return res.status(404).send({ message: `Id do Funcionário(a) não encontrado(a) ${req.params.id}` });
      }

      res.status(200).send({ message: 'Funcionário(a) excluído com sucesso!', funcionario });
    }).catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({ message: `Id do Funcionário(a) não encontrado ${req.params.id}` });
      }

      return res.status(500).send({ message: `Erro ao excluir Funcionário(a) ${req.params.id}` });
    });
};
