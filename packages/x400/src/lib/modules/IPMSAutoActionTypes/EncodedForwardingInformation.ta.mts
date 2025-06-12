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

/* START_OF_SYMBOL_DEFINITION EncodedForwardingInformation */
/**
 * @summary EncodedForwardingInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncodedForwardingInformation  ::=
 *   OCTET STRING
 * ```
 */
export type EncodedForwardingInformation = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION EncodedForwardingInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncodedForwardingInformation */
let _cached_decoder_for_EncodedForwardingInformation: $.ASN1Decoder<EncodedForwardingInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncodedForwardingInformation */

/* START_OF_SYMBOL_DEFINITION _decode_EncodedForwardingInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) EncodedForwardingInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncodedForwardingInformation} The decoded data structure.
 */
export function _decode_EncodedForwardingInformation(el: _Element) {
    if (!_cached_decoder_for_EncodedForwardingInformation) {
        _cached_decoder_for_EncodedForwardingInformation = $._decodeOctetString;
    }
    return _cached_decoder_for_EncodedForwardingInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncodedForwardingInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncodedForwardingInformation */
let _cached_encoder_for_EncodedForwardingInformation: $.ASN1Encoder<EncodedForwardingInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncodedForwardingInformation */

/* START_OF_SYMBOL_DEFINITION _encode_EncodedForwardingInformation */
/**
 * @summary Encodes a(n) EncodedForwardingInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncodedForwardingInformation, encoded as an ASN.1 Element.
 */
export function _encode_EncodedForwardingInformation(
    value: EncodedForwardingInformation,
    elGetter: $.ASN1Encoder<EncodedForwardingInformation>
) {
    if (!_cached_encoder_for_EncodedForwardingInformation) {
        _cached_encoder_for_EncodedForwardingInformation = $._encodeOctetString;
    }
    return _cached_encoder_for_EncodedForwardingInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EncodedForwardingInformation */

/* eslint-enable */
