

import type { Filter } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/Filter.ta.mjs";
import encodeLDAPOID from "../lib/encodeLDAPOID";
import { ObjectIdentifier } from "asn1-ts";
import destringifyFilter from "../lib/destringifiers/Filter";

// Filter ::= CHOICE {
//     and              [0]  SET SIZE (1..MAX) OF filter Filter,
//     or               [1]  SET SIZE (1..MAX) OF filter Filter,
//     not              [2]  Filter,
//     equalityMatch    [3]  AttributeValueAssertion,
//     substrings       [4]  SubstringFilter,
//     greaterOrEqual   [5]  AttributeValueAssertion,
//     lessOrEqual      [6]  AttributeValueAssertion,
//     present          [7]  AttributeDescription,
//     approxMatch      [8]  AttributeValueAssertion,
//     extensibleMatch  [9]  MatchingRuleAssertion,
//     ...
// }

// SubstringFilter ::= SEQUENCE {
//     type        AttributeDescription,
//     substrings
//         SEQUENCE SIZE (1..MAX) OF substring
//         CHOICE {initial  [0]  AssertionValue, -- can occur at most once--
//                 any      [1]  AssertionValue,
//                 final    [2]  AssertionValue} -- can occur at most once
// }

// MatchingRuleAssertion ::= SEQUENCE {
//     matchingRule  [1]  MatchingRuleId OPTIONAL,
//     type          [2]  AttributeDescription OPTIONAL,
//     matchValue    [3]  AssertionValue,
//     dnAttributes  [4]  BOOLEAN DEFAULT FALSE
// }

// function utf8Element (str: string): BERElement {
//     return new BERElement(
//         ASN1TagClass.universal,
//         ASN1Construction.primitive,
//         ASN1UniversalType.utf8String,
//         str,
//     );
// }

const serialNumber = ObjectIdentifier.fromParts([ 2, 5, 4, 5 ]);

const TEST_FILTER: Filter = {
    present: encodeLDAPOID(serialNumber),
};

const andFilter = "(&(2.5.4.5=*))";
const orFilter = "(|(2.5.4.5=*))";
const notFilter = "(!(2.5.4.5=*))";
const eqFilter = "(2.5.4.5=ASDF1234)";
const ssFilter = "(2.5.4.5=ASD*DF12*234)";
const goeFilter = "(2.5.4.5>=ARDF1234)";
const loeFilter = "(2.5.4.5<=ATDF1234)";
const presentFilter = "(2.5.4.5=*)";
const approxFilter = "(2.5.4.5~=ASDF123)";
const xmFilter = "(2.5.4.5:=ASDF1234)";

describe("destringifyFilter()", () => {
    it("destringifies an and filter", () => {
        const parsed = destringifyFilter({
            input: andFilter,
            index: 0,
            filter: {
                and: [],
            },
        });
        expect(("and" in parsed.filter) && (parsed.filter.and.length === 1)).toBeTruthy();
    });

    it("destringifies an or filter", () => {
        const parsed = destringifyFilter({
            input: orFilter,
            index: 0,
            filter: {
                and: [],
            },
        });
        expect(("or" in parsed.filter) && (parsed.filter.or.length === 1)).toBeTruthy();
    });

    it("destringifies a not filter", () => {
        const parsed = destringifyFilter({
            input: notFilter,
            index: 0,
            filter: {
                and: [],
            },
        });
        expect("not" in parsed.filter).toBeTruthy();
    });

    it("destringifies an equalityMatch filter", () => {
        const parsed = destringifyFilter({
            input: eqFilter,
            index: 0,
            filter: {
                and: [],
            },
        });
        expect("equalityMatch" in parsed.filter).toBeTruthy();
    });

    it("destringifies a substrings filter", () => {
        const parsed = destringifyFilter({
            input: ssFilter,
            index: 0,
            filter: {
                and: [],
            },
        });
        expect(("substrings" in parsed.filter) && (parsed.filter.substrings.substrings.length === 3)).toBeTruthy();
    });

    it("destringifies a greaterOrEqual filter", () => {
        const parsed = destringifyFilter({
            input: goeFilter,
            index: 0,
            filter: {
                and: [],
            },
        });
        expect("greaterOrEqual" in parsed.filter).toBeTruthy();
    });

    it("destringifies a lessOrEqual filter", () => {
        const parsed = destringifyFilter({
            input: loeFilter,
            index: 0,
            filter: {
                and: [],
            },
        });
        expect("lessOrEqual" in parsed.filter).toBeTruthy();
    });

    it("destringifies a present filter", () => {
        const parsed = destringifyFilter({
            input: presentFilter,
            index: 0,
            filter: {
                and: [],
            },
        });
        expect("present" in parsed.filter).toBeTruthy();
    });

    it("destringifies an approxMatch filter", () => {
        const parsed = destringifyFilter({
            input: approxFilter,
            index: 0,
            filter: {
                and: [],
            },
        });
        expect("approxMatch" in parsed.filter).toBeTruthy();
    });

    it("destringifies an extensibleMatch filter", () => {
        const parsed = destringifyFilter({
            input: xmFilter,
            index: 0,
            filter: {
                and: [],
            },
        });
        expect("extensibleMatch" in parsed.filter).toBeTruthy();
    });

});
