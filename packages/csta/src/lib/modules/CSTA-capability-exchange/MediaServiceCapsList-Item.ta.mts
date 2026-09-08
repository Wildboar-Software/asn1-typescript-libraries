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
import { MediaServiceType, _enum_for_MediaServiceType, MediaServiceType_cstaVoiceUnit /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaVoiceUnit /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_dataModem /* IMPORTED_LONG_ENUMERATION_ITEM */, dataModem /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataIsochronousIeee1394 /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataIsochronousIeee1394 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataIsochronousGeoport /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataIsochronousGeoport /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataIsochronousIeeeAtm /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataIsochronousIeeeAtm /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataIsochronousIeeeIsdn /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataIsochronousIeeeIsdn /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataApi /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataApi /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_ectfS100MediaServicesDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, ectfS100MediaServicesDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_ectfS100MediaServicesAppServices /* IMPORTED_LONG_ENUMERATION_ITEM */, ectfS100MediaServicesAppServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript1 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript2 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript3 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript4 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript5 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript6 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript7 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript7 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript8 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript8 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript9 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript9 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript10 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript10 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureAnalog /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureAnalog /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundTransmitAnalog /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundTransmitAnalog /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureIeee1394 /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureIeee1394 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundTransmitIeee1394 /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundTransmitIeee1394 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureTransmitGeoport /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureTransmitGeoport /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureTransmitAtm /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureTransmitAtm /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureTransmitISDN /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureTransmitISDN /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_soundCaptureTransmitADPCM /* IMPORTED_LONG_ENUMERATION_ITEM */, soundCaptureTransmitADPCM /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_soundCaptureTransmitApi /* IMPORTED_LONG_ENUMERATION_ITEM */, soundCaptureTransmitApi /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_usb /* IMPORTED_LONG_ENUMERATION_ITEM */, usb /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific1 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific2 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific3 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific4 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific5 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific6 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific7 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific7 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific8 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific8 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific9 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific9 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific10 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific10 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MediaServiceType, _encode_MediaServiceType } from "../CSTA-media-services/MediaServiceType.ta.mjs";
// export { MediaServiceType, _enum_for_MediaServiceType, MediaServiceType_cstaVoiceUnit /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaVoiceUnit /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_dataModem /* IMPORTED_LONG_ENUMERATION_ITEM */, dataModem /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataIsochronousIeee1394 /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataIsochronousIeee1394 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataIsochronousGeoport /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataIsochronousGeoport /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataIsochronousIeeeAtm /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataIsochronousIeeeAtm /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataIsochronousIeeeIsdn /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataIsochronousIeeeIsdn /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_digitalDataApi /* IMPORTED_LONG_ENUMERATION_ITEM */, digitalDataApi /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_ectfS100MediaServicesDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, ectfS100MediaServicesDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_ectfS100MediaServicesAppServices /* IMPORTED_LONG_ENUMERATION_ITEM */, ectfS100MediaServicesAppServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript1 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript2 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript3 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript4 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript5 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript6 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript7 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript7 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript8 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript8 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript9 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript9 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_cstaIVRScript10 /* IMPORTED_LONG_ENUMERATION_ITEM */, cstaIVRScript10 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureAnalog /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureAnalog /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundTransmitAnalog /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundTransmitAnalog /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureIeee1394 /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureIeee1394 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundTransmitIeee1394 /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundTransmitIeee1394 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureTransmitGeoport /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureTransmitGeoport /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureTransmitAtm /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureTransmitAtm /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_liveSoundCaptureTransmitISDN /* IMPORTED_LONG_ENUMERATION_ITEM */, liveSoundCaptureTransmitISDN /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_soundCaptureTransmitADPCM /* IMPORTED_LONG_ENUMERATION_ITEM */, soundCaptureTransmitADPCM /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_soundCaptureTransmitApi /* IMPORTED_LONG_ENUMERATION_ITEM */, soundCaptureTransmitApi /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_usb /* IMPORTED_LONG_ENUMERATION_ITEM */, usb /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific1 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific2 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific3 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific4 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific5 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific6 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific7 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific7 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific8 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific8 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific9 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific9 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaServiceType_sfSpecific10 /* IMPORTED_LONG_ENUMERATION_ITEM */, sfSpecific10 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MediaServiceType, _encode_MediaServiceType } from "../CSTA-media-services/MediaServiceType.ta.mjs";
import { MediaServiceInstanceID, _decode_MediaServiceInstanceID, _encode_MediaServiceInstanceID } from "../CSTA-media-services/MediaServiceInstanceID.ta.mjs";
// export { MediaServiceInstanceID, _decode_MediaServiceInstanceID, _encode_MediaServiceInstanceID } from "../CSTA-media-services/MediaServiceInstanceID.ta.mjs";
import { ConnectionModeBMap, ConnectionModeBMap_consultationConference /* IMPORTED_LONG_NAMED_BIT */, consultationConference /* IMPORTED_SHORT_NAMED_BIT */, ConnectionModeBMap_consultationConferenceHold /* IMPORTED_LONG_NAMED_BIT */, consultationConferenceHold /* IMPORTED_SHORT_NAMED_BIT */, ConnectionModeBMap_deflect /* IMPORTED_LONG_NAMED_BIT */, deflect /* IMPORTED_SHORT_NAMED_BIT */, ConnectionModeBMap_directedPickup /* IMPORTED_LONG_NAMED_BIT */, directedPickup /* IMPORTED_SHORT_NAMED_BIT */, ConnectionModeBMap_join /* IMPORTED_LONG_NAMED_BIT */, join /* IMPORTED_SHORT_NAMED_BIT */, ConnectionModeBMap_singleStepConference /* IMPORTED_LONG_NAMED_BIT */, singleStepConference /* IMPORTED_SHORT_NAMED_BIT */, ConnectionModeBMap_singleStepConferenceHold /* IMPORTED_LONG_NAMED_BIT */, singleStepConferenceHold /* IMPORTED_SHORT_NAMED_BIT */, ConnectionModeBMap_singleStepTransfer /* IMPORTED_LONG_NAMED_BIT */, singleStepTransfer /* IMPORTED_SHORT_NAMED_BIT */, ConnectionModeBMap_transfer /* IMPORTED_LONG_NAMED_BIT */, transfer /* IMPORTED_SHORT_NAMED_BIT */, ConnectionModeBMap_direct /* IMPORTED_LONG_NAMED_BIT */, direct /* IMPORTED_SHORT_NAMED_BIT */, _decode_ConnectionModeBMap, _encode_ConnectionModeBMap } from "../CSTA-media-services/ConnectionModeBMap.ta.mjs";
// export { ConnectionModeBMap, ConnectionModeBMap_consultationConference /* IMPORTED_LONG_NAMED_BIT */, consultationConference /* IMPORTED_SHORT_NAMED_BIT */, ConnectionModeBMap_consultationConferenceHold /* IMPORTED_LONG_NAMED_BIT */, consultationConferenceHold /* IMPORTED_SHORT_NAMED_BIT */, ConnectionModeBMap_deflect /* IMPORTED_LONG_NAMED_BIT */, deflect /* IMPORTED_SHORT_NAMED_BIT */, ConnectionModeBMap_directedPickup /* IMPORTED_LONG_NAMED_BIT */, directedPickup /* IMPORTED_SHORT_NAMED_BIT */, ConnectionModeBMap_join /* IMPORTED_LONG_NAMED_BIT */, join /* IMPORTED_SHORT_NAMED_BIT */, ConnectionModeBMap_singleStepConference /* IMPORTED_LONG_NAMED_BIT */, singleStepConference /* IMPORTED_SHORT_NAMED_BIT */, ConnectionModeBMap_singleStepConferenceHold /* IMPORTED_LONG_NAMED_BIT */, singleStepConferenceHold /* IMPORTED_SHORT_NAMED_BIT */, ConnectionModeBMap_singleStepTransfer /* IMPORTED_LONG_NAMED_BIT */, singleStepTransfer /* IMPORTED_SHORT_NAMED_BIT */, ConnectionModeBMap_transfer /* IMPORTED_LONG_NAMED_BIT */, transfer /* IMPORTED_SHORT_NAMED_BIT */, ConnectionModeBMap_direct /* IMPORTED_LONG_NAMED_BIT */, direct /* IMPORTED_SHORT_NAMED_BIT */, _decode_ConnectionModeBMap, _encode_ConnectionModeBMap } from "../CSTA-media-services/ConnectionModeBMap.ta.mjs";


