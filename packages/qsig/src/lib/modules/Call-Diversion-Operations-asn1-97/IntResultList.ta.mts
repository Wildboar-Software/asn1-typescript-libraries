/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntResult, _decode_IntResult, _encode_IntResult } from "../Call-Diversion-Operations-asn1-97/IntResult.ta.mjs";

/**
 * @summary IntResultList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntResultList  ::=  SET SIZE(0..29) OF IntResult
 * ```
 */
export
type IntResultList = IntResult[]; // SetOfType

let _cached_decoder_for_IntResultList: $.ASN1Decoder<IntResultList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntResultList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IntResultList (el: _Element): IntResultList {
    if (!_cached_decoder_for_IntResultList) { _cached_decoder_for_IntResultList = $._decodeSetOf<IntResult>(() => _decode_IntResult); }
    const _value = _cached_decoder_for_IntResultList(el);
    if (_value.length < 0 || _value.length > 29) {
        throw new ASN1SizeError("IntResultList violates SIZE constraint");
    }
    return _value;
}

let _cached_encoder_for_IntResultList: $.ASN1Encoder<IntResultList> | null = null;

/**
 * @summary Encodes a(n) IntResultList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntResultList, encoded as an ASN.1 Element.
 */
export
function _encode_IntResultList (value: IntResultList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IntResultList) { _cached_encoder_for_IntResultList = $._encodeSetOf<IntResult>(() => _encode_IntResult, $.BER); }
    return _cached_encoder_for_IntResultList(value, elGetter);
}

/* eslint-enable */
