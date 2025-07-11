/* eslint-disable */
import { ASN1Element as _Element, GeneralizedTime } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ReferencedValue,
    _get_decoder_for_ReferencedValue,
    _get_encoder_for_ReferencedValue,
} from "../PKCS-15/ReferencedValue.ta.mjs";

/**
 * @summary LastUpdate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LastUpdate  ::=  CHOICE {
 *     generalizedTime GeneralizedTime,
 *     referencedTime ReferencedValue {GeneralizedTime},
 *     ...
 * }
 * ```
 */
export type LastUpdate =
    | { generalizedTime: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | { referencedTime: ReferencedValue<GeneralizedTime> } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_LastUpdate: $.ASN1Decoder<LastUpdate> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) LastUpdate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LastUpdate} The decoded data structure.
 */
export function _decode_LastUpdate(el: _Element): LastUpdate {
    if (!_cached_decoder_for_LastUpdate) {
        _cached_decoder_for_LastUpdate = $._decode_extensible_choice<LastUpdate>(
            {
                "UNIVERSAL 24": ["generalizedTime", $._decodeGeneralizedTime],
                "UNIVERSAL 16": [
                    "referencedTime",
                    _get_decoder_for_ReferencedValue<GeneralizedTime>(
                        $._decodeGeneralizedTime
                    ),
                ],
                "UNIVERSAL 19": [
                    "referencedTime",
                    _get_decoder_for_ReferencedValue<GeneralizedTime>(
                        $._decodeGeneralizedTime
                    ),
                ],
                "CONTEXT 3": [
                    "referencedTime",
                    _get_decoder_for_ReferencedValue<GeneralizedTime>(
                        $._decodeGeneralizedTime
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_LastUpdate(el);
}


let _cached_encoder_for_LastUpdate: $.ASN1Encoder<LastUpdate> | null = null;


/**
 * @summary Encodes a(n) LastUpdate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LastUpdate, encoded as an ASN.1 Element.
 */
export function _encode_LastUpdate(
    value: LastUpdate,
    elGetter: $.ASN1Encoder<LastUpdate>
): _Element {
    if (!_cached_encoder_for_LastUpdate) {
        _cached_encoder_for_LastUpdate = $._encode_choice<LastUpdate>(
            {
                generalizedTime: $._encodeGeneralizedTime,
                referencedTime: _get_encoder_for_ReferencedValue<GeneralizedTime>(
                    $._encodeGeneralizedTime
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_LastUpdate(value, elGetter);
}


/* eslint-enable */
