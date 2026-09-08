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
import { GetLocationInformation, GetLocationInformation_privateData /* IMPORTED_LONG_NAMED_BIT */, GetLocationInformation_locationInfoInAck /* IMPORTED_LONG_NAMED_BIT */, locationInfoInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLocationInformation_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetLocationInformation, _encode_GetLocationInformation } from "../CSTA-capability-exchange/GetLocationInformation.ta.mjs";
// export { GetLocationInformation, GetLocationInformation_privateData /* IMPORTED_LONG_NAMED_BIT */, GetLocationInformation_locationInfoInAck /* IMPORTED_LONG_NAMED_BIT */, locationInfoInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLocationInformation_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetLocationInformation, _encode_GetLocationInformation } from "../CSTA-capability-exchange/GetLocationInformation.ta.mjs";
import { SetLocationInformation, SetLocationInformation_locationInfo /* IMPORTED_LONG_NAMED_BIT */, locationInfo /* IMPORTED_SHORT_NAMED_BIT */, SetLocationInformation_replaceMode /* IMPORTED_LONG_NAMED_BIT */, replaceMode /* IMPORTED_SHORT_NAMED_BIT */, SetLocationInformation_privateData /* IMPORTED_LONG_NAMED_BIT */, SetLocationInformation_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_SetLocationInformation, _encode_SetLocationInformation } from "../CSTA-capability-exchange/SetLocationInformation.ta.mjs";
// export { SetLocationInformation, SetLocationInformation_locationInfo /* IMPORTED_LONG_NAMED_BIT */, locationInfo /* IMPORTED_SHORT_NAMED_BIT */, SetLocationInformation_replaceMode /* IMPORTED_LONG_NAMED_BIT */, replaceMode /* IMPORTED_SHORT_NAMED_BIT */, SetLocationInformation_privateData /* IMPORTED_LONG_NAMED_BIT */, SetLocationInformation_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_SetLocationInformation, _encode_SetLocationInformation } from "../CSTA-capability-exchange/SetLocationInformation.ta.mjs";
import { LocationTrackingSessionResumed, LocationTrackingSessionResumed_locReason /* IMPORTED_LONG_NAMED_BIT */, LocationTrackingSessionResumed_privateData /* IMPORTED_LONG_NAMED_BIT */, LocationTrackingSessionResumed_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_LocationTrackingSessionResumed, _encode_LocationTrackingSessionResumed } from "../CSTA-capability-exchange/LocationTrackingSessionResumed.ta.mjs";
// export { LocationTrackingSessionResumed, LocationTrackingSessionResumed_locReason /* IMPORTED_LONG_NAMED_BIT */, LocationTrackingSessionResumed_privateData /* IMPORTED_LONG_NAMED_BIT */, LocationTrackingSessionResumed_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_LocationTrackingSessionResumed, _encode_LocationTrackingSessionResumed } from "../CSTA-capability-exchange/LocationTrackingSessionResumed.ta.mjs";
import { LocationTrackingSessionSuspended, LocationTrackingSessionSuspended_locReason /* IMPORTED_LONG_NAMED_BIT */, LocationTrackingSessionSuspended_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, LocationTrackingSessionSuspended_privateData /* IMPORTED_LONG_NAMED_BIT */, LocationTrackingSessionSuspended_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_LocationTrackingSessionSuspended, _encode_LocationTrackingSessionSuspended } from "../CSTA-capability-exchange/LocationTrackingSessionSuspended.ta.mjs";
// export { LocationTrackingSessionSuspended, LocationTrackingSessionSuspended_locReason /* IMPORTED_LONG_NAMED_BIT */, LocationTrackingSessionSuspended_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, LocationTrackingSessionSuspended_privateData /* IMPORTED_LONG_NAMED_BIT */, LocationTrackingSessionSuspended_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_LocationTrackingSessionSuspended, _encode_LocationTrackingSessionSuspended } from "../CSTA-capability-exchange/LocationTrackingSessionSuspended.ta.mjs";
import { ResumeLocationTrackingSession, ResumeLocationTrackingSession_privateData /* IMPORTED_LONG_NAMED_BIT */, ResumeLocationTrackingSession_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_ResumeLocationTrackingSession, _encode_ResumeLocationTrackingSession } from "../CSTA-capability-exchange/ResumeLocationTrackingSession.ta.mjs";
// export { ResumeLocationTrackingSession, ResumeLocationTrackingSession_privateData /* IMPORTED_LONG_NAMED_BIT */, ResumeLocationTrackingSession_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_ResumeLocationTrackingSession, _encode_ResumeLocationTrackingSession } from "../CSTA-capability-exchange/ResumeLocationTrackingSession.ta.mjs";
import { LocationInformationReport, LocationInformationReport_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, LocationInformationReport_privateData /* IMPORTED_LONG_NAMED_BIT */, LocationInformationReport_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_LocationInformationReport, _encode_LocationInformationReport } from "../CSTA-capability-exchange/LocationInformationReport.ta.mjs";
// export { LocationInformationReport, LocationInformationReport_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, LocationInformationReport_privateData /* IMPORTED_LONG_NAMED_BIT */, LocationInformationReport_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_LocationInformationReport, _encode_LocationInformationReport } from "../CSTA-capability-exchange/LocationInformationReport.ta.mjs";
import { StartLocationTrackingSession, StartLocationTrackingSession_collectionType /* IMPORTED_LONG_NAMED_BIT */, collectionType /* IMPORTED_SHORT_NAMED_BIT */, StartLocationTrackingSession_collectionInterval /* IMPORTED_LONG_NAMED_BIT */, collectionInterval /* IMPORTED_SHORT_NAMED_BIT */, StartLocationTrackingSession_maxCollections /* IMPORTED_LONG_NAMED_BIT */, maxCollections /* IMPORTED_SHORT_NAMED_BIT */, StartLocationTrackingSession_collectionFilter /* IMPORTED_LONG_NAMED_BIT */, collectionFilter /* IMPORTED_SHORT_NAMED_BIT */, StartLocationTrackingSession_reportingType /* IMPORTED_LONG_NAMED_BIT */, reportingType /* IMPORTED_SHORT_NAMED_BIT */, StartLocationTrackingSession_reportingCount /* IMPORTED_LONG_NAMED_BIT */, reportingCount /* IMPORTED_SHORT_NAMED_BIT */, StartLocationTrackingSession_privateData /* IMPORTED_LONG_NAMED_BIT */, StartLocationTrackingSession_piDFProfileOption1inAck /* IMPORTED_LONG_NAMED_BIT */, piDFProfileOption1inAck /* IMPORTED_SHORT_NAMED_BIT */, StartLocationTrackingSession_piDFProfileOption2inAck /* IMPORTED_LONG_NAMED_BIT */, piDFProfileOption2inAck /* IMPORTED_SHORT_NAMED_BIT */, StartLocationTrackingSession_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_StartLocationTrackingSession, _encode_StartLocationTrackingSession } from "../CSTA-capability-exchange/StartLocationTrackingSession.ta.mjs";
// export { StartLocationTrackingSession, StartLocationTrackingSession_collectionType /* IMPORTED_LONG_NAMED_BIT */, collectionType /* IMPORTED_SHORT_NAMED_BIT */, StartLocationTrackingSession_collectionInterval /* IMPORTED_LONG_NAMED_BIT */, collectionInterval /* IMPORTED_SHORT_NAMED_BIT */, StartLocationTrackingSession_maxCollections /* IMPORTED_LONG_NAMED_BIT */, maxCollections /* IMPORTED_SHORT_NAMED_BIT */, StartLocationTrackingSession_collectionFilter /* IMPORTED_LONG_NAMED_BIT */, collectionFilter /* IMPORTED_SHORT_NAMED_BIT */, StartLocationTrackingSession_reportingType /* IMPORTED_LONG_NAMED_BIT */, reportingType /* IMPORTED_SHORT_NAMED_BIT */, StartLocationTrackingSession_reportingCount /* IMPORTED_LONG_NAMED_BIT */, reportingCount /* IMPORTED_SHORT_NAMED_BIT */, StartLocationTrackingSession_privateData /* IMPORTED_LONG_NAMED_BIT */, StartLocationTrackingSession_piDFProfileOption1inAck /* IMPORTED_LONG_NAMED_BIT */, piDFProfileOption1inAck /* IMPORTED_SHORT_NAMED_BIT */, StartLocationTrackingSession_piDFProfileOption2inAck /* IMPORTED_LONG_NAMED_BIT */, piDFProfileOption2inAck /* IMPORTED_SHORT_NAMED_BIT */, StartLocationTrackingSession_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_StartLocationTrackingSession, _encode_StartLocationTrackingSession } from "../CSTA-capability-exchange/StartLocationTrackingSession.ta.mjs";
import { StopLocationTrackingSession, StopLocationTrackingSession_reason /* IMPORTED_LONG_NAMED_BIT */, StopLocationTrackingSession_privateData /* IMPORTED_LONG_NAMED_BIT */, StopLocationTrackingSession_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_StopLocationTrackingSession, _encode_StopLocationTrackingSession } from "../CSTA-capability-exchange/StopLocationTrackingSession.ta.mjs";
// export { StopLocationTrackingSession, StopLocationTrackingSession_reason /* IMPORTED_LONG_NAMED_BIT */, StopLocationTrackingSession_privateData /* IMPORTED_LONG_NAMED_BIT */, StopLocationTrackingSession_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_StopLocationTrackingSession, _encode_StopLocationTrackingSession } from "../CSTA-capability-exchange/StopLocationTrackingSession.ta.mjs";
import { SuspendLocationTrackingSession, SuspendLocationTrackingSession_reason /* IMPORTED_LONG_NAMED_BIT */, SuspendLocationTrackingSession_privateData /* IMPORTED_LONG_NAMED_BIT */, SuspendLocationTrackingSession_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_SuspendLocationTrackingSession, _encode_SuspendLocationTrackingSession } from "../CSTA-capability-exchange/SuspendLocationTrackingSession.ta.mjs";
// export { SuspendLocationTrackingSession, SuspendLocationTrackingSession_reason /* IMPORTED_LONG_NAMED_BIT */, SuspendLocationTrackingSession_privateData /* IMPORTED_LONG_NAMED_BIT */, SuspendLocationTrackingSession_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_SuspendLocationTrackingSession, _encode_SuspendLocationTrackingSession } from "../CSTA-capability-exchange/SuspendLocationTrackingSession.ta.mjs";
import { GetLocationTrackingCapabilities, GetLocationTrackingCapabilities_privateData /* IMPORTED_LONG_NAMED_BIT */, GetLocationTrackingCapabilities_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetLocationTrackingCapabilities, _encode_GetLocationTrackingCapabilities } from "../CSTA-capability-exchange/GetLocationTrackingCapabilities.ta.mjs";
// export { GetLocationTrackingCapabilities, GetLocationTrackingCapabilities_privateData /* IMPORTED_LONG_NAMED_BIT */, GetLocationTrackingCapabilities_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetLocationTrackingCapabilities, _encode_GetLocationTrackingCapabilities } from "../CSTA-capability-exchange/GetLocationTrackingCapabilities.ta.mjs";
import { GetLocationTrackingSessions, GetLocationTrackingSessions_privateData /* IMPORTED_LONG_NAMED_BIT */, GetLocationTrackingSessions_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetLocationTrackingSessions, _encode_GetLocationTrackingSessions } from "../CSTA-capability-exchange/GetLocationTrackingSessions.ta.mjs";
// export { GetLocationTrackingSessions, GetLocationTrackingSessions_privateData /* IMPORTED_LONG_NAMED_BIT */, GetLocationTrackingSessions_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetLocationTrackingSessions, _encode_GetLocationTrackingSessions } from "../CSTA-capability-exchange/GetLocationTrackingSessions.ta.mjs";
import { LocationSessionInfo, LocationSessionInfo_segmentID /* IMPORTED_LONG_NAMED_BIT */, segmentID /* IMPORTED_SHORT_NAMED_BIT */, LocationSessionInfo_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_LocationSessionInfo, _encode_LocationSessionInfo } from "../CSTA-capability-exchange/LocationSessionInfo.ta.mjs";
// export { LocationSessionInfo, LocationSessionInfo_segmentID /* IMPORTED_LONG_NAMED_BIT */, segmentID /* IMPORTED_SHORT_NAMED_BIT */, LocationSessionInfo_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_LocationSessionInfo, _encode_LocationSessionInfo } from "../CSTA-capability-exchange/LocationSessionInfo.ta.mjs";


