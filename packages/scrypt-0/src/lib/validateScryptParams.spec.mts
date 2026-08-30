import { describe, expect, it } from "vitest";
import { Scrypt_params } from "./modules/Scrypt-0/Scrypt-params.ta.mjs";
import { validateScryptParams } from "./validateScryptParams.mjs";

function params (
    N: number | bigint,
    r: number | bigint,
    p: number | bigint,
    keyLength?: number | bigint,
    salt: Uint8Array = new Uint8Array(0),
): Scrypt_params {
    return new Scrypt_params(salt, N, r, p, keyLength);
}

describe("validateScryptParams", () => {
    describe("RFC 7914 §12 / §13 test-vector parameters", () => {
        it("accepts N=16, r=1, p=1, dkLen=64", () => {
            expect(validateScryptParams(params(16, 1, 1, 64))).toBe(true);
        });

        it("accepts N=1024, r=8, p=16, dkLen=64", () => {
            expect(validateScryptParams(params(1024, 8, 16, 64))).toBe(true);
        });

        it("accepts N=16384, r=8, p=1, dkLen=64", () => {
            expect(validateScryptParams(params(16384, 8, 1, 64))).toBe(true);
        });

        it("accepts N=1048576, r=8, p=1, dkLen=64", () => {
            expect(validateScryptParams(params(1048576, 8, 1, 64))).toBe(true);
        });

        it("accepts the PKCS#8 example N=1048576, r=8, p=1 without keyLength", () => {
            expect(validateScryptParams(params(1048576, 8, 1))).toBe(true);
        });
    });

    describe("costParameter N", () => {
        it("rejects N=1 (must be larger than 1)", () => {
            expect(validateScryptParams(params(1, 1, 1))).toBe(false);
        });

        it("rejects N=0", () => {
            expect(validateScryptParams(params(0, 1, 1))).toBe(false);
        });

        it("rejects a negative N", () => {
            expect(validateScryptParams(params(-2, 1, 1))).toBe(false);
        });

        it("rejects a non-power-of-two N", () => {
            expect(validateScryptParams(params(3, 1, 1))).toBe(false);
            expect(validateScryptParams(params(6, 8, 1))).toBe(false);
            expect(validateScryptParams(params(1023, 8, 1))).toBe(false);
        });

        it("accepts N=2 (smallest power of two greater than 1)", () => {
            expect(validateScryptParams(params(2, 1, 1))).toBe(true);
        });

        it("accepts N=2^15 with r=1 (N < 2^16)", () => {
            expect(validateScryptParams(params(32768, 1, 1))).toBe(true);
        });

        it("rejects N=2^16 with r=1 (N must be < 2^(128*r/8))", () => {
            expect(validateScryptParams(params(65536, 1, 1))).toBe(false);
        });

        it("accepts N=2^16 with r=2 (bound grows with r)", () => {
            expect(validateScryptParams(params(65536, 2, 1))).toBe(true);
        });

        it("accepts a bigint power-of-two N", () => {
            expect(validateScryptParams(params(1024n, 8n, 1n, 64n))).toBe(true);
        });
    });

    describe("blockSize r", () => {
        it("rejects r=0", () => {
            expect(validateScryptParams(params(16, 0, 1))).toBe(false);
        });

        it("rejects a negative r", () => {
            expect(validateScryptParams(params(16, -1, 1))).toBe(false);
        });

        it("rejects a non-integer r", () => {
            expect(validateScryptParams(params(16, 1.5, 1))).toBe(false);
        });
    });

    describe("parallelizationParameter p", () => {
        it("rejects p=0", () => {
            expect(validateScryptParams(params(16, 1, 0))).toBe(false);
        });

        it("rejects a negative p", () => {
            expect(validateScryptParams(params(16, 1, -1))).toBe(false);
        });

        it("accepts the maximum p for r=1 (p = floor((2^32-1)/4))", () => {
            expect(validateScryptParams(params(16, 1, 1073741823))).toBe(true);
        });

        it("rejects p one above the r=1 maximum", () => {
            expect(validateScryptParams(params(16, 1, 1073741824))).toBe(false);
        });

        it("rejects p that is valid for r=1 but too large for r=8", () => {
            expect(validateScryptParams(params(16, 8, 1073741823))).toBe(false);
        });
    });

    describe("keyLength dkLen", () => {
        it("accepts omitted keyLength", () => {
            expect(validateScryptParams(params(16, 1, 1))).toBe(true);
        });

        it("rejects dkLen=0", () => {
            expect(validateScryptParams(params(16, 1, 1, 0))).toBe(false);
        });

        it("rejects a negative dkLen", () => {
            expect(validateScryptParams(params(16, 1, 1, -1))).toBe(false);
        });

        it("accepts the RFC maximum dkLen (2^32-1)*32", () => {
            expect(validateScryptParams(params(16, 1, 1, 137438953440))).toBe(true);
        });

        it("rejects dkLen one above the RFC maximum", () => {
            expect(validateScryptParams(params(16, 1, 1, 137438953441))).toBe(false);
        });

        it("accepts a bigint dkLen", () => {
            expect(validateScryptParams(params(16, 1, 1, 32n))).toBe(true);
        });
    });

    describe("salt", () => {
        it("accepts an empty salt", () => {
            expect(validateScryptParams(params(16, 1, 1, 64, new Uint8Array(0))))
                .toBe(true);
        });

        it("accepts a non-empty salt", () => {
            expect(validateScryptParams(params(
                16, 1, 1, 64, new Uint8Array([ 0x4d, 0x6f, 0x75, 0x73, 0x65 ]),
            ))).toBe(true);
        });
    });
});
