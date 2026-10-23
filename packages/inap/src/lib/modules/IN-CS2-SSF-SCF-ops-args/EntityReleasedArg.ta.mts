/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EntityReleasedArg_cSFailure, _decode_EntityReleasedArg_cSFailure, _encode_EntityReleasedArg_cSFailure } from "../IN-CS2-SSF-SCF-ops-args/EntityReleasedArg-cSFailure.ta.mjs";
// export { EntityReleasedArg_cSFailure, _decode_EntityReleasedArg_cSFailure, _encode_EntityReleasedArg_cSFailure } from "../IN-CS2-SSF-SCF-ops-args/EntityReleasedArg-cSFailure.ta.mjs";
import { EntityReleasedArg_bCSMFailure, _decode_EntityReleasedArg_bCSMFailure, _encode_EntityReleasedArg_bCSMFailure } from "../IN-CS2-SSF-SCF-ops-args/EntityReleasedArg-bCSMFailure.ta.mjs";
// export { EntityReleasedArg_bCSMFailure, _decode_EntityReleasedArg_bCSMFailure, _encode_EntityReleasedArg_bCSMFailure } from "../IN-CS2-SSF-SCF-ops-args/EntityReleasedArg-bCSMFailure.ta.mjs";


/**
 * @summary EntityReleasedArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntityReleasedArg  ::=  CHOICE {
 *   cSFailure
 *     [0]  SEQUENCE {callSegmentID  [0]  CallSegmentID,
 *                    reason         [1]  Reason OPTIONAL,
 *                    cause          [2]  Cause OPTIONAL},
 *   bCSMFailure
 *     [1]  SEQUENCE {legID   [0]  LegID,
 *                    reason  [1]  Reason OPTIONAL,
 *                    cause   [2]  Cause OPTIONAL}
 * }
 * ```
 */
export
type EntityReleasedArg =
    { cSFailure: EntityReleasedArg_cSFailure } /* CHOICE_ALT_ROOT */
    | { bCSMFailure: EntityReleasedArg_bCSMFailure } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EntityReleasedArg: $.ASN1Decoder<EntityReleasedArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntityReleasedArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EntityReleasedArg (el: _Element): EntityReleasedArg {
    if (!_cached_decoder_for_EntityReleasedArg) { _cached_decoder_for_EntityReleasedArg = $._decode_inextensible_choice<EntityReleasedArg>({
    "CONTEXT 0": [ "cSFailure", $._decode_implicit<EntityReleasedArg_cSFailure>(() => _decode_EntityReleasedArg_cSFailure) ],
    "CONTEXT 1": [ "bCSMFailure", $._decode_implicit<EntityReleasedArg_bCSMFailure>(() => _decode_EntityReleasedArg_bCSMFailure) ]
}); }
    return _cached_decoder_for_EntityReleasedArg(el);
}

let _cached_encoder_for_EntityReleasedArg: $.ASN1Encoder<EntityReleasedArg> | null = null;

/**
 * @summary Encodes a(n) EntityReleasedArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntityReleasedArg, encoded as an ASN.1 Element.
 */
export
function _encode_EntityReleasedArg (value: EntityReleasedArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EntityReleasedArg) { _cached_encoder_for_EntityReleasedArg = $._encode_choice<EntityReleasedArg>({
    "cSFailure": $._encode_implicit(_TagClass.context, 0, () => _encode_EntityReleasedArg_cSFailure, $.BER),
    "bCSMFailure": $._encode_implicit(_TagClass.context, 1, () => _encode_EntityReleasedArg_bCSMFailure, $.BER),
}, $.BER); }
    return _cached_encoder_for_EntityReleasedArg(value, elGetter);
}


/* eslint-enable */
