/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

import {
    IPM,
    _decode_IPM,
    _encode_IPM,
} from "@wildboar/x400/IPMSInformationObjects";



/**
 * @summary MMMessageData
 * @description
 * 
 * The forwarded message. Annex I1 assigns `MMMessageData ::= MM`. The
 * accompanying note says this body part can carry a forwarded MM or a forwarded
 * IPM, whereas the civil message body part can carry only an IPM. This module
 * types the data as `IPM`.
 *
 * Use this body part when the received message is an MM and it is not
 * encrypted, or it has been decrypted. An encrypted message that cannot be
 * decrypted uses the forwarded-encrypted body part. STANAG 4406 (Ed. 2), Annex
 * A, clause 7.3.12.4, B1.4, and 18.5.3.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMMessageData  ::=  IPM
 * ```
 */
export
type MMMessageData = IPM; // DefinedType

let _cached_decoder_for_MMMessageData: $.ASN1Decoder<MMMessageData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMMessageData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMMessageData (el: _Element): MMMessageData {
    if (!_cached_decoder_for_MMMessageData) { _cached_decoder_for_MMMessageData = _decode_IPM; }
    return _cached_decoder_for_MMMessageData(el);
}

let _cached_encoder_for_MMMessageData: $.ASN1Encoder<MMMessageData> | null = null;

/**
 * @summary Encodes a(n) MMMessageData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMMessageData, encoded as an ASN.1 Element.
 */
export
function _encode_MMMessageData (value: MMMessageData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMMessageData) { _cached_encoder_for_MMMessageData = _encode_IPM; }
    return _cached_encoder_for_MMMessageData(value, elGetter);
}


/* eslint-enable */
