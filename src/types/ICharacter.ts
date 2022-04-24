export default interface ICharacter {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  location?: { name: string };
  origin?: { name: string };
  episode?: [{ name: string; episode: string }];
}
