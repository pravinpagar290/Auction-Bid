import {config} from 'dotenv';
import express from 'express';
import cors from 'cors';


const app = express();
config({
    path: './.env'

});

