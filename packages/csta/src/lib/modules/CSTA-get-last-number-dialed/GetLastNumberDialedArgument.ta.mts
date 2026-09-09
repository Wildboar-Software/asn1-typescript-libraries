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
 * @summary GetLastNumberDialedArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLastNumberDialedArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     extensions            CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetLastNumberDialedArgument {
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
     * @summary Restructures an object into a GetLastNumberDialedArgument
     * @description
     * 
     * This takes an `object` and converts it to a `GetLastNumberDialedArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetLastNumberDialedArgument`.
     * @returns {GetLastNumberDialedArgument}
     */
    public static _from_object (_o: { [_K in keyof (GetLastNumberDialedArgument)]: (GetLastNumberDialedArgument)[_K] }): GetLastNumberDialedArgument {
        return new GetLastNumberDialedArgument(_o.device, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetLastNumberDialedArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetLastNumberDialedArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetLastNumberDialedArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetLastNumberDialedArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetLastNumberDialedArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetLastNumberDialedArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetLastNumberDialedArgument: $.ASN1Decoder<GetLastNumberDialedArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLastNumberDialedArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLastNumberDialedArgument (el: _Element): GetLastNumberDialedArgument {
    if (!_cached_decoder_for_GetLastNumberDialedArgument) { _cached_decoder_for_GetLastNumberDialedArgument = function (el: _Element): GetLastNumberDialedArgument {
    let device!: DeviceID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetLastNumberDialedArgument,
        _extension_additions_list_spec_for_GetLastNumberDialedArgument,
        _root_component_type_list_2_spec_for_GetLastNumberDialedArgument,
        undefined,
    );
    return new GetLastNumberDialedArgument(
        device,
        extensions
    );
}; }
    return _cached_decoder_for_GetLastNumberDialedArgument(el);
}

let _cached_encoder_for_GetLastNumberDialedArgument: $.ASN1Encoder<GetLastNumberDialedArgument> | null = null;

/**
 * @summary Encodes a(n) GetLastNumberDialedArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLastNumberDialedArgument, encoded as an ASN.1 Element.
 */
export
function _encode_GetLastNumberDialedArgument (value: GetLastNumberDialedArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLastNumberDialedArgument) { _cached_encoder_for_GetLastNumberDialedArgument = function (value: GetLastNumberDialedArgument, elGetter: $.ASN1Encoder<GetLastNumberDialedArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetLastNumberDialedArgument(value, elGetter);
}


/* eslint-enable */
