import { Buffer } from "node:buffer";
import { describe, expect, it } from "vitest";
import { AddRequest } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/AddRequest.ta.mjs";
import { AttributeValueAssertion } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/AttributeValueAssertion.ta.mjs";
import { MatchingRuleAssertion } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/MatchingRuleAssertion.ta.mjs";
import { ModifyDNRequest } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/ModifyDNRequest.ta.mjs";
import { ModifyRequest } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/ModifyRequest.ta.mjs";
import { ModifyRequest_changes_change } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/ModifyRequest-changes-change.ta.mjs";
import { PartialAttribute } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/PartialAttribute.ta.mjs";
import { SearchResultEntry } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/SearchResultEntry.ta.mjs";
import { SubstringFilter } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/SubstringFilter.ta.mjs";
import stringifyFilter from "../lib/filterToString.mjs";
import { formatLdifAttribute, formatLdifAttributes, rfc4515Substrings } from "../lib/textual.mjs";

const utf8 = (text: string): Buffer => Buffer.from(text, "utf8");

describe("RFC 4515 strings", () => {
    it("writes an equality assertion and escapes filter metacharacters", () => {
        const ava = new AttributeValueAssertion(utf8("cn"), utf8("a*(b)\\"));
        expect(ava.toString()).toBe("cn=a\\2a\\28b\\29\\5c");
        expect(ava.toJSON()).toEqual({
            attributeDesc: "cn",
            assertionValue: { hex: utf8("a*(b)\\").toString("hex"), utf8: "a*(b)\\" },
        });
    });

    it("canonicalizes a substring filter and keeps JSON in SEQUENCE order", () => {
        const filter = new SubstringFilter(utf8("cn"), [
            { final: utf8("qux") },
            { any_: utf8("bar") },
            { any_: utf8("b*z") },
            { initial: utf8("foo") },
        ]);
        expect(filter.toString()).toBe("(cn=foo*bar*b\\2az*qux)");
        expect(new SubstringFilter(utf8("x-ä"), [{ initial: utf8("a") }]).toJSON().type)
            .toBe("x-ä");
        expect(filter.toJSON()).toEqual({
            type: "cn",
            substrings: [
                { final: { hex: utf8("qux").toString("hex"), utf8: "qux" } },
                { any: { hex: utf8("bar").toString("hex"), utf8: "bar" } },
                { any: { hex: utf8("b*z").toString("hex"), utf8: "b*z" } },
                { initial: { hex: utf8("foo").toString("hex"), utf8: "foo" } },
            ],
        });
        expect(stringifyFilter({ substrings: filter })).toBe(filter.toString());
    });

    it("joins several any-substrings with a single star", () => {
        const filter = new SubstringFilter(utf8("cn"), [
            { any_: utf8("a") },
            { any_: utf8("b") },
        ]);
        expect(filter.toString()).toBe("(cn=*a*b*)");
        expect(stringifyFilter({ substrings: filter })).toBe("(cn=*a*b*)");
    });

    it("writes each extensible-match shape from RFC 4515", () => {
        const value = utf8("A");
        expect(new MatchingRuleAssertion(
            undefined,
            utf8("cn"),
            value,
            false,
        ).toString()).toBe("(cn:=A)");
        expect(new MatchingRuleAssertion(
            utf8("2.5.13.2"),
            utf8("cn"),
            value,
            true,
        ).toString()).toBe("(cn:dn:2.5.13.2:=A)");
        expect(new MatchingRuleAssertion(
            utf8("2.5.13.2"),
            undefined,
            value,
            false,
        ).toString()).toBe("(:2.5.13.2:=A)");
        const withDn = new MatchingRuleAssertion(
            utf8("2.5.13.2"),
            utf8("cn"),
            value,
            true,
        );
        expect(withDn.toJSON()).toEqual({
            matchingRule: "2.5.13.2",
            type: "cn",
            matchValue: { hex: utf8("A").toString("hex"), utf8: "A" },
            dnAttributes: true,
        });
        expect(new MatchingRuleAssertion(undefined, utf8("cn"), value, false).toJSON())
            .toEqual({ type: "cn", matchValue: { hex: utf8("A").toString("hex"), utf8: "A" } });
        expect(new MatchingRuleAssertion(utf8("x-ä"), undefined, value, false).toJSON())
            .toEqual({ matchingRule: "x-ä", matchValue: { hex: utf8("A").toString("hex"), utf8: "A" } });
    });

    it("base64-encodes an assertion value that is not UTF-8", () => {
        const binary = Uint8Array.from([0xff, 0x00, 0xfe]);
        const encoded = Buffer.from(binary).toString("base64");
        expect(new AttributeValueAssertion(utf8("userPassword"), binary).toString())
            .toBe(`userPassword=${encoded}`);
        expect(new AttributeValueAssertion(utf8("userPassword"), binary).toJSON())
            .toEqual({
                attributeDesc: "userPassword",
                assertionValue: { hex: "ff00fe" },
            });
    });
});

