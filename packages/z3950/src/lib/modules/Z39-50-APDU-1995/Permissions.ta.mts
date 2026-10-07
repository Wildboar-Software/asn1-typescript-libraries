/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Permissions_Item, _decode_Permissions_Item, _encode_Permissions_Item } from "./Permissions-Item.ta.mjs";


/**
 * @summary Permissions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Permissions ::= SEQUENCE OF Permissions-Item
 * ```
 */
export
type Permissions = Permissions_Item[]; // SequenceOfType

let _cached_decoder_for_Permissions: $.ASN1Decoder<Permissions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Permissions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Permissions (el: _Element): Permissions {
    if (!_cached_decoder_for_Permissions) { _cached_decoder_for_Permissions = $._decodeSequenceOf<Permissions_Item>(() => _decode_Permissions_Item); }
    return _cached_decoder_for_Permissions(el);
}

let _cached_encoder_for_Permissions: $.ASN1Encoder<Permissions> | null = null;

/**
 * @summary Encodes a(n) Permissions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Permissions, encoded as an ASN.1 Element.
 */
export
function _encode_Permissions (value: Permissions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Permissions) { _cached_encoder_for_Permissions = $._encodeSequenceOf<Permissions_Item>(() => _encode_Permissions_Item, $.BER); }
    return _cached_encoder_for_Permissions(value, elGetter);
}

/* eslint-enable */
