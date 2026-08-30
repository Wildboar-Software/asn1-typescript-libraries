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
 * @summary SM_RP_SMEA
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SM-RP-SMEA  ::=  OCTET STRING (SIZE (1..12))
 * ```
 */
export
type SM_RP_SMEA = OCTET_STRING; // OctetStringType

let _cached_decoder_for_SM_RP_SMEA: $.ASN1Decoder<SM_RP_SMEA> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SM_RP_SMEA
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SM_RP_SMEA (el: _Element): SM_RP_SMEA {
    if (!_cached_decoder_for_SM_RP_SMEA) { _cached_decoder_for_SM_RP_SMEA = $._decodeOctetString; }
    return _cached_decoder_for_SM_RP_SMEA(el);
}

let _cached_encoder_for_SM_RP_SMEA: $.ASN1Encoder<SM_RP_SMEA> | null = null;

/**
 * @summary Encodes a(n) SM_RP_SMEA into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SM_RP_SMEA, encoded as an ASN.1 Element.
 */
export
function _encode_SM_RP_SMEA (value: SM_RP_SMEA, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SM_RP_SMEA) { _cached_encoder_for_SM_RP_SMEA = $._encodeOctetString; }
    return _cached_encoder_for_SM_RP_SMEA(value, elGetter);
}


/* eslint-enable */
