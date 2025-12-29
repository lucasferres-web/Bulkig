
export interface UserData {
  weight: number;
  height: number;
  age: number;
  sex: 'male' | 'female';
}

export interface CalculatedMacros {
  totalCalories: number;
  protein: number;
  fat: number;
  carbs: number;
}

export interface UserPreferences {
  numMeals: 4 | 5 | 6;
  likesEggs: boolean;
  legumes: string[];
  dairy: string[];
  nuts: string[];
  fruits: string[];
  lactoseIntolerant: boolean;
  glutenIntolerant: boolean;
  likesWhey: boolean;
  likesChocolate: boolean;
}

export interface Substitution {
  item: string;
  alternatives: string[]; // e.g., "100g Arroz -> 100g Macarrão cozido, 120g Batata"
}

export interface Meal {
  time: string;
  title: string;
  practical: {
    description: string;
    substitutions: Substitution[];
  };
  elaborate: {
    description: string;
    substitutions: Substitution[];
  };
}

export interface DietPlan {
  title: string;
  meals: Meal[];
}
