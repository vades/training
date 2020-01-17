class BasicType {
    private done: boolean;
    private isNumber: number;
    private isString: string;
    private isArrayNumber: number[];
    private isArrayString: string[];
    private isTuple: [string,number];
    private isEnumNumber: Enumerator;

    public getIsNumber(): number {
        return this.isNumber;
    }

    public setIsNumber(isNumber: number): void {
        this.isNumber = isNumber;
    }

    public getIsString(): string {
        return this.isString;
    }

    public setIsString(isString: string): void {
        this.isString = isString;
    }

    public getIsArrayNumber(): number[] {
        return this.isArrayNumber;
    }

    public setIsArrayNumber(isArrayNumber: number[]): void {
        this.isArrayNumber = isArrayNumber;
    }

    public getIsArrayString(): string[] {
        return this.isArrayString;
    }

    public setIsArrayString(isArrayString: string[]): void {
        this.isArrayString = isArrayString;
    }

    public getIsTuple(): [string,number] {
        return this.isTuple;
    }

    public setIsTuple(isTuple: [string,number]): void {
        this.isTuple = isTuple;
    }

    public getIsEnumNumber(): Enumerator {
        return this.isEnumNumber;
    }

    public setIsEnumNumber(isEnumNumber: Enumerator<any>): void {
        this.isEnumNumber = isEnumNumber;
    }

    public getDone(): boolean {
        return this.done;
    }

    public setDone(done: boolean): void {
        this.done = done;
    }

   

}
export { BasicType };