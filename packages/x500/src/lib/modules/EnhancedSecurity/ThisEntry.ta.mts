/* eslint-disable */
import { ASN1Element as _Element, NULL } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    IssuerAndSerialNumber,
    _decode_IssuerAndSerialNumber,
    _encode_IssuerAndSerialNumber,
} from "../EnhancedSecurity/IssuerAndSerialNumber.ta.mjs";
/**
 * @summary ThisEntry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ThisEntry  ::=  CHOICE {
 *   onlyOne   NULL,
 *   specific  IssuerAndSerialNumber,
 *   ... }
 * ```
 */
export type ThisEntry =
    | { onlyOne: NULL } /* CHOICE_ALT_ROOT */
    | { specific: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ThisEntry: $.ASN1Decoder<ThisEntry> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ThisEntry
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ThisEntry} The decoded data structure.
 */
export function _decode_ThisEntry(el: _Element) {
    if (!_cached_decoder_for_ThisEntry) {
        _cached_decoder_for_ThisEntry = $._decode_extensible_choice<ThisEntry>({
            "UNIVERSAL 5": ["onlyOne", $._decodeNull],
            "UNIVERSAL 16": ["specific", _decode_IssuerAndSerialNumber],
        });
    }
    return _cached_decoder_for_ThisEntry(el);
}

let _cached_encoder_for_ThisEntry: $.ASN1Encoder<ThisEntry> | null = null;

/**
 * @summary Encodes a(n) ThisEntry into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ThisEntry, encoded as an ASN.1 Element.
 */
export function _encode_ThisEntry(
    value: ThisEntry,
    elGetter: $.ASN1Encoder<ThisEntry>
) {
    if (!_cached_encoder_for_ThisEntry) {
        _cached_encoder_for_ThisEntry = $._encode_choice<ThisEntry>(
            {
                onlyOne: $._encodeNull,
                specific: _encode_IssuerAndSerialNumber,
            },
            $.DER
        );
    }
    return _cached_encoder_for_ThisEntry(value, elGetter);
}


/* eslint-enable */
