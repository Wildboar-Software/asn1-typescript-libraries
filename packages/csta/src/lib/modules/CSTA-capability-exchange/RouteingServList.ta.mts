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
import { RouteRegister, RouteRegister_routeingDevice /* IMPORTED_LONG_NAMED_BIT */, RouteRegister_requestedMonitorMediaClass /* IMPORTED_LONG_NAMED_BIT */, requestedMonitorMediaClass /* IMPORTED_SHORT_NAMED_BIT */, RouteRegister_requestedMonitorMediaClassAudio /* IMPORTED_LONG_NAMED_BIT */, requestedMonitorMediaClassAudio /* IMPORTED_SHORT_NAMED_BIT */, RouteRegister_requestedMonitorMediaClassData /* IMPORTED_LONG_NAMED_BIT */, requestedMonitorMediaClassData /* IMPORTED_SHORT_NAMED_BIT */, RouteRegister_requestedMonitorMediaClassImage /* IMPORTED_LONG_NAMED_BIT */, requestedMonitorMediaClassImage /* IMPORTED_SHORT_NAMED_BIT */, RouteRegister_requestedMonitorMediaClassVoice /* IMPORTED_LONG_NAMED_BIT */, requestedMonitorMediaClassVoice /* IMPORTED_SHORT_NAMED_BIT */, RouteRegister_requestedMonitorMediaClassChat /* IMPORTED_LONG_NAMED_BIT */, requestedMonitorMediaClassChat /* IMPORTED_SHORT_NAMED_BIT */, RouteRegister_requestedMonitorMediaClassEmail /* IMPORTED_LONG_NAMED_BIT */, requestedMonitorMediaClassEmail /* IMPORTED_SHORT_NAMED_BIT */, RouteRegister_requestedMonitorMediaClassMessage /* IMPORTED_LONG_NAMED_BIT */, requestedMonitorMediaClassMessage /* IMPORTED_SHORT_NAMED_BIT */, RouteRegister_requestedMonitorMediaClassIM /* IMPORTED_LONG_NAMED_BIT */, requestedMonitorMediaClassIM /* IMPORTED_SHORT_NAMED_BIT */, RouteRegister_requestedMonitorMediaClassSMS /* IMPORTED_LONG_NAMED_BIT */, requestedMonitorMediaClassSMS /* IMPORTED_SHORT_NAMED_BIT */, RouteRegister_requestedMonitorMediaClassMMS /* IMPORTED_LONG_NAMED_BIT */, requestedMonitorMediaClassMMS /* IMPORTED_SHORT_NAMED_BIT */, RouteRegister_privateData /* IMPORTED_LONG_NAMED_BIT */, RouteRegister_actualRouteingMediaClassInAck /* IMPORTED_LONG_NAMED_BIT */, actualRouteingMediaClassInAck /* IMPORTED_SHORT_NAMED_BIT */, RouteRegister_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, RouteRegister_allRouteingDevices /* IMPORTED_LONG_NAMED_BIT */, allRouteingDevices /* IMPORTED_SHORT_NAMED_BIT */, _decode_RouteRegister, _encode_RouteRegister } from "../CSTA-capability-exchange/RouteRegister.ta.mjs";
// export { RouteRegister, RouteRegister_routeingDevice /* IMPORTED_LONG_NAMED_BIT */, RouteRegister_requestedMonitorMediaClass /* IMPORTED_LONG_NAMED_BIT */, requestedMonitorMediaClass /* IMPORTED_SHORT_NAMED_BIT */, RouteRegister_requestedMonitorMediaClassAudio /* IMPORTED_LONG_NAMED_BIT */, requestedMonitorMediaClassAudio /* IMPORTED_SHORT_NAMED_BIT */, RouteRegister_requestedMonitorMediaClassData /* IMPORTED_LONG_NAMED_BIT */, requestedMonitorMediaClassData /* IMPORTED_SHORT_NAMED_BIT */, RouteRegister_requestedMonitorMediaClassImage /* IMPORTED_LONG_NAMED_BIT */, requestedMonitorMediaClassImage /* IMPORTED_SHORT_NAMED_BIT */, RouteRegister_requestedMonitorMediaClassVoice /* IMPORTED_LONG_NAMED_BIT */, requestedMonitorMediaClassVoice /* IMPORTED_SHORT_NAMED_BIT */, RouteRegister_requestedMonitorMediaClassChat /* IMPORTED_LONG_NAMED_BIT */, requestedMonitorMediaClassChat /* IMPORTED_SHORT_NAMED_BIT */, RouteRegister_requestedMonitorMediaClassEmail /* IMPORTED_LONG_NAMED_BIT */, requestedMonitorMediaClassEmail /* IMPORTED_SHORT_NAMED_BIT */, RouteRegister_requestedMonitorMediaClassMessage /* IMPORTED_LONG_NAMED_BIT */, requestedMonitorMediaClassMessage /* IMPORTED_SHORT_NAMED_BIT */, RouteRegister_requestedMonitorMediaClassIM /* IMPORTED_LONG_NAMED_BIT */, requestedMonitorMediaClassIM /* IMPORTED_SHORT_NAMED_BIT */, RouteRegister_requestedMonitorMediaClassSMS /* IMPORTED_LONG_NAMED_BIT */, requestedMonitorMediaClassSMS /* IMPORTED_SHORT_NAMED_BIT */, RouteRegister_requestedMonitorMediaClassMMS /* IMPORTED_LONG_NAMED_BIT */, requestedMonitorMediaClassMMS /* IMPORTED_SHORT_NAMED_BIT */, RouteRegister_privateData /* IMPORTED_LONG_NAMED_BIT */, RouteRegister_actualRouteingMediaClassInAck /* IMPORTED_LONG_NAMED_BIT */, actualRouteingMediaClassInAck /* IMPORTED_SHORT_NAMED_BIT */, RouteRegister_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, RouteRegister_allRouteingDevices /* IMPORTED_LONG_NAMED_BIT */, allRouteingDevices /* IMPORTED_SHORT_NAMED_BIT */, _decode_RouteRegister, _encode_RouteRegister } from "../CSTA-capability-exchange/RouteRegister.ta.mjs";
import { RouteRegisterCancel, RouteRegisterCancel_privateData /* IMPORTED_LONG_NAMED_BIT */, RouteRegisterCancel_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_RouteRegisterCancel, _encode_RouteRegisterCancel } from "../CSTA-capability-exchange/RouteRegisterCancel.ta.mjs";
// export { RouteRegisterCancel, RouteRegisterCancel_privateData /* IMPORTED_LONG_NAMED_BIT */, RouteRegisterCancel_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_RouteRegisterCancel, _encode_RouteRegisterCancel } from "../CSTA-capability-exchange/RouteRegisterCancel.ta.mjs";
import { RouteRegisterAbort, RouteRegisterAbort_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_RouteRegisterAbort, _encode_RouteRegisterAbort } from "../CSTA-capability-exchange/RouteRegisterAbort.ta.mjs";
// export { RouteRegisterAbort, RouteRegisterAbort_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_RouteRegisterAbort, _encode_RouteRegisterAbort } from "../CSTA-capability-exchange/RouteRegisterAbort.ta.mjs";
import { ReRoute, ReRoute_replyTimeout /* IMPORTED_LONG_NAMED_BIT */, ReRoute_correlatorData /* IMPORTED_LONG_NAMED_BIT */, ReRoute_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_ReRoute, _encode_ReRoute } from "../CSTA-capability-exchange/ReRoute.ta.mjs";
// export { ReRoute, ReRoute_replyTimeout /* IMPORTED_LONG_NAMED_BIT */, ReRoute_correlatorData /* IMPORTED_LONG_NAMED_BIT */, ReRoute_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_ReRoute, _encode_ReRoute } from "../CSTA-capability-exchange/ReRoute.ta.mjs";
import { RouteEnd, RouteEnd_errorValue /* IMPORTED_LONG_NAMED_BIT */, errorValue /* IMPORTED_SHORT_NAMED_BIT */, RouteEnd_correlatorData /* IMPORTED_LONG_NAMED_BIT */, RouteEnd_privateData /* IMPORTED_LONG_NAMED_BIT */, RouteEnd_supportsSending /* IMPORTED_LONG_NAMED_BIT */, supportsSending /* IMPORTED_SHORT_NAMED_BIT */, RouteEnd_supportsReceiving /* IMPORTED_LONG_NAMED_BIT */, supportsReceiving /* IMPORTED_SHORT_NAMED_BIT */, _decode_RouteEnd, _encode_RouteEnd } from "../CSTA-capability-exchange/RouteEnd.ta.mjs";
// export { RouteEnd, RouteEnd_errorValue /* IMPORTED_LONG_NAMED_BIT */, errorValue /* IMPORTED_SHORT_NAMED_BIT */, RouteEnd_correlatorData /* IMPORTED_LONG_NAMED_BIT */, RouteEnd_privateData /* IMPORTED_LONG_NAMED_BIT */, RouteEnd_supportsSending /* IMPORTED_LONG_NAMED_BIT */, supportsSending /* IMPORTED_SHORT_NAMED_BIT */, RouteEnd_supportsReceiving /* IMPORTED_LONG_NAMED_BIT */, supportsReceiving /* IMPORTED_SHORT_NAMED_BIT */, _decode_RouteEnd, _encode_RouteEnd } from "../CSTA-capability-exchange/RouteEnd.ta.mjs";
import { RouteReject, RouteReject_rejectCauseBusyOverflow /* IMPORTED_LONG_NAMED_BIT */, rejectCauseBusyOverflow /* IMPORTED_SHORT_NAMED_BIT */, RouteReject_rejectCauseQueueTimeOverflow /* IMPORTED_LONG_NAMED_BIT */, rejectCauseQueueTimeOverflow /* IMPORTED_SHORT_NAMED_BIT */, RouteReject_rejectCauseCapacityOverflow /* IMPORTED_LONG_NAMED_BIT */, rejectCauseCapacityOverflow /* IMPORTED_SHORT_NAMED_BIT */, RouteReject_rejectCauseCalendarOverflow /* IMPORTED_LONG_NAMED_BIT */, rejectCauseCalendarOverflow /* IMPORTED_SHORT_NAMED_BIT */, RouteReject_rejectCauseUnknownOverflow /* IMPORTED_LONG_NAMED_BIT */, rejectCauseUnknownOverflow /* IMPORTED_SHORT_NAMED_BIT */, RouteReject_correlatorData /* IMPORTED_LONG_NAMED_BIT */, RouteReject_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_RouteReject, _encode_RouteReject } from "../CSTA-capability-exchange/RouteReject.ta.mjs";
// export { RouteReject, RouteReject_rejectCauseBusyOverflow /* IMPORTED_LONG_NAMED_BIT */, rejectCauseBusyOverflow /* IMPORTED_SHORT_NAMED_BIT */, RouteReject_rejectCauseQueueTimeOverflow /* IMPORTED_LONG_NAMED_BIT */, rejectCauseQueueTimeOverflow /* IMPORTED_SHORT_NAMED_BIT */, RouteReject_rejectCauseCapacityOverflow /* IMPORTED_LONG_NAMED_BIT */, rejectCauseCapacityOverflow /* IMPORTED_SHORT_NAMED_BIT */, RouteReject_rejectCauseCalendarOverflow /* IMPORTED_LONG_NAMED_BIT */, rejectCauseCalendarOverflow /* IMPORTED_SHORT_NAMED_BIT */, RouteReject_rejectCauseUnknownOverflow /* IMPORTED_LONG_NAMED_BIT */, rejectCauseUnknownOverflow /* IMPORTED_SHORT_NAMED_BIT */, RouteReject_correlatorData /* IMPORTED_LONG_NAMED_BIT */, RouteReject_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_RouteReject, _encode_RouteReject } from "../CSTA-capability-exchange/RouteReject.ta.mjs";
import { RouteRequest, RouteRequest_callingDevice /* IMPORTED_LONG_NAMED_BIT */, RouteRequest_routeingDevice /* IMPORTED_LONG_NAMED_BIT */, RouteRequest_routeSelAlgorithmACD /* IMPORTED_LONG_NAMED_BIT */, routeSelAlgorithmACD /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_routeSelAlgorithmEmergency /* IMPORTED_LONG_NAMED_BIT */, routeSelAlgorithmEmergency /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_routeSelAlgorithmLeastCost /* IMPORTED_LONG_NAMED_BIT */, routeSelAlgorithmLeastCost /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_routeSelAlgorithmNormal /* IMPORTED_LONG_NAMED_BIT */, routeSelAlgorithmNormal /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_routeSelAlgorithmUserDefined /* IMPORTED_LONG_NAMED_BIT */, routeSelAlgorithmUserDefined /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_priority /* IMPORTED_LONG_NAMED_BIT */, priority /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_replyTimeout /* IMPORTED_LONG_NAMED_BIT */, RouteRequest_correlatorData /* IMPORTED_LONG_NAMED_BIT */, RouteRequest_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, mediaCallCharacteristics /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, callCharacteristics /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_routedCallInfo /* IMPORTED_LONG_NAMED_BIT */, routedCallInfo /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, subjectOfCall /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_messageInformation /* IMPORTED_LONG_NAMED_BIT */, messageInformation /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, languagePreferences /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_deviceHistory /* IMPORTED_LONG_NAMED_BIT */, deviceHistory /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_privateData /* IMPORTED_LONG_NAMED_BIT */, RouteRequest_nonCallRelatedRouteing /* IMPORTED_LONG_NAMED_BIT */, nonCallRelatedRouteing /* IMPORTED_SHORT_NAMED_BIT */, _decode_RouteRequest, _encode_RouteRequest } from "../CSTA-capability-exchange/RouteRequest.ta.mjs";
// export { RouteRequest, RouteRequest_callingDevice /* IMPORTED_LONG_NAMED_BIT */, RouteRequest_routeingDevice /* IMPORTED_LONG_NAMED_BIT */, RouteRequest_routeSelAlgorithmACD /* IMPORTED_LONG_NAMED_BIT */, routeSelAlgorithmACD /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_routeSelAlgorithmEmergency /* IMPORTED_LONG_NAMED_BIT */, routeSelAlgorithmEmergency /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_routeSelAlgorithmLeastCost /* IMPORTED_LONG_NAMED_BIT */, routeSelAlgorithmLeastCost /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_routeSelAlgorithmNormal /* IMPORTED_LONG_NAMED_BIT */, routeSelAlgorithmNormal /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_routeSelAlgorithmUserDefined /* IMPORTED_LONG_NAMED_BIT */, routeSelAlgorithmUserDefined /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_priority /* IMPORTED_LONG_NAMED_BIT */, priority /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_replyTimeout /* IMPORTED_LONG_NAMED_BIT */, RouteRequest_correlatorData /* IMPORTED_LONG_NAMED_BIT */, RouteRequest_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, mediaCallCharacteristics /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, callCharacteristics /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_routedCallInfo /* IMPORTED_LONG_NAMED_BIT */, routedCallInfo /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, subjectOfCall /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_messageInformation /* IMPORTED_LONG_NAMED_BIT */, messageInformation /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, languagePreferences /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_deviceHistory /* IMPORTED_LONG_NAMED_BIT */, deviceHistory /* IMPORTED_SHORT_NAMED_BIT */, RouteRequest_privateData /* IMPORTED_LONG_NAMED_BIT */, RouteRequest_nonCallRelatedRouteing /* IMPORTED_LONG_NAMED_BIT */, nonCallRelatedRouteing /* IMPORTED_SHORT_NAMED_BIT */, _decode_RouteRequest, _encode_RouteRequest } from "../CSTA-capability-exchange/RouteRequest.ta.mjs";
import { RouteSelect, RouteSelect_alternateRoutes /* IMPORTED_LONG_NAMED_BIT */, alternateRoutes /* IMPORTED_SHORT_NAMED_BIT */, RouteSelect_remainRetriesNoListAvailable /* IMPORTED_LONG_NAMED_BIT */, remainRetriesNoListAvailable /* IMPORTED_SHORT_NAMED_BIT */, RouteSelect_remainRetriesNoCountAvailable /* IMPORTED_LONG_NAMED_BIT */, remainRetriesNoCountAvailable /* IMPORTED_SHORT_NAMED_BIT */, RouteSelect_remainRetriesRetryCount /* IMPORTED_LONG_NAMED_BIT */, remainRetriesRetryCount /* IMPORTED_SHORT_NAMED_BIT */, RouteSelect_routeUsed /* IMPORTED_LONG_NAMED_BIT */, routeUsed /* IMPORTED_SHORT_NAMED_BIT */, RouteSelect_correlatorData /* IMPORTED_LONG_NAMED_BIT */, RouteSelect_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_RouteSelect, _encode_RouteSelect } from "../CSTA-capability-exchange/RouteSelect.ta.mjs";
// export { RouteSelect, RouteSelect_alternateRoutes /* IMPORTED_LONG_NAMED_BIT */, alternateRoutes /* IMPORTED_SHORT_NAMED_BIT */, RouteSelect_remainRetriesNoListAvailable /* IMPORTED_LONG_NAMED_BIT */, remainRetriesNoListAvailable /* IMPORTED_SHORT_NAMED_BIT */, RouteSelect_remainRetriesNoCountAvailable /* IMPORTED_LONG_NAMED_BIT */, remainRetriesNoCountAvailable /* IMPORTED_SHORT_NAMED_BIT */, RouteSelect_remainRetriesRetryCount /* IMPORTED_LONG_NAMED_BIT */, remainRetriesRetryCount /* IMPORTED_SHORT_NAMED_BIT */, RouteSelect_routeUsed /* IMPORTED_LONG_NAMED_BIT */, routeUsed /* IMPORTED_SHORT_NAMED_BIT */, RouteSelect_correlatorData /* IMPORTED_LONG_NAMED_BIT */, RouteSelect_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_RouteSelect, _encode_RouteSelect } from "../CSTA-capability-exchange/RouteSelect.ta.mjs";
import { RouteUsed, RouteUsed_callingDevice /* IMPORTED_LONG_NAMED_BIT */, RouteUsed_domain /* IMPORTED_LONG_NAMED_BIT */, domain /* IMPORTED_SHORT_NAMED_BIT */, RouteUsed_correlatorData /* IMPORTED_LONG_NAMED_BIT */, RouteUsed_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_RouteUsed, _encode_RouteUsed } from "../CSTA-capability-exchange/RouteUsed.ta.mjs";
// export { RouteUsed, RouteUsed_callingDevice /* IMPORTED_LONG_NAMED_BIT */, RouteUsed_domain /* IMPORTED_LONG_NAMED_BIT */, domain /* IMPORTED_SHORT_NAMED_BIT */, RouteUsed_correlatorData /* IMPORTED_LONG_NAMED_BIT */, RouteUsed_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_RouteUsed, _encode_RouteUsed } from "../CSTA-capability-exchange/RouteUsed.ta.mjs";


