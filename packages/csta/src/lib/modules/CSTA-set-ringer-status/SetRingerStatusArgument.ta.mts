/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    INTEGER,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import { RingerID, _decode_RingerID, _encode_RingerID } from "../CSTA-physical-device-feature/RingerID.ta.mjs";

import {
    RingMode,
    _enum_for_RingMode,
    _decode_RingMode,
    _encode_RingMode
} from "../CSTA-physical-device-feature/RingMode.ta.mjs";

import { Volume, _decode_Volume, _encode_Volume } from "../CSTA-physical-device-feature/Volume.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SetRingerStatusArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetRingerStatusArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     ringer                RingerID,
 *     ringMode             RingMode                OPTIONAL,
 *     ringPattern             [1] IMPLICIT INTEGER             OPTIONAL,
 *     ringVolume             [2] Volume                 OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SetRingerStatusArgument {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: DeviceID,
        /**
         * @summary `ringer`.
         * @public
         * @readonly
         */
        readonly ringer: RingerID,
        /**
         * @summary `ringMode`.
         * @public
         * @readonly
         */
        readonly ringMode: OPTIONAL<RingMode>,
        /**
         * @summary `ringPattern`.
         * @public
         * @readonly
         */
        readonly ringPattern: OPTIONAL<INTEGER>,
        /**
         * @summary `ringVolume`.
         * @public
         * @readonly
         */
        readonly ringVolume: OPTIONAL<Volume>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SetRingerStatusArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SetRingerStatusArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SetRingerStatusArgument`.
     * @returns {SetRingerStatusArgument}
     */
    public static _from_object (_o: { [_K in keyof (SetRingerStatusArgument)]: (SetRingerStatusArgument)[_K] }): SetRingerStatusArgument {
        return new SetRingerStatusArgument(_o.device, _o.ringer, _o.ringMode, _o.ringPattern, _o.ringVolume, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `ringMode`
         * @public
         * @static
         */

    public static _enum_for_ringMode = _enum_for_RingMode;
}

/**
 * @summary The Leading Root Component Types of SetRingerStatusArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SetRingerStatusArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("ringer", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("ringMode", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("ringPattern", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ringVolume", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SetRingerStatusArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SetRingerStatusArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SetRingerStatusArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SetRingerStatusArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SetRingerStatusArgument: $.ASN1Decoder<SetRingerStatusArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetRingerStatusArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetRingerStatusArgument (el: _Element): SetRingerStatusArgument {
    if (!_cached_decoder_for_SetRingerStatusArgument) { _cached_decoder_for_SetRingerStatusArgument = function (el: _Element): SetRingerStatusArgument {
    let device!: DeviceID;
    let ringer!: RingerID;
    let ringMode: OPTIONAL<RingMode>;
    let ringPattern: OPTIONAL<INTEGER>;
    let ringVolume: OPTIONAL<Volume>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "ringer": (_el: _Element): void => { ringer = _decode_RingerID(_el); },
        "ringMode": (_el: _Element): void => { ringMode = _decode_RingMode(_el); },
        "ringPattern": (_el: _Element): void => { ringPattern = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "ringVolume": (_el: _Element): void => { ringVolume = $._decode_explicit<Volume>(() => _decode_Volume)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SetRingerStatusArgument,
        _extension_additions_list_spec_for_SetRingerStatusArgument,
        _root_component_type_list_2_spec_for_SetRingerStatusArgument,
        undefined,
    );
    return new SetRingerStatusArgument(
        device,
        ringer,
        ringMode,
        ringPattern,
        ringVolume,
        extensions
    );
}; }
    return _cached_decoder_for_SetRingerStatusArgument(el);
}

let _cached_encoder_for_SetRingerStatusArgument: $.ASN1Encoder<SetRingerStatusArgument> | null = null;

/**
 * @summary Encodes a(n) SetRingerStatusArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetRingerStatusArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SetRingerStatusArgument (value: SetRingerStatusArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetRingerStatusArgument) { _cached_encoder_for_SetRingerStatusArgument = function (value: SetRingerStatusArgument, elGetter: $.ASN1Encoder<SetRingerStatusArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* REQUIRED   */ _encode_RingerID(value.ringer, $.BER),
            /* IF_ABSENT  */ ((value.ringMode === undefined) ? undefined : _encode_RingMode(value.ringMode, $.BER)),
            /* IF_ABSENT  */ ((value.ringPattern === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.ringPattern, $.BER)),
            /* IF_ABSENT  */ ((value.ringVolume === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_Volume, $.BER)(value.ringVolume, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SetRingerStatusArgument(value, elGetter);
}


/* eslint-enable */
