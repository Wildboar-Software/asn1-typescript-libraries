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
import { CallControlServices, CallControlServices_acceptCall /* IMPORTED_LONG_NAMED_BIT */, acceptCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_alternateCall /* IMPORTED_LONG_NAMED_BIT */, alternateCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_answerCall /* IMPORTED_LONG_NAMED_BIT */, answerCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_callBack /* IMPORTED_LONG_NAMED_BIT */, callBack /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_callBackMessage /* IMPORTED_LONG_NAMED_BIT */, callBackMessage /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_campOnCall /* IMPORTED_LONG_NAMED_BIT */, campOnCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_clearCall /* IMPORTED_LONG_NAMED_BIT */, clearCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_clearConnection /* IMPORTED_LONG_NAMED_BIT */, clearConnection /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_conferenceCall /* IMPORTED_LONG_NAMED_BIT */, conferenceCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_consultationCall /* IMPORTED_LONG_NAMED_BIT */, consultationCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_deflectCall /* IMPORTED_LONG_NAMED_BIT */, deflectCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_dialDigits /* IMPORTED_LONG_NAMED_BIT */, dialDigits /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_directedPickupCall /* IMPORTED_LONG_NAMED_BIT */, directedPickupCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_groupPickupCall /* IMPORTED_LONG_NAMED_BIT */, groupPickupCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_holdCall /* IMPORTED_LONG_NAMED_BIT */, holdCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_intrudeCall /* IMPORTED_LONG_NAMED_BIT */, intrudeCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_joinCall /* IMPORTED_LONG_NAMED_BIT */, joinCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_makeCall /* IMPORTED_LONG_NAMED_BIT */, makeCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_makeConnection /* IMPORTED_LONG_NAMED_BIT */, makeConnection /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_makePredictiveCall /* IMPORTED_LONG_NAMED_BIT */, makePredictiveCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_parkCall /* IMPORTED_LONG_NAMED_BIT */, parkCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_reconnectCall /* IMPORTED_LONG_NAMED_BIT */, reconnectCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_retrieveCall /* IMPORTED_LONG_NAMED_BIT */, retrieveCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_sendMessage /* IMPORTED_LONG_NAMED_BIT */, sendMessage /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_singleStepConference /* IMPORTED_LONG_NAMED_BIT */, singleStepConference /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_singleStepTransfer /* IMPORTED_LONG_NAMED_BIT */, singleStepTransfer /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_transferCall /* IMPORTED_LONG_NAMED_BIT */, transferCall /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallControlServices, _encode_CallControlServices } from "../CSTA-application-context-information-csta3/CallControlServices.ta.mjs";
// export { CallControlServices, CallControlServices_acceptCall /* IMPORTED_LONG_NAMED_BIT */, acceptCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_alternateCall /* IMPORTED_LONG_NAMED_BIT */, alternateCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_answerCall /* IMPORTED_LONG_NAMED_BIT */, answerCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_callBack /* IMPORTED_LONG_NAMED_BIT */, callBack /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_callBackMessage /* IMPORTED_LONG_NAMED_BIT */, callBackMessage /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_campOnCall /* IMPORTED_LONG_NAMED_BIT */, campOnCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_clearCall /* IMPORTED_LONG_NAMED_BIT */, clearCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_clearConnection /* IMPORTED_LONG_NAMED_BIT */, clearConnection /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_conferenceCall /* IMPORTED_LONG_NAMED_BIT */, conferenceCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_consultationCall /* IMPORTED_LONG_NAMED_BIT */, consultationCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_deflectCall /* IMPORTED_LONG_NAMED_BIT */, deflectCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_dialDigits /* IMPORTED_LONG_NAMED_BIT */, dialDigits /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_directedPickupCall /* IMPORTED_LONG_NAMED_BIT */, directedPickupCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_groupPickupCall /* IMPORTED_LONG_NAMED_BIT */, groupPickupCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_holdCall /* IMPORTED_LONG_NAMED_BIT */, holdCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_intrudeCall /* IMPORTED_LONG_NAMED_BIT */, intrudeCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_joinCall /* IMPORTED_LONG_NAMED_BIT */, joinCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_makeCall /* IMPORTED_LONG_NAMED_BIT */, makeCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_makeConnection /* IMPORTED_LONG_NAMED_BIT */, makeConnection /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_makePredictiveCall /* IMPORTED_LONG_NAMED_BIT */, makePredictiveCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_parkCall /* IMPORTED_LONG_NAMED_BIT */, parkCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_reconnectCall /* IMPORTED_LONG_NAMED_BIT */, reconnectCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_retrieveCall /* IMPORTED_LONG_NAMED_BIT */, retrieveCall /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_sendMessage /* IMPORTED_LONG_NAMED_BIT */, sendMessage /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_singleStepConference /* IMPORTED_LONG_NAMED_BIT */, singleStepConference /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_singleStepTransfer /* IMPORTED_LONG_NAMED_BIT */, singleStepTransfer /* IMPORTED_SHORT_NAMED_BIT */, CallControlServices_transferCall /* IMPORTED_LONG_NAMED_BIT */, transferCall /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallControlServices, _encode_CallControlServices } from "../CSTA-application-context-information-csta3/CallControlServices.ta.mjs";
import { CallAssociatedServices, CallAssociatedServices_associateData /* IMPORTED_LONG_NAMED_BIT */, associateData /* IMPORTED_SHORT_NAMED_BIT */, CallAssociatedServices_cancelTelephonyTones /* IMPORTED_LONG_NAMED_BIT */, cancelTelephonyTones /* IMPORTED_SHORT_NAMED_BIT */, CallAssociatedServices_changeConnectionInformation /* IMPORTED_LONG_NAMED_BIT */, changeConnectionInformation /* IMPORTED_SHORT_NAMED_BIT */, CallAssociatedServices_generateDigits /* IMPORTED_LONG_NAMED_BIT */, generateDigits /* IMPORTED_SHORT_NAMED_BIT */, CallAssociatedServices_generateTelephonyTones /* IMPORTED_LONG_NAMED_BIT */, generateTelephonyTones /* IMPORTED_SHORT_NAMED_BIT */, CallAssociatedServices_sendUserInformation /* IMPORTED_LONG_NAMED_BIT */, sendUserInformation /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallAssociatedServices, _encode_CallAssociatedServices } from "../CSTA-application-context-information-csta3/CallAssociatedServices.ta.mjs";
// export { CallAssociatedServices, CallAssociatedServices_associateData /* IMPORTED_LONG_NAMED_BIT */, associateData /* IMPORTED_SHORT_NAMED_BIT */, CallAssociatedServices_cancelTelephonyTones /* IMPORTED_LONG_NAMED_BIT */, cancelTelephonyTones /* IMPORTED_SHORT_NAMED_BIT */, CallAssociatedServices_changeConnectionInformation /* IMPORTED_LONG_NAMED_BIT */, changeConnectionInformation /* IMPORTED_SHORT_NAMED_BIT */, CallAssociatedServices_generateDigits /* IMPORTED_LONG_NAMED_BIT */, generateDigits /* IMPORTED_SHORT_NAMED_BIT */, CallAssociatedServices_generateTelephonyTones /* IMPORTED_LONG_NAMED_BIT */, generateTelephonyTones /* IMPORTED_SHORT_NAMED_BIT */, CallAssociatedServices_sendUserInformation /* IMPORTED_LONG_NAMED_BIT */, sendUserInformation /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallAssociatedServices, _encode_CallAssociatedServices } from "../CSTA-application-context-information-csta3/CallAssociatedServices.ta.mjs";
import { MediaAttachmentServices, MediaAttachmentServices_attachMediaService /* IMPORTED_LONG_NAMED_BIT */, attachMediaService /* IMPORTED_SHORT_NAMED_BIT */, MediaAttachmentServices_detachMediaService /* IMPORTED_LONG_NAMED_BIT */, detachMediaService /* IMPORTED_SHORT_NAMED_BIT */, _decode_MediaAttachmentServices, _encode_MediaAttachmentServices } from "../CSTA-application-context-information-csta3/MediaAttachmentServices.ta.mjs";
// export { MediaAttachmentServices, MediaAttachmentServices_attachMediaService /* IMPORTED_LONG_NAMED_BIT */, attachMediaService /* IMPORTED_SHORT_NAMED_BIT */, MediaAttachmentServices_detachMediaService /* IMPORTED_LONG_NAMED_BIT */, detachMediaService /* IMPORTED_SHORT_NAMED_BIT */, _decode_MediaAttachmentServices, _encode_MediaAttachmentServices } from "../CSTA-application-context-information-csta3/MediaAttachmentServices.ta.mjs";
import { RouteingServices, RouteingServices_routeRegister /* IMPORTED_LONG_NAMED_BIT */, routeRegister /* IMPORTED_SHORT_NAMED_BIT */, RouteingServices_routeRegisterCancel /* IMPORTED_LONG_NAMED_BIT */, routeRegisterCancel /* IMPORTED_SHORT_NAMED_BIT */, RouteingServices_routeRegisterAbort /* IMPORTED_LONG_NAMED_BIT */, routeRegisterAbort /* IMPORTED_SHORT_NAMED_BIT */, RouteingServices_reroute /* IMPORTED_LONG_NAMED_BIT */, reroute /* IMPORTED_SHORT_NAMED_BIT */, RouteingServices_routeEnd /* IMPORTED_LONG_NAMED_BIT */, routeEnd /* IMPORTED_SHORT_NAMED_BIT */, RouteingServices_routeReject /* IMPORTED_LONG_NAMED_BIT */, routeReject /* IMPORTED_SHORT_NAMED_BIT */, RouteingServices_routeRequest /* IMPORTED_LONG_NAMED_BIT */, routeRequest /* IMPORTED_SHORT_NAMED_BIT */, RouteingServices_routeSelect /* IMPORTED_LONG_NAMED_BIT */, routeSelect /* IMPORTED_SHORT_NAMED_BIT */, RouteingServices_routeUsed /* IMPORTED_LONG_NAMED_BIT */, routeUsed /* IMPORTED_SHORT_NAMED_BIT */, _decode_RouteingServices, _encode_RouteingServices } from "../CSTA-application-context-information-csta3/RouteingServices.ta.mjs";
// export { RouteingServices, RouteingServices_routeRegister /* IMPORTED_LONG_NAMED_BIT */, routeRegister /* IMPORTED_SHORT_NAMED_BIT */, RouteingServices_routeRegisterCancel /* IMPORTED_LONG_NAMED_BIT */, routeRegisterCancel /* IMPORTED_SHORT_NAMED_BIT */, RouteingServices_routeRegisterAbort /* IMPORTED_LONG_NAMED_BIT */, routeRegisterAbort /* IMPORTED_SHORT_NAMED_BIT */, RouteingServices_reroute /* IMPORTED_LONG_NAMED_BIT */, reroute /* IMPORTED_SHORT_NAMED_BIT */, RouteingServices_routeEnd /* IMPORTED_LONG_NAMED_BIT */, routeEnd /* IMPORTED_SHORT_NAMED_BIT */, RouteingServices_routeReject /* IMPORTED_LONG_NAMED_BIT */, routeReject /* IMPORTED_SHORT_NAMED_BIT */, RouteingServices_routeRequest /* IMPORTED_LONG_NAMED_BIT */, routeRequest /* IMPORTED_SHORT_NAMED_BIT */, RouteingServices_routeSelect /* IMPORTED_LONG_NAMED_BIT */, routeSelect /* IMPORTED_SHORT_NAMED_BIT */, RouteingServices_routeUsed /* IMPORTED_LONG_NAMED_BIT */, routeUsed /* IMPORTED_SHORT_NAMED_BIT */, _decode_RouteingServices, _encode_RouteingServices } from "../CSTA-application-context-information-csta3/RouteingServices.ta.mjs";
import { VoiceUnitServices, VoiceUnitServices_activate /* IMPORTED_LONG_NAMED_BIT */, activate /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_clear /* IMPORTED_LONG_NAMED_BIT */, clear /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_concatenateMessage /* IMPORTED_LONG_NAMED_BIT */, concatenateMessage /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_deactivate /* IMPORTED_LONG_NAMED_BIT */, deactivate /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_deleteMessage /* IMPORTED_LONG_NAMED_BIT */, deleteMessage /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_playMessage /* IMPORTED_LONG_NAMED_BIT */, playMessage /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_queryVoiceAttribute /* IMPORTED_LONG_NAMED_BIT */, queryVoiceAttribute /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_recordMessage /* IMPORTED_LONG_NAMED_BIT */, recordMessage /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_reposition /* IMPORTED_LONG_NAMED_BIT */, reposition /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_resume /* IMPORTED_LONG_NAMED_BIT */, resume /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_review /* IMPORTED_LONG_NAMED_BIT */, review /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_setVoiceAttribute /* IMPORTED_LONG_NAMED_BIT */, setVoiceAttribute /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_stop /* IMPORTED_LONG_NAMED_BIT */, stop /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_suspend /* IMPORTED_LONG_NAMED_BIT */, suspend /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_synthesizeMessage /* IMPORTED_LONG_NAMED_BIT */, synthesizeMessage /* IMPORTED_SHORT_NAMED_BIT */, _decode_VoiceUnitServices, _encode_VoiceUnitServices } from "../CSTA-application-context-information-csta3/VoiceUnitServices.ta.mjs";
// export { VoiceUnitServices, VoiceUnitServices_activate /* IMPORTED_LONG_NAMED_BIT */, activate /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_clear /* IMPORTED_LONG_NAMED_BIT */, clear /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_concatenateMessage /* IMPORTED_LONG_NAMED_BIT */, concatenateMessage /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_deactivate /* IMPORTED_LONG_NAMED_BIT */, deactivate /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_deleteMessage /* IMPORTED_LONG_NAMED_BIT */, deleteMessage /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_playMessage /* IMPORTED_LONG_NAMED_BIT */, playMessage /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_queryVoiceAttribute /* IMPORTED_LONG_NAMED_BIT */, queryVoiceAttribute /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_recordMessage /* IMPORTED_LONG_NAMED_BIT */, recordMessage /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_reposition /* IMPORTED_LONG_NAMED_BIT */, reposition /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_resume /* IMPORTED_LONG_NAMED_BIT */, resume /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_review /* IMPORTED_LONG_NAMED_BIT */, review /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_setVoiceAttribute /* IMPORTED_LONG_NAMED_BIT */, setVoiceAttribute /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_stop /* IMPORTED_LONG_NAMED_BIT */, stop /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_suspend /* IMPORTED_LONG_NAMED_BIT */, suspend /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServices_synthesizeMessage /* IMPORTED_LONG_NAMED_BIT */, synthesizeMessage /* IMPORTED_SHORT_NAMED_BIT */, _decode_VoiceUnitServices, _encode_VoiceUnitServices } from "../CSTA-application-context-information-csta3/VoiceUnitServices.ta.mjs";


