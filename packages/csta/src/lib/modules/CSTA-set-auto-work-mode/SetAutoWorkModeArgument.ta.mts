/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SetAutoWorkModeArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetAutoWorkModeArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     autoWorkOn            BOOLEAN,
 *     autoWorkInterval        INTEGER (0..6000)            OPTIONAL,
 *     extensions            CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SetAutoWorkModeArgument {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: DeviceID,
        /**
         * @summary `autoWorkOn`.
         * @public
         * @readonly
         */
        readonly autoWorkOn: BOOLEAN,
        /**
         * @summary `autoWorkInterval`.
         * @public
         * @readonly
         */
        readonly autoWorkInterval: OPTIONAL<INTEGER>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SetAutoWorkModeArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SetAutoWorkModeArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SetAutoWorkModeArgument`.
     * @returns {SetAutoWorkModeArgument}
     */
    public static _from_object (_o: { [_K in keyof (SetAutoWorkModeArgument)]: (SetAutoWorkModeArgument)[_K] }): SetAutoWorkModeArgument {
        return new SetAutoWorkModeArgument(_o.device, _o.autoWorkOn, _o.autoWorkInterval, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SetAutoWorkModeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SetAutoWorkModeArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("autoWorkOn", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("autoWorkInterval", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SetAutoWorkModeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SetAutoWorkModeArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SetAutoWorkModeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SetAutoWorkModeArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SetAutoWorkModeArgument: $.ASN1Decoder<SetAutoWorkModeArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetAutoWorkModeArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetAutoWorkModeArgument (el: _Element): SetAutoWorkModeArgument {
    if (!_cached_decoder_for_SetAutoWorkModeArgument) { _cached_decoder_for_SetAutoWorkModeArgument = function (el: _Element): SetAutoWorkModeArgument {
    let device!: DeviceID;
    let autoWorkOn!: BOOLEAN;
    let autoWorkInterval: OPTIONAL<INTEGER>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "autoWorkOn": (_el: _Element): void => { autoWorkOn = $._decodeBoolean(_el); },
        "autoWorkInterval": (_el: _Element): void => { autoWorkInterval = $._decodeInteger(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SetAutoWorkModeArgument,
        _extension_additions_list_spec_for_SetAutoWorkModeArgument,
        _root_component_type_list_2_spec_for_SetAutoWorkModeArgument,
        undefined,
    );
    return new SetAutoWorkModeArgument(
        device,
        autoWorkOn,
        autoWorkInterval,
        extensions
    );
}; }
    return _cached_decoder_for_SetAutoWorkModeArgument(el);
}

let _cached_encoder_for_SetAutoWorkModeArgument: $.ASN1Encoder<SetAutoWorkModeArgument> | null = null;

/**
 * @summary Encodes a(n) SetAutoWorkModeArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetAutoWorkModeArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SetAutoWorkModeArgument (value: SetAutoWorkModeArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetAutoWorkModeArgument) { _cached_encoder_for_SetAutoWorkModeArgument = function (value: SetAutoWorkModeArgument, elGetter: $.ASN1Encoder<SetAutoWorkModeArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.autoWorkOn, $.BER),
            /* IF_ABSENT  */ ((value.autoWorkInterval === undefined) ? undefined : $._encodeInteger(value.autoWorkInterval, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SetAutoWorkModeArgument(value, elGetter);
}


/* eslint-enable */
