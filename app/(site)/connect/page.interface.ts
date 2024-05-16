export interface IUICoinInstance {
	protocol: string | undefined;
	type: string | undefined;
	port: number | undefined;
	backends: string | undefined;
	shareDiff?: number | undefined;
}
