import {
    ASN1ConstructionError,
    ASN1Error,
    ASN1OverflowError,
    ASN1SizeError,
    type BIT_STRING,
    type INTEGER,
    type OCTET_STRING,
} from "@wildboar/asn1";

function asBigInt (value: INTEGER): bigint {
    return typeof value === "bigint" ? value : BigInt(value);
}

export
function assertIntegerRange (value: INTEGER, min: number, max: number, name: string): void {
    const n = asBigInt(value);
    if (n < BigInt(min) || n > BigInt(max)) {
        throw new ASN1OverflowError(`${name} violates INTEGER constraint`);
    }
}

export
function assertOctetSize (value: OCTET_STRING, min: number, max: number | undefined, name: string): void {
    if (value.length < min || (max !== undefined && value.length > max)) {
        throw new ASN1SizeError(`${name} violates SIZE constraint`);
    }
}

export
function assertBitSize (value: BIT_STRING, size: number, name: string): void {
    if (value.length !== size) {
        throw new ASN1SizeError(`${name} violates SIZE constraint`);
    }
}

export
function assertSequenceSize (length: number, min: number, max: number | undefined, name: string): void {
    if (length < min || (max !== undefined && length > max)) {
        throw new ASN1SizeError(`${name} violates SIZE constraint`);
    }
}

/** Quality is 0..100, quality-not-supported (254), or no-value-available (255). */
export
function assertQuality (value: INTEGER, name: string): void {
    const n = asBigInt(value);
    if ((n >= 0n && n <= 100n) || n === 254n || n === 255n) {
        return;
    }
    throw new ASN1Error(`${name} violates Quality constraint`);
}

export
function assertSubtypeRequiresType (typePresent: boolean, subtypePresent: boolean, name: string): void {
    if (!typePresent && subtypePresent) {
        throw new ASN1ConstructionError(`${name} requires the biometric type when the subtype is present`);
    }
}
