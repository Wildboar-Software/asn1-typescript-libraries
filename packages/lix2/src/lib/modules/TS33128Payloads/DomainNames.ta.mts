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
 * @summary DomainNames
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DomainNames  ::=  SET OF UTF8String
 * ```
 */
export
type DomainNames = UTF8String[]; // SetOfType

let _cached_decoder_for_DomainNames: $.ASN1Decoder<DomainNames> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DomainNames
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DomainNames (el: _Element): DomainNames {
    if (!_cached_decoder_for_DomainNames) { _cached_decoder_for_DomainNames = $._decodeSetOf<UTF8String>(() => $._decodeUTF8String); }
    return _cached_decoder_for_DomainNames(el);
}

let _cached_encoder_for_DomainNames: $.ASN1Encoder<DomainNames> | null = null;

/**
 * @summary Encodes a(n) DomainNames into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DomainNames, encoded as an ASN.1 Element.
 */
export
function _encode_DomainNames (value: DomainNames, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DomainNames) { _cached_encoder_for_DomainNames = $._encodeSetOf<UTF8String>(() => $._encodeUTF8String, $.BER); }
    return _cached_encoder_for_DomainNames(value, elGetter);
}


/* eslint-enable */
