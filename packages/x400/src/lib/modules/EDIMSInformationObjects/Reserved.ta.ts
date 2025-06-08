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

/* START_OF_SYMBOL_DEFINITION Reserved */
/**
 * @summary Reserved
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Reserved  ::=  OCTET STRING(SIZE (1))
 * ```
 */
export type Reserved = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION Reserved */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Reserved */
let _cached_decoder_for_Reserved: $.ASN1Decoder<Reserved> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Reserved */

/* START_OF_SYMBOL_DEFINITION _decode_Reserved */
/**
 * @summary Decodes an ASN.1 element into a(n) Reserved
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Reserved} The decoded data structure.
 */
export function _decode_Reserved(el: _Element) {
    if (!_cached_decoder_for_Reserved) {
        _cached_decoder_for_Reserved = $._decodeOctetString;
    }
    return _cached_decoder_for_Reserved(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Reserved */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Reserved */
let _cached_encoder_for_Reserved: $.ASN1Encoder<Reserved> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Reserved */

/* START_OF_SYMBOL_DEFINITION _encode_Reserved */
/**
 * @summary Encodes a(n) Reserved into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Reserved, encoded as an ASN.1 Element.
 */
export function _encode_Reserved(
    value: Reserved,
    elGetter: $.ASN1Encoder<Reserved>
) {
    if (!_cached_encoder_for_Reserved) {
        _cached_encoder_for_Reserved = $._encodeOctetString;
    }
    return _cached_encoder_for_Reserved(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Reserved */

/* eslint-enable */
