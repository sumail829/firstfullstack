import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function DELETE(request, { params }) {
  const id = params.id;

  try {
    const post = await prisma.post.delete({
      where: { id: Number(id) }, // Ensure id is correctly formatted
    });
    return NextResponse.json(post); // Return the deleted post data as the response
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
