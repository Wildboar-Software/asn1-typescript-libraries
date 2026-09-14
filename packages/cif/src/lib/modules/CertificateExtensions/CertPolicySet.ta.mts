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
import { CertPolicyId, _decode_CertPolicyId, _encode_CertPolicyId } from "../CertificateExtensions/CertPolicyId.ta.mjs";
// export { CertPolicyId, _decode_CertPolicyId, _encode_CertPolicyId } from "../CertificateExtensions/CertPolicyId.ta.mjs";


/**
 * @summary CertPolicySet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertPolicySet  ::=  SEQUENCE SIZE (1..MAX) OF CertPolicyId
 * ```
 */
export
type CertPolicySet = CertPolicyId[]; // SequenceOfType

let _cached_decoder_for_CertPolicySet: $.ASN1Decoder<CertPolicySet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertPolicySet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertPolicySet (el: _Element): CertPolicySet {
    if (!_cached_decoder_for_CertPolicySet) { _cached_decoder_for_CertPolicySet = $._decodeSequenceOf<CertPolicyId>(() => _decode_CertPolicyId); }
    return _cached_decoder_for_CertPolicySet(el);
}

let _cached_encoder_for_CertPolicySet: $.ASN1Encoder<CertPolicySet> | null = null;

/**
 * @summary Encodes a(n) CertPolicySet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertPolicySet, encoded as an ASN.1 Element.
 */
export
function _encode_CertPolicySet (value: CertPolicySet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertPolicySet) { _cached_encoder_for_CertPolicySet = $._encodeSequenceOf<CertPolicyId>(() => _encode_CertPolicyId, $.BER); }
    return _cached_encoder_for_CertPolicySet(value, elGetter);
}


/* eslint-enable */
