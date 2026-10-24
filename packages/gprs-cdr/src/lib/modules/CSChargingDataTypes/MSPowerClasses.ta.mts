/* eslint-disable */
import {
    type ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MSPowerClasses
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MSPowerClasses  ::=  SET  OF
 *    INTEGER
 * ```
 */
export
type MSPowerClasses = INTEGER[]; // SetOfType

let _cached_decoder_for_MSPowerClasses: $.ASN1Decoder<MSPowerClasses> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MSPowerClasses
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MSPowerClasses (el: _Element): MSPowerClasses {
    if (!_cached_decoder_for_MSPowerClasses) { _cached_decoder_for_MSPowerClasses = $._decodeSetOf<INTEGER>(() => $._decodeInteger); }
    return _cached_decoder_for_MSPowerClasses(el);
}

let _cached_encoder_for_MSPowerClasses: $.ASN1Encoder<MSPowerClasses> | null = null;

/**
 * @summary Encodes a(n) MSPowerClasses into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSPowerClasses, encoded as an ASN.1 Element.
 */
export
function _encode_MSPowerClasses (value: MSPowerClasses, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MSPowerClasses) { _cached_encoder_for_MSPowerClasses = $._encodeSetOf<INTEGER>(() => $._encodeInteger, $.BER); }
    return _cached_encoder_for_MSPowerClasses(value, elGetter);
}


/* eslint-enable */
