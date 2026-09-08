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
import { MediaStreamID, _decode_MediaStreamID, _encode_MediaStreamID } from "../CSTA-media-services/MediaStreamID.ta.mjs";
// export { MediaStreamID, _decode_MediaStreamID, _encode_MediaStreamID } from "../CSTA-media-services/MediaStreamID.ta.mjs";
import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";
// export { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";


/**
 * @summary CallMediaInfoList_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallMediaInfoList-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class CallMediaInfoList_Item {
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
         * @summary `mediaStreamID`.
         * @public
         * @readonly
         */
        readonly mediaStreamID: OPTIONAL<MediaStreamID>,
        /**
         * @summary `connectionInformation`.
         * @public
         * @readonly
         */
        readonly connectionInformation: OPTIONAL<ConnectionInformation>
    ) {}

    /**
     * @summary Restructures an object into a CallMediaInfoList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `CallMediaInfoList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallMediaInfoList_Item`.
     * @returns {CallMediaInfoList_Item}
     */
    public static _from_object (_o: { [_K in keyof (CallMediaInfoList_Item)]: (CallMediaInfoList_Item)[_K] }): CallMediaInfoList_Item {
        return new CallMediaInfoList_Item(_o.mediaServiceType, _o.mediaServiceVersion, _o.mediaServiceInstance, _o.mediaStreamID, _o.connectionInformation);
    }

        /**
         * @summary The enum used as the type of the component `mediaServiceType`
         * @public
         * @static
         */

    public static _enum_for_mediaServiceType = _enum_for_MediaServiceType;
}

/**
 * @summary The Leading Root Component Types of CallMediaInfoList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallMediaInfoList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("mediaServiceType", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("mediaServiceVersion", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("mediaServiceInstance", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("mediaStreamID", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("connectionInformation", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CallMediaInfoList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallMediaInfoList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallMediaInfoList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallMediaInfoList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallMediaInfoList_Item: $.ASN1Decoder<CallMediaInfoList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallMediaInfoList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallMediaInfoList_Item (el: _Element): CallMediaInfoList_Item {
    if (!_cached_decoder_for_CallMediaInfoList_Item) { _cached_decoder_for_CallMediaInfoList_Item = function (el: _Element): CallMediaInfoList_Item {
    let mediaServiceType!: MediaServiceType;
    let mediaServiceVersion: OPTIONAL<INTEGER>;
    let mediaServiceInstance: OPTIONAL<MediaServiceInstanceID>;
    let mediaStreamID: OPTIONAL<MediaStreamID>;
    let connectionInformation: OPTIONAL<ConnectionInformation>;
    const callbacks: $.DecodingMap = {
        "mediaServiceType": (_el: _Element): void => { mediaServiceType = $._decode_implicit<MediaServiceType>(() => _decode_MediaServiceType)(_el); },
        "mediaServiceVersion": (_el: _Element): void => { mediaServiceVersion = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mediaServiceInstance": (_el: _Element): void => { mediaServiceInstance = $._decode_implicit<MediaServiceInstanceID>(() => _decode_MediaServiceInstanceID)(_el); },
        "mediaStreamID": (_el: _Element): void => { mediaStreamID = $._decode_implicit<MediaStreamID>(() => _decode_MediaStreamID)(_el); },
        "connectionInformation": (_el: _Element): void => { connectionInformation = $._decode_implicit<ConnectionInformation>(() => _decode_ConnectionInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallMediaInfoList_Item,
        _extension_additions_list_spec_for_CallMediaInfoList_Item,
        _root_component_type_list_2_spec_for_CallMediaInfoList_Item,
        undefined,
    );
    return new CallMediaInfoList_Item(
        mediaServiceType,
        mediaServiceVersion,
        mediaServiceInstance,
        mediaStreamID,
        connectionInformation
    );
}; }
    return _cached_decoder_for_CallMediaInfoList_Item(el);
}

let _cached_encoder_for_CallMediaInfoList_Item: $.ASN1Encoder<CallMediaInfoList_Item> | null = null;

/**
 * @summary Encodes a(n) CallMediaInfoList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallMediaInfoList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_CallMediaInfoList_Item (value: CallMediaInfoList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallMediaInfoList_Item) { _cached_encoder_for_CallMediaInfoList_Item = function (value: CallMediaInfoList_Item, elGetter: $.ASN1Encoder<CallMediaInfoList_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_MediaServiceType, $.BER)(value.mediaServiceType, $.BER),
            /* IF_ABSENT  */ ((value.mediaServiceVersion === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.mediaServiceVersion, $.BER)),
            /* IF_ABSENT  */ ((value.mediaServiceInstance === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_MediaServiceInstanceID, $.BER)(value.mediaServiceInstance, $.BER)),
            /* IF_ABSENT  */ ((value.mediaStreamID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_MediaStreamID, $.BER)(value.mediaStreamID, $.BER)),
            /* IF_ABSENT  */ ((value.connectionInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ConnectionInformation, $.BER)(value.connectionInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallMediaInfoList_Item(value, elGetter);
}


/* eslint-enable */
