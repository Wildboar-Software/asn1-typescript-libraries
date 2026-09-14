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
import { RevokedGroup, _decode_RevokedGroup, _encode_RevokedGroup } from "../CertificateExtensions/RevokedGroup.ta.mjs";
// export { RevokedGroup, _decode_RevokedGroup, _encode_RevokedGroup } from "../CertificateExtensions/RevokedGroup.ta.mjs";


/**
 * @summary RevokedGroupsSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RevokedGroupsSyntax  ::=  SEQUENCE SIZE (1..MAX) OF RevokedGroup
 * ```
 */
export
type RevokedGroupsSyntax = RevokedGroup[]; // SequenceOfType

let _cached_decoder_for_RevokedGroupsSyntax: $.ASN1Decoder<RevokedGroupsSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RevokedGroupsSyntax
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RevokedGroupsSyntax (el: _Element): RevokedGroupsSyntax {
    if (!_cached_decoder_for_RevokedGroupsSyntax) { _cached_decoder_for_RevokedGroupsSyntax = $._decodeSequenceOf<RevokedGroup>(() => _decode_RevokedGroup); }
    return _cached_decoder_for_RevokedGroupsSyntax(el);
}

let _cached_encoder_for_RevokedGroupsSyntax: $.ASN1Encoder<RevokedGroupsSyntax> | null = null;

/**
 * @summary Encodes a(n) RevokedGroupsSyntax into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevokedGroupsSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_RevokedGroupsSyntax (value: RevokedGroupsSyntax, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RevokedGroupsSyntax) { _cached_encoder_for_RevokedGroupsSyntax = $._encodeSequenceOf<RevokedGroup>(() => _encode_RevokedGroup, $.BER); }
    return _cached_encoder_for_RevokedGroupsSyntax(value, elGetter);
}


/* eslint-enable */
