/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ManageTriggerDataResultArg_oneTriggerResult, _decode_ManageTriggerDataResultArg_oneTriggerResult, _encode_ManageTriggerDataResultArg_oneTriggerResult } from "../IN-CS3-SSF-SCF-ops-args/ManageTriggerDataResultArg-oneTriggerResult.ta.mjs";
// export { ManageTriggerDataResultArg_oneTriggerResult, _decode_ManageTriggerDataResultArg_oneTriggerResult, _encode_ManageTriggerDataResultArg_oneTriggerResult } from "../IN-CS3-SSF-SCF-ops-args/ManageTriggerDataResultArg-oneTriggerResult.ta.mjs";
import { ManageTriggerDataResultArg_severalTriggerResult, _decode_ManageTriggerDataResultArg_severalTriggerResult, _encode_ManageTriggerDataResultArg_severalTriggerResult } from "../IN-CS3-SSF-SCF-ops-args/ManageTriggerDataResultArg-severalTriggerResult.ta.mjs";
// export { ManageTriggerDataResultArg_severalTriggerResult, _decode_ManageTriggerDataResultArg_severalTriggerResult, _encode_ManageTriggerDataResultArg_severalTriggerResult } from "../IN-CS3-SSF-SCF-ops-args/ManageTriggerDataResultArg-severalTriggerResult.ta.mjs";


/**
 * @summary ManageTriggerDataResultArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ManageTriggerDataResultArg  ::=  CHOICE {
 *   oneTriggerResult
 *     SEQUENCE {actionPerformed  [0]  ActionPerformed,
 *               extensions       [1]  Extensions OPTIONAL,
 *               ...},
 *   severalTriggerResult
 *     [1]  SEQUENCE {results     [0]  TriggerResults,
 *                    extensions  [1]  Extensions OPTIONAL,
 *                    ...}
 * }
 * ```
 */
export
type ManageTriggerDataResultArg =
    { oneTriggerResult: ManageTriggerDataResultArg_oneTriggerResult } /* CHOICE_ALT_ROOT */
    | { severalTriggerResult: ManageTriggerDataResultArg_severalTriggerResult } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ManageTriggerDataResultArg: $.ASN1Decoder<ManageTriggerDataResultArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ManageTriggerDataResultArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ManageTriggerDataResultArg (el: _Element): ManageTriggerDataResultArg {
    if (!_cached_decoder_for_ManageTriggerDataResultArg) { _cached_decoder_for_ManageTriggerDataResultArg = $._decode_inextensible_choice<ManageTriggerDataResultArg>({
    "UNIVERSAL 16": [ "oneTriggerResult", _decode_ManageTriggerDataResultArg_oneTriggerResult ],
    "CONTEXT 1": [ "severalTriggerResult", $._decode_implicit<ManageTriggerDataResultArg_severalTriggerResult>(() => _decode_ManageTriggerDataResultArg_severalTriggerResult) ]
}); }
    return _cached_decoder_for_ManageTriggerDataResultArg(el);
}

let _cached_encoder_for_ManageTriggerDataResultArg: $.ASN1Encoder<ManageTriggerDataResultArg> | null = null;

/**
 * @summary Encodes a(n) ManageTriggerDataResultArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManageTriggerDataResultArg, encoded as an ASN.1 Element.
 */
export
function _encode_ManageTriggerDataResultArg (value: ManageTriggerDataResultArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ManageTriggerDataResultArg) { _cached_encoder_for_ManageTriggerDataResultArg = $._encode_choice<ManageTriggerDataResultArg>({
    "oneTriggerResult": _encode_ManageTriggerDataResultArg_oneTriggerResult,
    "severalTriggerResult": $._encode_implicit(_TagClass.context, 1, () => _encode_ManageTriggerDataResultArg_severalTriggerResult, $.BER),
}, $.BER); }
    return _cached_encoder_for_ManageTriggerDataResultArg(value, elGetter);
}


/* eslint-enable */
