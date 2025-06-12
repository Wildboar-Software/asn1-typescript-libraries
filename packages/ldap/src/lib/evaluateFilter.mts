import type { Filter } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/Filter.ta.mjs";
import type { PartialAttributeList } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/PartialAttributeList.ta.mjs";
import type { LDAPString } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/LDAPString.ta.mjs";
import type { AttributeValue } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/AttributeValue.ta.mjs";
import type AttributeTypeAndValue from "../lib/types/AttributeTypeAndValue.mjs";
import type EqualityMatcher from "../lib/types/EqualityMatcher.mjs";
import SubstringSelection from "../lib/types/SubstringSelection.mjs";
import type SubstringsMatcher from "../lib/types/SubstringsMatcher.mjs";
import type OrderingMatcher from "../lib/types/OrderingMatcher.mjs";
import type ApproxMatcher from "../lib/types/ApproxMatcher.mjs";
import type LDAPSyntaxDecoder from "../lib/types/LDAPSyntaxDecoder.mjs";
import encodeLDAPOID from "./encodeLDAPOID.mjs";
import compareUint8Arrays from "./utils/compareUint8Arrays.mjs";

export
interface EvaluateFilterOptions {

    /**
     * A function that accepts an attribute description and returns a function
     * that can convert the LDAP-encoding of an attribute into an equivalent
     * ASN.1 data type / data structure.
     *
     * @readonly
     * @property
     */
    readonly getLDAPSyntaxDecoder: (ad: LDAPString) => LDAPSyntaxDecoder | undefined;

    /**
     * A function that accepts an attribute description and returns a function
     * that can perform an equality comparison on an asserted value against an
     * attribute value.
     *
     * @readonly
     * @property
     */
    readonly getEqualityMatcher: (ad: LDAPString) => EqualityMatcher | undefined;

    /**
     * A function that accepts an attribute description and returns a function
     * that can perform a substrings matching on an asserted value against an
     * attribute value.
     *
     * @readonly
     * @property
     */
    readonly getSubstringsMatcher: (ad: LDAPString) => SubstringsMatcher | undefined;

    /**
     * A function that accepts an attribute description and returns a function
     * that can perform a ordering matching on an asserted value against an
     * attribute value.
     *
     * @readonly
     * @property
     */
    readonly getOrderingMatcher: (ad: LDAPString) => OrderingMatcher | undefined;

    /**
     * A function that accepts an attribute description and returns a function
     * that can perform an approximate matching on an asserted value against an
     * attribute value.
     */
    readonly getApproxMatcher: (ad: LDAPString) => ApproxMatcher | undefined;

    /**
     * A function that accepts two attribute descriptions, one for an attribute
     * and one for a potential parent attribute type. This function returns a
     * `boolean` indicating whether the attribute type is a subtype of `parent`.
     *
     * @readonly
     * @property
     */
    readonly isSubtype: (ad: LDAPString, parent: LDAPString) => boolean;

    /**
     * A function that accepts an attribute description and optionally an
     * attribute value. If only an attribute type is supplied, this function
     * returns a `boolean` indicating whether the user is permitted to filter
     * on that attribute type. If the attribute value is supplied as well, this
     * function returns a `boolean` indicating whether the user is permitted to
     * filter on that attribute type and value.
     *
     * @readonly
     * @property
     */
    readonly permittedToMatch: (ad: LDAPString, value?: AttributeValue) => boolean;
}

/**
 * @summary Implementation of LDAP filtering, as specified in IETF RFC 4511.
 * @description
 *
 * This function filters an entry according to a `Filter` as specified in
 * IETF RFC 4511.
 *
 * ### Relevant ASN.1 Definitions
 *
 * ```asn1
 * Filter ::= CHOICE {
 *     and              [0]  SET SIZE (1..MAX) OF filter Filter,
 *     or               [1]  SET SIZE (1..MAX) OF filter Filter,
 *     not              [2]  Filter,
 *     equalityMatch    [3]  AttributeValueAssertion,
 *     substrings       [4]  SubstringFilter,
 *     greaterOrEqual   [5]  AttributeValueAssertion,
 *     lessOrEqual      [6]  AttributeValueAssertion,
 *     present          [7]  AttributeDescription,
 *     approxMatch      [8]  AttributeValueAssertion,
 *     extensibleMatch  [9]  MatchingRuleAssertion,
 *     ...
 * }
 *
 * SubstringFilter ::= SEQUENCE {
 *     type        AttributeDescription,
 *     substrings
 *         SEQUENCE SIZE (1..MAX) OF substring
 *         CHOICE {initial  [0]  AssertionValue, -- can occur at most once--
 *                 any      [1]  AssertionValue,
 *                 final    [2]  AssertionValue} -- can occur at most once
 * }
 *
 * MatchingRuleAssertion ::= SEQUENCE {
 *     matchingRule  [1]  MatchingRuleId OPTIONAL,
 *     type          [2]  AttributeDescription OPTIONAL,
 *     matchValue    [3]  AssertionValue,
 *     dnAttributes  [4]  BOOLEAN DEFAULT FALSE
 * }
 * ```
 *
 * @param filter The LDAP Filter by which to filter the entry.
 * @param dn The distinguished name of the entry. // TODO: Order
 * @param entry The attributes of the entry.
 * @param options Despite the name, all fields of this object are not optional.
 * @returns `true` if the entry matched, `false` if it does not, or `undefined`
 *  if it could not be determined whether the entry matches or not.
 * @function
 */
