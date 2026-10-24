/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    INTEGER,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError
} from "@wildboar/asn1";



/**
 * @summary FilterThreshold
 * @description
 * Per-service outstanding-request limits for the SF. Each INTEGER is the number
 * of unacknowledged requests allowed for that service; 0 means no limit. Absent
 * from Get Switching Function Capabilities when unknown (ECMA-269 §13.1.4.2.1
 * Table 13-9, ECMA-285 §9.10).
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FilterThreshold ::= SEQUENCE
 * {     getLogicalDeviceInformation         INTEGER,
 *     getPhysicalDeviceInformation         INTEGER,
 *     getSwitchingFunctionCaps         INTEGER,
 *     getSwitchingFunctionDevices         INTEGER,
 *     switchingFunctionDevices         INTEGER,
 *     changeSystemStatusFilter         INTEGER,
 *     systemStatusRegister             INTEGER,
 *     systemStatusRegisterAbort         INTEGER,
 *     systemStatusRegisterCancel         INTEGER,
 *     requestSystemStatus             INTEGER,
 *     systemStatus                 INTEGER,
 *     switchingFunctionCapsChanged         INTEGER,
 *     switchingFunctionDevsChanged         INTEGER,
 *     changeMonitorFilter             INTEGER,
 *     monitorStart                 INTEGER,
 *     monitorStop                 INTEGER,
 *     snapshotCall                 INTEGER,
 *     snapshotDevice                 INTEGER,
 *     snapshotCallData             INTEGER,
 *     snapshotDeviceData             INTEGER,
 *     acceptCall                 INTEGER,
 *     alternateCall                 INTEGER,
 *     answerCall                 INTEGER,
 *     callBackCallRelated             INTEGER,
 *     callBackMessageCallRelated         INTEGER,
 *     campOnCall                 INTEGER,
 *     clearCall                 INTEGER,
 *     clearConnection             INTEGER,
 *     conferenceCall                 INTEGER,
 *     consultationCall             INTEGER,
 *     deflectCall                 INTEGER,
 *     dialDigits                 INTEGER,
 *     directedPickupCall             INTEGER,
 *     groupPickupCall             INTEGER,
 *     holdCall                 INTEGER,
 *     intrudeCall                 INTEGER,
 *     joinCall                 INTEGER,
 *     makeCall                 INTEGER,
 *     makePredictiveCall             INTEGER,
 *     parkCall                 INTEGER,
 *     reconnectCall                 INTEGER,
 *     retrieveCall                 INTEGER,
 *     singleStepConferenceCall         INTEGER,
 *     singleStepTransferCall             INTEGER,
 *     transferCall                 INTEGER,
 *     associateData                 INTEGER,
 *     cancelTelephonyTone             INTEGER,
 *     generateDigits                 INTEGER,
 *     generateTelephonyTone             INTEGER,
 *     sendUserInformation             INTEGER,
 *     startDTMFDigitsCollection         INTEGER,
 *     startTelephonyTonesCollection         INTEGER,
 *     stopDTMFDigitsCollection         INTEGER,
 *     stopTelephonyTonesCollection         INTEGER,
 *     attachMediaService             INTEGER,
 *     detachMediaService             INTEGER,
 *     routeRegister                 INTEGER,
 *     routeRegisterAbort             INTEGER,
 *     routeRegisterCancel             INTEGER,
 *     reRoute                 INTEGER,
 *     routeEnd                 INTEGER,
 *     routeReject                 INTEGER,
 *     routeRequest                 INTEGER,
 *     routeSelect                 INTEGER,
 *     routeUsed                 INTEGER,
 *     buttonPress                 INTEGER,
 *     getAuditoryApparatusInfo         INTEGER,
 *     getButtonInformation             INTEGER,
 *     getDisplay                 INTEGER,
 *     getHookswitchStatus             INTEGER,
 *     getLampInformation             INTEGER,
 *     getLampMode                 INTEGER,
 *     getMicrophoneGain             INTEGER,
 *     getMicrophoneMute             INTEGER,
 *     getMessageWaitingIndicator         INTEGER,
 *     getRingerStatus             INTEGER,
 *     getSpeakerMute                 INTEGER,
 *     getSpeakerVolume             INTEGER,
 *     setButtonInformation             INTEGER,
 *     setDisplay                 INTEGER,
 *     setHookswitchStatus             INTEGER,
 *     setLampMode                 INTEGER,
 *     setMsgWaitingIndicator             INTEGER,
 *     setMicrophoneGain             INTEGER,
 *     setMicrophoneMute             INTEGER,
 *     setRingerStatus             INTEGER,
 *     setSpeakerMute                 INTEGER,
 *     setSpeakerVolume             INTEGER,
 *     callBackMessageNonCallRelated         INTEGER,
 *     callBackNonCallRelated             INTEGER,
 *     cancelCallBack                 INTEGER,
 *     cancelCallBackMessage             INTEGER,
 *     getAgentState                 INTEGER,
 *     getAutoAnswer                 INTEGER,
 *     getAutoWorkMode             INTEGER,
 *     getCallerIDStatus             INTEGER,
 *     getDoNotDisturb             INTEGER,
 *     getForwarding                 INTEGER,
 *     getLastNumberDialed             INTEGER,
 *     getRouteingMode             INTEGER,
 *     setAgentState                 INTEGER,
 *     setAutoAnswer                 INTEGER,
 *     setAutoWorkMode             INTEGER,
 *     setCallerIDStatus             INTEGER,
 *     setDoNotDisturb             INTEGER,
 *     setForwarding                 INTEGER,
 *     setRouteingMode             INTEGER,
 *     backInService                 INTEGER,
 *     deviceCaosChanged             INTEGER,
 *     outOfService                 INTEGER,
 *     partiallyInService            INTEGER,
 *     ioRegister                 INTEGER,
 *     ioRegisterAbort             INTEGER,
 *     ioRegisterCancel             INTEGER,
 *     dataPathResumed             INTEGER,
 *     dataPathSuspended             INTEGER,
 *     fastData                 INTEGER,
 *     resumeDataPath                 INTEGER,
 *     sendBroadcastData             INTEGER,
 *     sendData                 INTEGER,
 *     sendMulticastData             INTEGER,
 *     startDataPath                 INTEGER,
 *     stopDataPath                 INTEGER,
 *     suspendDataPath             INTEGER,
 *     concatenateMsg                 INTEGER,
 *     deleteMsg                 INTEGER,
 *     playMsg                 INTEGER,
 *     queryVoiceAttribute             INTEGER,
 *     recordMsg                 INTEGER,
 *     reposition                 INTEGER,
 *     resume                     INTEGER,
 *     review                     INTEGER,
 *     setVoiceAttribute             INTEGER,
 *     stop                     INTEGER,
 *     suspend                 INTEGER,
 *     synthesizeMsg                 INTEGER,
 *     cDRNotification             INTEGER,
 *     cDRReport                 INTEGER,
 *     sendStoredCDRs                 INTEGER,
 *     startCDRTransmission             INTEGER,
 *     stopCDRTransmission             INTEGER,
 *     escapeRegister                 INTEGER,
 *     escapeRegisterAbort             INTEGER,
 *     escapeRegisterCancel             INTEGER,
 *     escape                     INTEGER,
 *     privateDataVersion             INTEGER }
 * ```
 * 
 * @class
 */
