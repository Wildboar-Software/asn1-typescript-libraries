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
import { ScopeRestriction, _decode_ScopeRestriction, _encode_ScopeRestriction } from "../AuthenticationFramework/ScopeRestriction.ta.mjs";
// export { ScopeRestriction, _decode_ScopeRestriction, _encode_ScopeRestriction } from "../AuthenticationFramework/ScopeRestriction.ta.mjs";


/**
 * @summary ScopeRestrictions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScopeRestrictions  ::=  SEQUENCE OF ScopeRestriction
 * ```
 */
export
type ScopeRestrictions = ScopeRestriction[]; // SequenceOfType

let _cached_decoder_for_ScopeRestrictions: $.ASN1Decoder<ScopeRestrictions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScopeRestrictions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ScopeRestrictions (el: _Element): ScopeRestrictions {
    if (!_cached_decoder_for_ScopeRestrictions) { _cached_decoder_for_ScopeRestrictions = $._decodeSequenceOf<ScopeRestriction>(() => _decode_ScopeRestriction); }
    return _cached_decoder_for_ScopeRestrictions(el);
}

let _cached_encoder_for_ScopeRestrictions: $.ASN1Encoder<ScopeRestrictions> | null = null;

/**
 * @summary Encodes a(n) ScopeRestrictions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScopeRestrictions, encoded as an ASN.1 Element.
 */
export
function _encode_ScopeRestrictions (value: ScopeRestrictions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ScopeRestrictions) { _cached_encoder_for_ScopeRestrictions = $._encodeSequenceOf<ScopeRestriction>(() => _encode_ScopeRestriction, $.BER); }
    return _cached_encoder_for_ScopeRestrictions(value, elGetter);
}


/* eslint-enable */
