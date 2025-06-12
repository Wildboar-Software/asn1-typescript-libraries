/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    SubprocessName,
    _enum_for_SubprocessName,
    SubprocessName_data_capture /* IMPORTED_LONG_ENUMERATION_ITEM */,
    data_capture /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SubprocessName_intermediate_signal_processing /* IMPORTED_LONG_ENUMERATION_ITEM */,
    intermediate_signal_processing /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SubprocessName_final_signal_processing /* IMPORTED_LONG_ENUMERATION_ITEM */,
    final_signal_processing /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SubprocessName_storage /* IMPORTED_LONG_ENUMERATION_ITEM */,
    storage /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SubprocessName_comparison /* IMPORTED_LONG_ENUMERATION_ITEM */,
    comparison /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SubprocessName_decision /* IMPORTED_LONG_ENUMERATION_ITEM */,
    decision /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SubprocessName_sample_fusion /* IMPORTED_LONG_ENUMERATION_ITEM */,
    sample_fusion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SubprocessName_feature_fusion /* IMPORTED_LONG_ENUMERATION_ITEM */,
    feature_fusion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SubprocessName_score_fusion /* IMPORTED_LONG_ENUMERATION_ITEM */,
    score_fusion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SubprocessName_decision_fusion /* IMPORTED_LONG_ENUMERATION_ITEM */,
    decision_fusion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_SubprocessName,
    _encode_SubprocessName,
} from '../AuthenticationContextForBiometrics/SubprocessName.ta.mjs';
export {
    SubprocessName,
    _enum_for_SubprocessName,
    SubprocessName_data_capture /* IMPORTED_LONG_ENUMERATION_ITEM */,
    data_capture /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SubprocessName_intermediate_signal_processing /* IMPORTED_LONG_ENUMERATION_ITEM */,
    intermediate_signal_processing /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SubprocessName_final_signal_processing /* IMPORTED_LONG_ENUMERATION_ITEM */,
    final_signal_processing /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SubprocessName_storage /* IMPORTED_LONG_ENUMERATION_ITEM */,
    storage /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SubprocessName_comparison /* IMPORTED_LONG_ENUMERATION_ITEM */,
    comparison /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SubprocessName_decision /* IMPORTED_LONG_ENUMERATION_ITEM */,
    decision /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SubprocessName_sample_fusion /* IMPORTED_LONG_ENUMERATION_ITEM */,
    sample_fusion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SubprocessName_feature_fusion /* IMPORTED_LONG_ENUMERATION_ITEM */,
    feature_fusion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SubprocessName_score_fusion /* IMPORTED_LONG_ENUMERATION_ITEM */,
    score_fusion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SubprocessName_decision_fusion /* IMPORTED_LONG_ENUMERATION_ITEM */,
    decision_fusion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_SubprocessName,
    _encode_SubprocessName,
} from '../AuthenticationContextForBiometrics/SubprocessName.ta.mjs';
import {
    SubprocessIndex,
    _decode_SubprocessIndex,
    _encode_SubprocessIndex,
} from '../AuthenticationContextForBiometrics/SubprocessIndex.ta.mjs';
export {
    SubprocessIndex,
    _decode_SubprocessIndex,
    _encode_SubprocessIndex,
} from '../AuthenticationContextForBiometrics/SubprocessIndex.ta.mjs';
import {
    IOIndex,
    _decode_IOIndex,
    _encode_IOIndex,
} from '../AuthenticationContextForBiometrics/IOIndex.ta.mjs';
export {
    IOIndex,
    _decode_IOIndex,
    _encode_IOIndex,
} from '../AuthenticationContextForBiometrics/IOIndex.ta.mjs';

/* START_OF_SYMBOL_DEFINITION FunctionDefinition */
/**
 * @summary FunctionDefinition
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FunctionDefinition ::= SEQUENCE {
 *     subprocessName      SubprocessName,
 *     subprocessIndex     SubprocessIndex,
 *     inputIndex1         IOIndex OPTIONAL,
 *     inputIndex2         IOIndex OPTIONAL,
 *     outputIndex         IOIndex,
 *     functionDescription OCTET STRING (SIZE(1..MAX)) OPTIONAL }
 * ```
 *
 * @class
 */
