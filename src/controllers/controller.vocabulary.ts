import { Search } from '@/types';
import * as SQLite from 'expo-sqlite';
import { ModelVocabulary } from '@/models';

interface ControllerVocabulary {
 create: (
  vocabulary: ModelVocabulary,
  idCategory: number,
 ) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 enable: (
  idVocabulary: number,
 ) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 disable: (
  idVocabulary: number,
 ) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 edit: (
  vocabulary: ModelVocabulary,
 ) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 verify: (id: number) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 search: (
  search: Search,
  category: string,
 ) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 showAllEnable: (
  idCategory: number,
 ) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
 showAllDisable: (
  idCategory: number,
 ) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[] | undefined>;
}
export type { ControllerVocabulary };
