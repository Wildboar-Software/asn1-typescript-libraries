/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    RecipientInfo,
    _decode_RecipientInfo,
    _encode_RecipientInfo,
} from "../CryptographicMessageSyntax/RecipientInfo.ta.mjs";

/**
 * @summary RecipientInfos
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientInfos  ::=  SET OF RecipientInfo
 * ```
 */
export type RecipientInfos = RecipientInfo[]; // SetOfType


let _cached_decoder_for_RecipientInfos: $.ASN1Decoder<RecipientInfos> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RecipientInfos
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientInfos} The decoded data structure.
 */
export function _decode_RecipientInfos(el: _Element) {
    if (!_cached_decoder_for_RecipientInfos) {
        _cached_decoder_for_RecipientInfos = $._decodeSetOf<RecipientInfo>(
            () => _decode_RecipientInfo
        );
    }
    return _cached_decoder_for_RecipientInfos(el);
}


let _cached_encoder_for_RecipientInfos: $.ASN1Encoder<RecipientInfos> | null = null;


/**
 * @summary Encodes a(n) RecipientInfos into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientInfos, encoded as an ASN.1 Element.
 */
export function _encode_RecipientInfos(
    value: RecipientInfos,
    elGetter: $.ASN1Encoder<RecipientInfos>
) {
    if (!_cached_encoder_for_RecipientInfos) {
        _cached_encoder_for_RecipientInfos = $._encodeSetOf<RecipientInfo>(
            () => _encode_RecipientInfo,
            $.BER
        );
    }
    return _cached_encoder_for_RecipientInfos(value, elGetter);
}


/* eslint-enable */
