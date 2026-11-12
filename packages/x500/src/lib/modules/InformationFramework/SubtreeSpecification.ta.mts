/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
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
import type { AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
import {
    asDITDescending,
    rdnSequenceToJSON,
    rdnSequenceToString,
    type RDNSequenceDescending,
    type RDNSequenceJSON,
} from "@wildboar/dn";
import type { EqualityMatcher } from "../../types/matching.mjs";
import { integerToJSON, integerToString } from "../../json.mjs";
import { subtreeIntersection } from "../../utils/subtreeIntersection.mjs";

/**
 * JSON encoding of a {@link Refinement}. An object class is a dotted
 * numeric string. The single key is the CHOICE alternative.
 */
export type RefinementJSON =
    | { item: string }
    | { and: RefinementJSON[] }
    | { or: RefinementJSON[] }
    | { not: RefinementJSON };

/**
 * JSON encoding of one `specificExclusions` alternative. The local
 * name is {@link RDNSequenceJSON} in X.500 order. An unrecognized
 * alternative is an empty object.
 */
export type SpecificExclusionJSON =
    | { chopBefore: RDNSequenceJSON }
    | { chopAfter: RDNSequenceJSON }
    | Record<string, never>;

/**
 * JSON Encoding Rules encoding of {@link SubtreeSpecification}.
 * Defaults and absent optional components are omitted.
 */
export type SubtreeSpecificationJSON = {
    base?: RDNSequenceJSON;
    specificExclusions?: SpecificExclusionJSON[];
    minimum?: number | string;
    maximum?: number | string;
    specificationFilter?: RefinementJSON;
};

/**
 * @summary Quote a string for GSER
 * @description
 *
 * [RFC 3641](https://www.rfc-editor.org/rfc/rfc3641) `StringValue`:
 * double quotes around the text, and each embedded quote doubled.
 *
 * @param text The character string
 * @returns The quoted GSER string
 */
function quoteGserString (text: string): string {
    return `"${text.replaceAll("\"", "\"\"")}"`;
}

/**
 * @summary GSER encoding of a local name
 * @description
 *
 * Printed with {@link rdnSequenceToString} and quoted. The RDNs stay
 * in X.500 DIT-descending order (the first RDN is the superior),
 * rather than LDAP DIT-ascending order.
 *
 * @param name The local name, superior first
 * @returns A quoted distinguished name in X.500 order
 */
function localNameToGser (name: LocalName): string {
    return quoteGserString(rdnSequenceToString(name));
}

/**
 * @summary GSER of a `Refinement`, or `undefined` if unrecognized
 */
function refinementToGser (refinement: Refinement): string | undefined {
    if ("item" in refinement) {
        return `item:${refinement.item.toString()}`;
    }
    if ("and" in refinement) {
        const parts: string[] = [];
        for (const inner of refinement.and) {
            const text = refinementToGser(inner);
            if (text !== undefined) {
                parts.push(text);
            }
        }
        return (parts.length > 0)
            ? `and:{ ${parts.join(", ")} }`
            : undefined;
    }
    if ("or" in refinement) {
        const parts: string[] = [];
        for (const inner of refinement.or) {
            const text = refinementToGser(inner);
            if (text !== undefined) {
                parts.push(text);
            }
        }
        return (parts.length > 0)
            ? `or:{ ${parts.join(", ")} }`
            : undefined;
    }
    if ("not" in refinement) {
        const inner = refinementToGser(refinement.not);
        return (inner === undefined) ? undefined : `not:${inner}`;
    }
    return undefined;
}

/**
 * @summary JSON of a `Refinement`, or `undefined` if unrecognized
 */
function refinementToJSON (refinement: Refinement): RefinementJSON | undefined {
    if ("item" in refinement) {
        return { item: refinement.item.toString() };
    }
    if ("and" in refinement) {
        const and: RefinementJSON[] = [];
        for (const inner of refinement.and) {
            const json = refinementToJSON(inner);
            if (json !== undefined) {
                and.push(json);
            }
        }
        return (and.length > 0) ? { and } : undefined;
    }
    if ("or" in refinement) {
        const or: RefinementJSON[] = [];
        for (const inner of refinement.or) {
            const json = refinementToJSON(inner);
            if (json !== undefined) {
                or.push(json);
            }
        }
        return (or.length > 0) ? { or } : undefined;
    }
    if ("not" in refinement) {
        const not = refinementToJSON(refinement.not);
        return (not === undefined) ? undefined : { not };
    }
    return undefined;
}

/**
 * @summary GSER of the recognized specific exclusions
 */
function specificExclusionsToGser (
    exclusions: OPTIONAL<ChopSpecification_specificExclusions_Item[]>,
): string | undefined {
    if (exclusions === undefined || exclusions.length === 0) {
        return undefined;
    }
    const parts: string[] = [];
    for (const exclusion of exclusions) {
        if ("chopBefore" in exclusion) {
            parts.push(`chopBefore:${localNameToGser(exclusion.chopBefore)}`);
        } else if ("chopAfter" in exclusion) {
            parts.push(`chopAfter:${localNameToGser(exclusion.chopAfter)}`);
        }
    }
    return (parts.length > 0) ? `{ ${parts.join(", ")} }` : undefined;
}

/**
 * @summary JSON of the specific exclusions
 * @description
 *
 * An unrecognized alternative is an empty object.
 */
function specificExclusionsToJSON (
    exclusions: OPTIONAL<ChopSpecification_specificExclusions_Item[]>,
): SpecificExclusionJSON[] | undefined {
    if (exclusions === undefined || exclusions.length === 0) {
        return undefined;
    }
    const json: SpecificExclusionJSON[] = [];
    for (const exclusion of exclusions) {
        if ("chopBefore" in exclusion) {
            json.push({
                chopBefore: rdnSequenceToJSON(exclusion.chopBefore),
            });
        } else if ("chopAfter" in exclusion) {
            json.push({
                chopAfter: rdnSequenceToJSON(exclusion.chopAfter),
            });
        } else {
            json.push({});
        }
    }
    return (json.length > 0) ? json : undefined;
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
 * `intersection` is the overlap of two specifications. There is no
 * `union`. A union of subtree specifications can have incompatible
 * bases, `minimum`, `maximum`, and chops, and there is no way to
 * create one `SubtreeSpecification` that represents every combination.
 * Evaluate each specification separately: if any matches, the
 * distinguished name is within the union.
 *
 * There is no `contains`. It is difficult to calculate, particularly
 * around {@link Refinement}. There is no known way here to prove that
 * one object-class filter is a subset of another.
 *
 * There is no `isEqualTo`. Boolean-filter comparison, which is what
 * comparing two {@link Refinement} values requires, cannot be done
 * efficiently. The best algorithms are `O(n log n)` and would require
 * a lot of complicated, cryptic code. That is not worth it.
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
     * @summary Whether this specification selects the whole context area.
     * @description
     *
     * Empty sequence `{}` means the whole area implied by context (the
     * administrative point). `base` of `{}` and `minimum` of `0` are the
     * defaults and do not narrow the selection.
     *
     * @public
     * @method
     * @returns {boolean} `true` if only defaults remain.
     */
    public isEmpty(): boolean {
        return (
            (this.base === undefined || this.base.length === 0)
            && (
                this.specificExclusions === undefined
                || this.specificExclusions.length === 0
            )
            && (
                this.minimum === undefined
                || this.minimum === 0
                || this.minimum === 0n
            )
            && this.maximum === undefined
            && this.specificationFilter === undefined
        );
    }

    /**
     * @summary Intersection of this subtree and another
     * @description
     *
     * Thin wrapper around {@link subtreeIntersection}. `root` and
     * `otherRoot` are the context prefixes the specifications are
     * relative to. An empty root is the DIT root. The result is
     * `null` when the subtrees do not overlap.
     *
     * The returned specification's `base` is empty. The distinguished
     * name of the intersection's base is the second element of the
     * pair, and the chop distances are relative to that name.
     *
     * There is no `union`. A union of subtree specifications can have
     * incompatible bases, `minimum`, `maximum`, and chops, and there
     * is no way to create one `SubtreeSpecification` that represents
     * every combination. Evaluate each specification separately: if
     * any matches, the distinguished name is within the union.
     *
     * @param {SubtreeSpecification} other The other specification.
     * @param {Function} getEqualityMatcher Equality matcher for an
     *  attribute type, used when comparing distinguished names.
     * @param {RDNSequenceDescending} root Context prefix of this
     *  specification. Defaults to the DIT root.
     * @param {RDNSequenceDescending} otherRoot Context prefix of
     *  `other`. Defaults to the DIT root.
     * @returns {[SubtreeSpecification, RDNSequenceDescending] | null} The
     *  overlap and its base distinguished name, in DIT-descending
     *  order, or `null`.
     * @function
     * @public
     */
    public intersection (
        other: SubtreeSpecification,
        getEqualityMatcher: (
            attributeType: AttributeType,
        ) => EqualityMatcher | undefined,
        root: RDNSequenceDescending = asDITDescending([]),
        otherRoot: RDNSequenceDescending = asDITDescending([]),
    ): [SubtreeSpecification, RDNSequenceDescending] | null {
        return subtreeIntersection(
            getEqualityMatcher,
            this,
            other,
            root,
            otherRoot,
        );
    }

    /**
     * @summary GSER encoding of this subtree specification
     * @description
     *
     * [RFC 3641](https://www.rfc-editor.org/rfc/rfc3641) Generic String
     * Encoding Rules, the LDAP `subtreeSpec` syntax
     * ([RFC 3672](https://www.rfc-editor.org/rfc/rfc3672#appendix-A)).
     * `base` of `{}` and `minimum` of `0` are omitted, as are absent
     * optional components. An empty specification is `{}`.
     *
     * A local name is printed with {@link rdnSequenceToString} and
     * quoted. The RDNs stay in X.500 DIT-descending order (the first
     * RDN is the superior), rather than LDAP DIT-ascending order. A
     * quotation mark in that string is doubled. A `Refinement` is
     * a GSER CHOICE (`item:`, `and:`, `or:`, `not:`), and each
     * object class is a dotted decimal.
     *
     * Unrecognized extensions and unrecognized choice alternatives
     * are omitted.
     *
     * @returns The GSER string
     * @function
     * @public
     */
    public toString (): string {
        const parts: string[] = [];
        if (this.base !== undefined && this.base.length > 0) {
            parts.push(`base ${localNameToGser(this.base)}`);
        }
        const exclusions = specificExclusionsToGser(this.specificExclusions);
        if (exclusions !== undefined) {
            parts.push(`specificExclusions ${exclusions}`);
        }
        if (
            (this.minimum !== undefined)
            && (this.minimum !== 0)
            && (this.minimum !== 0n)
        ) {
            parts.push(`minimum ${integerToString(this.minimum)}`);
        }
        if (this.maximum !== undefined) {
            parts.push(`maximum ${integerToString(this.maximum)}`);
        }
        if (this.specificationFilter !== undefined) {
            const filter = refinementToGser(this.specificationFilter);
            if (filter !== undefined) {
                parts.push(`specificationFilter ${filter}`);
            }
        }
        return (parts.length === 0) ? "{}" : `{ ${parts.join(", ")} }`;
    }

    /**
     * @summary Convert this value to a JSON encoding loosely following ITU-T X.697 (JER)
     * @description
     *
     * Absent optional components are omitted, as are `base` and
     * `minimum` when they are the defaults (`{}` and `0`). Local
     * names use the reversible RDN JSON from `@wildboar/dn`
     * ({@link rdnSequenceToJSON}), in X.500 DIT-descending order:
     * the first RDN is the superior, rather than LDAP DIT-ascending
     * order. A `Refinement` is a one-member object whose key is the
     * CHOICE alternative, and an object class is a dotted numeric
     * string. An unrecognized specific exclusion is `{}`.
     * Unrecognized extensions are not represented.
     *
     * @returns The JSON Encoding Rules encoding of this value
     * @function
     * @public
     */
    public toJSON (): SubtreeSpecificationJSON {
        const json: SubtreeSpecificationJSON = {};
        if (this.base !== undefined && this.base.length > 0) {
            json.base = rdnSequenceToJSON(this.base);
        }
        const exclusions = specificExclusionsToJSON(this.specificExclusions);
        if (exclusions !== undefined) {
            json.specificExclusions = exclusions;
        }
        if (
            (this.minimum !== undefined)
            && (this.minimum !== 0)
            && (this.minimum !== 0n)
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
