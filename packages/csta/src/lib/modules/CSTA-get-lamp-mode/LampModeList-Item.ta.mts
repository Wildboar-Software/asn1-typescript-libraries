/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { LampID, _decode_LampID, _encode_LampID } from "../CSTA-physical-device-feature/LampID.ta.mjs";

import { LampMode, _decode_LampMode, _encode_LampMode } from "../CSTA-physical-device-feature/LampMode.ta.mjs";

import {
    LampBrightness,
    _enum_for_LampBrightness,
    _decode_LampBrightness,
    _encode_LampBrightness
} from "../CSTA-physical-device-feature/LampBrightness.ta.mjs";

import { LampColor, _decode_LampColor, _encode_LampColor } from "../CSTA-physical-device-feature/LampColor.ta.mjs";

import { ButtonID, _decode_ButtonID, _encode_ButtonID } from "../CSTA-physical-device-feature/ButtonID.ta.mjs";



/**
 * @summary LampModeList_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LampModeList-Item ::= SEQUENCE {
 *     lamp [UNIVERSAL 4] LampID,
 *     lampMode [UNIVERSAL 2] LampMode,
 *     lampBrightness [0] LampBrightness OPTIONAL,
 *     lampColor [1] LampColor OPTIONAL,
 *     button [2] ButtonID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class LampModeList_Item {
    constructor (
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
         * @summary `button`.
         * @public
         * @readonly
         */
        readonly button: OPTIONAL<ButtonID>
    ) {}

    /**
     * @summary Restructures an object into a LampModeList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `LampModeList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LampModeList_Item`.
     * @returns {LampModeList_Item}
     */
    public static _from_object (_o: { [_K in keyof (LampModeList_Item)]: (LampModeList_Item)[_K] }): LampModeList_Item {
        return new LampModeList_Item(_o.lamp, _o.lampMode, _o.lampBrightness, _o.lampColor, _o.button);
    }

        /**
         * @summary The enum used as the type of the component `lampBrightness`
         * @public
         * @static
         */

    public static _enum_for_lampBrightness = _enum_for_LampBrightness;
}

/**
 * @summary The Leading Root Component Types of LampModeList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LampModeList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("lamp", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("lampMode", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("lampBrightness", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("lampColor", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("button", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of LampModeList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LampModeList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LampModeList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LampModeList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LampModeList_Item: $.ASN1Decoder<LampModeList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LampModeList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LampModeList_Item (el: _Element): LampModeList_Item {
    if (!_cached_decoder_for_LampModeList_Item) { _cached_decoder_for_LampModeList_Item = function (el: _Element): LampModeList_Item {
    let lamp!: LampID;
    let lampMode!: LampMode;
    let lampBrightness: OPTIONAL<LampBrightness>;
    let lampColor: OPTIONAL<LampColor>;
    let button: OPTIONAL<ButtonID>;
    const callbacks: $.DecodingMap = {
        "lamp": (_el: _Element): void => { lamp = _decode_LampID(_el); },
        "lampMode": (_el: _Element): void => { lampMode = _decode_LampMode(_el); },
        "lampBrightness": (_el: _Element): void => { lampBrightness = $._decode_implicit<LampBrightness>(() => _decode_LampBrightness)(_el); },
        "lampColor": (_el: _Element): void => { lampColor = $._decode_implicit<LampColor>(() => _decode_LampColor)(_el); },
        "button": (_el: _Element): void => { button = $._decode_implicit<ButtonID>(() => _decode_ButtonID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LampModeList_Item,
        _extension_additions_list_spec_for_LampModeList_Item,
        _root_component_type_list_2_spec_for_LampModeList_Item,
        undefined,
    );
    return new LampModeList_Item(
        lamp,
        lampMode,
        lampBrightness,
        lampColor,
        button
    );
}; }
    return _cached_decoder_for_LampModeList_Item(el);
}

let _cached_encoder_for_LampModeList_Item: $.ASN1Encoder<LampModeList_Item> | null = null;

/**
 * @summary Encodes a(n) LampModeList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LampModeList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_LampModeList_Item (value: LampModeList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LampModeList_Item) { _cached_encoder_for_LampModeList_Item = function (value: LampModeList_Item, elGetter: $.ASN1Encoder<LampModeList_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LampID(value.lamp, $.BER),
            /* REQUIRED   */ _encode_LampMode(value.lampMode, $.BER),
            /* IF_ABSENT  */ ((value.lampBrightness === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_LampBrightness, $.BER)(value.lampBrightness, $.BER)),
            /* IF_ABSENT  */ ((value.lampColor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_LampColor, $.BER)(value.lampColor, $.BER)),
            /* IF_ABSENT  */ ((value.button === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ButtonID, $.BER)(value.button, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LampModeList_Item(value, elGetter);
}


/* eslint-enable */
