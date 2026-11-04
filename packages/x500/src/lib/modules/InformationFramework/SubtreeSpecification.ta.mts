/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    asDITDescending,
    compareRDNSequence,
    dnStartsWith,
    rdnSequenceToJSON,
    rdnSequenceToString,
    type DistinguishedName,
    type GetDistinguishedValueMatcher,
    type RDNSequenceDescending,
    type RDNSequenceJSON,
} from "@wildboar/dn";
import {
    type BaseDistance,
    _decode_BaseDistance,
    _encode_BaseDistance,
} from "../InformationFramework/BaseDistance.ta.mjs";
import {
    type ChopSpecification_specificExclusions_Item,
    _decode_ChopSpecification_specificExclusions_Item,
    _encode_ChopSpecification_specificExclusions_Item,
} from "../InformationFramework/ChopSpecification-specificExclusions-Item.ta.mjs";
import {
    type LocalName,
    _decode_LocalName,
    _encode_LocalName,
} from "../InformationFramework/LocalName.ta.mjs";
import {
    type Refinement,
    _decode_Refinement,
    _encode_Refinement,
} from "../InformationFramework/Refinement.ta.mjs";
import {
    ChopSpecification,
    _root_component_type_list_1_spec_for_ChopSpecification,
} from "../InformationFramework/ChopSpecification.ta.mjs";
import { integerToJSON, integerToString } from "../../json.mjs";
import compareElements from "../../comparators/compareElements.mjs";

/**
 * JSON Encoding Rules encoding of {@link Refinement}.
 */
export type RefinementJSON =
    | { item: string }
    | { and: RefinementJSON[] }
    | { or: RefinementJSON[] }
    | { not: RefinementJSON };

/**
 * JSON Encoding Rules encoding of one
 * {@link ChopSpecification_specificExclusions_Item}.
 */
export type ChopSpecification_specificExclusions_ItemJSON =
    | { chopBefore: RDNSequenceJSON }
    | { chopAfter: RDNSequenceJSON };

/**
 * JSON Encoding Rules encoding of {@link SubtreeSpecification}.
 */
export type SubtreeSpecificationJSON = {
    base?: RDNSequenceJSON;
    specificExclusions?: ChopSpecification_specificExclusions_ItemJSON[];
    minimum?: number | string;
    maximum?: number | string;
    specificationFilter?: RefinementJSON;
};

function localNameOrDefault (name: OPTIONAL<LocalName>): LocalName {
    return name ?? [];
}

function baseDistanceOrDefault (
    distance: OPTIONAL<BaseDistance>,
    defaultValue: BaseDistance,
): BaseDistance {
    return distance ?? defaultValue;
}

function baseDistancesEqual (
    a: OPTIONAL<BaseDistance>,
    b: OPTIONAL<BaseDistance>,
    defaultValue?: BaseDistance,
): boolean {
    const left: OPTIONAL<BaseDistance> = (defaultValue === undefined)
        ? a
        : baseDistanceOrDefault(a, defaultValue);
    const right: OPTIONAL<BaseDistance> = (defaultValue === undefined)
        ? b
        : baseDistanceOrDefault(b, defaultValue);
    if (left === undefined && right === undefined) {
        return true;
    }
    if (left === undefined || right === undefined) {
        return false;
    }
    return BigInt(left) === BigInt(right);
}

function localNamesEqual (
    a: OPTIONAL<LocalName>,
    b: OPTIONAL<LocalName>,
    getMatcher?: GetDistinguishedValueMatcher,
): boolean {
    return compareRDNSequence(
        localNameOrDefault(a),
        localNameOrDefault(b),
        getMatcher,
    );
}

function chopEquals (
    a: ChopSpecification_specificExclusions_Item,
    b: ChopSpecification_specificExclusions_Item,
    getMatcher?: GetDistinguishedValueMatcher,
): boolean {
    if ("chopBefore" in a) {
        return ("chopBefore" in b)
            && compareRDNSequence(a.chopBefore, b.chopBefore, getMatcher);
    }
    if ("chopAfter" in a) {
        return ("chopAfter" in b)
            && compareRDNSequence(a.chopAfter, b.chopAfter, getMatcher);
    }
    if (("chopBefore" in b) || ("chopAfter" in b)) {
        return false;
    }
    return compareElements(a, b);
}

