/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    OCTET_STRING,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { LampID, _decode_LampID, _encode_LampID } from "../CSTA-physical-device-feature/LampID.ta.mjs";

import { ButtonID, _decode_ButtonID, _encode_ButtonID } from "../CSTA-physical-device-feature/ButtonID.ta.mjs";

import { LampColor, _decode_LampColor, _encode_LampColor } from "../CSTA-physical-device-feature/LampColor.ta.mjs";



/**
 * @summary LampList_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LampList-Item ::= SEQUENCE {
 *     lamp LampID,
 *     lampLabel [0] OCTET_STRING OPTIONAL,
 *     button [1] ButtonID OPTIONAL,
 *     lampColor LampColor OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class LampList_Item {
    constructor (
        /**
         * @summary `lamp`.
         * @public
         * @readonly
         */
        readonly lamp: LampID,
        /**
         * @summary `lampLabel`.
         * @public
         * @readonly
         */
        readonly lampLabel: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `button`.
         * @public
         * @readonly
         */
        readonly button: OPTIONAL<ButtonID>,
        /**
         * @summary `lampColor`.
         * @public
         * @readonly
         */
        readonly lampColor: OPTIONAL<LampColor>
    ) {}

    /**
     * @summary Restructures an object into a LampList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `LampList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LampList_Item`.
     * @returns {LampList_Item}
     */
    public static _from_object (_o: { [_K in keyof (LampList_Item)]: (LampList_Item)[_K] }): LampList_Item {
        return new LampList_Item(_o.lamp, _o.lampLabel, _o.button, _o.lampColor);
    }


}

/**
 * @summary The Leading Root Component Types of LampList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LampList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("lamp", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("lampLabel", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("button", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lampColor", true, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of LampList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LampList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LampList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LampList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LampList_Item: $.ASN1Decoder<LampList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LampList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LampList_Item (el: _Element): LampList_Item {
    if (!_cached_decoder_for_LampList_Item) { _cached_decoder_for_LampList_Item = function (el: _Element): LampList_Item {
    let lamp!: LampID;
    let lampLabel: OPTIONAL<OCTET_STRING>;
    let button: OPTIONAL<ButtonID>;
    let lampColor: OPTIONAL<LampColor>;
    const callbacks: $.DecodingMap = {
        "lamp": (_el: _Element): void => { lamp = _decode_LampID(_el); },
        "lampLabel": (_el: _Element): void => { lampLabel = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "button": (_el: _Element): void => { button = $._decode_implicit<ButtonID>(() => _decode_ButtonID)(_el); },
        "lampColor": (_el: _Element): void => { lampColor = _decode_LampColor(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LampList_Item,
        _extension_additions_list_spec_for_LampList_Item,
        _root_component_type_list_2_spec_for_LampList_Item,
        undefined,
    );
    return new LampList_Item(
        lamp,
        lampLabel,
        button,
        lampColor
    );
}; }
    return _cached_decoder_for_LampList_Item(el);
}

let _cached_encoder_for_LampList_Item: $.ASN1Encoder<LampList_Item> | null = null;

/**
 * @summary Encodes a(n) LampList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LampList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_LampList_Item (value: LampList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LampList_Item) { _cached_encoder_for_LampList_Item = function (value: LampList_Item, elGetter: $.ASN1Encoder<LampList_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LampID(value.lamp, $.BER),
            /* IF_ABSENT  */ ((value.lampLabel === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.lampLabel, $.BER)),
            /* IF_ABSENT  */ ((value.button === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ButtonID, $.BER)(value.button, $.BER)),
            /* IF_ABSENT  */ ((value.lampColor === undefined) ? undefined : _encode_LampColor(value.lampColor, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LampList_Item(value, elGetter);
}


/* eslint-enable */
