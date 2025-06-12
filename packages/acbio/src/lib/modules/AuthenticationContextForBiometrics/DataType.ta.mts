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
    ProcessedLevel,
    _enum_for_ProcessedLevel,
    ProcessedLevel_raw_data /* IMPORTED_LONG_ENUMERATION_ITEM */,
    raw_data /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ProcessedLevel_intermediate_data /* IMPORTED_LONG_ENUMERATION_ITEM */,
    intermediate_data /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ProcessedLevel_processed_data /* IMPORTED_LONG_ENUMERATION_ITEM */,
    processed_data /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ProcessedLevel_comparison_score /* IMPORTED_LONG_ENUMERATION_ITEM */,
    comparison_score /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ProcessedLevel_comparison_decision /* IMPORTED_LONG_ENUMERATION_ITEM */,
    comparison_decision /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ProcessedLevel,
    _encode_ProcessedLevel,
} from '../AuthenticationContextForBiometrics/ProcessedLevel.ta.mjs';
export {
    ProcessedLevel,
    _enum_for_ProcessedLevel,
    ProcessedLevel_raw_data /* IMPORTED_LONG_ENUMERATION_ITEM */,
    raw_data /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ProcessedLevel_intermediate_data /* IMPORTED_LONG_ENUMERATION_ITEM */,
    intermediate_data /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ProcessedLevel_processed_data /* IMPORTED_LONG_ENUMERATION_ITEM */,
    processed_data /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ProcessedLevel_comparison_score /* IMPORTED_LONG_ENUMERATION_ITEM */,
    comparison_score /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ProcessedLevel_comparison_decision /* IMPORTED_LONG_ENUMERATION_ITEM */,
    comparison_decision /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ProcessedLevel,
    _encode_ProcessedLevel,
} from '../AuthenticationContextForBiometrics/ProcessedLevel.ta.mjs';
import {
    Purpose,
    _enum_for_Purpose,
    Purpose_reference /* IMPORTED_LONG_ENUMERATION_ITEM */,
    reference /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    Purpose_sample /* IMPORTED_LONG_ENUMERATION_ITEM */,
    sample /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_Purpose,
    _encode_Purpose,
} from '../AuthenticationContextForBiometrics/Purpose.ta.mjs';
export {
    Purpose,
    _enum_for_Purpose,
    Purpose_reference /* IMPORTED_LONG_ENUMERATION_ITEM */,
    reference /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    Purpose_sample /* IMPORTED_LONG_ENUMERATION_ITEM */,
    sample /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_Purpose,
    _encode_Purpose,
} from '../AuthenticationContextForBiometrics/Purpose.ta.mjs';

/* START_OF_SYMBOL_DEFINITION DataType */
/**
 * @summary DataType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataType ::= SEQUENCE {
 *     processedLevel  ProcessedLevel,
 *     purpose         Purpose OPTIONAL }
 * ```
 *
 * @class
 */
export class DataType {
    constructor(
        /**
         * @summary `processedLevel`.
         * @public
         * @readonly
         */
        readonly processedLevel: ProcessedLevel,
        /**
         * @summary `purpose`.
         * @public
         * @readonly
         */
        readonly purpose: OPTIONAL<Purpose>
    ) {}

    /**
     * @summary Restructures an object into a DataType
     * @description
     *
     * This takes an `object` and converts it to a `DataType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DataType`.
     * @returns {DataType}
     */
    public static _from_object(
        _o: { [_K in keyof DataType]: DataType[_K] }
    ): DataType {
        return new DataType(_o.processedLevel, _o.purpose);
    }

    /**
     * @summary The enum used as the type of the component `processedLevel`
     * @public
     * @static
     */

    public static _enum_for_processedLevel = _enum_for_ProcessedLevel;
    /**
     * @summary The enum used as the type of the component `purpose`
     * @public
     * @static
     */

    public static _enum_for_purpose = _enum_for_Purpose;
}
/* END_OF_SYMBOL_DEFINITION DataType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DataType */
/**
 * @summary The Leading Root Component Types of DataType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DataType: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'processedLevel',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'purpose',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DataType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DataType */
/**
 * @summary The Trailing Root Component Types of DataType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DataType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DataType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DataType */
/**
 * @summary The Extension Addition Component Types of DataType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DataType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DataType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DataType */
let _cached_decoder_for_DataType: $.ASN1Decoder<DataType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DataType */

/* START_OF_SYMBOL_DEFINITION _decode_DataType */
/**
 * @summary Decodes an ASN.1 element into a(n) DataType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataType} The decoded data structure.
 */
export function _decode_DataType(el: _Element) {
    if (!_cached_decoder_for_DataType) {
        _cached_decoder_for_DataType = function (el: _Element): DataType {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let processedLevel!: ProcessedLevel;
            let purpose: OPTIONAL<Purpose>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                processedLevel: (_el: _Element): void => {
                    processedLevel = _decode_ProcessedLevel(_el);
                },
                purpose: (_el: _Element): void => {
                    purpose = _decode_Purpose(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DataType,
                _extension_additions_list_spec_for_DataType,
                _root_component_type_list_2_spec_for_DataType,
                undefined
            );
            return new DataType /* SEQUENCE_CONSTRUCTOR_CALL */(
                processedLevel,
                purpose
            );
        };
    }
    return _cached_decoder_for_DataType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DataType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DataType */
let _cached_encoder_for_DataType: $.ASN1Encoder<DataType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DataType */

/* START_OF_SYMBOL_DEFINITION _encode_DataType */
/**
 * @summary Encodes a(n) DataType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataType, encoded as an ASN.1 Element.
 */
export function _encode_DataType(
    value: DataType,
    elGetter: $.ASN1Encoder<DataType>
) {
    if (!_cached_encoder_for_DataType) {
        _cached_encoder_for_DataType = function (
            value: DataType,
            elGetter: $.ASN1Encoder<DataType>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ProcessedLevel(
                            value.processedLevel,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.purpose === undefined
                            ? undefined
                            : _encode_Purpose(value.purpose, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DataType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DataType */

/* eslint-enable */
