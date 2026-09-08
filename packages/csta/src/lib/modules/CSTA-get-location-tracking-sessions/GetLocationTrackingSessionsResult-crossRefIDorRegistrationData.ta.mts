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
import { LocationSessionInfoList, _decode_LocationSessionInfoList, _encode_LocationSessionInfoList } from "../CSTA-status-reporting/LocationSessionInfoList.ta.mjs";
// export { LocationSessionInfoList, _decode_LocationSessionInfoList, _encode_LocationSessionInfoList } from "../CSTA-status-reporting/LocationSessionInfoList.ta.mjs";


/**
 * @summary GetLocationTrackingSessionsResult_crossRefIDorRegistrationData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLocationTrackingSessionsResult-crossRefIDorRegistrationData ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type GetLocationTrackingSessionsResult_crossRefIDorRegistrationData =
    { serviceCrossRefID: ServiceCrossRefID } /* CHOICE_ALT_ROOT */
    | { locationSessionInfoList: LocationSessionInfoList } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GetLocationTrackingSessionsResult_crossRefIDorRegistrationData: $.ASN1Decoder<GetLocationTrackingSessionsResult_crossRefIDorRegistrationData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLocationTrackingSessionsResult_crossRefIDorRegistrationData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLocationTrackingSessionsResult_crossRefIDorRegistrationData (el: _Element): GetLocationTrackingSessionsResult_crossRefIDorRegistrationData {
    if (!_cached_decoder_for_GetLocationTrackingSessionsResult_crossRefIDorRegistrationData) { _cached_decoder_for_GetLocationTrackingSessionsResult_crossRefIDorRegistrationData = $._decode_inextensible_choice<GetLocationTrackingSessionsResult_crossRefIDorRegistrationData>({
    "UNIVERSAL 4": [ "serviceCrossRefID", _decode_ServiceCrossRefID ],
    "UNIVERSAL 16": [ "locationSessionInfoList", _decode_LocationSessionInfoList ]
}); }
    return _cached_decoder_for_GetLocationTrackingSessionsResult_crossRefIDorRegistrationData(el);
}

let _cached_encoder_for_GetLocationTrackingSessionsResult_crossRefIDorRegistrationData: $.ASN1Encoder<GetLocationTrackingSessionsResult_crossRefIDorRegistrationData> | null = null;

/**
 * @summary Encodes a(n) GetLocationTrackingSessionsResult_crossRefIDorRegistrationData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLocationTrackingSessionsResult_crossRefIDorRegistrationData, encoded as an ASN.1 Element.
 */
export
function _encode_GetLocationTrackingSessionsResult_crossRefIDorRegistrationData (value: GetLocationTrackingSessionsResult_crossRefIDorRegistrationData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLocationTrackingSessionsResult_crossRefIDorRegistrationData) { _cached_encoder_for_GetLocationTrackingSessionsResult_crossRefIDorRegistrationData = $._encode_choice<GetLocationTrackingSessionsResult_crossRefIDorRegistrationData>({
    "serviceCrossRefID": _encode_ServiceCrossRefID,
    "locationSessionInfoList": _encode_LocationSessionInfoList,
}, $.BER); }
    return _cached_encoder_for_GetLocationTrackingSessionsResult_crossRefIDorRegistrationData(value, elGetter);
}


/* eslint-enable */
