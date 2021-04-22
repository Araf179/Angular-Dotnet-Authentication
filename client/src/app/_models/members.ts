export interface Member {
    UserName: string;
    Gender: string;
    DateOfBirth: string;
    KnownAs: string;
    Created: string;
    LastActive: string;
    Introduction: string;
    LookingFor: string;
    Interests: string;
    City: string;
    Country: string;
    Photos: Photo[];
}

export interface Photo {
    Url: string;
    IsMain: boolean;
}