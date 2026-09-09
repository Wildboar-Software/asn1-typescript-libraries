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
 * @summary GetAutoWorkModeArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetAutoWorkModeArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     extensions            CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetAutoWorkModeArgument {
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
     * @summary Restructures an object into a GetAutoWorkModeArgument
     * @description
     * 
     * This takes an `object` and converts it to a `GetAutoWorkModeArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetAutoWorkModeArgument`.
     * @returns {GetAutoWorkModeArgument}
     */
    public static _from_object (_o: { [_K in keyof (GetAutoWorkModeArgument)]: (GetAutoWorkModeArgument)[_K] }): GetAutoWorkModeArgument {
        return new GetAutoWorkModeArgument(_o.device, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetAutoWorkModeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetAutoWorkModeArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetAutoWorkModeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetAutoWorkModeArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetAutoWorkModeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetAutoWorkModeArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetAutoWorkModeArgument: $.ASN1Decoder<GetAutoWorkModeArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetAutoWorkModeArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetAutoWorkModeArgument (el: _Element): GetAutoWorkModeArgument {
    if (!_cached_decoder_for_GetAutoWorkModeArgument) { _cached_decoder_for_GetAutoWorkModeArgument = function (el: _Element): GetAutoWorkModeArgument {
    let device!: DeviceID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetAutoWorkModeArgument,
        _extension_additions_list_spec_for_GetAutoWorkModeArgument,
        _root_component_type_list_2_spec_for_GetAutoWorkModeArgument,
        undefined,
    );
    return new GetAutoWorkModeArgument(
        device,
        extensions
    );
}; }
    return _cached_decoder_for_GetAutoWorkModeArgument(el);
}

let _cached_encoder_for_GetAutoWorkModeArgument: $.ASN1Encoder<GetAutoWorkModeArgument> | null = null;

/**
 * @summary Encodes a(n) GetAutoWorkModeArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetAutoWorkModeArgument, encoded as an ASN.1 Element.
 */
export
function _encode_GetAutoWorkModeArgument (value: GetAutoWorkModeArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetAutoWorkModeArgument) { _cached_encoder_for_GetAutoWorkModeArgument = function (value: GetAutoWorkModeArgument, elGetter: $.ASN1Encoder<GetAutoWorkModeArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetAutoWorkModeArgument(value, elGetter);
}


/* eslint-enable */