export
class FilterThreshold {
    /**
     * @summary `getLogicalDeviceInformation`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly getLogicalDeviceInformation: INTEGER;
    /**
     * @summary `getPhysicalDeviceInformation`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly getPhysicalDeviceInformation: INTEGER;
    /**
     * @summary `getSwitchingFunctionCaps`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly getSwitchingFunctionCaps: INTEGER;
    /**
     * @summary `getSwitchingFunctionDevices`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly getSwitchingFunctionDevices: INTEGER;
    /**
     * @summary `switchingFunctionDevices`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly switchingFunctionDevices: INTEGER;
    /**
     * @summary `changeSystemStatusFilter`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly changeSystemStatusFilter: INTEGER;
    /**
     * @summary `systemStatusRegister`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly systemStatusRegister: INTEGER;
    /**
     * @summary `systemStatusRegisterAbort`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly systemStatusRegisterAbort: INTEGER;
    /**
     * @summary `systemStatusRegisterCancel`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly systemStatusRegisterCancel: INTEGER;
    /**
     * @summary `requestSystemStatus`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly requestSystemStatus: INTEGER;
    /**
     * @summary `systemStatus`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly systemStatus: INTEGER;
    /**
     * @summary `switchingFunctionCapsChanged`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly switchingFunctionCapsChanged: INTEGER;
    /**
     * @summary `switchingFunctionDevsChanged`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly switchingFunctionDevsChanged: INTEGER;
    /**
     * @summary `changeMonitorFilter`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly changeMonitorFilter: INTEGER;
    /**
     * @summary `monitorStart`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly monitorStart: INTEGER;
    /**
     * @summary `monitorStop`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly monitorStop: INTEGER;
    /**
     * @summary `snapshotCall`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly snapshotCall: INTEGER;
    /**
     * @summary `snapshotDevice`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly snapshotDevice: INTEGER;
    /**
     * @summary `snapshotCallData`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly snapshotCallData: INTEGER;
    /**
     * @summary `snapshotDeviceData`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly snapshotDeviceData: INTEGER;
    /**
     * @summary `acceptCall`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly acceptCall: INTEGER;
    /**
     * @summary `alternateCall`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly alternateCall: INTEGER;
    /**
     * @summary `answerCall`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly answerCall: INTEGER;
    /**
     * @summary `callBackCallRelated`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly callBackCallRelated: INTEGER;
    /**
     * @summary `callBackMessageCallRelated`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly callBackMessageCallRelated: INTEGER;
    /**
     * @summary `campOnCall`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly campOnCall: INTEGER;
    /**
     * @summary `clearCall`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly clearCall: INTEGER;
    /**
     * @summary `clearConnection`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly clearConnection: INTEGER;
    /**
     * @summary `conferenceCall`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly conferenceCall: INTEGER;
    /**
     * @summary `consultationCall`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly consultationCall: INTEGER;
    /**
     * @summary `deflectCall`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly deflectCall: INTEGER;
    /**
     * @summary `dialDigits`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly dialDigits: INTEGER;
    /**
     * @summary `directedPickupCall`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly directedPickupCall: INTEGER;
    /**
     * @summary `groupPickupCall`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly groupPickupCall: INTEGER;
    /**
     * @summary `holdCall`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly holdCall: INTEGER;
    /**
     * @summary `intrudeCall`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly intrudeCall: INTEGER;
    /**
     * @summary `joinCall`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly joinCall: INTEGER;
    /**
     * @summary `makeCall`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly makeCall: INTEGER;
    /**
     * @summary `makePredictiveCall`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly makePredictiveCall: INTEGER;
    /**
     * @summary `parkCall`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly parkCall: INTEGER;
    /**
     * @summary `reconnectCall`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly reconnectCall: INTEGER;
    /**
     * @summary `retrieveCall`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly retrieveCall: INTEGER;
    /**
     * @summary `singleStepConferenceCall`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly singleStepConferenceCall: INTEGER;
    /**
     * @summary `singleStepTransferCall`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly singleStepTransferCall: INTEGER;
    /**
     * @summary `transferCall`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly transferCall: INTEGER;
    /**
     * @summary `associateData`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly associateData: INTEGER;
    /**
     * @summary `cancelTelephonyTone`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly cancelTelephonyTone: INTEGER;
    /**
     * @summary `generateDigits`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly generateDigits: INTEGER;
    /**
     * @summary `generateTelephonyTone`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly generateTelephonyTone: INTEGER;
    /**
     * @summary `sendUserInformation`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly sendUserInformation: INTEGER;
    /**
     * @summary `startDTMFDigitsCollection`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly startDTMFDigitsCollection: INTEGER;
    /**
     * @summary `startTelephonyTonesCollection`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly startTelephonyTonesCollection: INTEGER;
    /**
     * @summary `stopDTMFDigitsCollection`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly stopDTMFDigitsCollection: INTEGER;
    /**
     * @summary `stopTelephonyTonesCollection`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly stopTelephonyTonesCollection: INTEGER;
    /**
     * @summary `attachMediaService`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly attachMediaService: INTEGER;
    /**
     * @summary `detachMediaService`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly detachMediaService: INTEGER;
    /**
     * @summary `routeRegister`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly routeRegister: INTEGER;
    /**
     * @summary `routeRegisterAbort`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly routeRegisterAbort: INTEGER;
    /**
     * @summary `routeRegisterCancel`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly routeRegisterCancel: INTEGER;
    /**
     * @summary `reRoute`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly reRoute: INTEGER;
    /**
     * @summary `routeEnd`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly routeEnd: INTEGER;
    /**
     * @summary `routeReject`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly routeReject: INTEGER;
    /**
     * @summary `routeRequest`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly routeRequest: INTEGER;
    /**
     * @summary `routeSelect`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly routeSelect: INTEGER;
    /**
     * @summary `routeUsed`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly routeUsed: INTEGER;
    /**
     * @summary `buttonPress`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly buttonPress: INTEGER;
    /**
     * @summary `getAuditoryApparatusInfo`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly getAuditoryApparatusInfo: INTEGER;
    /**
     * @summary `getButtonInformation`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly getButtonInformation: INTEGER;
    /**
     * @summary `getDisplay`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly getDisplay: INTEGER;
    /**
     * @summary `getHookswitchStatus`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly getHookswitchStatus: INTEGER;
    /**
     * @summary `getLampInformation`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly getLampInformation: INTEGER;
    /**
     * @summary `getLampMode`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly getLampMode: INTEGER;
    /**
     * @summary `getMicrophoneGain`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly getMicrophoneGain: INTEGER;
    /**
     * @summary `getMicrophoneMute`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly getMicrophoneMute: INTEGER;
    /**
     * @summary `getMessageWaitingIndicator`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly getMessageWaitingIndicator: INTEGER;
    /**
     * @summary `getRingerStatus`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly getRingerStatus: INTEGER;
    /**
     * @summary `getSpeakerMute`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly getSpeakerMute: INTEGER;
    /**
     * @summary `getSpeakerVolume`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly getSpeakerVolume: INTEGER;
    /**
     * @summary `setButtonInformation`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly setButtonInformation: INTEGER;
    /**
     * @summary `setDisplay`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly setDisplay: INTEGER;
    /**
     * @summary `setHookswitchStatus`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly setHookswitchStatus: INTEGER;
    /**
     * @summary `setLampMode`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly setLampMode: INTEGER;
    /**
     * @summary `setMsgWaitingIndicator`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly setMsgWaitingIndicator: INTEGER;
    /**
     * @summary `setMicrophoneGain`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly setMicrophoneGain: INTEGER;
    /**
     * @summary `setMicrophoneMute`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly setMicrophoneMute: INTEGER;
    /**
     * @summary `setRingerStatus`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly setRingerStatus: INTEGER;
    /**
     * @summary `setSpeakerMute`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly setSpeakerMute: INTEGER;
    /**
     * @summary `setSpeakerVolume`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly setSpeakerVolume: INTEGER;
    /**
     * @summary `callBackMessageNonCallRelated`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly callBackMessageNonCallRelated: INTEGER;
    /**
     * @summary `callBackNonCallRelated`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly callBackNonCallRelated: INTEGER;
    /**
     * @summary `cancelCallBack`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly cancelCallBack: INTEGER;
    /**
     * @summary `cancelCallBackMessage`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly cancelCallBackMessage: INTEGER;
    /**
     * @summary `getAgentState`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly getAgentState: INTEGER;
    /**
     * @summary `getAutoAnswer`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly getAutoAnswer: INTEGER;
    /**
     * @summary `getAutoWorkMode`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly getAutoWorkMode: INTEGER;
    /**
     * @summary `getCallerIDStatus`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly getCallerIDStatus: INTEGER;
    /**
     * @summary `getDoNotDisturb`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly getDoNotDisturb: INTEGER;
    /**
     * @summary `getForwarding`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly getForwarding: INTEGER;
    /**
     * @summary `getLastNumberDialed`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly getLastNumberDialed: INTEGER;
    /**
     * @summary `getRouteingMode`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly getRouteingMode: INTEGER;
    /**
     * @summary `setAgentState`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly setAgentState: INTEGER;
    /**
     * @summary `setAutoAnswer`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly setAutoAnswer: INTEGER;
    /**
     * @summary `setAutoWorkMode`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly setAutoWorkMode: INTEGER;
    /**
     * @summary `setCallerIDStatus`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly setCallerIDStatus: INTEGER;
    /**
     * @summary `setDoNotDisturb`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly setDoNotDisturb: INTEGER;
    /**
     * @summary `setForwarding`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly setForwarding: INTEGER;
    /**
     * @summary `setRouteingMode`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly setRouteingMode: INTEGER;
    /**
     * @summary `backInService`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly backInService: INTEGER;
    /**
     * @summary `deviceCaosChanged`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly deviceCaosChanged: INTEGER;
    /**
     * @summary `outOfService`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly outOfService: INTEGER;
    /**
     * @summary `partiallyInService`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly partiallyInService: INTEGER;
    /**
     * @summary `ioRegister`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly ioRegister: INTEGER;
    /**
     * @summary `ioRegisterAbort`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly ioRegisterAbort: INTEGER;
    /**
     * @summary `ioRegisterCancel`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly ioRegisterCancel: INTEGER;
    /**
     * @summary `dataPathResumed`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly dataPathResumed: INTEGER;
    /**
     * @summary `dataPathSuspended`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly dataPathSuspended: INTEGER;
    /**
     * @summary `fastData`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly fastData: INTEGER;
    /**
     * @summary `resumeDataPath`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly resumeDataPath: INTEGER;
    /**
     * @summary `sendBroadcastData`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly sendBroadcastData: INTEGER;
    /**
     * @summary `sendData`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly sendData: INTEGER;
    /**
     * @summary `sendMulticastData`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly sendMulticastData: INTEGER;
    /**
     * @summary `startDataPath`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly startDataPath: INTEGER;
    /**
     * @summary `stopDataPath`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly stopDataPath: INTEGER;
    /**
     * @summary `suspendDataPath`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly suspendDataPath: INTEGER;
    /**
     * @summary `concatenateMsg`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly concatenateMsg: INTEGER;
    /**
     * @summary `deleteMsg`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly deleteMsg: INTEGER;
    /**
     * @summary `playMsg`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly playMsg: INTEGER;
    /**
     * @summary `queryVoiceAttribute`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly queryVoiceAttribute: INTEGER;
    /**
     * @summary `recordMsg`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly recordMsg: INTEGER;
    /**
     * @summary `reposition`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly reposition: INTEGER;
    /**
     * @summary `resume`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly resume: INTEGER;
    /**
     * @summary `review`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly review: INTEGER;
    /**
     * @summary `setVoiceAttribute`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly setVoiceAttribute: INTEGER;
    /**
     * @summary `stop`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly stop: INTEGER;
    /**
     * @summary `suspend`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly suspend: INTEGER;
    /**
     * @summary `synthesizeMsg`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly synthesizeMsg: INTEGER;
    /**
     * @summary `cDRNotification`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly cDRNotification: INTEGER;
    /**
     * @summary `cDRReport`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly cDRReport: INTEGER;
    /**
     * @summary `sendStoredCDRs`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly sendStoredCDRs: INTEGER;
    /**
     * @summary `startCDRTransmission`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly startCDRTransmission: INTEGER;
    /**
     * @summary `stopCDRTransmission`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly stopCDRTransmission: INTEGER;
    /**
     * @summary `escapeRegister`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly escapeRegister: INTEGER;
    /**
     * @summary `escapeRegisterAbort`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly escapeRegisterAbort: INTEGER;
    /**
     * @summary `escapeRegisterCancel`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly escapeRegisterCancel: INTEGER;
    /**
     * @summary `escape`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly escape: INTEGER;
    /**
     * @summary `privateDataVersion`.
     * @public
     * @readonly
     * @description
     * Outstanding-request limit for this service; 0 means no limit
     * (ECMA-269 §13.1.4.2.1).
     */
    public readonly privateDataVersion: INTEGER;

