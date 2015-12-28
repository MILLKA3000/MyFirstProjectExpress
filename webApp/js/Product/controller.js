/**
 *  method for display each product
 */
var Product = React.createClass({
    render: function() {
        return (
            <div className="product">
            <h2 className="detailProduct">
            {this.props.data.name}<br/>
        {this.props.data.model}<br/>
        </h2>
        </div>
        );
    }
});
/**
 *  colection products
 */
var ColectionProducts = React.createClass({
    render: function() {
        var productList = this.props.data.map(function(product) {
            return (
                <Product data={product} key={product._id}></Product>
            )
        });
        return (
            <div>{productList}</div>
        )
    }
});
/**
 * controller Product
 */
var ProductController = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    loadProductsFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'jsonp',
            type:'post',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    componentDidMount: function() {
        this.loadProductsFromServer()
        setInterval(this.loadProductsFromServer, this.props.pollInterval);
    },

    render: function() {
        return (
            <div className="productsBox">
            <h1>Products</h1>
            <ColectionProducts data={this.state.data} />
        </div>
        );
    }
});

ReactDOM.render(<ProductController url="http://localhost:3000/api/allproducts" pollInterval={5000}/>, document.getElementById('content'));