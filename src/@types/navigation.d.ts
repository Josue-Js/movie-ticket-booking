import { RootStackParamList } from '../router';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}