export
function evaluateFilter (
    filter: Filter,
    dn: AttributeTypeAndValue[][],
    entry: PartialAttributeList,
    options: EvaluateFilterOptions,
): boolean | undefined {
    if ("and" in filter) {
        const results = filter.and
            .map((subfilter: Filter): boolean | undefined => evaluateFilter(subfilter, dn, entry, options));
        const allPassed = results.every((result) => result);
        if (allPassed) {
            return true;
        }
        return (results.some((r) => r === undefined))
            ? undefined
            : false;
    } else if ("or" in filter) {
        const results = filter.or
            .map((subfilter: Filter): boolean | undefined => evaluateFilter(subfilter, dn, entry, options));
        const anyMatched = results.some((result) => result);
        if (anyMatched) {
            return true;
        }
        return (results.some((r) => r === undefined))
            ? undefined
            : false;
    } else if ("not" in filter) {
        const result = evaluateFilter(filter.not, dn, entry, options);
        if (result === false) {
            return true;
        } else if (result === true) {
            return false;
        } else {
            return undefined;
        }
    } else if ("equalityMatch" in filter) {
        try {
            const ava = filter.equalityMatch;
            const assertionDecoder = options.getLDAPSyntaxDecoder(ava.attributeDesc);
            const matcher = options.getEqualityMatcher(ava.attributeDesc);
            if (!matcher) {
                return undefined;
            }
            if (!options.permittedToMatch(ava.attributeDesc)) {
                return undefined;
            }
            return entry
                .filter((attr) => options.isSubtype(ava.attributeDesc, attr.type_))
                .some((attr) => attr.vals
                    .some((val): boolean => {
                        if (!options.permittedToMatch(attr.type_, val)) {
                            return false;
                        }
                        const decode = assertionDecoder
                            ? assertionDecoder
                            : options.getLDAPSyntaxDecoder(attr.type_);
                        if (!decode) {
                            // Unless the assertion syntax differs from the
                            // attribute syntax, a byte-for-byte comparison should
                            // always determine equality.
                            return compareUint8Arrays(ava.assertionValue, val);
                        }
                        const decodedAssertion = decode(ava.assertionValue);
                        const decodedValue = decode(val);
                        return matcher(decodedAssertion, decodedValue);
                    }));
        } catch {
            return undefined;
        }
    } else if ("substrings" in filter) {
        try {
            const sf = filter.substrings;
            const assertionDecoder = options.getLDAPSyntaxDecoder(sf.type_);
            const matcher = options.getSubstringsMatcher(sf.type_);
            if (!matcher) {
                return undefined;
            }
            if (!options.permittedToMatch(sf.type_)) {
                return undefined;
            }
            return entry
                .filter((attr) => options.isSubtype(sf.type_, attr.type_))
                .some((attr) => attr.vals
                    .some((val) => sf.substrings
                        .every((ss) => {
                            if (!options.permittedToMatch(sf.type_, val)) {
                                return false;
                            }
                            const decode = assertionDecoder
                                ? assertionDecoder
                                : options.getLDAPSyntaxDecoder(attr.type_);
                            if (!decode) {
                                return undefined;
                            }
                            const decodedValue = decode(val);
                            if ("initial" in ss) {
                                const decodedAssertion = decode(ss.initial);
                                return matcher(decodedAssertion, decodedValue, SubstringSelection.initial);
                            } else if ("any_" in ss) {
                                const decodedAssertion = decode(ss.any_);
                                return matcher(decodedAssertion, decodedValue, SubstringSelection.any_);
                            } else if ("final" in ss) {
                                const decodedAssertion = decode(ss.final);
                                return matcher(decodedAssertion, decodedValue, SubstringSelection.final);
                            } else {
                                return undefined;
                            }
                        })));
        } catch {
            return undefined;
        }
    } else if ("greaterOrEqual" in filter) {
        try {
            const ava = filter.greaterOrEqual;
            const assertionDecoder = options.getLDAPSyntaxDecoder(ava.attributeDesc);
            const matcher = options.getOrderingMatcher(ava.attributeDesc);
            if (!matcher) {
                return undefined;
            }
            if (!options.permittedToMatch(ava.attributeDesc)) {
                return undefined;
            }
            return entry
                .filter((attr) => options.isSubtype(ava.attributeDesc, attr.type_))
                .some((attr) => attr.vals
                    .some((val) => {
                        if (!options.permittedToMatch(attr.type_, val)) {
                            return false;
                        }
                        const decode = assertionDecoder
                            ? assertionDecoder
                            : options.getLDAPSyntaxDecoder(attr.type_);
                        if (!decode) {
                            return undefined;
                        }
                        const decodedValue = decode(val);
                        const decodedAssertion = decode(ava.assertionValue);
                        return (matcher(decodedAssertion, decodedValue) >= 0);
                    }));
        } catch {
            return undefined;
        }
    } else if ("lessOrEqual" in filter) {
        try {
            const ava = filter.lessOrEqual;
            const assertionDecoder = options.getLDAPSyntaxDecoder(ava.attributeDesc);
            const matcher = options.getOrderingMatcher(ava.attributeDesc);
            if (!matcher) {
                return undefined;
            }
            if (!options.permittedToMatch(ava.attributeDesc)) {
                return undefined;
            }
            return entry
                .filter((attr) => options.isSubtype(ava.attributeDesc, attr.type_))
                .some((attr) => attr.vals
                .some((val) => {
                    if (!options.permittedToMatch(attr.type_, val)) {
                        return false;
                    }
                    const decode = assertionDecoder
                        ? assertionDecoder
                        : options.getLDAPSyntaxDecoder(attr.type_);
                    if (!decode) {
                        return undefined;
                    }
                    const decodedValue = decode(val);
                    const decodedAssertion = decode(ava.assertionValue);
                    return (matcher(decodedAssertion, decodedValue) <= 0);
                }));
        } catch {
            return undefined;
        }
    } else if ("present" in filter) {
        if (!options.permittedToMatch(filter.present)) {
            return undefined;
        }
        try {
            return entry.some((attr) => options.isSubtype(filter.present, attr.type_));
        } catch {
            return undefined;
        }
    } else if ("approxMatch" in filter) {
        try {
            const ava = filter.approxMatch;
            const assertionDecoder = options.getLDAPSyntaxDecoder(ava.attributeDesc);
            const matcher = options.getApproxMatcher(ava.attributeDesc);
            if (!matcher) {
                return undefined;
            }
            if (!options.permittedToMatch(ava.attributeDesc)) {
                return undefined;
            }
            return entry
                .filter((attr) => options.isSubtype(ava.attributeDesc, attr.type_))
                .some((attr) => attr.vals
                    .some((val) => {
                        if (!options.permittedToMatch(attr.type_, val)) {
                            return false;
                        }
                        const decode = assertionDecoder
                            ? assertionDecoder
                            : options.getLDAPSyntaxDecoder(attr.type_);
                        if (!decode) {
                            // Unless the assertion syntax differs from the
                            // attribute syntax, a byte-for-byte comparison should
                            // always determine equality.
                            return compareUint8Arrays(ava.assertionValue, val);
                        }
                        const decodedAssertion = decode(ava.assertionValue);
                        const decodedValue = decode(val);
                        return matcher(decodedAssertion, decodedValue);
                    }));
        } catch {
            return undefined;
        }
    } else if ("extensibleMatch" in filter) {
        try {
            const mra = filter.extensibleMatch;
            const mr = mra.matchingRule ?? mra.type_;
            if (!mr) {
                return undefined;
            }
            const assertionDecoder = options.getLDAPSyntaxDecoder(mr);
            if (!assertionDecoder) {
                return undefined;
            }
            const decodedAssertion = assertionDecoder(mra.matchValue);
            const matcher = options.getEqualityMatcher(mr);
            if (!matcher) {
                return undefined;
            }
            if (mra.type_ && !options.permittedToMatch(mra.type_)) {
                return undefined;
            }
            return (
                entry
                    .filter((attr) => mra.type_
                        ? options.isSubtype(mra.type_, attr.type_)
                        : true
                    )
                    .some((attr) => attr.vals
                        .some((val) => {
                            if (!options.permittedToMatch(attr.type_, val)) {
                                return false;
                            }
                            const valueDecoder = options.getLDAPSyntaxDecoder(attr.type_);
                            if (!valueDecoder) {
                                return undefined;
                            }
                            const decodedValue = valueDecoder(val);
                            return matcher(decodedAssertion, decodedValue);
                        }))
                || (mra.dnAttributes && dn
                    .some((rdn) => rdn
                        .some((atav) => mra.type_
                            ? options.isSubtype(mra.type_, encodeLDAPOID(atav[0]))
                            : true)))
            );
        } catch {
            return undefined;
        }
    } else {
        return undefined;
    }
}

export default evaluateFilter;
