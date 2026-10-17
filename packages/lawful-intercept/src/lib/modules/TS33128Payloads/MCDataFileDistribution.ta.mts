/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MCDataFileUpload, _decode_MCDataFileUpload, _encode_MCDataFileUpload } from "../TS33128Payloads/MCDataFileUpload.ta.mjs";
// export { MCDataFileUpload, _decode_MCDataFileUpload, _encode_MCDataFileUpload } from "../TS33128Payloads/MCDataFileUpload.ta.mjs";
import { MCDataFileDownload, _decode_MCDataFileDownload, _encode_MCDataFileDownload } from "../TS33128Payloads/MCDataFileDownload.ta.mjs";
// export { MCDataFileDownload, _decode_MCDataFileDownload, _encode_MCDataFileDownload } from "../TS33128Payloads/MCDataFileDownload.ta.mjs";


/**
 * @summary MCDataFileDistribution
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCDataFileDistribution  ::=  CHOICE
 * {
 *     mCDataFileUpload   [1] MCDataFileUpload,
 *     mCDataFileDownload [2] MCDataFileDownload
 * }
 * ```
 */
export
type MCDataFileDistribution =
    { mCDataFileUpload: MCDataFileUpload } /* CHOICE_ALT_ROOT */
    | { mCDataFileDownload: MCDataFileDownload } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_MCDataFileDistribution: $.ASN1Decoder<MCDataFileDistribution> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCDataFileDistribution
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCDataFileDistribution (el: _Element): MCDataFileDistribution {
    if (!_cached_decoder_for_MCDataFileDistribution) { _cached_decoder_for_MCDataFileDistribution = $._decode_extensible_choice<MCDataFileDistribution>({
    "CONTEXT 1": [ "mCDataFileUpload", $._decode_implicit<MCDataFileUpload>(() => _decode_MCDataFileUpload) ],
    "CONTEXT 2": [ "mCDataFileDownload", $._decode_implicit<MCDataFileDownload>(() => _decode_MCDataFileDownload) ]
}); }
    return _cached_decoder_for_MCDataFileDistribution(el);
}

let _cached_encoder_for_MCDataFileDistribution: $.ASN1Encoder<MCDataFileDistribution> | null = null;

/**
 * @summary Encodes a(n) MCDataFileDistribution into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCDataFileDistribution, encoded as an ASN.1 Element.
 */
export
function _encode_MCDataFileDistribution (value: MCDataFileDistribution, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCDataFileDistribution) { _cached_encoder_for_MCDataFileDistribution = $._encode_choice<MCDataFileDistribution>({
    "mCDataFileUpload": $._encode_implicit(_TagClass.context, 1, () => _encode_MCDataFileUpload, $.BER),
    "mCDataFileDownload": $._encode_implicit(_TagClass.context, 2, () => _encode_MCDataFileDownload, $.BER),
}, $.BER); }
    return _cached_encoder_for_MCDataFileDistribution(value, elGetter);
}


/* eslint-enable */
