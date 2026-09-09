/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError
} from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";



/**
 * @summary DeviceListItems
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceListItems ::= SEQUENCE
 * {    device                DeviceID }
 * ```
 * 
 * @class
 */
export
class DeviceListItems {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: DeviceID
    ) {}

    /**
     * @summary Restructures an object into a DeviceListItems
     * @description
     * 
     * This takes an `object` and converts it to a `DeviceListItems`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeviceListItems`.
     * @returns {DeviceListItems}
     */
    public static _from_object (_o: { [_K in keyof (DeviceListItems)]: (DeviceListItems)[_K] }): DeviceListItems {
        return new DeviceListItems(_o.device);
    }


}

/**
 * @summary The Leading Root Component Types of DeviceListItems
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeviceListItems: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of DeviceListItems
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeviceListItems: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeviceListItems
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeviceListItems: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeviceListItems: $.ASN1Decoder<DeviceListItems> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceListItems
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceListItems (el: _Element): DeviceListItems {
    if (!_cached_decoder_for_DeviceListItems) { _cached_decoder_for_DeviceListItems = function (el: _Element): DeviceListItems {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("DeviceListItems contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "device";
    let device!: DeviceID;
    device = _decode_DeviceID(sequence[0]);
    return new DeviceListItems(
        device,

    );
}; }
    return _cached_decoder_for_DeviceListItems(el);
}

let _cached_encoder_for_DeviceListItems: $.ASN1Encoder<DeviceListItems> | null = null;

/**
 * @summary Encodes a(n) DeviceListItems into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceListItems, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceListItems (value: DeviceListItems, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceListItems) { _cached_encoder_for_DeviceListItems = function (value: DeviceListItems, elGetter: $.ASN1Encoder<DeviceListItems>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DeviceListItems(value, elGetter);
}


/* eslint-enable */
