/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    type NULL,
    type OPTIONAL,
    type OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import type { AttributeTypeAndValueJSON } from "@wildboar/dn";
import {
    MaxValueCount,
    type MaxValueCountJSON,
    _decode_MaxValueCount,
    _encode_MaxValueCount,
} from "../BasicAccessControl/MaxValueCount.ta.mjs";
import {
    RestrictedValue,
    type RestrictedValueJSON,
    _decode_RestrictedValue,
    _encode_RestrictedValue,
} from "../BasicAccessControl/RestrictedValue.ta.mjs";
import {
    type Filter,
    _decode_Filter,
    _encode_Filter,
} from "../DirectoryAbstractService/Filter.ta.mjs";
import {
    type AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta.mjs";
import {
    AttributeTypeAndValue,
    _decode_AttributeTypeAndValue,
    _encode_AttributeTypeAndValue,
} from "../InformationFramework/AttributeTypeAndValue.ta.mjs";
import {
    ContextAssertion,
    type ContextAssertionJSON,
    _decode_ContextAssertion,
    _encode_ContextAssertion,
} from "../InformationFramework/ContextAssertion.ta.mjs";
import {
    type Refinement,
    _decode_Refinement,
    _encode_Refinement,
} from "../InformationFramework/Refinement.ta.mjs";
import {
    refinementToGser,
    refinementToJSON,
    type RefinementJSON,
} from "../InformationFramework/SubtreeSpecification.ta.mjs";
import {
    gserSequence,
    integerToJSON,
    integerToString,
    quoteGserString,
} from "../../json.mjs";

/**
 * JSON Encoding Rules encoding of {@link ProtectedItems}.
 * Absent or empty axes are omitted. `rangeOfValues` is omitted.
 */
export type ProtectedItemsJSON = {
    entry?: null;
    allUserAttributeTypes?: null;
    attributeType?: string[];
    allAttributeValues?: string[];
    allUserAttributeTypesAndValues?: null;
    attributeValue?: AttributeTypeAndValueJSON[];
    selfValue?: string[];
    maxValueCount?: MaxValueCountJSON[];
    maxImmSub?: number | string;
    restrictedBy?: RestrictedValueJSON[];
    contexts?: ContextAssertionJSON[];
    classes?: RefinementJSON;
    entryMethods?: string[];
};
/**
 * @summary ProtectedItems
 * @description
 *
 * SEQUENCE of optional axes; **omitted means unconstrained by that axis**.
 * Present `SET SIZE (1..MAX)` components cannot be empty (empty ≠ all).
 * `allUserAttributeTypes` is types only; `allUserAttributeTypesAndValues`
 * includes values; neither covers operational attributes. `selfValue` matches
 * the requestor's DN as a DistinguishedName or uniqueMember value.
 * `rangeOfValues` is a Filter on a fictitious single-value entry.
 * `maxValueCount` / `maxImmSub` / `restrictedBy` / `contexts` constrain **add**
 * (and import for `maxImmSub`): failure treats the ACI as not granting.
 * `classes` (Refinement) selects by object class and **ignores** `entry`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectedItems ::= SEQUENCE {
 *   entry                          [0]  NULL OPTIONAL,
 *   allUserAttributeTypes          [1]  NULL OPTIONAL,
 *   attributeType                  [2]  SET SIZE (1..MAX) OF AttributeType
 *                                         type OPTIONAL,
 *   allAttributeValues             [3]  SET SIZE (1..MAX) OF AttributeType
 *                                         type OPTIONAL,
 *   allUserAttributeTypesAndValues [4]  NULL OPTIONAL,
 *   attributeValue                 [5]  SET SIZE (1..MAX) OF AttributeTypeAndValue
 *                                         type OPTIONAL,
 *   selfValue                      [6]  SET SIZE (1..MAX) OF AttributeType
 *                                         type OPTIONAL,
 *   rangeOfValues                  [7]  Filter OPTIONAL,
 *   maxValueCount                  [8]  SET SIZE (1..MAX) OF MaxValueCount
 *                                         type OPTIONAL,
 *   maxImmSub                      [9]  INTEGER OPTIONAL,
 *   restrictedBy                   [10] SET SIZE (1..MAX) OF RestrictedValue
 *                                         type OPTIONAL,
 *   contexts                       [11] SET SIZE (1..MAX) OF ContextAssertion
 *                                         type OPTIONAL,
 *   classes                        [12] Refinement OPTIONAL,
 *   entryMethods                   [30] SET OF OBJECT IDENTIFIER OPTIONAL,
 *   ... }
 * ```
 *
 */
export class ProtectedItems {
    /**
     * @summary `entry`.
     * @description Entry contents as a whole; ignored if `classes` is present.
     * @public
     * @readonly
     */
    public readonly entry?: OPTIONAL<NULL>;
    /**
     * @summary `allUserAttributeTypes`.
     * @description All user attribute *types* (not values); excludes operational attributes.
     * @public
     * @readonly
     */
    public readonly allUserAttributeTypes?: OPTIONAL<NULL>;
    /**
     * @summary `attributeType`.
     * @public
     * @readonly
     */
    public readonly attributeType?: OPTIONAL<AttributeType[]>;
    /**
     * @summary `allAttributeValues`.
     * @public
     * @readonly
     */
    public readonly allAttributeValues?: OPTIONAL<AttributeType[]>;
    /**
     * @summary `allUserAttributeTypesAndValues`.
     * @description All user attribute types *and* values; excludes operational attributes.
     * @public
     * @readonly
     */
    public readonly allUserAttributeTypesAndValues?: OPTIONAL<NULL>;
    /**
     * @summary `attributeValue`.
     * @public
     * @readonly
     */
    public readonly attributeValue?: OPTIONAL<AttributeTypeAndValue[]>;
    /**
     * @summary `selfValue`.
     * @description Attribute types whose DistinguishedName/uniqueMember value is the requestor's name.
     * @public
     * @readonly
     */
    public readonly selfValue?: OPTIONAL<AttributeType[]>;
    /**
     * @summary `rangeOfValues`.
     * @description Filter evaluated on a fictitious entry holding only the candidate value.
     * @public
     * @readonly
     */
    public readonly rangeOfValues?: OPTIONAL<Filter>;
    /**
     * @summary `maxValueCount`.
     * @description Add constraint: if value count would exceed `maxCount`, treat as not granting add.
     * @public
     * @readonly
     */
    public readonly maxValueCount?: OPTIONAL<MaxValueCount[]>;
    /**
     * @summary `maxImmSub`.
     * @description Add/import constraint on immediate subordinates of the superior entry.
     * @public
     * @readonly
     */
    public readonly maxImmSub?: OPTIONAL<INTEGER>;
    /**
     * @summary `restrictedBy`.
     * @description Add constraint: new value must already appear in `valuesIn` of the same entry.
     * @public
     * @readonly
     */
    public readonly restrictedBy?: OPTIONAL<RestrictedValue[]>;
    /**
     * @summary `contexts`.
     * @description Add constraint: all ContextAssertions must be satisfied, else not granting add.
     * @public
     * @readonly
     */
    public readonly contexts?: OPTIONAL<ContextAssertion[]>;
    /**
     * @summary `classes`.
     * @description Refinement on object class; if present, `entry` is ignored.
     * @public
     * @readonly
     */
    public readonly classes?: OPTIONAL<Refinement>;
    /**
     * @summary `entryMethods`.
     * @public
     * @readonly
     */
    public readonly entryMethods?: OPTIONAL<OBJECT_IDENTIFIER[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    public readonly _unrecognizedExtensionsList: _Element[];

    constructor(
        entry?: OPTIONAL<NULL>,
        allUserAttributeTypes?: OPTIONAL<NULL>,
        attributeType?: OPTIONAL<AttributeType[]>,
        allAttributeValues?: OPTIONAL<AttributeType[]>,
        allUserAttributeTypesAndValues?: OPTIONAL<NULL>,
        attributeValue?: OPTIONAL<AttributeTypeAndValue[]>,
        selfValue?: OPTIONAL<AttributeType[]>,
        rangeOfValues?: OPTIONAL<Filter>,
        maxValueCount?: OPTIONAL<MaxValueCount[]>,
        maxImmSub?: OPTIONAL<INTEGER>,
        restrictedBy?: OPTIONAL<RestrictedValue[]>,
        contexts?: OPTIONAL<ContextAssertion[]>,
        classes?: OPTIONAL<Refinement>,
        entryMethods?: OPTIONAL<OBJECT_IDENTIFIER[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.entry = entry;
        this.allUserAttributeTypes = allUserAttributeTypes;
        this.attributeType = attributeType;
        this.allAttributeValues = allAttributeValues;
        this.allUserAttributeTypesAndValues = allUserAttributeTypesAndValues;
        this.attributeValue = attributeValue;
        this.selfValue = selfValue;
        this.rangeOfValues = rangeOfValues;
        this.maxValueCount = maxValueCount;
        this.maxImmSub = maxImmSub;
        this.restrictedBy = restrictedBy;
        this.contexts = contexts;
        this.classes = classes;
        this.entryMethods = entryMethods;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ProtectedItems
     * @description
     *
     * This takes an `object` and converts it to a `ProtectedItems`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProtectedItems`.
     * @returns {ProtectedItems}
     */
    public static _from_object(
        _o: { [_K in keyof ProtectedItems]: ProtectedItems[_K] }
    ): ProtectedItems {
        return new ProtectedItems(
            _o.entry,
            _o.allUserAttributeTypes,
            _o.attributeType,
            _o.allAttributeValues,
            _o.allUserAttributeTypesAndValues,
            _o.attributeValue,
            _o.selfValue,
            _o.rangeOfValues,
            _o.maxValueCount,
            _o.maxImmSub,
            _o.restrictedBy,
            _o.contexts,
            _o.classes,
            _o.entryMethods,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Whether no protection axis is present.
     * @description
     *
     * Each omitted component is unconstrained on that axis. An empty
     * `ProtectedItems` therefore constrains nothing. Present `SET SIZE
     * (1..MAX)` components cannot be empty; an empty array is treated
     * as absent.
     *
     * @public
     * @method
     * @returns {boolean} `true` if every component is absent or empty.
     */
    public isEmpty(): boolean {
        return (
            this.entry === undefined
            && this.allUserAttributeTypes === undefined
            && (this.attributeType === undefined || this.attributeType.length === 0)
            && (this.allAttributeValues === undefined || this.allAttributeValues.length === 0)
            && this.allUserAttributeTypesAndValues === undefined
            && (this.attributeValue === undefined || this.attributeValue.length === 0)
            && (this.selfValue === undefined || this.selfValue.length === 0)
            && this.rangeOfValues === undefined
            && (this.maxValueCount === undefined || this.maxValueCount.length === 0)
            && this.maxImmSub === undefined
            && (this.restrictedBy === undefined || this.restrictedBy.length === 0)
            && (this.contexts === undefined || this.contexts.length === 0)
            && this.classes === undefined
            && (this.entryMethods === undefined || this.entryMethods.length === 0)
        );
    }

    /**
     * @summary ASN.1 value notation for these protected items
     * @description
     *
     * Present axes only. `NULL` axes are `NULL`. Object identifiers
     * are dotted decimals. `attributeValue` quotes
     * {@link AttributeTypeAndValue.toString}. `classes` is
     * {@link refinementToGser}. `rangeOfValues` is omitted. Empty
     * `SET SIZE (1..MAX)` components are treated as absent.
     * Unrecognized extensions are omitted. An empty value is `{}`.
     *
     * @returns `{ entry NULL, attributeType { 2.5.4.3 } }` or a subset
     * @function
     * @public
     */
    public toString(): string {
        const parts: string[] = [];
        if (this.entry !== undefined) {
            parts.push("entry NULL");
        }
        if (this.allUserAttributeTypes !== undefined) {
            parts.push("allUserAttributeTypes NULL");
        }
        if (this.attributeType !== undefined && this.attributeType.length > 0) {
            parts.push(`attributeType ${gserSequence(this.attributeType.map((oid) => oid.toString()))}`);
        }
        if (this.allAttributeValues !== undefined && this.allAttributeValues.length > 0) {
            parts.push(`allAttributeValues ${gserSequence(this.allAttributeValues.map((oid) => oid.toString()))}`);
        }
        if (this.allUserAttributeTypesAndValues !== undefined) {
            parts.push("allUserAttributeTypesAndValues NULL");
        }
        if (this.attributeValue !== undefined && this.attributeValue.length > 0) {
            parts.push(`attributeValue ${gserSequence(this.attributeValue.map((atav) => quoteGserString(atav.toString())))}`);
        }
        if (this.selfValue !== undefined && this.selfValue.length > 0) {
            parts.push(`selfValue ${gserSequence(this.selfValue.map((oid) => oid.toString()))}`);
        }
        if (this.maxValueCount !== undefined && this.maxValueCount.length > 0) {
            parts.push(`maxValueCount ${gserSequence(this.maxValueCount.map((mvc) => mvc.toString()))}`);
        }
        if (this.maxImmSub !== undefined) {
            parts.push(`maxImmSub ${integerToString(this.maxImmSub)}`);
        }
        if (this.restrictedBy !== undefined && this.restrictedBy.length > 0) {
            parts.push(`restrictedBy ${gserSequence(this.restrictedBy.map((rv) => rv.toString()))}`);
        }
        if (this.contexts !== undefined && this.contexts.length > 0) {
            parts.push(`contexts ${gserSequence(this.contexts.map((ctx) => ctx.toString()))}`);
        }
        if (this.classes !== undefined) {
            const classes = refinementToGser(this.classes);
            if (classes !== undefined) {
                parts.push(`classes ${classes}`);
            }
        }
        if (this.entryMethods !== undefined && this.entryMethods.length > 0) {
            parts.push(`entryMethods ${gserSequence(this.entryMethods.map((oid) => oid.toString()))}`);
        }
        return gserSequence(parts);
    }

    /**
     * @summary Convert this value to a JSON encoding loosely following ITU-T X.697 (JER)
     * @description
     *
     * Present axes only. `NULL` axes are JSON `null`. Object
     * identifiers are dotted decimals. Empty `SET SIZE (1..MAX)`
     * components are treated as absent. `rangeOfValues` is omitted.
     * Unrecognized extensions are not represented.
     *
     * @returns The JSON Encoding Rules encoding of this value
     * @function
     * @public
     */
    public toJSON(): ProtectedItemsJSON {
        const json: ProtectedItemsJSON = {};
        if (this.entry !== undefined) {
            json.entry = null;
        }
        if (this.allUserAttributeTypes !== undefined) {
            json.allUserAttributeTypes = null;
        }
        if (this.attributeType !== undefined && this.attributeType.length > 0) {
            json.attributeType = this.attributeType.map((oid) => oid.toString());
        }
        if (this.allAttributeValues !== undefined && this.allAttributeValues.length > 0) {
            json.allAttributeValues = this.allAttributeValues.map((oid) => oid.toString());
        }
        if (this.allUserAttributeTypesAndValues !== undefined) {
            json.allUserAttributeTypesAndValues = null;
        }
        if (this.attributeValue !== undefined && this.attributeValue.length > 0) {
            json.attributeValue = this.attributeValue.map((atav) => atav.toJSON());
        }
        if (this.selfValue !== undefined && this.selfValue.length > 0) {
            json.selfValue = this.selfValue.map((oid) => oid.toString());
        }
        if (this.maxValueCount !== undefined && this.maxValueCount.length > 0) {
            json.maxValueCount = this.maxValueCount.map((mvc) => mvc.toJSON());
        }
        if (this.maxImmSub !== undefined) {
            json.maxImmSub = integerToJSON(this.maxImmSub);
        }
        if (this.restrictedBy !== undefined && this.restrictedBy.length > 0) {
            json.restrictedBy = this.restrictedBy.map((rv) => rv.toJSON());
        }
        if (this.contexts !== undefined && this.contexts.length > 0) {
            json.contexts = this.contexts.map((ctx) => ctx.toJSON());
        }
        if (this.classes !== undefined) {
            const classes = refinementToJSON(this.classes);
            if (classes !== undefined) {
                json.classes = classes;
            }
        }
        if (this.entryMethods !== undefined && this.entryMethods.length > 0) {
            json.entryMethods = this.entryMethods.map((oid) => oid.toString());
        }
        return json;
    }
}

/**
 * @summary The Leading Root Component Types of ProtectedItems
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProtectedItems: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "entry",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "allUserAttributeTypes",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "attributeType",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "allAttributeValues",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        "allUserAttributeTypesAndValues",
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        "attributeValue",
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        "selfValue",
        true,
        $.hasTag(_TagClass.context, 6)
    ),
    new $.ComponentSpec(
        "rangeOfValues",
        true,
        $.hasTag(_TagClass.context, 7)
    ),
    new $.ComponentSpec(
        "maxValueCount",
        true,
        $.hasTag(_TagClass.context, 8)
    ),
    new $.ComponentSpec(
        "maxImmSub",
        true,
        $.hasTag(_TagClass.context, 9)
    ),
    new $.ComponentSpec(
        "restrictedBy",
        true,
        $.hasTag(_TagClass.context, 10)
    ),
    new $.ComponentSpec(
        "contexts",
        true,
        $.hasTag(_TagClass.context, 11)
    ),
    new $.ComponentSpec(
        "classes",
        true,
        $.hasTag(_TagClass.context, 12)
    ),
    new $.ComponentSpec(
        'entryMethods',
        true,
        $.hasTag(_TagClass.context, 30)
    ),
];

/**
 * @summary The Trailing Root Component Types of ProtectedItems
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProtectedItems: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ProtectedItems
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProtectedItems: $.ComponentSpec[] = [];

let _cached_decoder_for_ProtectedItems: $.ASN1Decoder<ProtectedItems> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProtectedItems
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectedItems} The decoded data structure.
 */
export function _decode_ProtectedItems(el: _Element): ProtectedItems {
    if (!_cached_decoder_for_ProtectedItems) {
        _cached_decoder_for_ProtectedItems = function (
            el: _Element
        ): ProtectedItems {
            let entry: OPTIONAL<NULL>;
            let allUserAttributeTypes: OPTIONAL<NULL>;
            let attributeType: OPTIONAL<AttributeType[]>;
            let allAttributeValues: OPTIONAL<AttributeType[]>;
            let allUserAttributeTypesAndValues: OPTIONAL<NULL>;
            let attributeValue: OPTIONAL<AttributeTypeAndValue[]>;
            let selfValue: OPTIONAL<AttributeType[]>;
            let rangeOfValues: OPTIONAL<Filter>;
            let maxValueCount: OPTIONAL<MaxValueCount[]>;
            let maxImmSub: OPTIONAL<INTEGER>;
            let restrictedBy: OPTIONAL<RestrictedValue[]>;
            let contexts: OPTIONAL<ContextAssertion[]>;
            let classes: OPTIONAL<Refinement>;
            let entryMethods: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                entry: (_el: _Element): void => {
                    entry = $._decode_explicit<NULL>(() => $._decodeNull)(_el);
                },
                allUserAttributeTypes: (_el: _Element): void => {
                    allUserAttributeTypes = $._decode_explicit<NULL>(
                        () => $._decodeNull
                    )(_el);
                },
                attributeType: (_el: _Element): void => {
                    attributeType = $._decode_explicit<AttributeType[]>(() =>
                        $._decodeSetOf<AttributeType>(
                            () => _decode_AttributeType
                        )
                    )(_el);
                },
                allAttributeValues: (_el: _Element): void => {
                    allAttributeValues = $._decode_explicit<AttributeType[]>(
                        () =>
                            $._decodeSetOf<AttributeType>(
                                () => _decode_AttributeType
                            )
                    )(_el);
                },
                allUserAttributeTypesAndValues: (_el: _Element): void => {
                    allUserAttributeTypesAndValues = $._decode_explicit<NULL>(
                        () => $._decodeNull
                    )(_el);
                },
                attributeValue: (_el: _Element): void => {
                    attributeValue = $._decode_explicit<
                        AttributeTypeAndValue[]
                    >(() =>
                        $._decodeSetOf<AttributeTypeAndValue>(
                            () => _decode_AttributeTypeAndValue
                        )
                    )(_el);
                },
                selfValue: (_el: _Element): void => {
                    selfValue = $._decode_explicit<AttributeType[]>(() =>
                        $._decodeSetOf<AttributeType>(
                            () => _decode_AttributeType
                        )
                    )(_el);
                },
                rangeOfValues: (_el: _Element): void => {
                    rangeOfValues = $._decode_explicit<Filter>(
                        () => _decode_Filter
                    )(_el);
                },
                maxValueCount: (_el: _Element): void => {
                    maxValueCount = $._decode_explicit<MaxValueCount[]>(() =>
                        $._decodeSetOf<MaxValueCount>(
                            () => _decode_MaxValueCount
                        )
                    )(_el);
                },
                maxImmSub: (_el: _Element): void => {
                    maxImmSub = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                restrictedBy: (_el: _Element): void => {
                    restrictedBy = $._decode_explicit<RestrictedValue[]>(() =>
                        $._decodeSetOf<RestrictedValue>(
                            () => _decode_RestrictedValue
                        )
                    )(_el);
                },
                contexts: (_el: _Element): void => {
                    contexts = $._decode_explicit<ContextAssertion[]>(() =>
                        $._decodeSetOf<ContextAssertion>(
                            () => _decode_ContextAssertion
                        )
                    )(_el);
                },
                classes: (_el: _Element): void => {
                    classes = $._decode_explicit<Refinement>(
                        () => _decode_Refinement
                    )(_el);
                },
                entryMethods: (_el: _Element): void => {
                    entryMethods = $._decode_explicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ProtectedItems,
                _extension_additions_list_spec_for_ProtectedItems,
                _root_component_type_list_2_spec_for_ProtectedItems,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ProtectedItems(
                entry,
                allUserAttributeTypes,
                attributeType,
                allAttributeValues,
                allUserAttributeTypesAndValues,
                attributeValue,
                selfValue,
                rangeOfValues,
                maxValueCount,
                maxImmSub,
                restrictedBy,
                contexts,
                classes,
                entryMethods,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ProtectedItems(el);
}

let _cached_encoder_for_ProtectedItems: $.ASN1Encoder<ProtectedItems> | null = null;

/**
 * @summary Encodes a(n) ProtectedItems into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectedItems, encoded as an ASN.1 Element.
 */
export function _encode_ProtectedItems(
    value: ProtectedItems,
    elGetter: $.ASN1Encoder<ProtectedItems>
): _Element {
    if (!_cached_encoder_for_ProtectedItems) {
        _cached_encoder_for_ProtectedItems = function (
            value: ProtectedItems        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.entry === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeNull,
                                      $.DER
                                  )(value.entry, $.DER),
                            /* IF_ABSENT  */ value.allUserAttributeTypes ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeNull,
                                      $.DER
                                  )(value.allUserAttributeTypes, $.DER),
                            /* IF_ABSENT  */ value.attributeType === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<AttributeType>(
                                              () => _encode_AttributeType,
                                              $.DER
                                          ),
                                      $.DER
                                  )(value.attributeType, $.DER),
                            /* IF_ABSENT  */ value.allAttributeValues ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          $._encodeSetOf<AttributeType>(
                                              () => _encode_AttributeType,
                                              $.DER
                                          ),
                                      $.DER
                                  )(value.allAttributeValues, $.DER),
                            /* IF_ABSENT  */ value.allUserAttributeTypesAndValues ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => $._encodeNull,
                                      $.DER
                                  )(
                                      value.allUserAttributeTypesAndValues,
                                      $.DER
                                  ),
                            /* IF_ABSENT  */ value.attributeValue === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      5,
                                      () =>
                                          $._encodeSetOf<AttributeTypeAndValue>(
                                              () =>
                                                  _encode_AttributeTypeAndValue,
                                              $.DER
                                          ),
                                      $.DER
                                  )(value.attributeValue, $.DER),
                            /* IF_ABSENT  */ value.selfValue === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      6,
                                      () =>
                                          $._encodeSetOf<AttributeType>(
                                              () => _encode_AttributeType,
                                              $.DER
                                          ),
                                      $.DER
                                  )(value.selfValue, $.DER),
                            /* IF_ABSENT  */ value.rangeOfValues === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      7,
                                      () => _encode_Filter,
                                      $.DER
                                  )(value.rangeOfValues, $.DER),
                            /* IF_ABSENT  */ value.maxValueCount === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      8,
                                      () =>
                                          $._encodeSetOf<MaxValueCount>(
                                              () => _encode_MaxValueCount,
                                              $.DER
                                          ),
                                      $.DER
                                  )(value.maxValueCount, $.DER),
                            /* IF_ABSENT  */ value.maxImmSub === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      9,
                                      () => $._encodeInteger,
                                      $.DER
                                  )(value.maxImmSub, $.DER),
                            /* IF_ABSENT  */ value.restrictedBy === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      10,
                                      () =>
                                          $._encodeSetOf<RestrictedValue>(
                                              () => _encode_RestrictedValue,
                                              $.DER
                                          ),
                                      $.DER
                                  )(value.restrictedBy, $.DER),
                            /* IF_ABSENT  */ value.contexts === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      11,
                                      () =>
                                          $._encodeSetOf<ContextAssertion>(
                                              () => _encode_ContextAssertion,
                                              $.DER
                                          ),
                                      $.DER
                                  )(value.contexts, $.DER),
                            /* IF_ABSENT  */ value.classes === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      12,
                                      () => _encode_Refinement,
                                      $.DER
                                  )(value.classes, $.DER),
                            /* IF_ABSENT  */ value.entryMethods === undefined
                                ? undefined
                                : $._encode_explicit(
                                    _TagClass.context,
                                    30,
                                    () =>
                                        $._encodeSetOf<OBJECT_IDENTIFIER>(
                                            () => $._encodeObjectIdentifier,
                                            $.DER
                                        ),
                                    $.DER
                                )(value.entryMethods, $.DER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_ProtectedItems(value, elGetter);
}


/* eslint-enable */
