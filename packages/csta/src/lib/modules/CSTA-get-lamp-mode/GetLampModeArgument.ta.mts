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

import { LampID, _decode_LampID, _encode_LampID } from "../CSTA-physical-device-feature/LampID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetLampModeArgument
 * @description
 *
 * Get Lamp Mode request (ECMA-269 §21.1.7.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLampModeArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     lamp                 LampID                    OPTIONAL,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetLampModeArgument {
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
         * @summary `lamp`.
         * @description
         *
         * Lamp to query. Absent: all lamps.
         * @public
         * @readonly
         */
        readonly lamp: OPTIONAL<LampID>,
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
     * @summary Restructures an object into a GetLampModeArgument
     * @description
     * 
     * This takes an `object` and converts it to a `GetLampModeArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetLampModeArgument`.
     * @returns {GetLampModeArgument}
     */
    public static _from_object (_o: { [_K in keyof (GetLampModeArgument)]: (GetLampModeArgument)[_K] }): GetLampModeArgument {
        return new GetLampModeArgument(_o.device, _o.lamp, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetLampModeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetLampModeArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("lamp", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetLampModeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetLampModeArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetLampModeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetLampModeArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetLampModeArgument: $.ASN1Decoder<GetLampModeArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLampModeArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLampModeArgument (el: _Element): GetLampModeArgument {
    if (!_cached_decoder_for_GetLampModeArgument) { _cached_decoder_for_GetLampModeArgument = function (el: _Element): GetLampModeArgument {
    let device!: DeviceID;
    let lamp: OPTIONAL<LampID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "lamp": (_el: _Element): void => { lamp = _decode_LampID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetLampModeArgument,
        _extension_additions_list_spec_for_GetLampModeArgument,
        _root_component_type_list_2_spec_for_GetLampModeArgument,
        undefined,
    );
    return new GetLampModeArgument(
        device,
        lamp,
        extensions
    );
}; }
    return _cached_decoder_for_GetLampModeArgument(el);
}

let _cached_encoder_for_GetLampModeArgument: $.ASN1Encoder<GetLampModeArgument> | null = null;

/**
 * @summary Encodes a(n) GetLampModeArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLampModeArgument, encoded as an ASN.1 Element.
 */
export
function _encode_GetLampModeArgument (value: GetLampModeArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLampModeArgument) { _cached_encoder_for_GetLampModeArgument = function (value: GetLampModeArgument, elGetter: $.ASN1Encoder<GetLampModeArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* IF_ABSENT  */ ((value.lamp === undefined) ? undefined : _encode_LampID(value.lamp, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetLampModeArgument(value, elGetter);
}


/* eslint-enable */
