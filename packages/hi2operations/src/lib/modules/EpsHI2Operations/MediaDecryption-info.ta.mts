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
import { CCKeyInfo, _decode_CCKeyInfo, _encode_CCKeyInfo } from "../EpsHI2Operations/CCKeyInfo.ta.mjs";
// export { CCKeyInfo, _decode_CCKeyInfo, _encode_CCKeyInfo } from "../EpsHI2Operations/CCKeyInfo.ta.mjs";


/**
 * @summary MediaDecryption_info
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaDecryption-info  ::=  SEQUENCE OF CCKeyInfo
 * ```
 */
export
type MediaDecryption_info = CCKeyInfo[]; // SequenceOfType

let _cached_decoder_for_MediaDecryption_info: $.ASN1Decoder<MediaDecryption_info> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaDecryption_info
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaDecryption_info (el: _Element): MediaDecryption_info {
    if (!_cached_decoder_for_MediaDecryption_info) { _cached_decoder_for_MediaDecryption_info = $._decodeSequenceOf<CCKeyInfo>(() => _decode_CCKeyInfo); }
    return _cached_decoder_for_MediaDecryption_info(el);
}

let _cached_encoder_for_MediaDecryption_info: $.ASN1Encoder<MediaDecryption_info> | null = null;

/**
 * @summary Encodes a(n) MediaDecryption_info into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaDecryption_info, encoded as an ASN.1 Element.
 */
export
function _encode_MediaDecryption_info (value: MediaDecryption_info, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaDecryption_info) { _cached_encoder_for_MediaDecryption_info = $._encodeSequenceOf<CCKeyInfo>(() => _encode_CCKeyInfo, $.BER); }
    return _cached_encoder_for_MediaDecryption_info(value, elGetter);
}


/* eslint-enable */
