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
import { PerAuthorityScope, _decode_PerAuthorityScope, _encode_PerAuthorityScope } from "../CertificateExtensions/PerAuthorityScope.ta.mjs";
// export { PerAuthorityScope, _decode_PerAuthorityScope, _encode_PerAuthorityScope } from "../CertificateExtensions/PerAuthorityScope.ta.mjs";


/**
 * @summary CRLScopeSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CRLScopeSyntax  ::=  SEQUENCE SIZE (1..MAX) OF PerAuthorityScope
 * ```
 */
export
type CRLScopeSyntax = PerAuthorityScope[]; // SequenceOfType

let _cached_decoder_for_CRLScopeSyntax: $.ASN1Decoder<CRLScopeSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CRLScopeSyntax
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CRLScopeSyntax (el: _Element): CRLScopeSyntax {
    if (!_cached_decoder_for_CRLScopeSyntax) { _cached_decoder_for_CRLScopeSyntax = $._decodeSequenceOf<PerAuthorityScope>(() => _decode_PerAuthorityScope); }
    return _cached_decoder_for_CRLScopeSyntax(el);
}

let _cached_encoder_for_CRLScopeSyntax: $.ASN1Encoder<CRLScopeSyntax> | null = null;

/**
 * @summary Encodes a(n) CRLScopeSyntax into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CRLScopeSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_CRLScopeSyntax (value: CRLScopeSyntax, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CRLScopeSyntax) { _cached_encoder_for_CRLScopeSyntax = $._encodeSequenceOf<PerAuthorityScope>(() => _encode_PerAuthorityScope, $.BER); }
    return _cached_encoder_for_CRLScopeSyntax(value, elGetter);
}


/* eslint-enable */
