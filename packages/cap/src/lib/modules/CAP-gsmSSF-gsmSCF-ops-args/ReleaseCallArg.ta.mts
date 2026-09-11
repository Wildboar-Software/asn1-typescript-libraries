/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AllCallSegments, _decode_AllCallSegments, _encode_AllCallSegments } from "../CAP-gsmSSF-gsmSCF-ops-args/AllCallSegments.ta.mjs";
// export { AllCallSegments, _decode_AllCallSegments, _encode_AllCallSegments } from "../CAP-gsmSSF-gsmSCF-ops-args/AllCallSegments.ta.mjs";
import { AllCallSegmentsWithExtension, _decode_AllCallSegmentsWithExtension, _encode_AllCallSegmentsWithExtension } from "../CAP-gsmSSF-gsmSCF-ops-args/AllCallSegmentsWithExtension.ta.mjs";
// export { AllCallSegmentsWithExtension, _decode_AllCallSegmentsWithExtension, _encode_AllCallSegmentsWithExtension } from "../CAP-gsmSSF-gsmSCF-ops-args/AllCallSegmentsWithExtension.ta.mjs";


/**
 * @summary ReleaseCallArg
 * @description
 * 
 * Argument of ReleaseCall. CHOICE of cause for tearing down all parties. (3GPP
 * TS 29.078 V19.0.0 clause 11.26.1.1).
 *
 * - `allCallSegments`: Cause given to gsmSSF for releasing the call (tones to
 *   parties or cause in the release message). ASN.1 default decimal 31 (normal
 *   unspecified).
 *
 * - `allCallSegmentsWithExtension`: Same cause, plus optional extensions.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReleaseCallArg {PARAMETERS-BOUND : bound}  ::=  CHOICE {
 *     allCallSegments            AllCallSegments,
 *     allCallSegmentsWithExtension    [2] AllCallSegmentsWithExtension
 *     }
 * ```
 */
export
type ReleaseCallArg =
    { allCallSegments: AllCallSegments } /* CHOICE_ALT_ROOT */
    | { allCallSegmentsWithExtension: AllCallSegmentsWithExtension } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ReleaseCallArg: $.ASN1Decoder<ReleaseCallArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReleaseCallArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReleaseCallArg (el: _Element): ReleaseCallArg {
    if (!_cached_decoder_for_ReleaseCallArg) { _cached_decoder_for_ReleaseCallArg = $._decode_inextensible_choice<ReleaseCallArg>({
    "*": [ "allCallSegments", _decode_AllCallSegments ],
    "CONTEXT 2": [ "allCallSegmentsWithExtension", $._decode_implicit<AllCallSegmentsWithExtension>(() => _decode_AllCallSegmentsWithExtension) ]
}); }
    return _cached_decoder_for_ReleaseCallArg(el);
}

let _cached_encoder_for_ReleaseCallArg: $.ASN1Encoder<ReleaseCallArg> | null = null;

/**
 * @summary Encodes a(n) ReleaseCallArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReleaseCallArg, encoded as an ASN.1 Element.
 */
export
function _encode_ReleaseCallArg (value: ReleaseCallArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReleaseCallArg) { _cached_encoder_for_ReleaseCallArg = $._encode_choice<ReleaseCallArg>({
    "allCallSegments": _encode_AllCallSegments,
    "allCallSegmentsWithExtension": $._encode_implicit(_TagClass.context, 2, () => _encode_AllCallSegmentsWithExtension, $.BER),
}, $.BER); }
    return _cached_encoder_for_ReleaseCallArg(value, elGetter);
}


/* eslint-enable */
