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



/**
 * @summary CSTAPrivateData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSTAPrivateData  ::=  CHOICE
 * {     string             OCTET STRING,
 *     private         NULL }
 * ```
 */
export
type CSTAPrivateData =
    { string_: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { private_: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CSTAPrivateData: $.ASN1Decoder<CSTAPrivateData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CSTAPrivateData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CSTAPrivateData (el: _Element): CSTAPrivateData {
    if (!_cached_decoder_for_CSTAPrivateData) { _cached_decoder_for_CSTAPrivateData = $._decode_inextensible_choice<CSTAPrivateData>({
    "UNIVERSAL 4": [ "string_", $._decodeOctetString ],
    "UNIVERSAL 5": [ "private_", $._decodeNull ]
}); }
    return _cached_decoder_for_CSTAPrivateData(el);
}

let _cached_encoder_for_CSTAPrivateData: $.ASN1Encoder<CSTAPrivateData> | null = null;

/**
 * @summary Encodes a(n) CSTAPrivateData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSTAPrivateData, encoded as an ASN.1 Element.
 */
export
function _encode_CSTAPrivateData (value: CSTAPrivateData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CSTAPrivateData) { _cached_encoder_for_CSTAPrivateData = $._encode_choice<CSTAPrivateData>({
    "string_": $._encodeOctetString,
    "private_": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_CSTAPrivateData(value, elGetter);
}


/* eslint-enable */
