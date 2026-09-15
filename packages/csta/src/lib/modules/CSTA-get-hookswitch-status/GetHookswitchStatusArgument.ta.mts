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

import { HookswitchID, _decode_HookswitchID, _encode_HookswitchID } from "../CSTA-physical-device-feature/HookswitchID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetHookswitchStatusArgument
 * @description
 *
 * Get Hookswitch Status request (ECMA-269 §21.1.5.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetHookswitchStatusArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     hookswitch            HookswitchID                OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetHookswitchStatusArgument {
    constructor (
        /**
         * @summary `device`.
         * @description
         *
         * Physical-element DeviceID; other IDs are rejected (ECMA-269 §21 FR
         * 1).
         * @public
         * @readonly
         */
        readonly device: DeviceID,
        /**
         * @summary `hookswitch`.
         * @description
         *
         * Hookswitch to query. Absent: all hookswitches.
         * @public
         * @readonly
         */
        readonly hookswitch: OPTIONAL<HookswitchID>,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional security (timestamp, sequence, securityInfo) and
         * privateData.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetHookswitchStatusArgument
     * @description
     * 
     * This takes an `object` and converts it to a `GetHookswitchStatusArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetHookswitchStatusArgument`.
     * @returns {GetHookswitchStatusArgument}
     */
    public static _from_object (_o: { [_K in keyof (GetHookswitchStatusArgument)]: (GetHookswitchStatusArgument)[_K] }): GetHookswitchStatusArgument {
        return new GetHookswitchStatusArgument(_o.device, _o.hookswitch, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetHookswitchStatusArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetHookswitchStatusArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("hookswitch", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetHookswitchStatusArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetHookswitchStatusArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetHookswitchStatusArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetHookswitchStatusArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetHookswitchStatusArgument: $.ASN1Decoder<GetHookswitchStatusArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetHookswitchStatusArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetHookswitchStatusArgument (el: _Element): GetHookswitchStatusArgument {
    if (!_cached_decoder_for_GetHookswitchStatusArgument) { _cached_decoder_for_GetHookswitchStatusArgument = function (el: _Element): GetHookswitchStatusArgument {
    let device!: DeviceID;
    let hookswitch: OPTIONAL<HookswitchID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "hookswitch": (_el: _Element): void => { hookswitch = _decode_HookswitchID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetHookswitchStatusArgument,
        _extension_additions_list_spec_for_GetHookswitchStatusArgument,
        _root_component_type_list_2_spec_for_GetHookswitchStatusArgument,
        undefined,
    );
    return new GetHookswitchStatusArgument(
        device,
        hookswitch,
        extensions
    );
}; }
    return _cached_decoder_for_GetHookswitchStatusArgument(el);
}

let _cached_encoder_for_GetHookswitchStatusArgument: $.ASN1Encoder<GetHookswitchStatusArgument> | null = null;

/**
 * @summary Encodes a(n) GetHookswitchStatusArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetHookswitchStatusArgument, encoded as an ASN.1 Element.
 */
export
function _encode_GetHookswitchStatusArgument (value: GetHookswitchStatusArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetHookswitchStatusArgument) { _cached_encoder_for_GetHookswitchStatusArgument = function (value: GetHookswitchStatusArgument, elGetter: $.ASN1Encoder<GetHookswitchStatusArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* IF_ABSENT  */ ((value.hookswitch === undefined) ? undefined : _encode_HookswitchID(value.hookswitch, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetHookswitchStatusArgument(value, elGetter);
}


/* eslint-enable */
