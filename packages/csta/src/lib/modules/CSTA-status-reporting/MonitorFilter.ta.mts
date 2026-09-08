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
import { CallControlEvents, CallControlEvents_bridged /* IMPORTED_LONG_NAMED_BIT */, bridged /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_callCleared /* IMPORTED_LONG_NAMED_BIT */, callCleared /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_conferenced /* IMPORTED_LONG_NAMED_BIT */, conferenced /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_connectionCleared /* IMPORTED_LONG_NAMED_BIT */, connectionCleared /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_delivered /* IMPORTED_LONG_NAMED_BIT */, delivered /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_digitsDialed /* IMPORTED_LONG_NAMED_BIT */, digitsDialed /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_diverted /* IMPORTED_LONG_NAMED_BIT */, diverted /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_established /* IMPORTED_LONG_NAMED_BIT */, established /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_failed /* IMPORTED_LONG_NAMED_BIT */, failed /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_held /* IMPORTED_LONG_NAMED_BIT */, held /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_networkCapabilitiesChanged /* IMPORTED_LONG_NAMED_BIT */, networkCapabilitiesChanged /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_networkReached /* IMPORTED_LONG_NAMED_BIT */, networkReached /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_offered /* IMPORTED_LONG_NAMED_BIT */, offered /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_originated /* IMPORTED_LONG_NAMED_BIT */, originated /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_queued /* IMPORTED_LONG_NAMED_BIT */, queued /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_retrieved /* IMPORTED_LONG_NAMED_BIT */, retrieved /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_serviceInitiated /* IMPORTED_LONG_NAMED_BIT */, serviceInitiated /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_transferred /* IMPORTED_LONG_NAMED_BIT */, transferred /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallControlEvents, _encode_CallControlEvents } from "../CSTA-application-context-information-csta3/CallControlEvents.ta.mjs";
// export { CallControlEvents, CallControlEvents_bridged /* IMPORTED_LONG_NAMED_BIT */, bridged /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_callCleared /* IMPORTED_LONG_NAMED_BIT */, callCleared /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_conferenced /* IMPORTED_LONG_NAMED_BIT */, conferenced /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_connectionCleared /* IMPORTED_LONG_NAMED_BIT */, connectionCleared /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_delivered /* IMPORTED_LONG_NAMED_BIT */, delivered /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_digitsDialed /* IMPORTED_LONG_NAMED_BIT */, digitsDialed /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_diverted /* IMPORTED_LONG_NAMED_BIT */, diverted /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_established /* IMPORTED_LONG_NAMED_BIT */, established /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_failed /* IMPORTED_LONG_NAMED_BIT */, failed /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_held /* IMPORTED_LONG_NAMED_BIT */, held /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_networkCapabilitiesChanged /* IMPORTED_LONG_NAMED_BIT */, networkCapabilitiesChanged /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_networkReached /* IMPORTED_LONG_NAMED_BIT */, networkReached /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_offered /* IMPORTED_LONG_NAMED_BIT */, offered /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_originated /* IMPORTED_LONG_NAMED_BIT */, originated /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_queued /* IMPORTED_LONG_NAMED_BIT */, queued /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_retrieved /* IMPORTED_LONG_NAMED_BIT */, retrieved /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_serviceInitiated /* IMPORTED_LONG_NAMED_BIT */, serviceInitiated /* IMPORTED_SHORT_NAMED_BIT */, CallControlEvents_transferred /* IMPORTED_LONG_NAMED_BIT */, transferred /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallControlEvents, _encode_CallControlEvents } from "../CSTA-application-context-information-csta3/CallControlEvents.ta.mjs";
import { CallAssociatedEvents, CallAssociatedEvents_callInformation /* IMPORTED_LONG_NAMED_BIT */, callInformation /* IMPORTED_SHORT_NAMED_BIT */, CallAssociatedEvents_charging /* IMPORTED_LONG_NAMED_BIT */, charging /* IMPORTED_SHORT_NAMED_BIT */, CallAssociatedEvents_dTMFDigitsDetected /* IMPORTED_LONG_NAMED_BIT */, dTMFDigitsDetected /* IMPORTED_SHORT_NAMED_BIT */, CallAssociatedEvents_telephonyTonesDetected /* IMPORTED_LONG_NAMED_BIT */, telephonyTonesDetected /* IMPORTED_SHORT_NAMED_BIT */, CallAssociatedEvents_serviceCompletionFailure /* IMPORTED_LONG_NAMED_BIT */, serviceCompletionFailure /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallAssociatedEvents, _encode_CallAssociatedEvents } from "../CSTA-application-context-information-csta3/CallAssociatedEvents.ta.mjs";
// export { CallAssociatedEvents, CallAssociatedEvents_callInformation /* IMPORTED_LONG_NAMED_BIT */, callInformation /* IMPORTED_SHORT_NAMED_BIT */, CallAssociatedEvents_charging /* IMPORTED_LONG_NAMED_BIT */, charging /* IMPORTED_SHORT_NAMED_BIT */, CallAssociatedEvents_dTMFDigitsDetected /* IMPORTED_LONG_NAMED_BIT */, dTMFDigitsDetected /* IMPORTED_SHORT_NAMED_BIT */, CallAssociatedEvents_telephonyTonesDetected /* IMPORTED_LONG_NAMED_BIT */, telephonyTonesDetected /* IMPORTED_SHORT_NAMED_BIT */, CallAssociatedEvents_serviceCompletionFailure /* IMPORTED_LONG_NAMED_BIT */, serviceCompletionFailure /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallAssociatedEvents, _encode_CallAssociatedEvents } from "../CSTA-application-context-information-csta3/CallAssociatedEvents.ta.mjs";
import { MediaAttachmentEvents, MediaAttachmentEvents_mediaAttached /* IMPORTED_LONG_NAMED_BIT */, mediaAttached /* IMPORTED_SHORT_NAMED_BIT */, MediaAttachmentEvents_mediaDetached /* IMPORTED_LONG_NAMED_BIT */, mediaDetached /* IMPORTED_SHORT_NAMED_BIT */, _decode_MediaAttachmentEvents, _encode_MediaAttachmentEvents } from "../CSTA-application-context-information-csta3/MediaAttachmentEvents.ta.mjs";
// export { MediaAttachmentEvents, MediaAttachmentEvents_mediaAttached /* IMPORTED_LONG_NAMED_BIT */, mediaAttached /* IMPORTED_SHORT_NAMED_BIT */, MediaAttachmentEvents_mediaDetached /* IMPORTED_LONG_NAMED_BIT */, mediaDetached /* IMPORTED_SHORT_NAMED_BIT */, _decode_MediaAttachmentEvents, _encode_MediaAttachmentEvents } from "../CSTA-application-context-information-csta3/MediaAttachmentEvents.ta.mjs";
import { PhysicalDeviceFeatureEvents, PhysicalDeviceFeatureEvents_buttonInformation /* IMPORTED_LONG_NAMED_BIT */, buttonInformation /* IMPORTED_SHORT_NAMED_BIT */, PhysicalDeviceFeatureEvents_buttonPress /* IMPORTED_LONG_NAMED_BIT */, buttonPress /* IMPORTED_SHORT_NAMED_BIT */, PhysicalDeviceFeatureEvents_displayUpdated /* IMPORTED_LONG_NAMED_BIT */, displayUpdated /* IMPORTED_SHORT_NAMED_BIT */, PhysicalDeviceFeatureEvents_hookswitch /* IMPORTED_LONG_NAMED_BIT */, hookswitch /* IMPORTED_SHORT_NAMED_BIT */, PhysicalDeviceFeatureEvents_lampMode /* IMPORTED_LONG_NAMED_BIT */, lampMode /* IMPORTED_SHORT_NAMED_BIT */, PhysicalDeviceFeatureEvents_messageWaiting /* IMPORTED_LONG_NAMED_BIT */, messageWaiting /* IMPORTED_SHORT_NAMED_BIT */, PhysicalDeviceFeatureEvents_microphoneGain /* IMPORTED_LONG_NAMED_BIT */, microphoneGain /* IMPORTED_SHORT_NAMED_BIT */, PhysicalDeviceFeatureEvents_microphoneMute /* IMPORTED_LONG_NAMED_BIT */, microphoneMute /* IMPORTED_SHORT_NAMED_BIT */, PhysicalDeviceFeatureEvents_ringerStatus /* IMPORTED_LONG_NAMED_BIT */, ringerStatus /* IMPORTED_SHORT_NAMED_BIT */, PhysicalDeviceFeatureEvents_speakerMute /* IMPORTED_LONG_NAMED_BIT */, speakerMute /* IMPORTED_SHORT_NAMED_BIT */, PhysicalDeviceFeatureEvents_speakerVolume /* IMPORTED_LONG_NAMED_BIT */, speakerVolume /* IMPORTED_SHORT_NAMED_BIT */, _decode_PhysicalDeviceFeatureEvents, _encode_PhysicalDeviceFeatureEvents } from "../CSTA-application-context-information-csta3/PhysicalDeviceFeatureEvents.ta.mjs";
// export { PhysicalDeviceFeatureEvents, PhysicalDeviceFeatureEvents_buttonInformation /* IMPORTED_LONG_NAMED_BIT */, buttonInformation /* IMPORTED_SHORT_NAMED_BIT */, PhysicalDeviceFeatureEvents_buttonPress /* IMPORTED_LONG_NAMED_BIT */, buttonPress /* IMPORTED_SHORT_NAMED_BIT */, PhysicalDeviceFeatureEvents_displayUpdated /* IMPORTED_LONG_NAMED_BIT */, displayUpdated /* IMPORTED_SHORT_NAMED_BIT */, PhysicalDeviceFeatureEvents_hookswitch /* IMPORTED_LONG_NAMED_BIT */, hookswitch /* IMPORTED_SHORT_NAMED_BIT */, PhysicalDeviceFeatureEvents_lampMode /* IMPORTED_LONG_NAMED_BIT */, lampMode /* IMPORTED_SHORT_NAMED_BIT */, PhysicalDeviceFeatureEvents_messageWaiting /* IMPORTED_LONG_NAMED_BIT */, messageWaiting /* IMPORTED_SHORT_NAMED_BIT */, PhysicalDeviceFeatureEvents_microphoneGain /* IMPORTED_LONG_NAMED_BIT */, microphoneGain /* IMPORTED_SHORT_NAMED_BIT */, PhysicalDeviceFeatureEvents_microphoneMute /* IMPORTED_LONG_NAMED_BIT */, microphoneMute /* IMPORTED_SHORT_NAMED_BIT */, PhysicalDeviceFeatureEvents_ringerStatus /* IMPORTED_LONG_NAMED_BIT */, ringerStatus /* IMPORTED_SHORT_NAMED_BIT */, PhysicalDeviceFeatureEvents_speakerMute /* IMPORTED_LONG_NAMED_BIT */, speakerMute /* IMPORTED_SHORT_NAMED_BIT */, PhysicalDeviceFeatureEvents_speakerVolume /* IMPORTED_LONG_NAMED_BIT */, speakerVolume /* IMPORTED_SHORT_NAMED_BIT */, _decode_PhysicalDeviceFeatureEvents, _encode_PhysicalDeviceFeatureEvents } from "../CSTA-application-context-information-csta3/PhysicalDeviceFeatureEvents.ta.mjs";
import { LogicalDeviceFeatureEvents, LogicalDeviceFeatureEvents_agentBusy /* IMPORTED_LONG_NAMED_BIT */, agentBusy /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_agentLoggedOn /* IMPORTED_LONG_NAMED_BIT */, agentLoggedOn /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_agentLoggedOff /* IMPORTED_LONG_NAMED_BIT */, agentLoggedOff /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_agentNotReady /* IMPORTED_LONG_NAMED_BIT */, agentNotReady /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_agentReady /* IMPORTED_LONG_NAMED_BIT */, agentReady /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_agentWorkingAfterCall /* IMPORTED_LONG_NAMED_BIT */, agentWorkingAfterCall /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_autoAnswer /* IMPORTED_LONG_NAMED_BIT */, autoAnswer /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_autoWorkMode /* IMPORTED_LONG_NAMED_BIT */, autoWorkMode /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_callBack /* IMPORTED_LONG_NAMED_BIT */, callBack /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_callBackMessage /* IMPORTED_LONG_NAMED_BIT */, callBackMessage /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_callerIDStatus /* IMPORTED_LONG_NAMED_BIT */, callerIDStatus /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_doNotDisturb /* IMPORTED_LONG_NAMED_BIT */, doNotDisturb /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_forwarding /* IMPORTED_LONG_NAMED_BIT */, forwarding /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_presenceState /* IMPORTED_LONG_NAMED_BIT */, presenceState /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_routeingMode /* IMPORTED_LONG_NAMED_BIT */, routeingMode /* IMPORTED_SHORT_NAMED_BIT */, _decode_LogicalDeviceFeatureEvents, _encode_LogicalDeviceFeatureEvents } from "../CSTA-application-context-information-csta3/LogicalDeviceFeatureEvents.ta.mjs";
// export { LogicalDeviceFeatureEvents, LogicalDeviceFeatureEvents_agentBusy /* IMPORTED_LONG_NAMED_BIT */, agentBusy /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_agentLoggedOn /* IMPORTED_LONG_NAMED_BIT */, agentLoggedOn /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_agentLoggedOff /* IMPORTED_LONG_NAMED_BIT */, agentLoggedOff /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_agentNotReady /* IMPORTED_LONG_NAMED_BIT */, agentNotReady /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_agentReady /* IMPORTED_LONG_NAMED_BIT */, agentReady /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_agentWorkingAfterCall /* IMPORTED_LONG_NAMED_BIT */, agentWorkingAfterCall /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_autoAnswer /* IMPORTED_LONG_NAMED_BIT */, autoAnswer /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_autoWorkMode /* IMPORTED_LONG_NAMED_BIT */, autoWorkMode /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_callBack /* IMPORTED_LONG_NAMED_BIT */, callBack /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_callBackMessage /* IMPORTED_LONG_NAMED_BIT */, callBackMessage /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_callerIDStatus /* IMPORTED_LONG_NAMED_BIT */, callerIDStatus /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_doNotDisturb /* IMPORTED_LONG_NAMED_BIT */, doNotDisturb /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_forwarding /* IMPORTED_LONG_NAMED_BIT */, forwarding /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_presenceState /* IMPORTED_LONG_NAMED_BIT */, presenceState /* IMPORTED_SHORT_NAMED_BIT */, LogicalDeviceFeatureEvents_routeingMode /* IMPORTED_LONG_NAMED_BIT */, routeingMode /* IMPORTED_SHORT_NAMED_BIT */, _decode_LogicalDeviceFeatureEvents, _encode_LogicalDeviceFeatureEvents } from "../CSTA-application-context-information-csta3/LogicalDeviceFeatureEvents.ta.mjs";
import { DeviceMaintenanceEvents, DeviceMaintenanceEvents_backInService /* IMPORTED_LONG_NAMED_BIT */, backInService /* IMPORTED_SHORT_NAMED_BIT */, DeviceMaintenanceEvents_deviceCapabilityChanged /* IMPORTED_LONG_NAMED_BIT */, deviceCapabilityChanged /* IMPORTED_SHORT_NAMED_BIT */, DeviceMaintenanceEvents_outOfService /* IMPORTED_LONG_NAMED_BIT */, outOfService /* IMPORTED_SHORT_NAMED_BIT */, DeviceMaintenanceEvents_partiallyInService /* IMPORTED_LONG_NAMED_BIT */, partiallyInService /* IMPORTED_SHORT_NAMED_BIT */, _decode_DeviceMaintenanceEvents, _encode_DeviceMaintenanceEvents } from "../CSTA-application-context-information-csta3/DeviceMaintenanceEvents.ta.mjs";
// export { DeviceMaintenanceEvents, DeviceMaintenanceEvents_backInService /* IMPORTED_LONG_NAMED_BIT */, backInService /* IMPORTED_SHORT_NAMED_BIT */, DeviceMaintenanceEvents_deviceCapabilityChanged /* IMPORTED_LONG_NAMED_BIT */, deviceCapabilityChanged /* IMPORTED_SHORT_NAMED_BIT */, DeviceMaintenanceEvents_outOfService /* IMPORTED_LONG_NAMED_BIT */, outOfService /* IMPORTED_SHORT_NAMED_BIT */, DeviceMaintenanceEvents_partiallyInService /* IMPORTED_LONG_NAMED_BIT */, partiallyInService /* IMPORTED_SHORT_NAMED_BIT */, _decode_DeviceMaintenanceEvents, _encode_DeviceMaintenanceEvents } from "../CSTA-application-context-information-csta3/DeviceMaintenanceEvents.ta.mjs";
import { VoiceUnitEvents, VoiceUnitEvents_bookmarkReached /* IMPORTED_LONG_NAMED_BIT */, bookmarkReached /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_completed /* IMPORTED_LONG_NAMED_BIT */, completed /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_dtmfDetected /* IMPORTED_LONG_NAMED_BIT */, dtmfDetected /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_emptied /* IMPORTED_LONG_NAMED_BIT */, emptied /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_interruptionDetected /* IMPORTED_LONG_NAMED_BIT */, interruptionDetected /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_notRecognized /* IMPORTED_LONG_NAMED_BIT */, notRecognized /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_play /* IMPORTED_LONG_NAMED_BIT */, play /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_recognized /* IMPORTED_LONG_NAMED_BIT */, recognized /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_record /* IMPORTED_LONG_NAMED_BIT */, record /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_review /* IMPORTED_LONG_NAMED_BIT */, review /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_started /* IMPORTED_LONG_NAMED_BIT */, started /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_silenceTimeoutExpired /* IMPORTED_LONG_NAMED_BIT */, silenceTimeoutExpired /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_speechDetected /* IMPORTED_LONG_NAMED_BIT */, speechDetected /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_stop /* IMPORTED_LONG_NAMED_BIT */, stop /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_suspendPlay /* IMPORTED_LONG_NAMED_BIT */, suspendPlay /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_suspendRecord /* IMPORTED_LONG_NAMED_BIT */, suspendRecord /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_voiceAttributesChange /* IMPORTED_LONG_NAMED_BIT */, voiceAttributesChange /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_voiceErrorOccured /* IMPORTED_LONG_NAMED_BIT */, voiceErrorOccured /* IMPORTED_SHORT_NAMED_BIT */, _decode_VoiceUnitEvents, _encode_VoiceUnitEvents } from "../CSTA-application-context-information-csta3/VoiceUnitEvents.ta.mjs";
// export { VoiceUnitEvents, VoiceUnitEvents_bookmarkReached /* IMPORTED_LONG_NAMED_BIT */, bookmarkReached /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_completed /* IMPORTED_LONG_NAMED_BIT */, completed /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_dtmfDetected /* IMPORTED_LONG_NAMED_BIT */, dtmfDetected /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_emptied /* IMPORTED_LONG_NAMED_BIT */, emptied /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_interruptionDetected /* IMPORTED_LONG_NAMED_BIT */, interruptionDetected /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_notRecognized /* IMPORTED_LONG_NAMED_BIT */, notRecognized /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_play /* IMPORTED_LONG_NAMED_BIT */, play /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_recognized /* IMPORTED_LONG_NAMED_BIT */, recognized /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_record /* IMPORTED_LONG_NAMED_BIT */, record /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_review /* IMPORTED_LONG_NAMED_BIT */, review /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_started /* IMPORTED_LONG_NAMED_BIT */, started /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_silenceTimeoutExpired /* IMPORTED_LONG_NAMED_BIT */, silenceTimeoutExpired /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_speechDetected /* IMPORTED_LONG_NAMED_BIT */, speechDetected /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_stop /* IMPORTED_LONG_NAMED_BIT */, stop /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_suspendPlay /* IMPORTED_LONG_NAMED_BIT */, suspendPlay /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_suspendRecord /* IMPORTED_LONG_NAMED_BIT */, suspendRecord /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_voiceAttributesChange /* IMPORTED_LONG_NAMED_BIT */, voiceAttributesChange /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitEvents_voiceErrorOccured /* IMPORTED_LONG_NAMED_BIT */, voiceErrorOccured /* IMPORTED_SHORT_NAMED_BIT */, _decode_VoiceUnitEvents, _encode_VoiceUnitEvents } from "../CSTA-application-context-information-csta3/VoiceUnitEvents.ta.mjs";
import { VendorSpecEvents, VendorSpecEvents_privateEvent /* IMPORTED_LONG_NAMED_BIT */, privateEvent /* IMPORTED_SHORT_NAMED_BIT */, _decode_VendorSpecEvents, _encode_VendorSpecEvents } from "../CSTA-application-context-information-csta3/VendorSpecEvents.ta.mjs";
// export { VendorSpecEvents, VendorSpecEvents_privateEvent /* IMPORTED_LONG_NAMED_BIT */, privateEvent /* IMPORTED_SHORT_NAMED_BIT */, _decode_VendorSpecEvents, _encode_VendorSpecEvents } from "../CSTA-application-context-information-csta3/VendorSpecEvents.ta.mjs";


