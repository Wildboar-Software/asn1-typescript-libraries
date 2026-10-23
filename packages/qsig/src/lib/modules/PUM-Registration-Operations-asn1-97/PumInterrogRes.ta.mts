/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PumInterrogRes_Item, _decode_PumInterrogRes_Item, _encode_PumInterrogRes_Item } from "../PUM-Registration-Operations-asn1-97/PumInterrogRes-Item.ta.mjs";

/**
 * @summary PumInterrogRes
 * @description
 *
 * Result of `pumInterrog` (ECMA-282 §6.3.1). One to eight session records. The
 * Home PINX can collect several Visitor PINX replies into this set (§6.7.2.1).
 * If timer T5 expires, it returns the records it already has (§6.7.2.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PumInterrogRes  ::=  SET SIZE(1..8) OF SEQUENCE {
 *     basicService [0] IMPLICIT BasicService OPTIONAL,
 *     -- specific basic service or all basic services,
 *     -- (Home PINX information)
 *     hostingAddr [1] PartyNumber OPTIONAL,
 *     -- The PISN number of the hosting user,
 *     -- always a Complete Number.
 *     -- (Home PINX information)
 *     serviceOption [2] IMPLICIT ServiceOption OPTIONAL,
 *     -- Type of registration session
 *     -- (InCall, OutCall or AllCall)
 *     -- (Home PINX information)
 *     interrogParams SessionParams OPTIONAL,
 *     -- Time left in registration session,
 *     -- Number of outgoing calls left
 *     -- (Visitor PINX information)
 *     argExtension PumrExtension OPTIONAL
 * }
 * ```
 */
export
type PumInterrogRes = PumInterrogRes_Item[]; // SetOfType

let _cached_decoder_for_PumInterrogRes: $.ASN1Decoder<PumInterrogRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PumInterrogRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PumInterrogRes (el: _Element): PumInterrogRes {
    if (!_cached_decoder_for_PumInterrogRes) { _cached_decoder_for_PumInterrogRes = $._decodeSetOf<PumInterrogRes_Item>(() => _decode_PumInterrogRes_Item); }
    const _value = _cached_decoder_for_PumInterrogRes(el);
    if (_value.length < 1 || _value.length > 8) {
        throw new ASN1SizeError("PumInterrogRes violates SIZE constraint");
    }
    return _value;
}

let _cached_encoder_for_PumInterrogRes: $.ASN1Encoder<PumInterrogRes> | null = null;

/**
 * @summary Encodes a(n) PumInterrogRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PumInterrogRes, encoded as an ASN.1 Element.
 */
export
function _encode_PumInterrogRes (value: PumInterrogRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PumInterrogRes) { _cached_encoder_for_PumInterrogRes = $._encodeSetOf<PumInterrogRes_Item>(() => _encode_PumInterrogRes_Item, $.BER); }
    return _cached_encoder_for_PumInterrogRes(value, elGetter);
}

/* eslint-enable */
