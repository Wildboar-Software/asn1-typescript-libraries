/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { CalledDeviceID, _decode_CalledDeviceID, _encode_CalledDeviceID } from "../CSTA-device-identifiers/CalledDeviceID.ta.mjs";

import { CallingDeviceID, _decode_CallingDeviceID, _encode_CallingDeviceID } from "../CSTA-device-identifiers/CallingDeviceID.ta.mjs";

import { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";

import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import { AssociatedCallingDeviceID, _decode_AssociatedCallingDeviceID, _encode_AssociatedCallingDeviceID } from "../CSTA-device-identifiers/AssociatedCallingDeviceID.ta.mjs";

import { AssociatedCalledDeviceID, _decode_AssociatedCalledDeviceID, _encode_AssociatedCalledDeviceID } from "../CSTA-device-identifiers/AssociatedCalledDeviceID.ta.mjs";

import { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";

import { CallCharacteristics, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";

import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";

import { CallLinkageData, _decode_CallLinkageData, _encode_CallLinkageData } from "../CSTA-call-control/CallLinkageData.ta.mjs";

import { SubjectOfCall, _decode_SubjectOfCall, _encode_SubjectOfCall } from "../CSTA-device-feature-types/SubjectOfCall.ta.mjs";

import { MessageInfo, _decode_MessageInfo, _encode_MessageInfo } from "../CSTA-device-feature-types/MessageInfo.ta.mjs";

import { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";

import { DeviceHistory, _decode_DeviceHistory, _encode_DeviceHistory } from "../CSTA-device-feature-types/DeviceHistory.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



import { RouteingCrossRefID, _decode_RouteingCrossRefID, _encode_RouteingCrossRefID } from "../CSTA-device-feature-types/RouteingCrossRefID.ta.mjs";

import { RouteRegisterReqID, _decode_RouteRegisterReqID, _encode_RouteRegisterReqID } from "../CSTA-device-feature-types/RouteRegisterReqID.ta.mjs";

import { SelectValue, _decode_SelectValue, _encode_SelectValue } from "../CSTA-device-feature-types/SelectValue.ta.mjs";

import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";

/**
 * @summary RouteRequestArgument
 * @description
 *
 * SF request (ECMA-269 Table 20-11).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteRequestArgument ::= SEQUENCE
 * {    crossRefIdentifier         RouteingCrossRefID,
 *     routeRegisterReqID        [ 0] IMPLICIT RouteRegisterReqID    OPTIONAL,
 *     currentRoute             CalledDeviceID,
 *     callingDevice             CallingDeviceID                OPTIONAL,
 *     routeingDevice             SubjectDeviceID                OPTIONAL,
 *     routedCall             ConnectionID                OPTIONAL,
 *     routeSelAlgorithm        [ 1] IMPLICIT SelectValue         OPTIONAL,
 *     associatedCallingDevice     AssociatedCallingDeviceID        OPTIONAL,
 *     associatedCalledDevice         AssociatedCalledDeviceID        OPTIONAL,
 *     priority             [ 2] IMPLICIT BOOLEAN            OPTIONAL,
 *     replyTimeout            [ 3] IMPLICIT INTEGER            OPTIONAL,
 *     correlatorData            [ 4] IMPLICIT CorrelatorData        OPTIONAL,
 *     mediaCallCharacteristics    [ 5] IMPLICIT MediaCallCharacteristics    OPTIONAL,
 *     callCharacteristics        [ 6] IMPLICIT CallCharacteristics    OPTIONAL,
 *     routeCallInfo            [ 7] IMPLICIT ConnectionInformation     OPTIONAL,
 *     callLinkageData            [ 8] IMPLICIT CallLinkageData        OPTIONAL,
 *     subjectOfCall            [ 9] IMPLICIT SubjectOfCall        OPTIONAL,
 *     messageInfo            [10] IMPLICIT MessageInfo        OPTIONAL,
 *     languagePreferences        [11] IMPLICIT LanguagePreferences    OPTIONAL,
 *     deviceHistory            [12] IMPLICIT DeviceHistory        OPTIONAL,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RouteRequestArgument {
    constructor (
        /**
         * @summary `crossRefIdentifier`.
         * @description
         *
         * SF-allocated per-call dialogue ID. Unique within the
         * registration (or sub-domain if registration is not used).
         * @public
         * @readonly
         */
        readonly crossRefIdentifier: RouteingCrossRefID,
        /**
         * @summary `routeRegisterReqID`.
         * @description
         *
         * Mandatory if registration is supported; otherwise absent.
         * @public
         * @readonly
         */
        readonly routeRegisterReqID: OPTIONAL<RouteRegisterReqID>,
        /**
         * @summary `currentRoute`.
         * @description
         *
         * Current destination of the call.
         * @public
         * @readonly
         */
        readonly currentRoute: CalledDeviceID,
        /**
         * @summary `callingDevice`.
         * @description
         *
         * Calling device, if known.
         * @public
         * @readonly
         */
        readonly callingDevice: OPTIONAL<CallingDeviceID>,
        /**
         * @summary `routeingDevice`.
         * @description
         *
         * Routeing device at which the call arrived.
         * @public
         * @readonly
         */
        readonly routeingDevice: OPTIONAL<SubjectDeviceID>,
        /**
         * @summary `routedCall`.
         * @description
         *
         * Connection of the call being routed.
         * @public
         * @readonly
         */
        readonly routedCall: OPTIONAL<ConnectionID>,
        /**
         * @summary `routeSelAlgorithm`.
         * @description
         *
         * Hint about how CF should select a route, if provided.
         * @public
         * @readonly
         */
        readonly routeSelAlgorithm: OPTIONAL<SelectValue>,
        /**
         * @summary `associatedCallingDevice`.
         * @description
         *
         * Associated calling device, if known.
         * @public
         * @readonly
         */
        readonly associatedCallingDevice: OPTIONAL<AssociatedCallingDeviceID>,
        /**
         * @summary `associatedCalledDevice`.
         * @description
         *
         * Associated called device, if known.
         * @public
         * @readonly
         */
        readonly associatedCalledDevice: OPTIONAL<AssociatedCalledDeviceID>,
        /**
         * @summary `priority`.
         * @description
         *
         * TRUE if the call is a priority call.
         * @public
         * @readonly
         */
        readonly priority: OPTIONAL<BOOLEAN>,
        /**
         * @summary `replyTimeout`.
         * @description
         *
         * How long CF may take to respond.
         * @public
         * @readonly
         */
        readonly replyTimeout: OPTIONAL<INTEGER>,
        /**
         * @summary `correlatorData`.
         * @description
         *
         * Correlator data associated with the call.
         * @public
         * @readonly
         */
        readonly correlatorData: OPTIONAL<CorrelatorData>,
        /**
         * @summary `mediaCallCharacteristics`.
         * @description
         *
         * Media class of the call, bound to this dialogue (§6.7.8.5).
         * @public
         * @readonly
         */
        readonly mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>,
        /**
         * @summary `callCharacteristics`.
         * @description
         *
         * Call characterisation bits.
         * @public
         * @readonly
         */
        readonly callCharacteristics: OPTIONAL<CallCharacteristics>,
        /**
         * @summary `routeCallInfo`.
         * @description
         *
         * Connection information for the routed call.
         * @public
         * @readonly
         */
        readonly routeCallInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `callLinkageData`.
         * @description
         *
         * Call/thread linkage identifiers.
         * @public
         * @readonly
         */
        readonly callLinkageData: OPTIONAL<CallLinkageData>,
        /**
         * @summary `subjectOfCall`.
         * @description
         *
         * Subject/topic associated with the call.
         * @public
         * @readonly
         */
        readonly subjectOfCall: OPTIONAL<SubjectOfCall>,
        /**
         * @summary `messageInfo`.
         * @description
         *
         * Message information associated with the call.
         * @public
         * @readonly
         */
        readonly messageInfo: OPTIONAL<MessageInfo>,
        /**
         * @summary `languagePreferences`.
         * @description
         *
         * Language preferences associated with the call.
         * @public
         * @readonly
         */
        readonly languagePreferences: OPTIONAL<LanguagePreferences>,
        /**
         * @summary `deviceHistory`.
         * @description
         *
         * Device-history entries for the call.
         * @public
         * @readonly
         */
        readonly deviceHistory: OPTIONAL<DeviceHistory>,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional security (timestamp, sequence, securityInfo) and
         * privateData.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a RouteRequestArgument
     * @description
     * 
     * This takes an `object` and converts it to a `RouteRequestArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RouteRequestArgument`.
     * @returns {RouteRequestArgument}
     */
    public static _from_object (_o: { [_K in keyof (RouteRequestArgument)]: (RouteRequestArgument)[_K] }): RouteRequestArgument {
        return new RouteRequestArgument(_o.crossRefIdentifier, _o.routeRegisterReqID, _o.currentRoute, _o.callingDevice, _o.routeingDevice, _o.routedCall, _o.routeSelAlgorithm, _o.associatedCallingDevice, _o.associatedCalledDevice, _o.priority, _o.replyTimeout, _o.correlatorData, _o.mediaCallCharacteristics, _o.callCharacteristics, _o.routeCallInfo, _o.callLinkageData, _o.subjectOfCall, _o.messageInfo, _o.languagePreferences, _o.deviceHistory, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of RouteRequestArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RouteRequestArgument: $.ComponentSpec[] = [
        new $.ComponentSpec("crossRefIdentifier", false, $.hasTag(_TagClass.application, 24)),
        new $.ComponentSpec("routeRegisterReqID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("currentRoute", false, $.hasTag(_TagClass.application, 2)),
    new $.ComponentSpec("callingDevice", true, $.hasTag(_TagClass.application, 1)),
    new $.ComponentSpec("routeingDevice", true, $.hasTag(_TagClass.application, 3)),
    new $.ComponentSpec("routedCall", true, $.hasTag(_TagClass.application, 11)),
        new $.ComponentSpec("routeSelAlgorithm", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("associatedCallingDevice", true, $.hasTag(_TagClass.application, 5)),
    new $.ComponentSpec("associatedCalledDevice", true, $.hasTag(_TagClass.application, 6)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("replyTimeout", true, $.hasTag(_TagClass.context, 3)),
        new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("callCharacteristics", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("routeCallInfo", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("callLinkageData", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("subjectOfCall", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("messageInfo", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("languagePreferences", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("deviceHistory", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of RouteRequestArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RouteRequestArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RouteRequestArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RouteRequestArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RouteRequestArgument: $.ASN1Decoder<RouteRequestArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteRequestArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteRequestArgument (el: _Element): RouteRequestArgument {
    if (!_cached_decoder_for_RouteRequestArgument) { _cached_decoder_for_RouteRequestArgument = function (el: _Element): RouteRequestArgument {
    let crossRefIdentifier!: RouteingCrossRefID;
    let routeRegisterReqID: OPTIONAL<RouteRegisterReqID>;
    let currentRoute!: CalledDeviceID;
    let callingDevice: OPTIONAL<CallingDeviceID>;
    let routeingDevice: OPTIONAL<SubjectDeviceID>;
    let routedCall: OPTIONAL<ConnectionID>;
    let routeSelAlgorithm: OPTIONAL<SelectValue>;
    let associatedCallingDevice: OPTIONAL<AssociatedCallingDeviceID>;
    let associatedCalledDevice: OPTIONAL<AssociatedCalledDeviceID>;
    let priority: OPTIONAL<BOOLEAN>;
    let replyTimeout: OPTIONAL<INTEGER>;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>;
    let callCharacteristics: OPTIONAL<CallCharacteristics>;
    let routeCallInfo: OPTIONAL<ConnectionInformation>;
    let callLinkageData: OPTIONAL<CallLinkageData>;
    let subjectOfCall: OPTIONAL<SubjectOfCall>;
    let messageInfo: OPTIONAL<MessageInfo>;
    let languagePreferences: OPTIONAL<LanguagePreferences>;
    let deviceHistory: OPTIONAL<DeviceHistory>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "crossRefIdentifier": (_el: _Element): void => { crossRefIdentifier = _decode_RouteingCrossRefID(_el); },
        "routeRegisterReqID": (_el: _Element): void => { routeRegisterReqID = $._decode_implicit<RouteRegisterReqID>(() => _decode_RouteRegisterReqID)(_el); },
        "currentRoute": (_el: _Element): void => { currentRoute = _decode_CalledDeviceID(_el); },
        "callingDevice": (_el: _Element): void => { callingDevice = _decode_CallingDeviceID(_el); },
        "routeingDevice": (_el: _Element): void => { routeingDevice = _decode_SubjectDeviceID(_el); },
        "routedCall": (_el: _Element): void => { routedCall = _decode_ConnectionID(_el); },
        "routeSelAlgorithm": (_el: _Element): void => { routeSelAlgorithm = $._decode_implicit<SelectValue>(() => _decode_SelectValue)(_el); },
        "associatedCallingDevice": (_el: _Element): void => { associatedCallingDevice = _decode_AssociatedCallingDeviceID(_el); },
        "associatedCalledDevice": (_el: _Element): void => { associatedCalledDevice = _decode_AssociatedCalledDeviceID(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "replyTimeout": (_el: _Element): void => { replyTimeout = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "mediaCallCharacteristics": (_el: _Element): void => { mediaCallCharacteristics = $._decode_implicit<MediaCallCharacteristics>(() => _decode_MediaCallCharacteristics)(_el); },
        "callCharacteristics": (_el: _Element): void => { callCharacteristics = $._decode_implicit<CallCharacteristics>(() => _decode_CallCharacteristics)(_el); },
        "routeCallInfo": (_el: _Element): void => { routeCallInfo = $._decode_implicit<ConnectionInformation>(() => _decode_ConnectionInformation)(_el); },
        "callLinkageData": (_el: _Element): void => { callLinkageData = $._decode_implicit<CallLinkageData>(() => _decode_CallLinkageData)(_el); },
        "subjectOfCall": (_el: _Element): void => { subjectOfCall = $._decode_implicit<SubjectOfCall>(() => _decode_SubjectOfCall)(_el); },
        "messageInfo": (_el: _Element): void => { messageInfo = $._decode_implicit<MessageInfo>(() => _decode_MessageInfo)(_el); },
        "languagePreferences": (_el: _Element): void => { languagePreferences = $._decode_implicit<LanguagePreferences>(() => _decode_LanguagePreferences)(_el); },
        "deviceHistory": (_el: _Element): void => { deviceHistory = $._decode_implicit<DeviceHistory>(() => _decode_DeviceHistory)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RouteRequestArgument,
        _extension_additions_list_spec_for_RouteRequestArgument,
        _root_component_type_list_2_spec_for_RouteRequestArgument,
        undefined,
    );
    return new RouteRequestArgument(
        crossRefIdentifier,
        routeRegisterReqID,
        currentRoute,
        callingDevice,
        routeingDevice,
        routedCall,
        routeSelAlgorithm,
        associatedCallingDevice,
        associatedCalledDevice,
        priority,
        replyTimeout,
        correlatorData,
        mediaCallCharacteristics,
        callCharacteristics,
        routeCallInfo,
        callLinkageData,
        subjectOfCall,
        messageInfo,
        languagePreferences,
        deviceHistory,
        extensions
    );
}; }
    return _cached_decoder_for_RouteRequestArgument(el);
}

let _cached_encoder_for_RouteRequestArgument: $.ASN1Encoder<RouteRequestArgument> | null = null;

/**
 * @summary Encodes a(n) RouteRequestArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteRequestArgument, encoded as an ASN.1 Element.
 */
export
function _encode_RouteRequestArgument (value: RouteRequestArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteRequestArgument) { _cached_encoder_for_RouteRequestArgument = function (value: RouteRequestArgument, elGetter: $.ASN1Encoder<RouteRequestArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RouteingCrossRefID(value.crossRefIdentifier, $.BER),
            /* IF_ABSENT  */ ((value.routeRegisterReqID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_RouteRegisterReqID, $.BER)(value.routeRegisterReqID, $.BER)),
            /* REQUIRED   */ _encode_CalledDeviceID(value.currentRoute, $.BER),
            /* IF_ABSENT  */ ((value.callingDevice === undefined) ? undefined : _encode_CallingDeviceID(value.callingDevice, $.BER)),
            /* IF_ABSENT  */ ((value.routeingDevice === undefined) ? undefined : _encode_SubjectDeviceID(value.routeingDevice, $.BER)),
            /* IF_ABSENT  */ ((value.routedCall === undefined) ? undefined : _encode_ConnectionID(value.routedCall, $.BER)),
            /* IF_ABSENT  */ ((value.routeSelAlgorithm === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_SelectValue, $.BER)(value.routeSelAlgorithm, $.BER)),
            /* IF_ABSENT  */ ((value.associatedCallingDevice === undefined) ? undefined : _encode_AssociatedCallingDeviceID(value.associatedCallingDevice, $.BER)),
            /* IF_ABSENT  */ ((value.associatedCalledDevice === undefined) ? undefined : _encode_AssociatedCalledDeviceID(value.associatedCalledDevice, $.BER)),
            /* IF_ABSENT  */ ((value.priority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.priority, $.BER)),
            /* IF_ABSENT  */ ((value.replyTimeout === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.replyTimeout, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.mediaCallCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_MediaCallCharacteristics, $.BER)(value.mediaCallCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.callCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_CallCharacteristics, $.BER)(value.callCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.routeCallInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ConnectionInformation, $.BER)(value.routeCallInfo, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_CallLinkageData, $.BER)(value.callLinkageData, $.BER)),
            /* IF_ABSENT  */ ((value.subjectOfCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_SubjectOfCall, $.BER)(value.subjectOfCall, $.BER)),
            /* IF_ABSENT  */ ((value.messageInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_MessageInfo, $.BER)(value.messageInfo, $.BER)),
            /* IF_ABSENT  */ ((value.languagePreferences === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_LanguagePreferences, $.BER)(value.languagePreferences, $.BER)),
            /* IF_ABSENT  */ ((value.deviceHistory === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_DeviceHistory, $.BER)(value.deviceHistory, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RouteRequestArgument(value, elGetter);
}


/* eslint-enable */
