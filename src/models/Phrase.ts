import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface PhraseInstance extends Model {
    id: number;
    txt: string;
    author: string;
}

export const Phrase = sequelize.define<PhraseInstance>('Phrase', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    txt: {
        type: DataTypes.STRING
    },
    author: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('author').toUpperCase();
        }
    }
}, {
    tableName: 'phrases',
    timestamps: false
})