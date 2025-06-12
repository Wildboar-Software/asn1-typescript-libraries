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
    IntegerDataType,
    IntegerDataType_allBitOn /* IMPORTED_LONG_NAMED_INTEGER */,
    allBitOn /* IMPORTED_SHORT_NAMED_INTEGER */,
    IntegerDataType_allBitOff /* IMPORTED_LONG_NAMED_INTEGER */,
    allBitOff /* IMPORTED_SHORT_NAMED_INTEGER */,
    IntegerDataType_incrementNumber /* IMPORTED_LONG_NAMED_INTEGER */,
    incrementNumber /* IMPORTED_SHORT_NAMED_INTEGER */,
    IntegerDataType_pn11 /* IMPORTED_LONG_NAMED_INTEGER */,
    pn11 /* IMPORTED_SHORT_NAMED_INTEGER */,
    IntegerDataType_pn15 /* IMPORTED_LONG_NAMED_INTEGER */,
    pn15 /* IMPORTED_SHORT_NAMED_INTEGER */,
    IntegerDataType_pn20 /* IMPORTED_LONG_NAMED_INTEGER */,
    pn20 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_IntegerDataType,
    _encode_IntegerDataType,
} from '../TestCategories-ASN1Module/IntegerDataType.ta.js';
export {
    IntegerDataType,
    IntegerDataType_allBitOn /* IMPORTED_LONG_NAMED_INTEGER */,
    allBitOn /* IMPORTED_SHORT_NAMED_INTEGER */,
    IntegerDataType_allBitOff /* IMPORTED_LONG_NAMED_INTEGER */,
    allBitOff /* IMPORTED_SHORT_NAMED_INTEGER */,
    IntegerDataType_incrementNumber /* IMPORTED_LONG_NAMED_INTEGER */,
    incrementNumber /* IMPORTED_SHORT_NAMED_INTEGER */,
    IntegerDataType_pn11 /* IMPORTED_LONG_NAMED_INTEGER */,
    pn11 /* IMPORTED_SHORT_NAMED_INTEGER */,
    IntegerDataType_pn15 /* IMPORTED_LONG_NAMED_INTEGER */,
    pn15 /* IMPORTED_SHORT_NAMED_INTEGER */,
    IntegerDataType_pn20 /* IMPORTED_LONG_NAMED_INTEGER */,
    pn20 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_IntegerDataType,
    _encode_IntegerDataType,
} from '../TestCategories-ASN1Module/IntegerDataType.ta.js';

/* START_OF_SYMBOL_DEFINITION DataType */
/**
 * @summary DataType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataType  ::=  CHOICE {
 *   integerDataType           IntegerDataType,
 *   objectIdentifierDataType  OBJECT IDENTIFIER
 * }
 * ```
 */
export type DataType =
    | { integerDataType: IntegerDataType } /* CHOICE_ALT_ROOT */
    | { objectIdentifierDataType: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION DataType */

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
        _cached_decoder_for_DataType = $._decode_inextensible_choice<DataType>({
            'UNIVERSAL 2': ['integerDataType', _decode_IntegerDataType],
            'UNIVERSAL 6': [
                'objectIdentifierDataType',
                $._decodeObjectIdentifier,
            ],
        });
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
        _cached_encoder_for_DataType = $._encode_choice<DataType>(
            {
                integerDataType: _encode_IntegerDataType,
                objectIdentifierDataType: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DataType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DataType */

/* eslint-enable */
