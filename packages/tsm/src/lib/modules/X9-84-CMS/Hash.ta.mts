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
import { CertHash, _decode_CertHash, _encode_CertHash } from "../X9-84-CMS/CertHash.ta.mjs";
// export { CertHash, _decode_CertHash, _encode_CertHash } from "../X9-84-CMS/CertHash.ta.mjs";
import { DigestInfo, _decode_DigestInfo, _encode_DigestInfo } from "../X9-84-CMS/DigestInfo.ta.mjs";
// export { DigestInfo, _decode_DigestInfo, _encode_DigestInfo } from "../X9-84-CMS/DigestInfo.ta.mjs";


/**
 * @summary Hash
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Hash  ::=  CHOICE {
 *    ietf       CertHash,  -- SHA-1 hash of entire certificate
 *    withAlgID  DigestInfo
 * }
 * ```
 */
export
type Hash =
    { ietf: CertHash } /* CHOICE_ALT_ROOT */
    | { withAlgID: DigestInfo } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Hash: $.ASN1Decoder<Hash> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Hash
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Hash (el: _Element): Hash {
    if (!_cached_decoder_for_Hash) { _cached_decoder_for_Hash = $._decode_inextensible_choice<Hash>({
    "UNIVERSAL 4": [ "ietf", _decode_CertHash ],
    "UNIVERSAL 16": [ "withAlgID", _decode_DigestInfo ]
}); }
    return _cached_decoder_for_Hash(el);
}

let _cached_encoder_for_Hash: $.ASN1Encoder<Hash> | null = null;

/**
 * @summary Encodes a(n) Hash into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Hash, encoded as an ASN.1 Element.
 */
export
function _encode_Hash (value: Hash, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Hash) { _cached_encoder_for_Hash = $._encode_choice<Hash>({
    "ietf": _encode_CertHash,
    "withAlgID": _encode_DigestInfo,
}, $.BER); }
    return _cached_encoder_for_Hash(value, elGetter);
}


/* eslint-enable */
