import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    ObjectIdentifier,
} from "@wildboar/asn1";
import { Context } from "./Context.ta.mjs";

const language = ObjectIdentifier.fromString("2.5.4.58");
const locale = ObjectIdentifier.fromString("2.5.4.57");

function utf8(s: string): DERElement {
    const el = new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.utf8String,
    );
    el.utf8String = s;
    return el;
}

function texts(context: Context): string[] {
    return context.contextValues.map((v) => v.utf8String);
}

describe("Context.isEmpty()", () => {
    it("is true only when there are no context values", () => {
        expect(new Context(language, []).isEmpty()).toBe(true);
        expect(new Context(language, [], true).isEmpty()).toBe(true);
        expect(new Context(language, [utf8("en")]).isEmpty()).toBe(false);
    });
});

describe("Context.merge()", () => {
    it("concatenates context values", () => {
        const merged = new Context(language, [utf8("en")])
            .merge(new Context(language, [utf8("fr")]));
        expect(texts(merged)).toEqual(["en", "fr"]);
        expect(merged.contextType.isEqualTo(language)).toBe(true);
        expect(merged.fallback).toBeUndefined();
    });

    it("turns fallback on when either side has it", () => {
        const receiver = new Context(language, [utf8("en")], false);
        const other = new Context(language, [utf8("fr")], true);
        expect(receiver.merge(other).fallback).toBe(true);
        expect(other.merge(receiver).fallback).toBe(true);
    });

    it("keeps an absent fallback when the other uses the default", () => {
        const receiver = new Context(language, [utf8("en")]);
        const other = new Context(language, [utf8("fr")], false);
        expect(receiver.merge(other).fallback).toBeUndefined();
    });

    it("returns the receiver when the other contributes nothing", () => {
        const receiver = new Context(language, [utf8("en")]);
        const empty = new Context(language, []);
        expect(receiver.merge(empty)).toBe(receiver);
        expect(empty.merge(receiver)).toBe(receiver);
    });

    it("does not return the other context when fallback must change", () => {
        const emptyFallback = new Context(language, [], true);
        const valued = new Context(language, [utf8("en")], false);
        const merged = emptyFallback.merge(valued);
        expect(merged).not.toBe(valued);
        expect(texts(merged)).toEqual(["en"]);
        expect(merged.fallback).toBe(true);
    });

    it("does not mutate either operand", () => {
        const leftValues = [utf8("en")];
        const rightValues = [utf8("fr")];
        const left = new Context(language, leftValues);
        const right = new Context(language, rightValues);
        const merged = left.merge(right);
        expect(left.contextValues).toBe(leftValues);
        expect(right.contextValues).toBe(rightValues);
        expect(merged).not.toBe(left);
        expect(merged).not.toBe(right);
    });

    it("concatenates unrecognized extensions", () => {
        const leftExt = utf8("left");
        const rightExt = utf8("right");
        const merged = new Context(language, [utf8("en")], undefined, [leftExt])
            .merge(new Context(language, [utf8("fr")], undefined, [rightExt]));
        expect(merged._unrecognizedExtensionsList).toEqual([leftExt, rightExt]);
    });

    it("throws when the context types differ", () => {
        const left = new Context(language, [utf8("en")]);
        const right = new Context(locale, [utf8("US")]);
        expect(() => left.merge(right)).toThrow(/context types differ/);
    });
});