describe("LDIF", () => {
    it("base64-encodes values that are not SAFE-STRINGs and folds long lines", () => {
        const name = utf8("Jäs");
        expect(formatLdifAttribute("sn", name)).toBe(`sn:: ${name.toString("base64")}`);
        expect(formatLdifAttribute("cn", utf8(":hidden"))).toBe(
            `cn:: ${utf8(":hidden").toString("base64")}`,
        );
        const long = utf8("a".repeat(80));
        expect(formatLdifAttribute("cn", long)).toBe(
            "cn: " + "a".repeat(72) + "\n " + "a".repeat(8),
        );
        expect(formatLdifAttribute("cn", utf8("Ada "))).toBe(
            `cn:: ${utf8("Ada ").toString("base64")}`,
        );
        const foldedSpace = utf8("a".repeat(71) + " " + "b".repeat(10));
        const folded = formatLdifAttribute("cn", foldedSpace);
        expect(folded.split("\n").every((physical) => !physical.endsWith(" ")))
            .toBe(true);
        expect(folded.replace(/\n /g, "")).toBe(
            "cn: " + "a".repeat(71) + " " + "b".repeat(10),
        );
        const twoSpaces = utf8("a".repeat(70) + "  " + "b".repeat(10));
        const foldedTwo = formatLdifAttribute("cn", twoSpaces);
        expect(foldedTwo.split("\n").every((physical) => !physical.endsWith(" ")))
            .toBe(true);
        expect(foldedTwo.replace(/\n /g, "")).toBe(
            "cn: " + "a".repeat(70) + "  " + "b".repeat(10),
        );
    });

    it("stringifies an attribute, an add, and a search entry", () => {
        const cn = new PartialAttribute(utf8("cn"), [utf8("Ada"), utf8("A")]);
        const empty = new PartialAttribute(utf8("description"), []);
        expect(cn.toString()).toBe("cn: Ada\ncn: A");
        expect(cn.toJSON()).toEqual({
            type: "cn",
            vals: [
                { hex: utf8("Ada").toString("hex"), utf8: "Ada" },
                { hex: utf8("A").toString("hex"), utf8: "A" },
            ],
        });
        expect(empty.toString()).toBe("");
        expect(empty.toJSON()).toEqual({ type: "description", vals: [] });

        const photo = Uint8Array.from([0xff, 0xd8]);
        const entry = new SearchResultEntry(utf8("cn=Ada"), [
            cn,
            new PartialAttribute(utf8("jpegPhoto"), [photo]),
        ]);
        expect(entry.toString()).toBe(
            "dn: cn=Ada\ncn: Ada\ncn: A\njpegPhoto:: /9g=",
        );
        expect(entry.toJSON()).toEqual({
            objectName: "cn=Ada",
            attributes: [
                {
                    type: "cn",
                    vals: [
                        { hex: utf8("Ada").toString("hex"), utf8: "Ada" },
                        { hex: utf8("A").toString("hex"), utf8: "A" },
                    ],
                },
                { type: "jpegPhoto", vals: [{ hex: "ffd8" }] },
            ],
        });

        const add = new AddRequest(utf8("cn=Ada"), [cn, empty]);
        expect(add.toString()).toBe("dn: cn=Ada\nchangetype: add\ncn: Ada\ncn: A");
        expect(add.toJSON().attributes).toHaveLength(2);
        const nonAscii = new AddRequest(utf8("cn=Jäs"), []);
        expect(nonAscii.toJSON().entry).toBe("cn=Jäs");
        expect(new SearchResultEntry(utf8("cn=Jäs"), []).toJSON().objectName).toBe("cn=Jäs");
    });

    it("stringifies modify and moddn records", () => {
        const modify = new ModifyRequest(utf8("cn=Ada"), [
            new ModifyRequest_changes_change(
                0,
                new PartialAttribute(utf8("cn"), [utf8("Augusta")]),
            ),
            new ModifyRequest_changes_change(
                1,
                new PartialAttribute(utf8("sn"), []),
            ),
        ]);
        expect(modify.toString()).toBe([
            "dn: cn=Ada",
            "changetype: modify",
            "add: cn",
            "cn: Augusta",
            "-",
            "delete: sn",
            "-",
        ].join("\n"));
        expect(modify.toJSON()).toEqual({
            object: "cn=Ada",
            changes: [
                {
                    operation: "add",
                    modification: {
                        type: "cn",
                        vals: [{ hex: utf8("Augusta").toString("hex"), utf8: "Augusta" }],
                    },
                },
                { operation: "delete", modification: { type: "sn", vals: [] } },
            ],
        });

        const moddn = new ModifyDNRequest(
            utf8("cn=Ada,dc=example,dc=com"),
            utf8("cn=Augusta"),
            true,
            utf8("ou=people,dc=example,dc=com"),
        );
        expect(moddn.toString()).toBe([
            "dn: cn=Ada,dc=example,dc=com",
            "changetype: moddn",
            "newrdn: cn=Augusta",
            "deleteoldrdn: 1",
            "newsuperior: ou=people,dc=example,dc=com",
        ].join("\n"));
        expect(new ModifyDNRequest(utf8("cn=Ada"), utf8("cn=A"), false).toJSON())
            .toEqual({
                entry: "cn=Ada",
                newrdn: "cn=A",
                deleteoldrdn: false,
            });
    });

    it("reads substring choices and LDIF values from iterators", () => {
        expect(rfc4515Substrings([
            { final: utf8("qux") },
            { any_: utf8("bar") },
            { initial: utf8("foo") },
        ].values())).toBe("foo*bar*qux");
        expect(formatLdifAttributes("cn", [utf8("Ada"), utf8("Augusta")].values()))
            .toBe("cn: Ada\ncn: Augusta");
        expect(formatLdifAttributes("cn", [].values())).toBe("");
    });
});
