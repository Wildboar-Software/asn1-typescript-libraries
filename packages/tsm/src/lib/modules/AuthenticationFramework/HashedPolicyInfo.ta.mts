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
import { POLICY } from "../AuthenticationFramework/POLICY.oca.mjs";
// export { POLICY } from "../AuthenticationFramework/POLICY.oca.mjs";
import { Policies } from "../AuthenticationFramework/Policies.osa.mjs";
// export { Policies } from "../AuthenticationFramework/Policies.osa.mjs";


/**
 * @summary HashedPolicyInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HashedPolicyInfo  ::=  POLICY.&Type({Policies})
 * ```
 */
export
type HashedPolicyInfo = _Element; // ObjectClassFieldType

let _cached_decoder_for_HashedPolicyInfo: $.ASN1Decoder<HashedPolicyInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HashedPolicyInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HashedPolicyInfo (el: _Element): HashedPolicyInfo {
    if (!_cached_decoder_for_HashedPolicyInfo) { _cached_decoder_for_HashedPolicyInfo = $._decodeAny; }
    return _cached_decoder_for_HashedPolicyInfo(el);
}

let _cached_encoder_for_HashedPolicyInfo: $.ASN1Encoder<HashedPolicyInfo> | null = null;

/**
 * @summary Encodes a(n) HashedPolicyInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HashedPolicyInfo, encoded as an ASN.1 Element.
 */
export
function _encode_HashedPolicyInfo (value: HashedPolicyInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HashedPolicyInfo) { _cached_encoder_for_HashedPolicyInfo = $._encodeAny; }
    return _cached_encoder_for_HashedPolicyInfo(value, elGetter);
}


/* eslint-enable */