/**
 * @summary ServicesPermitted
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServicesPermitted ::= SEQUENCE
 * {     callControlServices                 CallControlServices,
 *     callAssociatedServices                 CallAssociatedServices,
 *     mediaAttachmentServices             MediaAttachmentServices,
 *     routeingServices                 RouteingServices,
 *     voiceUnitServices                 VoiceUnitServices }
 * ```
 * 
 * @class
 */
export
class ServicesPermitted {
    constructor (
        /**
         * @summary `callControlServices`.
         * @public
         * @readonly
         */
        readonly callControlServices: CallControlServices,
        /**
         * @summary `callAssociatedServices`.
         * @public
         * @readonly
         */
        readonly callAssociatedServices: CallAssociatedServices,
        /**
         * @summary `mediaAttachmentServices`.
         * @public
         * @readonly
         */
        readonly mediaAttachmentServices: MediaAttachmentServices,
        /**
         * @summary `routeingServices`.
         * @public
         * @readonly
         */
        readonly routeingServices: RouteingServices,
        /**
         * @summary `voiceUnitServices`.
         * @public
         * @readonly
         */
        readonly voiceUnitServices: VoiceUnitServices
    ) {}

    /**
     * @summary Restructures an object into a ServicesPermitted
     * @description
     * 
     * This takes an `object` and converts it to a `ServicesPermitted`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServicesPermitted`.
     * @returns {ServicesPermitted}
     */
    public static _from_object (_o: { [_K in keyof (ServicesPermitted)]: (ServicesPermitted)[_K] }): ServicesPermitted {
        return new ServicesPermitted(_o.callControlServices, _o.callAssociatedServices, _o.mediaAttachmentServices, _o.routeingServices, _o.voiceUnitServices);
    }


}

