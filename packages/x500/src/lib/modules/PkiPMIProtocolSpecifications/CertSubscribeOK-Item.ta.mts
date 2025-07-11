/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertSubscribeOK_Item_not_ok,
    _decode_CertSubscribeOK_Item_not_ok,
    _encode_CertSubscribeOK_Item_not_ok,
} from "../PkiPMIProtocolSpecifications/CertSubscribeOK-Item-not-ok.ta.mjs";
import {
    CertSubscribeOK_Item_ok,
    _decode_CertSubscribeOK_Item_ok,
    _encode_CertSubscribeOK_Item_ok,
} from "../PkiPMIProtocolSpecifications/CertSubscribeOK-Item-ok.ta.mjs";
/**
 * @summary CertSubscribeOK_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeOK-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertSubscribeOK_Item =
    | { ok: CertSubscribeOK_Item_ok } /* CHOICE_ALT_ROOT */
    | { not_ok: CertSubscribeOK_Item_not_ok } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CertSubscribeOK_Item: $.ASN1Decoder<CertSubscribeOK_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeOK_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeOK_Item} The decoded data structure.
 */
export function _decode_CertSubscribeOK_Item(el: _Element): CertSubscribeOK_Item {
    if (!_cached_decoder_for_CertSubscribeOK_Item) {
        _cached_decoder_for_CertSubscribeOK_Item = $._decode_extensible_choice<CertSubscribeOK_Item>(
            {
                "CONTEXT 0": [
                    "ok",
                    $._decode_explicit<CertSubscribeOK_Item_ok>(
                        () => _decode_CertSubscribeOK_Item_ok
                    ),
                ],
                "CONTEXT 1": [
                    "not_ok",
                    $._decode_explicit<CertSubscribeOK_Item_not_ok>(
                        () => _decode_CertSubscribeOK_Item_not_ok
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CertSubscribeOK_Item(el);
}

let _cached_encoder_for_CertSubscribeOK_Item: $.ASN1Encoder<CertSubscribeOK_Item> | null = null;

/**
 * @summary Encodes a(n) CertSubscribeOK_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeOK_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeOK_Item(
    value: CertSubscribeOK_Item,
    elGetter: $.ASN1Encoder<CertSubscribeOK_Item>
): _Element {
    if (!_cached_encoder_for_CertSubscribeOK_Item) {
        _cached_encoder_for_CertSubscribeOK_Item = $._encode_choice<CertSubscribeOK_Item>(
            {
                ok: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertSubscribeOK_Item_ok,
                    $.DER
                ),
                not_ok: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertSubscribeOK_Item_not_ok,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_CertSubscribeOK_Item(value, elGetter);
}


/* eslint-enable */
