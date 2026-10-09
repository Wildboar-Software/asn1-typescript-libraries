/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ItemOrder_esRequest, _decode_ItemOrder_esRequest, _encode_ItemOrder_esRequest } from "../ESFormat-ItemOrder/ItemOrder-esRequest.ta.mjs";
// export { ItemOrder_esRequest, _decode_ItemOrder_esRequest, _encode_ItemOrder_esRequest } from "../ESFormat-ItemOrder/ItemOrder-esRequest.ta.mjs";
import { ItemOrder_taskPackage, _decode_ItemOrder_taskPackage, _encode_ItemOrder_taskPackage } from "../ESFormat-ItemOrder/ItemOrder-taskPackage.ta.mjs";
// export { ItemOrder_taskPackage, _decode_ItemOrder_taskPackage, _encode_ItemOrder_taskPackage } from "../ESFormat-ItemOrder/ItemOrder-taskPackage.ta.mjs";


/**
 * @summary ItemOrder
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ItemOrder  ::=  CHOICE {
 *     esRequest       [1] IMPLICIT SEQUENCE {
 *         toKeep          [1] ClientPartToKeep OPTIONAL,
 *         notToKeep       [2] ClientPartNotToKeep
 *     },
 *     taskPackage     [2] IMPLICIT SEQUENCE {
 *         clientPart      [1] ClientPartToKeep OPTIONAL,
 *         serverPart      [2] ServerPart
 *     }
 * }
 * ```
 */
export
type ItemOrder =
    { esRequest: ItemOrder_esRequest } /* CHOICE_ALT_ROOT */
    | { taskPackage: ItemOrder_taskPackage } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ItemOrder: $.ASN1Decoder<ItemOrder> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ItemOrder
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ItemOrder (el: _Element): ItemOrder {
    if (!_cached_decoder_for_ItemOrder) { _cached_decoder_for_ItemOrder = $._decode_inextensible_choice<ItemOrder>({
    "CONTEXT 1": [ "esRequest", $._decode_implicit<ItemOrder_esRequest>(() => _decode_ItemOrder_esRequest) ],
    "CONTEXT 2": [ "taskPackage", $._decode_implicit<ItemOrder_taskPackage>(() => _decode_ItemOrder_taskPackage) ]
}); }
    return _cached_decoder_for_ItemOrder(el);
}

let _cached_encoder_for_ItemOrder: $.ASN1Encoder<ItemOrder> | null = null;

/**
 * @summary Encodes a(n) ItemOrder into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ItemOrder, encoded as an ASN.1 Element.
 */
export
function _encode_ItemOrder (value: ItemOrder, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ItemOrder) { _cached_encoder_for_ItemOrder = $._encode_choice<ItemOrder>({
    "esRequest": $._encode_implicit(_TagClass.context, 1, () => _encode_ItemOrder_esRequest, $.BER),
    "taskPackage": $._encode_implicit(_TagClass.context, 2, () => _encode_ItemOrder_taskPackage, $.BER),
}, $.BER); }
    return _cached_encoder_for_ItemOrder(value, elGetter);
}


/* eslint-enable */
