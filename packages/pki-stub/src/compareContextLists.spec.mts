import { describe, it } from "vitest";
import { compareContextLists } from "./compareContextLists.mjs";
import { Context } from "./lib/modules/InformationFramework/Context.ta.mjs";
import { ObjectIdentifier, DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType, TRUE } from "@wildboar/asn1";
import * as assert from "node:assert/strict";

const val1 = new DERElement(
    ASN1TagClass.universal,
    ASN1Construction.primitive,
    ASN1UniversalType.printableString,
    "hi mom",
);

const val2 = new DERElement(
    ASN1TagClass.universal,
    ASN1Construction.primitive,
    ASN1UniversalType.printableString,
    "hi dad",
);

const val3 = new DERElement(
    ASN1TagClass.universal,
    ASN1Construction.primitive,
    ASN1UniversalType.printableString,
    "hi gramma",
);

const val4 = new DERElement(
    ASN1TagClass.universal,
    ASN1Construction.primitive,
    ASN1UniversalType.printableString,
    "hi grampa",
);

const context1 = new Context(
    ObjectIdentifier.fromString("1.2.3.4"),
    [val1],
);

const context2 = new Context(
    ObjectIdentifier.fromString("1.2.3.4"),
    [val2],
);

const context3 = new Context(
    ObjectIdentifier.fromString("1.2.3.5"), // Different OID
    [val1],
);

const context4 = new Context(
    ObjectIdentifier.fromString("1.2.3.4"),
    [val1],
    TRUE, // Different fallback
);

const context5 = new Context(
    ObjectIdentifier.fromString("1.2.3.4"),
    [val1, val2],
);

const context6 = new Context(
    ObjectIdentifier.fromString("1.2.3.4"),
    [val2, val1],
);

describe("compareContextLists()", () => {
    it("equates two identical context lists with a single context", () => {
        const result = compareContextLists([context1], [context1]);
        assert.ok(result);
    });

    it("equates two context lists with differing order", () => {
        const result = compareContextLists([context1, context3], [context3, context1]);
        assert.ok(result);
    });

    it("equates two context lists with differing ordering of values", () => {
        const result = compareContextLists([context5], [context6]);
        assert.ok(result);
    });

    it("does not count differing values as matches", () => {
        const result = compareContextLists([context1], [context2]);
        assert.ok(!result);
    });

    it("does not count differing fallbacks as matches", () => {
        const result = compareContextLists([context1], [context4]);
        assert.ok(!result);
    });

    it("does not count differing context types as matches", () => {
        const result = compareContextLists([context1], [context3]);
        assert.ok(!result);
    });

    it("does not count type subsets as matches", () => {
        const result = compareContextLists([context1], [context1, context4]);
        assert.ok(!result);
    });

    it("does not count type subsets as matches", () => {
        const result = compareContextLists([context1], [context1, context4]);
        assert.ok(!result);
    });
});
