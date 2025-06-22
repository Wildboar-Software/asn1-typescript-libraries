/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    CertUpdateOK_Item_not_ok,
    _decode_CertUpdateOK_Item_not_ok,
    _encode_CertUpdateOK_Item_not_ok,
} from "../CaSubscription/CertUpdateOK-Item-not-ok.ta.mjs";
import {
    CertUpdateOK_Item_ok,
    _decode_CertUpdateOK_Item_ok,
    _encode_CertUpdateOK_Item_ok,
} from "../CaSubscription/CertUpdateOK-Item-ok.ta.mjs";
/**
 * @summary CertUpdateOK_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUpdateOK-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertUpdateOK_Item =
    | { ok: CertUpdateOK_Item_ok } /* CHOICE_ALT_ROOT */
    | { not_ok: CertUpdateOK_Item_not_ok } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CertUpdateOK_Item: $.ASN1Decoder<CertUpdateOK_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateOK_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateOK_Item} The decoded data structure.
 */
export function _decode_CertUpdateOK_Item(el: _Element) {
    if (!_cached_decoder_for_CertUpdateOK_Item) {
        _cached_decoder_for_CertUpdateOK_Item = $._decode_extensible_choice<CertUpdateOK_Item>(
            {
                "CONTEXT 0": [
                    "ok",
                    $._decode_implicit<CertUpdateOK_Item_ok>(
                        () => _decode_CertUpdateOK_Item_ok
                    ),
                ],
                "CONTEXT 1": [
                    "not_ok",
                    $._decode_implicit<CertUpdateOK_Item_not_ok>(
                        () => _decode_CertUpdateOK_Item_not_ok
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CertUpdateOK_Item(el);
}

let _cached_encoder_for_CertUpdateOK_Item: $.ASN1Encoder<CertUpdateOK_Item> | null = null;

/**
 * @summary Encodes a(n) CertUpdateOK_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateOK_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateOK_Item(
    value: CertUpdateOK_Item,
    elGetter: $.ASN1Encoder<CertUpdateOK_Item>
) {
    if (!_cached_encoder_for_CertUpdateOK_Item) {
        _cached_encoder_for_CertUpdateOK_Item = $._encode_choice<CertUpdateOK_Item>(
            {
                ok: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertUpdateOK_Item_ok,
                    $.DER
                ),
                not_ok: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertUpdateOK_Item_not_ok,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_CertUpdateOK_Item(value, elGetter);
}


/* eslint-enable */
