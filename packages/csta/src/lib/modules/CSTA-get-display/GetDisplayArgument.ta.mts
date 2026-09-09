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

import { DisplayID, _decode_DisplayID, _encode_DisplayID } from "../CSTA-physical-device-feature/DisplayID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetDisplayArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetDisplayArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     display             DisplayID                OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetDisplayArgument {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: DeviceID,
        /**
         * @summary `display`.
         * @public
         * @readonly
         */
        readonly display: OPTIONAL<DisplayID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetDisplayArgument
     * @description
     * 
     * This takes an `object` and converts it to a `GetDisplayArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetDisplayArgument`.
     * @returns {GetDisplayArgument}
     */
    public static _from_object (_o: { [_K in keyof (GetDisplayArgument)]: (GetDisplayArgument)[_K] }): GetDisplayArgument {
        return new GetDisplayArgument(_o.device, _o.display, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetDisplayArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetDisplayArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("display", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetDisplayArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetDisplayArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetDisplayArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetDisplayArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetDisplayArgument: $.ASN1Decoder<GetDisplayArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetDisplayArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetDisplayArgument (el: _Element): GetDisplayArgument {
    if (!_cached_decoder_for_GetDisplayArgument) { _cached_decoder_for_GetDisplayArgument = function (el: _Element): GetDisplayArgument {
    let device!: DeviceID;
    let display: OPTIONAL<DisplayID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "display": (_el: _Element): void => { display = _decode_DisplayID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetDisplayArgument,
        _extension_additions_list_spec_for_GetDisplayArgument,
        _root_component_type_list_2_spec_for_GetDisplayArgument,
        undefined,
    );
    return new GetDisplayArgument(
        device,
        display,
        extensions
    );
}; }
    return _cached_decoder_for_GetDisplayArgument(el);
}

let _cached_encoder_for_GetDisplayArgument: $.ASN1Encoder<GetDisplayArgument> | null = null;

/**
 * @summary Encodes a(n) GetDisplayArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetDisplayArgument, encoded as an ASN.1 Element.
 */
export
function _encode_GetDisplayArgument (value: GetDisplayArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetDisplayArgument) { _cached_encoder_for_GetDisplayArgument = function (value: GetDisplayArgument, elGetter: $.ASN1Encoder<GetDisplayArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* IF_ABSENT  */ ((value.display === undefined) ? undefined : _encode_DisplayID(value.display, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetDisplayArgument(value, elGetter);
}


/* eslint-enable */
