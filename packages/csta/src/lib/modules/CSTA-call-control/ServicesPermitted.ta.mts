/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError
} from "@wildboar/asn1";
import { CallControlServices, _decode_CallControlServices, _encode_CallControlServices } from "../CSTA-application-context-information-csta3/CallControlServices.ta.mjs";

import { CallAssociatedServices, _decode_CallAssociatedServices, _encode_CallAssociatedServices } from "../CSTA-application-context-information-csta3/CallAssociatedServices.ta.mjs";

import { MediaAttachmentServices, _decode_MediaAttachmentServices, _encode_MediaAttachmentServices } from "../CSTA-application-context-information-csta3/MediaAttachmentServices.ta.mjs";

import { RouteingServices, _decode_RouteingServices, _encode_RouteingServices } from "../CSTA-application-context-information-csta3/RouteingServices.ta.mjs";

import { VoiceUnitServices, _decode_VoiceUnitServices, _encode_VoiceUnitServices } from "../CSTA-application-context-information-csta3/VoiceUnitServices.ta.mjs";



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
    new $.ComponentSpec("callControlServices", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("callAssociatedServices", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("mediaAttachmentServices", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("routeingServices", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("voiceUnitServices", false, $.hasTag(_TagClass.universal, 3))
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
