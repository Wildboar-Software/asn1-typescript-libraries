/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    BOOLEAN,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError
} from "@wildboar/asn1";
import { HookswitchID, _decode_HookswitchID, _encode_HookswitchID } from "../CSTA-physical-device-feature/HookswitchID.ta.mjs";



/**
 * @summary HookswitchStatusList_Item
 * @description
 *
 * One hookswitch (ECMA-269 §21.1.5.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HookswitchStatusList-Item ::= SEQUENCE {
 *     hookswitch [UNIVERSAL 4] HookswitchID,
 *     hookswitchOnHook [UNIVERSAL 1] BOOLEAN
 * }
 * ```
 * 
 * @class
 */
export
class HookswitchStatusList_Item {
    constructor (
        /**
         * @summary `hookswitch`.
         * @description
         *
         * Hookswitch whose status is reported.
         * @public
         * @readonly
         */
        readonly hookswitch: HookswitchID,
        /**
         * @summary `hookswitchOnHook`.
         * @description
         *
         * TRUE = on-hook; FALSE = off-hook.
         * @public
         * @readonly
         */
        readonly hookswitchOnHook: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a HookswitchStatusList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `HookswitchStatusList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HookswitchStatusList_Item`.
     * @returns {HookswitchStatusList_Item}
     */
    public static _from_object (_o: { [_K in keyof (HookswitchStatusList_Item)]: (HookswitchStatusList_Item)[_K] }): HookswitchStatusList_Item {
        return new HookswitchStatusList_Item(_o.hookswitch, _o.hookswitchOnHook);
    }


}

/**
 * @summary The Leading Root Component Types of HookswitchStatusList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HookswitchStatusList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("hookswitch", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("hookswitchOnHook", false, $.hasTag(_TagClass.universal, 1))
];

/**
 * @summary The Trailing Root Component Types of HookswitchStatusList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HookswitchStatusList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HookswitchStatusList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HookswitchStatusList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HookswitchStatusList_Item: $.ASN1Decoder<HookswitchStatusList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HookswitchStatusList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HookswitchStatusList_Item (el: _Element): HookswitchStatusList_Item {
    if (!_cached_decoder_for_HookswitchStatusList_Item) { _cached_decoder_for_HookswitchStatusList_Item = function (el: _Element): HookswitchStatusList_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("HookswitchStatusList-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "hookswitch";
    sequence[1].name = "hookswitchOnHook";
    let hookswitch!: HookswitchID;
    let hookswitchOnHook!: BOOLEAN;
    hookswitch = _decode_HookswitchID(sequence[0]);
    hookswitchOnHook = $._decodeBoolean(sequence[1]);
    return new HookswitchStatusList_Item(
        hookswitch,
        hookswitchOnHook,

    );
}; }
    return _cached_decoder_for_HookswitchStatusList_Item(el);
}

let _cached_encoder_for_HookswitchStatusList_Item: $.ASN1Encoder<HookswitchStatusList_Item> | null = null;

/**
 * @summary Encodes a(n) HookswitchStatusList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HookswitchStatusList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_HookswitchStatusList_Item (value: HookswitchStatusList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HookswitchStatusList_Item) { _cached_encoder_for_HookswitchStatusList_Item = function (value: HookswitchStatusList_Item, elGetter: $.ASN1Encoder<HookswitchStatusList_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_HookswitchID(value.hookswitch, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.hookswitchOnHook, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_HookswitchStatusList_Item(value, elGetter);
}


/* eslint-enable */
