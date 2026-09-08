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
import { SnapshotDeviceResponseInfo, _decode_SnapshotDeviceResponseInfo, _encode_SnapshotDeviceResponseInfo } from "../CSTA-status-reporting/SnapshotDeviceResponseInfo.ta.mjs";
// export { SnapshotDeviceResponseInfo, _decode_SnapshotDeviceResponseInfo, _encode_SnapshotDeviceResponseInfo } from "../CSTA-status-reporting/SnapshotDeviceResponseInfo.ta.mjs";


/**
 * @summary SnapshotDeviceData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SnapshotDeviceData  ::=  [APPLICATION 22] IMPLICIT SEQUENCE OF SnapshotDeviceResponseInfo
 * ```
 */
export
type SnapshotDeviceData = SnapshotDeviceResponseInfo[]; // SequenceOfType

let _cached_decoder_for_SnapshotDeviceData: $.ASN1Decoder<SnapshotDeviceData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SnapshotDeviceData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SnapshotDeviceData (el: _Element): SnapshotDeviceData {
    if (!_cached_decoder_for_SnapshotDeviceData) { _cached_decoder_for_SnapshotDeviceData = $._decode_implicit<SnapshotDeviceData>(() => $._decodeSequenceOf<SnapshotDeviceResponseInfo>(() => _decode_SnapshotDeviceResponseInfo)); }
    return _cached_decoder_for_SnapshotDeviceData(el);
}

let _cached_encoder_for_SnapshotDeviceData: $.ASN1Encoder<SnapshotDeviceData> | null = null;

/**
 * @summary Encodes a(n) SnapshotDeviceData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SnapshotDeviceData, encoded as an ASN.1 Element.
 */
export
function _encode_SnapshotDeviceData (value: SnapshotDeviceData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SnapshotDeviceData) { _cached_encoder_for_SnapshotDeviceData = $._encode_implicit(_TagClass.application, 22, () => $._encodeSequenceOf<SnapshotDeviceResponseInfo>(() => _encode_SnapshotDeviceResponseInfo, $.BER), $.BER); }
    return _cached_encoder_for_SnapshotDeviceData(value, elGetter);
}


/* eslint-enable */
