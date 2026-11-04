import {
    type ASN1Element,
    type OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import {
    asDITDescending,
    AttributeTypeAndValue,
    compareRDNSequence,
    dnStartsWith,
    type GetDistinguishedValueMatcher,
    type RDNSequenceDescending,
} from "@wildboar/dn";
import compareElements from "../comparators/compareElements.mjs";
import type { AttributeType } from "../modules/InformationFramework/AttributeType.ta.mjs";
import type {
    ChopSpecification_specificExclusions_Item,
} from "../modules/InformationFramework/ChopSpecification-specificExclusions-Item.ta.mjs";
import type {
    DistinguishedName,
} from "../modules/InformationFramework/DistinguishedName.ta.mjs";
import type {
    Refinement,
} from "../modules/InformationFramework/Refinement.ta.mjs";
import {
    SubtreeSpecification,
} from "../modules/InformationFramework/SubtreeSpecification.ta.mjs";
import type { EqualityMatcher as DistinguishedValueEqualityMatcher } from "../types/EqualityMatcher.mjs";
import type { EqualityMatcher } from "../types/matching.mjs";

/**
 * Optional getter for an attribute type's distinguished-value equality
 * matcher. Same shape as {@link dnWithinSubtreeSpecification}.
 */
export type SubtreeEqualityMatcherGetter = (
    attributeType: OBJECT_IDENTIFIER,
) => DistinguishedValueEqualityMatcher | undefined;

/**
 * @summary Naming matcher used when comparing subtree `LocalName`s.
 * @description
 *
 * Falls back to {@link compareElements} when no getter is supplied, or
 * when the getter does not recognize a type, matching
 * {@link dnWithinSubtreeSpecification}.
 *
 * @param {Function} [getEqualityMatcher] Attribute-type matcher lookup.
 * @returns {GetDistinguishedValueMatcher} A matcher getter that always
 * returns a matcher.
 * @function
 */
export function subtreeNamingMatcher (
    getEqualityMatcher?: SubtreeEqualityMatcherGetter,
): GetDistinguishedValueMatcher {
    if (getEqualityMatcher === undefined) {
        return (): DistinguishedValueEqualityMatcher => compareElements;
    }
    return (
        attributeType: OBJECT_IDENTIFIER,
    ): DistinguishedValueEqualityMatcher => (
        getEqualityMatcher(attributeType) ?? compareElements
    );
}

/**
 * Same bit as `MATCH_FLAG_USED_FOR_NAME` in `types/matching.mts`.
 * Inlined so this module does not import that file (it loads the
 * InformationFramework barrel and would cycle through this class).
 */
const MATCH_FLAG_USED_FOR_NAME = 1 << 0;

/**
 * Present a `Matcher` lookup as the single-value equality lookup used
 * when comparing distinguished names. Same behavior as
 * {@link valueEqualityMatcher}, without importing `matching.mts`.
 */
function namingMatcherFromDirectoryMatcher (
    getEqualityMatcher: (attributeType: AttributeType) => EqualityMatcher | undefined,
): GetDistinguishedValueMatcher {
    return (attributeType) => {
        const matcher = getEqualityMatcher(attributeType);
        if (!matcher) {
            return undefined;
        }
        return (assertion, value) => matcher(
            assertion,
            new AttributeTypeAndValue(attributeType, value),
            getEqualityMatcher,
            MATCH_FLAG_USED_FOR_NAME,
        ) === true;
    };
}

/**
 * Present a distinguished-value getter as the `Matcher` lookup
 * {@link subtreeIntersection} requires. When omitted, names compare
 * with {@link compareElements}, matching {@link dnWithinSubtreeSpecification}.
 */
export function subtreeIntersectionMatcherGetter (
    getEqualityMatcher?: SubtreeEqualityMatcherGetter,
): (attributeType: AttributeType) => EqualityMatcher | undefined {
    if (getEqualityMatcher === undefined) {
        return (_type: AttributeType) => (
            assertion,
            valueOrValues,
        ) => {
            if (!(valueOrValues instanceof AttributeTypeAndValue)) {
                return undefined;
            }
            return compareElements(assertion as ASN1Element, valueOrValues.value);
        };
    }
    return (attributeType: AttributeType) => {
        const eq = getEqualityMatcher(attributeType);
        if (eq === undefined) {
            return undefined;
        }
        return (assertion, valueOrValues) => {
            if (!(valueOrValues instanceof AttributeTypeAndValue)) {
                return undefined;
            }
            return eq(assertion as ASN1Element, valueOrValues.value);
        };
    };
}

/**
 * @summary Whether `prefix` is a prefix of `name` (or equal to it).
 * @param {DistinguishedName} prefix The asserted prefix.
 * @param {DistinguishedName} name The name that might start with `prefix`.
 * @param {GetDistinguishedValueMatcher} matcher Naming equality matcher.
 * @returns {boolean} `true` iff `name` starts with `prefix`.
 * @function
 */
export function isPrefix (
    prefix: DistinguishedName,
    name: DistinguishedName,
    matcher: GetDistinguishedValueMatcher,
): boolean {
    return compareRDNSequence(
        prefix,
        name.slice(0, prefix.length),
        matcher,
    );
}

/**
 * @summary Whether two refinements are structurally equal.
 * @description
 *
 * `and` / `or` are ASN.1 SETs, so member order does not matter. `item`
 * object identifiers compare with `isEqualTo`. Unrecognized CHOICE
 * extensions compare as ASN.1 elements.
 *
 * @param {Refinement} [a] One refinement, or absent.
 * @param {Refinement} [b] The other refinement, or absent.
 * @returns {boolean} `true` iff both omitted or structurally equal.
 * @function
 */
export function refinementsAreEqual (
    a: Refinement | undefined,
    b: Refinement | undefined,
): boolean {
    if (a === undefined && b === undefined) {
        return true;
    }
    if ((a === undefined) || (b === undefined)) {
        return false;
    }
    if ("item" in a) {
        return ("item" in b) && a.item.isEqualTo(b.item);
    }
    if ("not" in a) {
        return ("not" in b) && refinementsAreEqual(a.not, b.not);
    }
    if ("and" in a) {
        return ("and" in b) && refinementSetsAreEqual(a.and, b.and);
    }
    if ("or" in a) {
        return ("or" in b) && refinementSetsAreEqual(a.or, b.or);
    }
    if ("item" in b || "not" in b || "and" in b || "or" in b) {
        return false;
    }
    return compareElements(a, b);
}

/**
 * @summary Whether two SET OF Refinement values have the same members.
 * @param {Refinement[]} a First SET.
 * @param {Refinement[]} b Second SET.
 * @returns {boolean} `true` iff the SETs are equal.
 * @function
 */
function refinementSetsAreEqual (
    a: Refinement[],
    b: Refinement[],
): boolean {
    if (a.length !== b.length) {
        return false;
    }
    const used: boolean[] = b.map(() => false);
    for (const member of a) {
        const index = b.findIndex((other, i) => (
            !used[i] && refinementsAreEqual(member, other)
        ));
        if (index < 0) {
            return false;
        }
        used[index] = true;
    }
    return true;
}

/**
 * @summary Whether two chop points name the same exclusion.
 * @param {ChopSpecification_specificExclusions_Item} a First chop.
 * @param {ChopSpecification_specificExclusions_Item} b Second chop.
 * @param {GetDistinguishedValueMatcher} matcher Naming equality matcher.
 * @returns {boolean} `true` iff the chops match.
 * @function
 */
export function chopsAreEqual (
    a: ChopSpecification_specificExclusions_Item,
    b: ChopSpecification_specificExclusions_Item,
    matcher: GetDistinguishedValueMatcher,
): boolean {
    if ("chopBefore" in a) {
        return ("chopBefore" in b)
            && compareRDNSequence(a.chopBefore, b.chopBefore, matcher);
    }
    if ("chopAfter" in a) {
        return ("chopAfter" in b)
            && compareRDNSequence(a.chopAfter, b.chopAfter, matcher);
    }
    if ("chopBefore" in b || "chopAfter" in b) {
        return false;
    }
    return compareElements(a, b);
}

/**
 * @summary Whether two SET OF chops have the same members.
 * @param {ChopSpecification_specificExclusions_Item[]} [a] First SET.
 * @param {ChopSpecification_specificExclusions_Item[]} [b] Second SET.
 * @param {GetDistinguishedValueMatcher} matcher Naming equality matcher.
 * @returns {boolean} `true` iff both omitted/empty or equal as SETs.
 * @function
 */
export function chopSetsAreEqual (
    a: ChopSpecification_specificExclusions_Item[] | undefined,
    b: ChopSpecification_specificExclusions_Item[] | undefined,
    matcher: GetDistinguishedValueMatcher,
): boolean {
    const left = a ?? [];
    const right = b ?? [];
    if (left.length !== right.length) {
        return false;
    }
    const used: boolean[] = right.map(() => false);
    for (const member of left) {
        const index = right.findIndex((other, i) => (
            !used[i] && chopsAreEqual(member, other, matcher)
        ));
        if (index < 0) {
            return false;
        }
        used[index] = true;
    }
    return true;
}

/**
 * Combine two refinements for union: either may hold. Absent means
 * unrestricted, so the union is unrestricted.
 */
function unionRefinement (
    a: Refinement | undefined,
    b: Refinement | undefined,
): Refinement | undefined {
    if (a && b) {
        if (refinementsAreEqual(a, b)) {
            return a;
        }
        return { or: [ a, b ] };
    }
    return undefined;
}

function optionalChops (
    chops: ChopSpecification_specificExclusions_Item[],
): ChopSpecification_specificExclusions_Item[] | undefined {
    return (chops.length > 0) ? chops : undefined;
}

function optionalMinimum (minimum: number): number | undefined {
    return (minimum === 0) ? undefined : minimum;
}

function optionalMaximum (maximum: number): number | undefined {
    return Number.isFinite(maximum) ? maximum : undefined;
}

function rebaseChopTo (
    spex: ChopSpecification_specificExclusions_Item,
    fromBase: DistinguishedName,
    toBase: DistinguishedName,
    matcher: GetDistinguishedValueMatcher,
): ChopSpecification_specificExclusions_Item | undefined {
    if ("chopBefore" in spex) {
        const chop_fqdn: DistinguishedName = [ ...fromBase, ...spex.chopBefore ];
        if (!isPrefix(toBase, chop_fqdn, matcher)) {
            return undefined;
        }
        return { chopBefore: chop_fqdn.slice(toBase.length) };
    }
    if ("chopAfter" in spex) {
        const chop_fqdn: DistinguishedName = [ ...fromBase, ...spex.chopAfter ];
        if (!isPrefix(toBase, chop_fqdn, matcher)) {
            return undefined;
        }
        return { chopAfter: chop_fqdn.slice(toBase.length) };
    }
    return spex;
}

/**
 * @summary Get a subtree specification that is the intersection of two subtrees
 * @description
 *
 * This function takes two subtree specifications and the distinguished names of
 * their roots and returns a single subtree specification that consitutes the
 * intersection of the aforementioned, as well as its root distinguished name.
 * If there is no intersection, `null` is returned.
 *
 * This function accounts for minimum, maximum, chops, base, and refinement.
 *
 * @param ctx The context object
 * @param a A subtree specification
 * @param b A subtree specification
 * @param a_root The context prefix of the first subtree specification
 * @param b_root The context prefix of the second subtree specification
 * @returns The subtree specification and the DN of the root of said subtree
 *  specification that constitutes of the intersection of the supplied subtrees,
 *  or `null` if there is no overlap.
 *
 * @function
 */
export
function subtreeIntersection (
    getEqualityMatcher: (attributeType: AttributeType) => EqualityMatcher | undefined,
    a: SubtreeSpecification,
    b: SubtreeSpecification,
    a_root: RDNSequenceDescending = asDITDescending([]),
    b_root: RDNSequenceDescending = asDITDescending([]),
): [ SubtreeSpecification, DistinguishedName ] | null {
    const matcher = namingMatcherFromDirectoryMatcher(getEqualityMatcher);
    const a_base_dn: RDNSequenceDescending = asDITDescending([ ...a_root, ...(a.base ?? []) ]);
    const b_base_dn: RDNSequenceDescending = asDITDescending([ ...b_root, ...(b.base ?? []) ]);
    const a_is_prefix = dnStartsWith(b_base_dn, a_base_dn, matcher);
    const b_is_prefix = dnStartsWith(a_base_dn, b_base_dn, matcher);
    if (!a_is_prefix && !b_is_prefix) {
        // If neither base is a prefix of each other, there is no overlap.
        return null;
    }
    const prefix_fqdn = a_is_prefix ? a_base_dn : b_base_dn;
    const inner_fqdn  = a_is_prefix ? b_base_dn : a_base_dn;

    const prefix_subtree = a_is_prefix ? a : b;
    const inner_subtree  = a_is_prefix ? b : a;

    // These need to be relative to the full Base DN so that they are comparable.
    const a_min = a_base_dn.length + Number(a.minimum ?? 0);
    const b_min = b_base_dn.length + Number(b.minimum ?? 0);
    // Absent `maximum` is unbounded. Do not add a length to
    // `Number.MAX_SAFE_INTEGER`: the sum is not exactly representable, so a
    // nested unbounded intersection would get a bogus finite `maximum`.
    const a_max = (a.maximum === undefined)
        ? Number.POSITIVE_INFINITY
        : (a_base_dn.length + Number(a.maximum));
    const b_max = (b.maximum === undefined)
        ? Number.POSITIVE_INFINITY
        : (b_base_dn.length + Number(b.maximum));

    // Get the globally strictest (largest) minimum.
    // then subtract the inner FQDN length to get the relative minimum.
    const minimum = Math.max(a_min, b_min) - inner_fqdn.length;
    const maximum = Math.min(a_max, b_max) - inner_fqdn.length;

    /* This should be >, not >=. Think about it: a minimum of 1 means the
    entries immediately below the base are included. A maximum of 1 means
    that the one RDN below the base is accepted (an inclusive bound). That
    means that there is overlap until minimum becomes 2 or more. */
    if (minimum > maximum) {
        // If minimum is greater than maximum, it means there is no "vertical"
        // overlap between the subtrees.
        return null;
    }

    // If any specific exclusion from the prefix subtree names the inner subtree, return null.
    // In addition, we adjust the specific exclusions to make them relative to the inner base.
    const prefix_specific_exclusions: NonNullable<SubtreeSpecification["specificExclusions"]> = [];
    for (const spex of prefix_subtree.specificExclusions ?? []) {
        if ("chopBefore" in spex) {
            const chop_fqdn = asDITDescending([ ...prefix_fqdn, ...spex.chopBefore ]);
            if (dnStartsWith(inner_fqdn, chop_fqdn, matcher)) {
                // If the chop excludes the whole intersection, return null.
                return null;
            }
            // We have to make sure the chop actually appears in the intersection still.
            if (dnStartsWith(chop_fqdn, inner_fqdn, matcher)) {
                const adjusted_chop = chop_fqdn.slice(inner_fqdn.length);
                if (adjusted_chop.length === 0) {
                    return null; // The whole intersection is excluded by a chop.
                }
                prefix_specific_exclusions.push({ chopBefore: adjusted_chop });
            }
        }
        else if ("chopAfter" in spex) {
            const chop_fqdn = asDITDescending([ ...prefix_fqdn, ...spex.chopAfter ]);
            if (dnStartsWith(asDITDescending(inner_fqdn.slice(0, -1)), chop_fqdn, matcher)) {
                // If the chop excludes the whole intersection, return null.
                return null;
            }
            // We have to make sure the chop actually appears in the intersection still.
            if (dnStartsWith(chop_fqdn, inner_fqdn, matcher)) {
                const adjusted_chop = chop_fqdn.slice(inner_fqdn.length);
                prefix_specific_exclusions.push({ chopAfter: adjusted_chop });
            }
        }
        else {
            prefix_specific_exclusions.push(spex);
        }
    }

    const refinement: Refinement | undefined = a.specificationFilter && b.specificationFilter
        ? {
            and: [ // There may be duplicated conditions here, but that does not matter.
                a.specificationFilter,
                b.specificationFilter,
            ]
        }
        : a.specificationFilter ?? b.specificationFilter;
    const adjusted_specific_exclusions = [
        ...prefix_specific_exclusions, // The prefix subtree SEs can only be included after having been "re-based."
        ...inner_subtree.specificExclusions ?? [], // The inner subtree SEs can remain.
    ];

    return [
        new SubtreeSpecification(
            undefined,
            adjusted_specific_exclusions.length > 0
                ? adjusted_specific_exclusions
                : undefined,
            minimum === 0 ? undefined : minimum,
            (maximum === Number.MAX_SAFE_INTEGER || !Number.isFinite(maximum))
                ? undefined
                : maximum,
            refinement,
        ),
        inner_fqdn,
    ];
}

function chopExcludesName (
    spex: ChopSpecification_specificExclusions_Item,
    spexBase: DistinguishedName,
    name: DistinguishedName,
    matcher: GetDistinguishedValueMatcher,
): boolean {
    if ("chopBefore" in spex) {
        const chop_fqdn: DistinguishedName = [ ...spexBase, ...spex.chopBefore ];
        return isPrefix(chop_fqdn, name, matcher);
    }
    if ("chopAfter" in spex) {
        const chop_fqdn: DistinguishedName = [ ...spexBase, ...spex.chopAfter ];
        return (name.length > chop_fqdn.length)
            && isPrefix(chop_fqdn, name, matcher);
    }
    return false;
}

function commonPrefixLength (
    a: DistinguishedName,
    b: DistinguishedName,
    matcher: GetDistinguishedValueMatcher,
): number {
    const n = Math.min(a.length, b.length);
    let i = 0;
    for (; i < n; i++) {
        if (!compareRDNSequence([ a[i] ], [ b[i] ], matcher)) {
            break;
        }
    }
    return i;
}

/**
 * @summary Get a subtree specification that is the union of two subtrees
 * @description
 *
 * Inspired by the VS Code `Range.union` API: the smallest covering
 * subtree specification, filling any gap between the two bases. The
 * result is relative to the common prefix of the two fully-qualified
 * bases, which is returned as the root distinguished name.
 *
 * A gap between sibling bases is filled (entries between them are
 * included). Chops that would exclude the other operand are dropped so
 * that operand remains in the union. If either specification is
 * unrefined, the union is unrefined.
 *
 * @param {SubtreeSpecification} a A subtree specification
 * @param {SubtreeSpecification} b A subtree specification
 * @param {DistinguishedName} a_root The context prefix of the first subtree specification
 * @param {DistinguishedName} b_root The context prefix of the second subtree specification
 * @param {Function} [getEqualityMatcher] Optional naming equality matcher lookup
 * @returns The covering subtree specification and the DN of its root
 *
 * @function
 */
export function subtreeUnion (
    a: SubtreeSpecification,
    b: SubtreeSpecification,
    a_root: DistinguishedName = [],
    b_root: DistinguishedName = [],
    getEqualityMatcher?: SubtreeEqualityMatcherGetter,
): [ SubtreeSpecification, DistinguishedName ] {
    const matcher = subtreeNamingMatcher(getEqualityMatcher);
    const a_base_dn: DistinguishedName = [ ...a_root, ...(a.base ?? []) ];
    const b_base_dn: DistinguishedName = [ ...b_root, ...(b.base ?? []) ];
    const common: DistinguishedName = a_base_dn.slice(
        0,
        commonPrefixLength(a_base_dn, b_base_dn, matcher),
    );

    const a_min = a_base_dn.length + Number(a.minimum ?? 0);
    const b_min = b_base_dn.length + Number(b.minimum ?? 0);
    const a_max = (a.maximum === undefined)
        ? Number.POSITIVE_INFINITY
        : (a_base_dn.length + Number(a.maximum));
    const b_max = (b.maximum === undefined)
        ? Number.POSITIVE_INFINITY
        : (b_base_dn.length + Number(b.maximum));

    const minimum = Math.max(0, Math.min(a_min, b_min) - common.length);
    const maximum = Math.max(a_max, b_max) - common.length;

    const adjusted_specific_exclusions: NonNullable<SubtreeSpecification["specificExclusions"]> = [];
    for (const spex of a.specificExclusions ?? []) {
        if (chopExcludesName(spex, a_base_dn, b_base_dn, matcher)) {
            continue;
        }
        const rebased = rebaseChopTo(spex, a_base_dn, common, matcher);
        if (rebased !== undefined) {
            adjusted_specific_exclusions.push(rebased);
        }
    }
    for (const spex of b.specificExclusions ?? []) {
        if (chopExcludesName(spex, b_base_dn, a_base_dn, matcher)) {
            continue;
        }
        const rebased = rebaseChopTo(spex, b_base_dn, common, matcher);
        if (rebased === undefined) {
            continue;
        }
        const duplicate = adjusted_specific_exclusions.some(
            (existing) => chopsAreEqual(existing, rebased, matcher),
        );
        if (!duplicate) {
            adjusted_specific_exclusions.push(rebased);
        }
    }

    return [
        new SubtreeSpecification(
            undefined,
            optionalChops(adjusted_specific_exclusions),
            optionalMinimum(minimum),
            optionalMaximum(maximum),
            unionRefinement(a.specificationFilter, b.specificationFilter),
        ),
        common,
    ];
}

export default subtreeIntersection;
