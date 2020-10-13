
const Bet = require('../../models/bet')


module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update
  };

async function index(req, res) {
  const bets = await Bet.find({});
  res.status(200).json(bets)
}

async function show(req, res) {
  const bet = await Bet.findById(req.params.id);
  res.status(200).json(bet);
}

async function create(req, res) {
  const bet = await Bet.create(req.body);
  res.status(201).json(bet);
}

async function deleteOne(req, res) {
  const deletedBet = await Bet.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedBet);
}

async function update(req, res) {
  const updatedBet = await Bet.findByIdAndUpdate(req.params.id, req.body, {new: true})
  res.status(200).json(updatedBet);
}

// async function create(req, res) {
//   console.log('HELLO!!', req.body)
//   try {
//      const bet = await Bet.create(req.body);
//       res.status(201).json(bet); 
//   }
//   catch (err) {
//       console.log(err);
//       res.status(400).json(err);
//   }
// }