    constructor (
        getLogicalDeviceInformation: INTEGER,
        getPhysicalDeviceInformation: INTEGER,
        getSwitchingFunctionCaps: INTEGER,
        getSwitchingFunctionDevices: INTEGER,
        switchingFunctionDevices: INTEGER,
        changeSystemStatusFilter: INTEGER,
        systemStatusRegister: INTEGER,
        systemStatusRegisterAbort: INTEGER,
        systemStatusRegisterCancel: INTEGER,
        requestSystemStatus: INTEGER,
        systemStatus: INTEGER,
        switchingFunctionCapsChanged: INTEGER,
        switchingFunctionDevsChanged: INTEGER,
        changeMonitorFilter: INTEGER,
        monitorStart: INTEGER,
        monitorStop: INTEGER,
        snapshotCall: INTEGER,
        snapshotDevice: INTEGER,
        snapshotCallData: INTEGER,
        snapshotDeviceData: INTEGER,
        acceptCall: INTEGER,
        alternateCall: INTEGER,
        answerCall: INTEGER,
        callBackCallRelated: INTEGER,
        callBackMessageCallRelated: INTEGER,
        campOnCall: INTEGER,
        clearCall: INTEGER,
        clearConnection: INTEGER,
        conferenceCall: INTEGER,
        consultationCall: INTEGER,
        deflectCall: INTEGER,
        dialDigits: INTEGER,
        directedPickupCall: INTEGER,
        groupPickupCall: INTEGER,
        holdCall: INTEGER,
        intrudeCall: INTEGER,
        joinCall: INTEGER,
        makeCall: INTEGER,
        makePredictiveCall: INTEGER,
        parkCall: INTEGER,
        reconnectCall: INTEGER,
        retrieveCall: INTEGER,
        singleStepConferenceCall: INTEGER,
        singleStepTransferCall: INTEGER,
        transferCall: INTEGER,
        associateData: INTEGER,
        cancelTelephonyTone: INTEGER,
        generateDigits: INTEGER,
        generateTelephonyTone: INTEGER,
        sendUserInformation: INTEGER,
        startDTMFDigitsCollection: INTEGER,
        startTelephonyTonesCollection: INTEGER,
        stopDTMFDigitsCollection: INTEGER,
        stopTelephonyTonesCollection: INTEGER,
        attachMediaService: INTEGER,
        detachMediaService: INTEGER,
        routeRegister: INTEGER,
        routeRegisterAbort: INTEGER,
        routeRegisterCancel: INTEGER,
        reRoute: INTEGER,
        routeEnd: INTEGER,
        routeReject: INTEGER,
        routeRequest: INTEGER,
        routeSelect: INTEGER,
        routeUsed: INTEGER,
        buttonPress: INTEGER,
        getAuditoryApparatusInfo: INTEGER,
        getButtonInformation: INTEGER,
        getDisplay: INTEGER,
        getHookswitchStatus: INTEGER,
        getLampInformation: INTEGER,
        getLampMode: INTEGER,
        getMicrophoneGain: INTEGER,
        getMicrophoneMute: INTEGER,
        getMessageWaitingIndicator: INTEGER,
        getRingerStatus: INTEGER,
        getSpeakerMute: INTEGER,
        getSpeakerVolume: INTEGER,
        setButtonInformation: INTEGER,
        setDisplay: INTEGER,
        setHookswitchStatus: INTEGER,
        setLampMode: INTEGER,
        setMsgWaitingIndicator: INTEGER,
        setMicrophoneGain: INTEGER,
        setMicrophoneMute: INTEGER,
        setRingerStatus: INTEGER,
        setSpeakerMute: INTEGER,
        setSpeakerVolume: INTEGER,
        callBackMessageNonCallRelated: INTEGER,
        callBackNonCallRelated: INTEGER,
        cancelCallBack: INTEGER,
        cancelCallBackMessage: INTEGER,
        getAgentState: INTEGER,
        getAutoAnswer: INTEGER,
        getAutoWorkMode: INTEGER,
        getCallerIDStatus: INTEGER,
        getDoNotDisturb: INTEGER,
        getForwarding: INTEGER,
        getLastNumberDialed: INTEGER,
        getRouteingMode: INTEGER,
        setAgentState: INTEGER,
        setAutoAnswer: INTEGER,
        setAutoWorkMode: INTEGER,
        setCallerIDStatus: INTEGER,
        setDoNotDisturb: INTEGER,
        setForwarding: INTEGER,
        setRouteingMode: INTEGER,
        backInService: INTEGER,
        deviceCaosChanged: INTEGER,
        outOfService: INTEGER,
        partiallyInService: INTEGER,
        ioRegister: INTEGER,
        ioRegisterAbort: INTEGER,
        ioRegisterCancel: INTEGER,
        dataPathResumed: INTEGER,
        dataPathSuspended: INTEGER,
        fastData: INTEGER,
        resumeDataPath: INTEGER,
        sendBroadcastData: INTEGER,
        sendData: INTEGER,
        sendMulticastData: INTEGER,
        startDataPath: INTEGER,
        stopDataPath: INTEGER,
        suspendDataPath: INTEGER,
        concatenateMsg: INTEGER,
        deleteMsg: INTEGER,
        playMsg: INTEGER,
        queryVoiceAttribute: INTEGER,
        recordMsg: INTEGER,
        reposition: INTEGER,
        resume: INTEGER,
        review: INTEGER,
        setVoiceAttribute: INTEGER,
        stop: INTEGER,
        suspend: INTEGER,
        synthesizeMsg: INTEGER,
        cDRNotification: INTEGER,
        cDRReport: INTEGER,
        sendStoredCDRs: INTEGER,
        startCDRTransmission: INTEGER,
        stopCDRTransmission: INTEGER,
        escapeRegister: INTEGER,
        escapeRegisterAbort: INTEGER,
        escapeRegisterCancel: INTEGER,
        escape: INTEGER,
        privateDataVersion: INTEGER
    ) {
        this.getLogicalDeviceInformation = getLogicalDeviceInformation;
        this.getPhysicalDeviceInformation = getPhysicalDeviceInformation;
        this.getSwitchingFunctionCaps = getSwitchingFunctionCaps;
        this.getSwitchingFunctionDevices = getSwitchingFunctionDevices;
        this.switchingFunctionDevices = switchingFunctionDevices;
        this.changeSystemStatusFilter = changeSystemStatusFilter;
        this.systemStatusRegister = systemStatusRegister;
        this.systemStatusRegisterAbort = systemStatusRegisterAbort;
        this.systemStatusRegisterCancel = systemStatusRegisterCancel;
        this.requestSystemStatus = requestSystemStatus;
        this.systemStatus = systemStatus;
        this.switchingFunctionCapsChanged = switchingFunctionCapsChanged;
        this.switchingFunctionDevsChanged = switchingFunctionDevsChanged;
        this.changeMonitorFilter = changeMonitorFilter;
        this.monitorStart = monitorStart;
        this.monitorStop = monitorStop;
        this.snapshotCall = snapshotCall;
        this.snapshotDevice = snapshotDevice;
        this.snapshotCallData = snapshotCallData;
        this.snapshotDeviceData = snapshotDeviceData;
        this.acceptCall = acceptCall;
        this.alternateCall = alternateCall;
        this.answerCall = answerCall;
        this.callBackCallRelated = callBackCallRelated;
        this.callBackMessageCallRelated = callBackMessageCallRelated;
        this.campOnCall = campOnCall;
        this.clearCall = clearCall;
        this.clearConnection = clearConnection;
        this.conferenceCall = conferenceCall;
        this.consultationCall = consultationCall;
        this.deflectCall = deflectCall;
        this.dialDigits = dialDigits;
        this.directedPickupCall = directedPickupCall;
        this.groupPickupCall = groupPickupCall;
        this.holdCall = holdCall;
        this.intrudeCall = intrudeCall;
        this.joinCall = joinCall;
        this.makeCall = makeCall;
        this.makePredictiveCall = makePredictiveCall;
        this.parkCall = parkCall;
        this.reconnectCall = reconnectCall;
        this.retrieveCall = retrieveCall;
        this.singleStepConferenceCall = singleStepConferenceCall;
        this.singleStepTransferCall = singleStepTransferCall;
        this.transferCall = transferCall;
        this.associateData = associateData;
        this.cancelTelephonyTone = cancelTelephonyTone;
        this.generateDigits = generateDigits;
        this.generateTelephonyTone = generateTelephonyTone;
        this.sendUserInformation = sendUserInformation;
        this.startDTMFDigitsCollection = startDTMFDigitsCollection;
        this.startTelephonyTonesCollection = startTelephonyTonesCollection;
        this.stopDTMFDigitsCollection = stopDTMFDigitsCollection;
        this.stopTelephonyTonesCollection = stopTelephonyTonesCollection;
        this.attachMediaService = attachMediaService;
        this.detachMediaService = detachMediaService;
        this.routeRegister = routeRegister;
        this.routeRegisterAbort = routeRegisterAbort;
        this.routeRegisterCancel = routeRegisterCancel;
        this.reRoute = reRoute;
        this.routeEnd = routeEnd;
        this.routeReject = routeReject;
        this.routeRequest = routeRequest;
        this.routeSelect = routeSelect;
        this.routeUsed = routeUsed;
        this.buttonPress = buttonPress;
        this.getAuditoryApparatusInfo = getAuditoryApparatusInfo;
        this.getButtonInformation = getButtonInformation;
        this.getDisplay = getDisplay;
        this.getHookswitchStatus = getHookswitchStatus;
        this.getLampInformation = getLampInformation;
        this.getLampMode = getLampMode;
        this.getMicrophoneGain = getMicrophoneGain;
        this.getMicrophoneMute = getMicrophoneMute;
        this.getMessageWaitingIndicator = getMessageWaitingIndicator;
        this.getRingerStatus = getRingerStatus;
        this.getSpeakerMute = getSpeakerMute;
        this.getSpeakerVolume = getSpeakerVolume;
        this.setButtonInformation = setButtonInformation;
        this.setDisplay = setDisplay;
        this.setHookswitchStatus = setHookswitchStatus;
        this.setLampMode = setLampMode;
        this.setMsgWaitingIndicator = setMsgWaitingIndicator;
        this.setMicrophoneGain = setMicrophoneGain;
        this.setMicrophoneMute = setMicrophoneMute;
        this.setRingerStatus = setRingerStatus;
        this.setSpeakerMute = setSpeakerMute;
        this.setSpeakerVolume = setSpeakerVolume;
        this.callBackMessageNonCallRelated = callBackMessageNonCallRelated;
        this.callBackNonCallRelated = callBackNonCallRelated;
        this.cancelCallBack = cancelCallBack;
        this.cancelCallBackMessage = cancelCallBackMessage;
        this.getAgentState = getAgentState;
        this.getAutoAnswer = getAutoAnswer;
        this.getAutoWorkMode = getAutoWorkMode;
        this.getCallerIDStatus = getCallerIDStatus;
        this.getDoNotDisturb = getDoNotDisturb;
        this.getForwarding = getForwarding;
        this.getLastNumberDialed = getLastNumberDialed;
        this.getRouteingMode = getRouteingMode;
        this.setAgentState = setAgentState;
        this.setAutoAnswer = setAutoAnswer;
        this.setAutoWorkMode = setAutoWorkMode;
        this.setCallerIDStatus = setCallerIDStatus;
        this.setDoNotDisturb = setDoNotDisturb;
        this.setForwarding = setForwarding;
        this.setRouteingMode = setRouteingMode;
        this.backInService = backInService;
        this.deviceCaosChanged = deviceCaosChanged;
        this.outOfService = outOfService;
        this.partiallyInService = partiallyInService;
        this.ioRegister = ioRegister;
        this.ioRegisterAbort = ioRegisterAbort;
        this.ioRegisterCancel = ioRegisterCancel;
        this.dataPathResumed = dataPathResumed;
        this.dataPathSuspended = dataPathSuspended;
        this.fastData = fastData;
        this.resumeDataPath = resumeDataPath;
        this.sendBroadcastData = sendBroadcastData;
        this.sendData = sendData;
        this.sendMulticastData = sendMulticastData;
        this.startDataPath = startDataPath;
        this.stopDataPath = stopDataPath;
        this.suspendDataPath = suspendDataPath;
        this.concatenateMsg = concatenateMsg;
        this.deleteMsg = deleteMsg;
        this.playMsg = playMsg;
        this.queryVoiceAttribute = queryVoiceAttribute;
        this.recordMsg = recordMsg;
        this.reposition = reposition;
        this.resume = resume;
        this.review = review;
        this.setVoiceAttribute = setVoiceAttribute;
        this.stop = stop;
        this.suspend = suspend;
        this.synthesizeMsg = synthesizeMsg;
        this.cDRNotification = cDRNotification;
        this.cDRReport = cDRReport;
        this.sendStoredCDRs = sendStoredCDRs;
        this.startCDRTransmission = startCDRTransmission;
        this.stopCDRTransmission = stopCDRTransmission;
        this.escapeRegister = escapeRegister;
        this.escapeRegisterAbort = escapeRegisterAbort;
        this.escapeRegisterCancel = escapeRegisterCancel;
        this.escape = escape;
        this.privateDataVersion = privateDataVersion;
    }

