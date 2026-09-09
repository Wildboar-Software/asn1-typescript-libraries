/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";



/**
 * @summary CallBackList_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBackList-Item ::= SEQUENCE {
 *     originatingDevice [UNIVERSAL 16] DeviceID,
 *     targetDevice [UNIVERSAL 16] DeviceID,
 *     callBackMessageIndicator [UNIVERSAL 1] BOOLEAN OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CallBackList_Item {
    constructor (
        /**
         * @summary `originatingDevice`.
         * @public
         * @readonly
         */
        readonly originatingDevice: DeviceID,
        /**
         * @summary `targetDevice`.
         * @public
         * @readonly
         */
        readonly targetDevice: DeviceID,
        /**
         * @summary `callBackMessageIndicator`.
         * @public
         * @readonly
         */
        readonly callBackMessageIndicator: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a CallBackList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `CallBackList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallBackList_Item`.
     * @returns {CallBackList_Item}
     */
    public static _from_object (_o: { [_K in keyof (CallBackList_Item)]: (CallBackList_Item)[_K] }): CallBackList_Item {
        return new CallBackList_Item(_o.originatingDevice, _o.targetDevice, _o.callBackMessageIndicator);
    }


}

/**
 * @summary The Leading Root Component Types of CallBackList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallBackList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("originatingDevice", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("targetDevice", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("callBackMessageIndicator", true, $.hasTag(_TagClass.universal, 1))
];

/**
 * @summary The Trailing Root Component Types of CallBackList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallBackList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallBackList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallBackList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallBackList_Item: $.ASN1Decoder<CallBackList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBackList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBackList_Item (el: _Element): CallBackList_Item {
    if (!_cached_decoder_for_CallBackList_Item) { _cached_decoder_for_CallBackList_Item = function (el: _Element): CallBackList_Item {
    let originatingDevice!: DeviceID;
    let targetDevice!: DeviceID;
    let callBackMessageIndicator: OPTIONAL<BOOLEAN>;
    const callbacks: $.DecodingMap = {
        "originatingDevice": (_el: _Element): void => { originatingDevice = _decode_DeviceID(_el); },
        "targetDevice": (_el: _Element): void => { targetDevice = _decode_DeviceID(_el); },
        "callBackMessageIndicator": (_el: _Element): void => { callBackMessageIndicator = $._decodeBoolean(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallBackList_Item,
        _extension_additions_list_spec_for_CallBackList_Item,
        _root_component_type_list_2_spec_for_CallBackList_Item,
        undefined,
    );
    return new CallBackList_Item(
        originatingDevice,
        targetDevice,
        callBackMessageIndicator
    );
}; }
    return _cached_decoder_for_CallBackList_Item(el);
}

let _cached_encoder_for_CallBackList_Item: $.ASN1Encoder<CallBackList_Item> | null = null;

/**
 * @summary Encodes a(n) CallBackList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBackList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_CallBackList_Item (value: CallBackList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBackList_Item) { _cached_encoder_for_CallBackList_Item = function (value: CallBackList_Item, elGetter: $.ASN1Encoder<CallBackList_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.originatingDevice, $.BER),
            /* REQUIRED   */ _encode_DeviceID(value.targetDevice, $.BER),
            /* IF_ABSENT  */ ((value.callBackMessageIndicator === undefined) ? undefined : $._encodeBoolean(value.callBackMessageIndicator, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallBackList_Item(value, elGetter);
}


/* eslint-enable */
