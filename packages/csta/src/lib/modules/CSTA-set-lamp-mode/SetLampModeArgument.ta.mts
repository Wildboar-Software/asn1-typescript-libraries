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

import { LampMode, _decode_LampMode, _encode_LampMode } from "../CSTA-physical-device-feature/LampMode.ta.mjs";

import {
    LampBrightness,
    _enum_for_LampBrightness,
    _decode_LampBrightness,
    _encode_LampBrightness
} from "../CSTA-physical-device-feature/LampBrightness.ta.mjs";

import { LampColor, _decode_LampColor, _encode_LampColor } from "../CSTA-physical-device-feature/LampColor.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SetLampModeArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetLampModeArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     lamp                 LampID,
 *     lampMode            LampMode,
 *     lampBrightness            LampBrightness                OPTIONAL,
 *     lampColor            LampColor                OPTIONAL,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SetLampModeArgument {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: DeviceID,
        /**
         * @summary `lamp`.
         * @public
         * @readonly
         */
        readonly lamp: LampID,
        /**
         * @summary `lampMode`.
         * @public
         * @readonly
         */
        readonly lampMode: LampMode,
        /**
         * @summary `lampBrightness`.
         * @public
         * @readonly
         */
        readonly lampBrightness: OPTIONAL<LampBrightness>,
        /**
         * @summary `lampColor`.
         * @public
         * @readonly
         */
        readonly lampColor: OPTIONAL<LampColor>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SetLampModeArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SetLampModeArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SetLampModeArgument`.
     * @returns {SetLampModeArgument}
     */
    public static _from_object (_o: { [_K in keyof (SetLampModeArgument)]: (SetLampModeArgument)[_K] }): SetLampModeArgument {
        return new SetLampModeArgument(_o.device, _o.lamp, _o.lampMode, _o.lampBrightness, _o.lampColor, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `lampBrightness`
         * @public
         * @static
         */

    public static _enum_for_lampBrightness = _enum_for_LampBrightness;
}

/**
 * @summary The Leading Root Component Types of SetLampModeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SetLampModeArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("lamp", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("lampMode", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("lampBrightness", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("lampColor", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SetLampModeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SetLampModeArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SetLampModeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SetLampModeArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SetLampModeArgument: $.ASN1Decoder<SetLampModeArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetLampModeArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetLampModeArgument (el: _Element): SetLampModeArgument {
    if (!_cached_decoder_for_SetLampModeArgument) { _cached_decoder_for_SetLampModeArgument = function (el: _Element): SetLampModeArgument {
    let device!: DeviceID;
    let lamp!: LampID;
    let lampMode!: LampMode;
    let lampBrightness: OPTIONAL<LampBrightness>;
    let lampColor: OPTIONAL<LampColor>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "lamp": (_el: _Element): void => { lamp = _decode_LampID(_el); },
        "lampMode": (_el: _Element): void => { lampMode = _decode_LampMode(_el); },
        "lampBrightness": (_el: _Element): void => { lampBrightness = _decode_LampBrightness(_el); },
        "lampColor": (_el: _Element): void => { lampColor = _decode_LampColor(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SetLampModeArgument,
        _extension_additions_list_spec_for_SetLampModeArgument,
        _root_component_type_list_2_spec_for_SetLampModeArgument,
        undefined,
    );
    return new SetLampModeArgument(
        device,
        lamp,
        lampMode,
        lampBrightness,
        lampColor,
        extensions
    );
}; }
    return _cached_decoder_for_SetLampModeArgument(el);
}

let _cached_encoder_for_SetLampModeArgument: $.ASN1Encoder<SetLampModeArgument> | null = null;

/**
 * @summary Encodes a(n) SetLampModeArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetLampModeArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SetLampModeArgument (value: SetLampModeArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetLampModeArgument) { _cached_encoder_for_SetLampModeArgument = function (value: SetLampModeArgument, elGetter: $.ASN1Encoder<SetLampModeArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* REQUIRED   */ _encode_LampID(value.lamp, $.BER),
            /* REQUIRED   */ _encode_LampMode(value.lampMode, $.BER),
            /* IF_ABSENT  */ ((value.lampBrightness === undefined) ? undefined : _encode_LampBrightness(value.lampBrightness, $.BER)),
            /* IF_ABSENT  */ ((value.lampColor === undefined) ? undefined : _encode_LampColor(value.lampColor, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SetLampModeArgument(value, elGetter);
}


/* eslint-enable */