    /**
     * @summary Restructures an object into a FilterThreshold
     * @description
     * 
     * This takes an `object` and converts it to a `FilterThreshold`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FilterThreshold`.
     * @returns {FilterThreshold}
     */
    public static _from_object (_o: { [_K in keyof (FilterThreshold)]: (FilterThreshold)[_K] }): FilterThreshold {
        return new FilterThreshold(_o.getLogicalDeviceInformation, _o.getPhysicalDeviceInformation, _o.getSwitchingFunctionCaps, _o.getSwitchingFunctionDevices, _o.switchingFunctionDevices, _o.changeSystemStatusFilter, _o.systemStatusRegister, _o.systemStatusRegisterAbort, _o.systemStatusRegisterCancel, _o.requestSystemStatus, _o.systemStatus, _o.switchingFunctionCapsChanged, _o.switchingFunctionDevsChanged, _o.changeMonitorFilter, _o.monitorStart, _o.monitorStop, _o.snapshotCall, _o.snapshotDevice, _o.snapshotCallData, _o.snapshotDeviceData, _o.acceptCall, _o.alternateCall, _o.answerCall, _o.callBackCallRelated, _o.callBackMessageCallRelated, _o.campOnCall, _o.clearCall, _o.clearConnection, _o.conferenceCall, _o.consultationCall, _o.deflectCall, _o.dialDigits, _o.directedPickupCall, _o.groupPickupCall, _o.holdCall, _o.intrudeCall, _o.joinCall, _o.makeCall, _o.makePredictiveCall, _o.parkCall, _o.reconnectCall, _o.retrieveCall, _o.singleStepConferenceCall, _o.singleStepTransferCall, _o.transferCall, _o.associateData, _o.cancelTelephonyTone, _o.generateDigits, _o.generateTelephonyTone, _o.sendUserInformation, _o.startDTMFDigitsCollection, _o.startTelephonyTonesCollection, _o.stopDTMFDigitsCollection, _o.stopTelephonyTonesCollection, _o.attachMediaService, _o.detachMediaService, _o.routeRegister, _o.routeRegisterAbort, _o.routeRegisterCancel, _o.reRoute, _o.routeEnd, _o.routeReject, _o.routeRequest, _o.routeSelect, _o.routeUsed, _o.buttonPress, _o.getAuditoryApparatusInfo, _o.getButtonInformation, _o.getDisplay, _o.getHookswitchStatus, _o.getLampInformation, _o.getLampMode, _o.getMicrophoneGain, _o.getMicrophoneMute, _o.getMessageWaitingIndicator, _o.getRingerStatus, _o.getSpeakerMute, _o.getSpeakerVolume, _o.setButtonInformation, _o.setDisplay, _o.setHookswitchStatus, _o.setLampMode, _o.setMsgWaitingIndicator, _o.setMicrophoneGain, _o.setMicrophoneMute, _o.setRingerStatus, _o.setSpeakerMute, _o.setSpeakerVolume, _o.callBackMessageNonCallRelated, _o.callBackNonCallRelated, _o.cancelCallBack, _o.cancelCallBackMessage, _o.getAgentState, _o.getAutoAnswer, _o.getAutoWorkMode, _o.getCallerIDStatus, _o.getDoNotDisturb, _o.getForwarding, _o.getLastNumberDialed, _o.getRouteingMode, _o.setAgentState, _o.setAutoAnswer, _o.setAutoWorkMode, _o.setCallerIDStatus, _o.setDoNotDisturb, _o.setForwarding, _o.setRouteingMode, _o.backInService, _o.deviceCaosChanged, _o.outOfService, _o.partiallyInService, _o.ioRegister, _o.ioRegisterAbort, _o.ioRegisterCancel, _o.dataPathResumed, _o.dataPathSuspended, _o.fastData, _o.resumeDataPath, _o.sendBroadcastData, _o.sendData, _o.sendMulticastData, _o.startDataPath, _o.stopDataPath, _o.suspendDataPath, _o.concatenateMsg, _o.deleteMsg, _o.playMsg, _o.queryVoiceAttribute, _o.recordMsg, _o.reposition, _o.resume, _o.review, _o.setVoiceAttribute, _o.stop, _o.suspend, _o.synthesizeMsg, _o.cDRNotification, _o.cDRReport, _o.sendStoredCDRs, _o.startCDRTransmission, _o.stopCDRTransmission, _o.escapeRegister, _o.escapeRegisterAbort, _o.escapeRegisterCancel, _o.escape, _o.privateDataVersion);
    }


}

