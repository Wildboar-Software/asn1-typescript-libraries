/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ContentChange,
    _decode_ContentChange,
    _encode_ContentChange,
} from "../DirectoryShadowAbstractService/ContentChange.ta.mjs";
import {
    SDSEContent,
    _decode_SDSEContent,
    _encode_SDSEContent,
} from "../DirectoryShadowAbstractService/SDSEContent.ta.mjs";
/**
 * @summary IncrementalStepRefresh_sDSEChanges
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IncrementalStepRefresh-sDSEChanges ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type IncrementalStepRefresh_sDSEChanges =
    | { add: SDSEContent } /* CHOICE_ALT_ROOT */
    | { remove: NULL } /* CHOICE_ALT_ROOT */
    | { modify: ContentChange } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_IncrementalStepRefresh_sDSEChanges: $.ASN1Decoder<IncrementalStepRefresh_sDSEChanges> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IncrementalStepRefresh_sDSEChanges
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IncrementalStepRefresh_sDSEChanges} The decoded data structure.
 */
export function _decode_IncrementalStepRefresh_sDSEChanges(el: _Element): IncrementalStepRefresh_sDSEChanges {
    if (!_cached_decoder_for_IncrementalStepRefresh_sDSEChanges) {
        _cached_decoder_for_IncrementalStepRefresh_sDSEChanges = $._decode_extensible_choice<IncrementalStepRefresh_sDSEChanges>(
            {
                "CONTEXT 0": [
                    "add",
                    $._decode_implicit<SDSEContent>(() => _decode_SDSEContent),
                ],
                "UNIVERSAL 5": ["remove", $._decodeNull],
                "CONTEXT 1": [
                    "modify",
                    $._decode_implicit<ContentChange>(
                        () => _decode_ContentChange
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_IncrementalStepRefresh_sDSEChanges(el);
}

let _cached_encoder_for_IncrementalStepRefresh_sDSEChanges: $.ASN1Encoder<IncrementalStepRefresh_sDSEChanges> | null = null;

/**
 * @summary Encodes a(n) IncrementalStepRefresh_sDSEChanges into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IncrementalStepRefresh_sDSEChanges, encoded as an ASN.1 Element.
 */
export function _encode_IncrementalStepRefresh_sDSEChanges(
    value: IncrementalStepRefresh_sDSEChanges,
    elGetter: $.ASN1Encoder<IncrementalStepRefresh_sDSEChanges>
): _Element {
    if (!_cached_encoder_for_IncrementalStepRefresh_sDSEChanges) {
        _cached_encoder_for_IncrementalStepRefresh_sDSEChanges = $._encode_choice<IncrementalStepRefresh_sDSEChanges>(
            {
                add: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_SDSEContent,
                    $.DER
                ),
                remove: $._encodeNull,
                modify: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_ContentChange,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_IncrementalStepRefresh_sDSEChanges(
        value,
        elGetter
    );
}


/* eslint-enable */
