export interface TokenResponse {
    tokenData: TokenData;
}

export interface TokenData {
    accessToken: string;
    expiresIn: number;
    refreshToken: string;
    tokenType: string;
}
