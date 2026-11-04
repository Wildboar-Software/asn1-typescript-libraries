/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    compareRDNSequence,
    rdnSequenceToJSON,
    rdnSequenceToString,
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
    type DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta.mjs";
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
import { dnWithinSubtreeSpecification } from "../../utils/dnWithinSubtreeSpecification.mjs";
import {
    chopSetsAreEqual,
    refinementsAreEqual,
    subtreeIntersection,
    subtreeIntersectionMatcherGetter,
    subtreeNamingMatcher,
    subtreeUnion,
    type SubtreeEqualityMatcherGetter,
} from "../../utils/subtreeIntersection.mjs";

/**
 * JSON Encoding Rules encoding of a {@link Refinement}.
 *
 * `item` is a dotted-decimal object identifier. `and` / `or` are arrays
 * (ASN.1 SET). Unrecognized CHOICE extensions are not represented.
 */
export type RefinementJSON =
    | { item: string }
    | { and: RefinementJSON[] }
    | { or: RefinementJSON[] }
    | { not: RefinementJSON };

/**
 * JSON Encoding Rules encoding of one
 * {@link ChopSpecification_specificExclusions_Item}.
 *
 * Unrecognized CHOICE extensions are not represented.
 */
export type ChopSpecificationSpecificExclusionsItemJSON =
    | { chopBefore: RDNSequenceJSON }
    | { chopAfter: RDNSequenceJSON };

/**
 * JSON Encoding Rules encoding of {@link SubtreeSpecification}.
 *
 * DEFAULT `base` (`{}`) and DEFAULT `minimum` (`0`) are omitted.
 * Unrecognized extensions are not represented.
 */
export type SubtreeSpecificationJSON = {
    base?: RDNSequenceJSON;
    specificExclusions?: ChopSpecificationSpecificExclusionsItemJSON[];
    minimum?: number | string;
    maximum?: number | string;
    specificationFilter?: RefinementJSON;
};

function gserQuotedLocalName (dn: LocalName): string {
    return `"${rdnSequenceToString(dn).replace(/"/g, "\"\"")}"`;
}

function refinementToString (refinement: Refinement): string {
    if ("item" in refinement) {
        return `item:${refinement.item.toString()}`;
    }
    if ("and" in refinement) {
        return `and:{ ${refinement.and.map(refinementToString).join(", ")} }`;
    }
    if ("or" in refinement) {
        return `or:{ ${refinement.or.map(refinementToString).join(", ")} }`;
    }
    if ("not" in refinement) {
        return `not:${refinementToString(refinement.not)}`;
    }
    return "...";
}

function chopToString (
    spex: ChopSpecification_specificExclusions_Item,
): string {
    if ("chopBefore" in spex) {
        return `chopBefore:${gserQuotedLocalName(spex.chopBefore)}`;
    }
    if ("chopAfter" in spex) {
        return `chopAfter:${gserQuotedLocalName(spex.chopAfter)}`;
    }
    return "...";
}

function refinementToJSON (
    refinement: Refinement,
): RefinementJSON | undefined {
    if ("item" in refinement) {
        return { item: refinement.item.toString() };
    }
    if ("and" in refinement) {
        return {
            and: refinement.and
                .map(refinementToJSON)
                .filter((member): member is RefinementJSON => member !== undefined),
        };
    }
    if ("or" in refinement) {
        return {
            or: refinement.or
                .map(refinementToJSON)
                .filter((member): member is RefinementJSON => member !== undefined),
        };
    }
    if ("not" in refinement) {
        const inner = refinementToJSON(refinement.not);
        return (inner === undefined) ? undefined : { not: inner };
    }
    return undefined;
}

function chopToJSON (
    spex: ChopSpecification_specificExclusions_Item,
): ChopSpecificationSpecificExclusionsItemJSON | undefined {
    if ("chopBefore" in spex) {
        return { chopBefore: rdnSequenceToJSON(spex.chopBefore) };
    }
    if ("chopAfter" in spex) {
        return { chopAfter: rdnSequenceToJSON(spex.chopAfter) };
    }
    return undefined;
}

