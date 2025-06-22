/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    EXTERNAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SimpleCredentials,
    _decode_SimpleCredentials,
    _encode_SimpleCredentials,
} from "../DirectoryAbstractService/SimpleCredentials.ta.mjs";
import {
    SpkmCredentials,
    _decode_SpkmCredentials,
    _encode_SpkmCredentials,
} from "../DirectoryAbstractService/SpkmCredentials.ta.mjs";
import {
    StrongCredentials,
    _decode_StrongCredentials,
    _encode_StrongCredentials,
} from "../DirectoryAbstractService/StrongCredentials.ta.mjs";
/**
 * @summary DSACredentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSACredentials   ::=   CHOICE  {
 *   simple             [0]  SimpleCredentials,
 *   strong             [1]  StrongCredentials,
 *   externalProcedure  [2]  EXTERNAL,
 *   spkm               [3]  SpkmCredentials,
 *   ... }
 * ```
 */
export type DSACredentials =
    | { simple: SimpleCredentials } /* CHOICE_ALT_ROOT */
    | { strong: StrongCredentials } /* CHOICE_ALT_ROOT */
    | { externalProcedure: EXTERNAL } /* CHOICE_ALT_ROOT */
    | { spkm: SpkmCredentials } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_DSACredentials: $.ASN1Decoder<DSACredentials> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DSACredentials
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DSACredentials} The decoded data structure.
 */
export function _decode_DSACredentials(el: _Element) {
    if (!_cached_decoder_for_DSACredentials) {
        _cached_decoder_for_DSACredentials = $._decode_extensible_choice<DSACredentials>(
            {
                "CONTEXT 0": [
                    "simple",
                    $._decode_explicit<SimpleCredentials>(
                        () => _decode_SimpleCredentials
                    ),
                ],
                "CONTEXT 1": [
                    "strong",
                    $._decode_explicit<StrongCredentials>(
                        () => _decode_StrongCredentials
                    ),
                ],
                "CONTEXT 2": [
                    "externalProcedure",
                    $._decode_explicit<EXTERNAL>(() => $._decodeExternal),
                ],
                "CONTEXT 3": [
                    "spkm",
                    $._decode_explicit<SpkmCredentials>(
                        () => _decode_SpkmCredentials
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_DSACredentials(el);
}

let _cached_encoder_for_DSACredentials: $.ASN1Encoder<DSACredentials> | null = null;

/**
 * @summary Encodes a(n) DSACredentials into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSACredentials, encoded as an ASN.1 Element.
 */
export function _encode_DSACredentials(
    value: DSACredentials,
    elGetter: $.ASN1Encoder<DSACredentials>
) {
    if (!_cached_encoder_for_DSACredentials) {
        _cached_encoder_for_DSACredentials = $._encode_choice<DSACredentials>(
            {
                simple: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_SimpleCredentials,
                    $.DER
                ),
                strong: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_StrongCredentials,
                    $.DER
                ),
                externalProcedure: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => $._encodeExternal,
                    $.DER
                ),
                spkm: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_SpkmCredentials,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_DSACredentials(value, elGetter);
}


/* eslint-enable */