function setOfChopsEqual (
    a: OPTIONAL<ChopSpecification_specificExclusions_Item[]>,
    b: OPTIONAL<ChopSpecification_specificExclusions_Item[]>,
    getMatcher?: GetDistinguishedValueMatcher,
): boolean {
    const left = a ?? [];
    const right = b ?? [];
    if (left.length !== right.length) {
        return false;
    }
    const used: boolean[] = right.map(() => false);
    for (const item of left) {
        const index = right.findIndex((candidate, i) => (
            !used[i] && chopEquals(item, candidate, getMatcher)
        ));
        if (index < 0) {
            return false;
        }
        used[index] = true;
    }
    return true;
}

function refinementsEqual (
    a: OPTIONAL<Refinement>,
    b: OPTIONAL<Refinement>,
): boolean {
    if (a === undefined && b === undefined) {
        return true;
    }
    if (a === undefined || b === undefined) {
        return false;
    }
    if ("item" in a) {
        return ("item" in b) && a.item.isEqualTo(b.item);
    }
    if ("not" in a) {
        return ("not" in b) && refinementsEqual(a.not, b.not);
    }
    if ("and" in a) {
        return ("and" in b) && setOfRefinementsEqual(a.and, b.and);
    }
    if ("or" in a) {
        return ("or" in b) && setOfRefinementsEqual(a.or, b.or);
    }
    if (("item" in b) || ("not" in b) || ("and" in b) || ("or" in b)) {
        return false;
    }
    return compareElements(a, b);
}

function setOfRefinementsEqual (
    a: Refinement[],
    b: Refinement[],
): boolean {
    if (a.length !== b.length) {
        return false;
    }
    const used: boolean[] = b.map(() => false);
    for (const item of a) {
        const index = b.findIndex((candidate, i) => (
            !used[i] && refinementsEqual(item, candidate)
        ));
        if (index < 0) {
            return false;
        }
        used[index] = true;
    }
    return true;
}

function quotedLocalName (name: LocalName): string {
    return JSON.stringify(rdnSequenceToString(name));
}

function chopToString (
    chop: ChopSpecification_specificExclusions_Item,
): string | undefined {
    if ("chopBefore" in chop) {
        return `chopBefore:${quotedLocalName(chop.chopBefore)}`;
    }
    if ("chopAfter" in chop) {
        return `chopAfter:${quotedLocalName(chop.chopAfter)}`;
    }
    return undefined;
}

function refinementToString (refinement: Refinement): string | undefined {
    if ("item" in refinement) {
        return `item:${refinement.item.toString()}`;
    }
    if ("and" in refinement) {
        const items = refinement.and
            .map(refinementToString)
            .filter((item): item is string => item !== undefined);
        return `and:{ ${items.join(", ")} }`;
    }
    if ("or" in refinement) {
        const items = refinement.or
            .map(refinementToString)
            .filter((item): item is string => item !== undefined);
        return `or:{ ${items.join(", ")} }`;
    }
    if ("not" in refinement) {
        const inner = refinementToString(refinement.not);
        return inner ? `not:${inner}` : undefined;
    }
    return undefined;
}

function chopToJSON (
    chop: ChopSpecification_specificExclusions_Item,
): ChopSpecification_specificExclusions_ItemJSON | undefined {
    if ("chopBefore" in chop) {
        return { chopBefore: rdnSequenceToJSON(chop.chopBefore) };
    }
    if ("chopAfter" in chop) {
        return { chopAfter: rdnSequenceToJSON(chop.chopAfter) };
    }
    return undefined;
}

function refinementToJSON (
    refinement: Refinement,
): RefinementJSON | undefined {
    if ("item" in refinement) {
        return { item: refinement.item.toString() };
    }
    if ("and" in refinement) {
        const items: RefinementJSON[] = [];
        for (const item of refinement.and) {
            const json = refinementToJSON(item);
            if (json) {
                items.push(json);
            }
        }
        return { and: items };
    }
    if ("or" in refinement) {
        const items: RefinementJSON[] = [];
        for (const item of refinement.or) {
            const json = refinementToJSON(item);
            if (json) {
                items.push(json);
            }
        }
        return { or: items };
    }
    if ("not" in refinement) {
        const inner = refinementToJSON(refinement.not);
        return inner ? { not: inner } : undefined;
    }
    return undefined;
}

