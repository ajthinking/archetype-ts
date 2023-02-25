export declare class File {
    private filePath;
    private sourceFile;
    constructor(filePath: string);
    addTypeAliasFromObject(name: string, object: {
        [key: string]: unknown;
    }): this;
    save(): this;
}