export class FunctionDefinition {
    constructor(
        /**
         * @summary `subprocessName`.
         * @public
         * @readonly
         */
        readonly subprocessName: SubprocessName,
        /**
         * @summary `subprocessIndex`.
         * @public
         * @readonly
         */
        readonly subprocessIndex: SubprocessIndex,
        /**
         * @summary `inputIndex1`.
         * @public
         * @readonly
         */
        readonly inputIndex1: OPTIONAL<IOIndex>,
        /**
         * @summary `inputIndex2`.
         * @public
         * @readonly
         */
        readonly inputIndex2: OPTIONAL<IOIndex>,
        /**
         * @summary `outputIndex`.
         * @public
         * @readonly
         */
        readonly outputIndex: IOIndex,
        /**
         * @summary `functionDescription`.
         * @public
         * @readonly
         */
        readonly functionDescription: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a FunctionDefinition
     * @description
     *
     * This takes an `object` and converts it to a `FunctionDefinition`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FunctionDefinition`.
     * @returns {FunctionDefinition}
     */
    public static _from_object(
        _o: { [_K in keyof FunctionDefinition]: FunctionDefinition[_K] }
    ): FunctionDefinition {
        return new FunctionDefinition(
            _o.subprocessName,
            _o.subprocessIndex,
            _o.inputIndex1,
            _o.inputIndex2,
            _o.outputIndex,
            _o.functionDescription
        );
    }

    /**
     * @summary The enum used as the type of the component `subprocessName`
     * @public
     * @static
     */

    public static _enum_for_subprocessName = _enum_for_SubprocessName;
}
/* END_OF_SYMBOL_DEFINITION FunctionDefinition */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_FunctionDefinition */
/**
 * @summary The Leading Root Component Types of FunctionDefinition
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FunctionDefinition: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'subprocessName',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'subprocessIndex',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'inputIndex1',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'inputIndex2',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'outputIndex',
        false,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'functionDescription',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_FunctionDefinition */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_FunctionDefinition */
/**
 * @summary The Trailing Root Component Types of FunctionDefinition
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FunctionDefinition: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_FunctionDefinition */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_FunctionDefinition */
/**
 * @summary The Extension Addition Component Types of FunctionDefinition
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FunctionDefinition: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_FunctionDefinition */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FunctionDefinition */
let _cached_decoder_for_FunctionDefinition: $.ASN1Decoder<FunctionDefinition> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FunctionDefinition */

/* START_OF_SYMBOL_DEFINITION _decode_FunctionDefinition */
/**
 * @summary Decodes an ASN.1 element into a(n) FunctionDefinition
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FunctionDefinition} The decoded data structure.
 */
export function _decode_FunctionDefinition(el: _Element) {
    if (!_cached_decoder_for_FunctionDefinition) {
        _cached_decoder_for_FunctionDefinition = function (
            el: _Element
        ): FunctionDefinition {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let subprocessName!: SubprocessName;
            let subprocessIndex!: SubprocessIndex;
            let inputIndex1: OPTIONAL<IOIndex>;
            let inputIndex2: OPTIONAL<IOIndex>;
            let outputIndex!: IOIndex;
            let functionDescription: OPTIONAL<OCTET_STRING>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                subprocessName: (_el: _Element): void => {
                    subprocessName = _decode_SubprocessName(_el);
                },
                subprocessIndex: (_el: _Element): void => {
                    subprocessIndex = _decode_SubprocessIndex(_el);
                },
                inputIndex1: (_el: _Element): void => {
                    inputIndex1 = _decode_IOIndex(_el);
                },
                inputIndex2: (_el: _Element): void => {
                    inputIndex2 = _decode_IOIndex(_el);
                },
                outputIndex: (_el: _Element): void => {
                    outputIndex = _decode_IOIndex(_el);
                },
                functionDescription: (_el: _Element): void => {
                    functionDescription = $._decodeOctetString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_FunctionDefinition,
                _extension_additions_list_spec_for_FunctionDefinition,
                _root_component_type_list_2_spec_for_FunctionDefinition,
                undefined
            );
            return new FunctionDefinition /* SEQUENCE_CONSTRUCTOR_CALL */(
                subprocessName,
                subprocessIndex,
                inputIndex1,
                inputIndex2,
                outputIndex,
                functionDescription
            );
        };
    }
    return _cached_decoder_for_FunctionDefinition(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FunctionDefinition */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FunctionDefinition */
let _cached_encoder_for_FunctionDefinition: $.ASN1Encoder<FunctionDefinition> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FunctionDefinition */

/* START_OF_SYMBOL_DEFINITION _encode_FunctionDefinition */
/**
 * @summary Encodes a(n) FunctionDefinition into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FunctionDefinition, encoded as an ASN.1 Element.
 */
export function _encode_FunctionDefinition(
    value: FunctionDefinition,
    elGetter: $.ASN1Encoder<FunctionDefinition>
) {
    if (!_cached_encoder_for_FunctionDefinition) {
        _cached_encoder_for_FunctionDefinition = function (
            value: FunctionDefinition,
            elGetter: $.ASN1Encoder<FunctionDefinition>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SubprocessName(
                            value.subprocessName,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_SubprocessIndex(
                            value.subprocessIndex,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.inputIndex1 === undefined
                            ? undefined
                            : _encode_IOIndex(value.inputIndex1, $.BER),
                        /* IF_ABSENT  */ value.inputIndex2 === undefined
                            ? undefined
                            : _encode_IOIndex(value.inputIndex2, $.BER),
                        /* REQUIRED   */ _encode_IOIndex(
                            value.outputIndex,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.functionDescription === undefined
                            ? undefined
                            : $._encodeOctetString(
                                  value.functionDescription,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_FunctionDefinition(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FunctionDefinition */

/* eslint-enable */
