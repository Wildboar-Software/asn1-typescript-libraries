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

/* START_OF_SYMBOL_DEFINITION BilaterallyDefinedBodyPart */
/**
 * @summary BilaterallyDefinedBodyPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BilaterallyDefinedBodyPart  ::=  OCTET STRING
 * ```
 */
export type BilaterallyDefinedBodyPart = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION BilaterallyDefinedBodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BilaterallyDefinedBodyPart */
let _cached_decoder_for_BilaterallyDefinedBodyPart: $.ASN1Decoder<BilaterallyDefinedBodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BilaterallyDefinedBodyPart */

/* START_OF_SYMBOL_DEFINITION _decode_BilaterallyDefinedBodyPart */
/**
 * @summary Decodes an ASN.1 element into a(n) BilaterallyDefinedBodyPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BilaterallyDefinedBodyPart} The decoded data structure.
 */
export function _decode_BilaterallyDefinedBodyPart(el: _Element) {
    if (!_cached_decoder_for_BilaterallyDefinedBodyPart) {
        _cached_decoder_for_BilaterallyDefinedBodyPart = $._decodeOctetString;
    }
    return _cached_decoder_for_BilaterallyDefinedBodyPart(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BilaterallyDefinedBodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BilaterallyDefinedBodyPart */
let _cached_encoder_for_BilaterallyDefinedBodyPart: $.ASN1Encoder<BilaterallyDefinedBodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BilaterallyDefinedBodyPart */

/* START_OF_SYMBOL_DEFINITION _encode_BilaterallyDefinedBodyPart */
/**
 * @summary Encodes a(n) BilaterallyDefinedBodyPart into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BilaterallyDefinedBodyPart, encoded as an ASN.1 Element.
 */
export function _encode_BilaterallyDefinedBodyPart(
    value: BilaterallyDefinedBodyPart,
    elGetter: $.ASN1Encoder<BilaterallyDefinedBodyPart>
) {
    if (!_cached_encoder_for_BilaterallyDefinedBodyPart) {
        _cached_encoder_for_BilaterallyDefinedBodyPart = $._encodeOctetString;
    }
    return _cached_encoder_for_BilaterallyDefinedBodyPart(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BilaterallyDefinedBodyPart */

/* eslint-enable */
