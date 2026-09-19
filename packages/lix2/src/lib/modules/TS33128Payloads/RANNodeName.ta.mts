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
 * @summary RANNodeName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RANNodeName  ::=  CHOICE
 * {
 *     rANNodeNameVisible  [1] OCTET STRING,
 *     rANNodeNameUTF8     [2] UTF8String
 * }
 * ```
 */
export
type RANNodeName =
    { rANNodeNameVisible: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { rANNodeNameUTF8: UTF8String } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RANNodeName: $.ASN1Decoder<RANNodeName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RANNodeName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RANNodeName (el: _Element): RANNodeName {
    if (!_cached_decoder_for_RANNodeName) { _cached_decoder_for_RANNodeName = $._decode_inextensible_choice<RANNodeName>({
    "CONTEXT 1": [ "rANNodeNameVisible", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "rANNodeNameUTF8", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ]
}); }
    return _cached_decoder_for_RANNodeName(el);
}

let _cached_encoder_for_RANNodeName: $.ASN1Encoder<RANNodeName> | null = null;

/**
 * @summary Encodes a(n) RANNodeName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RANNodeName, encoded as an ASN.1 Element.
 */
export
function _encode_RANNodeName (value: RANNodeName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RANNodeName) { _cached_encoder_for_RANNodeName = $._encode_choice<RANNodeName>({
    "rANNodeNameVisible": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "rANNodeNameUTF8": $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER),
}, $.BER); }
    return _cached_encoder_for_RANNodeName(value, elGetter);
}


/* eslint-enable */
