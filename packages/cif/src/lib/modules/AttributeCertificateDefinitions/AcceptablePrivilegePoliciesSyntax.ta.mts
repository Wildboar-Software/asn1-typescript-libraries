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
import { PrivilegePolicy, _decode_PrivilegePolicy, _encode_PrivilegePolicy } from "../AttributeCertificateDefinitions/PrivilegePolicy.ta.mjs";
// export { PrivilegePolicy, _decode_PrivilegePolicy, _encode_PrivilegePolicy } from "../AttributeCertificateDefinitions/PrivilegePolicy.ta.mjs";


/**
 * @summary AcceptablePrivilegePoliciesSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AcceptablePrivilegePoliciesSyntax  ::=  SEQUENCE SIZE (1..MAX) OF PrivilegePolicy
 * ```
 */
export
type AcceptablePrivilegePoliciesSyntax = PrivilegePolicy[]; // SequenceOfType

let _cached_decoder_for_AcceptablePrivilegePoliciesSyntax: $.ASN1Decoder<AcceptablePrivilegePoliciesSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AcceptablePrivilegePoliciesSyntax
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AcceptablePrivilegePoliciesSyntax (el: _Element): AcceptablePrivilegePoliciesSyntax {
    if (!_cached_decoder_for_AcceptablePrivilegePoliciesSyntax) { _cached_decoder_for_AcceptablePrivilegePoliciesSyntax = $._decodeSequenceOf<PrivilegePolicy>(() => _decode_PrivilegePolicy); }
    return _cached_decoder_for_AcceptablePrivilegePoliciesSyntax(el);
}

let _cached_encoder_for_AcceptablePrivilegePoliciesSyntax: $.ASN1Encoder<AcceptablePrivilegePoliciesSyntax> | null = null;

/**
 * @summary Encodes a(n) AcceptablePrivilegePoliciesSyntax into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AcceptablePrivilegePoliciesSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_AcceptablePrivilegePoliciesSyntax (value: AcceptablePrivilegePoliciesSyntax, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AcceptablePrivilegePoliciesSyntax) { _cached_encoder_for_AcceptablePrivilegePoliciesSyntax = $._encodeSequenceOf<PrivilegePolicy>(() => _encode_PrivilegePolicy, $.BER); }
    return _cached_encoder_for_AcceptablePrivilegePoliciesSyntax(value, elGetter);
}


/* eslint-enable */
