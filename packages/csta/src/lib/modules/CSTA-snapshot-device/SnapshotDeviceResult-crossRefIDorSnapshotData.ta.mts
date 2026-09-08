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
import { ServiceCrossRefID, _decode_ServiceCrossRefID, _encode_ServiceCrossRefID } from "../CSTA-capability-exchange/ServiceCrossRefID.ta.mjs";
// export { ServiceCrossRefID, _decode_ServiceCrossRefID, _encode_ServiceCrossRefID } from "../CSTA-capability-exchange/ServiceCrossRefID.ta.mjs";
import { SnapshotDeviceData, _decode_SnapshotDeviceData, _encode_SnapshotDeviceData } from "../CSTA-status-reporting/SnapshotDeviceData.ta.mjs";
// export { SnapshotDeviceData, _decode_SnapshotDeviceData, _encode_SnapshotDeviceData } from "../CSTA-status-reporting/SnapshotDeviceData.ta.mjs";


/**
 * @summary SnapshotDeviceResult_crossRefIDorSnapshotData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SnapshotDeviceResult-crossRefIDorSnapshotData ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type SnapshotDeviceResult_crossRefIDorSnapshotData =
    { serviceCrossRefID: ServiceCrossRefID } /* CHOICE_ALT_ROOT */
    | { snapshotData: SnapshotDeviceData } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SnapshotDeviceResult_crossRefIDorSnapshotData: $.ASN1Decoder<SnapshotDeviceResult_crossRefIDorSnapshotData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SnapshotDeviceResult_crossRefIDorSnapshotData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SnapshotDeviceResult_crossRefIDorSnapshotData (el: _Element): SnapshotDeviceResult_crossRefIDorSnapshotData {
    if (!_cached_decoder_for_SnapshotDeviceResult_crossRefIDorSnapshotData) { _cached_decoder_for_SnapshotDeviceResult_crossRefIDorSnapshotData = $._decode_inextensible_choice<SnapshotDeviceResult_crossRefIDorSnapshotData>({
    "UNIVERSAL 4": [ "serviceCrossRefID", _decode_ServiceCrossRefID ],
    "APPLICATION 22": [ "snapshotData", _decode_SnapshotDeviceData ]
}); }
    return _cached_decoder_for_SnapshotDeviceResult_crossRefIDorSnapshotData(el);
}

let _cached_encoder_for_SnapshotDeviceResult_crossRefIDorSnapshotData: $.ASN1Encoder<SnapshotDeviceResult_crossRefIDorSnapshotData> | null = null;

/**
 * @summary Encodes a(n) SnapshotDeviceResult_crossRefIDorSnapshotData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SnapshotDeviceResult_crossRefIDorSnapshotData, encoded as an ASN.1 Element.
 */
export
function _encode_SnapshotDeviceResult_crossRefIDorSnapshotData (value: SnapshotDeviceResult_crossRefIDorSnapshotData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SnapshotDeviceResult_crossRefIDorSnapshotData) { _cached_encoder_for_SnapshotDeviceResult_crossRefIDorSnapshotData = $._encode_choice<SnapshotDeviceResult_crossRefIDorSnapshotData>({
    "serviceCrossRefID": _encode_ServiceCrossRefID,
    "snapshotData": _encode_SnapshotDeviceData,
}, $.BER); }
    return _cached_encoder_for_SnapshotDeviceResult_crossRefIDorSnapshotData(value, elGetter);
}


/* eslint-enable */
