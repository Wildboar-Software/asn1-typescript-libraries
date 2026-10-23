/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MailboxFullPar, _decode_MailboxFullPar, _encode_MailboxFullPar } from "../SS-MCM-Operations-asn1-97/MailboxFullPar.ta.mjs";

/**
 * @summary MailboxFullFor
 * @description
 *
 * Message Types in a `mCMailboxFull` invoke (ECMA-347
 * §6.5.1.1.6). One entry per Message Type at or above its
 * threshold.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MailboxFullFor  ::=  SEQUENCE OF MailboxFullPar
 * ```
 */
export
type MailboxFullFor = MailboxFullPar[]; // SequenceOfType

let _cached_decoder_for_MailboxFullFor: $.ASN1Decoder<MailboxFullFor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MailboxFullFor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MailboxFullFor (el: _Element): MailboxFullFor {
    if (!_cached_decoder_for_MailboxFullFor) { _cached_decoder_for_MailboxFullFor = $._decodeSequenceOf<MailboxFullPar>(() => _decode_MailboxFullPar); }
    return _cached_decoder_for_MailboxFullFor(el);
}

let _cached_encoder_for_MailboxFullFor: $.ASN1Encoder<MailboxFullFor> | null = null;

/**
 * @summary Encodes a(n) MailboxFullFor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MailboxFullFor, encoded as an ASN.1 Element.
 */
export
function _encode_MailboxFullFor (value: MailboxFullFor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MailboxFullFor) { _cached_encoder_for_MailboxFullFor = $._encodeSequenceOf<MailboxFullPar>(() => _encode_MailboxFullPar, $.BER); }
    return _cached_encoder_for_MailboxFullFor(value, elGetter);
}

/* eslint-enable */
