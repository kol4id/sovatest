import GetErrorMessage from "./GetErrorMessage";
export const HandleFetching = async(callback: () => Promise<any>): Promise<[data: any, isLoading: boolean, error: {isObtained: boolean, message: string}]> => {
    let isLoading: boolean = false;
    let error = {isObtained: false, message: '', code: null};
    let data: any = undefined;

    isLoading = true;
    try {
        data = await callback();
    } catch(err: unknown){
        const errorMessage = await GetErrorMessage(err);
        error = {isObtained: true, message: errorMessage, code: null};
    }finally {
        isLoading = false;
    }

    return [data, isLoading, error];
}