/**
 * @summary MonitorFilter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorFilter ::= SEQUENCE-- default is no filter (i.e. all events)
 * {    callControl             [0] IMPLICIT CallControlEvents             DEFAULT { },
 *     callAssociated             [6] IMPLICIT CallAssociatedEvents         DEFAULT { },
 *     mediaAttachment         [7] IMPLICIT MediaAttachmentEvents         DEFAULT { },
 *     physicalDeviceFeature         [8] IMPLICIT PhysicalDeviceFeatureEvents     DEFAULT { },
 *     logicalDeviceFeature         [9] IMPLICIT LogicalDeviceFeatureEvents     DEFAULT { },
 *     maintenance             [3] IMPLICIT DeviceMaintenanceEvents         DEFAULT { },
 *     voiceUnit             [5] IMPLICIT VoiceUnitEvents             DEFAULT { },
 *     private             [4] IMPLICIT VendorSpecEvents             DEFAULT { } }
 * ```
 * 
 * @class
 */
export
class MonitorFilter {
    constructor (
        /**
         * @summary `callControl`.
         * @public
         * @readonly
         */
        readonly callControl: OPTIONAL<CallControlEvents>,
        /**
         * @summary `callAssociated`.
         * @public
         * @readonly
         */
        readonly callAssociated: OPTIONAL<CallAssociatedEvents>,
        /**
         * @summary `mediaAttachment`.
         * @public
         * @readonly
         */
        readonly mediaAttachment: OPTIONAL<MediaAttachmentEvents>,
        /**
         * @summary `physicalDeviceFeature`.
         * @public
         * @readonly
         */
        readonly physicalDeviceFeature: OPTIONAL<PhysicalDeviceFeatureEvents>,
        /**
         * @summary `logicalDeviceFeature`.
         * @public
         * @readonly
         */
        readonly logicalDeviceFeature: OPTIONAL<LogicalDeviceFeatureEvents>,
        /**
         * @summary `maintenance`.
         * @public
         * @readonly
         */
        readonly maintenance: OPTIONAL<DeviceMaintenanceEvents>,
        /**
         * @summary `voiceUnit`.
         * @public
         * @readonly
         */
        readonly voiceUnit: OPTIONAL<VoiceUnitEvents>,
        /**
         * @summary `private_`.
         * @public
         * @readonly
         */
        readonly private_: OPTIONAL<VendorSpecEvents>
    ) {}

