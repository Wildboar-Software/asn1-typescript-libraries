/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MCMUpdateReqResElt, _decode_MCMUpdateReqResElt, _encode_MCMUpdateReqResElt } from "../SS-MCM-Operations-asn1-97/MCMUpdateReqResElt.ta.mjs";

/**
 * @summary MCMUpdateReqRes
 * @description
 *
 * Result of `mCMUpdateReq` (ECMA-347 §6.5.1.1.5). One to
 * ten elements describing New Messages of the requested
 * Message Type. §6.3.1 does not say why the size stops at
 * 10. After this result the Message Centre PINX starts the
 * update procedure (§6.5.1.1.4).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCMUpdateReqRes  ::=  SEQUENCE SIZE(1..10) OF MCMUpdateReqResElt
 * ```
 */
export
type MCMUpdateReqRes = MCMUpdateReqResElt[]; // SequenceOfType

let _cached_decoder_for_MCMUpdateReqRes: $.ASN1Decoder<MCMUpdateReqRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCMUpdateReqRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCMUpdateReqRes (el: _Element): MCMUpdateReqRes {
    if (!_cached_decoder_for_MCMUpdateReqRes) { _cached_decoder_for_MCMUpdateReqRes = $._decodeSequenceOf<MCMUpdateReqResElt>(() => _decode_MCMUpdateReqResElt); }
    const _value = _cached_decoder_for_MCMUpdateReqRes(el);
    if (_value.length < 1 || _value.length > 10) {
        throw new ASN1SizeError("MCMUpdateReqRes violates SIZE constraint");
    }
    return _value;
}

let _cached_encoder_for_MCMUpdateReqRes: $.ASN1Encoder<MCMUpdateReqRes> | null = null;

/**
 * @summary Encodes a(n) MCMUpdateReqRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCMUpdateReqRes, encoded as an ASN.1 Element.
 */
export
function _encode_MCMUpdateReqRes (value: MCMUpdateReqRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCMUpdateReqRes) { _cached_encoder_for_MCMUpdateReqRes = $._encodeSequenceOf<MCMUpdateReqResElt>(() => _encode_MCMUpdateReqResElt, $.BER); }
    return _cached_encoder_for_MCMUpdateReqRes(value, elGetter);
}

/* eslint-enable */