/**
 * @summary LocationServicesServList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationServicesServList ::= SEQUENCE
 * {    getLocationInformation            [ 0] IMPLICIT GetLocationInformation        OPTIONAL,
 *     setLocationInformation            [ 1] IMPLICIT SetLocationInformation        OPTIONAL,
 *     locationTrackingSessionResumed        [ 2] IMPLICIT LocationTrackingSessionResumed    OPTIONAL,
 *     locationTrackingSessionSuspended    [ 3] IMPLICIT LocationTrackingSessionSuspended    OPTIONAL,
 *     resumeLocationTrackingSession        [ 4] IMPLICIT ResumeLocationTrackingSession    OPTIONAL,
 *     locationInformationReport        [ 5] IMPLICIT LocationInformationReport        OPTIONAL,
 *     startLocationTrackingSession        [ 6] IMPLICIT StartLocationTrackingSession    OPTIONAL,
 *     stopLocationTrackingSession        [ 7] IMPLICIT StopLocationTrackingSession    OPTIONAL,
 *     suspendLocationTrackingSession        [ 8] IMPLICIT SuspendLocationTrackingSession    OPTIONAL,
 *     getLocationTrackingCapabilities        [ 9] IMPLICIT GetLocationTrackingCapabilities    OPTIONAL,
 *     getLocationTrackingSessions        [10] IMPLICIT GetLocationTrackingSessions    OPTIONAL,
 *     locationSessionInfo            [11] IMPLICIT LocationSessionInfo        OPTIONAL }
 * ```
 * 
 * @class
 */