/**
 * @summary The Leading Root Component Types of FilterThreshold
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FilterThreshold: $.ComponentSpec[] = [
    new $.ComponentSpec("getLogicalDeviceInformation", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("getPhysicalDeviceInformation", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("getSwitchingFunctionCaps", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("getSwitchingFunctionDevices", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("switchingFunctionDevices", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("changeSystemStatusFilter", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("systemStatusRegister", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("systemStatusRegisterAbort", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("systemStatusRegisterCancel", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("requestSystemStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("systemStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("switchingFunctionCapsChanged", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("switchingFunctionDevsChanged", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("changeMonitorFilter", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("monitorStart", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("monitorStop", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("snapshotCall", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("snapshotDevice", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("snapshotCallData", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("snapshotDeviceData", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("acceptCall", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("alternateCall", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("answerCall", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("callBackCallRelated", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("callBackMessageCallRelated", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("campOnCall", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("clearCall", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("clearConnection", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("conferenceCall", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("consultationCall", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("deflectCall", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("dialDigits", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("directedPickupCall", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("groupPickupCall", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("holdCall", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("intrudeCall", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("joinCall", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("makeCall", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("makePredictiveCall", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parkCall", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("reconnectCall", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("retrieveCall", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("singleStepConferenceCall", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("singleStepTransferCall", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("transferCall", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("associateData", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("cancelTelephonyTone", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("generateDigits", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("generateTelephonyTone", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("sendUserInformation", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("startDTMFDigitsCollection", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("startTelephonyTonesCollection", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("stopDTMFDigitsCollection", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("stopTelephonyTonesCollection", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("attachMediaService", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("detachMediaService", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("routeRegister", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("routeRegisterAbort", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("routeRegisterCancel", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("reRoute", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("routeEnd", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("routeReject", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("routeRequest", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("routeSelect", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("routeUsed", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("buttonPress", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("getAuditoryApparatusInfo", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("getButtonInformation", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("getDisplay", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("getHookswitchStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("getLampInformation", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("getLampMode", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("getMicrophoneGain", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("getMicrophoneMute", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("getMessageWaitingIndicator", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("getRingerStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("getSpeakerMute", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("getSpeakerVolume", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("setButtonInformation", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("setDisplay", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("setHookswitchStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("setLampMode", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("setMsgWaitingIndicator", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("setMicrophoneGain", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("setMicrophoneMute", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("setRingerStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("setSpeakerMute", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("setSpeakerVolume", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("callBackMessageNonCallRelated", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("callBackNonCallRelated", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("cancelCallBack", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("cancelCallBackMessage", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("getAgentState", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("getAutoAnswer", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("getAutoWorkMode", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("getCallerIDStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("getDoNotDisturb", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("getForwarding", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("getLastNumberDialed", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("getRouteingMode", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("setAgentState", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("setAutoAnswer", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("setAutoWorkMode", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("setCallerIDStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("setDoNotDisturb", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("setForwarding", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("setRouteingMode", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("backInService", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("deviceCaosChanged", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("outOfService", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("partiallyInService", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("ioRegister", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("ioRegisterAbort", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("ioRegisterCancel", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("dataPathResumed", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("dataPathSuspended", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("fastData", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("resumeDataPath", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("sendBroadcastData", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("sendData", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("sendMulticastData", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("startDataPath", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("stopDataPath", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("suspendDataPath", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("concatenateMsg", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("deleteMsg", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("playMsg", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("queryVoiceAttribute", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("recordMsg", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("reposition", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("resume", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("review", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("setVoiceAttribute", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("stop", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("suspend", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("synthesizeMsg", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("cDRNotification", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("cDRReport", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("sendStoredCDRs", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("startCDRTransmission", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("stopCDRTransmission", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("escapeRegister", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("escapeRegisterAbort", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("escapeRegisterCancel", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("escape", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("privateDataVersion", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FilterThreshold
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FilterThreshold: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FilterThreshold
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FilterThreshold: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FilterThreshold: $.ASN1Decoder<FilterThreshold> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FilterThreshold
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FilterThreshold (el: _Element): FilterThreshold {
    if (!_cached_decoder_for_FilterThreshold) { _cached_decoder_for_FilterThreshold = function (el: _Element): FilterThreshold {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 146) {
        throw new _ConstructionError("FilterThreshold contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "getLogicalDeviceInformation";
    sequence[1].name = "getPhysicalDeviceInformation";
    sequence[2].name = "getSwitchingFunctionCaps";
    sequence[3].name = "getSwitchingFunctionDevices";
    sequence[4].name = "switchingFunctionDevices";
    sequence[5].name = "changeSystemStatusFilter";
    sequence[6].name = "systemStatusRegister";
    sequence[7].name = "systemStatusRegisterAbort";
    sequence[8].name = "systemStatusRegisterCancel";
    sequence[9].name = "requestSystemStatus";
    sequence[10].name = "systemStatus";
    sequence[11].name = "switchingFunctionCapsChanged";
    sequence[12].name = "switchingFunctionDevsChanged";
    sequence[13].name = "changeMonitorFilter";
    sequence[14].name = "monitorStart";
    sequence[15].name = "monitorStop";
    sequence[16].name = "snapshotCall";
    sequence[17].name = "snapshotDevice";
    sequence[18].name = "snapshotCallData";
    sequence[19].name = "snapshotDeviceData";
    sequence[20].name = "acceptCall";
    sequence[21].name = "alternateCall";
    sequence[22].name = "answerCall";
    sequence[23].name = "callBackCallRelated";
    sequence[24].name = "callBackMessageCallRelated";
    sequence[25].name = "campOnCall";
    sequence[26].name = "clearCall";
    sequence[27].name = "clearConnection";
    sequence[28].name = "conferenceCall";
    sequence[29].name = "consultationCall";
    sequence[30].name = "deflectCall";
    sequence[31].name = "dialDigits";
    sequence[32].name = "directedPickupCall";
    sequence[33].name = "groupPickupCall";
    sequence[34].name = "holdCall";
    sequence[35].name = "intrudeCall";
    sequence[36].name = "joinCall";
    sequence[37].name = "makeCall";
    sequence[38].name = "makePredictiveCall";
    sequence[39].name = "parkCall";
    sequence[40].name = "reconnectCall";
    sequence[41].name = "retrieveCall";
    sequence[42].name = "singleStepConferenceCall";
    sequence[43].name = "singleStepTransferCall";
    sequence[44].name = "transferCall";
    sequence[45].name = "associateData";
    sequence[46].name = "cancelTelephonyTone";
    sequence[47].name = "generateDigits";
    sequence[48].name = "generateTelephonyTone";
    sequence[49].name = "sendUserInformation";
    sequence[50].name = "startDTMFDigitsCollection";
    sequence[51].name = "startTelephonyTonesCollection";
    sequence[52].name = "stopDTMFDigitsCollection";
    sequence[53].name = "stopTelephonyTonesCollection";
    sequence[54].name = "attachMediaService";
    sequence[55].name = "detachMediaService";
    sequence[56].name = "routeRegister";
    sequence[57].name = "routeRegisterAbort";
    sequence[58].name = "routeRegisterCancel";
    sequence[59].name = "reRoute";
    sequence[60].name = "routeEnd";
    sequence[61].name = "routeReject";
    sequence[62].name = "routeRequest";
    sequence[63].name = "routeSelect";
    sequence[64].name = "routeUsed";
    sequence[65].name = "buttonPress";
    sequence[66].name = "getAuditoryApparatusInfo";
    sequence[67].name = "getButtonInformation";
    sequence[68].name = "getDisplay";
    sequence[69].name = "getHookswitchStatus";
    sequence[70].name = "getLampInformation";
    sequence[71].name = "getLampMode";
    sequence[72].name = "getMicrophoneGain";
    sequence[73].name = "getMicrophoneMute";
    sequence[74].name = "getMessageWaitingIndicator";
    sequence[75].name = "getRingerStatus";
    sequence[76].name = "getSpeakerMute";
    sequence[77].name = "getSpeakerVolume";
    sequence[78].name = "setButtonInformation";
    sequence[79].name = "setDisplay";
    sequence[80].name = "setHookswitchStatus";
    sequence[81].name = "setLampMode";
    sequence[82].name = "setMsgWaitingIndicator";
    sequence[83].name = "setMicrophoneGain";
    sequence[84].name = "setMicrophoneMute";
    sequence[85].name = "setRingerStatus";
    sequence[86].name = "setSpeakerMute";
    sequence[87].name = "setSpeakerVolume";
    sequence[88].name = "callBackMessageNonCallRelated";
    sequence[89].name = "callBackNonCallRelated";
    sequence[90].name = "cancelCallBack";
    sequence[91].name = "cancelCallBackMessage";
    sequence[92].name = "getAgentState";
    sequence[93].name = "getAutoAnswer";
    sequence[94].name = "getAutoWorkMode";
    sequence[95].name = "getCallerIDStatus";
    sequence[96].name = "getDoNotDisturb";
    sequence[97].name = "getForwarding";
    sequence[98].name = "getLastNumberDialed";
    sequence[99].name = "getRouteingMode";
    sequence[100].name = "setAgentState";
    sequence[101].name = "setAutoAnswer";
    sequence[102].name = "setAutoWorkMode";
    sequence[103].name = "setCallerIDStatus";
    sequence[104].name = "setDoNotDisturb";
    sequence[105].name = "setForwarding";
    sequence[106].name = "setRouteingMode";
    sequence[107].name = "backInService";
    sequence[108].name = "deviceCaosChanged";
    sequence[109].name = "outOfService";
    sequence[110].name = "partiallyInService";
    sequence[111].name = "ioRegister";
    sequence[112].name = "ioRegisterAbort";
    sequence[113].name = "ioRegisterCancel";
    sequence[114].name = "dataPathResumed";
    sequence[115].name = "dataPathSuspended";
    sequence[116].name = "fastData";
    sequence[117].name = "resumeDataPath";
    sequence[118].name = "sendBroadcastData";
    sequence[119].name = "sendData";
    sequence[120].name = "sendMulticastData";
    sequence[121].name = "startDataPath";
    sequence[122].name = "stopDataPath";
    sequence[123].name = "suspendDataPath";
    sequence[124].name = "concatenateMsg";
    sequence[125].name = "deleteMsg";
    sequence[126].name = "playMsg";
    sequence[127].name = "queryVoiceAttribute";
    sequence[128].name = "recordMsg";
    sequence[129].name = "reposition";
    sequence[130].name = "resume";
    sequence[131].name = "review";
    sequence[132].name = "setVoiceAttribute";
    sequence[133].name = "stop";
    sequence[134].name = "suspend";
    sequence[135].name = "synthesizeMsg";
    sequence[136].name = "cDRNotification";
    sequence[137].name = "cDRReport";
    sequence[138].name = "sendStoredCDRs";
    sequence[139].name = "startCDRTransmission";
    sequence[140].name = "stopCDRTransmission";
    sequence[141].name = "escapeRegister";
    sequence[142].name = "escapeRegisterAbort";
    sequence[143].name = "escapeRegisterCancel";
    sequence[144].name = "escape";
    sequence[145].name = "privateDataVersion";
    let getLogicalDeviceInformation!: INTEGER;
    let getPhysicalDeviceInformation!: INTEGER;
    let getSwitchingFunctionCaps!: INTEGER;
    let getSwitchingFunctionDevices!: INTEGER;
    let switchingFunctionDevices!: INTEGER;
    let changeSystemStatusFilter!: INTEGER;
    let systemStatusRegister!: INTEGER;
    let systemStatusRegisterAbort!: INTEGER;
    let systemStatusRegisterCancel!: INTEGER;
    let requestSystemStatus!: INTEGER;
    let systemStatus!: INTEGER;
    let switchingFunctionCapsChanged!: INTEGER;
    let switchingFunctionDevsChanged!: INTEGER;
    let changeMonitorFilter!: INTEGER;
    let monitorStart!: INTEGER;
    let monitorStop!: INTEGER;
    let snapshotCall!: INTEGER;
    let snapshotDevice!: INTEGER;
    let snapshotCallData!: INTEGER;
    let snapshotDeviceData!: INTEGER;
    let acceptCall!: INTEGER;
    let alternateCall!: INTEGER;
    let answerCall!: INTEGER;
    let callBackCallRelated!: INTEGER;
    let callBackMessageCallRelated!: INTEGER;
    let campOnCall!: INTEGER;
    let clearCall!: INTEGER;
    let clearConnection!: INTEGER;
    let conferenceCall!: INTEGER;
    let consultationCall!: INTEGER;
    let deflectCall!: INTEGER;
    let dialDigits!: INTEGER;
    let directedPickupCall!: INTEGER;
    let groupPickupCall!: INTEGER;
    let holdCall!: INTEGER;
    let intrudeCall!: INTEGER;
    let joinCall!: INTEGER;
    let makeCall!: INTEGER;
    let makePredictiveCall!: INTEGER;
    let parkCall!: INTEGER;
    let reconnectCall!: INTEGER;
    let retrieveCall!: INTEGER;
    let singleStepConferenceCall!: INTEGER;
    let singleStepTransferCall!: INTEGER;
    let transferCall!: INTEGER;
    let associateData!: INTEGER;
    let cancelTelephonyTone!: INTEGER;
    let generateDigits!: INTEGER;
    let generateTelephonyTone!: INTEGER;
    let sendUserInformation!: INTEGER;
    let startDTMFDigitsCollection!: INTEGER;
    let startTelephonyTonesCollection!: INTEGER;
    let stopDTMFDigitsCollection!: INTEGER;
    let stopTelephonyTonesCollection!: INTEGER;
    let attachMediaService!: INTEGER;
    let detachMediaService!: INTEGER;
    let routeRegister!: INTEGER;
    let routeRegisterAbort!: INTEGER;
    let routeRegisterCancel!: INTEGER;
    let reRoute!: INTEGER;
    let routeEnd!: INTEGER;
    let routeReject!: INTEGER;
    let routeRequest!: INTEGER;
    let routeSelect!: INTEGER;
    let routeUsed!: INTEGER;
    let buttonPress!: INTEGER;
    let getAuditoryApparatusInfo!: INTEGER;
    let getButtonInformation!: INTEGER;
    let getDisplay!: INTEGER;
    let getHookswitchStatus!: INTEGER;
    let getLampInformation!: INTEGER;
    let getLampMode!: INTEGER;
    let getMicrophoneGain!: INTEGER;
    let getMicrophoneMute!: INTEGER;
    let getMessageWaitingIndicator!: INTEGER;
    let getRingerStatus!: INTEGER;
    let getSpeakerMute!: INTEGER;
    let getSpeakerVolume!: INTEGER;
    let setButtonInformation!: INTEGER;
    let setDisplay!: INTEGER;
    let setHookswitchStatus!: INTEGER;
    let setLampMode!: INTEGER;
    let setMsgWaitingIndicator!: INTEGER;
    let setMicrophoneGain!: INTEGER;
    let setMicrophoneMute!: INTEGER;
    let setRingerStatus!: INTEGER;
    let setSpeakerMute!: INTEGER;
    let setSpeakerVolume!: INTEGER;
    let callBackMessageNonCallRelated!: INTEGER;
    let callBackNonCallRelated!: INTEGER;
    let cancelCallBack!: INTEGER;
    let cancelCallBackMessage!: INTEGER;
    let getAgentState!: INTEGER;
    let getAutoAnswer!: INTEGER;
    let getAutoWorkMode!: INTEGER;
    let getCallerIDStatus!: INTEGER;
    let getDoNotDisturb!: INTEGER;
    let getForwarding!: INTEGER;
    let getLastNumberDialed!: INTEGER;
    let getRouteingMode!: INTEGER;
    let setAgentState!: INTEGER;
    let setAutoAnswer!: INTEGER;
    let setAutoWorkMode!: INTEGER;
    let setCallerIDStatus!: INTEGER;
    let setDoNotDisturb!: INTEGER;
    let setForwarding!: INTEGER;
    let setRouteingMode!: INTEGER;
    let backInService!: INTEGER;
    let deviceCaosChanged!: INTEGER;
    let outOfService!: INTEGER;
    let partiallyInService!: INTEGER;
    let ioRegister!: INTEGER;
    let ioRegisterAbort!: INTEGER;
    let ioRegisterCancel!: INTEGER;
    let dataPathResumed!: INTEGER;
    let dataPathSuspended!: INTEGER;
    let fastData!: INTEGER;
    let resumeDataPath!: INTEGER;
    let sendBroadcastData!: INTEGER;
    let sendData!: INTEGER;
    let sendMulticastData!: INTEGER;
    let startDataPath!: INTEGER;
    let stopDataPath!: INTEGER;
    let suspendDataPath!: INTEGER;
    let concatenateMsg!: INTEGER;
    let deleteMsg!: INTEGER;
    let playMsg!: INTEGER;
    let queryVoiceAttribute!: INTEGER;
    let recordMsg!: INTEGER;
    let reposition!: INTEGER;
    let resume!: INTEGER;
    let review!: INTEGER;
    let setVoiceAttribute!: INTEGER;
    let stop!: INTEGER;
    let suspend!: INTEGER;
    let synthesizeMsg!: INTEGER;
    let cDRNotification!: INTEGER;
    let cDRReport!: INTEGER;
    let sendStoredCDRs!: INTEGER;
    let startCDRTransmission!: INTEGER;
    let stopCDRTransmission!: INTEGER;
    let escapeRegister!: INTEGER;
    let escapeRegisterAbort!: INTEGER;
    let escapeRegisterCancel!: INTEGER;
    let escape!: INTEGER;
    let privateDataVersion!: INTEGER;
    getLogicalDeviceInformation = $._decodeInteger(sequence[0]);
    getPhysicalDeviceInformation = $._decodeInteger(sequence[1]);
    getSwitchingFunctionCaps = $._decodeInteger(sequence[2]);
    getSwitchingFunctionDevices = $._decodeInteger(sequence[3]);
    switchingFunctionDevices = $._decodeInteger(sequence[4]);
    changeSystemStatusFilter = $._decodeInteger(sequence[5]);
    systemStatusRegister = $._decodeInteger(sequence[6]);
    systemStatusRegisterAbort = $._decodeInteger(sequence[7]);
    systemStatusRegisterCancel = $._decodeInteger(sequence[8]);
    requestSystemStatus = $._decodeInteger(sequence[9]);
    systemStatus = $._decodeInteger(sequence[10]);
    switchingFunctionCapsChanged = $._decodeInteger(sequence[11]);
    switchingFunctionDevsChanged = $._decodeInteger(sequence[12]);
    changeMonitorFilter = $._decodeInteger(sequence[13]);
    monitorStart = $._decodeInteger(sequence[14]);
    monitorStop = $._decodeInteger(sequence[15]);
    snapshotCall = $._decodeInteger(sequence[16]);
    snapshotDevice = $._decodeInteger(sequence[17]);
    snapshotCallData = $._decodeInteger(sequence[18]);
    snapshotDeviceData = $._decodeInteger(sequence[19]);
    acceptCall = $._decodeInteger(sequence[20]);
    alternateCall = $._decodeInteger(sequence[21]);
    answerCall = $._decodeInteger(sequence[22]);
    callBackCallRelated = $._decodeInteger(sequence[23]);
    callBackMessageCallRelated = $._decodeInteger(sequence[24]);
    campOnCall = $._decodeInteger(sequence[25]);
    clearCall = $._decodeInteger(sequence[26]);
    clearConnection = $._decodeInteger(sequence[27]);
    conferenceCall = $._decodeInteger(sequence[28]);
    consultationCall = $._decodeInteger(sequence[29]);
    deflectCall = $._decodeInteger(sequence[30]);
    dialDigits = $._decodeInteger(sequence[31]);
    directedPickupCall = $._decodeInteger(sequence[32]);
    groupPickupCall = $._decodeInteger(sequence[33]);
    holdCall = $._decodeInteger(sequence[34]);
    intrudeCall = $._decodeInteger(sequence[35]);
    joinCall = $._decodeInteger(sequence[36]);
    makeCall = $._decodeInteger(sequence[37]);
    makePredictiveCall = $._decodeInteger(sequence[38]);
    parkCall = $._decodeInteger(sequence[39]);
    reconnectCall = $._decodeInteger(sequence[40]);
    retrieveCall = $._decodeInteger(sequence[41]);
    singleStepConferenceCall = $._decodeInteger(sequence[42]);
    singleStepTransferCall = $._decodeInteger(sequence[43]);
    transferCall = $._decodeInteger(sequence[44]);
    associateData = $._decodeInteger(sequence[45]);
    cancelTelephonyTone = $._decodeInteger(sequence[46]);
    generateDigits = $._decodeInteger(sequence[47]);
    generateTelephonyTone = $._decodeInteger(sequence[48]);
    sendUserInformation = $._decodeInteger(sequence[49]);
    startDTMFDigitsCollection = $._decodeInteger(sequence[50]);
    startTelephonyTonesCollection = $._decodeInteger(sequence[51]);
    stopDTMFDigitsCollection = $._decodeInteger(sequence[52]);
    stopTelephonyTonesCollection = $._decodeInteger(sequence[53]);
    attachMediaService = $._decodeInteger(sequence[54]);
    detachMediaService = $._decodeInteger(sequence[55]);
    routeRegister = $._decodeInteger(sequence[56]);
    routeRegisterAbort = $._decodeInteger(sequence[57]);
    routeRegisterCancel = $._decodeInteger(sequence[58]);
    reRoute = $._decodeInteger(sequence[59]);
    routeEnd = $._decodeInteger(sequence[60]);
    routeReject = $._decodeInteger(sequence[61]);
    routeRequest = $._decodeInteger(sequence[62]);
    routeSelect = $._decodeInteger(sequence[63]);
    routeUsed = $._decodeInteger(sequence[64]);
    buttonPress = $._decodeInteger(sequence[65]);
    getAuditoryApparatusInfo = $._decodeInteger(sequence[66]);
    getButtonInformation = $._decodeInteger(sequence[67]);
    getDisplay = $._decodeInteger(sequence[68]);
    getHookswitchStatus = $._decodeInteger(sequence[69]);
    getLampInformation = $._decodeInteger(sequence[70]);
    getLampMode = $._decodeInteger(sequence[71]);
    getMicrophoneGain = $._decodeInteger(sequence[72]);
    getMicrophoneMute = $._decodeInteger(sequence[73]);
    getMessageWaitingIndicator = $._decodeInteger(sequence[74]);
    getRingerStatus = $._decodeInteger(sequence[75]);
    getSpeakerMute = $._decodeInteger(sequence[76]);
    getSpeakerVolume = $._decodeInteger(sequence[77]);
    setButtonInformation = $._decodeInteger(sequence[78]);
    setDisplay = $._decodeInteger(sequence[79]);
    setHookswitchStatus = $._decodeInteger(sequence[80]);
    setLampMode = $._decodeInteger(sequence[81]);
    setMsgWaitingIndicator = $._decodeInteger(sequence[82]);
    setMicrophoneGain = $._decodeInteger(sequence[83]);
    setMicrophoneMute = $._decodeInteger(sequence[84]);
    setRingerStatus = $._decodeInteger(sequence[85]);
    setSpeakerMute = $._decodeInteger(sequence[86]);
    setSpeakerVolume = $._decodeInteger(sequence[87]);
    callBackMessageNonCallRelated = $._decodeInteger(sequence[88]);
    callBackNonCallRelated = $._decodeInteger(sequence[89]);
    cancelCallBack = $._decodeInteger(sequence[90]);
    cancelCallBackMessage = $._decodeInteger(sequence[91]);
    getAgentState = $._decodeInteger(sequence[92]);
    getAutoAnswer = $._decodeInteger(sequence[93]);
    getAutoWorkMode = $._decodeInteger(sequence[94]);
    getCallerIDStatus = $._decodeInteger(sequence[95]);
    getDoNotDisturb = $._decodeInteger(sequence[96]);
    getForwarding = $._decodeInteger(sequence[97]);
    getLastNumberDialed = $._decodeInteger(sequence[98]);
    getRouteingMode = $._decodeInteger(sequence[99]);
    setAgentState = $._decodeInteger(sequence[100]);
    setAutoAnswer = $._decodeInteger(sequence[101]);
    setAutoWorkMode = $._decodeInteger(sequence[102]);
    setCallerIDStatus = $._decodeInteger(sequence[103]);
    setDoNotDisturb = $._decodeInteger(sequence[104]);
    setForwarding = $._decodeInteger(sequence[105]);
    setRouteingMode = $._decodeInteger(sequence[106]);
    backInService = $._decodeInteger(sequence[107]);
    deviceCaosChanged = $._decodeInteger(sequence[108]);
    outOfService = $._decodeInteger(sequence[109]);
    partiallyInService = $._decodeInteger(sequence[110]);
    ioRegister = $._decodeInteger(sequence[111]);
    ioRegisterAbort = $._decodeInteger(sequence[112]);
    ioRegisterCancel = $._decodeInteger(sequence[113]);
    dataPathResumed = $._decodeInteger(sequence[114]);
    dataPathSuspended = $._decodeInteger(sequence[115]);
    fastData = $._decodeInteger(sequence[116]);
    resumeDataPath = $._decodeInteger(sequence[117]);
    sendBroadcastData = $._decodeInteger(sequence[118]);
    sendData = $._decodeInteger(sequence[119]);
    sendMulticastData = $._decodeInteger(sequence[120]);
    startDataPath = $._decodeInteger(sequence[121]);
    stopDataPath = $._decodeInteger(sequence[122]);
    suspendDataPath = $._decodeInteger(sequence[123]);
    concatenateMsg = $._decodeInteger(sequence[124]);
    deleteMsg = $._decodeInteger(sequence[125]);
    playMsg = $._decodeInteger(sequence[126]);
    queryVoiceAttribute = $._decodeInteger(sequence[127]);
    recordMsg = $._decodeInteger(sequence[128]);
    reposition = $._decodeInteger(sequence[129]);
    resume = $._decodeInteger(sequence[130]);
    review = $._decodeInteger(sequence[131]);
    setVoiceAttribute = $._decodeInteger(sequence[132]);
    stop = $._decodeInteger(sequence[133]);
    suspend = $._decodeInteger(sequence[134]);
    synthesizeMsg = $._decodeInteger(sequence[135]);
    cDRNotification = $._decodeInteger(sequence[136]);
    cDRReport = $._decodeInteger(sequence[137]);
    sendStoredCDRs = $._decodeInteger(sequence[138]);
    startCDRTransmission = $._decodeInteger(sequence[139]);
    stopCDRTransmission = $._decodeInteger(sequence[140]);
    escapeRegister = $._decodeInteger(sequence[141]);
    escapeRegisterAbort = $._decodeInteger(sequence[142]);
    escapeRegisterCancel = $._decodeInteger(sequence[143]);
    escape = $._decodeInteger(sequence[144]);
    privateDataVersion = $._decodeInteger(sequence[145]);
    return new FilterThreshold(
        getLogicalDeviceInformation,
        getPhysicalDeviceInformation,
        getSwitchingFunctionCaps,
        getSwitchingFunctionDevices,
        switchingFunctionDevices,
        changeSystemStatusFilter,
        systemStatusRegister,
        systemStatusRegisterAbort,
        systemStatusRegisterCancel,
        requestSystemStatus,
        systemStatus,
        switchingFunctionCapsChanged,
        switchingFunctionDevsChanged,
        changeMonitorFilter,
        monitorStart,
        monitorStop,
        snapshotCall,
        snapshotDevice,
        snapshotCallData,
        snapshotDeviceData,
        acceptCall,
        alternateCall,
        answerCall,
        callBackCallRelated,
        callBackMessageCallRelated,
        campOnCall,
        clearCall,
        clearConnection,
        conferenceCall,
        consultationCall,
        deflectCall,
        dialDigits,
        directedPickupCall,
        groupPickupCall,
        holdCall,
        intrudeCall,
        joinCall,
        makeCall,
        makePredictiveCall,
        parkCall,
        reconnectCall,
        retrieveCall,
        singleStepConferenceCall,
        singleStepTransferCall,
        transferCall,
        associateData,
        cancelTelephonyTone,
        generateDigits,
        generateTelephonyTone,
        sendUserInformation,
        startDTMFDigitsCollection,
        startTelephonyTonesCollection,
        stopDTMFDigitsCollection,
        stopTelephonyTonesCollection,
        attachMediaService,
        detachMediaService,
        routeRegister,
        routeRegisterAbort,
        routeRegisterCancel,
        reRoute,
        routeEnd,
        routeReject,
        routeRequest,
        routeSelect,
        routeUsed,
        buttonPress,
        getAuditoryApparatusInfo,
        getButtonInformation,
        getDisplay,
        getHookswitchStatus,
        getLampInformation,
        getLampMode,
        getMicrophoneGain,
        getMicrophoneMute,
        getMessageWaitingIndicator,
        getRingerStatus,
        getSpeakerMute,
        getSpeakerVolume,
        setButtonInformation,
        setDisplay,
        setHookswitchStatus,
        setLampMode,
        setMsgWaitingIndicator,
        setMicrophoneGain,
        setMicrophoneMute,
        setRingerStatus,
        setSpeakerMute,
        setSpeakerVolume,
        callBackMessageNonCallRelated,
        callBackNonCallRelated,
        cancelCallBack,
        cancelCallBackMessage,
        getAgentState,
        getAutoAnswer,
        getAutoWorkMode,
        getCallerIDStatus,
        getDoNotDisturb,
        getForwarding,
        getLastNumberDialed,
        getRouteingMode,
        setAgentState,
        setAutoAnswer,
        setAutoWorkMode,
        setCallerIDStatus,
        setDoNotDisturb,
        setForwarding,
        setRouteingMode,
        backInService,
        deviceCaosChanged,
        outOfService,
        partiallyInService,
        ioRegister,
        ioRegisterAbort,
        ioRegisterCancel,
        dataPathResumed,
        dataPathSuspended,
        fastData,
        resumeDataPath,
        sendBroadcastData,
        sendData,
        sendMulticastData,
        startDataPath,
        stopDataPath,
        suspendDataPath,
        concatenateMsg,
        deleteMsg,
        playMsg,
        queryVoiceAttribute,
        recordMsg,
        reposition,
        resume,
        review,
        setVoiceAttribute,
        stop,
        suspend,
        synthesizeMsg,
        cDRNotification,
        cDRReport,
        sendStoredCDRs,
        startCDRTransmission,
        stopCDRTransmission,
        escapeRegister,
        escapeRegisterAbort,
        escapeRegisterCancel,
        escape,
        privateDataVersion,

    );
}; }
    return _cached_decoder_for_FilterThreshold(el);
}

let _cached_encoder_for_FilterThreshold: $.ASN1Encoder<FilterThreshold> | null = null;

/**
 * @summary Encodes a(n) FilterThreshold into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FilterThreshold, encoded as an ASN.1 Element.
 */
