/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    Address,
    _decode_Address,
    _encode_Address,
} from "../CMSProfileAttributes/Address.ta.mjs";
import {
    DBRecord,
    _decode_DBRecord,
    _encode_DBRecord,
} from "../CMSProfileAttributes/DBRecord.ta.mjs";
import { GPS, _decode_GPS, _encode_GPS } from "../CMSProfileAttributes/GPS.ta.mjs";
import {
    RFID,
    _decode_RFID,
    _encode_RFID,
} from "../CMSProfileAttributes/RFID.ta.mjs";
import { URI, _decode_URI, _encode_URI } from "../CMSProfileAttributes/URI.ta.mjs";

/**
 * @summary Pointer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Pointer  ::=  CHOICE {
 * uri            URI,        -- Uniform Resource Identifier
 * rfid        RFID,        -- Radio Frequency Identification
 * gps            GPS,        -- Global Positioning System
 * address    Address,    -- Free format object location
 * dbRecord    DBRecord,    -- Number of fully qualified name
 * ...            -- Expect other pointer types
 * }
 * ```
 */
export type Pointer =
    | { uri: URI } /* CHOICE_ALT_ROOT */
    | { rfid: RFID } /* CHOICE_ALT_ROOT */
    | { gps: GPS } /* CHOICE_ALT_ROOT */
    | { address: Address } /* CHOICE_ALT_ROOT */
    | { dbRecord: DBRecord } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_Pointer: $.ASN1Decoder<Pointer> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Pointer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Pointer} The decoded data structure.
 */
export function _decode_Pointer(el: _Element) {
    if (!_cached_decoder_for_Pointer) {
        _cached_decoder_for_Pointer = $._decode_extensible_choice<Pointer>({
            "CONTEXT 0": ["uri", _decode_URI],
            "CONTEXT 1": ["rfid", _decode_RFID],
            "CONTEXT 2": ["gps", _decode_GPS],
            "CONTEXT 3": ["address", _decode_Address],
            "CONTEXT 4": ["dbRecord", _decode_DBRecord],
        });
    }
    return _cached_decoder_for_Pointer(el);
}


let _cached_encoder_for_Pointer: $.ASN1Encoder<Pointer> | null = null;


/**
 * @summary Encodes a(n) Pointer into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Pointer, encoded as an ASN.1 Element.
 */
export function _encode_Pointer(
    value: Pointer,
    elGetter: $.ASN1Encoder<Pointer>
) {
    if (!_cached_encoder_for_Pointer) {
        _cached_encoder_for_Pointer = $._encode_choice<Pointer>(
            {
                uri: _encode_URI,
                rfid: _encode_RFID,
                gps: _encode_GPS,
                address: _encode_Address,
                dbRecord: _encode_DBRecord,
            },
            $.DER
        );
    }
    return _cached_encoder_for_Pointer(value, elGetter);
}


/* eslint-enable */