/**
 * @summary RouteingServList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteingServList ::= SEQUENCE
 * {     routeRegister             [ 0] IMPLICIT     RouteRegister         OPTIONAL,
 *     routeRegisterCancel         [ 1] IMPLICIT     RouteRegisterCancel     OPTIONAL,
 *     routeRegisterAbort         [ 2] IMPLICIT     RouteRegisterAbort     OPTIONAL,
 *     reRoute             [ 3] IMPLICIT     ReRoute         OPTIONAL,
 *     routeEnd             [ 4] IMPLICIT     RouteEnd         OPTIONAL,
 *     routeReject             [ 5] IMPLICIT     RouteReject         OPTIONAL,
 *     routeRequest             [ 6] IMPLICIT     RouteRequest         OPTIONAL,
 *     routeSelect             [ 7] IMPLICIT     RouteSelect         OPTIONAL,
 *     routeUsed             [ 8] IMPLICIT     RouteUsed         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RouteingServList {
    constructor (
        /**
         * @summary `routeRegister`.
         * @public
         * @readonly
         */
        readonly routeRegister: OPTIONAL<RouteRegister>,
        /**
         * @summary `routeRegisterCancel`.
         * @public
         * @readonly
         */
        readonly routeRegisterCancel: OPTIONAL<RouteRegisterCancel>,
        /**
         * @summary `routeRegisterAbort`.
         * @public
         * @readonly
         */
        readonly routeRegisterAbort: OPTIONAL<RouteRegisterAbort>,
        /**
         * @summary `reRoute`.
         * @public
         * @readonly
         */
        readonly reRoute: OPTIONAL<ReRoute>,
        /**
         * @summary `routeEnd`.
         * @public
         * @readonly
         */
        readonly routeEnd: OPTIONAL<RouteEnd>,
        /**
         * @summary `routeReject`.
         * @public
         * @readonly
         */
        readonly routeReject: OPTIONAL<RouteReject>,
        /**
         * @summary `routeRequest`.
         * @public
         * @readonly
         */
        readonly routeRequest: OPTIONAL<RouteRequest>,
        /**
         * @summary `routeSelect`.
         * @public
         * @readonly
         */
        readonly routeSelect: OPTIONAL<RouteSelect>,
        /**
         * @summary `routeUsed`.
         * @public
         * @readonly
         */
        readonly routeUsed: OPTIONAL<RouteUsed>
    ) {}

    /**
     * @summary Restructures an object into a RouteingServList
     * @description
     * 
     * This takes an `object` and converts it to a `RouteingServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RouteingServList`.
     * @returns {RouteingServList}
     */
    public static _from_object (_o: { [_K in keyof (RouteingServList)]: (RouteingServList)[_K] }): RouteingServList {
        return new RouteingServList(_o.routeRegister, _o.routeRegisterCancel, _o.routeRegisterAbort, _o.reRoute, _o.routeEnd, _o.routeReject, _o.routeRequest, _o.routeSelect, _o.routeUsed);
    }


}