export
function _encode_FilterThreshold (value: FilterThreshold, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FilterThreshold) { _cached_encoder_for_FilterThreshold = function (value: FilterThreshold, elGetter: $.ASN1Encoder<FilterThreshold>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.getLogicalDeviceInformation, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.getPhysicalDeviceInformation, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.getSwitchingFunctionCaps, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.getSwitchingFunctionDevices, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.switchingFunctionDevices, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.changeSystemStatusFilter, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.systemStatusRegister, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.systemStatusRegisterAbort, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.systemStatusRegisterCancel, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.requestSystemStatus, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.systemStatus, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.switchingFunctionCapsChanged, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.switchingFunctionDevsChanged, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.changeMonitorFilter, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.monitorStart, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.monitorStop, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.snapshotCall, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.snapshotDevice, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.snapshotCallData, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.snapshotDeviceData, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.acceptCall, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.alternateCall, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.answerCall, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.callBackCallRelated, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.callBackMessageCallRelated, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.campOnCall, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.clearCall, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.clearConnection, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.conferenceCall, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.consultationCall, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.deflectCall, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.dialDigits, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.directedPickupCall, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.groupPickupCall, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.holdCall, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.intrudeCall, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.joinCall, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.makeCall, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.makePredictiveCall, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.parkCall, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.reconnectCall, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.retrieveCall, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.singleStepConferenceCall, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.singleStepTransferCall, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.transferCall, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.associateData, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.cancelTelephonyTone, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.generateDigits, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.generateTelephonyTone, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.sendUserInformation, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.startDTMFDigitsCollection, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.startTelephonyTonesCollection, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.stopDTMFDigitsCollection, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.stopTelephonyTonesCollection, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.attachMediaService, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.detachMediaService, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.routeRegister, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.routeRegisterAbort, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.routeRegisterCancel, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.reRoute, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.routeEnd, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.routeReject, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.routeRequest, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.routeSelect, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.routeUsed, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.buttonPress, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.getAuditoryApparatusInfo, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.getButtonInformation, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.getDisplay, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.getHookswitchStatus, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.getLampInformation, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.getLampMode, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.getMicrophoneGain, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.getMicrophoneMute, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.getMessageWaitingIndicator, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.getRingerStatus, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.getSpeakerMute, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.getSpeakerVolume, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.setButtonInformation, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.setDisplay, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.setHookswitchStatus, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.setLampMode, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.setMsgWaitingIndicator, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.setMicrophoneGain, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.setMicrophoneMute, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.setRingerStatus, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.setSpeakerMute, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.setSpeakerVolume, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.callBackMessageNonCallRelated, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.callBackNonCallRelated, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.cancelCallBack, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.cancelCallBackMessage, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.getAgentState, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.getAutoAnswer, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.getAutoWorkMode, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.getCallerIDStatus, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.getDoNotDisturb, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.getForwarding, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.getLastNumberDialed, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.getRouteingMode, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.setAgentState, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.setAutoAnswer, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.setAutoWorkMode, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.setCallerIDStatus, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.setDoNotDisturb, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.setForwarding, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.setRouteingMode, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.backInService, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.deviceCaosChanged, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.outOfService, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.partiallyInService, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.ioRegister, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.ioRegisterAbort, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.ioRegisterCancel, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.dataPathResumed, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.dataPathSuspended, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.fastData, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.resumeDataPath, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.sendBroadcastData, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.sendData, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.sendMulticastData, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.startDataPath, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.stopDataPath, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.suspendDataPath, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.concatenateMsg, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.deleteMsg, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.playMsg, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.queryVoiceAttribute, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.recordMsg, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.reposition, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.resume, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.review, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.setVoiceAttribute, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.stop, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.suspend, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.synthesizeMsg, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.cDRNotification, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.cDRReport, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.sendStoredCDRs, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.startCDRTransmission, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.stopCDRTransmission, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.escapeRegister, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.escapeRegisterAbort, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.escapeRegisterCancel, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.escape, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.privateDataVersion, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FilterThreshold(value, elGetter);
}


/* eslint-enable */
