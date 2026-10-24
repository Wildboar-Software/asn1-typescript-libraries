/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type RoseAPDU, _decode_RoseAPDU, _encode_RoseAPDU } from "../PSS1-Service-APDUs-asn1-97/RoseAPDU.ta.mjs";
import { type AcseAPDU, _decode_AcseAPDU, _encode_AcseAPDU } from "../Association-Control-Apdus-asn1-97/AcseAPDU.ta.mjs";

/**
 * @summary RemoteOperationsPortion_Item
 * @description
 *
 * One ROSE APDU or one ACSE APDU inside a dialogue PDU (ECMA-165 §11.3.3.3).
 * §8.4 allows one or more of either and does not say whether a single portion
 * may mix them. RoseAPDU here uses `InvokeIdSet` and the open `OperationSet`
 * for both directions.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteOperationsPortion-Item ::= CHOICE {
 *     roseAPDU [17] RoseAPDU {
 *         {InvokeIdSet},
 *         {OperationSet},
 *         {OperationSet}
 *     },
 *     acseAPDU [19] AcseAPDU
 * }
 * ```
 */
export
type RemoteOperationsPortion_Item =
    { roseAPDU: RoseAPDU } /* CHOICE_ALT_ROOT */
    | { acseAPDU: AcseAPDU } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RemoteOperationsPortion_Item: $.ASN1Decoder<RemoteOperationsPortion_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RemoteOperationsPortion_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RemoteOperationsPortion_Item (el: _Element): RemoteOperationsPortion_Item {
    if (!_cached_decoder_for_RemoteOperationsPortion_Item) { _cached_decoder_for_RemoteOperationsPortion_Item = $._decode_inextensible_choice<RemoteOperationsPortion_Item>({
    "CONTEXT 17": [ "roseAPDU", $._decode_explicit<RoseAPDU>(() => _decode_RoseAPDU) ],
    "CONTEXT 19": [ "acseAPDU", $._decode_explicit<AcseAPDU>(() => _decode_AcseAPDU) ]
}); }
    return _cached_decoder_for_RemoteOperationsPortion_Item(el);
}

let _cached_encoder_for_RemoteOperationsPortion_Item: $.ASN1Encoder<RemoteOperationsPortion_Item> | null = null;

/**
 * @summary Encodes a(n) RemoteOperationsPortion_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoteOperationsPortion_Item, encoded as an ASN.1 Element.
 */
export
function _encode_RemoteOperationsPortion_Item (value: RemoteOperationsPortion_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RemoteOperationsPortion_Item) { _cached_encoder_for_RemoteOperationsPortion_Item = $._encode_choice<RemoteOperationsPortion_Item>({
    "roseAPDU": $._encode_explicit(_TagClass.context, 17, () => _encode_RoseAPDU, $.BER),
    "acseAPDU": $._encode_explicit(_TagClass.context, 19, () => _encode_AcseAPDU, $.BER),
}, $.BER); }
    return _cached_encoder_for_RemoteOperationsPortion_Item(value, elGetter);
}

/* eslint-enable */
