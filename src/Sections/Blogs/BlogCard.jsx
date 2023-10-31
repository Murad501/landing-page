/* eslint-disable react/prop-types */
import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function BlogCard({ blog }) {
  return (
    <Card className="mt-6 h-full">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={blog.image}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        {blog.title?.length > 30
            ? blog.title.slice(0, 30) + "..."
            : blog.title}
        </Typography>
        <Typography variant="h6" color="blue-gray" className="mb-2">
          {blog.author.name}
        </Typography>
        <Typography>
          {blog.description?.length > 200
            ? blog.description.slice(0, 200) + "..."
            : blog.description}
        </Typography>
        
      </CardBody>
      <CardFooter className="pt-0">
        <Button color="blue-gray">Read More</Button>
      </CardFooter>
    </Card>
  );
}
