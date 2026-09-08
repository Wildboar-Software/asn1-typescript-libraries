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
import { MonitorList, _decode_MonitorList, _encode_MonitorList } from "../CSTA-status-reporting/MonitorList.ta.mjs";
// export { MonitorList, _decode_MonitorList, _encode_MonitorList } from "../CSTA-status-reporting/MonitorList.ta.mjs";


/**
 * @summary GetMonitorResult_crossRefIDorRegistrationData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetMonitorResult-crossRefIDorRegistrationData ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type GetMonitorResult_crossRefIDorRegistrationData =
    { serviceCrossRefID: ServiceCrossRefID } /* CHOICE_ALT_ROOT */
    | { monitorList: MonitorList } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GetMonitorResult_crossRefIDorRegistrationData: $.ASN1Decoder<GetMonitorResult_crossRefIDorRegistrationData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetMonitorResult_crossRefIDorRegistrationData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetMonitorResult_crossRefIDorRegistrationData (el: _Element): GetMonitorResult_crossRefIDorRegistrationData {
    if (!_cached_decoder_for_GetMonitorResult_crossRefIDorRegistrationData) { _cached_decoder_for_GetMonitorResult_crossRefIDorRegistrationData = $._decode_inextensible_choice<GetMonitorResult_crossRefIDorRegistrationData>({
    "UNIVERSAL 4": [ "serviceCrossRefID", _decode_ServiceCrossRefID ],
    "UNIVERSAL 16": [ "monitorList", _decode_MonitorList ]
}); }
    return _cached_decoder_for_GetMonitorResult_crossRefIDorRegistrationData(el);
}

let _cached_encoder_for_GetMonitorResult_crossRefIDorRegistrationData: $.ASN1Encoder<GetMonitorResult_crossRefIDorRegistrationData> | null = null;

/**
 * @summary Encodes a(n) GetMonitorResult_crossRefIDorRegistrationData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetMonitorResult_crossRefIDorRegistrationData, encoded as an ASN.1 Element.
 */
export
function _encode_GetMonitorResult_crossRefIDorRegistrationData (value: GetMonitorResult_crossRefIDorRegistrationData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetMonitorResult_crossRefIDorRegistrationData) { _cached_encoder_for_GetMonitorResult_crossRefIDorRegistrationData = $._encode_choice<GetMonitorResult_crossRefIDorRegistrationData>({
    "serviceCrossRefID": _encode_ServiceCrossRefID,
    "monitorList": _encode_MonitorList,
}, $.BER); }
    return _cached_encoder_for_GetMonitorResult_crossRefIDorRegistrationData(value, elGetter);
}


/* eslint-enable */