    /**
     * @summary Restructures an object into a MonitorFilter
     * @description
     * 
     * This takes an `object` and converts it to a `MonitorFilter`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MonitorFilter`.
     * @returns {MonitorFilter}
     */
    public static _from_object (_o: { [_K in keyof (MonitorFilter)]: (MonitorFilter)[_K] }): MonitorFilter {
        return new MonitorFilter(_o.callControl, _o.callAssociated, _o.mediaAttachment, _o.physicalDeviceFeature, _o.logicalDeviceFeature, _o.maintenance, _o.voiceUnit, _o.private_);
    }

    /**
     * @summary Getter that returns the default value for `callControl`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_callControl () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `callAssociated`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_callAssociated () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `mediaAttachment`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_mediaAttachment () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `physicalDeviceFeature`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_physicalDeviceFeature () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `logicalDeviceFeature`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_logicalDeviceFeature () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `maintenance`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_maintenance () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `voiceUnit`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_voiceUnit () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `private_`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_private_ () { return new Uint8ClampedArray([]); }
}

/**
 * @summary The Leading Root Component Types of MonitorFilter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MonitorFilter: $.ComponentSpec[] = [
    new $.ComponentSpec("callControl", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("callAssociated", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("mediaAttachment", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("physicalDeviceFeature", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("logicalDeviceFeature", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("maintenance", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("voiceUnit", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("private", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MonitorFilter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MonitorFilter: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MonitorFilter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MonitorFilter: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MonitorFilter: $.ASN1Decoder<MonitorFilter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitorFilter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitorFilter (el: _Element): MonitorFilter {
    if (!_cached_decoder_for_MonitorFilter) { _cached_decoder_for_MonitorFilter = function (el: _Element): MonitorFilter {
    let callControl: OPTIONAL<CallControlEvents> = MonitorFilter._default_value_for_callControl;
    let callAssociated: OPTIONAL<CallAssociatedEvents> = MonitorFilter._default_value_for_callAssociated;
    let mediaAttachment: OPTIONAL<MediaAttachmentEvents> = MonitorFilter._default_value_for_mediaAttachment;
    let physicalDeviceFeature: OPTIONAL<PhysicalDeviceFeatureEvents> = MonitorFilter._default_value_for_physicalDeviceFeature;
    let logicalDeviceFeature: OPTIONAL<LogicalDeviceFeatureEvents> = MonitorFilter._default_value_for_logicalDeviceFeature;
    let maintenance: OPTIONAL<DeviceMaintenanceEvents> = MonitorFilter._default_value_for_maintenance;
    let voiceUnit: OPTIONAL<VoiceUnitEvents> = MonitorFilter._default_value_for_voiceUnit;
    let private_: OPTIONAL<VendorSpecEvents> = MonitorFilter._default_value_for_private_;
    const callbacks: $.DecodingMap = {
        "callControl": (_el: _Element): void => { callControl = $._decode_implicit<CallControlEvents>(() => _decode_CallControlEvents)(_el); },
        "callAssociated": (_el: _Element): void => { callAssociated = $._decode_implicit<CallAssociatedEvents>(() => _decode_CallAssociatedEvents)(_el); },
        "mediaAttachment": (_el: _Element): void => { mediaAttachment = $._decode_implicit<MediaAttachmentEvents>(() => _decode_MediaAttachmentEvents)(_el); },
        "physicalDeviceFeature": (_el: _Element): void => { physicalDeviceFeature = $._decode_implicit<PhysicalDeviceFeatureEvents>(() => _decode_PhysicalDeviceFeatureEvents)(_el); },
        "logicalDeviceFeature": (_el: _Element): void => { logicalDeviceFeature = $._decode_implicit<LogicalDeviceFeatureEvents>(() => _decode_LogicalDeviceFeatureEvents)(_el); },
        "maintenance": (_el: _Element): void => { maintenance = $._decode_implicit<DeviceMaintenanceEvents>(() => _decode_DeviceMaintenanceEvents)(_el); },
        "voiceUnit": (_el: _Element): void => { voiceUnit = $._decode_implicit<VoiceUnitEvents>(() => _decode_VoiceUnitEvents)(_el); },
        "private": (_el: _Element): void => { private_ = $._decode_implicit<VendorSpecEvents>(() => _decode_VendorSpecEvents)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MonitorFilter,
        _extension_additions_list_spec_for_MonitorFilter,
        _root_component_type_list_2_spec_for_MonitorFilter,
        undefined,
    );
    return new MonitorFilter(
        callControl,
        callAssociated,
        mediaAttachment,
        physicalDeviceFeature,
        logicalDeviceFeature,
        maintenance,
        voiceUnit,
        private_
    );
}; }
    return _cached_decoder_for_MonitorFilter(el);
}

let _cached_encoder_for_MonitorFilter: $.ASN1Encoder<MonitorFilter> | null = null;

/**
 * @summary Encodes a(n) MonitorFilter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitorFilter, encoded as an ASN.1 Element.
 */
export
function _encode_MonitorFilter (value: MonitorFilter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitorFilter) { _cached_encoder_for_MonitorFilter = function (value: MonitorFilter, elGetter: $.ASN1Encoder<MonitorFilter>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.callControl === undefined || $.deepEq(value.callControl, MonitorFilter._default_value_for_callControl) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CallControlEvents, $.BER)(value.callControl, $.BER)),
            /* IF_DEFAULT */ (value.callAssociated === undefined || $.deepEq(value.callAssociated, MonitorFilter._default_value_for_callAssociated) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_CallAssociatedEvents, $.BER)(value.callAssociated, $.BER)),
            /* IF_DEFAULT */ (value.mediaAttachment === undefined || $.deepEq(value.mediaAttachment, MonitorFilter._default_value_for_mediaAttachment) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_MediaAttachmentEvents, $.BER)(value.mediaAttachment, $.BER)),
            /* IF_DEFAULT */ (value.physicalDeviceFeature === undefined || $.deepEq(value.physicalDeviceFeature, MonitorFilter._default_value_for_physicalDeviceFeature) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_PhysicalDeviceFeatureEvents, $.BER)(value.physicalDeviceFeature, $.BER)),
            /* IF_DEFAULT */ (value.logicalDeviceFeature === undefined || $.deepEq(value.logicalDeviceFeature, MonitorFilter._default_value_for_logicalDeviceFeature) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_LogicalDeviceFeatureEvents, $.BER)(value.logicalDeviceFeature, $.BER)),
            /* IF_DEFAULT */ (value.maintenance === undefined || $.deepEq(value.maintenance, MonitorFilter._default_value_for_maintenance) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_DeviceMaintenanceEvents, $.BER)(value.maintenance, $.BER)),
            /* IF_DEFAULT */ (value.voiceUnit === undefined || $.deepEq(value.voiceUnit, MonitorFilter._default_value_for_voiceUnit) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_VoiceUnitEvents, $.BER)(value.voiceUnit, $.BER)),
            /* IF_DEFAULT */ (value.private_ === undefined || $.deepEq(value.private_, MonitorFilter._default_value_for_private_) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_VendorSpecEvents, $.BER)(value.private_, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MonitorFilter(value, elGetter);
}


/* eslint-enable */
