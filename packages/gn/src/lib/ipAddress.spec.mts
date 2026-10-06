import { describe, expect, it } from "vitest";
import {
    ipAddressFromString,
    ipAddressRangeFromOctets,
    ipAddressToString,
} from "./ipAddress.mjs";
import { hexToBytes } from "./hex.mjs";

describe("ipAddressToString", () => {
    it("prints dotted IPv4", () => {
        expect(ipAddressToString(new Uint8Array([192, 0, 2, 1]))).toBe("192.0.2.1");
    });

    it("prints RFC 5280's class-C name constraint as a prefix", () => {
        const octets = hexToBytes("c0000200ffffff00");
        expect(ipAddressToString(octets)).toBe("192.0.2.0/24");
        expect(ipAddressRangeFromOctets(octets)?.prefixLength).toBe(24);
    });

    it("keeps address bits that fall outside the mask", () => {
        const octets = hexToBytes("c0000205ffffff00");
        expect(ipAddressToString(octets)).toBe("192.0.2.5/24");
    });

    it("prints a non-contiguous mask in full", () => {
        const octets = hexToBytes("c0000200ff00ff00");
        expect(ipAddressToString(octets)).toBe("192.0.2.0/255.0.255.0");
        expect(ipAddressRangeFromOctets(octets)?.prefixLength).toBeNull();
    });

    it("prints IPv6 per RFC 5952", () => {
        expect(ipAddressToString(ipv6("2001:db8::1"))).toBe("2001:db8::1");
        expect(ipAddressToString(ipv6("::"))).toBe("::");
        expect(ipAddressToString(ipv6("::1"))).toBe("::1");
        expect(ipAddressToString(ipv6("2001:db8:0:0:1:0:0:1"))).toBe("2001:db8::1:0:0:1");
        expect(ipAddressToString(ipv6("2001:0:0:1:0:0:0:1"))).toBe("2001:0:0:1::1");
        expect(ipAddressToString(ipv6("2001:db8:0:1:1:1:1:1"))).toBe("2001:db8:0:1:1:1:1:1");
    });

    it("prints an IPv4-mapped IPv6 address with a dotted tail", () => {
        expect(ipAddressToString(ipv6("::ffff:192.0.2.1"))).toBe("::ffff:192.0.2.1");
    });

    it("prints an IPv6 name-constraint prefix", () => {
        expect(ipAddressToString(ipAddressFromString("2001:db8::/32"))).toBe("2001:db8::/32");
    });

    it("prints any other length as hex", () => {
        expect(ipAddressToString(new Uint8Array([1, 2, 3]))).toBe("#010203");
        expect(ipAddressRangeFromOctets(new Uint8Array([1, 2, 3]))).toBeNull();
    });
});

describe("ipAddressFromString", () => {
    it("round-trips the RFC 5280 example", () => {
        const octets = ipAddressFromString("192.0.2.0/24");
        expect(bytesToHexLocal(octets)).toBe("c0000200ffffff00");
        expect(ipAddressToString(octets)).toBe("192.0.2.0/24");
    });

    it("parses a bare address as 4 or 16 octets", () => {
        expect(ipAddressFromString("192.0.2.1")).toEqual(new Uint8Array([192, 0, 2, 1]));
        expect(ipAddressFromString("2001:db8::1")).toEqual(ipv6("2001:db8::1"));
        expect(ipAddressFromString("::ffff:192.0.2.1")).toEqual(ipv6("::ffff:192.0.2.1"));
    });

    it("parses an explicit mask", () => {
        expect(bytesToHexLocal(ipAddressFromString("192.0.2.0/255.0.255.0")))
            .toBe("c0000200ff00ff00");
    });

    it("rejects a prefix that is out of range, a mixed family, and bad syntax", () => {
        expect(() => ipAddressFromString("192.0.2.0/33")).toThrow(SyntaxError);
        expect(() => ipAddressFromString("2001:db8::/129")).toThrow(SyntaxError);
        expect(() => ipAddressFromString("192.0.2.0/::")).toThrow(SyntaxError);
        expect(() => ipAddressFromString("not-an-address")).toThrow(SyntaxError);
        expect(() => ipAddressFromString("1::2::3")).toThrow(SyntaxError);
    });
});

function ipv6(text: string): Uint8Array {
    return ipAddressFromString(text);
}

function bytesToHexLocal(bytes: Uint8Array): string {
    return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
}
