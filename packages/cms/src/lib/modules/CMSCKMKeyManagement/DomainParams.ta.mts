/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DomainParameters,
    _decode_DomainParameters,
    _encode_DomainParameters,
} from "@wildboar/ansi-x9-42";
import {
    ECDomainParameters,
    _decode_ECDomainParameters,
    _encode_ECDomainParameters,
} from "@wildboar/ansi-x9-62";

/**
 * @summary DomainParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DomainParams  ::=  CHOICE {
 *      dhParams    [0] DomainParameters,
 *      ecParams    [1] ECDomainParameters
 * }
 * ```
 */
export type DomainParams =
    | { dhParams: DomainParameters } /* CHOICE_ALT_ROOT */
    | { ecParams: ECDomainParameters } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_DomainParams: $.ASN1Decoder<DomainParams> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DomainParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DomainParams} The decoded data structure.
 */
export function _decode_DomainParams(el: _Element): DomainParams {
    if (!_cached_decoder_for_DomainParams) {
        _cached_decoder_for_DomainParams = $._decode_inextensible_choice<DomainParams>(
            {
                "CONTEXT 0": [
                    "dhParams",
                    $._decode_explicit<DomainParameters>(
                        () => _decode_DomainParameters
                    ),
                ],
                "CONTEXT 1": [
                    "ecParams",
                    $._decode_explicit<ECDomainParameters>(
                        () => _decode_ECDomainParameters
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_DomainParams(el);
}

let _cached_encoder_for_DomainParams: $.ASN1Encoder<DomainParams> | null = null;

/**
 * @summary Encodes a(n) DomainParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DomainParams, encoded as an ASN.1 Element.
 */
export function _encode_DomainParams(
    value: DomainParams,
    elGetter: $.ASN1Encoder<DomainParams>
): _Element {
    if (!_cached_encoder_for_DomainParams) {
        _cached_encoder_for_DomainParams = $._encode_choice<DomainParams>(
            {
                dhParams: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_DomainParameters,
                    $.DER
                ),
                ecParams: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_ECDomainParameters,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_DomainParams(value, elGetter);
}

/* eslint-enable */