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

/* START_OF_SYMBOL_DEFINITION CommunicationsEntityId */
/**
 * @summary CommunicationsEntityId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommunicationsEntityId  ::=  GraphicString
 * ```
 */
export type CommunicationsEntityId = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION CommunicationsEntityId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CommunicationsEntityId */
let _cached_decoder_for_CommunicationsEntityId: $.ASN1Decoder<CommunicationsEntityId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CommunicationsEntityId */

/* START_OF_SYMBOL_DEFINITION _decode_CommunicationsEntityId */
/**
 * @summary Decodes an ASN.1 element into a(n) CommunicationsEntityId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommunicationsEntityId} The decoded data structure.
 */
export function _decode_CommunicationsEntityId(el: _Element) {
    if (!_cached_decoder_for_CommunicationsEntityId) {
        _cached_decoder_for_CommunicationsEntityId = $._decodeGraphicString;
    }
    return _cached_decoder_for_CommunicationsEntityId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CommunicationsEntityId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CommunicationsEntityId */
let _cached_encoder_for_CommunicationsEntityId: $.ASN1Encoder<CommunicationsEntityId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CommunicationsEntityId */

/* START_OF_SYMBOL_DEFINITION _encode_CommunicationsEntityId */
/**
 * @summary Encodes a(n) CommunicationsEntityId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommunicationsEntityId, encoded as an ASN.1 Element.
 */
export function _encode_CommunicationsEntityId(
    value: CommunicationsEntityId,
    elGetter: $.ASN1Encoder<CommunicationsEntityId>
) {
    if (!_cached_encoder_for_CommunicationsEntityId) {
        _cached_encoder_for_CommunicationsEntityId = $._encodeGraphicString;
    }
    return _cached_encoder_for_CommunicationsEntityId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CommunicationsEntityId */

/* eslint-enable */
