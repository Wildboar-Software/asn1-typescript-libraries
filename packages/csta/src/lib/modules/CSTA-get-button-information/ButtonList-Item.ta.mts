/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    SEQUENCE,
    SET,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ButtonID, _decode_ButtonID, _encode_ButtonID } from "../CSTA-physical-device-feature/ButtonID.ta.mjs";

import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import { LampID, _decode_LampID, _encode_LampID } from "../CSTA-physical-device-feature/LampID.ta.mjs";



/**
 * @summary ButtonList_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ButtonList-Item ::= SEQUENCE {
 *     button ButtonID,
 *     buttonLabel [0] IA5String OPTIONAL,
 *     buttonLabelSettable [1] BOOLEAN OPTIONAL,
 *     buttonFunction [2] IA5String OPTIONAL,
 *     buttonAssociatedNumber [3] DeviceID OPTIONAL,
 *     buttonAssociatedNumberSettable [4] BOOLEAN OPTIONAL,
 *     buttonPressIndicator [5] BOOLEAN OPTIONAL,
 *     lampList SEQUENCE OF LampID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ButtonList_Item {
    constructor (
        /**
         * @summary `button`.
         * @public
         * @readonly
         */
        readonly button: ButtonID,
        /**
         * @summary `buttonLabel`.
         * @public
         * @readonly
         */
        readonly buttonLabel: OPTIONAL<IA5String>,
        /**
         * @summary `buttonLabelSettable`.
         * @public
         * @readonly
         */
        readonly buttonLabelSettable: OPTIONAL<BOOLEAN>,
        /**
         * @summary `buttonFunction`.
         * @public
         * @readonly
         */
        readonly buttonFunction: OPTIONAL<IA5String>,
        /**
         * @summary `buttonAssociatedNumber`.
         * @public
         * @readonly
         */
        readonly buttonAssociatedNumber: OPTIONAL<DeviceID>,
        /**
         * @summary `buttonAssociatedNumberSettable`.
         * @public
         * @readonly
         */
        readonly buttonAssociatedNumberSettable: OPTIONAL<BOOLEAN>,
        /**
         * @summary `buttonPressIndicator`.
         * @public
         * @readonly
         */
        readonly buttonPressIndicator: OPTIONAL<BOOLEAN>,
        /**
         * @summary `lampList`.
         * @public
         * @readonly
         */
        readonly lampList: OPTIONAL<LampID[]>
    ) {}

    /**
     * @summary Restructures an object into a ButtonList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `ButtonList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ButtonList_Item`.
     * @returns {ButtonList_Item}
     */
    public static _from_object (_o: { [_K in keyof (ButtonList_Item)]: (ButtonList_Item)[_K] }): ButtonList_Item {
        return new ButtonList_Item(_o.button, _o.buttonLabel, _o.buttonLabelSettable, _o.buttonFunction, _o.buttonAssociatedNumber, _o.buttonAssociatedNumberSettable, _o.buttonPressIndicator, _o.lampList);
    }


}

/**
 * @summary The Leading Root Component Types of ButtonList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ButtonList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("button", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("buttonLabel", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("buttonLabelSettable", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("buttonFunction", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("buttonAssociatedNumber", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("buttonAssociatedNumberSettable", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("buttonPressIndicator", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("lampList", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of ButtonList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ButtonList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ButtonList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ButtonList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ButtonList_Item: $.ASN1Decoder<ButtonList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ButtonList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ButtonList_Item (el: _Element): ButtonList_Item {
    if (!_cached_decoder_for_ButtonList_Item) { _cached_decoder_for_ButtonList_Item = function (el: _Element): ButtonList_Item {
    let button!: ButtonID;
    let buttonLabel: OPTIONAL<IA5String>;
    let buttonLabelSettable: OPTIONAL<BOOLEAN>;
    let buttonFunction: OPTIONAL<IA5String>;
    let buttonAssociatedNumber: OPTIONAL<DeviceID>;
    let buttonAssociatedNumberSettable: OPTIONAL<BOOLEAN>;
    let buttonPressIndicator: OPTIONAL<BOOLEAN>;
    let lampList: OPTIONAL<LampID[]>;
    const callbacks: $.DecodingMap = {
        "button": (_el: _Element): void => { button = _decode_ButtonID(_el); },
        "buttonLabel": (_el: _Element): void => { buttonLabel = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "buttonLabelSettable": (_el: _Element): void => { buttonLabelSettable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "buttonFunction": (_el: _Element): void => { buttonFunction = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "buttonAssociatedNumber": (_el: _Element): void => { buttonAssociatedNumber = $._decode_implicit<DeviceID>(() => _decode_DeviceID)(_el); },
        "buttonAssociatedNumberSettable": (_el: _Element): void => { buttonAssociatedNumberSettable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "buttonPressIndicator": (_el: _Element): void => { buttonPressIndicator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "lampList": (_el: _Element): void => { lampList = $._decodeSequenceOf<LampID>(() => _decode_LampID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ButtonList_Item,
        _extension_additions_list_spec_for_ButtonList_Item,
        _root_component_type_list_2_spec_for_ButtonList_Item,
        undefined,
    );
    return new ButtonList_Item(
        button,
        buttonLabel,
        buttonLabelSettable,
        buttonFunction,
        buttonAssociatedNumber,
        buttonAssociatedNumberSettable,
        buttonPressIndicator,
        lampList
    );
}; }
    return _cached_decoder_for_ButtonList_Item(el);
}

let _cached_encoder_for_ButtonList_Item: $.ASN1Encoder<ButtonList_Item> | null = null;

/**
 * @summary Encodes a(n) ButtonList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ButtonList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ButtonList_Item (value: ButtonList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ButtonList_Item) { _cached_encoder_for_ButtonList_Item = function (value: ButtonList_Item, elGetter: $.ASN1Encoder<ButtonList_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ButtonID(value.button, $.BER),
            /* IF_ABSENT  */ ((value.buttonLabel === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeIA5String, $.BER)(value.buttonLabel, $.BER)),
            /* IF_ABSENT  */ ((value.buttonLabelSettable === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.buttonLabelSettable, $.BER)),
            /* IF_ABSENT  */ ((value.buttonFunction === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeIA5String, $.BER)(value.buttonFunction, $.BER)),
            /* IF_ABSENT  */ ((value.buttonAssociatedNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_DeviceID, $.BER)(value.buttonAssociatedNumber, $.BER)),
            /* IF_ABSENT  */ ((value.buttonAssociatedNumberSettable === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.buttonAssociatedNumberSettable, $.BER)),
            /* IF_ABSENT  */ ((value.buttonPressIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.buttonPressIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.lampList === undefined) ? undefined : $._encodeSequenceOf<LampID>(() => _encode_LampID, $.BER)(value.lampList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ButtonList_Item(value, elGetter);
}


/* eslint-enable */
