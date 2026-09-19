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
 * @summary RP_UD
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RP-UD  ::=  OCTET STRING (SIZE (1..164))
 * ```
 */
export
type RP_UD = OCTET_STRING; // OctetStringType

let _cached_decoder_for_RP_UD: $.ASN1Decoder<RP_UD> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RP_UD
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RP_UD (el: _Element): RP_UD {
    if (!_cached_decoder_for_RP_UD) { _cached_decoder_for_RP_UD = $._decodeOctetString; }
    return _cached_decoder_for_RP_UD(el);
}

let _cached_encoder_for_RP_UD: $.ASN1Encoder<RP_UD> | null = null;

/**
 * @summary Encodes a(n) RP_UD into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RP_UD, encoded as an ASN.1 Element.
 */
export
function _encode_RP_UD (value: RP_UD, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RP_UD) { _cached_encoder_for_RP_UD = $._encodeOctetString; }
    return _cached_encoder_for_RP_UD(value, elGetter);
}


/* eslint-enable */
