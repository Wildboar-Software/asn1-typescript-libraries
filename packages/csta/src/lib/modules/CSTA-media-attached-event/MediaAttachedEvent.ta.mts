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
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
// export { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
import { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";
// export { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";
import { MediaServiceType, _enum_for_MediaServiceType, MediaServiceType_cstaVoiceUnit /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaVoiceUnit /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_dataModem /* IMPORTED_LONG_ENUMERATION_ITEM */, dataModem /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataIsochronousIeee1394 /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataIsochronousIeee1394 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataIsochronousGeoport /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataIsochronousGeoport /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataIsochronousIeeeAtm /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataIsochronousIeeeAtm /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataIsochronousIeeeIsdn /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataIsochronousIeeeIsdn /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataApi /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataApi /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_ectfS100MediaServicesDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, ectfS100MediaServicesDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_ectfS100MediaServicesAppServices /* IMPORTED_LONG_ENUMERATION_ITEM */, ectfS100MediaServicesAppServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript1 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript2 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript3 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript4 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript5 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript6 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript7 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript7 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript8 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript8 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript9 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript9 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript10 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript10 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureAnalog /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureAnalog /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundTransmitAnalog /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundTransmitAnalog /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureIeee1394 /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureIeee1394 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundTransmitIeee1394 /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundTransmitIeee1394 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureTransmitGeoport /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureTransmitGeoport /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureTransmitAtm /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureTransmitAtm /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureTransmitISDN /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureTransmitISDN /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_soundCaptureTransmitADPCM /* IMPORTED_LONG_ENUMERATION_ITEM */, soundCaptureTransmitADPCM /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_soundCaptureTransmitApi /* IMPORTED_LONG_ENUMERATION_ITEM */, soundCaptureTransmitApi /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_usb /* IMPORTED_LONG_ENUMERATION_ITEM */, usb /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific1 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific2 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific3 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific4 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific5 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific6 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific7 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific7 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific8 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific8 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific9 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific9 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific10 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific10 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MediaServiceType, _encode_MediaServiceType } from "../CSTA-media-services/MediaServiceType.ta.mjs";
// export { MediaServiceType, _enum_for_MediaServiceType, MediaServiceType_cstaVoiceUnit /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaVoiceUnit /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_dataModem /* IMPORTED_LONG_ENUMERATION_ITEM */, dataModem /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataIsochronousIeee1394 /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataIsochronousIeee1394 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataIsochronousGeoport /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataIsochronousGeoport /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataIsochronousIeeeAtm /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataIsochronousIeeeAtm /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataIsochronousIeeeIsdn /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataIsochronousIeeeIsdn /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataApi /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataApi /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_ectfS100MediaServicesDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, ectfS100MediaServicesDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_ectfS100MediaServicesAppServices /* IMPORTED_LONG_ENUMERATION_ITEM */, ectfS100MediaServicesAppServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript1 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript2 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript3 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript4 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript5 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript6 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript7 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript7 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript8 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript8 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript9 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript9 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript10 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript10 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureAnalog /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureAnalog /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundTransmitAnalog /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundTransmitAnalog /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureIeee1394 /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureIeee1394 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundTransmitIeee1394 /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundTransmitIeee1394 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureTransmitGeoport /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureTransmitGeoport /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureTransmitAtm /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureTransmitAtm /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureTransmitISDN /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureTransmitISDN /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_soundCaptureTransmitADPCM /* IMPORTED_LONG_ENUMERATION_ITEM */, soundCaptureTransmitADPCM /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_soundCaptureTransmitApi /* IMPORTED_LONG_ENUMERATION_ITEM */, soundCaptureTransmitApi /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_usb /* IMPORTED_LONG_ENUMERATION_ITEM */, usb /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific1 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific2 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific3 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific4 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific5 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific6 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific7 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific7 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific8 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific8 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific9 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific9 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific10 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific10 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MediaServiceType, _encode_MediaServiceType } from "../CSTA-media-services/MediaServiceType.ta.mjs";
import { MediaServiceInstanceID, _decode_MediaServiceInstanceID, _encode_MediaServiceInstanceID } from "../CSTA-media-services/MediaServiceInstanceID.ta.mjs";
// export { MediaServiceInstanceID, _decode_MediaServiceInstanceID, _encode_MediaServiceInstanceID } from "../CSTA-media-services/MediaServiceInstanceID.ta.mjs";
import { MediaStreamID, _decode_MediaStreamID, _encode_MediaStreamID } from "../CSTA-media-services/MediaStreamID.ta.mjs";
// export { MediaStreamID, _decode_MediaStreamID, _encode_MediaStreamID } from "../CSTA-media-services/MediaStreamID.ta.mjs";
import { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";
// export { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";
import { CallCharacteristics, CallCharacteristics_acdCall /* IMPORTED_LONG_NAMED_BIT */, acdCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_lowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, lowPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_priorityCall /* IMPORTED_LONG_NAMED_BIT */, priorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_highPriorityCall /* IMPORTED_LONG_NAMED_BIT */, highPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_maintainanceCall /* IMPORTED_LONG_NAMED_BIT */, maintainanceCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_directAgent /* IMPORTED_LONG_NAMED_BIT */, directAgent /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_assistCall /* IMPORTED_LONG_NAMED_BIT */, assistCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_voiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, voiceUnitCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_privateCall /* IMPORTED_LONG_NAMED_BIT */, privateCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_personalCall /* IMPORTED_LONG_NAMED_BIT */, personalCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_sensitiveCall /* IMPORTED_LONG_NAMED_BIT */, sensitiveCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_confidentialCall /* IMPORTED_LONG_NAMED_BIT */, confidentialCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_encryptedCall /* IMPORTED_LONG_NAMED_BIT */, encryptedCall /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";
// export { CallCharacteristics, CallCharacteristics_acdCall /* IMPORTED_LONG_NAMED_BIT */, acdCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_lowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, lowPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_priorityCall /* IMPORTED_LONG_NAMED_BIT */, priorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_highPriorityCall /* IMPORTED_LONG_NAMED_BIT */, highPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_maintainanceCall /* IMPORTED_LONG_NAMED_BIT */, maintainanceCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_directAgent /* IMPORTED_LONG_NAMED_BIT */, directAgent /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_assistCall /* IMPORTED_LONG_NAMED_BIT */, assistCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_voiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, voiceUnitCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_privateCall /* IMPORTED_LONG_NAMED_BIT */, privateCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_personalCall /* IMPORTED_LONG_NAMED_BIT */, personalCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_sensitiveCall /* IMPORTED_LONG_NAMED_BIT */, sensitiveCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_confidentialCall /* IMPORTED_LONG_NAMED_BIT */, confidentialCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_encryptedCall /* IMPORTED_LONG_NAMED_BIT */, encryptedCall /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";
import { LocalConnectionState, _decode_LocalConnectionState, _encode_LocalConnectionState } from "../CSTA-connection-states/LocalConnectionState.ta.mjs";
// export { LocalConnectionState, _decode_LocalConnectionState, _encode_LocalConnectionState } from "../CSTA-connection-states/LocalConnectionState.ta.mjs";
import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";
// export { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary MediaAttachedEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaAttachedEvent ::= SEQUENCE
 * {    mediaConnection             ConnectionID,
 *     mediaDevice             SubjectDeviceID,
 *     mediaServiceType         MediaServiceType,
 *     mediaServiceVersion        INTEGER                    OPTIONAL,
 *     mediaServiceInstanceID        [0] IMPLICIT MediaServiceInstanceID     OPTIONAL,
 *     mediaStreamID             [1] IMPLICIT MediaStreamID        OPTIONAL,
 *     mediaCallCharacteristics    [2] IMPLICIT MediaCallCharacteristics    OPTIONAL,
 *     callCharacteristics        CallCharacteristics            OPTIONAL,
 *     localConnectionInfo        LocalConnectionState            OPTIONAL,
 *     mediaConnectionInfo         [3] IMPLICIT ConnectionInformation    OPTIONAL,
 *     extension            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class MediaAttachedEvent {
    constructor (
        /**
         * @summary `mediaConnection`.
         * @public
         * @readonly
         */
        readonly mediaConnection: ConnectionID,
        /**
         * @summary `mediaDevice`.
         * @public
         * @readonly
         */
        readonly mediaDevice: SubjectDeviceID,
        /**
         * @summary `mediaServiceType`.
         * @public
         * @readonly
         */
        readonly mediaServiceType: MediaServiceType,
        /**
         * @summary `mediaServiceVersion`.
         * @public
         * @readonly
         */
        readonly mediaServiceVersion: OPTIONAL<INTEGER>,
        /**
         * @summary `mediaServiceInstanceID`.
         * @public
         * @readonly
         */
        readonly mediaServiceInstanceID: OPTIONAL<MediaServiceInstanceID>,
        /**
         * @summary `mediaStreamID`.
         * @public
         * @readonly
         */
        readonly mediaStreamID: OPTIONAL<MediaStreamID>,
        /**
         * @summary `mediaCallCharacteristics`.
         * @public
         * @readonly
         */
        readonly mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>,
        /**
         * @summary `callCharacteristics`.
         * @public
         * @readonly
         */
        readonly callCharacteristics: OPTIONAL<CallCharacteristics>,
        /**
         * @summary `localConnectionInfo`.
         * @public
         * @readonly
         */
        readonly localConnectionInfo: OPTIONAL<LocalConnectionState>,
        /**
         * @summary `mediaConnectionInfo`.
         * @public
         * @readonly
         */
        readonly mediaConnectionInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `extension`.
         * @public
         * @readonly
         */
        readonly extension: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a MediaAttachedEvent
     * @description
     * 
     * This takes an `object` and converts it to a `MediaAttachedEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MediaAttachedEvent`.
     * @returns {MediaAttachedEvent}
     */
    public static _from_object (_o: { [_K in keyof (MediaAttachedEvent)]: (MediaAttachedEvent)[_K] }): MediaAttachedEvent {
        return new MediaAttachedEvent(_o.mediaConnection, _o.mediaDevice, _o.mediaServiceType, _o.mediaServiceVersion, _o.mediaServiceInstanceID, _o.mediaStreamID, _o.mediaCallCharacteristics, _o.callCharacteristics, _o.localConnectionInfo, _o.mediaConnectionInfo, _o.extension);
    }

        /**
         * @summary The enum used as the type of the component `mediaServiceType`
         * @public
         * @static
         */

    public static _enum_for_mediaServiceType = _enum_for_MediaServiceType;
}

/**
 * @summary The Leading Root Component Types of MediaAttachedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MediaAttachedEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("mediaConnection", false, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("mediaDevice", false, $.hasTag(_TagClass.application, 3), undefined, undefined),
    new $.ComponentSpec("mediaServiceType", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("mediaServiceVersion", true, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("mediaServiceInstanceID", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("mediaStreamID", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("callCharacteristics", true, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("localConnectionInfo", true, $.hasTag(_TagClass.application, 14), undefined, undefined),
    new $.ComponentSpec("mediaConnectionInfo", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("extension", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MediaAttachedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MediaAttachedEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MediaAttachedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MediaAttachedEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MediaAttachedEvent: $.ASN1Decoder<MediaAttachedEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaAttachedEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaAttachedEvent (el: _Element): MediaAttachedEvent {
    if (!_cached_decoder_for_MediaAttachedEvent) { _cached_decoder_for_MediaAttachedEvent = function (el: _Element): MediaAttachedEvent {
    let mediaConnection!: ConnectionID;
    let mediaDevice!: SubjectDeviceID;
    let mediaServiceType!: MediaServiceType;
    let mediaServiceVersion: OPTIONAL<INTEGER>;
    let mediaServiceInstanceID: OPTIONAL<MediaServiceInstanceID>;
    let mediaStreamID: OPTIONAL<MediaStreamID>;
    let mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>;
    let callCharacteristics: OPTIONAL<CallCharacteristics>;
    let localConnectionInfo: OPTIONAL<LocalConnectionState>;
    let mediaConnectionInfo: OPTIONAL<ConnectionInformation>;
    let extension: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "mediaConnection": (_el: _Element): void => { mediaConnection = _decode_ConnectionID(_el); },
        "mediaDevice": (_el: _Element): void => { mediaDevice = _decode_SubjectDeviceID(_el); },
        "mediaServiceType": (_el: _Element): void => { mediaServiceType = _decode_MediaServiceType(_el); },
        "mediaServiceVersion": (_el: _Element): void => { mediaServiceVersion = $._decodeInteger(_el); },
        "mediaServiceInstanceID": (_el: _Element): void => { mediaServiceInstanceID = $._decode_implicit<MediaServiceInstanceID>(() => _decode_MediaServiceInstanceID)(_el); },
        "mediaStreamID": (_el: _Element): void => { mediaStreamID = $._decode_implicit<MediaStreamID>(() => _decode_MediaStreamID)(_el); },
        "mediaCallCharacteristics": (_el: _Element): void => { mediaCallCharacteristics = $._decode_implicit<MediaCallCharacteristics>(() => _decode_MediaCallCharacteristics)(_el); },
        "callCharacteristics": (_el: _Element): void => { callCharacteristics = _decode_CallCharacteristics(_el); },
        "localConnectionInfo": (_el: _Element): void => { localConnectionInfo = _decode_LocalConnectionState(_el); },
        "mediaConnectionInfo": (_el: _Element): void => { mediaConnectionInfo = $._decode_implicit<ConnectionInformation>(() => _decode_ConnectionInformation)(_el); },
        "extension": (_el: _Element): void => { extension = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MediaAttachedEvent,
        _extension_additions_list_spec_for_MediaAttachedEvent,
        _root_component_type_list_2_spec_for_MediaAttachedEvent,
        undefined,
    );
    return new MediaAttachedEvent(
        mediaConnection,
        mediaDevice,
        mediaServiceType,
        mediaServiceVersion,
        mediaServiceInstanceID,
        mediaStreamID,
        mediaCallCharacteristics,
        callCharacteristics,
        localConnectionInfo,
        mediaConnectionInfo,
        extension
    );
}; }
    return _cached_decoder_for_MediaAttachedEvent(el);
}

let _cached_encoder_for_MediaAttachedEvent: $.ASN1Encoder<MediaAttachedEvent> | null = null;

/**
 * @summary Encodes a(n) MediaAttachedEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaAttachedEvent, encoded as an ASN.1 Element.
 */
export
function _encode_MediaAttachedEvent (value: MediaAttachedEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaAttachedEvent) { _cached_encoder_for_MediaAttachedEvent = function (value: MediaAttachedEvent, elGetter: $.ASN1Encoder<MediaAttachedEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.mediaConnection, $.BER),
            /* REQUIRED   */ _encode_SubjectDeviceID(value.mediaDevice, $.BER),
            /* REQUIRED   */ _encode_MediaServiceType(value.mediaServiceType, $.BER),
            /* IF_ABSENT  */ ((value.mediaServiceVersion === undefined) ? undefined : $._encodeInteger(value.mediaServiceVersion, $.BER)),
            /* IF_ABSENT  */ ((value.mediaServiceInstanceID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_MediaServiceInstanceID, $.BER)(value.mediaServiceInstanceID, $.BER)),
            /* IF_ABSENT  */ ((value.mediaStreamID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_MediaStreamID, $.BER)(value.mediaStreamID, $.BER)),
            /* IF_ABSENT  */ ((value.mediaCallCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_MediaCallCharacteristics, $.BER)(value.mediaCallCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.callCharacteristics === undefined) ? undefined : _encode_CallCharacteristics(value.callCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.localConnectionInfo === undefined) ? undefined : _encode_LocalConnectionState(value.localConnectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.mediaConnectionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ConnectionInformation, $.BER)(value.mediaConnectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.extension === undefined) ? undefined : _encode_CSTACommonArguments(value.extension, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MediaAttachedEvent(value, elGetter);
}


/* eslint-enable */
