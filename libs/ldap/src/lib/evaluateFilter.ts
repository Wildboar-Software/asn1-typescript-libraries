import type { Filter } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/Filter.ta";
import type { PartialAttributeList } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/PartialAttributeList.ta";
import type { LDAPString } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/LDAPString.ta";
import type EqualityMatcher from "../lib/types/EqualityMatcher";
import SubstringSelection from "../lib/types/SubstringSelection";
import type SubstringsMatcher from "../lib/types/SubstringsMatcher";
import type OrderingMatcher from "../lib/types/OrderingMatcher";
import type ApproxMatcher from "../lib/types/ApproxMatcher";

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

export
interface EvaluateFilterOptions {
    readonly getEqualityMatcher: (ad: LDAPString) => EqualityMatcher | undefined;
    readonly getSubstringsMatcher: (ad: LDAPString) => SubstringsMatcher | undefined;
    readonly getOrderingMatcher: (ad: LDAPString) => OrderingMatcher | undefined;
    readonly getApproxMatcher: (ad: LDAPString) => ApproxMatcher | undefined;
    readonly isSubtype: (ad: LDAPString, parent: LDAPString) => boolean;
}

export
function evaluateFilter (filter: Filter, entry: PartialAttributeList, options: EvaluateFilterOptions): boolean | undefined {
    if ("and" in filter) {
        const results = filter.and.map((subfilter: Filter): boolean => evaluateFilter(subfilter, entry, options));
        const allPassed = results.every((result) => result);
        if (allPassed) {
            return true;
        }
        return (results.some((r) => r === undefined))
            ? undefined
            : false;
    } else if ("or" in filter) {
        const results = filter.or.map((subfilter: Filter): boolean => evaluateFilter(subfilter, entry, options));
        const anyMatched = results.some((result) => result);
        if (anyMatched) {
            return true;
        }
        return (results.some((r) => r === undefined))
            ? undefined
            : false;
    } else if ("not" in filter) {
        const result = evaluateFilter(filter.not, entry, options);
        if (result === false) {
            return true;
        } else if (result === true) {
            return false;
        } else {
            return undefined;
        }
    } else if ("equalityMatch" in filter) {
        const ava = filter.equalityMatch;
        const matcher = options.getEqualityMatcher(ava.attributeDesc);
        if (!matcher) {
            return undefined;
        }
        return entry
            .filter((attr) => options.isSubtype(attr.type_, ava.attributeDesc))
            .some((attr) => attr.vals
                .some((val) => matcher(ava.assertionValue, val)));
    } else if ("substrings" in filter) {
        const sf = filter.substrings;
        const matcher = options.getSubstringsMatcher(sf.type_);
        if (!matcher) {
            return undefined;
        }
        return entry
            .filter((attr) => options.isSubtype(attr.type_, sf.type_))
            .some((attr) => attr.vals
                .some((val) => sf.substrings
                    .every((ss) => {
                        if ("initial" in ss) {
                            return matcher(ss.initial, val, SubstringSelection.initial);
                        } else if ("any_" in ss) {
                            return matcher(ss.any_, val, SubstringSelection.any_);
                        } else if ("final" in ss) {
                            return matcher(ss.final, val, SubstringSelection.final);
                        } else {
                            return undefined;
                        }
                    })));
    } else if ("greaterOrEqual" in filter) {
        const ava = filter.greaterOrEqual;
        const matcher = options.getOrderingMatcher(ava.attributeDesc);
        if (!matcher) {
            return undefined;
        }
        return entry
            .filter((attr) => options.isSubtype(attr.type_, ava.attributeDesc))
            .some((attr) => attr.vals
                .some((val) => (matcher(ava.assertionValue, val) >= 0)));
    } else if ("lessOrEqual" in filter) {
        const ava = filter.lessOrEqual;
        const matcher = options.getOrderingMatcher(ava.attributeDesc);
        if (!matcher) {
            return undefined;
        }
        return entry
            .filter((attr) => options.isSubtype(attr.type_, ava.attributeDesc))
            .some((attr) => attr.vals
                .some((val) => (matcher(ava.assertionValue, val) <= 0)));
    } else if ("present" in filter) {
        return entry.some((attr) => options.isSubtype(attr.type_, filter.present));
    } else if ("approxMatch" in filter) {
        const ava = filter.approxMatch;
        const matcher = options.getApproxMatcher(ava.attributeDesc);
        if (!matcher) {
            return undefined;
        }
        return entry
            .filter((attr) => options.isSubtype(attr.type_, ava.attributeDesc))
            .some((attr) => attr.vals
                .some((val) => matcher(ava.assertionValue, val)));
    } else if ("extensibleMatch" in filter) {
        const mra = filter.extensibleMatch;
        const mr = mra.matchingRule ?? mra.type_;
        const matcher = options.getEqualityMatcher(mr);
        if (!matcher) {
            return undefined;
        }
        return entry
            .filter((attr) =>  mra.type_
                ? options.isSubtype(attr.type_, mra.type_)
                : true
            )
            .some((attr) => attr.vals
                .some((val) => matcher(mra.matchValue, val)));
        // dnAttributes is ignored.
    } else {
        return undefined;
    }
}

export default evaluateFilter;
