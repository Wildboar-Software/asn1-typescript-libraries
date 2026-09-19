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
import { Calling_authentication_value_single_asn1, _decode_Calling_authentication_value_single_asn1, _encode_Calling_authentication_value_single_asn1 } from "../C1222-PROTOCOL/Calling-authentication-value-single-asn1.ta.mjs";
// export { Calling_authentication_value_single_asn1, _decode_Calling_authentication_value_single_asn1, _encode_Calling_authentication_value_single_asn1 } from "../C1222-PROTOCOL/Calling-authentication-value-single-asn1.ta.mjs";


/**
 * @summary Authentication_value_encoding
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Authentication-value-encoding  ::=  CHOICE {
 *     calling-authentication-value-single-asn1    [0] Calling-authentication-value-single-asn1,
 *     calling-authentication-value-octet-aligned  [1] IMPLICIT OCTET STRING
 * }
 * ```
 */
export
type Authentication_value_encoding =
    { calling_authentication_value_single_asn1: Calling_authentication_value_single_asn1 } /* CHOICE_ALT_ROOT */
    | { calling_authentication_value_octet_aligned: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Authentication_value_encoding: $.ASN1Decoder<Authentication_value_encoding> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Authentication_value_encoding
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Authentication_value_encoding (el: _Element): Authentication_value_encoding {
    if (!_cached_decoder_for_Authentication_value_encoding) { _cached_decoder_for_Authentication_value_encoding = $._decode_inextensible_choice<Authentication_value_encoding>({
    "CONTEXT 0": [ "calling_authentication_value_single_asn1", $._decode_explicit<Calling_authentication_value_single_asn1>(() => _decode_Calling_authentication_value_single_asn1) ],
    "CONTEXT 1": [ "calling_authentication_value_octet_aligned", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_Authentication_value_encoding(el);
}

let _cached_encoder_for_Authentication_value_encoding: $.ASN1Encoder<Authentication_value_encoding> | null = null;

/**
 * @summary Encodes a(n) Authentication_value_encoding into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Authentication_value_encoding, encoded as an ASN.1 Element.
 */
export
function _encode_Authentication_value_encoding (value: Authentication_value_encoding, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Authentication_value_encoding) { _cached_encoder_for_Authentication_value_encoding = $._encode_choice<Authentication_value_encoding>({
    "calling_authentication_value_single_asn1": $._encode_explicit(_TagClass.context, 0, () => _encode_Calling_authentication_value_single_asn1, $.BER),
    "calling_authentication_value_octet_aligned": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_Authentication_value_encoding(value, elGetter);
}


/* eslint-enable */
