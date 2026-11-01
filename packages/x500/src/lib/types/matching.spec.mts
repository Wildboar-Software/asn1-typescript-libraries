import { ASN1Element, type INTEGER } from "@wildboar/asn1";
import { DER, _encodeInteger, _encodePrintableString } from "@wildboar/asn1/functional";
import {
    type Matcher,
    createOrderingMatcher,
    type TypedOrderingFunction,
    MATCH_FLAG_ORDERING_OR_EQUAL,
    MATCH_FLAG_ORDERING_GREATER,
    MATCH_FLAG_NONE,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_USED_FOR_NAME,
    createSubstringsMatcher,
    createEqualityMatcher,
    type TypedEquationFunction,
    type AssertedSubstring,
    getStringSubstringsMatcher,
} from "./matching.mjs";
import {
    Attribute,
    AttributeTypeAndValue,
    type AttributeType,
    Attribute_valuesWithContext_Item,
} from "../modules/InformationFramework/index.mjs";
import {
    oidC,
    description,
    _decode_SubstringAssertion,
    _decode_UnboundedDirectoryString,
    _encode_SubstringAssertion,
} from "../modules/SelectedAttributeTypes/index.mjs";
import {
    type FilterItem_substrings_strings_Item as FilterSubstring,
} from "../modules/DirectoryAbstractService/index.mjs";
import { prepString } from "../utils/prepString.mjs";
import { directoryStringToString } from "../stringifiers/directoryStringToString.mjs";

function integer (value: number | bigint): ASN1Element {
    return _encodeInteger(value, DER);
}

function integerATAV (value: number | bigint): AttributeTypeAndValue {
    return new AttributeTypeAndValue(
        oidC["&id"],
        integer(value),
    );
}

function integerOrderingMatchTyped (
    assertion: INTEGER,
    value: INTEGER | ASN1Element,
): number | undefined {
    const v = ASN1Element.isElement(value) ? value.integer : value;
    return (Number(assertion) - Number(v));
}

integerOrderingMatchTyped satisfies TypedOrderingFunction<INTEGER>;

const integerOrderingMatch = createOrderingMatcher(
    (el) => el.integer,
    integerOrderingMatchTyped,
);

integerOrderingMatch satisfies Matcher;

test("integerOrderingMatch for testing matching utilities", () => {
    expect(integerOrderingMatch(integer(5), integerATAV(1))).toBe(true);
    expect(integerOrderingMatch(integer(0), integerATAV(-1))).toBe(true);
    expect(integerOrderingMatch(integer(-1), integerATAV(-8))).toBe(true);

    const attr1 = new Attribute(
        oidC["&id"],
        [
            integer(10),
            integer(-1),
            integer(-8),
        ],
    );
    expect(integerOrderingMatch(integer(5), attr1)).toBe(true);

    const attr2 = new Attribute(
        oidC["&id"],
        [
            integer(10),
            integer(20),
        ],
        [
            new Attribute_valuesWithContext_Item(
                integer(8),
                [], // The context list actually doesn't matter.
            ),
            new Attribute_valuesWithContext_Item(
                integer(3),
                [], // The context list actually doesn't matter.
            ),
        ],
    );
    expect(integerOrderingMatch(integer(5), attr2)).toBe(true);
    attr2.valuesWithContext.pop();
    expect(integerOrderingMatch(integer(5), attr2)).toBe(false);
    attr2.valuesWithContext.push(new Attribute_valuesWithContext_Item(
        integer(5),
        [],
    ));
    expect(integerOrderingMatch(integer(5), attr2)).toBe(false);
    expect(integerOrderingMatch(integer(5), attr2, undefined, MATCH_FLAG_ORDERING_OR_EQUAL)).toBe(true);
    expect(integerOrderingMatch(integer(5), attr2, undefined, MATCH_FLAG_ORDERING_GREATER | MATCH_FLAG_ORDERING_OR_EQUAL)).toBe(true);

    const attr3 = new Attribute(
        oidC["&id"],
        [
            integer(10),
            integer(-1),
            integer(10),
            integer(-8),
            integer(10),
            integer(4),
        ],
    );
    const matchedValues = new Attribute(oidC["&id"], [], []);
    expect(integerOrderingMatch(integer(5), attr3, undefined, MATCH_FLAG_NONE, matchedValues)).toBe(true);
    expect(matchedValues.values).toHaveLength(3);
});