function withRootBase (
    spec: SubtreeSpecification,
    root: DistinguishedName,
): SubtreeSpecification {
    const base: LocalName = [ ...root, ...(spec.base ?? []) ];
    return new SubtreeSpecification(
        (base.length === 0) ? undefined : base,
        spec.specificExclusions,
        spec.minimum,
        spec.maximum,
        spec.specificationFilter,
    );
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
 * Range algebra copies what works from the VS Code `Range` API:
 * immutable bounds; `contains`, `isEqualTo` (VS Code: `isEqual`),
 * `intersection`, and `union` derive new values instead of
 * mutating. A distinguished name plays the role of VS Code
 * `Position`; this specification is the range. `minimum` /
 * `maximum` are inclusive distances from `base`. Unlike VS Code
 * `Range`, inverted distances (`minimum` after `maximum`) are
 * **not** swapped: that specification contains nothing.
 * `union` fills a gap between sibling bases. DNs are printed with
 * {@link rdnSequenceToString} (X.500 RDN order).
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
     * @summary Whether two specifications select the same region.
     * @description
     *
     * Copies VS Code `Range.isEqual` (named `isEqualTo` like
     * `DayTimeBand`). DEFAULT `base` (`{}`) and DEFAULT `minimum`
     * (`0`) are applied. `specificExclusions` compare as a SET.
     * `specificationFilter` compares structurally (`and` / `or`
     * unordered). Unrecognized extensions are ignored.
     *
     * @param {SubtreeSpecification} other The other specification.
     * @param {Function} [getEqualityMatcher] Naming equality matcher.
     * @returns {boolean} `true` iff base, chops, distances, and
     * refinement match.
     * @function
     */
    public isEqualTo (
        other: SubtreeSpecification,
        getEqualityMatcher?: SubtreeEqualityMatcherGetter,
    ): boolean {
        const matcher = subtreeNamingMatcher(getEqualityMatcher);
        if (!compareRDNSequence(
            this.base ?? [],
            other.base ?? [],
            matcher,
        )) {
            return false;
        }
        if (Number(this.minimum ?? 0) !== Number(other.minimum ?? 0)) {
            return false;
        }
        if ((this.maximum === undefined) !== (other.maximum === undefined)) {
            return false;
        }
        if (
            (this.maximum !== undefined)
            && (Number(this.maximum) !== Number(other.maximum))
        ) {
            return false;
        }
        if (!chopSetsAreEqual(
            this.specificExclusions,
            other.specificExclusions,
            matcher,
        )) {
            return false;
        }
        return refinementsAreEqual(
            this.specificationFilter,
            other.specificationFilter,
        );
    }

    /**
     * @summary Whether this specification contains a DN or another
     * specification.
     * @description
     *
     * Inspired by VS Code `Range.contains`. A distinguished name is
     * the analogue of `Position`: membership uses `base`, chops, and
     * `minimum` / `maximum` (inclusive). `specificationFilter` is
     * not applied to a bare DN (object classes are not known).
     *
     * Another `SubtreeSpecification` is contained when it is a
     * subset: the {@link intersection} equals `other`. An inverted
     * (`minimum` after `maximum`) specification contains nothing,
     * and is not contained.
     *
     * @param {DistinguishedName | SubtreeSpecification} dnOrSubtree
     * A distinguished name or specification.
     * @param {Function} [getEqualityMatcher] Naming equality matcher.
     * @returns {boolean} `true` iff the name or specification is
     * inside or equal.
     * @function
     */
    public contains (
        dnOrSubtree: DistinguishedName | SubtreeSpecification,
        getEqualityMatcher?: SubtreeEqualityMatcherGetter,
    ): boolean {
        if (dnOrSubtree instanceof SubtreeSpecification) {
            const otherMin = Number(dnOrSubtree.minimum ?? 0);
            const otherMax = (dnOrSubtree.maximum === undefined)
                ? Number.POSITIVE_INFINITY
                : Number(dnOrSubtree.maximum);
            if (otherMin > otherMax) {
                return false;
            }
            const thisMin = Number(this.minimum ?? 0);
            const thisMax = (this.maximum === undefined)
                ? Number.POSITIVE_INFINITY
                : Number(this.maximum);
            if (thisMin > thisMax) {
                return false;
            }
            const overlap = this.intersection(
                dnOrSubtree,
                getEqualityMatcher,
            );
            if (overlap === undefined) {
                return false;
            }
            return overlap.isEqualTo(dnOrSubtree, getEqualityMatcher);
        }
        const unrefined: SubtreeSpecification = (
            this.specificationFilter === undefined
        )
            ? this
            : new SubtreeSpecification(
                this.base,
                this.specificExclusions,
                this.minimum,
                this.maximum,
            );
        return dnWithinSubtreeSpecification(
            dnOrSubtree,
            [],
            unrefined,
            [],
            getEqualityMatcher,
        ) === true;
    }

    /**
     * @summary Overlap of this specification and `other`, if any.
     * @description
     *
     * Inspired by VS Code `Range.intersection`. Uses
     * {@link subtreeIntersection} with an empty context prefix for
     * both operands. Returns `undefined` when the specifications do
     * not share an entry (including when either has inverted
     * distances).
     *
     * @param {SubtreeSpecification} other The other specification.
     * @param {Function} [getEqualityMatcher] Naming equality matcher.
     * @returns {SubtreeSpecification | undefined} The overlap, or
     * `undefined`.
     * @function
     */
    public intersection (
        other: SubtreeSpecification,
        getEqualityMatcher?: SubtreeEqualityMatcherGetter,
    ): SubtreeSpecification | undefined {
        const result = subtreeIntersection(
            subtreeIntersectionMatcherGetter(getEqualityMatcher),
            this,
            other,
        );
        if (result === null) {
            return undefined;
        }
        return withRootBase(result[0], result[1]);
    }

    /**
     * @summary Smallest specification covering this one and `other`.
     * @description
     *
     * Inspired by VS Code `Range.union`. Uses {@link subtreeUnion}.
     * Start is the common prefix of the two bases; distances cover
     * both. A gap between sibling bases is filled. Chops that would
     * exclude the other operand are dropped. If either is unrefined,
     * the union is unrefined.
     *
     * @param {SubtreeSpecification} other The other specification.
     * @param {Function} [getEqualityMatcher] Naming equality matcher.
     * @returns {SubtreeSpecification} One specification spanning
     * both.
     * @function
     */
    public union (
        other: SubtreeSpecification,
        getEqualityMatcher?: SubtreeEqualityMatcherGetter,
    ): SubtreeSpecification {
        const result = subtreeUnion(
            this,
            other,
            [],
            [],
            getEqualityMatcher,
        );
        return withRootBase(result[0], result[1]);
    }

    /**
     * @summary GSER snapshot of this subtree specification
     * @description
     *
     * IETF RFC 3672 Appendix A encoding, with distinguished names
     * printed by {@link rdnSequenceToString} (X.500 RDN order, not
     * reversed RFC 4514). DEFAULT `base` and `minimum` are omitted.
     * Unrecognized extensions are omitted.
     *
     * @returns `{ base "…", minimum 1, … }` or `{}`
     * @function
     * @public
     */
    public toString (): string {
        const parts: string[] = [];
        const base = this.base ?? [];
        if (base.length > 0) {
            parts.push(`base ${gserQuotedLocalName(base)}`);
        }
        if (
            (this.specificExclusions !== undefined)
            && (this.specificExclusions.length > 0)
        ) {
            const chops = this.specificExclusions
                .map(chopToString)
                .join(", ");
            parts.push(`specificExclusions { ${chops} }`);
        }
        if (
            (this.minimum !== undefined)
            && (Number(this.minimum) !== 0)
        ) {
            parts.push(`minimum ${integerToString(this.minimum)}`);
        }
        if (this.maximum !== undefined) {
            parts.push(`maximum ${integerToString(this.maximum)}`);
        }
        if (this.specificationFilter !== undefined) {
            parts.push(
                `specificationFilter ${refinementToString(this.specificationFilter)}`,
            );
        }
        return (parts.length > 0) ? `{ ${parts.join(", ")} }` : "{}";
    }

    /**
     * @summary Convert this specification to JSON loosely following
     * ITU-T X.697 (JER)
     * @description
     *
     * `base` and chops use reversible RDN JSON from `@wildboar/dn`.
     * DEFAULT `base` and `minimum` are omitted. Unrecognized
     * extensions are not represented.
     *
     * @returns The JSON Encoding Rules encoding of this value
     * @function
     * @public
     */
    public toJSON (): SubtreeSpecificationJSON {
        const json: SubtreeSpecificationJSON = {};
        const base = this.base ?? [];
        if (base.length > 0) {
            json.base = rdnSequenceToJSON(base);
        }
        if (
            (this.specificExclusions !== undefined)
            && (this.specificExclusions.length > 0)
        ) {
            json.specificExclusions = this.specificExclusions
                .map(chopToJSON)
                .filter((spex): spex is ChopSpecificationSpecificExclusionsItemJSON => (
                    spex !== undefined
                ));
        }
        if (
            (this.minimum !== undefined)
            && (Number(this.minimum) !== 0)
        ) {
            json.minimum = integerToJSON(this.minimum);
        }
        if (this.maximum !== undefined) {
            json.maximum = integerToJSON(this.maximum);
        }
        if (this.specificationFilter !== undefined) {
            const filter = refinementToJSON(this.specificationFilter);
            if (filter !== undefined) {
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
