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
import { MediaServiceType, _enum_for_MediaServiceType, MediaServiceType_cstaVoiceUnit /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaVoiceUnit /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_dataModem /* IMPORTED_LONG_ENUMERATION_ITEM */, dataModem /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataIsochronousIeee1394 /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataIsochronousIeee1394 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataIsochronousGeoport /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataIsochronousGeoport /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataIsochronousIeeeAtm /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataIsochronousIeeeAtm /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataIsochronousIeeeIsdn /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataIsochronousIeeeIsdn /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataApi /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataApi /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_ectfS100MediaServicesDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, ectfS100MediaServicesDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_ectfS100MediaServicesAppServices /* IMPORTED_LONG_ENUMERATION_ITEM */, ectfS100MediaServicesAppServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript1 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript2 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript3 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript4 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript5 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript6 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript7 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript7 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript8 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript8 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript9 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript9 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript10 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript10 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureAnalog /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureAnalog /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundTransmitAnalog /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundTransmitAnalog /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureIeee1394 /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureIeee1394 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundTransmitIeee1394 /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundTransmitIeee1394 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureTransmitGeoport /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureTransmitGeoport /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureTransmitAtm /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureTransmitAtm /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureTransmitISDN /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureTransmitISDN /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_soundCaptureTransmitADPCM /* IMPORTED_LONG_ENUMERATION_ITEM */, soundCaptureTransmitADPCM /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_soundCaptureTransmitApi /* IMPORTED_LONG_ENUMERATION_ITEM */, soundCaptureTransmitApi /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_usb /* IMPORTED_LONG_ENUMERATION_ITEM */, usb /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific1 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific2 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific3 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific4 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific5 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific6 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific7 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific7 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific8 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific8 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific9 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific9 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific10 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific10 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MediaServiceType, _encode_MediaServiceType } from "../CSTA-media-services/MediaServiceType.ta.mjs";
// export { MediaServiceType, _enum_for_MediaServiceType, MediaServiceType_cstaVoiceUnit /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaVoiceUnit /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_dataModem /* IMPORTED_LONG_ENUMERATION_ITEM */, dataModem /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataIsochronousIeee1394 /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataIsochronousIeee1394 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataIsochronousGeoport /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataIsochronousGeoport /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataIsochronousIeeeAtm /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataIsochronousIeeeAtm /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataIsochronousIeeeIsdn /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataIsochronousIeeeIsdn /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataApi /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataApi /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_ectfS100MediaServicesDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, ectfS100MediaServicesDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_ectfS100MediaServicesAppServices /* IMPORTED_LONG_ENUMERATION_ITEM */, ectfS100MediaServicesAppServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript1 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript2 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript3 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript4 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript5 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript6 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript7 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript7 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript8 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript8 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript9 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript9 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript10 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript10 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureAnalog /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureAnalog /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundTransmitAnalog /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundTransmitAnalog /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureIeee1394 /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureIeee1394 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundTransmitIeee1394 /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundTransmitIeee1394 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureTransmitGeoport /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureTransmitGeoport /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureTransmitAtm /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureTransmitAtm /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureTransmitISDN /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureTransmitISDN /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_soundCaptureTransmitADPCM /* IMPORTED_LONG_ENUMERATION_ITEM */, soundCaptureTransmitADPCM /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_soundCaptureTransmitApi /* IMPORTED_LONG_ENUMERATION_ITEM */, soundCaptureTransmitApi /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_usb /* IMPORTED_LONG_ENUMERATION_ITEM */, usb /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific1 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific2 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific3 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific4 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific5 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific6 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific7 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific7 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific8 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific8 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific9 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific9 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific10 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific10 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MediaServiceType, _encode_MediaServiceType } from "../CSTA-media-services/MediaServiceType.ta.mjs";
import { MediaServiceInstanceID, _decode_MediaServiceInstanceID, _encode_MediaServiceInstanceID } from "../CSTA-media-services/MediaServiceInstanceID.ta.mjs";
// export { MediaServiceInstanceID, _decode_MediaServiceInstanceID, _encode_MediaServiceInstanceID } from "../CSTA-media-services/MediaServiceInstanceID.ta.mjs";
import { ConnectionMode, _enum_for_ConnectionMode, ConnectionMode_consultationConference /* IMPORTED_LONG_ENUMERATION_ITEM */, consultationConference /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectionMode_consultationConferenceHold /* IMPORTED_LONG_ENUMERATION_ITEM */, consultationConferenceHold /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectionMode_deflect /* IMPORTED_LONG_ENUMERATION_ITEM */, deflect /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectionMode_directedPickup /* IMPORTED_LONG_ENUMERATION_ITEM */, directedPickup /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectionMode_join /* IMPORTED_LONG_ENUMERATION_ITEM */, join /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectionMode_singleStepConference /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepConference /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectionMode_singleStepConferenceHold /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepConferenceHold /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectionMode_singleStepTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectionMode_transfer /* IMPORTED_LONG_ENUMERATION_ITEM */, transfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectionMode_direct /* IMPORTED_LONG_ENUMERATION_ITEM */, direct /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ConnectionMode, _encode_ConnectionMode } from "../CSTA-media-services/ConnectionMode.ta.mjs";
// export { ConnectionMode, _enum_for_ConnectionMode, ConnectionMode_consultationConference /* IMPORTED_LONG_ENUMERATION_ITEM */, consultationConference /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectionMode_consultationConferenceHold /* IMPORTED_LONG_ENUMERATION_ITEM */, consultationConferenceHold /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectionMode_deflect /* IMPORTED_LONG_ENUMERATION_ITEM */, deflect /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectionMode_directedPickup /* IMPORTED_LONG_ENUMERATION_ITEM */, directedPickup /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectionMode_join /* IMPORTED_LONG_ENUMERATION_ITEM */, join /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectionMode_singleStepConference /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepConference /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectionMode_singleStepConferenceHold /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepConferenceHold /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectionMode_singleStepTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectionMode_transfer /* IMPORTED_LONG_ENUMERATION_ITEM */, transfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectionMode_direct /* IMPORTED_LONG_ENUMERATION_ITEM */, direct /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ConnectionMode, _encode_ConnectionMode } from "../CSTA-media-services/ConnectionMode.ta.mjs";
import { LocalConnectionState, _decode_LocalConnectionState, _encode_LocalConnectionState } from "../CSTA-connection-states/LocalConnectionState.ta.mjs";
// export { LocalConnectionState, _decode_LocalConnectionState, _encode_LocalConnectionState } from "../CSTA-connection-states/LocalConnectionState.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary AttachMediaServiceArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttachMediaServiceArgument ::= SEQUENCE
 * {    connection             ConnectionID,
 *     mediaServiceType         MediaServiceType,
 *     mediaServiceVersion        INTEGER                    OPTIONAL,
 *     mediaServiceInstanceID         MediaServiceInstanceID            OPTIONAL,
 *     connectionMode            ConnectionMode,
 *     requestedConnectionState    LocalConnectionState            OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class AttachMediaServiceArgument {
    constructor (
        /**
         * @summary `connection`.
         * @public
         * @readonly
         */
        readonly connection: ConnectionID,
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
         * @summary `connectionMode`.
         * @public
         * @readonly
         */
        readonly connectionMode: ConnectionMode,
        /**
         * @summary `requestedConnectionState`.
         * @public
         * @readonly
         */
        readonly requestedConnectionState: OPTIONAL<LocalConnectionState>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a AttachMediaServiceArgument
     * @description
     * 
     * This takes an `object` and converts it to a `AttachMediaServiceArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttachMediaServiceArgument`.
     * @returns {AttachMediaServiceArgument}
     */
    public static _from_object (_o: { [_K in keyof (AttachMediaServiceArgument)]: (AttachMediaServiceArgument)[_K] }): AttachMediaServiceArgument {
        return new AttachMediaServiceArgument(_o.connection, _o.mediaServiceType, _o.mediaServiceVersion, _o.mediaServiceInstanceID, _o.connectionMode, _o.requestedConnectionState, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `mediaServiceType`
         * @public
         * @static
         */

    public static _enum_for_mediaServiceType = _enum_for_MediaServiceType;        /**
         * @summary The enum used as the type of the component `connectionMode`
         * @public
         * @static
         */

    public static _enum_for_connectionMode = _enum_for_ConnectionMode;
}

/**
 * @summary The Leading Root Component Types of AttachMediaServiceArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttachMediaServiceArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("connection", false, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("mediaServiceType", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("mediaServiceVersion", true, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("mediaServiceInstanceID", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("connectionMode", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("requestedConnectionState", true, $.hasTag(_TagClass.application, 14), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of AttachMediaServiceArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttachMediaServiceArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttachMediaServiceArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttachMediaServiceArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttachMediaServiceArgument: $.ASN1Decoder<AttachMediaServiceArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttachMediaServiceArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttachMediaServiceArgument (el: _Element): AttachMediaServiceArgument {
    if (!_cached_decoder_for_AttachMediaServiceArgument) { _cached_decoder_for_AttachMediaServiceArgument = function (el: _Element): AttachMediaServiceArgument {
    let connection!: ConnectionID;
    let mediaServiceType!: MediaServiceType;
    let mediaServiceVersion: OPTIONAL<INTEGER>;
    let mediaServiceInstanceID: OPTIONAL<MediaServiceInstanceID>;
    let connectionMode!: ConnectionMode;
    let requestedConnectionState: OPTIONAL<LocalConnectionState>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "connection": (_el: _Element): void => { connection = _decode_ConnectionID(_el); },
        "mediaServiceType": (_el: _Element): void => { mediaServiceType = _decode_MediaServiceType(_el); },
        "mediaServiceVersion": (_el: _Element): void => { mediaServiceVersion = $._decodeInteger(_el); },
        "mediaServiceInstanceID": (_el: _Element): void => { mediaServiceInstanceID = _decode_MediaServiceInstanceID(_el); },
        "connectionMode": (_el: _Element): void => { connectionMode = _decode_ConnectionMode(_el); },
        "requestedConnectionState": (_el: _Element): void => { requestedConnectionState = _decode_LocalConnectionState(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttachMediaServiceArgument,
        _extension_additions_list_spec_for_AttachMediaServiceArgument,
        _root_component_type_list_2_spec_for_AttachMediaServiceArgument,
        undefined,
    );
    return new AttachMediaServiceArgument(
        connection,
        mediaServiceType,
        mediaServiceVersion,
        mediaServiceInstanceID,
        connectionMode,
        requestedConnectionState,
        extensions
    );
}; }
    return _cached_decoder_for_AttachMediaServiceArgument(el);
}

let _cached_encoder_for_AttachMediaServiceArgument: $.ASN1Encoder<AttachMediaServiceArgument> | null = null;

/**
 * @summary Encodes a(n) AttachMediaServiceArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttachMediaServiceArgument, encoded as an ASN.1 Element.
 */
export
function _encode_AttachMediaServiceArgument (value: AttachMediaServiceArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttachMediaServiceArgument) { _cached_encoder_for_AttachMediaServiceArgument = function (value: AttachMediaServiceArgument, elGetter: $.ASN1Encoder<AttachMediaServiceArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.connection, $.BER),
            /* REQUIRED   */ _encode_MediaServiceType(value.mediaServiceType, $.BER),
            /* IF_ABSENT  */ ((value.mediaServiceVersion === undefined) ? undefined : $._encodeInteger(value.mediaServiceVersion, $.BER)),
            /* IF_ABSENT  */ ((value.mediaServiceInstanceID === undefined) ? undefined : _encode_MediaServiceInstanceID(value.mediaServiceInstanceID, $.BER)),
            /* REQUIRED   */ _encode_ConnectionMode(value.connectionMode, $.BER),
            /* IF_ABSENT  */ ((value.requestedConnectionState === undefined) ? undefined : _encode_LocalConnectionState(value.requestedConnectionState, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AttachMediaServiceArgument(value, elGetter);
}


/* eslint-enable */
