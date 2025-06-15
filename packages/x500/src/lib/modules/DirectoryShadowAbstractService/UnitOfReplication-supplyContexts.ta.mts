/* eslint-disable */
import { ASN1Element as _Element, NULL, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
/**
 * @summary UnitOfReplication_supplyContexts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnitOfReplication-supplyContexts ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type UnitOfReplication_supplyContexts =
    | { allContexts: NULL } /* CHOICE_ALT_ROOT */
    | { selectedContexts: OBJECT_IDENTIFIER[] } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_UnitOfReplication_supplyContexts: $.ASN1Decoder<UnitOfReplication_supplyContexts> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UnitOfReplication_supplyContexts
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnitOfReplication_supplyContexts} The decoded data structure.
 */
export function _decode_UnitOfReplication_supplyContexts(el: _Element) {
    if (!_cached_decoder_for_UnitOfReplication_supplyContexts) {
        _cached_decoder_for_UnitOfReplication_supplyContexts = $._decode_extensible_choice<UnitOfReplication_supplyContexts>(
            {
                "UNIVERSAL 5": ["allContexts", $._decodeNull],
                "UNIVERSAL 17": [
                    "selectedContexts",
                    $._decodeSetOf<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_UnitOfReplication_supplyContexts(el);
}

let _cached_encoder_for_UnitOfReplication_supplyContexts: $.ASN1Encoder<UnitOfReplication_supplyContexts> | null = null;

/**
 * @summary Encodes a(n) UnitOfReplication_supplyContexts into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnitOfReplication_supplyContexts, encoded as an ASN.1 Element.
 */
export function _encode_UnitOfReplication_supplyContexts(
    value: UnitOfReplication_supplyContexts,
    elGetter: $.ASN1Encoder<UnitOfReplication_supplyContexts>
) {
    if (!_cached_encoder_for_UnitOfReplication_supplyContexts) {
        _cached_encoder_for_UnitOfReplication_supplyContexts = $._encode_choice<UnitOfReplication_supplyContexts>(
            {
                allContexts: $._encodeNull,
                selectedContexts: $._encodeSetOf<OBJECT_IDENTIFIER>(
                    () => $._encodeObjectIdentifier,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_UnitOfReplication_supplyContexts(
        value,
        elGetter
    );
}


/* eslint-enable */
