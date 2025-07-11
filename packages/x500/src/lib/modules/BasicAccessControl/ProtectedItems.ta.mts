/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    NULL,
    OPTIONAL,
    OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    MaxValueCount,
    _decode_MaxValueCount,
    _encode_MaxValueCount,
} from "../BasicAccessControl/MaxValueCount.ta.mjs";
import {
    RestrictedValue,
    _decode_RestrictedValue,
    _encode_RestrictedValue,
} from "../BasicAccessControl/RestrictedValue.ta.mjs";
import {
    Filter,
    _decode_Filter,
    _encode_Filter,
} from "../DirectoryAbstractService/Filter.ta.mjs";
import {
    AttributeType,
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
    _decode_ContextAssertion,
    _encode_ContextAssertion,
} from "../InformationFramework/ContextAssertion.ta.mjs";
import {
    Refinement,
    _decode_Refinement,
    _encode_Refinement,
} from "../InformationFramework/Refinement.ta.mjs";
/**
 * @summary ProtectedItems
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectedItems ::= SEQUENCE {
 *   entry                          [0]  NULL OPTIONAL,
 *   allUserAttributeTypes          [1]  NULL OPTIONAL,
 *   attributeType                  [2]  SET SIZE (1..MAX) OF AttributeType
 *                                         OPTIONAL,
 *   allAttributeValues             [3]  SET SIZE (1..MAX) OF AttributeType
 *                                         OPTIONAL,
 *   allUserAttributeTypesAndValues [4]  NULL OPTIONAL,
 *   attributeValue                 [5]  SET SIZE (1..MAX) OF AttributeTypeAndValue
 *                                         OPTIONAL,
 *   selfValue                      [6]  SET SIZE (1..MAX) OF AttributeType
 *                                         OPTIONAL,
 *   rangeOfValues                  [7]  Filter OPTIONAL,
 *   maxValueCount                  [8]  SET SIZE (1..MAX) OF MaxValueCount
 *                                         OPTIONAL,
 *   maxImmSub                      [9]  INTEGER OPTIONAL,
 *   restrictedBy                   [10] SET SIZE (1..MAX) OF RestrictedValue
 *                                         OPTIONAL,
 *   contexts                       [11] SET SIZE (1..MAX) OF ContextAssertion
 *                                         OPTIONAL,
 *   classes                        [12] Refinement OPTIONAL,
 *   entryMethods                   [30] SET OF OBJECT IDENTIFIER OPTIONAL,
 *   ... }
 * ```
 *
 */
export class ProtectedItems {
    constructor(
        /**
         * @summary `entry`.
         * @public
         * @readonly
         */
        readonly entry?: OPTIONAL<NULL>,
        /**
         * @summary `allUserAttributeTypes`.
         * @public
         * @readonly
         */
        readonly allUserAttributeTypes?: OPTIONAL<NULL>,
        /**
         * @summary `attributeType`.
         * @public
         * @readonly
         */
        readonly attributeType?: OPTIONAL<AttributeType[]>,
        /**
         * @summary `allAttributeValues`.
         * @public
         * @readonly
         */
        readonly allAttributeValues?: OPTIONAL<AttributeType[]>,
        /**
         * @summary `allUserAttributeTypesAndValues`.
         * @public
         * @readonly
         */
        readonly allUserAttributeTypesAndValues?: OPTIONAL<NULL>,
        /**
         * @summary `attributeValue`.
         * @public
         * @readonly
         */
        readonly attributeValue?: OPTIONAL<AttributeTypeAndValue[]>,
        /**
         * @summary `selfValue`.
         * @public
         * @readonly
         */
        readonly selfValue?: OPTIONAL<AttributeType[]>,
        /**
         * @summary `rangeOfValues`.
         * @public
         * @readonly
         */
        readonly rangeOfValues?: OPTIONAL<Filter>,
        /**
         * @summary `maxValueCount`.
         * @public
         * @readonly
         */
        readonly maxValueCount?: OPTIONAL<MaxValueCount[]>,
        /**
         * @summary `maxImmSub`.
         * @public
         * @readonly
         */
        readonly maxImmSub?: OPTIONAL<INTEGER>,
        /**
         * @summary `restrictedBy`.
         * @public
         * @readonly
         */
        readonly restrictedBy?: OPTIONAL<RestrictedValue[]>,
        /**
         * @summary `contexts`.
         * @public
         * @readonly
         */
        readonly contexts?: OPTIONAL<ContextAssertion[]>,
        /**
         * @summary `classes`.
         * @public
         * @readonly
         */
        readonly classes?: OPTIONAL<Refinement>,
        /**
         * @summary `entryMethods`.
         * @public
         * @readonly
         */
        readonly entryMethods?: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

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
