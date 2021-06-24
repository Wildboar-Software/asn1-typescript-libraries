

import type { Filter } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/Filter.ta";
import { AttributeValueAssertion } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/AttributeValueAssertion.ta";
import { MatchingRuleAssertion } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/MatchingRuleAssertion.ta";
import { SubstringFilter } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/SubstringFilter.ta";
import encodeLDAPOID from "../lib/encodeLDAPOID";
import { ObjectIdentifier } from "asn1-ts";
import stringifyFilter from "../lib/stringifiers/Filter";

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

const serialNumber = new ObjectIdentifier([ 2, 5, 4, 5 ]);

const TEST_FILTER: Filter = {
    present: encodeLDAPOID(serialNumber),
};

const andFilter: Filter = {
    and: [
        TEST_FILTER,
    ],
};

const orFilter: Filter = {
    or: [
        TEST_FILTER,
    ],
};

const notFilter: Filter = {
    not: TEST_FILTER,
};

const eqFilter: Filter = {
    equalityMatch: new AttributeValueAssertion(
        encodeLDAPOID(serialNumber),
        Buffer.from("ASDF1234"),
    ),
};

const ssFilter: Filter = {
    substrings: new SubstringFilter(
        encodeLDAPOID(serialNumber),
        [
            {
                initial: Buffer.from("ASD"),
            },
            {
                final: Buffer.from("234"),
            },
            {
                any_: Buffer.from("DF12"),
            },
        ],
    ),
};

const goeFilter: Filter = {
    greaterOrEqual: new AttributeValueAssertion(
        encodeLDAPOID(serialNumber),
        Buffer.from("ARDF1234"),
    ),
};

const loeFilter: Filter = {
    lessOrEqual: new AttributeValueAssertion(
        encodeLDAPOID(serialNumber),
        Buffer.from("ATDF1234"),
    ),
};

const presentFilter: Filter = {
    present: encodeLDAPOID(serialNumber),
};

const approxFilter: Filter = {
    approxMatch: new AttributeValueAssertion(
        encodeLDAPOID(serialNumber),
        Buffer.from("ASDF123"),
    ),
};

const xmFilter: Filter = {
    extensibleMatch: new MatchingRuleAssertion(
        undefined,
        encodeLDAPOID(serialNumber),
        Buffer.from("ASDF1234"),
        false,
    ),
};

const tests: [ Filter, string ][] = [
    [ andFilter, "(&(2.5.4.5=*))" ],
    [ orFilter, "(|(2.5.4.5=*))" ],
    [ notFilter, "(!(2.5.4.5=*))" ],
    [ eqFilter, "(2.5.4.5=ASDF1234)" ],
    [ ssFilter, "(2.5.4.5=ASD*DF12*234)" ],
    [ goeFilter, "(2.5.4.5>=ARDF1234)" ],
    [ loeFilter, "(2.5.4.5<=ATDF1234)" ],
    [ presentFilter, "(2.5.4.5=*)" ],
    [ approxFilter, "(2.5.4.5~=ASDF123)" ],
    [ xmFilter, "(2.5.4.5:=ASDF1234)" ],
];

describe("stringifyFilter()", () => {
    test.each(tests)("stringifies a filter %#", (filter: Filter, expected: string) => {
        expect(stringifyFilter(filter)).toBe(expected);
    });
});
