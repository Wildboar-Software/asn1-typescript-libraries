// Run with `npx vitest bench --run src/lib/matching` from packages/x500.
import { describe, expect, test } from "vitest";
import { normalizeUriMatchAssertion } from "./uriMatch.mjs";

const localNormalize = normalizeUriMatchAssertion;

function isHexDigit (character: string): boolean {
    return /^[0-9A-Fa-f]$/.test(character);
}

function isUnreserved (code: number): boolean {
    return (code >= 0x41 && code <= 0x5A)
        || (code >= 0x61 && code <= 0x7A)
        || (code >= 0x30 && code <= 0x39)
        || code === 0x2D
        || code === 0x2E
        || code === 0x5F
        || code === 0x7E;
}

function oldNormalizePercentEncoding (input: string): string {
    let output = "";
    for (let i = 0; i < input.length; i++) {
        if (
            input[i] === "%"
            && i + 2 < input.length
            && isHexDigit(input[i + 1])
            && isHexDigit(input[i + 2])
        ) {
            const hex = input.slice(i + 1, i + 3).toUpperCase();
            const code = Number.parseInt(hex, 16);
            if (isUnreserved(code)) {
                output += String.fromCharCode(code);
            } else {
                output += "%" + hex;
            }
            i += 2;
            continue;
        }
        output += input[i];
    }
    return output;
}

const HEX_UPPER = "0123456789ABCDEF";

function hexValue (code: number): number {
    if (code >= 0x30 && code <= 0x39) {
        return code - 0x30;
    }
    if (code >= 0x41 && code <= 0x46) {
        return code - 0x41 + 10;
    }
    if (code >= 0x61 && code <= 0x66) {
        return code - 0x61 + 10;
    }
    return -1;
}

function newNormalizePercentEncoding (input: string): string {
    const len = input.length;
    let output = "";
    for (let i = 0; i < len; i++) {
        if (input.charCodeAt(i) === 0x25 && i + 2 < len) {
            const h1 = hexValue(input.charCodeAt(i + 1));
            const h2 = hexValue(input.charCodeAt(i + 2));
            if (h1 >= 0 && h2 >= 0) {
                const code = (h1 << 4) | h2;
                if (isUnreserved(code)) {
                    output += String.fromCharCode(code);
                } else {
                    output += "%" + HEX_UPPER[h1] + HEX_UPPER[h2];
                }
                i += 2;
                continue;
            }
        }
        output += input[i];
    }
    return output;
}

const percentPath = "/a%2Fb%20c%7Ed%2Epath/users/%6Aonathan%2Ewilbur";
const typicalUri = "HTTP://Example.COM:80/~user/%7Ehome/a%2Fb?x=%3d#frag%23";

let sink = 0;

describe("URI percent-encoding without per-nibble regex", () => {
    test("percent-heavy path", async ({ bench }) => {
        expect(newNormalizePercentEncoding(percentPath)).toBe(
            oldNormalizePercentEncoding(percentPath),
        );
        const result = await bench.compare(
            bench("regex isHexDigit", () => {
                sink += oldNormalizePercentEncoding(percentPath).length;
            }),
            bench("charCode hex", () => {
                sink += newNormalizePercentEncoding(percentPath).length;
            }),
        );
        expect(result.get("charCode hex")).toBeFasterThan(result.get("regex isHexDigit"));
    });
});

describe("normalizeUriMatchAssertion uses the charCode percent encoder", () => {
    test("typical HTTP URI still normalizes", () => {
        expect(localNormalize(typicalUri)).toBe("http://example.com/~user/~home/a%2Fb?x=%3D#frag%23");
        expect(newNormalizePercentEncoding(percentPath)).toBe(
            oldNormalizePercentEncoding(percentPath),
        );
    });
});

export { sink };
