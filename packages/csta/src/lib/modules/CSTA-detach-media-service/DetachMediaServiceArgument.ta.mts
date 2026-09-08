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
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary DetachMediaServiceArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DetachMediaServiceArgument ::= SEQUENCE
 * {    connection             ConnectionID,
 *     mediaServiceType        MediaServiceType,
 *     extensions             CSTACommonArguments        OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DetachMediaServiceArgument {
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
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a DetachMediaServiceArgument
     * @description
     * 
     * This takes an `object` and converts it to a `DetachMediaServiceArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DetachMediaServiceArgument`.
     * @returns {DetachMediaServiceArgument}
     */
    public static _from_object (_o: { [_K in keyof (DetachMediaServiceArgument)]: (DetachMediaServiceArgument)[_K] }): DetachMediaServiceArgument {
        return new DetachMediaServiceArgument(_o.connection, _o.mediaServiceType, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `mediaServiceType`
         * @public
         * @static
         */

    public static _enum_for_mediaServiceType = _enum_for_MediaServiceType;
}

/**
 * @summary The Leading Root Component Types of DetachMediaServiceArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DetachMediaServiceArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("connection", false, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("mediaServiceType", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of DetachMediaServiceArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DetachMediaServiceArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DetachMediaServiceArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DetachMediaServiceArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DetachMediaServiceArgument: $.ASN1Decoder<DetachMediaServiceArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DetachMediaServiceArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DetachMediaServiceArgument (el: _Element): DetachMediaServiceArgument {
    if (!_cached_decoder_for_DetachMediaServiceArgument) { _cached_decoder_for_DetachMediaServiceArgument = function (el: _Element): DetachMediaServiceArgument {
    let connection!: ConnectionID;
    let mediaServiceType!: MediaServiceType;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "connection": (_el: _Element): void => { connection = _decode_ConnectionID(_el); },
        "mediaServiceType": (_el: _Element): void => { mediaServiceType = _decode_MediaServiceType(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DetachMediaServiceArgument,
        _extension_additions_list_spec_for_DetachMediaServiceArgument,
        _root_component_type_list_2_spec_for_DetachMediaServiceArgument,
        undefined,
    );
    return new DetachMediaServiceArgument(
        connection,
        mediaServiceType,
        extensions
    );
}; }
    return _cached_decoder_for_DetachMediaServiceArgument(el);
}

let _cached_encoder_for_DetachMediaServiceArgument: $.ASN1Encoder<DetachMediaServiceArgument> | null = null;

/**
 * @summary Encodes a(n) DetachMediaServiceArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DetachMediaServiceArgument, encoded as an ASN.1 Element.
 */
export
function _encode_DetachMediaServiceArgument (value: DetachMediaServiceArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DetachMediaServiceArgument) { _cached_encoder_for_DetachMediaServiceArgument = function (value: DetachMediaServiceArgument, elGetter: $.ASN1Encoder<DetachMediaServiceArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.connection, $.BER),
            /* REQUIRED   */ _encode_MediaServiceType(value.mediaServiceType, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DetachMediaServiceArgument(value, elGetter);
}


/* eslint-enable */
