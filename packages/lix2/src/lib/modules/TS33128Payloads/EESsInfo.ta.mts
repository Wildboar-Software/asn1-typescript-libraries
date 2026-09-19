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
import { EESInfo, _decode_EESInfo, _encode_EESInfo } from "../TS33128Payloads/EESInfo.ta.mjs";
// export { EESInfo, _decode_EESInfo, _encode_EESInfo } from "../TS33128Payloads/EESInfo.ta.mjs";


/**
 * @summary EESsInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EESsInfo  ::=  SET OF EESInfo
 * ```
 */
export
type EESsInfo = EESInfo[]; // SetOfType

let _cached_decoder_for_EESsInfo: $.ASN1Decoder<EESsInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EESsInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EESsInfo (el: _Element): EESsInfo {
    if (!_cached_decoder_for_EESsInfo) { _cached_decoder_for_EESsInfo = $._decodeSetOf<EESInfo>(() => _decode_EESInfo); }
    return _cached_decoder_for_EESsInfo(el);
}

let _cached_encoder_for_EESsInfo: $.ASN1Encoder<EESsInfo> | null = null;

/**
 * @summary Encodes a(n) EESsInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EESsInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EESsInfo (value: EESsInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EESsInfo) { _cached_encoder_for_EESsInfo = $._encodeSetOf<EESInfo>(() => _encode_EESInfo, $.BER); }
    return _cached_encoder_for_EESsInfo(value, elGetter);
}


/* eslint-enable */
