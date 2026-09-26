import { describe, expect, it } from "vitest";
import rdnSequenceFromString from "./fromstr.mjs";

function parse (dn: string): string[][][] {
    const rdns: string[][][] = [];
    for (const rdn of rdnSequenceFromString(dn)) {
        const atavs: string[][] = [];
        for (const atav of rdn) {
            atavs.push([atav.type, atav.value]);
        }
        rdns.push(atavs);
    }
    return rdns;
}

function expectSyntax (dn: string, message: string): void {
    let caught: unknown;
    try {
        parse(dn);
    } catch (error) {
        caught = error;
    }
    expect(caught).toBeInstanceOf(SyntaxError);
    expect((caught as SyntaxError).message).toBe(message);
}

describe("rdnSequenceFromString()", () => {
    it("yields nothing for an empty distinguished name and returns void", () => {
        const iterator = rdnSequenceFromString("");
        expect(iterator.next()).toEqual({ done: true, value: undefined });
        expect(parse("")).toEqual([]);
    });

    it("returns void from the inner iterator", () => {
        const rdn = rdnSequenceFromString("cn=Sam").next().value;
        expect(rdn).toBeDefined();
        expect(rdn!.next().value).toMatchObject({ type: "cn", value: "Sam" });
        expect(rdn!.next()).toEqual({ done: true, value: undefined });
    });

    it("parses the RFC 4514 examples without unescaping values", () => {
        expect(parse("UID=jsmith,DC=example,DC=net")).toEqual([
            [["UID", "jsmith"]],
            [["DC", "example"]],
            [["DC", "net"]],
        ]);
        expect(parse("OU=Sales+CN=J.  Smith,DC=example,DC=net")).toEqual([
            [["OU", "Sales"], ["CN", "J.  Smith"]],
            [["DC", "example"]],
            [["DC", "net"]],
        ]);
        expect(parse("CN=James \\\"Jim\\\" Smith\\, III,DC=example,DC=net")).toEqual([
            [["CN", "James \\\"Jim\\\" Smith\\, III"]],
            [["DC", "example"]],
            [["DC", "net"]],
        ]);
        const carriageReturn = parse("CN=Before\\0dAfter,DC=example,DC=net");
        expect(carriageReturn[0][0][1]).toBe("Before\\0dAfter");
        expect(carriageReturn[0][0][1].includes("\r")).toBe(false);
        expect(parse("1.3.6.1.4.1.1466.0=#04024869")).toEqual([
            [["1.3.6.1.4.1.1466.0", "#04024869"]],
        ]);
        expect(parse("CN=Lu\\C4\\8Di\\C4\\87")).toEqual([
            [["CN", "Lu\\C4\\8Di\\C4\\87"]],
        ]);
    });

    it("keeps escapes and splits only on unescaped commas and pluses", () => {
        expect(parse("sn=chunga\\+bunga\\=monkey\\00banana\\\\,st=Florida,c=US")).toEqual([
            [["sn", "chunga\\+bunga\\=monkey\\00banana\\\\"]],
            [["st", "Florida"]],
            [["c", "US"]],
        ]);
        expect(parse("cn=Smith\\, Jr+gn=Jonathan")).toEqual([
            [["cn", "Smith\\, Jr"], ["gn", "Jonathan"]],
        ]);
        expect(parse("cn=foo\\\\,ou=People")).toEqual([
            [["cn", "foo\\\\"]],
            [["ou", "People"]],
        ]);
        expect(parse("cn=a\\\\+ou=b")).toEqual([
            [["cn", "a\\\\"], ["ou", "b"]],
        ]);
        expect(parse("cn=foo\\2Cou=bar")).toEqual([
            [["cn", "foo\\2Cou=bar"]],
        ]);
        expect(parse("cn=a=b")).toEqual([
            [["cn", "a=b"]],
        ]);
    });

    it("slices the attribute type at the first equals sign", () => {
        expect(parse("01.2=foo")).toEqual([[["01.2", "foo"]]]);
        expect(parse("foo_bar=baz")).toEqual([[["foo_bar", "baz"]]]);
        expect(parse("cn =foo")).toEqual([[["cn ", "foo"]]]);
        expect(parse("cn=foo ")).toEqual([[["cn", "foo "]]]);
        expect(parse("cn=a\"b")).toEqual([[["cn", "a\"b"]]]);
    });

    it("throws a syntax error with a lowercase message", () => {
        expectSyntax("cn", "malformed attribute type and value");
        expectSyntax("cn=foo,", "malformed attribute type and value");
        expectSyntax("cn=foo+", "malformed attribute type and value");
        expectSyntax(",cn=foo", "malformed attribute type and value");
        expectSyntax("cn=foo,,ou=bar", "malformed attribute type and value");
        expectSyntax("+cn=a", "malformed attribute type and value");
    });
});
