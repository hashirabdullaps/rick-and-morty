export default interface ICharacter {
  id: string;
  name: string;
  image: string;
  status: string;
  location?: { name: string };
  origin?: { name: string };
  episode?: [{ name: string; episode: string }];
}
