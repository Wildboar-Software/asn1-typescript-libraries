/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/Name.ta.mjs";
import {
    KeyHash,
    _decode_KeyHash,
    _encode_KeyHash,
} from "../OCSP-2013-08/KeyHash.ta.mjs";


/**
 * @summary ResponderID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponderID  ::=  CHOICE {
 * byName   [1] Name,
 * byKey    [2] KeyHash }
 * ```
 */
export type ResponderID =
    | { byName: Name } /* CHOICE_ALT_ROOT */
    | { byKey: KeyHash } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ResponderID: $.ASN1Decoder<ResponderID> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ResponderID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResponderID} The decoded data structure.
 */
export function _decode_ResponderID(el: _Element): ResponderID {
    if (!_cached_decoder_for_ResponderID) {
        _cached_decoder_for_ResponderID = $._decode_inextensible_choice<ResponderID>(
            {
                "CONTEXT 1": [
                    "byName",
                    $._decode_explicit<Name>(() => _decode_Name),
                ],
                "CONTEXT 2": [
                    "byKey",
                    $._decode_explicit<KeyHash>(() => _decode_KeyHash),
                ],
            }
        );
    }
    return _cached_decoder_for_ResponderID(el);
}


let _cached_encoder_for_ResponderID: $.ASN1Encoder<ResponderID> | null = null;


/**
 * @summary Encodes a(n) ResponderID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponderID, encoded as an ASN.1 Element.
 */
export function _encode_ResponderID(
    value: ResponderID,
    elGetter: $.ASN1Encoder<ResponderID>
): _Element {
    if (!_cached_encoder_for_ResponderID) {
        _cached_encoder_for_ResponderID = $._encode_choice<ResponderID>(
            {
                byName: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_Name,
                    $.DER
                ),
                byKey: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_KeyHash,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_ResponderID(value, elGetter);
}


/* eslint-enable */
