/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta.mjs";
/**
 * @summary OidOrAttr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OidOrAttr  ::=  CHOICE {
 *   oid       ATTRIBUTE.&id ({ ExtAttributes }),
 *   attribute Attribute {{ ExtAttributes }},
 *   ... }
 * ```
 */
export type OidOrAttr =
    | { oid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { attribute: Attribute } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_OidOrAttr: $.ASN1Decoder<OidOrAttr> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OidOrAttr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OidOrAttr} The decoded data structure.
 */
export function _decode_OidOrAttr(el: _Element) {
    if (!_cached_decoder_for_OidOrAttr) {
        _cached_decoder_for_OidOrAttr = $._decode_extensible_choice<OidOrAttr>({
            "UNIVERSAL 6": ["oid", $._decodeObjectIdentifier],
            "UNIVERSAL 16": ["attribute", _decode_Attribute],
        });
    }
    return _cached_decoder_for_OidOrAttr(el);
}

let _cached_encoder_for_OidOrAttr: $.ASN1Encoder<OidOrAttr> | null = null;

/**
 * @summary Encodes a(n) OidOrAttr into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OidOrAttr, encoded as an ASN.1 Element.
 */
export function _encode_OidOrAttr(
    value: OidOrAttr,
    elGetter: $.ASN1Encoder<OidOrAttr>
) {
    if (!_cached_encoder_for_OidOrAttr) {
        _cached_encoder_for_OidOrAttr = $._encode_choice<OidOrAttr>(
            {
                oid: $._encodeObjectIdentifier,
                attribute: _encode_Attribute,
            },
            $.DER
        );
    }
    return _cached_encoder_for_OidOrAttr(value, elGetter);
}


/* eslint-enable */
