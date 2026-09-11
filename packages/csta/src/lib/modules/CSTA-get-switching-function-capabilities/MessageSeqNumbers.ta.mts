/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MessageSeqNumbers
 * @description
 *
 * Where message sequence numbers are supplied (events, acks,
 * service requests). Table 13-9.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageSeqNumbers  ::=  BIT STRING
 * {     allEvents                     (0),
 *     allAcks                     (1),
 *     allServReqs                     (2) }
 * ```
 */
export
type MessageSeqNumbers = BIT_STRING;

/**
 * @summary MessageSeqNumbers_allEvents
 * @constant
 */
export
const MessageSeqNumbers_allEvents: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary allEvents
 * @constant
 */
export
const allEvents: number = MessageSeqNumbers_allEvents; /* SHORT_NAMED_BIT */

/**
 * @summary MessageSeqNumbers_allAcks
 * @constant
 */
export
const MessageSeqNumbers_allAcks: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary allAcks
 * @constant
 */
export
const allAcks: number = MessageSeqNumbers_allAcks; /* SHORT_NAMED_BIT */

/**
 * @summary MessageSeqNumbers_allServReqs
 * @constant
 */
export
const MessageSeqNumbers_allServReqs: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary allServReqs
 * @constant
 */
export
const allServReqs: number = MessageSeqNumbers_allServReqs; /* SHORT_NAMED_BIT */

let _cached_decoder_for_MessageSeqNumbers: $.ASN1Decoder<MessageSeqNumbers> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageSeqNumbers
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MessageSeqNumbers (el: _Element): MessageSeqNumbers {
    if (!_cached_decoder_for_MessageSeqNumbers) { _cached_decoder_for_MessageSeqNumbers = $._decodeBitString; }
    return _cached_decoder_for_MessageSeqNumbers(el);
}

let _cached_encoder_for_MessageSeqNumbers: $.ASN1Encoder<MessageSeqNumbers> | null = null;

/**
 * @summary Encodes a(n) MessageSeqNumbers into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageSeqNumbers, encoded as an ASN.1 Element.
 */
export
function _encode_MessageSeqNumbers (value: MessageSeqNumbers, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MessageSeqNumbers) { _cached_encoder_for_MessageSeqNumbers = $._encodeBitString; }
    return _cached_encoder_for_MessageSeqNumbers(value, elGetter);
}


/* eslint-enable */
