
module.exports = {

  create: (req, res) => {
    const {name, description, price, image_url} = req.body

    req.app.get('db').create_product(name, description, price, image_url)
    .then(() => {
      res.status(200).send('Product created')
    })
    .catch(err => console.log(err, 'problem getting product'))
  },

  getOne: (req, res) => {
    const { id } = req.params

    req.app.get('db').read_product(id)
      .then((product) => {
        res.status(200).send(product)
      })
      .catch(err => console.log('Problem getting product'))
  },

  getAll: (req, res) => {
    req.app.get('db').read_products()
      .then((products) => {
        res.status(200).send(products)
      })
      .catch(err => console.log(err, 'Problem getting products'))
  },

  update: (req, res) => {
    const { id } = req.params
    const { desc } = req.query

    req.app.get('db').update_product(id, desc)
      .then((res) => {
        res.status(200).send(res, 'Product Updated')
      })
      .catch(err => console.log(err, 'Problem updating product'))
  },

  delete: (req, res) => {
    const { id } = req.params 

    req.app.get('db')
      .delete_product(id)
      .then(() => {
        res.status(200).send('Product Deleted')
      })
      .catch(err => console.log(err, 'Problem deleting product'))
  }
}