export
class LocationServicesServList {
    constructor (
        /**
         * @summary `getLocationInformation`.
         * @public
         * @readonly
         */
        readonly getLocationInformation: OPTIONAL<GetLocationInformation>,
        /**
         * @summary `setLocationInformation`.
         * @public
         * @readonly
         */
        readonly setLocationInformation: OPTIONAL<SetLocationInformation>,
        /**
         * @summary `locationTrackingSessionResumed`.
         * @public
         * @readonly
         */
        readonly locationTrackingSessionResumed: OPTIONAL<LocationTrackingSessionResumed>,
        /**
         * @summary `locationTrackingSessionSuspended`.
         * @public
         * @readonly
         */
        readonly locationTrackingSessionSuspended: OPTIONAL<LocationTrackingSessionSuspended>,
        /**
         * @summary `resumeLocationTrackingSession`.
         * @public
         * @readonly
         */
        readonly resumeLocationTrackingSession: OPTIONAL<ResumeLocationTrackingSession>,
        /**
         * @summary `locationInformationReport`.
         * @public
         * @readonly
         */
        readonly locationInformationReport: OPTIONAL<LocationInformationReport>,
        /**
         * @summary `startLocationTrackingSession`.
         * @public
         * @readonly
         */
        readonly startLocationTrackingSession: OPTIONAL<StartLocationTrackingSession>,
        /**
         * @summary `stopLocationTrackingSession`.
         * @public
         * @readonly
         */
        readonly stopLocationTrackingSession: OPTIONAL<StopLocationTrackingSession>,
        /**
         * @summary `suspendLocationTrackingSession`.
         * @public
         * @readonly
         */
        readonly suspendLocationTrackingSession: OPTIONAL<SuspendLocationTrackingSession>,
        /**
         * @summary `getLocationTrackingCapabilities`.
         * @public
         * @readonly
         */
        readonly getLocationTrackingCapabilities: OPTIONAL<GetLocationTrackingCapabilities>,
        /**
         * @summary `getLocationTrackingSessions`.
         * @public
         * @readonly
         */
        readonly getLocationTrackingSessions: OPTIONAL<GetLocationTrackingSessions>,
        /**
         * @summary `locationSessionInfo`.
         * @public
         * @readonly
         */
        readonly locationSessionInfo: OPTIONAL<LocationSessionInfo>
    ) {}

