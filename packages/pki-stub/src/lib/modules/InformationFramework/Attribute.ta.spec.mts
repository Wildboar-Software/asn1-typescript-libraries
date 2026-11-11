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
const surname = ObjectIdentifier.fromString("2.5.4.4");
const language = ObjectIdentifier.fromString("2.5.4.58");

function utf8(s: string): DERElement {
    const el = new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.utf8String,
    );
    el.utf8String = s;
    return el;
}

function texts(attr: Attribute): string[] {
    return [...attr.iterValuesOmittingContexts()].map((v) => v.utf8String);
}

describe("Attribute.isEmpty()", () => {
    it("is true only when both value sets are missing", () => {
        expect(new Attribute(commonName, []).isEmpty()).toBe(true);
        expect(new Attribute(commonName, [], []).isEmpty()).toBe(true);
        expect(new Attribute(commonName, [utf8("Alice")]).isEmpty()).toBe(false);
        const contextual = new Attribute_valuesWithContext_Item(
            utf8("Alice"),
            [new Context(language, [utf8("en")])],
        );
        expect(new Attribute(commonName, [], [contextual]).isEmpty()).toBe(false);
    });
});

describe("Attribute.merge()", () => {
    it("concatenates values and values with context", () => {
        const english = new Attribute_valuesWithContext_Item(
            utf8("Alicia"),
            [new Context(language, [utf8("es")])],
        );
        const french = new Attribute_valuesWithContext_Item(
            utf8("Alice"),
            [new Context(language, [utf8("fr")])],
        );
        const merged = new Attribute(commonName, [utf8("Al")], [english])
            .merge(new Attribute(commonName, [utf8("Ali")], [french]));
        expect(texts(merged)).toEqual(["Al", "Ali", "Alicia", "Alice"]);
        expect(merged.valuesWithContext).toEqual([english, french]);
        expect(merged.type_.isEqualTo(commonName)).toBe(true);
    });

    it("omits valuesWithContext when neither side has any", () => {
        const merged = new Attribute(commonName, [utf8("Al")])
            .merge(new Attribute(commonName, [utf8("Ali")]));
        expect(merged.valuesWithContext).toBeUndefined();
    });

    it("returns the valued attribute when the other is empty", () => {
        const valued = new Attribute(commonName, [utf8("Alice")]);
        const empty = new Attribute(commonName, []);
        expect(valued.merge(empty)).toBe(valued);
        expect(empty.merge(valued)).toBe(valued);
    });

    it("does not mutate either operand", () => {
        const leftValues = [utf8("Al")];
        const rightValues = [utf8("Ali")];
        const left = new Attribute(commonName, leftValues);
        const right = new Attribute(commonName, rightValues);
        const merged = left.merge(right);
        expect(left.values).toBe(leftValues);
        expect(right.values).toBe(rightValues);
        expect(merged).not.toBe(left);
        expect(merged).not.toBe(right);
        expect(merged.values).toEqual([...leftValues, ...rightValues]);
    });

    it("concatenates unrecognized extensions", () => {
        const leftExt = utf8("left");
        const rightExt = utf8("right");
        const merged = new Attribute(commonName, [utf8("Al")], undefined, [leftExt])
            .merge(new Attribute(commonName, [utf8("Ali")], undefined, [rightExt]));
        expect(merged._unrecognizedExtensionsList).toEqual([leftExt, rightExt]);
    });

    it("keeps extensions from an otherwise empty attribute", () => {
        const extension = utf8("ext");
        const valued = new Attribute(commonName, [utf8("Alice")]);
        const empty = new Attribute(commonName, [], undefined, [extension]);
        const merged = valued.merge(empty);
        expect(merged).not.toBe(valued);
        expect(texts(merged)).toEqual(["Alice"]);
        expect(merged._unrecognizedExtensionsList).toEqual([extension]);
    });

    it("throws when the attribute types differ", () => {
        const left = new Attribute(commonName, [utf8("Alice")]);
        const right = new Attribute(surname, [utf8("Liddell")]);
        expect(() => left.merge(right)).toThrow(/attribute types differ/);
    });
});
