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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Application_context_name, _decode_Application_context_name, _encode_Application_context_name } from "../ACSE-1/Application-context-name.ta.mjs";
// export { Application_context_name, _decode_Application_context_name, _encode_Application_context_name } from "../ACSE-1/Application-context-name.ta.mjs";


/**
 * @summary Application_context_name_list
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Application-context-name-list  ::=  SEQUENCE OF Application-context-name
 * ```
 */
export
type Application_context_name_list = Application_context_name[]; // SequenceOfType

let _cached_decoder_for_Application_context_name_list: $.ASN1Decoder<Application_context_name_list> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Application_context_name_list
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Application_context_name_list (el: _Element): Application_context_name_list {
    if (!_cached_decoder_for_Application_context_name_list) { _cached_decoder_for_Application_context_name_list = $._decodeSequenceOf<Application_context_name>(() => _decode_Application_context_name); }
    return _cached_decoder_for_Application_context_name_list(el);
}

let _cached_encoder_for_Application_context_name_list: $.ASN1Encoder<Application_context_name_list> | null = null;

/**
 * @summary Encodes a(n) Application_context_name_list into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Application_context_name_list, encoded as an ASN.1 Element.
 */
export
function _encode_Application_context_name_list (value: Application_context_name_list, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Application_context_name_list) { _cached_encoder_for_Application_context_name_list = $._encodeSequenceOf<Application_context_name>(() => _encode_Application_context_name, $.BER); }
    return _cached_encoder_for_Application_context_name_list(value, elGetter);
}


/* eslint-enable */
