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
    Redirection,
    _decode_Redirection,
    _encode_Redirection,
} from '../MTSAbstractService/Redirection.ta.js';
export {
    Redirection,
    _decode_Redirection,
    _encode_Redirection,
} from '../MTSAbstractService/Redirection.ta.js';

/* START_OF_SYMBOL_DEFINITION RedirectionHistory */
/**
 * @summary RedirectionHistory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RedirectionHistory  ::=  SEQUENCE SIZE (1..ub-redirections) OF Redirection
 * ```
 */
export type RedirectionHistory = Redirection[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION RedirectionHistory */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RedirectionHistory */
let _cached_decoder_for_RedirectionHistory: $.ASN1Decoder<RedirectionHistory> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RedirectionHistory */

/* START_OF_SYMBOL_DEFINITION _decode_RedirectionHistory */
/**
 * @summary Decodes an ASN.1 element into a(n) RedirectionHistory
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RedirectionHistory} The decoded data structure.
 */
export function _decode_RedirectionHistory(el: _Element) {
    if (!_cached_decoder_for_RedirectionHistory) {
        _cached_decoder_for_RedirectionHistory = $._decodeSequenceOf<Redirection>(
            () => _decode_Redirection
        );
    }
    return _cached_decoder_for_RedirectionHistory(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RedirectionHistory */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RedirectionHistory */
let _cached_encoder_for_RedirectionHistory: $.ASN1Encoder<RedirectionHistory> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RedirectionHistory */

/* START_OF_SYMBOL_DEFINITION _encode_RedirectionHistory */
/**
 * @summary Encodes a(n) RedirectionHistory into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RedirectionHistory, encoded as an ASN.1 Element.
 */
export function _encode_RedirectionHistory(
    value: RedirectionHistory,
    elGetter: $.ASN1Encoder<RedirectionHistory>
) {
    if (!_cached_encoder_for_RedirectionHistory) {
        _cached_encoder_for_RedirectionHistory = $._encodeSequenceOf<Redirection>(
            () => _encode_Redirection,
            $.BER
        );
    }
    return _cached_encoder_for_RedirectionHistory(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RedirectionHistory */

/* eslint-enable */
