import { describe, expect, it } from "vitest";
import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    ObjectIdentifier,
} from "@wildboar/asn1";
import { Attribute } from "./Attribute.ta.mjs";
import { Attribute_valuesWithContext_Item } from "./Attribute-valuesWithContext-Item.ta.mjs";
import { Context } from "./Context.ta.mjs";

const commonName = ObjectIdentifier.fromString("2.5.4.3");
const languageContext = ObjectIdentifier.fromString("2.5.18.3");

function utf8Element(s: string): DERElement {
    const el = new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.utf8String,
    );
    el.utf8String = s;
    return el;
}

describe("Attribute iterator", () => {
    it("yields nothing when the attribute has no values", () => {
        const attr = new Attribute(commonName, []);
        expect([...attr]).toEqual([]);
    });

    it("yields context-free values in array order", () => {
        const alice = utf8Element("Alice");
        const bob = utf8Element("Bob");
        const attr = new Attribute(commonName, [alice, bob]);
        expect([...attr]).toEqual([alice, bob]);
    });

    it("yields valuesWithContext items with their contexts removed", () => {
        const alice = utf8Element("Alice");
        const bob = utf8Element("Bob");
        const attr = new Attribute(commonName, [], [
            new Attribute_valuesWithContext_Item(
                alice,
                [new Context(languageContext, [utf8Element("en")])],
            ),
            new Attribute_valuesWithContext_Item(
                bob,
                [new Context(languageContext, [utf8Element("fr")])],
            ),
        ]);
        expect([...attr]).toEqual([alice, bob]);
    });

    it("yields context-free values then contexted values", () => {
        const alice = utf8Element("Alice");
        const bob = utf8Element("Bob");
        const attr = new Attribute(commonName, [alice], [
            new Attribute_valuesWithContext_Item(
                bob,
                [new Context(languageContext, [utf8Element("fr")])],
            ),
        ]);
        expect([...attr]).toEqual([alice, bob]);
    });

    it("treats an empty valuesWithContext array like an absent one", () => {
        const alice = utf8Element("Alice");
        const attr = new Attribute(commonName, [alice], []);
        expect([...attr]).toEqual([alice]);
    });

    it("is usable with for...of without allocating an array", () => {
        const alice = utf8Element("Alice");
        const bob = utf8Element("Bob");
        const attr = new Attribute(commonName, [alice], [
            new Attribute_valuesWithContext_Item(
                bob,
                [new Context(languageContext, [utf8Element("fr")])],
            ),
        ]);
        const seen: string[] = [];
        for (const value of attr) {
            seen.push(value.utf8String);
        }
        expect(seen).toEqual(["Alice", "Bob"]);
    });
});
