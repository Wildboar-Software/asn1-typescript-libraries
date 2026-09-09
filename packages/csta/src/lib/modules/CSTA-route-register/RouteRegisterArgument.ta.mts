/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import {
    MediaClass,
    data /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_MediaClass,
    _encode_MediaClass
} from "../CSTA-media-services/MediaClass.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary RouteRegisterArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteRegisterArgument ::= SEQUENCE
 * {    routeingDevice            DeviceID                OPTIONAL,
 *     requestedRouteingMediaClass    MediaClass                OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RouteRegisterArgument {
    constructor (
        /**
         * @summary `routeingDevice`.
         * @public
         * @readonly
         */
        readonly routeingDevice: OPTIONAL<DeviceID>,
        /**
         * @summary `requestedRouteingMediaClass`.
         * @public
         * @readonly
         */
        readonly requestedRouteingMediaClass: OPTIONAL<MediaClass>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a RouteRegisterArgument
     * @description
     * 
     * This takes an `object` and converts it to a `RouteRegisterArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RouteRegisterArgument`.
     * @returns {RouteRegisterArgument}
     */
    public static _from_object (_o: { [_K in keyof (RouteRegisterArgument)]: (RouteRegisterArgument)[_K] }): RouteRegisterArgument {
        return new RouteRegisterArgument(_o.routeingDevice, _o.requestedRouteingMediaClass, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of RouteRegisterArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RouteRegisterArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("routeingDevice", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("requestedRouteingMediaClass", true, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of RouteRegisterArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RouteRegisterArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RouteRegisterArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RouteRegisterArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RouteRegisterArgument: $.ASN1Decoder<RouteRegisterArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteRegisterArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteRegisterArgument (el: _Element): RouteRegisterArgument {
    if (!_cached_decoder_for_RouteRegisterArgument) { _cached_decoder_for_RouteRegisterArgument = function (el: _Element): RouteRegisterArgument {
    let routeingDevice: OPTIONAL<DeviceID>;
    let requestedRouteingMediaClass: OPTIONAL<MediaClass>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "routeingDevice": (_el: _Element): void => { routeingDevice = _decode_DeviceID(_el); },
        "requestedRouteingMediaClass": (_el: _Element): void => { requestedRouteingMediaClass = _decode_MediaClass(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RouteRegisterArgument,
        _extension_additions_list_spec_for_RouteRegisterArgument,
        _root_component_type_list_2_spec_for_RouteRegisterArgument,
        undefined,
    );
    return new RouteRegisterArgument(
        routeingDevice,
        requestedRouteingMediaClass,
        extensions
    );
}; }
    return _cached_decoder_for_RouteRegisterArgument(el);
}

let _cached_encoder_for_RouteRegisterArgument: $.ASN1Encoder<RouteRegisterArgument> | null = null;

/**
 * @summary Encodes a(n) RouteRegisterArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteRegisterArgument, encoded as an ASN.1 Element.
 */
export
function _encode_RouteRegisterArgument (value: RouteRegisterArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteRegisterArgument) { _cached_encoder_for_RouteRegisterArgument = function (value: RouteRegisterArgument, elGetter: $.ASN1Encoder<RouteRegisterArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.routeingDevice === undefined) ? undefined : _encode_DeviceID(value.routeingDevice, $.BER)),
            /* IF_ABSENT  */ ((value.requestedRouteingMediaClass === undefined) ? undefined : _encode_MediaClass(value.requestedRouteingMediaClass, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RouteRegisterArgument(value, elGetter);
}


/* eslint-enable */
