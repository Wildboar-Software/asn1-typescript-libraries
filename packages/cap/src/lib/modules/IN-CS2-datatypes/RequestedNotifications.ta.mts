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
import { CallConditions, _decode_CallConditions, _encode_CallConditions } from "../IN-CS2-datatypes/CallConditions.ta.mjs";
// export { CallConditions, _decode_CallConditions, _encode_CallConditions } from "../IN-CS2-datatypes/CallConditions.ta.mjs";


/**
 * @summary RequestedNotifications
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedNotifications{PARAMETERS-BOUND:bound}  ::=  SET OF CallConditions{bound}
 * ```
 */
export
type RequestedNotifications = CallConditions[]; // SetOfType

let _cached_decoder_for_RequestedNotifications: $.ASN1Decoder<RequestedNotifications> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedNotifications
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedNotifications (el: _Element): RequestedNotifications {
    if (!_cached_decoder_for_RequestedNotifications) { _cached_decoder_for_RequestedNotifications = $._decodeSetOf<CallConditions>(() => _decode_CallConditions); }
    return _cached_decoder_for_RequestedNotifications(el);
}

let _cached_encoder_for_RequestedNotifications: $.ASN1Encoder<RequestedNotifications> | null = null;

/**
 * @summary Encodes a(n) RequestedNotifications into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedNotifications, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedNotifications (value: RequestedNotifications, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedNotifications) { _cached_encoder_for_RequestedNotifications = $._encodeSetOf<CallConditions>(() => _encode_CallConditions, $.BER); }
    return _cached_encoder_for_RequestedNotifications(value, elGetter);
}


/* eslint-enable */
