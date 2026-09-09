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
 * @summary GetCallBackArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetCallBackArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     extensions            CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetCallBackArgument {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: DeviceID,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetCallBackArgument
     * @description
     * 
     * This takes an `object` and converts it to a `GetCallBackArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetCallBackArgument`.
     * @returns {GetCallBackArgument}
     */
    public static _from_object (_o: { [_K in keyof (GetCallBackArgument)]: (GetCallBackArgument)[_K] }): GetCallBackArgument {
        return new GetCallBackArgument(_o.device, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetCallBackArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetCallBackArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetCallBackArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetCallBackArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetCallBackArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetCallBackArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetCallBackArgument: $.ASN1Decoder<GetCallBackArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetCallBackArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetCallBackArgument (el: _Element): GetCallBackArgument {
    if (!_cached_decoder_for_GetCallBackArgument) { _cached_decoder_for_GetCallBackArgument = function (el: _Element): GetCallBackArgument {
    let device!: DeviceID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetCallBackArgument,
        _extension_additions_list_spec_for_GetCallBackArgument,
        _root_component_type_list_2_spec_for_GetCallBackArgument,
        undefined,
    );
    return new GetCallBackArgument(
        device,
        extensions
    );
}; }
    return _cached_decoder_for_GetCallBackArgument(el);
}

let _cached_encoder_for_GetCallBackArgument: $.ASN1Encoder<GetCallBackArgument> | null = null;

/**
 * @summary Encodes a(n) GetCallBackArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetCallBackArgument, encoded as an ASN.1 Element.
 */
export
function _encode_GetCallBackArgument (value: GetCallBackArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetCallBackArgument) { _cached_encoder_for_GetCallBackArgument = function (value: GetCallBackArgument, elGetter: $.ASN1Encoder<GetCallBackArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetCallBackArgument(value, elGetter);
}


/* eslint-enable */
