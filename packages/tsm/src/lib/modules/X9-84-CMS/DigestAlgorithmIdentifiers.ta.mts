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
import { DigestAlgorithmIdentifier, _decode_DigestAlgorithmIdentifier, _encode_DigestAlgorithmIdentifier } from "../X9-84-CMS/DigestAlgorithmIdentifier.ta.mjs";
// export { DigestAlgorithmIdentifier, _decode_DigestAlgorithmIdentifier, _encode_DigestAlgorithmIdentifier } from "../X9-84-CMS/DigestAlgorithmIdentifier.ta.mjs";


/**
 * @summary DigestAlgorithmIdentifiers
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DigestAlgorithmIdentifiers  ::= 
 *       SET SIZE(1) OF DigestAlgorithmIdentifier
 * ```
 */
export
type DigestAlgorithmIdentifiers = DigestAlgorithmIdentifier[]; // SetOfType

let _cached_decoder_for_DigestAlgorithmIdentifiers: $.ASN1Decoder<DigestAlgorithmIdentifiers> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DigestAlgorithmIdentifiers
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DigestAlgorithmIdentifiers (el: _Element): DigestAlgorithmIdentifiers {
    if (!_cached_decoder_for_DigestAlgorithmIdentifiers) { _cached_decoder_for_DigestAlgorithmIdentifiers = $._decodeSetOf<DigestAlgorithmIdentifier>(() => _decode_DigestAlgorithmIdentifier); }
    return _cached_decoder_for_DigestAlgorithmIdentifiers(el);
}

let _cached_encoder_for_DigestAlgorithmIdentifiers: $.ASN1Encoder<DigestAlgorithmIdentifiers> | null = null;

/**
 * @summary Encodes a(n) DigestAlgorithmIdentifiers into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigestAlgorithmIdentifiers, encoded as an ASN.1 Element.
 */
export
function _encode_DigestAlgorithmIdentifiers (value: DigestAlgorithmIdentifiers, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DigestAlgorithmIdentifiers) { _cached_encoder_for_DigestAlgorithmIdentifiers = $._encodeSetOf<DigestAlgorithmIdentifier>(() => _encode_DigestAlgorithmIdentifier, $.BER); }
    return _cached_encoder_for_DigestAlgorithmIdentifiers(value, elGetter);
}


/* eslint-enable */
