const logLevels = {
    SILENT : 0,
    TRACE : 1,
    DEBUG : 2,
    INFO : 3,
    WARN : 4,
    ERROR : 5,
    FATAL : 6,
} as const;

type TypeLogLevel = keyof typeof logLevels;
const minLogLevelString : string = process.env.NEXT_PUBLIC_LOG_LEVEL || 'INFO';
const minLogLevel = logLevels[minLogLevelString.toLocaleUpperCase() as TypeLogLevel] || logLevels.INFO;

const logger = {
    trace : (message:string, ...others: unknown[]) => {
        if(minLogLevel <= logLevels.TRACE){
            console.trace(`TRACE:${message}`, ...others);
        }
    },
    debug : (message:string, ...others: unknown[]) => {
        if(minLogLevel <= logLevels.DEBUG){
            console.trace(`DEBUG:${message}`, ...others);
        }
    },
    info : (message:string, ...others: unknown[]) => {
        if(minLogLevel <= logLevels.INFO){
            console.trace(`INFO:${message}`, ...others);
        }
    },
    warn : (message:string, ...others: unknown[]) => {
        if(minLogLevel <= logLevels.WARN){
            console.trace(`WARN:${message}`, ...others);
        }
    },
    error : (message:string, ...others: unknown[]) => {
        if(minLogLevel <= logLevels.ERROR){
            console.trace(`INFO:${message}`, ...others);
        }
    },
    fatal : (message:string, ...others: unknown[]) => {
        if(minLogLevel <= logLevels.FATAL){
            console.trace(`FATAL:${message}`, ...others);
        }
    }
};

export default logger;