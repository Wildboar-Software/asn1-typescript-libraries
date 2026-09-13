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
 * @summary SimpleCredentials_validity_time2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SimpleCredentials-validity-time2 ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type SimpleCredentials_validity_time2 =
    { utc: UTCTime } /* CHOICE_ALT_ROOT */
    | { gt: GeneralizedTime } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SimpleCredentials_validity_time2: $.ASN1Decoder<SimpleCredentials_validity_time2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SimpleCredentials_validity_time2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SimpleCredentials_validity_time2 (el: _Element): SimpleCredentials_validity_time2 {
    if (!_cached_decoder_for_SimpleCredentials_validity_time2) { _cached_decoder_for_SimpleCredentials_validity_time2 = $._decode_inextensible_choice<SimpleCredentials_validity_time2>({
    "UNIVERSAL 23": [ "utc", $._decodeUTCTime ],
    "UNIVERSAL 24": [ "gt", $._decodeGeneralizedTime ]
}); }
    return _cached_decoder_for_SimpleCredentials_validity_time2(el);
}

let _cached_encoder_for_SimpleCredentials_validity_time2: $.ASN1Encoder<SimpleCredentials_validity_time2> | null = null;

/**
 * @summary Encodes a(n) SimpleCredentials_validity_time2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SimpleCredentials_validity_time2, encoded as an ASN.1 Element.
 */
export
function _encode_SimpleCredentials_validity_time2 (value: SimpleCredentials_validity_time2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SimpleCredentials_validity_time2) { _cached_encoder_for_SimpleCredentials_validity_time2 = $._encode_choice<SimpleCredentials_validity_time2>({
    "utc": $._encodeUTCTime,
    "gt": $._encodeGeneralizedTime,
}, $.BER); }
    return _cached_encoder_for_SimpleCredentials_validity_time2(value, elGetter);
}


/* eslint-enable */
