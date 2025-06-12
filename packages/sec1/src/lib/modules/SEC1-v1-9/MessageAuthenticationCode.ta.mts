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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../SEC1-v1-9/AlgorithmIdentifier.ta.mjs";
export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../SEC1-v1-9/AlgorithmIdentifier.ta.mjs";


/* START_OF_SYMBOL_DEFINITION MessageAuthenticationCode */
/**
 * @summary MessageAuthenticationCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageAuthenticationCode  ::=  AlgorithmIdentifier {{MACSet}}
 * ```
 */
export
type MessageAuthenticationCode = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION MessageAuthenticationCode */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageAuthenticationCode */
let _cached_decoder_for_MessageAuthenticationCode: $.ASN1Decoder<MessageAuthenticationCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageAuthenticationCode */

/* START_OF_SYMBOL_DEFINITION _decode_MessageAuthenticationCode */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageAuthenticationCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageAuthenticationCode} The decoded data structure.
 */
export
function _decode_MessageAuthenticationCode (el: _Element) {
    if (!_cached_decoder_for_MessageAuthenticationCode) { _cached_decoder_for_MessageAuthenticationCode = _decode_AlgorithmIdentifier; }
    return _cached_decoder_for_MessageAuthenticationCode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageAuthenticationCode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageAuthenticationCode */
let _cached_encoder_for_MessageAuthenticationCode: $.ASN1Encoder<MessageAuthenticationCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageAuthenticationCode */

/* START_OF_SYMBOL_DEFINITION _encode_MessageAuthenticationCode */
/**
 * @summary Encodes a(n) MessageAuthenticationCode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageAuthenticationCode, encoded as an ASN.1 Element.
 */
export
function _encode_MessageAuthenticationCode (value: MessageAuthenticationCode, elGetter: $.ASN1Encoder<MessageAuthenticationCode>) {
    if (!_cached_encoder_for_MessageAuthenticationCode) { _cached_encoder_for_MessageAuthenticationCode = _encode_AlgorithmIdentifier; }
    return _cached_encoder_for_MessageAuthenticationCode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageAuthenticationCode */

/* eslint-enable */
