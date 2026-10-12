/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EuiccPackageResultSigned, _decode_EuiccPackageResultSigned, _encode_EuiccPackageResultSigned } from "../SGP32Definitions/EuiccPackageResultSigned.ta.mjs";
import { EuiccPackageErrorSigned, _decode_EuiccPackageErrorSigned, _encode_EuiccPackageErrorSigned } from "../SGP32Definitions/EuiccPackageErrorSigned.ta.mjs";
import { EuiccPackageErrorUnsigned, _decode_EuiccPackageErrorUnsigned, _encode_EuiccPackageErrorUnsigned } from "../SGP32Definitions/EuiccPackageErrorUnsigned.ta.mjs";


/**
 * @summary EuiccPackageResult
 * @description
 * 
 * Response of ES10b.LoadEuiccPackage, tag 'BF51' (SGP.32 v1.2, sections
 * 2.11.2.1 and 5.9.1).
 *
 * euiccPackageResultSigned is produced after the signature, EID, and counter
 * have been accepted, including when a later PSMO or eCO stops the sequence.
 * The eUICC keeps one or more of these signed execution results until the IPA
 * deletes them after delivery to the eIM. When a new result exceeds the free
 * space, the eUICC deletes stored signed results and pending Notifications
 * starting at the lowest sequence number. When the free space is still too
 * small, it returns the new result to the IPA and leaves it unstored.
 *
 * euiccPackageErrorSigned is a signed verification failure (invalid EID,
 * replay, counter range, and the other EuiccPackageErrorCode values).
 * euiccPackageErrorUnsigned is an unknown eimId or an invalid eIM signature.
 * The eUICC discards both of those error results.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccPackageResult  ::=  [81] CHOICE { -- Tag 'BF51' #SupportedForPsmoV1.0.0#
 *     euiccPackageResultSigned EuiccPackageResultSigned,
 *     euiccPackageErrorSigned EuiccPackageErrorSigned,
 *     euiccPackageErrorUnsigned EuiccPackageErrorUnsigned
 * }
 * ```
 */
export
type EuiccPackageResult =
    { euiccPackageResultSigned: EuiccPackageResultSigned } /* CHOICE_ALT_ROOT */
    | { euiccPackageErrorSigned: EuiccPackageErrorSigned } /* CHOICE_ALT_ROOT */
    | { euiccPackageErrorUnsigned: EuiccPackageErrorUnsigned } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EuiccPackageResult: $.ASN1Decoder<EuiccPackageResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccPackageResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccPackageResult (el: _Element): EuiccPackageResult {
    if (!_cached_decoder_for_EuiccPackageResult) { _cached_decoder_for_EuiccPackageResult = $._decode_explicit<EuiccPackageResult>(() => $._decode_inextensible_choice<EuiccPackageResult>({
    "CONTEXT 0": [ "euiccPackageResultSigned", _decode_EuiccPackageResultSigned ],
    "CONTEXT 1": [ "euiccPackageErrorSigned", _decode_EuiccPackageErrorSigned ],
    "CONTEXT 2": [ "euiccPackageErrorUnsigned", _decode_EuiccPackageErrorUnsigned ]
})); }
    return _cached_decoder_for_EuiccPackageResult(el);
}

let _cached_encoder_for_EuiccPackageResult: $.ASN1Encoder<EuiccPackageResult> | null = null;

/**
 * @summary Encodes a(n) EuiccPackageResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccPackageResult, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccPackageResult (value: EuiccPackageResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccPackageResult) { _cached_encoder_for_EuiccPackageResult = $._encode_explicit(_TagClass.context, 81, () => $._encode_choice<EuiccPackageResult>({
    "euiccPackageResultSigned": _encode_EuiccPackageResultSigned,
    "euiccPackageErrorSigned": _encode_EuiccPackageErrorSigned,
    "euiccPackageErrorUnsigned": _encode_EuiccPackageErrorUnsigned,
}, $.BER), $.BER); }
    return _cached_encoder_for_EuiccPackageResult(value, elGetter);
}


/* eslint-enable */
