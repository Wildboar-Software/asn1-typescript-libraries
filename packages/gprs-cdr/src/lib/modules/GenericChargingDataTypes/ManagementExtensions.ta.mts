/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../GenericChargingDataTypes/ManagementExtension.ta.mjs";
// export { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../GenericChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary ManagementExtensions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ManagementExtensions  ::=  SET  OF
 *    ManagementExtension
 * ```
 */
export
type ManagementExtensions = ManagementExtension[]; // SetOfType

let _cached_decoder_for_ManagementExtensions: $.ASN1Decoder<ManagementExtensions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ManagementExtensions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ManagementExtensions (el: _Element): ManagementExtensions {
    if (!_cached_decoder_for_ManagementExtensions) { _cached_decoder_for_ManagementExtensions = $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension); }
    return _cached_decoder_for_ManagementExtensions(el);
}

let _cached_encoder_for_ManagementExtensions: $.ASN1Encoder<ManagementExtensions> | null = null;

/**
 * @summary Encodes a(n) ManagementExtensions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManagementExtensions, encoded as an ASN.1 Element.
 */
export
function _encode_ManagementExtensions (value: ManagementExtensions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ManagementExtensions) { _cached_encoder_for_ManagementExtensions = $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER); }
    return _cached_encoder_for_ManagementExtensions(value, elGetter);
}


/* eslint-enable */
