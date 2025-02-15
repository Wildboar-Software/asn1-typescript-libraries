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
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION VendorName */
/**
 * @summary VendorName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VendorName  ::=  GraphicString
 * ```
 */
export type VendorName = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION VendorName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_VendorName */
let _cached_decoder_for_VendorName: $.ASN1Decoder<VendorName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_VendorName */

/* START_OF_SYMBOL_DEFINITION _decode_VendorName */
/**
 * @summary Decodes an ASN.1 element into a(n) VendorName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VendorName} The decoded data structure.
 */
export function _decode_VendorName(el: _Element) {
    if (!_cached_decoder_for_VendorName) {
        _cached_decoder_for_VendorName = $._decodeGraphicString;
    }
    return _cached_decoder_for_VendorName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_VendorName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_VendorName */
let _cached_encoder_for_VendorName: $.ASN1Encoder<VendorName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_VendorName */

/* START_OF_SYMBOL_DEFINITION _encode_VendorName */
/**
 * @summary Encodes a(n) VendorName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VendorName, encoded as an ASN.1 Element.
 */
export function _encode_VendorName(
    value: VendorName,
    elGetter: $.ASN1Encoder<VendorName>
) {
    if (!_cached_encoder_for_VendorName) {
        _cached_encoder_for_VendorName = $._encodeGraphicString;
    }
    return _cached_encoder_for_VendorName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_VendorName */

/* eslint-enable */
