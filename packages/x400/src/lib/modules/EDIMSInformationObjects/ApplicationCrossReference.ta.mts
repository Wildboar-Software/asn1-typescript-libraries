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

/* START_OF_SYMBOL_DEFINITION ApplicationCrossReference */
/**
 * @summary ApplicationCrossReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplicationCrossReference  ::=  OCTET STRING
 * ```
 */
export type ApplicationCrossReference = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION ApplicationCrossReference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplicationCrossReference */
let _cached_decoder_for_ApplicationCrossReference: $.ASN1Decoder<ApplicationCrossReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplicationCrossReference */

/* START_OF_SYMBOL_DEFINITION _decode_ApplicationCrossReference */
/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationCrossReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ApplicationCrossReference} The decoded data structure.
 */
export function _decode_ApplicationCrossReference(el: _Element) {
    if (!_cached_decoder_for_ApplicationCrossReference) {
        _cached_decoder_for_ApplicationCrossReference = $._decodeOctetString;
    }
    return _cached_decoder_for_ApplicationCrossReference(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ApplicationCrossReference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplicationCrossReference */
let _cached_encoder_for_ApplicationCrossReference: $.ASN1Encoder<ApplicationCrossReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplicationCrossReference */

/* START_OF_SYMBOL_DEFINITION _encode_ApplicationCrossReference */
/**
 * @summary Encodes a(n) ApplicationCrossReference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationCrossReference, encoded as an ASN.1 Element.
 */
export function _encode_ApplicationCrossReference(
    value: ApplicationCrossReference,
    elGetter: $.ASN1Encoder<ApplicationCrossReference>
) {
    if (!_cached_encoder_for_ApplicationCrossReference) {
        _cached_encoder_for_ApplicationCrossReference = $._encodeOctetString;
    }
    return _cached_encoder_for_ApplicationCrossReference(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ApplicationCrossReference */

/* eslint-enable */
