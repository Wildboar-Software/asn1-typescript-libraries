/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Cause, _decode_Cause, _encode_Cause } from "../IN-SSF-SCF-datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-SSF-SCF-datatypes/Cause.ta.mjs";
import { ReleaseCallArg_callSegmentToRelease, _decode_ReleaseCallArg_callSegmentToRelease, _encode_ReleaseCallArg_callSegmentToRelease } from "../IN-SSF-SCF-ops-args/ReleaseCallArg-callSegmentToRelease.ta.mjs";
// export { ReleaseCallArg_callSegmentToRelease, _decode_ReleaseCallArg_callSegmentToRelease, _encode_ReleaseCallArg_callSegmentToRelease } from "../IN-SSF-SCF-ops-args/ReleaseCallArg-callSegmentToRelease.ta.mjs";
import { ReleaseCallArg_allCallSegments, _decode_ReleaseCallArg_allCallSegments, _encode_ReleaseCallArg_allCallSegments } from "../IN-SSF-SCF-ops-args/ReleaseCallArg-allCallSegments.ta.mjs";
// export { ReleaseCallArg_allCallSegments, _decode_ReleaseCallArg_allCallSegments, _encode_ReleaseCallArg_allCallSegments } from "../IN-SSF-SCF-ops-args/ReleaseCallArg-allCallSegments.ta.mjs";


/**
 * @summary ReleaseCallArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReleaseCallArg  ::=  CHOICE {
 *   initialCallSegment    Cause,
 *   callSegmentToRelease
 *     [1]  SEQUENCE {callSegment    [0]  INTEGER,
 *                    releaseCause   [1]  Cause OPTIONAL,
 *                    forcedRelease  [2]  BOOLEAN DEFAULT FALSE,
 *                    ...},
 *   allCallSegments
 *     [2]  SEQUENCE {releaseCause   [0]  Cause OPTIONAL,
 *                    timeToRelease  [1]  TimerValue OPTIONAL,
 *                    forcedRelease  [2]  BOOLEAN DEFAULT FALSE,
 *                    ...},
 *   ...
 * }
 * ```
 */
export
type ReleaseCallArg =
    { initialCallSegment: Cause } /* CHOICE_ALT_ROOT */
    | { callSegmentToRelease: ReleaseCallArg_callSegmentToRelease } /* CHOICE_ALT_ROOT */
    | { allCallSegments: ReleaseCallArg_allCallSegments } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ReleaseCallArg: $.ASN1Decoder<ReleaseCallArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReleaseCallArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReleaseCallArg (el: _Element): ReleaseCallArg {
    if (!_cached_decoder_for_ReleaseCallArg) { _cached_decoder_for_ReleaseCallArg = $._decode_extensible_choice<ReleaseCallArg>({
    "UNIVERSAL 4": [ "initialCallSegment", _decode_Cause ],
    "CONTEXT 1": [ "callSegmentToRelease", $._decode_implicit<ReleaseCallArg_callSegmentToRelease>(() => _decode_ReleaseCallArg_callSegmentToRelease) ],
    "CONTEXT 2": [ "allCallSegments", $._decode_implicit<ReleaseCallArg_allCallSegments>(() => _decode_ReleaseCallArg_allCallSegments) ]
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
    "initialCallSegment": _encode_Cause,
    "callSegmentToRelease": $._encode_implicit(_TagClass.context, 1, () => _encode_ReleaseCallArg_callSegmentToRelease, $.BER),
    "allCallSegments": $._encode_implicit(_TagClass.context, 2, () => _encode_ReleaseCallArg_allCallSegments, $.BER),
}, $.BER); }
    return _cached_encoder_for_ReleaseCallArg(value, elGetter);
}


/* eslint-enable */
