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
import { PolicyMappings_Item, _decode_PolicyMappings_Item, _encode_PolicyMappings_Item } from "../PKIX1Implicit88/PolicyMappings-Item.ta.mjs";
// export { PolicyMappings_Item, _decode_PolicyMappings_Item, _encode_PolicyMappings_Item } from "../PKIX1Implicit88/PolicyMappings-Item.ta.mjs";


/**
 * @summary PolicyMappings
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PolicyMappings  ::=  SEQUENCE SIZE (1..MAX) OF SEQUENCE {
 *      issuerDomainPolicy      CertPolicyId,
 *      subjectDomainPolicy     CertPolicyId }
 * ```
 */
export
type PolicyMappings = PolicyMappings_Item[]; // SequenceOfType

let _cached_decoder_for_PolicyMappings: $.ASN1Decoder<PolicyMappings> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PolicyMappings
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PolicyMappings (el: _Element): PolicyMappings {
    if (!_cached_decoder_for_PolicyMappings) { _cached_decoder_for_PolicyMappings = $._decodeSequenceOf<PolicyMappings_Item>(() => _decode_PolicyMappings_Item); }
    return _cached_decoder_for_PolicyMappings(el);
}

let _cached_encoder_for_PolicyMappings: $.ASN1Encoder<PolicyMappings> | null = null;

/**
 * @summary Encodes a(n) PolicyMappings into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PolicyMappings, encoded as an ASN.1 Element.
 */
export
function _encode_PolicyMappings (value: PolicyMappings, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PolicyMappings) { _cached_encoder_for_PolicyMappings = $._encodeSequenceOf<PolicyMappings_Item>(() => _encode_PolicyMappings_Item, $.BER); }
    return _cached_encoder_for_PolicyMappings(value, elGetter);
}


/* eslint-enable */
