/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { RouteingCrossRefID, _decode_RouteingCrossRefID, _encode_RouteingCrossRefID } from "../CSTA-device-feature-types/RouteingCrossRefID.ta.mjs";

import { RouteRegisterReqID, _decode_RouteRegisterReqID, _encode_RouteRegisterReqID } from "../CSTA-device-feature-types/RouteRegisterReqID.ta.mjs";

import { CalledDeviceID, _decode_CalledDeviceID, _encode_CalledDeviceID } from "../CSTA-device-identifiers/CalledDeviceID.ta.mjs";

import { CallingDeviceID, _decode_CallingDeviceID, _encode_CallingDeviceID } from "../CSTA-device-identifiers/CallingDeviceID.ta.mjs";

import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";

import { CallLinkageData, _decode_CallLinkageData, _encode_CallLinkageData } from "../CSTA-call-control/CallLinkageData.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary RouteUsedRequestArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteUsedRequestArgument ::= SEQUENCE
 * {    crossRefIdentifier        RouteingCrossRefID,
 *     routeRegisterReqID        [0] IMPLICIT RouteRegisterReqID        OPTIONAL,
 *     routeUsed            CalledDeviceID,
 *     callingDevice            CallingDeviceID                OPTIONAL,
 *     domain                BOOLEAN                    OPTIONAL,
 *     correlatorData            [1] IMPLICIT CorrelatorData        OPTIONAL,
 *     callLinkageData            [2] IMPLICIT CallLinkageData        OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RouteUsedRequestArgument {
    constructor (
        /**
         * @summary `crossRefIdentifier`.
         * @public
         * @readonly
         */
        readonly crossRefIdentifier: RouteingCrossRefID,
        /**
         * @summary `routeRegisterReqID`.
         * @public
         * @readonly
         */
        readonly routeRegisterReqID: OPTIONAL<RouteRegisterReqID>,
        /**
         * @summary `routeUsed`.
         * @public
         * @readonly
         */
        readonly routeUsed: CalledDeviceID,
        /**
         * @summary `callingDevice`.
         * @public
         * @readonly
         */
        readonly callingDevice: OPTIONAL<CallingDeviceID>,
        /**
         * @summary `domain`.
         * @public
         * @readonly
         */
        readonly domain: OPTIONAL<BOOLEAN>,
        /**
         * @summary `correlatorData`.
         * @public
         * @readonly
         */
        readonly correlatorData: OPTIONAL<CorrelatorData>,
        /**
         * @summary `callLinkageData`.
         * @public
         * @readonly
         */
        readonly callLinkageData: OPTIONAL<CallLinkageData>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a RouteUsedRequestArgument
     * @description
     * 
     * This takes an `object` and converts it to a `RouteUsedRequestArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RouteUsedRequestArgument`.
     * @returns {RouteUsedRequestArgument}
     */
    public static _from_object (_o: { [_K in keyof (RouteUsedRequestArgument)]: (RouteUsedRequestArgument)[_K] }): RouteUsedRequestArgument {
        return new RouteUsedRequestArgument(_o.crossRefIdentifier, _o.routeRegisterReqID, _o.routeUsed, _o.callingDevice, _o.domain, _o.correlatorData, _o.callLinkageData, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of RouteUsedRequestArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RouteUsedRequestArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("crossRefIdentifier", false, $.hasTag(_TagClass.application, 24)),
    new $.ComponentSpec("routeRegisterReqID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("routeUsed", false, $.hasTag(_TagClass.application, 2)),
    new $.ComponentSpec("callingDevice", true, $.hasTag(_TagClass.application, 1)),
    new $.ComponentSpec("domain", true, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callLinkageData", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of RouteUsedRequestArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RouteUsedRequestArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RouteUsedRequestArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RouteUsedRequestArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RouteUsedRequestArgument: $.ASN1Decoder<RouteUsedRequestArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteUsedRequestArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteUsedRequestArgument (el: _Element): RouteUsedRequestArgument {
    if (!_cached_decoder_for_RouteUsedRequestArgument) { _cached_decoder_for_RouteUsedRequestArgument = function (el: _Element): RouteUsedRequestArgument {
    let crossRefIdentifier!: RouteingCrossRefID;
    let routeRegisterReqID: OPTIONAL<RouteRegisterReqID>;
    let routeUsed!: CalledDeviceID;
    let callingDevice: OPTIONAL<CallingDeviceID>;
    let domain: OPTIONAL<BOOLEAN>;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let callLinkageData: OPTIONAL<CallLinkageData>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "crossRefIdentifier": (_el: _Element): void => { crossRefIdentifier = _decode_RouteingCrossRefID(_el); },
        "routeRegisterReqID": (_el: _Element): void => { routeRegisterReqID = $._decode_implicit<RouteRegisterReqID>(() => _decode_RouteRegisterReqID)(_el); },
        "routeUsed": (_el: _Element): void => { routeUsed = _decode_CalledDeviceID(_el); },
        "callingDevice": (_el: _Element): void => { callingDevice = _decode_CallingDeviceID(_el); },
        "domain": (_el: _Element): void => { domain = $._decodeBoolean(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "callLinkageData": (_el: _Element): void => { callLinkageData = $._decode_implicit<CallLinkageData>(() => _decode_CallLinkageData)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RouteUsedRequestArgument,
        _extension_additions_list_spec_for_RouteUsedRequestArgument,
        _root_component_type_list_2_spec_for_RouteUsedRequestArgument,
        undefined,
    );
    return new RouteUsedRequestArgument(
        crossRefIdentifier,
        routeRegisterReqID,
        routeUsed,
        callingDevice,
        domain,
        correlatorData,
        callLinkageData,
        extensions
    );
}; }
    return _cached_decoder_for_RouteUsedRequestArgument(el);
}

let _cached_encoder_for_RouteUsedRequestArgument: $.ASN1Encoder<RouteUsedRequestArgument> | null = null;

/**
 * @summary Encodes a(n) RouteUsedRequestArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteUsedRequestArgument, encoded as an ASN.1 Element.
 */
export
function _encode_RouteUsedRequestArgument (value: RouteUsedRequestArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteUsedRequestArgument) { _cached_encoder_for_RouteUsedRequestArgument = function (value: RouteUsedRequestArgument, elGetter: $.ASN1Encoder<RouteUsedRequestArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RouteingCrossRefID(value.crossRefIdentifier, $.BER),
            /* IF_ABSENT  */ ((value.routeRegisterReqID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_RouteRegisterReqID, $.BER)(value.routeRegisterReqID, $.BER)),
            /* REQUIRED   */ _encode_CalledDeviceID(value.routeUsed, $.BER),
            /* IF_ABSENT  */ ((value.callingDevice === undefined) ? undefined : _encode_CallingDeviceID(value.callingDevice, $.BER)),
            /* IF_ABSENT  */ ((value.domain === undefined) ? undefined : $._encodeBoolean(value.domain, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CallLinkageData, $.BER)(value.callLinkageData, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RouteUsedRequestArgument(value, elGetter);
}


/* eslint-enable */
