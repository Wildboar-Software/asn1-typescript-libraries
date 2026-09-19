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
import { HASH, _get_decoder_for_HASH, _get_encoder_for_HASH } from "../AuthenticationFramework/HASH.ta.mjs";
// export { HASH, _get_decoder_for_HASH, _get_encoder_for_HASH } from "../AuthenticationFramework/HASH.ta.mjs";
import { AttributeTypeValueContexts, _decode_AttributeTypeValueContexts, _encode_AttributeTypeValueContexts } from "../EnhancedSecurity/AttributeTypeValueContexts.ta.mjs";
// export { AttributeTypeValueContexts, _decode_AttributeTypeValueContexts, _encode_AttributeTypeValueContexts } from "../EnhancedSecurity/AttributeTypeValueContexts.ta.mjs";


/**
 * @summary AVIHash
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AVIHash  ::=  HASH{AttributeTypeValueContexts}
 * ```
 */
export
type AVIHash = HASH<AttributeTypeValueContexts>; // DefinedType

let _cached_decoder_for_AVIHash: $.ASN1Decoder<AVIHash> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AVIHash
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AVIHash (el: _Element): AVIHash {
    if (!_cached_decoder_for_AVIHash) { _cached_decoder_for_AVIHash = _get_decoder_for_HASH<AttributeTypeValueContexts>(_decode_AttributeTypeValueContexts); }
    return _cached_decoder_for_AVIHash(el);
}

let _cached_encoder_for_AVIHash: $.ASN1Encoder<AVIHash> | null = null;

/**
 * @summary Encodes a(n) AVIHash into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AVIHash, encoded as an ASN.1 Element.
 */
export
function _encode_AVIHash (value: AVIHash, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AVIHash) { _cached_encoder_for_AVIHash = _get_encoder_for_HASH<AttributeTypeValueContexts>(_encode_AttributeTypeValueContexts); }
    return _cached_encoder_for_AVIHash(value, elGetter);
}


/* eslint-enable */
