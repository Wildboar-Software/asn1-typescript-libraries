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
 * @summary IMSI_Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSI-Address  ::=  OCTET STRING
 * ```
 */
export
type IMSI_Address = OCTET_STRING; // OctetStringType

let _cached_decoder_for_IMSI_Address: $.ASN1Decoder<IMSI_Address> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSI_Address
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSI_Address (el: _Element): IMSI_Address {
    if (!_cached_decoder_for_IMSI_Address) { _cached_decoder_for_IMSI_Address = $._decodeOctetString; }
    return _cached_decoder_for_IMSI_Address(el);
}

let _cached_encoder_for_IMSI_Address: $.ASN1Encoder<IMSI_Address> | null = null;

/**
 * @summary Encodes a(n) IMSI_Address into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSI_Address, encoded as an ASN.1 Element.
 */
export
function _encode_IMSI_Address (value: IMSI_Address, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSI_Address) { _cached_encoder_for_IMSI_Address = $._encodeOctetString; }
    return _cached_encoder_for_IMSI_Address(value, elGetter);
}


/* eslint-enable */
