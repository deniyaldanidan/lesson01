export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

export class CatDto extends CreateCatDto {
  id: number;
}

export class UpdateCatDto {
  name?: string;
  age?: number;
  breed?: string;
}
