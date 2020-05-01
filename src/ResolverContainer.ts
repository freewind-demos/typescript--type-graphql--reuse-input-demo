import UiQueryResolver from './RecipeResolver';
import RecipeService from './RecipeService';

const recipeResolver = new UiQueryResolver(new RecipeService());

const ResolveContainer = {
  get: (ResolveClass: new (...args: any[]) => any) => {
    if (ResolveClass === UiQueryResolver) {
      return recipeResolver;
    }
    return new ResolveClass();
  }
}

export default ResolveContainer;