/**
 * @summary The Leading Root Component Types of RouteingServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RouteingServList: $.ComponentSpec[] = [
    new $.ComponentSpec("routeRegister", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("routeRegisterCancel", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("routeRegisterAbort", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("reRoute", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("routeEnd", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("routeReject", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("routeRequest", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("routeSelect", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("routeUsed", true, $.hasTag(_TagClass.context, 8), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of RouteingServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RouteingServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RouteingServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RouteingServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RouteingServList: $.ASN1Decoder<RouteingServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteingServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteingServList (el: _Element): RouteingServList {
    if (!_cached_decoder_for_RouteingServList) { _cached_decoder_for_RouteingServList = function (el: _Element): RouteingServList {
    let routeRegister: OPTIONAL<RouteRegister>;
    let routeRegisterCancel: OPTIONAL<RouteRegisterCancel>;
    let routeRegisterAbort: OPTIONAL<RouteRegisterAbort>;
    let reRoute: OPTIONAL<ReRoute>;
    let routeEnd: OPTIONAL<RouteEnd>;
    let routeReject: OPTIONAL<RouteReject>;
    let routeRequest: OPTIONAL<RouteRequest>;
    let routeSelect: OPTIONAL<RouteSelect>;
    let routeUsed: OPTIONAL<RouteUsed>;
    const callbacks: $.DecodingMap = {
        "routeRegister": (_el: _Element): void => { routeRegister = $._decode_implicit<RouteRegister>(() => _decode_RouteRegister)(_el); },
        "routeRegisterCancel": (_el: _Element): void => { routeRegisterCancel = $._decode_implicit<RouteRegisterCancel>(() => _decode_RouteRegisterCancel)(_el); },
        "routeRegisterAbort": (_el: _Element): void => { routeRegisterAbort = $._decode_implicit<RouteRegisterAbort>(() => _decode_RouteRegisterAbort)(_el); },
        "reRoute": (_el: _Element): void => { reRoute = $._decode_implicit<ReRoute>(() => _decode_ReRoute)(_el); },
        "routeEnd": (_el: _Element): void => { routeEnd = $._decode_implicit<RouteEnd>(() => _decode_RouteEnd)(_el); },
        "routeReject": (_el: _Element): void => { routeReject = $._decode_implicit<RouteReject>(() => _decode_RouteReject)(_el); },
        "routeRequest": (_el: _Element): void => { routeRequest = $._decode_implicit<RouteRequest>(() => _decode_RouteRequest)(_el); },
        "routeSelect": (_el: _Element): void => { routeSelect = $._decode_implicit<RouteSelect>(() => _decode_RouteSelect)(_el); },
        "routeUsed": (_el: _Element): void => { routeUsed = $._decode_implicit<RouteUsed>(() => _decode_RouteUsed)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RouteingServList,
        _extension_additions_list_spec_for_RouteingServList,
        _root_component_type_list_2_spec_for_RouteingServList,
        undefined,
    );
    return new RouteingServList(
        routeRegister,
        routeRegisterCancel,
        routeRegisterAbort,
        reRoute,
        routeEnd,
        routeReject,
        routeRequest,
        routeSelect,
        routeUsed
    );
}; }
    return _cached_decoder_for_RouteingServList(el);
}

let _cached_encoder_for_RouteingServList: $.ASN1Encoder<RouteingServList> | null = null;

/**
 * @summary Encodes a(n) RouteingServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteingServList, encoded as an ASN.1 Element.
 */
