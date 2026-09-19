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
import { LogotypeData, _decode_LogotypeData, _encode_LogotypeData } from "../LogotypeCertExtn/LogotypeData.ta.mjs";
// export { LogotypeData, _decode_LogotypeData, _encode_LogotypeData } from "../LogotypeCertExtn/LogotypeData.ta.mjs";
import { LogotypeReference, _decode_LogotypeReference, _encode_LogotypeReference } from "../LogotypeCertExtn/LogotypeReference.ta.mjs";
// export { LogotypeReference, _decode_LogotypeReference, _encode_LogotypeReference } from "../LogotypeCertExtn/LogotypeReference.ta.mjs";


/**
 * @summary LogotypeInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogotypeInfo  ::=  CHOICE {
 *    direct          [0] LogotypeData,
 *    indirect        [1] LogotypeReference }
 * ```
 */
export
type LogotypeInfo =
    { direct: LogotypeData } /* CHOICE_ALT_ROOT */
    | { indirect: LogotypeReference } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LogotypeInfo: $.ASN1Decoder<LogotypeInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogotypeInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogotypeInfo (el: _Element): LogotypeInfo {
    if (!_cached_decoder_for_LogotypeInfo) { _cached_decoder_for_LogotypeInfo = $._decode_inextensible_choice<LogotypeInfo>({
    "CONTEXT 0": [ "direct", $._decode_implicit<LogotypeData>(() => _decode_LogotypeData) ],
    "CONTEXT 1": [ "indirect", $._decode_implicit<LogotypeReference>(() => _decode_LogotypeReference) ]
}); }
    return _cached_decoder_for_LogotypeInfo(el);
}

let _cached_encoder_for_LogotypeInfo: $.ASN1Encoder<LogotypeInfo> | null = null;

/**
 * @summary Encodes a(n) LogotypeInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogotypeInfo, encoded as an ASN.1 Element.
 */
export
function _encode_LogotypeInfo (value: LogotypeInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogotypeInfo) { _cached_encoder_for_LogotypeInfo = $._encode_choice<LogotypeInfo>({
    "direct": $._encode_implicit(_TagClass.context, 0, () => _encode_LogotypeData, $.BER),
    "indirect": $._encode_implicit(_TagClass.context, 1, () => _encode_LogotypeReference, $.BER),
}, $.BER); }
    return _cached_encoder_for_LogotypeInfo(value, elGetter);
}


/* eslint-enable */
