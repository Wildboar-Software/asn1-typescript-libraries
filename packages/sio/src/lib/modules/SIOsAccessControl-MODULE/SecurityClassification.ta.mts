/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    INTEGER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ClassificationName,
    _decode_ClassificationName,
    _encode_ClassificationName,
} from "../SIOsAccessControl-MODULE/ClassificationName.ta.mjs";
import {
    EquivalentClassifications,
    _decode_EquivalentClassifications,
    _encode_EquivalentClassifications,
} from "../SIOsAccessControl-MODULE/EquivalentClassifications.ta.mjs";
import {
    LabelAndCertValue,
    _decode_LabelAndCertValue,
    _encode_LabelAndCertValue,
} from "../SIOsAccessControl-MODULE/LabelAndCertValue.ta.mjs";
import {
    MarkingDataInfo,
    _decode_MarkingDataInfo,
    _encode_MarkingDataInfo,
} from "../SIOsAccessControl-MODULE/MarkingDataInfo.ta.mjs";
import {
    OptionalCategoryGroups,
    _decode_OptionalCategoryGroups,
    _encode_OptionalCategoryGroups,
} from "../SIOsAccessControl-MODULE/OptionalCategoryGroups.ta.mjs";

/**
 * @summary SecurityClassification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityClassification ::= SEQUENCE {
 *   labelAndCertValue          LabelAndCertValue,
 *   classificationName         ClassificationName,
 *   equivalentClassifications  [0]  EquivalentClassifications OPTIONAL,
 *   hierarchyValue             INTEGER,
 *   markingData                [1]  MarkingDataInfo OPTIONAL,
 *   requiredCategory           [2]  OptionalCategoryGroups OPTIONAL,
 *   obsolete                   BOOLEAN DEFAULT FALSE
 * }
 * ```
 *
 */