test("name matching rejects rules with heterogeneous syntaxes", () => {
    const heterogeneousMatch = createEqualityMatcher(
        (el) => el.integer,
        (assertion: INTEGER, value: ASN1Element) => (
            assertion === value.integer
        ),
        undefined,
        true,
    );
    expect(heterogeneousMatch(integer(5), integerATAV(5))).toBe(true);
    expect(heterogeneousMatch(
        integer(5),
        integerATAV(5),
        undefined,
        MATCH_FLAG_USED_FOR_NAME,
    )).toBeUndefined();
});

function substringsConverter(substrs: FilterSubstring[]): AssertedSubstring<string>[] {
    return substrs.map((s) => {
        if ("any_" in s) {
            const ds = _decode_UnboundedDirectoryString(s.any_);
            const js = directoryStringToString(ds);
            const ps = prepString(js, { caseFold: true });
            return { any_: ps };
        } else if ("initial" in s) {
            const ds = _decode_UnboundedDirectoryString(s.initial);
            const js = directoryStringToString(ds);
            const ps = prepString(js, { caseFold: true });
            return { initial: ps };
        } else if ("final" in s) {
            const ds = _decode_UnboundedDirectoryString(s.final);
            const js = directoryStringToString(ds);
            const ps = prepString(js, { caseFold: true });
            return { final: ps };
        } else if ("control" in s) {
            return { control: s.control };
        } else {
            throw new Error();
        }
    });
}

function assertionConverter(assertion: ASN1Element): AssertedSubstring<string>[] {
    const decoded = _decode_SubstringAssertion(assertion);
    // TODO: This code is very similar to code above. Refactor might be possible.
    return decoded.map((s) => {
        if ("any_" in s) {
            const ds = s.any_;
            const js = directoryStringToString(ds);
            const ps = prepString(js, { caseFold: true });
            return { any_: ps };
        } else if ("initial" in s) {
            const ds = s.initial;
            const js = directoryStringToString(ds);
            const ps = prepString(js, { caseFold: true });
            return { initial: ps };
        } else if ("final" in s) {
            const ds = s.final;
            const js = directoryStringToString(ds);
            const ps = prepString(js, { caseFold: true });
            return { final: ps };
        } else if ("control" in s) {
            return { control: s.control };
        } else {
            throw new Error();
        }
    });
}

const caseIgnoreSubstringsMatchTyped: TypedEquationFunction<AssertedSubstring<string>[]> = getStringSubstringsMatcher(
    (value) => prepString(directoryStringToString(_decode_UnboundedDirectoryString(value)), { caseFold: true }),
);

const caseIgnoreSubstringsMatch = createSubstringsMatcher(
    assertionConverter,
    caseIgnoreSubstringsMatchTyped,
    substringsConverter,
);

caseIgnoreSubstringsMatch satisfies Matcher;

const substringsBasicCaseTest = (constantTime: boolean) => {
    const flags = constantTime
        ? MATCH_FLAG_CONSTANT_TIME
        : MATCH_FLAG_NONE
        ;
    const substrings: FilterSubstring[] = [
        {
            initial: _encodePrintableString("what", DER),
        },
        {
            any_: _encodePrintableString("looking", DER),
        },
        {
            final: _encodePrintableString("puck?", DER),
        },
    ];
    const encodedAssertion1 = _encode_SubstringAssertion(
        substrings,
        DER,
    );
    const value = _encodePrintableString("What are you looking at, you hockey puck?", DER);
    const atav = new AttributeTypeAndValue(description["&id"], value);
    expect(caseIgnoreSubstringsMatch(encodedAssertion1, atav, undefined, flags)).toBe(true);

    substrings.pop();
    const encodedAssertion2 = _encode_SubstringAssertion(
        substrings,
        DER,
    );
    expect(caseIgnoreSubstringsMatch(encodedAssertion2, atav, undefined, flags)).toBe(true);

    // This shouldn't match because the previous match against this
    // substring should have "consumed" it.
    substrings.push({
        any_: _encodePrintableString("looking", DER),
    });
    const encodedAssertion3 = _encode_SubstringAssertion(
        substrings,
        DER,
    );
    expect(caseIgnoreSubstringsMatch(encodedAssertion3, atav, undefined, flags)).toBe(false);
};

suite("caseIgnoreSubstringsMatch for testing matching utilities", () => {
    test("basic case", () => {
        substringsBasicCaseTest(false);
        substringsBasicCaseTest(true);
    });
});

