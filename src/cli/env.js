const parseEnv = () => {
    const prefix = '';
    const envVariables = Object.entries(process.env)
        .filter(([key]) => key.startsWith(prefix))
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');

    if (envVariables) {
        console.log(envVariables);
    } else {
        console.log(`No ${prefix} environment variables found.`);
    }
};

parseEnv();