export class SecurityClassification {
    constructor(
        /**
         * @summary `labelAndCertValue`.
         * @public
         * @readonly
         */
        readonly labelAndCertValue: LabelAndCertValue,
        /**
         * @summary `classificationName`.
         * @public
         * @readonly
         */
        readonly classificationName: ClassificationName,
        /**
         * @summary `equivalentClassifications`.
         * @public
         * @readonly
         */
        readonly equivalentClassifications: OPTIONAL<EquivalentClassifications>,
        /**
         * @summary `hierarchyValue`.
         * @public
         * @readonly
         */
        readonly hierarchyValue: INTEGER,
        /**
         * @summary `markingData`.
         * @public
         * @readonly
         */
        readonly markingData: OPTIONAL<MarkingDataInfo>,
        /**
         * @summary `requiredCategory`.
         * @public
         * @readonly
         */
        readonly requiredCategory: OPTIONAL<OptionalCategoryGroups>,
        /**
         * @summary `obsolete`.
         * @public
         * @readonly
         */
        readonly obsolete: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a SecurityClassification
     * @description
     *
     * This takes an `object` and converts it to a `SecurityClassification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecurityClassification`.
     * @returns {SecurityClassification}
     */
    public static _from_object(
        _o: { [_K in keyof SecurityClassification]: SecurityClassification[_K] }
    ): SecurityClassification {
        return new SecurityClassification(
            _o.labelAndCertValue,
            _o.classificationName,
            _o.equivalentClassifications,
            _o.hierarchyValue,
            _o.markingData,
            _o.requiredCategory,
            _o.obsolete
        );
    }

    /**
     * @summary Getter that returns the default value for `obsolete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_obsolete(): BOOLEAN {
        return false;
    }
}


/**
 * @summary The Leading Root Component Types of SecurityClassification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SecurityClassification: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "labelAndCertValue",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "classificationName",
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        "equivalentClassifications",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "hierarchyValue",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "markingData",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "requiredCategory",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "obsolete",
        true,
        $.hasTag(_TagClass.universal, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of SecurityClassification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SecurityClassification: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SecurityClassification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SecurityClassification: $.ComponentSpec[] = [];


let _cached_decoder_for_SecurityClassification: $.ASN1Decoder<SecurityClassification> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SecurityClassification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityClassification} The decoded data structure.
 */
export function _decode_SecurityClassification(el: _Element): SecurityClassification {
    if (!_cached_decoder_for_SecurityClassification) {
        _cached_decoder_for_SecurityClassification = function (
            el: _Element
        ): SecurityClassification {
            let labelAndCertValue!: LabelAndCertValue;
            let classificationName!: ClassificationName;
            let equivalentClassifications: OPTIONAL<EquivalentClassifications>;
            let hierarchyValue!: INTEGER;
            let markingData: OPTIONAL<MarkingDataInfo>;
            let requiredCategory: OPTIONAL<OptionalCategoryGroups>;
            let obsolete: OPTIONAL<BOOLEAN> =
                SecurityClassification._default_value_for_obsolete;
            const callbacks: $.DecodingMap = {
                labelAndCertValue: (_el: _Element): void => {
                    labelAndCertValue = _decode_LabelAndCertValue(_el);
                },
                classificationName: (_el: _Element): void => {
                    classificationName = _decode_ClassificationName(_el);
                },
                equivalentClassifications: (_el: _Element): void => {
                    equivalentClassifications = $._decode_implicit<EquivalentClassifications>(
                        () => _decode_EquivalentClassifications
                    )(_el);
                },
                hierarchyValue: (_el: _Element): void => {
                    hierarchyValue = $._decodeInteger(_el);
                },
                markingData: (_el: _Element): void => {
                    markingData = $._decode_implicit<MarkingDataInfo>(
                        () => _decode_MarkingDataInfo
                    )(_el);
                },
                requiredCategory: (_el: _Element): void => {
                    requiredCategory = $._decode_implicit<OptionalCategoryGroups>(
                        () => _decode_OptionalCategoryGroups
                    )(_el);
                },
                obsolete: (_el: _Element): void => {
                    obsolete = $._decodeBoolean(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SecurityClassification,
                _extension_additions_list_spec_for_SecurityClassification,
                _root_component_type_list_2_spec_for_SecurityClassification,
                undefined
            );
            return new SecurityClassification (
                labelAndCertValue,
                classificationName,
                equivalentClassifications,
                hierarchyValue,
                markingData,
                requiredCategory,
                obsolete
            );
        };
    }
    return _cached_decoder_for_SecurityClassification(el);
}


let _cached_encoder_for_SecurityClassification: $.ASN1Encoder<SecurityClassification> | null = null;


/**
 * @summary Encodes a(n) SecurityClassification into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityClassification, encoded as an ASN.1 Element.
 */
export function _encode_SecurityClassification(
    value: SecurityClassification,
    elGetter: $.ASN1Encoder<SecurityClassification>
): _Element {
    if (!_cached_encoder_for_SecurityClassification) {
        _cached_encoder_for_SecurityClassification = function (
            value: SecurityClassification        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_LabelAndCertValue(
                            value.labelAndCertValue,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ClassificationName(
                            value.classificationName,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.equivalentClassifications ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_EquivalentClassifications,
                                  $.BER
                              )(value.equivalentClassifications, $.BER),
                        /* REQUIRED   */ $._encodeInteger(
                            value.hierarchyValue,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.markingData === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_MarkingDataInfo,
                                  $.BER
                              )(value.markingData, $.BER),
                        /* IF_ABSENT  */ value.requiredCategory === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_OptionalCategoryGroups,
                                  $.BER
                              )(value.requiredCategory, $.BER),
                        /* IF_DEFAULT */ value.obsolete === undefined ||
                        $.deepEq(
                            value.obsolete,
                            SecurityClassification._default_value_for_obsolete
                        )
                            ? undefined
                            : $._encodeBoolean(value.obsolete, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SecurityClassification(value, elGetter);
}


/* eslint-enable */
