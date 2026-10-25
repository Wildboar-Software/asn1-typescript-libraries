/* eslint-disable */
import {
    type ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SupplServices
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupplServices  ::=  SET  OF
 *    OCTET STRING ( SIZE( 1 ) )
 * ```
 */
export
type SupplServices = OCTET_STRING[]; // SetOfType

let _cached_decoder_for_SupplServices: $.ASN1Decoder<SupplServices> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupplServices
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SupplServices (el: _Element): SupplServices {
    if (!_cached_decoder_for_SupplServices) { _cached_decoder_for_SupplServices = $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString); }
    const _decoded_SupplServices = _cached_decoder_for_SupplServices(el);
    for (const _item of _decoded_SupplServices) {
        if (_item.length !== 1) {
            throw new ASN1SizeError("SupplServices element violates SIZE constraint");
        }
    }
    return _decoded_SupplServices;
}

let _cached_encoder_for_SupplServices: $.ASN1Encoder<SupplServices> | null = null;

/**
 * @summary Encodes a(n) SupplServices into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupplServices, encoded as an ASN.1 Element.
 */
export
function _encode_SupplServices (value: SupplServices, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SupplServices) { _cached_encoder_for_SupplServices = $._encodeSetOf<OCTET_STRING>(() => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_SupplServices(value, elGetter);
}


/* eslint-enable */
