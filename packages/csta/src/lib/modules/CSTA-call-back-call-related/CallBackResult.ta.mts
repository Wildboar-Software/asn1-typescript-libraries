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

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary CallBackResult
 * @description
 *
 * Positive acknowledgement for Call Back Call-Related (ECMA-269
 * §17.1.4 / ECMA-285 §15.1.4). May identify the device on which
 * the callback was placed (switching-function dependent after
 * forwarding).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBackResult ::= SEQUENCE
 * {     targetDevice             DeviceID                 OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CallBackResult {
    constructor (
        /**
         * @summary `targetDevice`.
         * @description
         *
         * Optional. Device that will receive the callback. After
         * forward/deflect, may be the forwarded-to device rather
         * than the originally called device.
         *
         * @public
         * @readonly
         */
        readonly targetDevice: OPTIONAL<DeviceID>,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional `CSTACommonArguments` carrying the security and
         * privateData parameters from the ECMA-269 service table.
         *
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a CallBackResult
     * @description
     * 
     * This takes an `object` and converts it to a `CallBackResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallBackResult`.
     * @returns {CallBackResult}
     */
    public static _from_object (_o: { [_K in keyof (CallBackResult)]: (CallBackResult)[_K] }): CallBackResult {
        return new CallBackResult(_o.targetDevice, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of CallBackResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallBackResult: $.ComponentSpec[] = [
    new $.ComponentSpec("targetDevice", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of CallBackResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallBackResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallBackResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallBackResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallBackResult: $.ASN1Decoder<CallBackResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBackResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBackResult (el: _Element): CallBackResult {
    if (!_cached_decoder_for_CallBackResult) { _cached_decoder_for_CallBackResult = function (el: _Element): CallBackResult {
    let targetDevice: OPTIONAL<DeviceID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "targetDevice": (_el: _Element): void => { targetDevice = _decode_DeviceID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallBackResult,
        _extension_additions_list_spec_for_CallBackResult,
        _root_component_type_list_2_spec_for_CallBackResult,
        undefined,
    );
    return new CallBackResult(
        targetDevice,
        extensions
    );
}; }
    return _cached_decoder_for_CallBackResult(el);
}

let _cached_encoder_for_CallBackResult: $.ASN1Encoder<CallBackResult> | null = null;

/**
 * @summary Encodes a(n) CallBackResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBackResult, encoded as an ASN.1 Element.
 */
export
function _encode_CallBackResult (value: CallBackResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBackResult) { _cached_encoder_for_CallBackResult = function (value: CallBackResult, elGetter: $.ASN1Encoder<CallBackResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.targetDevice === undefined) ? undefined : _encode_DeviceID(value.targetDevice, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallBackResult(value, elGetter);
}


/* eslint-enable */
