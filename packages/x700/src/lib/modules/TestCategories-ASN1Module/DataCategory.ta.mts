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

/* START_OF_SYMBOL_DEFINITION DataCategory */
/**
 * @summary DataCategory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataCategory  ::=  INTEGER {bits(0), octets(1), blocks(2), packets(3)}
 * ```
 */
export type DataCategory = INTEGER;
/* END_OF_SYMBOL_DEFINITION DataCategory */

/* START_OF_SYMBOL_DEFINITION DataCategory_bits */
/**
 * @summary DataCategory_bits
 * @constant
 * @type {number}
 */
export const DataCategory_bits: DataCategory = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DataCategory_bits */

/* START_OF_SYMBOL_DEFINITION bits */
/**
 * @summary DataCategory_bits
 * @constant
 * @type {number}
 */
export const bits: DataCategory = DataCategory_bits; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION bits */

/* START_OF_SYMBOL_DEFINITION DataCategory_octets */
/**
 * @summary DataCategory_octets
 * @constant
 * @type {number}
 */
export const DataCategory_octets: DataCategory = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DataCategory_octets */

/* START_OF_SYMBOL_DEFINITION octets */
/**
 * @summary DataCategory_octets
 * @constant
 * @type {number}
 */
export const octets: DataCategory = DataCategory_octets; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION octets */

/* START_OF_SYMBOL_DEFINITION DataCategory_blocks */
/**
 * @summary DataCategory_blocks
 * @constant
 * @type {number}
 */
export const DataCategory_blocks: DataCategory = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DataCategory_blocks */

/* START_OF_SYMBOL_DEFINITION blocks */
/**
 * @summary DataCategory_blocks
 * @constant
 * @type {number}
 */
export const blocks: DataCategory = DataCategory_blocks; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION blocks */

/* START_OF_SYMBOL_DEFINITION DataCategory_packets */
/**
 * @summary DataCategory_packets
 * @constant
 * @type {number}
 */
export const DataCategory_packets: DataCategory = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DataCategory_packets */

/* START_OF_SYMBOL_DEFINITION packets */
/**
 * @summary DataCategory_packets
 * @constant
 * @type {number}
 */
export const packets: DataCategory = DataCategory_packets; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION packets */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DataCategory */
let _cached_decoder_for_DataCategory: $.ASN1Decoder<DataCategory> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DataCategory */

/* START_OF_SYMBOL_DEFINITION _decode_DataCategory */
/**
 * @summary Decodes an ASN.1 element into a(n) DataCategory
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataCategory} The decoded data structure.
 */
export function _decode_DataCategory(el: _Element) {
    if (!_cached_decoder_for_DataCategory) {
        _cached_decoder_for_DataCategory = $._decodeInteger;
    }
    return _cached_decoder_for_DataCategory(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DataCategory */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DataCategory */
let _cached_encoder_for_DataCategory: $.ASN1Encoder<DataCategory> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DataCategory */

/* START_OF_SYMBOL_DEFINITION _encode_DataCategory */
/**
 * @summary Encodes a(n) DataCategory into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataCategory, encoded as an ASN.1 Element.
 */
export function _encode_DataCategory(
    value: DataCategory,
    elGetter: $.ASN1Encoder<DataCategory>
) {
    if (!_cached_encoder_for_DataCategory) {
        _cached_encoder_for_DataCategory = $._encodeInteger;
    }
    return _cached_encoder_for_DataCategory(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DataCategory */

/* eslint-enable */
