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
    Credentials,
    _decode_Credentials,
    _encode_Credentials,
} from '../MTSAbstractService/Credentials.ta.js';
export {
    Credentials,
    _decode_Credentials,
    _encode_Credentials,
} from '../MTSAbstractService/Credentials.ta.js';

/* START_OF_SYMBOL_DEFINITION InitiatorCredentials */
/**
 * @summary InitiatorCredentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitiatorCredentials  ::=  Credentials
 * ```
 */
export type InitiatorCredentials = Credentials; // DefinedType
/* END_OF_SYMBOL_DEFINITION InitiatorCredentials */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InitiatorCredentials */
let _cached_decoder_for_InitiatorCredentials: $.ASN1Decoder<InitiatorCredentials> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InitiatorCredentials */

/* START_OF_SYMBOL_DEFINITION _decode_InitiatorCredentials */
/**
 * @summary Decodes an ASN.1 element into a(n) InitiatorCredentials
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InitiatorCredentials} The decoded data structure.
 */
export function _decode_InitiatorCredentials(el: _Element) {
    if (!_cached_decoder_for_InitiatorCredentials) {
        _cached_decoder_for_InitiatorCredentials = _decode_Credentials;
    }
    return _cached_decoder_for_InitiatorCredentials(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InitiatorCredentials */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InitiatorCredentials */
let _cached_encoder_for_InitiatorCredentials: $.ASN1Encoder<InitiatorCredentials> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InitiatorCredentials */

/* START_OF_SYMBOL_DEFINITION _encode_InitiatorCredentials */
/**
 * @summary Encodes a(n) InitiatorCredentials into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiatorCredentials, encoded as an ASN.1 Element.
 */
export function _encode_InitiatorCredentials(
    value: InitiatorCredentials,
    elGetter: $.ASN1Encoder<InitiatorCredentials>
) {
    if (!_cached_encoder_for_InitiatorCredentials) {
        _cached_encoder_for_InitiatorCredentials = _encode_Credentials;
    }
    return _cached_encoder_for_InitiatorCredentials(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InitiatorCredentials */

/* eslint-enable */
