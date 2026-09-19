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
import { Calling_authentication_value_c1222, _decode_Calling_authentication_value_c1222, _encode_Calling_authentication_value_c1222 } from "../C1222-PROTOCOL/Calling-authentication-value-c1222.ta.mjs";
// export { Calling_authentication_value_c1222, _decode_Calling_authentication_value_c1222, _encode_Calling_authentication_value_c1222 } from "../C1222-PROTOCOL/Calling-authentication-value-c1222.ta.mjs";
import { Calling_authentication_value_c1221, _decode_Calling_authentication_value_c1221, _encode_Calling_authentication_value_c1221 } from "../C1222-PROTOCOL/Calling-authentication-value-c1221.ta.mjs";
// export { Calling_authentication_value_c1221, _decode_Calling_authentication_value_c1221, _encode_Calling_authentication_value_c1221 } from "../C1222-PROTOCOL/Calling-authentication-value-c1221.ta.mjs";


/**
 * @summary Calling_authentication_value_single_asn1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Calling-authentication-value-single-asn1  ::=  CHOICE {
 *     calling-authentication-value-c1222   Calling-authentication-value-c1222,
 *     calling-authentication-value-c1221   Calling-authentication-value-c1221
 * }
 * ```
 */
export
type Calling_authentication_value_single_asn1 =
    { calling_authentication_value_c1222: Calling_authentication_value_c1222 } /* CHOICE_ALT_ROOT */
    | { calling_authentication_value_c1221: Calling_authentication_value_c1221 } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Calling_authentication_value_single_asn1: $.ASN1Decoder<Calling_authentication_value_single_asn1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Calling_authentication_value_single_asn1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Calling_authentication_value_single_asn1 (el: _Element): Calling_authentication_value_single_asn1 {
    if (!_cached_decoder_for_Calling_authentication_value_single_asn1) { _cached_decoder_for_Calling_authentication_value_single_asn1 = $._decode_inextensible_choice<Calling_authentication_value_single_asn1>({
    "CONTEXT 1": [ "calling_authentication_value_c1222", _decode_Calling_authentication_value_c1222 ],
    "CONTEXT 0": [ "calling_authentication_value_c1221", _decode_Calling_authentication_value_c1221 ]
}); }
    return _cached_decoder_for_Calling_authentication_value_single_asn1(el);
}

let _cached_encoder_for_Calling_authentication_value_single_asn1: $.ASN1Encoder<Calling_authentication_value_single_asn1> | null = null;

/**
 * @summary Encodes a(n) Calling_authentication_value_single_asn1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Calling_authentication_value_single_asn1, encoded as an ASN.1 Element.
 */
export
function _encode_Calling_authentication_value_single_asn1 (value: Calling_authentication_value_single_asn1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Calling_authentication_value_single_asn1) { _cached_encoder_for_Calling_authentication_value_single_asn1 = $._encode_choice<Calling_authentication_value_single_asn1>({
    "calling_authentication_value_c1222": _encode_Calling_authentication_value_c1222,
    "calling_authentication_value_c1221": _encode_Calling_authentication_value_c1221,
}, $.BER); }
    return _cached_encoder_for_Calling_authentication_value_single_asn1(value, elGetter);
}


/* eslint-enable */
