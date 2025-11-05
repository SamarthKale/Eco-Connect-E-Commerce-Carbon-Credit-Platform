import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Textarea } from './ui/textarea';
import { ArrowLeft, ShoppingCart, Leaf, Star, Shield, Truck, RefreshCw, CheckCircle, StarIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';
import type { CartItem } from '../App';

interface Review {
  id: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  category: string;
  image: string;
  co2Saved: string;
  description?: string;
  features?: string[];
  materials?: string[];
  inStock?: boolean;
}

interface ProductDetailPageProps {
  product: Product;
  onNavigate: (page: string) => void;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

export function ProductDetailPage({ product, onNavigate, addToCart }: ProductDetailPageProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [userRating, setUserRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  // Mock reviews data
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 'r1',
      userName: 'Priya Sharma',
      rating: 5,
      date: '2025-10-28',
      comment: 'Excellent quality! Love how eco-friendly this product is. Highly recommend to everyone looking for sustainable alternatives.',
      verified: true,
    },
    {
      id: 'r2',
      userName: 'Rahul Mehta',
      rating: 4,
      date: '2025-10-25',
      comment: 'Good product, packaging could be better but overall very satisfied with the quality.',
      verified: true,
    },
    {
      id: 'r3',
      userName: 'Anjali Verma',
      rating: 5,
      date: '2025-10-22',
      comment: 'Amazing! This is exactly what I was looking for. The quality exceeded my expectations.',
      verified: false,
    },
  ]);

  const averageRating = reviews.length > 0
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : 0;

  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    stars: rating,
    count: reviews.filter(r => r.rating === rating).length,
    percentage: reviews.length > 0 ? (reviews.filter(r => r.rating === rating).length / reviews.length) * 100 : 0,
  }));

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast.success(`Added ${quantity} ${product.name} to cart!`);
  };

  const handleSubmitReview = () => {
    if (userRating === 0) {
      toast.error('Please select a rating');
      return;
    }
    if (!reviewText.trim()) {
      toast.error('Please write a review');
      return;
    }

    const newReview: Review = {
      id: `r${reviews.length + 1}`,
      userName: 'You',
      rating: userRating,
      date: new Date().toISOString().split('T')[0],
      comment: reviewText,
      verified: true,
    };

    setReviews([newReview, ...reviews]);
    setUserRating(0);
    setReviewText('');
    toast.success('Review submitted successfully!');
  };

  // Mock product images
  const productImages = [product.image, product.image, product.image];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('shop')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shop
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-4">
              <div className="aspect-square">
                <ImageWithFallback
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-green-600 shadow-md' : 'border-gray-200 hover:border-green-300'
                  }`}
                >
                  <ImageWithFallback
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge className="bg-green-100 text-green-700 border-green-200">
                {product.category}
              </Badge>
              <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                <Leaf className="w-3 h-3 mr-1" />
                Saves {product.co2Saved} CO₂
              </Badge>
            </div>

            <h1 className="text-4xl font-bold text-foreground mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= averageRating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {averageRating.toFixed(1)} ({reviews.length} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-green-600">
                  ₹{product.price}
                </span>
                <span className="text-xl text-muted-foreground line-through">
                  ₹{product.originalPrice}
                </span>
                <Badge className="bg-red-100 text-red-700 border-red-200">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </Badge>
              </div>
              <p className="text-sm text-green-600 font-medium">
                Inclusive of all taxes
              </p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              {product.description || 'Experience sustainable living with this eco-friendly product. Made from natural, biodegradable materials that are kind to the planet. Perfect for those who want to make a positive environmental impact with their daily choices.'}
            </p>

            {/* Features */}
            <div className="space-y-3 mb-6">
              {[
                { icon: Shield, text: '100% Eco-friendly materials' },
                { icon: Truck, text: 'Free shipping on orders over ₹500' },
                { icon: RefreshCw, text: '30-day return policy' },
                { icon: CheckCircle, text: 'Carbon offset certified' },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-4 h-4 text-green-600" />
                    </div>
                    <span>{feature.text}</span>
                  </div>
                );
              })}
            </div>

            <Separator className="my-6" />

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10"
                  >
                    -
                  </Button>
                  <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10"
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  className="flex-1 h-12 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  className="flex-1 h-12"
                  variant="outline"
                  onClick={() => {
                    handleAddToCart();
                    onNavigate('shop');
                  }}
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Card className="p-6">
          <Tabs defaultValue="reviews" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="reviews">Reviews ({reviews.length})</TabsTrigger>
              <TabsTrigger value="details">Product Details</TabsTrigger>
            </TabsList>

            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-8">
                {/* Rating Overview */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-green-600 mb-2">
                      {averageRating.toFixed(1)}
                    </div>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-6 h-6 ${
                            star <= averageRating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground">
                      Based on {reviews.length} reviews
                    </p>
                  </div>

                  <div className="space-y-2">
                    {ratingDistribution.map((dist) => (
                      <div key={dist.stars} className="flex items-center gap-3">
                        <div className="flex items-center gap-1 w-16">
                          <span className="text-sm font-medium">{dist.stars}</span>
                          <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        </div>
                        <Progress value={dist.percentage} className="flex-1 h-2" />
                        <span className="text-sm text-muted-foreground w-12">
                          {dist.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Write a Review */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Your Rating
                      </label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => setUserRating(star)}
                            className="transition-transform hover:scale-110"
                          >
                            <Star
                              className={`w-8 h-8 ${
                                star <= userRating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300 hover:text-yellow-400'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Your Review
                      </label>
                      <Textarea
                        placeholder="Share your experience with this product..."
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        rows={4}
                      />
                    </div>

                    <Button
                      onClick={handleSubmitReview}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      Submit Review
                    </Button>
                  </div>
                </div>

                <Separator />

                {/* Reviews List */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <Card key={review.id} className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold">{review.userName}</span>
                              {review.verified && (
                                <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                                  <CheckCircle className="w-3 h-3 mr-1" />
                                  Verified Purchase
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`w-4 h-4 ${
                                    star <= review.rating
                                      ? 'fill-yellow-400 text-yellow-400'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {new Date(review.date).toLocaleDateString('en-IN', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {review.comment}
                        </p>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="details" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Product Features</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {(product.features || [
                      'Made from 100% sustainable materials',
                      'Biodegradable and compostable',
                      'Zero plastic packaging',
                      'Fair trade certified',
                      'Carbon neutral shipping',
                    ]).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3">Materials</h3>
                  <p className="text-muted-foreground">
                    {product.materials?.join(', ') || 'Bamboo, Organic Cotton, Natural Rubber, Recycled Materials'}
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3">Care Instructions</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Clean with mild soap and water</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Air dry completely before storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Store in a cool, dry place</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
