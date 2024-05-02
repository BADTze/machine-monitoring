// import { PrismaClient } from '@prisma/client'
// import { NextResponse } from 'next/server'
// const prisma = new PrismaClient()

// export async function GET(){
//   try {
    
//   } catch (error) {
    
//   }
// }

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  const allData = await prisma.comp.findMany({
    where: {},
  });

  console.log('allData', allData);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
