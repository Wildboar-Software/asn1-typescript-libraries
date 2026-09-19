/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PA_DATA, _decode_PA_DATA, _encode_PA_DATA } from "../KerberosV5Spec2/PA-DATA.ta.mjs";
// export { PA_DATA, _decode_PA_DATA, _encode_PA_DATA } from "../KerberosV5Spec2/PA-DATA.ta.mjs";


/**
 * @summary METHOD_DATA
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * METHOD-DATA      ::=  SEQUENCE OF PA-DATA
 * ```
 */
export
type METHOD_DATA = PA_DATA[]; // SequenceOfType

let _cached_decoder_for_METHOD_DATA: $.ASN1Decoder<METHOD_DATA> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) METHOD_DATA
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_METHOD_DATA (el: _Element): METHOD_DATA {
    if (!_cached_decoder_for_METHOD_DATA) { _cached_decoder_for_METHOD_DATA = $._decodeSequenceOf<PA_DATA>(() => _decode_PA_DATA); }
    return _cached_decoder_for_METHOD_DATA(el);
}

let _cached_encoder_for_METHOD_DATA: $.ASN1Encoder<METHOD_DATA> | null = null;

/**
 * @summary Encodes a(n) METHOD_DATA into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The METHOD_DATA, encoded as an ASN.1 Element.
 */
export
function _encode_METHOD_DATA (value: METHOD_DATA, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_METHOD_DATA) { _cached_encoder_for_METHOD_DATA = $._encodeSequenceOf<PA_DATA>(() => _encode_PA_DATA, $.BER); }
    return _cached_encoder_for_METHOD_DATA(value, elGetter);
}


/* eslint-enable */
