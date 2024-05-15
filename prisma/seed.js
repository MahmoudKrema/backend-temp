import prisma from '../src/loaders/prisma.js';
import Password from '../src/utils/password.js';


async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'mahmoud.krema222@gmail.com,' },
    update: {},
    create: {
      email: 'mahmoud.krema222@gmail.com',
      username: 'MahmoudKrema',
      password: await Password.hash('123'),
      role: 'admin',

    },
  })

  console.log({ admin })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })