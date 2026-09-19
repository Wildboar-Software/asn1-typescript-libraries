/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { VendorSpecificExtension_Item, _decode_VendorSpecificExtension_Item, _encode_VendorSpecificExtension_Item } from "../RSPDefinitions/VendorSpecificExtension-Item.ta.mjs";
// export { VendorSpecificExtension_Item, _decode_VendorSpecificExtension_Item, _encode_VendorSpecificExtension_Item } from "../RSPDefinitions/VendorSpecificExtension-Item.ta.mjs";


/**
 * @summary VendorSpecificExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VendorSpecificExtension  ::=  SEQUENCE OF SEQUENCE {
 *     vendorOid [0] OPENTYPE.&typeId, -- OID of the vendor who defined this specific extension
 *     vendorSpecificData [1] OPENTYPE.&Type
 * }
 * ```
 */
export
type VendorSpecificExtension = VendorSpecificExtension_Item[]; // SequenceOfType

let _cached_decoder_for_VendorSpecificExtension: $.ASN1Decoder<VendorSpecificExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VendorSpecificExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VendorSpecificExtension (el: _Element): VendorSpecificExtension {
    if (!_cached_decoder_for_VendorSpecificExtension) { _cached_decoder_for_VendorSpecificExtension = $._decodeSequenceOf<VendorSpecificExtension_Item>(() => _decode_VendorSpecificExtension_Item); }
    return _cached_decoder_for_VendorSpecificExtension(el);
}

let _cached_encoder_for_VendorSpecificExtension: $.ASN1Encoder<VendorSpecificExtension> | null = null;

/**
 * @summary Encodes a(n) VendorSpecificExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VendorSpecificExtension, encoded as an ASN.1 Element.
 */
export
function _encode_VendorSpecificExtension (value: VendorSpecificExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VendorSpecificExtension) { _cached_encoder_for_VendorSpecificExtension = $._encodeSequenceOf<VendorSpecificExtension_Item>(() => _encode_VendorSpecificExtension_Item, $.BER); }
    return _cached_encoder_for_VendorSpecificExtension(value, elGetter);
}


/* eslint-enable */