/**
 * @summary MediaServiceCapsList_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaServiceCapsList-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class MediaServiceCapsList_Item {
    constructor (
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
         * @summary `mediaServiceInstance`.
         * @public
         * @readonly
         */
        readonly mediaServiceInstance: OPTIONAL<MediaServiceInstanceID>,
        /**
         * @summary `connectionMode`.
         * @public
         * @readonly
         */
        readonly connectionMode: OPTIONAL<ConnectionModeBMap>,
        /**
         * @summary `mediaStreamIDSupported`.
         * @public
         * @readonly
         */
        readonly mediaStreamIDSupported: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a MediaServiceCapsList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `MediaServiceCapsList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MediaServiceCapsList_Item`.
     * @returns {MediaServiceCapsList_Item}
     */
    public static _from_object (_o: { [_K in keyof (MediaServiceCapsList_Item)]: (MediaServiceCapsList_Item)[_K] }): MediaServiceCapsList_Item {
        return new MediaServiceCapsList_Item(_o.mediaServiceType, _o.mediaServiceVersion, _o.mediaServiceInstance, _o.connectionMode, _o.mediaStreamIDSupported);
    }

        /**
         * @summary The enum used as the type of the component `mediaServiceType`
         * @public
         * @static
         */

    public static _enum_for_mediaServiceType = _enum_for_MediaServiceType;
}

