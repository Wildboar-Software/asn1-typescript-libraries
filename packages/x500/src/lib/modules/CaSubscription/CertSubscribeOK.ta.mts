/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertSubscribeOK_Item,
    _decode_CertSubscribeOK_Item,
    _encode_CertSubscribeOK_Item,
} from "../CaSubscription/CertSubscribeOK-Item.ta.mjs";
/**
 * @summary CertSubscribeOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeOK  ::=  SEQUENCE (SIZE (1..MAX)) OF CHOICE {
 *   ok       [0] SEQUENCE {
 *     cert         Certificate,
 *     status       CertStatus,
 *     revokeReason CRLReason OPTIONAL,
 *     ... },
 *   not-ok   [1] SEQUENCE {
 *     status       CASP-CertStatusCode,
 *     ... },
 *   ... }
 * ```
 */
export type CertSubscribeOK = CertSubscribeOK_Item[]; // SequenceOfType

let _cached_decoder_for_CertSubscribeOK: $.ASN1Decoder<CertSubscribeOK> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeOK} The decoded data structure.
 */
export function _decode_CertSubscribeOK(el: _Element): CertSubscribeOK {
    if (!_cached_decoder_for_CertSubscribeOK) {
        _cached_decoder_for_CertSubscribeOK = $._decodeSequenceOf<CertSubscribeOK_Item>(
            () => _decode_CertSubscribeOK_Item
        );
    }
    return _cached_decoder_for_CertSubscribeOK(el);
}

let _cached_encoder_for_CertSubscribeOK: $.ASN1Encoder<CertSubscribeOK> | null = null;

/**
 * @summary Encodes a(n) CertSubscribeOK into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeOK, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeOK(
    value: CertSubscribeOK,
    elGetter: $.ASN1Encoder<CertSubscribeOK>
): _Element {
    if (!_cached_encoder_for_CertSubscribeOK) {
        _cached_encoder_for_CertSubscribeOK = $._encodeSequenceOf<CertSubscribeOK_Item>(
            () => _encode_CertSubscribeOK_Item,
            $.DER
        );
    }
    return _cached_encoder_for_CertSubscribeOK(value, elGetter);
}


/* eslint-enable */
