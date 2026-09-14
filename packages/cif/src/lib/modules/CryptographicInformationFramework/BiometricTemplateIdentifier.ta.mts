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
 * @summary BiometricTemplateIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricTemplateIdentifier  ::=  CHOICE {
 *     oid         OBJECT IDENTIFIER,
 *     issuerId    OCTET STRING,
 *     ... -- For future extensions
 * }
 * ```
 */
export
type BiometricTemplateIdentifier =
    { oid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { issuerId: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_BiometricTemplateIdentifier: $.ASN1Decoder<BiometricTemplateIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricTemplateIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BiometricTemplateIdentifier (el: _Element): BiometricTemplateIdentifier {
    if (!_cached_decoder_for_BiometricTemplateIdentifier) { _cached_decoder_for_BiometricTemplateIdentifier = $._decode_extensible_choice<BiometricTemplateIdentifier>({
    "UNIVERSAL 6": [ "oid", $._decodeObjectIdentifier ],
    "UNIVERSAL 4": [ "issuerId", $._decodeOctetString ]
}); }
    return _cached_decoder_for_BiometricTemplateIdentifier(el);
}

let _cached_encoder_for_BiometricTemplateIdentifier: $.ASN1Encoder<BiometricTemplateIdentifier> | null = null;

/**
 * @summary Encodes a(n) BiometricTemplateIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricTemplateIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricTemplateIdentifier (value: BiometricTemplateIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BiometricTemplateIdentifier) { _cached_encoder_for_BiometricTemplateIdentifier = $._encode_choice<BiometricTemplateIdentifier>({
    "oid": $._encodeObjectIdentifier,
    "issuerId": $._encodeOctetString,
}, $.BER); }
    return _cached_encoder_for_BiometricTemplateIdentifier(value, elGetter);
}


/* eslint-enable */
