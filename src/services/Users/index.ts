const users = [
  {
    id: 1,
    firstName: 'احمد',
    lastName: 'حمیدی',
    nationalCode: '0019682345',
    phoneNumber: '09123456732',
    creationDate: '2021-09-10',
    deletable: false,
    isDeleted: false,
    role: 'SUPER_ADMIN'
  },
  {
    id: 2,
    firstName: 'امیرحسین',
    lastName: 'عظیمی',
    nationalCode: '0012387554',
    phoneNumber: '09124678563',
    creationDate: '2022-01-11',
    deletable: false,
    isDeleted: false,
    role: 'ADMIN'
  },
  {
    id: 3,
    firstName: 'کاویان',
    lastName: 'کریمی',
    nationalCode: '0027899432',
    phoneNumber: '09198765566',
    creationDate: '2022-04-10',
    deletable: false,
    isDeleted: false,
    role: 'ADMIN'
  },
  {
    id: 4,
    firstName: 'محمد',
    lastName: 'علیزاده',
    nationalCode: '0018897865',
    phoneNumber: '09213478895',
    creationDate: '2021-03-27',
    deletable: true,
    isDeleted: false,
    role: 'USER'
  },
  {
    id: 5,
    firstName: 'افرا',
    lastName: 'صالحی',
    nationalCode: '0023388952',
    phoneNumber: '09129900823',
    creationDate: '2022-02-14',
    deletable: true,
    isDeleted: false,
    role: 'USER'
  },
  {
    id: 6,
    firstName: 'کمال',
    lastName: 'اکبری',
    nationalCode: '09197654467',
    creationDate: '2022-03-17',
    deletable: true,
    isDeleted: false,
    role: 'USER'
  },
  {
    id: 7,
    firstName: 'رضا',
    lastName: 'شریفی پور',
    nationalCode: '0023322145',
    phoneNumber: '09112343257',
    creationDate: '2022-03-27',
    deletable: true,
    isDeleted: false,
    role: 'USER'
  },
  {
    id: 8,
    firstName: 'رحیم',
    lastName: 'محمدی',
    nationalCode: '0015566743',
    phoneNumber: '09214490879',
    creationDate: '2022-04-25',
    deletable: true,
    isDeleted: false,
    role: 'USER'
  },
]

export const getUsers = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve({ status: 200, data: users }), 2000);
  })
}