    /**
     * @summary Restructures an object into a LocationServicesServList
     * @description
     * 
     * This takes an `object` and converts it to a `LocationServicesServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocationServicesServList`.
     * @returns {LocationServicesServList}
     */
    public static _from_object (_o: { [_K in keyof (LocationServicesServList)]: (LocationServicesServList)[_K] }): LocationServicesServList {
        return new LocationServicesServList(_o.getLocationInformation, _o.setLocationInformation, _o.locationTrackingSessionResumed, _o.locationTrackingSessionSuspended, _o.resumeLocationTrackingSession, _o.locationInformationReport, _o.startLocationTrackingSession, _o.stopLocationTrackingSession, _o.suspendLocationTrackingSession, _o.getLocationTrackingCapabilities, _o.getLocationTrackingSessions, _o.locationSessionInfo);
    }


}

/**
 * @summary The Leading Root Component Types of LocationServicesServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocationServicesServList: $.ComponentSpec[] = [
    new $.ComponentSpec("getLocationInformation", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("setLocationInformation", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("locationTrackingSessionResumed", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("locationTrackingSessionSuspended", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("resumeLocationTrackingSession", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("locationInformationReport", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("startLocationTrackingSession", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("stopLocationTrackingSession", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("suspendLocationTrackingSession", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("getLocationTrackingCapabilities", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("getLocationTrackingSessions", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("locationSessionInfo", true, $.hasTag(_TagClass.context, 11), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of LocationServicesServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocationServicesServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocationServicesServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocationServicesServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LocationServicesServList: $.ASN1Decoder<LocationServicesServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationServicesServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationServicesServList (el: _Element): LocationServicesServList {
    if (!_cached_decoder_for_LocationServicesServList) { _cached_decoder_for_LocationServicesServList = function (el: _Element): LocationServicesServList {
    let getLocationInformation: OPTIONAL<GetLocationInformation>;
    let setLocationInformation: OPTIONAL<SetLocationInformation>;
    let locationTrackingSessionResumed: OPTIONAL<LocationTrackingSessionResumed>;
    let locationTrackingSessionSuspended: OPTIONAL<LocationTrackingSessionSuspended>;
    let resumeLocationTrackingSession: OPTIONAL<ResumeLocationTrackingSession>;
    let locationInformationReport: OPTIONAL<LocationInformationReport>;
    let startLocationTrackingSession: OPTIONAL<StartLocationTrackingSession>;
    let stopLocationTrackingSession: OPTIONAL<StopLocationTrackingSession>;
    let suspendLocationTrackingSession: OPTIONAL<SuspendLocationTrackingSession>;
    let getLocationTrackingCapabilities: OPTIONAL<GetLocationTrackingCapabilities>;
    let getLocationTrackingSessions: OPTIONAL<GetLocationTrackingSessions>;
    let locationSessionInfo: OPTIONAL<LocationSessionInfo>;
    const callbacks: $.DecodingMap = {
        "getLocationInformation": (_el: _Element): void => { getLocationInformation = $._decode_implicit<GetLocationInformation>(() => _decode_GetLocationInformation)(_el); },
        "setLocationInformation": (_el: _Element): void => { setLocationInformation = $._decode_implicit<SetLocationInformation>(() => _decode_SetLocationInformation)(_el); },
        "locationTrackingSessionResumed": (_el: _Element): void => { locationTrackingSessionResumed = $._decode_implicit<LocationTrackingSessionResumed>(() => _decode_LocationTrackingSessionResumed)(_el); },
        "locationTrackingSessionSuspended": (_el: _Element): void => { locationTrackingSessionSuspended = $._decode_implicit<LocationTrackingSessionSuspended>(() => _decode_LocationTrackingSessionSuspended)(_el); },
        "resumeLocationTrackingSession": (_el: _Element): void => { resumeLocationTrackingSession = $._decode_implicit<ResumeLocationTrackingSession>(() => _decode_ResumeLocationTrackingSession)(_el); },
        "locationInformationReport": (_el: _Element): void => { locationInformationReport = $._decode_implicit<LocationInformationReport>(() => _decode_LocationInformationReport)(_el); },
        "startLocationTrackingSession": (_el: _Element): void => { startLocationTrackingSession = $._decode_implicit<StartLocationTrackingSession>(() => _decode_StartLocationTrackingSession)(_el); },
        "stopLocationTrackingSession": (_el: _Element): void => { stopLocationTrackingSession = $._decode_implicit<StopLocationTrackingSession>(() => _decode_StopLocationTrackingSession)(_el); },
        "suspendLocationTrackingSession": (_el: _Element): void => { suspendLocationTrackingSession = $._decode_implicit<SuspendLocationTrackingSession>(() => _decode_SuspendLocationTrackingSession)(_el); },
        "getLocationTrackingCapabilities": (_el: _Element): void => { getLocationTrackingCapabilities = $._decode_implicit<GetLocationTrackingCapabilities>(() => _decode_GetLocationTrackingCapabilities)(_el); },
        "getLocationTrackingSessions": (_el: _Element): void => { getLocationTrackingSessions = $._decode_implicit<GetLocationTrackingSessions>(() => _decode_GetLocationTrackingSessions)(_el); },
        "locationSessionInfo": (_el: _Element): void => { locationSessionInfo = $._decode_implicit<LocationSessionInfo>(() => _decode_LocationSessionInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LocationServicesServList,
        _extension_additions_list_spec_for_LocationServicesServList,
        _root_component_type_list_2_spec_for_LocationServicesServList,
        undefined,
    );
    return new LocationServicesServList(
        getLocationInformation,
        setLocationInformation,
        locationTrackingSessionResumed,
        locationTrackingSessionSuspended,
        resumeLocationTrackingSession,
        locationInformationReport,
        startLocationTrackingSession,
        stopLocationTrackingSession,
        suspendLocationTrackingSession,
        getLocationTrackingCapabilities,
        getLocationTrackingSessions,
        locationSessionInfo
    );
}; }
    return _cached_decoder_for_LocationServicesServList(el);
}

let _cached_encoder_for_LocationServicesServList: $.ASN1Encoder<LocationServicesServList> | null = null;

/**
 * @summary Encodes a(n) LocationServicesServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationServicesServList, encoded as an ASN.1 Element.
 */
