/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AllOrFirstTier,
    _decode_AllOrFirstTier,
    _encode_AllOrFirstTier,
} from "../ExtendedSecurityServices-2006/AllOrFirstTier.ta.mjs";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "@wildboar/x500/src/lib/modules/CertificateExtensions/GeneralNames.ta.mjs";

/**
 * @summary ReceiptsFrom
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReceiptsFrom  ::=  CHOICE {
 *     allOrFirstTier [0] AllOrFirstTier, -- formerly "allOrNone [0]AllOrNone"
 *     receiptList [1] SEQUENCE OF GeneralNames
 * }
 * ```
 */
export type ReceiptsFrom =
    | { allOrFirstTier: AllOrFirstTier } /* CHOICE_ALT_ROOT */
    | { receiptList: GeneralNames[] } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ReceiptsFrom: $.ASN1Decoder<ReceiptsFrom> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ReceiptsFrom
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReceiptsFrom} The decoded data structure.
 */
export function _decode_ReceiptsFrom(el: _Element) {
    if (!_cached_decoder_for_ReceiptsFrom) {
        _cached_decoder_for_ReceiptsFrom = $._decode_inextensible_choice<ReceiptsFrom>(
            {
                "CONTEXT 0": [
                    "allOrFirstTier",
                    $._decode_implicit<AllOrFirstTier>(
                        () => _decode_AllOrFirstTier
                    ),
                ],
                "CONTEXT 1": [
                    "receiptList",
                    $._decode_implicit<GeneralNames[]>(() =>
                        $._decodeSequenceOf<GeneralNames>(
                            () => _decode_GeneralNames
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ReceiptsFrom(el);
}


let _cached_encoder_for_ReceiptsFrom: $.ASN1Encoder<ReceiptsFrom> | null = null;


/**
 * @summary Encodes a(n) ReceiptsFrom into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReceiptsFrom, encoded as an ASN.1 Element.
 */
export function _encode_ReceiptsFrom(
    value: ReceiptsFrom,
    elGetter: $.ASN1Encoder<ReceiptsFrom>
) {
    if (!_cached_encoder_for_ReceiptsFrom) {
        _cached_encoder_for_ReceiptsFrom = $._encode_choice<ReceiptsFrom>(
            {
                allOrFirstTier: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_AllOrFirstTier,
                    $.DER
                ),
                receiptList: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSequenceOf<GeneralNames>(
                            () => _encode_GeneralNames,
                            $.DER
                        ),
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_ReceiptsFrom(value, elGetter);
}


/* eslint-enable */
