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
 * @summary GetLampInformationArgument
 * @description
 *
 * Get Lamp Information request (ECMA-269 §21.1.6.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLampInformationArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     lamp                 LampID                    OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetLampInformationArgument {
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
         * Lamp to query. Absent: all lamps, including those with no button
         * (ECMA-269 §21.1.6.3.4 FR 1).
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
     * @summary Restructures an object into a GetLampInformationArgument
     * @description
     * 
     * This takes an `object` and converts it to a `GetLampInformationArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetLampInformationArgument`.
     * @returns {GetLampInformationArgument}
     */
    public static _from_object (_o: { [_K in keyof (GetLampInformationArgument)]: (GetLampInformationArgument)[_K] }): GetLampInformationArgument {
        return new GetLampInformationArgument(_o.device, _o.lamp, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetLampInformationArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetLampInformationArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("lamp", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetLampInformationArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetLampInformationArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetLampInformationArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetLampInformationArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetLampInformationArgument: $.ASN1Decoder<GetLampInformationArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLampInformationArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLampInformationArgument (el: _Element): GetLampInformationArgument {
    if (!_cached_decoder_for_GetLampInformationArgument) { _cached_decoder_for_GetLampInformationArgument = function (el: _Element): GetLampInformationArgument {
    let device!: DeviceID;
    let lamp: OPTIONAL<LampID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "lamp": (_el: _Element): void => { lamp = _decode_LampID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetLampInformationArgument,
        _extension_additions_list_spec_for_GetLampInformationArgument,
        _root_component_type_list_2_spec_for_GetLampInformationArgument,
        undefined,
    );
    return new GetLampInformationArgument(
        device,
        lamp,
        extensions
    );
}; }
    return _cached_decoder_for_GetLampInformationArgument(el);
}

let _cached_encoder_for_GetLampInformationArgument: $.ASN1Encoder<GetLampInformationArgument> | null = null;

/**
 * @summary Encodes a(n) GetLampInformationArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLampInformationArgument, encoded as an ASN.1 Element.
 */
export
function _encode_GetLampInformationArgument (value: GetLampInformationArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLampInformationArgument) { _cached_encoder_for_GetLampInformationArgument = function (value: GetLampInformationArgument, elGetter: $.ASN1Encoder<GetLampInformationArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* IF_ABSENT  */ ((value.lamp === undefined) ? undefined : _encode_LampID(value.lamp, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetLampInformationArgument(value, elGetter);
}


/* eslint-enable */
