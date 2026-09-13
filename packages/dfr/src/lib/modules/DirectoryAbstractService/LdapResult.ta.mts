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
import { LdapResultData, _decode_LdapResultData, _encode_LdapResultData } from "../DirectoryAbstractService/LdapResultData.ta.mjs";
// export { LdapResultData, _decode_LdapResultData, _encode_LdapResultData } from "../DirectoryAbstractService/LdapResultData.ta.mjs";


/**
 * @summary LdapResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LdapResult  ::=  OPTIONALLY-PROTECTED-SEQ { LdapResultData }
 * ```
 */
export
type LdapResult = OPTIONALLY_PROTECTED_SEQ<LdapResultData>; // DefinedType

let _cached_decoder_for_LdapResult: $.ASN1Decoder<LdapResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LdapResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LdapResult (el: _Element): LdapResult {
    if (!_cached_decoder_for_LdapResult) { _cached_decoder_for_LdapResult = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<LdapResultData>(_decode_LdapResultData); }
    return _cached_decoder_for_LdapResult(el);
}

let _cached_encoder_for_LdapResult: $.ASN1Encoder<LdapResult> | null = null;

/**
 * @summary Encodes a(n) LdapResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LdapResult, encoded as an ASN.1 Element.
 */
export
function _encode_LdapResult (value: LdapResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LdapResult) { _cached_encoder_for_LdapResult = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<LdapResultData>(_encode_LdapResultData); }
    return _cached_encoder_for_LdapResult(value, elGetter);
}


/* eslint-enable */
