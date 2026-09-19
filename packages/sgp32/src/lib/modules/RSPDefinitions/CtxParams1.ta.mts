/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CtxParamsForCommonAuthentication, _decode_CtxParamsForCommonAuthentication, _encode_CtxParamsForCommonAuthentication } from "../RSPDefinitions/CtxParamsForCommonAuthentication.ta.mjs";
// export { CtxParamsForCommonAuthentication, _decode_CtxParamsForCommonAuthentication, _encode_CtxParamsForCommonAuthentication } from "../RSPDefinitions/CtxParamsForCommonAuthentication.ta.mjs";


/**
 * @summary CtxParams1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CtxParams1  ::=  CHOICE {
 *     ctxParamsForCommonAuthentication CtxParamsForCommonAuthentication-- New contextual data objects MAY be defined for extensibility.
 * }
 * ```
 */
export
type CtxParams1 =
    { ctxParamsForCommonAuthentication: CtxParamsForCommonAuthentication } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CtxParams1: $.ASN1Decoder<CtxParams1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CtxParams1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CtxParams1 (el: _Element): CtxParams1 {
    if (!_cached_decoder_for_CtxParams1) { _cached_decoder_for_CtxParams1 = $._decode_inextensible_choice<CtxParams1>({
    "CONTEXT 0": [ "ctxParamsForCommonAuthentication", _decode_CtxParamsForCommonAuthentication ]
}); }
    return _cached_decoder_for_CtxParams1(el);
}

let _cached_encoder_for_CtxParams1: $.ASN1Encoder<CtxParams1> | null = null;

/**
 * @summary Encodes a(n) CtxParams1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CtxParams1, encoded as an ASN.1 Element.
 */
export
function _encode_CtxParams1 (value: CtxParams1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CtxParams1) { _cached_encoder_for_CtxParams1 = $._encode_choice<CtxParams1>({
    "ctxParamsForCommonAuthentication": _encode_CtxParamsForCommonAuthentication,
}, $.BER); }
    return _cached_encoder_for_CtxParams1(value, elGetter);
}


/* eslint-enable */
