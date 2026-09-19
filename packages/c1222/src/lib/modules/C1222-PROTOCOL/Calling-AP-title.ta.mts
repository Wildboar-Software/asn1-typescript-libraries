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



/**
 * @summary Calling_AP_title
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Calling-AP-title  ::=  CHOICE {
 *     calling-ap-title-abs OBJECT IDENTIFIER,
 *     calling-ap-title-rel [0] IMPLICIT RELATIVE-OID
 * }
 * ```
 */
export
type Calling_AP_title =
    { calling_ap_title_abs: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { calling_ap_title_rel: RELATIVE_OID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Calling_AP_title: $.ASN1Decoder<Calling_AP_title> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Calling_AP_title
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Calling_AP_title (el: _Element): Calling_AP_title {
    if (!_cached_decoder_for_Calling_AP_title) { _cached_decoder_for_Calling_AP_title = $._decode_inextensible_choice<Calling_AP_title>({
    "UNIVERSAL 6": [ "calling_ap_title_abs", $._decodeObjectIdentifier ],
    "CONTEXT 0": [ "calling_ap_title_rel", $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID) ]
}); }
    return _cached_decoder_for_Calling_AP_title(el);
}

let _cached_encoder_for_Calling_AP_title: $.ASN1Encoder<Calling_AP_title> | null = null;

/**
 * @summary Encodes a(n) Calling_AP_title into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Calling_AP_title, encoded as an ASN.1 Element.
 */
export
function _encode_Calling_AP_title (value: Calling_AP_title, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Calling_AP_title) { _cached_encoder_for_Calling_AP_title = $._encode_choice<Calling_AP_title>({
    "calling_ap_title_abs": $._encodeObjectIdentifier,
    "calling_ap_title_rel": $._encode_implicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER),
}, $.BER); }
    return _cached_encoder_for_Calling_AP_title(value, elGetter);
}


/* eslint-enable */
