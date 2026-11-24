import type { DotDelimitedOidString, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { TypeAndContextAssertion } from "../modules/DirectoryAbstractService/TypeAndContextAssertion.ta.mjs";
import { ContextAssertion } from "../modules/InformationFramework/ContextAssertion.ta.mjs";
import { Context } from "../modules/InformationFramework/Context.ta.mjs";
import { type EvaluateFilterSettings } from "./evaluateFilter.mjs";
import evaluateContextAssertion from "./evaluateContextAssertion.mjs";
import { Attribute } from "../modules/InformationFramework/Attribute.ta.mjs";
import type { ContextMatcher, EqualityMatcher } from "../types/matching.mjs";

export type DirectContextMatchCache = Map<DotDelimitedOidString, Map<ContextAssertion, boolean>>;

function* iterContextsOfAttribute (attr: Attribute): IterableIterator<Context[]> {
    // One empty list stands for every context-less value: X.501 §8.9.2.4 (b)
    // does not distinguish them, and the sibling walk stops at the first match.
    if (attr.values.length > 0) {
        yield [];
    }
    if (attr.valuesWithContext) {
        for (const item of attr.valuesWithContext) {
            yield item.contextList;
        }
    }
}

/**
 * Whether any selected value of `type_` already satisfies `ca` via
 * X.501 §8.9.2.4 (a) or (b). Cached on `(type OID, ca)` so the sibling
 * walk runs once per pair.
 */
function typeHasDirectContextMatch (
    selectedAttributes: Attribute[],
    type_: OBJECT_IDENTIFIER,
    ca: ContextAssertion,
    getContextMatcher: (contextType: OBJECT_IDENTIFIER) => ContextMatcher | undefined,
    determineAbsentMatch: (contextType: OBJECT_IDENTIFIER) => boolean,
    cache: DirectContextMatchCache,
): boolean {
    const typeKey = type_.toString();
    let byAssertion = cache.get(typeKey);
    if (!byAssertion) {
        byAssertion = new Map();
        cache.set(typeKey, byAssertion);
    } else {
        const cached = byAssertion.get(ca);
        if (cached !== undefined) {
            return cached;
        }
    }
    let matched = false;
    for (const attr of selectedAttributes) {
        if (!attr.type_.isEqualTo(type_)) {
            continue;
        }
        for (const contexts of iterContextsOfAttribute(attr)) {
            if (evaluateContextAssertion(
                ca,
                contexts,
                getContextMatcher,
                determineAbsentMatch,
            )) {
                matched = true;
                break;
            }
        }
        if (matched) {
            break;
        }
    }
    byAssertion.set(ca, matched);
    return matched;
}

/**
 * @internal This is not suitable for export, because it only establishes
 *  preference as a first pass. It does not filter by it. This is not the
 *  behavior that a user would expect from a function called
 *  `evaluateTypeAndContextAssertion`.
 * 
 * @param taca 
 * @param attr 
 * @param contexts 
 * @param selectedAttributes 
 * @param getEqualityMatcher 
 * @param getContextMatcher 
 * @param determineAbsentMatch 
 * @param preferences 
 * @param directMatchCache 
 * @returns 
 */
export
function evaluateTypeAndContextAssertion(
    taca: TypeAndContextAssertion,
    attr: Attribute,
    contexts: Context[],
    selectedAttributes: Attribute[],
    getEqualityMatcher: (contextType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
    getContextMatcher: (contextType: OBJECT_IDENTIFIER) => ContextMatcher | undefined,
    determineAbsentMatch: (contextType: OBJECT_IDENTIFIER) => boolean,
    preferences: Map<ContextAssertion[], number> = new Map(),
    directMatchCache: DirectContextMatchCache = new Map(),
): boolean | undefined {
    if ("all" in taca.contextAssertions) {
        const all = taca.contextAssertions.all;
        for (let i = 0; i < all.length; i++) {
            const ca = all[i];
            const eval1 = evaluateContextAssertion(
                ca,
                contexts,
                getContextMatcher,
                determineAbsentMatch,
                getEqualityMatcher,
            );
            if (eval1) {
                continue;
            }
            // This value failed (a) and (b). If it has no fallback
            // of this type, it cannot match via (c).
            const hasFallback = (eval1 === null);
            if (!hasFallback) {
                return false;
            }
            // Fallback is denied if any sibling of the same type
            // already matched via (a)/(b).
            if (typeHasDirectContextMatch(
                selectedAttributes,
                attr.type_,
                ca,
                getContextMatcher,
                determineAbsentMatch,
                directMatchCache,
            )) {
                return false;
            }
        }
        return true;
    } else if ("preference" in taca.contextAssertions) {
        // This first pass only establishes the preference, but does not filter by it.
        const existingPreference = preferences.get(taca.contextAssertions.preference) ?? -1;
        const preference = existingPreference > -1
            // Slice so we don't repeatedly retry already superseded assertions.
            ? taca.contextAssertions.preference.slice(0, existingPreference)
            : taca.contextAssertions.preference;
        const preferred: number = preference
            .findIndex((ca: ContextAssertion): boolean => !!evaluateContextAssertion(
                ca,
                contexts,
                getContextMatcher,
                determineAbsentMatch,
                getEqualityMatcher,
            ));
        if ( // To become the new preferred context assertion,
            (preferred > -1) // ...obviously, there must be a match
            && ( // ...but also,
                (existingPreference < 0) // there must either be no existing preference, or
                // ...it must also be _more_ preferred than the existing preference to supplant it.
                || (preferred < existingPreference)
            )
        ) {
            preferences.set(taca.contextAssertions.preference, preferred);
        }
        return true;
    } else {
        return undefined; // We do not understand any other type of context assertion.
    }
}