/**
 * @summary The Leading Root Component Types of MediaServiceCapsList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MediaServiceCapsList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("mediaServiceType", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("mediaServiceVersion", true, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("mediaServiceInstance", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("connectionMode", true, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("mediaStreamIDSupported", false, $.hasTag(_TagClass.universal, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MediaServiceCapsList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MediaServiceCapsList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MediaServiceCapsList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MediaServiceCapsList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MediaServiceCapsList_Item: $.ASN1Decoder<MediaServiceCapsList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaServiceCapsList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaServiceCapsList_Item (el: _Element): MediaServiceCapsList_Item {
    if (!_cached_decoder_for_MediaServiceCapsList_Item) { _cached_decoder_for_MediaServiceCapsList_Item = function (el: _Element): MediaServiceCapsList_Item {
    let mediaServiceType!: MediaServiceType;
    let mediaServiceVersion: OPTIONAL<INTEGER>;
    let mediaServiceInstance: OPTIONAL<MediaServiceInstanceID>;
    let connectionMode: OPTIONAL<ConnectionModeBMap>;
    let mediaStreamIDSupported!: BOOLEAN;
    const callbacks: $.DecodingMap = {
        "mediaServiceType": (_el: _Element): void => { mediaServiceType = _decode_MediaServiceType(_el); },
        "mediaServiceVersion": (_el: _Element): void => { mediaServiceVersion = $._decodeInteger(_el); },
        "mediaServiceInstance": (_el: _Element): void => { mediaServiceInstance = _decode_MediaServiceInstanceID(_el); },
        "connectionMode": (_el: _Element): void => { connectionMode = _decode_ConnectionModeBMap(_el); },
        "mediaStreamIDSupported": (_el: _Element): void => { mediaStreamIDSupported = $._decodeBoolean(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MediaServiceCapsList_Item,
        _extension_additions_list_spec_for_MediaServiceCapsList_Item,
        _root_component_type_list_2_spec_for_MediaServiceCapsList_Item,
        undefined,
    );
    return new MediaServiceCapsList_Item(
        mediaServiceType,
        mediaServiceVersion,
        mediaServiceInstance,
        connectionMode,
        mediaStreamIDSupported
    );
}; }
    return _cached_decoder_for_MediaServiceCapsList_Item(el);
}

let _cached_encoder_for_MediaServiceCapsList_Item: $.ASN1Encoder<MediaServiceCapsList_Item> | null = null;

/**
 * @summary Encodes a(n) MediaServiceCapsList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaServiceCapsList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_MediaServiceCapsList_Item (value: MediaServiceCapsList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaServiceCapsList_Item) { _cached_encoder_for_MediaServiceCapsList_Item = function (value: MediaServiceCapsList_Item, elGetter: $.ASN1Encoder<MediaServiceCapsList_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_MediaServiceType(value.mediaServiceType, $.BER),
            /* IF_ABSENT  */ ((value.mediaServiceVersion === undefined) ? undefined : $._encodeInteger(value.mediaServiceVersion, $.BER)),
            /* IF_ABSENT  */ ((value.mediaServiceInstance === undefined) ? undefined : _encode_MediaServiceInstanceID(value.mediaServiceInstance, $.BER)),
            /* IF_ABSENT  */ ((value.connectionMode === undefined) ? undefined : _encode_ConnectionModeBMap(value.connectionMode, $.BER)),
            /* REQUIRED   */ $._encodeBoolean(value.mediaStreamIDSupported, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MediaServiceCapsList_Item(value, elGetter);
}


/* eslint-enable */