export
function _encode_RouteingServList (value: RouteingServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteingServList) { _cached_encoder_for_RouteingServList = function (value: RouteingServList, elGetter: $.ASN1Encoder<RouteingServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.routeRegister === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_RouteRegister, $.BER)(value.routeRegister, $.BER)),
            /* IF_ABSENT  */ ((value.routeRegisterCancel === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_RouteRegisterCancel, $.BER)(value.routeRegisterCancel, $.BER)),
            /* IF_ABSENT  */ ((value.routeRegisterAbort === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_RouteRegisterAbort, $.BER)(value.routeRegisterAbort, $.BER)),
            /* IF_ABSENT  */ ((value.reRoute === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ReRoute, $.BER)(value.reRoute, $.BER)),
            /* IF_ABSENT  */ ((value.routeEnd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_RouteEnd, $.BER)(value.routeEnd, $.BER)),
            /* IF_ABSENT  */ ((value.routeReject === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_RouteReject, $.BER)(value.routeReject, $.BER)),
            /* IF_ABSENT  */ ((value.routeRequest === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_RouteRequest, $.BER)(value.routeRequest, $.BER)),
            /* IF_ABSENT  */ ((value.routeSelect === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_RouteSelect, $.BER)(value.routeSelect, $.BER)),
            /* IF_ABSENT  */ ((value.routeUsed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_RouteUsed, $.BER)(value.routeUsed, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RouteingServList(value, elGetter);
}


/* eslint-enable */