/**
 * @summary SubtreeSpecification
 * @description
 *
 * Selects a subtree (or a non-contiguous "refinement") within an
 * administrative area. Empty sequence `{}` means the whole area implied by
 * context (the administrative point). `base` defaults to `{}` (the context
 * vertex). Chop components (`specificExclusions`, `minimum`, `maximum`)
 * are relative to `base`. `specificationFilter` further restricts by
 * object class ({@link Refinement}).
 *
 * There is no `union` of two `SubtreeSpecification` values. They can
 * have incompatible `base`, `minimum`, `maximum`, chops, and
 * refinements, and no single specification can represent every
 * combination. Evaluate each specification separately (for example
 * with `dnWithinSubtreeSpecification`); if any matches, the name is
 * in the union.
 *
 * There is no `contains` either. Deciding that one specification
 * selects a subset of another requires proving that one
 * `specificationFilter` (`Refinement`) is a subset of another, which
 * this package does not attempt.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubtreeSpecification ::= SEQUENCE {
 *   base                 [0]  LocalName DEFAULT {},
 *   COMPONENTS OF             ChopSpecification,
 *   specificationFilter  [4]  Refinement OPTIONAL,
 *   ... }
 * ```
 *
 */
export class SubtreeSpecification implements ChopSpecification {
    constructor(
        /**
         * @summary `base`.
         * @public
         * @readonly
         */
        readonly base?: OPTIONAL<LocalName>,
        /**
         * @summary `specificExclusions`.
         * @public
         * @readonly
         */
        readonly specificExclusions?: OPTIONAL<
            ChopSpecification_specificExclusions_Item[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `minimum`.
         * @public
         * @readonly
         */
        readonly minimum?: OPTIONAL<BaseDistance> /* REPLICATED_COMPONENT */,
        /**
         * @summary `maximum`.
         * @public
         * @readonly
         */
        readonly maximum?: OPTIONAL<BaseDistance> /* REPLICATED_COMPONENT */,
        /**
         * @summary `specificationFilter`.
         * @public
         * @readonly
         */
        readonly specificationFilter?: OPTIONAL<Refinement>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SubtreeSpecification
     * @description
     *
     * This takes an `object` and converts it to a `SubtreeSpecification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubtreeSpecification`.
     * @returns {SubtreeSpecification}
     */
    public static _from_object(
        _o: { [_K in keyof SubtreeSpecification]: SubtreeSpecification[_K] }
    ): SubtreeSpecification {
        return new SubtreeSpecification(
            _o.base,
            _o.specificExclusions,
            _o.minimum,
            _o.maximum,
            _o.specificationFilter,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `base`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_base(): LocalName {
        return [];
    }
    /**
     * @summary Getter that returns the default value for `minimum`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_minimum(): BaseDistance {
        return 0;
    }

    /**
     * @summary Whether two subtree specifications select the same vertices
     * @description
     *
     * DEFAULT `base` `{}` and DEFAULT `minimum` `0` are applied before
     * comparison. `specificExclusions` is a SET: order does not matter.
     * Nested `and` / `or` refinements are also compared as SETs.
     * Unrecognized extensions are ignored. Unrecognized chop or
     * refinement alternatives match only another unrecognized value
     * with the same encoding.
     *
     * Distinguished names are compared with {@link compareRDNSequence}.
     * If `getMatcher` is omitted, `@wildboar/dn` uses its built-in
     * matching. If it is supplied and returns `undefined` for a
     * naming type that must be compared, that name does not match.
     *
     * @param other The other subtree specification
     * @param getMatcher Optional equality-matcher lookup for naming
     *  attribute types
     * @returns `true` iff the specifications are equal
     * @function
     * @public
     */
    public isEqualTo (
        other: SubtreeSpecification,
        getMatcher?: GetDistinguishedValueMatcher,
    ): boolean {
        if (!localNamesEqual(this.base, other.base, getMatcher)) {
            return false;
        }
        if (!setOfChopsEqual(
            this.specificExclusions,
            other.specificExclusions,
            getMatcher,
        )) {
            return false;
        }
        if (!baseDistancesEqual(
            this.minimum,
            other.minimum,
            SubtreeSpecification._default_value_for_minimum,
        )) {
            return false;
        }
        if (!baseDistancesEqual(this.maximum, other.maximum)) {
            return false;
        }
        return refinementsEqual(
            this.specificationFilter,
            other.specificationFilter,
        );
    }

    /**
     * @summary Intersection of this subtree specification and another
     * @description
     *
     * Returns a subtree specification for the overlap of this
     * specification and `other`, together with the distinguished name
     * of that overlap's root. Accounts for `base`, `minimum`,
     * `maximum`, chops, and `specificationFilter`. `null` if there is
     * no overlap.
     *
     * `thisRoot` and `otherRoot` are the context prefixes (DIT
     * descending) to which each specification is relative. Both
     * default to the root DSE.
     *
     * This is the same algorithm as `subtreeIntersection`; that
     * function wraps an X.500 `Matcher` lookup and calls this method.
     *
     * There is no `union`: incompatible `base`, `minimum`, `maximum`,
     * and other components cannot collapse into one specification.
     * Evaluate each specification separately; if any matches, the
     * name is in the union. There is no `contains` either: a
     * `Refinement` cannot be shown to be a subset of another.
     *
     * @param other The other subtree specification
     * @param getMatcher Optional equality-matcher lookup for naming
     *  attribute types
     * @param thisRoot Context prefix of this specification
     * @param otherRoot Context prefix of `other`
     * @returns The intersecting specification and its root DN, or
     *  `null`
     * @function
     * @public
     */
    public intersection (
        other: SubtreeSpecification,
        getMatcher?: GetDistinguishedValueMatcher,
        thisRoot: RDNSequenceDescending = asDITDescending([]),
        otherRoot: RDNSequenceDescending = asDITDescending([]),
    ): [ SubtreeSpecification, DistinguishedName ] | null {
        const a_base_dn: RDNSequenceDescending = asDITDescending([
            ...thisRoot,
            ...(this.base ?? []),
        ]);
        const b_base_dn: RDNSequenceDescending = asDITDescending([
            ...otherRoot,
            ...(other.base ?? []),
        ]);
        const a_is_prefix = dnStartsWith(b_base_dn, a_base_dn, getMatcher);
        const b_is_prefix = dnStartsWith(a_base_dn, b_base_dn, getMatcher);
        if (!a_is_prefix && !b_is_prefix) {
            // If neither base is a prefix of each other, there is no overlap.
            return null;
        }
        const prefix_fqdn = a_is_prefix ? a_base_dn : b_base_dn;
        const inner_fqdn  = a_is_prefix ? b_base_dn : a_base_dn;

        const prefix_subtree = a_is_prefix ? this : other;
        const inner_subtree  = a_is_prefix ? other : this;

        // These need to be relative to the full Base DN so that they are comparable.
        const a_min = a_base_dn.length + Number(this.minimum ?? 0);
        const b_min = b_base_dn.length + Number(other.minimum ?? 0);
        const a_max = a_base_dn.length + Number(this.maximum ?? Number.MAX_SAFE_INTEGER);
        const b_max = b_base_dn.length + Number(other.maximum ?? Number.MAX_SAFE_INTEGER);

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
        const prefix_specific_exclusions: SubtreeSpecification["specificExclusions"] = [];
        for (const spex of prefix_subtree.specificExclusions ?? []) {
            if ("chopBefore" in spex) {
                const chop_fqdn = asDITDescending([ ...prefix_fqdn, ...spex.chopBefore ]);
                if (dnStartsWith(inner_fqdn, chop_fqdn, getMatcher)) {
                    // If the chop excludes the whole intersection, return null.
                    return null;
                }
                // We have to make sure the chop actually appears in the intersection still.
                if (dnStartsWith(chop_fqdn, inner_fqdn, getMatcher)) {
                    const adjusted_chop = chop_fqdn.slice(inner_fqdn.length);
                    if (adjusted_chop.length === 0) {
                        return null; // The whole intersection is excluded by a chop.
                    }
                    prefix_specific_exclusions.push({ chopBefore: adjusted_chop });
                }
            }
            else if ("chopAfter" in spex) {
                const chop_fqdn = asDITDescending([ ...prefix_fqdn, ...spex.chopAfter ]);
                if (dnStartsWith(asDITDescending(inner_fqdn.slice(0, -1)), chop_fqdn, getMatcher)) {
                    // If the chop excludes the whole intersection, return null.
                    return null;
                }
                // We have to make sure the chop actually appears in the intersection still.
                if (dnStartsWith(chop_fqdn, inner_fqdn, getMatcher)) {
                    const adjusted_chop = chop_fqdn.slice(inner_fqdn.length);
                    prefix_specific_exclusions.push({ chopAfter: adjusted_chop });
                }
            }
            else {
                prefix_specific_exclusions.push(spex);
            }
        }

        const refinement: Refinement | undefined = this.specificationFilter && other.specificationFilter
            ? {
                and: [ // There may be duplicated conditions here, but that does not matter.
                    this.specificationFilter,
                    other.specificationFilter,
                ]
            }
            : this.specificationFilter ?? other.specificationFilter;
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
                maximum === Number.MAX_SAFE_INTEGER ? undefined : maximum,
                refinement,
            ),
            inner_fqdn,
        ];
    }

    /**
     * @summary GSER-like string form of this subtree specification
     * @description
     *
     * Follows the IETF RFC 3672 `SubtreeSpecification` string, with
     * local names written by {@link rdnSequenceToString} (X.500 RDN
     * order, not reversed RFC 4514 order) and quoted as JSON strings.
     * DEFAULT `base` `{}` and DEFAULT `minimum` `0` are omitted.
     * Unrecognized extensions and unrecognized chop / refinement
     * alternatives are omitted.
     *
     * @returns `{ base "cn=...", minimum 1 }` or a subset
     * @function
     * @public
     */
    public toString (): string {
        const parts: string[] = [];
        const base = this.base ?? SubtreeSpecification._default_value_for_base;
        if (base.length > 0) {
            parts.push(`base ${quotedLocalName(base)}`);
        }
        const chops = (this.specificExclusions ?? [])
            .map(chopToString)
            .filter((item): item is string => item !== undefined);
        if (chops.length > 0) {
            parts.push(`specificExclusions { ${chops.join(", ")} }`);
        }
        if (
            (this.minimum !== undefined)
            && !baseDistancesEqual(
                this.minimum,
                SubtreeSpecification._default_value_for_minimum,
            )
        ) {
            parts.push(`minimum ${integerToString(this.minimum)}`);
        }
        if (this.maximum !== undefined) {
            parts.push(`maximum ${integerToString(this.maximum)}`);
        }
        if (this.specificationFilter !== undefined) {
            const filter = refinementToString(this.specificationFilter);
            if (filter) {
                parts.push(`specificationFilter ${filter}`);
            }
        }
        return parts.length ? `{ ${parts.join(", ")} }` : "{}";
    }

    /**
     * @summary Convert this value to a JSON encoding loosely following ITU-T X.697 (JER)
     * @description
     *
     * Local names use the reversible RDN JSON from `@wildboar/dn`.
     * Object class identifiers in `specificationFilter` are
     * dotted-decimal strings. DEFAULT `base` `{}` and DEFAULT
     * `minimum` `0` are omitted. Unrecognized extensions and
     * unrecognized chop / refinement alternatives are not represented.
     *
     * @returns The JSON Encoding Rules encoding of this value
     * @function
     * @public
     */
    public toJSON (): SubtreeSpecificationJSON {
        const json: SubtreeSpecificationJSON = {};
        const base = this.base ?? SubtreeSpecification._default_value_for_base;
        if (base.length > 0) {
            json.base = rdnSequenceToJSON(base);
        }
        const chops = (this.specificExclusions ?? [])
            .map(chopToJSON)
            .filter((item): item is ChopSpecification_specificExclusions_ItemJSON => (
                item !== undefined
            ));
        if (chops.length > 0) {
            json.specificExclusions = chops;
        }
        if (
            (this.minimum !== undefined)
            && !baseDistancesEqual(
                this.minimum,
                SubtreeSpecification._default_value_for_minimum,
            )
        ) {
            json.minimum = integerToJSON(this.minimum);
        }
        if (this.maximum !== undefined) {
            json.maximum = integerToJSON(this.maximum);
        }
        if (this.specificationFilter !== undefined) {
            const filter = refinementToJSON(this.specificationFilter);
            if (filter) {
                json.specificationFilter = filter;
            }
        }
        return json;
    }
}

/**
 * @summary The Leading Root Component Types of SubtreeSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubtreeSpecification: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "base",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    ..._root_component_type_list_1_spec_for_ChopSpecification,
    new $.ComponentSpec(
        "specificationFilter",
        true,
        $.hasTag(_TagClass.context, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of SubtreeSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubtreeSpecification: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SubtreeSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubtreeSpecification: $.ComponentSpec[] = [];

let _cached_decoder_for_SubtreeSpecification: $.ASN1Decoder<SubtreeSpecification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubtreeSpecification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubtreeSpecification} The decoded data structure.
 */
export function _decode_SubtreeSpecification(el: _Element): SubtreeSpecification {
    if (!_cached_decoder_for_SubtreeSpecification) {
        _cached_decoder_for_SubtreeSpecification = function (
            el: _Element
        ): SubtreeSpecification {
            let base: OPTIONAL<LocalName> =
                SubtreeSpecification._default_value_for_base;
            let specificExclusions: OPTIONAL<
                ChopSpecification_specificExclusions_Item[]
            >;
            let minimum: OPTIONAL<BaseDistance> =
                SubtreeSpecification._default_value_for_minimum;
            let maximum: OPTIONAL<BaseDistance>;
            let specificationFilter: OPTIONAL<Refinement>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                base: (_el: _Element): void => {
                    base = $._decode_explicit<LocalName>(
                        () => _decode_LocalName
                    )(_el);
                },
                specificExclusions: (_el: _Element): void => {
                    specificExclusions = $._decode_explicit<
                        ChopSpecification_specificExclusions_Item[]
                    >(() =>
                        $._decodeSetOf<ChopSpecification_specificExclusions_Item>(
                            () =>
                                _decode_ChopSpecification_specificExclusions_Item
                        )
                    )(_el);
                },
                minimum: (_el: _Element): void => {
                    minimum = $._decode_explicit<BaseDistance>(
                        () => _decode_BaseDistance
                    )(_el);
                },
                maximum: (_el: _Element): void => {
                    maximum = $._decode_explicit<BaseDistance>(
                        () => _decode_BaseDistance
                    )(_el);
                },
                specificationFilter: (_el: _Element): void => {
                    specificationFilter = $._decode_explicit<Refinement>(
                        () => _decode_Refinement
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SubtreeSpecification,
                _extension_additions_list_spec_for_SubtreeSpecification,
                _root_component_type_list_2_spec_for_SubtreeSpecification,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SubtreeSpecification(
                base,
                specificExclusions,
                minimum,
                maximum,
                specificationFilter,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SubtreeSpecification(el);
}

let _cached_encoder_for_SubtreeSpecification: $.ASN1Encoder<SubtreeSpecification> | null = null;

/**
 * @summary Encodes a(n) SubtreeSpecification into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubtreeSpecification, encoded as an ASN.1 Element.
 */
export function _encode_SubtreeSpecification(
    value: SubtreeSpecification,
    elGetter: $.ASN1Encoder<SubtreeSpecification>
): _Element {
    if (!_cached_encoder_for_SubtreeSpecification) {
        _cached_encoder_for_SubtreeSpecification = function (
            value: SubtreeSpecification        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.base === undefined ||
                            $.deepEq(
                                value.base,
                                SubtreeSpecification._default_value_for_base
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_LocalName,
                                      $.BER
                                  )(value.base, $.BER),
                            /* IF_ABSENT  */ value.specificExclusions ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSetOf<ChopSpecification_specificExclusions_Item>(
                                              () =>
                                                  _encode_ChopSpecification_specificExclusions_Item,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.specificExclusions, $.BER),
                            /* IF_DEFAULT */ value.minimum === undefined ||
                            $.deepEq(
                                value.minimum,
                                SubtreeSpecification._default_value_for_minimum
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_BaseDistance,
                                      $.BER
                                  )(value.minimum, $.BER),
                            /* IF_ABSENT  */ value.maximum === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_BaseDistance,
                                      $.BER
                                  )(value.maximum, $.BER),
                            /* IF_ABSENT  */ value.specificationFilter ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_Refinement,
                                      $.BER
                                  )(value.specificationFilter, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SubtreeSpecification(value, elGetter);
}


/* eslint-enable */