/**
 * @summary The Leading Root Component Types of ServicesPermitted
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServicesPermitted: $.ComponentSpec[] = [
    new $.ComponentSpec("callControlServices", false, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("callAssociatedServices", false, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("mediaAttachmentServices", false, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("routeingServices", false, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("voiceUnitServices", false, $.hasTag(_TagClass.universal, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ServicesPermitted
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServicesPermitted: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServicesPermitted
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServicesPermitted: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServicesPermitted: $.ASN1Decoder<ServicesPermitted> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServicesPermitted
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServicesPermitted (el: _Element): ServicesPermitted {
    if (!_cached_decoder_for_ServicesPermitted) { _cached_decoder_for_ServicesPermitted = function (el: _Element): ServicesPermitted {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("ServicesPermitted contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "callControlServices";
    sequence[1].name = "callAssociatedServices";
    sequence[2].name = "mediaAttachmentServices";
    sequence[3].name = "routeingServices";
    sequence[4].name = "voiceUnitServices";
    let callControlServices!: CallControlServices;
    let callAssociatedServices!: CallAssociatedServices;
    let mediaAttachmentServices!: MediaAttachmentServices;
    let routeingServices!: RouteingServices;
    let voiceUnitServices!: VoiceUnitServices;
    callControlServices = _decode_CallControlServices(sequence[0]);
    callAssociatedServices = _decode_CallAssociatedServices(sequence[1]);
    mediaAttachmentServices = _decode_MediaAttachmentServices(sequence[2]);
    routeingServices = _decode_RouteingServices(sequence[3]);
    voiceUnitServices = _decode_VoiceUnitServices(sequence[4]);
    return new ServicesPermitted(
        callControlServices,
        callAssociatedServices,
        mediaAttachmentServices,
        routeingServices,
        voiceUnitServices,

    );
}; }
    return _cached_decoder_for_ServicesPermitted(el);
}

let _cached_encoder_for_ServicesPermitted: $.ASN1Encoder<ServicesPermitted> | null = null;

/**
 * @summary Encodes a(n) ServicesPermitted into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServicesPermitted, encoded as an ASN.1 Element.
 */
export
function _encode_ServicesPermitted (value: ServicesPermitted, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServicesPermitted) { _cached_encoder_for_ServicesPermitted = function (value: ServicesPermitted, elGetter: $.ASN1Encoder<ServicesPermitted>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CallControlServices(value.callControlServices, $.BER),
            /* REQUIRED   */ _encode_CallAssociatedServices(value.callAssociatedServices, $.BER),
            /* REQUIRED   */ _encode_MediaAttachmentServices(value.mediaAttachmentServices, $.BER),
            /* REQUIRED   */ _encode_RouteingServices(value.routeingServices, $.BER),
            /* REQUIRED   */ _encode_VoiceUnitServices(value.voiceUnitServices, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServicesPermitted(value, elGetter);
}


/* eslint-enable */
