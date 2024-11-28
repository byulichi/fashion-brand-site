import React from "react";

// Placeholder for UI components
const Badge = ({ variant, children }) => (
  <span
    className={`px-2 py-1 rounded-md ${
      variant === "destructive" ? "bg-red-500 text-white" : "bg-gray-300 text-black"
    }`}
  >
    {children}
  </span>
);

const Button = ({ variant, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md ${
      variant === "outline"
        ? "border border-gray-400 text-gray-600"
        : "bg-black text-white hover:bg-gray-800"
    }`}
  >
    {children}
  </button>
);

const Card = ({ children }) => (
  <div className="bg-white shadow-md rounded-md p-4">{children}</div>
);

const CardHeader = ({ children }) => <div className="mb-4">{children}</div>;

const CardContent = ({ children }) => <div className="mb-4">{children}</div>;

const CardFooter = ({ children }) => <div className="flex justify-end space-x-2">{children}</div>;

const CardTitle = ({ children }) => <h2 className="text-xl font-bold">{children}</h2>;

const Separator = () => <hr className="my-4" />;

const OrderItem = ({ item }) => (
  <div className="flex items-center space-x-4 py-2">
    <img
      src={item.image}
      alt={item.name}
      className="rounded-md"
      style={{ width: 50, height: 50 }}
    />
    <div className="flex-1">
      <h4 className="font-semibold">{item.name}</h4>
      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
    </div>
    <p className="font-medium">${item.price.toFixed(2)}</p>
  </div>
);

export default function YourOrders() {
  // Mock data for orders
  const orders = [
    {
      id: "ORD001",
      date: "2023-05-15",
      status: "Paid",
      total: 89.97,
      items: [
        {
          id: 1,
          name: "Classic White T-Shirt",
          price: 29.99,
          quantity: 2,
          image: "https://via.placeholder.com/100",
        },
        {
          id: 2,
          name: "Denim Jeans",
          price: 59.99,
          quantity: 1,
          image: "https://via.placeholder.com/100",
        },
      ],
    },
    {
      id: "ORD002",
      date: "2023-05-20",
      status: "Unpaid",
      total: 45.99,
      items: [
        {
          id: 3,
          name: "Floral Summer Dress",
          price: 45.99,
          quantity: 1,
          image: "https://via.placeholder.com/100",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Orders</h1>
      <div className="space-y-6">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Order {order.id}</CardTitle>
                <Badge variant={order.status === "Paid" ? "default" : "destructive"}>
                  {order.status}
                </Badge>
              </div>
              <p className="text-sm text-gray-500">Ordered on {order.date}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {order.items.map((item) => (
                  <OrderItem key={item.id} item={item} />
                ))}
              </div>
              <Separator />
              <div className="flex justify-between items-center font-semibold">
                <span>Total</span>
                <span>${order.total.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">View Details</Button>
              {order.status === "Unpaid" && <Button>Pay Now</Button>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
