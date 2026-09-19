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
import { AP_invocation_id, _decode_AP_invocation_id, _encode_AP_invocation_id } from "../C1222-PROTOCOL/AP-invocation-id.ta.mjs";
// export { AP_invocation_id, _decode_AP_invocation_id, _encode_AP_invocation_id } from "../C1222-PROTOCOL/AP-invocation-id.ta.mjs";


/**
 * @summary Calling_AP_invocation_id
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Calling-AP-invocation-id  ::=  AP-invocation-id
 * ```
 */
export
type Calling_AP_invocation_id = AP_invocation_id; // DefinedType

let _cached_decoder_for_Calling_AP_invocation_id: $.ASN1Decoder<Calling_AP_invocation_id> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Calling_AP_invocation_id
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Calling_AP_invocation_id (el: _Element): Calling_AP_invocation_id {
    if (!_cached_decoder_for_Calling_AP_invocation_id) { _cached_decoder_for_Calling_AP_invocation_id = _decode_AP_invocation_id; }
    return _cached_decoder_for_Calling_AP_invocation_id(el);
}

let _cached_encoder_for_Calling_AP_invocation_id: $.ASN1Encoder<Calling_AP_invocation_id> | null = null;

/**
 * @summary Encodes a(n) Calling_AP_invocation_id into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Calling_AP_invocation_id, encoded as an ASN.1 Element.
 */
export
function _encode_Calling_AP_invocation_id (value: Calling_AP_invocation_id, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Calling_AP_invocation_id) { _cached_encoder_for_Calling_AP_invocation_id = _encode_AP_invocation_id; }
    return _cached_encoder_for_Calling_AP_invocation_id(value, elGetter);
}


/* eslint-enable */
