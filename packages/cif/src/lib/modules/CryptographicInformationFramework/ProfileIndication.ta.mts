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
 * @summary ProfileIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileIndication  ::=  CHOICE {
 *     profileOID      OBJECT IDENTIFIER,
 *     profileName     UTF8String,
 *     ... -- For future extensions
 * }
 * ```
 */
export
type ProfileIndication =
    { profileOID: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { profileName: UTF8String } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ProfileIndication: $.ASN1Decoder<ProfileIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileIndication (el: _Element): ProfileIndication {
    if (!_cached_decoder_for_ProfileIndication) { _cached_decoder_for_ProfileIndication = $._decode_extensible_choice<ProfileIndication>({
    "UNIVERSAL 6": [ "profileOID", $._decodeObjectIdentifier ],
    "UNIVERSAL 12": [ "profileName", $._decodeUTF8String ]
}); }
    return _cached_decoder_for_ProfileIndication(el);
}

let _cached_encoder_for_ProfileIndication: $.ASN1Encoder<ProfileIndication> | null = null;

/**
 * @summary Encodes a(n) ProfileIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileIndication, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileIndication (value: ProfileIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileIndication) { _cached_encoder_for_ProfileIndication = $._encode_choice<ProfileIndication>({
    "profileOID": $._encodeObjectIdentifier,
    "profileName": $._encodeUTF8String,
}, $.BER); }
    return _cached_encoder_for_ProfileIndication(value, elGetter);
}


/* eslint-enable */