// Per-value outcomes for the precedence matcher below.
const VALUE_MATCHES = 1;
const VALUE_DOES_NOT_MATCH = 0;
const VALUE_UNDEFINED = -1;
const VALUE_THROWS = 2;

function precedenceValueMatcher (
    _assertion: ASN1Element,
    value: ASN1Element,
): boolean | undefined {
    const v = Number(value.integer);
    if (v === VALUE_MATCHES) {
        return true;
    }
    if (v === VALUE_DOES_NOT_MATCH) {
        return false;
    }
    if (v === VALUE_UNDEFINED) {
        return undefined;
    }
    throw new Error("value could not be evaluated");
}

const precedenceMatch = createEqualityMatcher(
    (el) => el,
    precedenceValueMatcher,
);

function precedenceAttribute (values: number[], contexts: number[] = []): Attribute {
    return new Attribute(
        oidC["&id"],
        values.map(integer),
        contexts.map((v) => new Attribute_valuesWithContext_Item(integer(v), [])),
    );
}

const valueResultPrecedenceTest = (constantTime: boolean) => {
    const flags = constantTime
        ? MATCH_FLAG_CONSTANT_TIME
        : MATCH_FLAG_NONE
        ;
    const match = (
        values: number[],
        expected: boolean | undefined,
        contexts?: number[],
    ) => {
        expect(precedenceMatch(
            integer(0),
            precedenceAttribute(values, contexts),
            undefined,
            flags,
        )).toBe(expected);
    };

    // TRUE wins, whichever value produces it and whichever loop holds it.
    match([VALUE_MATCHES, VALUE_DOES_NOT_MATCH], true);
    match([VALUE_DOES_NOT_MATCH, VALUE_MATCHES], true);
    match([VALUE_MATCHES, VALUE_UNDEFINED], true);
    match([VALUE_UNDEFINED, VALUE_MATCHES], true);
    match([VALUE_DOES_NOT_MATCH, VALUE_UNDEFINED, VALUE_MATCHES], true);
    match([VALUE_MATCHES, VALUE_THROWS], true);
    match([VALUE_THROWS, VALUE_MATCHES], true);
    match([VALUE_DOES_NOT_MATCH], true, [VALUE_MATCHES]);
    match([VALUE_MATCHES], true, [VALUE_DOES_NOT_MATCH]);
    match([VALUE_UNDEFINED], true, [VALUE_MATCHES]);
    match([VALUE_MATCHES], true, [VALUE_UNDEFINED]);
    match([VALUE_THROWS], true, [VALUE_MATCHES]);
    match([VALUE_MATCHES], true, [VALUE_THROWS]);

    // With no TRUE, UNDEFINED wins over FALSE. A thrown value is UNDEFINED.
    match([VALUE_DOES_NOT_MATCH, VALUE_UNDEFINED], undefined);
    match([VALUE_UNDEFINED, VALUE_DOES_NOT_MATCH], undefined);
    match([VALUE_DOES_NOT_MATCH, VALUE_THROWS], undefined);
    match([VALUE_THROWS, VALUE_DOES_NOT_MATCH], undefined);
    match([VALUE_UNDEFINED], undefined);
    match([VALUE_UNDEFINED, VALUE_UNDEFINED], undefined);
    match([VALUE_THROWS], undefined);
    match([VALUE_THROWS, VALUE_THROWS], undefined);
    match([VALUE_DOES_NOT_MATCH], undefined, [VALUE_UNDEFINED]);
    match([VALUE_UNDEFINED], undefined, [VALUE_DOES_NOT_MATCH]);
    match([VALUE_DOES_NOT_MATCH], undefined, [VALUE_THROWS]);
    match([VALUE_THROWS], undefined, [VALUE_DOES_NOT_MATCH]);

    // FALSE only when every evaluated value is FALSE.
    match([VALUE_DOES_NOT_MATCH], false);
    match([VALUE_DOES_NOT_MATCH, VALUE_DOES_NOT_MATCH], false);
    match([VALUE_DOES_NOT_MATCH], false, [VALUE_DOES_NOT_MATCH]);
};

suite("filter-item result precedence", () => {
    test("TRUE, then UNDEFINED, then FALSE", () => {
        valueResultPrecedenceTest(false);
        valueResultPrecedenceTest(true);
    });
});
