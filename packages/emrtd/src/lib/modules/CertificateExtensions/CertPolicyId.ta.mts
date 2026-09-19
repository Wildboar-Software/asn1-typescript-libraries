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
 * @summary CertPolicyId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertPolicyId  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type CertPolicyId = OBJECT_IDENTIFIER; // ObjectIdentifierType

let _cached_decoder_for_CertPolicyId: $.ASN1Decoder<CertPolicyId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertPolicyId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertPolicyId (el: _Element): CertPolicyId {
    if (!_cached_decoder_for_CertPolicyId) { _cached_decoder_for_CertPolicyId = $._decodeObjectIdentifier; }
    return _cached_decoder_for_CertPolicyId(el);
}

let _cached_encoder_for_CertPolicyId: $.ASN1Encoder<CertPolicyId> | null = null;

/**
 * @summary Encodes a(n) CertPolicyId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertPolicyId, encoded as an ASN.1 Element.
 */
export
function _encode_CertPolicyId (value: CertPolicyId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertPolicyId) { _cached_encoder_for_CertPolicyId = $._encodeObjectIdentifier; }
    return _cached_encoder_for_CertPolicyId(value, elGetter);
}


/* eslint-enable */
