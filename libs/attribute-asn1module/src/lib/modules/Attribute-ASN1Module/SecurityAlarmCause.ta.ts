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
import * as $ from "asn1-ts/dist/node/functional";



/* START_OF_SYMBOL_DEFINITION SecurityAlarmCause */
/**
 * @summary SecurityAlarmCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityAlarmCause  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type SecurityAlarmCause = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION SecurityAlarmCause */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityAlarmCause */
let _cached_decoder_for_SecurityAlarmCause: $.ASN1Decoder<SecurityAlarmCause> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityAlarmCause */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityAlarmCause */
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityAlarmCause
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityAlarmCause} The decoded data structure.
 */
export
function _decode_SecurityAlarmCause (el: _Element) {
    if (!_cached_decoder_for_SecurityAlarmCause) { _cached_decoder_for_SecurityAlarmCause = $._decodeObjectIdentifier; }
    return _cached_decoder_for_SecurityAlarmCause(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecurityAlarmCause */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityAlarmCause */
let _cached_encoder_for_SecurityAlarmCause: $.ASN1Encoder<SecurityAlarmCause> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityAlarmCause */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityAlarmCause */
/**
 * @summary Encodes a(n) SecurityAlarmCause into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityAlarmCause, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityAlarmCause (value: SecurityAlarmCause, elGetter: $.ASN1Encoder<SecurityAlarmCause>) {
    if (!_cached_encoder_for_SecurityAlarmCause) { _cached_encoder_for_SecurityAlarmCause = $._encodeObjectIdentifier; }
    return _cached_encoder_for_SecurityAlarmCause(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SecurityAlarmCause */

/* eslint-enable */