export
function _encode_LocationServicesServList (value: LocationServicesServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationServicesServList) { _cached_encoder_for_LocationServicesServList = function (value: LocationServicesServList, elGetter: $.ASN1Encoder<LocationServicesServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.getLocationInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_GetLocationInformation, $.BER)(value.getLocationInformation, $.BER)),
            /* IF_ABSENT  */ ((value.setLocationInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_SetLocationInformation, $.BER)(value.setLocationInformation, $.BER)),
            /* IF_ABSENT  */ ((value.locationTrackingSessionResumed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_LocationTrackingSessionResumed, $.BER)(value.locationTrackingSessionResumed, $.BER)),
            /* IF_ABSENT  */ ((value.locationTrackingSessionSuspended === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_LocationTrackingSessionSuspended, $.BER)(value.locationTrackingSessionSuspended, $.BER)),
            /* IF_ABSENT  */ ((value.resumeLocationTrackingSession === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ResumeLocationTrackingSession, $.BER)(value.resumeLocationTrackingSession, $.BER)),
            /* IF_ABSENT  */ ((value.locationInformationReport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_LocationInformationReport, $.BER)(value.locationInformationReport, $.BER)),
            /* IF_ABSENT  */ ((value.startLocationTrackingSession === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_StartLocationTrackingSession, $.BER)(value.startLocationTrackingSession, $.BER)),
            /* IF_ABSENT  */ ((value.stopLocationTrackingSession === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_StopLocationTrackingSession, $.BER)(value.stopLocationTrackingSession, $.BER)),
            /* IF_ABSENT  */ ((value.suspendLocationTrackingSession === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_SuspendLocationTrackingSession, $.BER)(value.suspendLocationTrackingSession, $.BER)),
            /* IF_ABSENT  */ ((value.getLocationTrackingCapabilities === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_GetLocationTrackingCapabilities, $.BER)(value.getLocationTrackingCapabilities, $.BER)),
            /* IF_ABSENT  */ ((value.getLocationTrackingSessions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_GetLocationTrackingSessions, $.BER)(value.getLocationTrackingSessions, $.BER)),
            /* IF_ABSENT  */ ((value.locationSessionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_LocationSessionInfo, $.BER)(value.locationSessionInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LocationServicesServList(value, elGetter);
}


/* eslint-enable */
