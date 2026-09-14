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
import { RoleSpecCertIdentifier, _decode_RoleSpecCertIdentifier, _encode_RoleSpecCertIdentifier } from "../AttributeCertificateDefinitions/RoleSpecCertIdentifier.ta.mjs";
// export { RoleSpecCertIdentifier, _decode_RoleSpecCertIdentifier, _encode_RoleSpecCertIdentifier } from "../AttributeCertificateDefinitions/RoleSpecCertIdentifier.ta.mjs";


/**
 * @summary RoleSpecCertIdentifierSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoleSpecCertIdentifierSyntax  ::= 
 *   SEQUENCE SIZE (1..MAX) OF RoleSpecCertIdentifier
 * ```
 */
export
type RoleSpecCertIdentifierSyntax = RoleSpecCertIdentifier[]; // SequenceOfType

let _cached_decoder_for_RoleSpecCertIdentifierSyntax: $.ASN1Decoder<RoleSpecCertIdentifierSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoleSpecCertIdentifierSyntax
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RoleSpecCertIdentifierSyntax (el: _Element): RoleSpecCertIdentifierSyntax {
    if (!_cached_decoder_for_RoleSpecCertIdentifierSyntax) { _cached_decoder_for_RoleSpecCertIdentifierSyntax = $._decodeSequenceOf<RoleSpecCertIdentifier>(() => _decode_RoleSpecCertIdentifier); }
    return _cached_decoder_for_RoleSpecCertIdentifierSyntax(el);
}

let _cached_encoder_for_RoleSpecCertIdentifierSyntax: $.ASN1Encoder<RoleSpecCertIdentifierSyntax> | null = null;

/**
 * @summary Encodes a(n) RoleSpecCertIdentifierSyntax into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoleSpecCertIdentifierSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_RoleSpecCertIdentifierSyntax (value: RoleSpecCertIdentifierSyntax, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RoleSpecCertIdentifierSyntax) { _cached_encoder_for_RoleSpecCertIdentifierSyntax = $._encodeSequenceOf<RoleSpecCertIdentifier>(() => _encode_RoleSpecCertIdentifier, $.BER); }
    return _cached_encoder_for_RoleSpecCertIdentifierSyntax(value, elGetter);
}


/* eslint-enable */
