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
import { CRLReferral, _decode_CRLReferral, _encode_CRLReferral } from "../CertificateExtensions/CRLReferral.ta.mjs";
// export { CRLReferral, _decode_CRLReferral, _encode_CRLReferral } from "../CertificateExtensions/CRLReferral.ta.mjs";
import { OTHER_REFERRAL } from "../CertificateExtensions/OTHER-REFERRAL.oca.mjs";
// export { OTHER_REFERRAL } from "../CertificateExtensions/OTHER-REFERRAL.oca.mjs";


/**
 * @summary StatusReferral
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatusReferral  ::=  CHOICE {
 *   cRLReferral    [0]  CRLReferral,
 *   otherReferral  [1]  INSTANCE OF OTHER-REFERRAL,
 *   ... }
 * ```
 */
export
type StatusReferral =
    { cRLReferral: CRLReferral } /* CHOICE_ALT_ROOT */
    | { otherReferral: INSTANCE_OF } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_StatusReferral: $.ASN1Decoder<StatusReferral> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StatusReferral
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StatusReferral (el: _Element): StatusReferral {
    if (!_cached_decoder_for_StatusReferral) { _cached_decoder_for_StatusReferral = $._decode_extensible_choice<StatusReferral>({
    "CONTEXT 0": [ "cRLReferral", $._decode_implicit<CRLReferral>(() => _decode_CRLReferral) ],
    "CONTEXT 1": [ "otherReferral", $._decode_implicit<INSTANCE_OF>(() => $._decodeInstanceOf) ]
}); }
    return _cached_decoder_for_StatusReferral(el);
}

let _cached_encoder_for_StatusReferral: $.ASN1Encoder<StatusReferral> | null = null;

/**
 * @summary Encodes a(n) StatusReferral into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatusReferral, encoded as an ASN.1 Element.
 */
export
function _encode_StatusReferral (value: StatusReferral, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StatusReferral) { _cached_encoder_for_StatusReferral = $._encode_choice<StatusReferral>({
    "cRLReferral": $._encode_implicit(_TagClass.context, 0, () => _encode_CRLReferral, $.BER),
    "otherReferral": $._encode_implicit(_TagClass.context, 1, () => $._encodeInstanceOf, $.BER),
}, $.BER); }
    return _cached_encoder_for_StatusReferral(value, elGetter);
}


/* eslint-enable */
