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
 * @summary CertHash
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertHash  ::=  OCTET STRING (ENCODED BY sha-1)
 * ```
 */
export
type CertHash = OCTET_STRING; // OctetStringType

let _cached_decoder_for_CertHash: $.ASN1Decoder<CertHash> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertHash
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertHash (el: _Element): CertHash {
    if (!_cached_decoder_for_CertHash) { _cached_decoder_for_CertHash = $._decodeOctetString; }
    return _cached_decoder_for_CertHash(el);
}

let _cached_encoder_for_CertHash: $.ASN1Encoder<CertHash> | null = null;

/**
 * @summary Encodes a(n) CertHash into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertHash, encoded as an ASN.1 Element.
 */
export
function _encode_CertHash (value: CertHash, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertHash) { _cached_encoder_for_CertHash = $._encodeOctetString; }
    return _cached_encoder_for_CertHash(value, elGetter);
}


/* eslint-enable */
