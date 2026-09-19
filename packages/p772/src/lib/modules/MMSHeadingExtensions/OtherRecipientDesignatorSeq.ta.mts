/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OtherRecipientDesignator, _decode_OtherRecipientDesignator, _encode_OtherRecipientDesignator } from "../MMSHeadingExtensions/OtherRecipientDesignator.ta.mjs";
// export { OtherRecipientDesignator, _decode_OtherRecipientDesignator, _encode_OtherRecipientDesignator } from "../MMSHeadingExtensions/OtherRecipientDesignator.ta.mjs";


/**
 * @summary OtherRecipientDesignatorSeq
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OtherRecipientDesignatorSeq  ::=  SEQUENCE OF OtherRecipientDesignator
 * ```
 */
export
type OtherRecipientDesignatorSeq = OtherRecipientDesignator[]; // SequenceOfType

let _cached_decoder_for_OtherRecipientDesignatorSeq: $.ASN1Decoder<OtherRecipientDesignatorSeq> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OtherRecipientDesignatorSeq
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OtherRecipientDesignatorSeq (el: _Element): OtherRecipientDesignatorSeq {
    if (!_cached_decoder_for_OtherRecipientDesignatorSeq) { _cached_decoder_for_OtherRecipientDesignatorSeq = $._decodeSequenceOf<OtherRecipientDesignator>(() => _decode_OtherRecipientDesignator); }
    return _cached_decoder_for_OtherRecipientDesignatorSeq(el);
}

let _cached_encoder_for_OtherRecipientDesignatorSeq: $.ASN1Encoder<OtherRecipientDesignatorSeq> | null = null;

/**
 * @summary Encodes a(n) OtherRecipientDesignatorSeq into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherRecipientDesignatorSeq, encoded as an ASN.1 Element.
 */
export
function _encode_OtherRecipientDesignatorSeq (value: OtherRecipientDesignatorSeq, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OtherRecipientDesignatorSeq) { _cached_encoder_for_OtherRecipientDesignatorSeq = $._encodeSequenceOf<OtherRecipientDesignator>(() => _encode_OtherRecipientDesignator, $.BER); }
    return _cached_encoder_for_OtherRecipientDesignatorSeq(value, elGetter);
}


/* eslint-enable */
