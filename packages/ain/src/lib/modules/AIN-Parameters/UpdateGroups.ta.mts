/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UpdateGroup1, _decode_UpdateGroup1, _encode_UpdateGroup1 } from "../AIN-Parameters/UpdateGroup1.ta.mjs";
// export { UpdateGroup1, _decode_UpdateGroup1, _encode_UpdateGroup1 } from "../AIN-Parameters/UpdateGroup1.ta.mjs";
import { UpdateGroup2, _decode_UpdateGroup2, _encode_UpdateGroup2 } from "../AIN-Parameters/UpdateGroup2.ta.mjs";
// export { UpdateGroup2, _decode_UpdateGroup2, _encode_UpdateGroup2 } from "../AIN-Parameters/UpdateGroup2.ta.mjs";
import { UpdateGroup3, _decode_UpdateGroup3, _encode_UpdateGroup3 } from "../AIN-Parameters/UpdateGroup3.ta.mjs";
// export { UpdateGroup3, _decode_UpdateGroup3, _encode_UpdateGroup3 } from "../AIN-Parameters/UpdateGroup3.ta.mjs";
import { UpdateGroup4, _decode_UpdateGroup4, _encode_UpdateGroup4 } from "../AIN-Parameters/UpdateGroup4.ta.mjs";
// export { UpdateGroup4, _decode_UpdateGroup4, _encode_UpdateGroup4 } from "../AIN-Parameters/UpdateGroup4.ta.mjs";
import { UpdateGroup5, _decode_UpdateGroup5, _encode_UpdateGroup5 } from "../AIN-Parameters/UpdateGroup5.ta.mjs";
// export { UpdateGroup5, _decode_UpdateGroup5, _encode_UpdateGroup5 } from "../AIN-Parameters/UpdateGroup5.ta.mjs";
import { UpdateGroup6, _decode_UpdateGroup6, _encode_UpdateGroup6 } from "../AIN-Parameters/UpdateGroup6.ta.mjs";
// export { UpdateGroup6, _decode_UpdateGroup6, _encode_UpdateGroup6 } from "../AIN-Parameters/UpdateGroup6.ta.mjs";
import { UpdateGroup7, _decode_UpdateGroup7, _encode_UpdateGroup7 } from "../AIN-Parameters/UpdateGroup7.ta.mjs";
// export { UpdateGroup7, _decode_UpdateGroup7, _encode_UpdateGroup7 } from "../AIN-Parameters/UpdateGroup7.ta.mjs";
import { UpdateGroup8, _decode_UpdateGroup8, _encode_UpdateGroup8 } from "../AIN-Parameters/UpdateGroup8.ta.mjs";
// export { UpdateGroup8, _decode_UpdateGroup8, _encode_UpdateGroup8 } from "../AIN-Parameters/UpdateGroup8.ta.mjs";
import { UpdateGroup9, _decode_UpdateGroup9, _encode_UpdateGroup9 } from "../AIN-Parameters/UpdateGroup9.ta.mjs";
// export { UpdateGroup9, _decode_UpdateGroup9, _encode_UpdateGroup9 } from "../AIN-Parameters/UpdateGroup9.ta.mjs";


/**
 * @summary UpdateGroups
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateGroups ::=  CHOICE{
 *         updateGroup1 [2] IMPLICIT UpdateGroup1,
 *         updateGroup2 [3] IMPLICIT UpdateGroup2,
 *         updateGroup3 [4] IMPLICIT UpdateGroup3,
 *         updateGroup4 [5] IMPLICIT UpdateGroup4,
 *         updateGroup5 [6] IMPLICIT UpdateGroup5,
 *         updateGroup6 [7] IMPLICIT UpdateGroup6,
 *         updateGroup7 [8] IMPLICIT UpdateGroup7,
 *         updateGroup8 [9] IMPLICIT UpdateGroup8,
 *         updateGroup9 [10] IMPLICIT UpdateGroup9
 *     }
 * ```
 */
export
type UpdateGroups =
    { updateGroup1: UpdateGroup1 } /* CHOICE_ALT_ROOT */
    | { updateGroup2: UpdateGroup2 } /* CHOICE_ALT_ROOT */
    | { updateGroup3: UpdateGroup3 } /* CHOICE_ALT_ROOT */
    | { updateGroup4: UpdateGroup4 } /* CHOICE_ALT_ROOT */
    | { updateGroup5: UpdateGroup5 } /* CHOICE_ALT_ROOT */
    | { updateGroup6: UpdateGroup6 } /* CHOICE_ALT_ROOT */
    | { updateGroup7: UpdateGroup7 } /* CHOICE_ALT_ROOT */
    | { updateGroup8: UpdateGroup8 } /* CHOICE_ALT_ROOT */
    | { updateGroup9: UpdateGroup9 } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_UpdateGroups: $.ASN1Decoder<UpdateGroups> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateGroups
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UpdateGroups (el: _Element): UpdateGroups {
    if (!_cached_decoder_for_UpdateGroups) { _cached_decoder_for_UpdateGroups = $._decode_inextensible_choice<UpdateGroups>({
    "CONTEXT 2": [ "updateGroup1", $._decode_implicit<UpdateGroup1>(() => _decode_UpdateGroup1) ],
    "CONTEXT 3": [ "updateGroup2", $._decode_implicit<UpdateGroup2>(() => _decode_UpdateGroup2) ],
    "CONTEXT 4": [ "updateGroup3", $._decode_implicit<UpdateGroup3>(() => _decode_UpdateGroup3) ],
    "CONTEXT 5": [ "updateGroup4", $._decode_implicit<UpdateGroup4>(() => _decode_UpdateGroup4) ],
    "CONTEXT 6": [ "updateGroup5", $._decode_implicit<UpdateGroup5>(() => _decode_UpdateGroup5) ],
    "CONTEXT 7": [ "updateGroup6", $._decode_implicit<UpdateGroup6>(() => _decode_UpdateGroup6) ],
    "CONTEXT 8": [ "updateGroup7", $._decode_implicit<UpdateGroup7>(() => _decode_UpdateGroup7) ],
    "CONTEXT 9": [ "updateGroup8", $._decode_implicit<UpdateGroup8>(() => _decode_UpdateGroup8) ],
    "CONTEXT 10": [ "updateGroup9", $._decode_implicit<UpdateGroup9>(() => _decode_UpdateGroup9) ]
}); }
    return _cached_decoder_for_UpdateGroups(el);
}

let _cached_encoder_for_UpdateGroups: $.ASN1Encoder<UpdateGroups> | null = null;

/**
 * @summary Encodes a(n) UpdateGroups into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateGroups, encoded as an ASN.1 Element.
 */
export
function _encode_UpdateGroups (value: UpdateGroups, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UpdateGroups) { _cached_encoder_for_UpdateGroups = $._encode_choice<UpdateGroups>({
    "updateGroup1": $._encode_implicit(_TagClass.context, 2, () => _encode_UpdateGroup1, $.BER),
    "updateGroup2": $._encode_implicit(_TagClass.context, 3, () => _encode_UpdateGroup2, $.BER),
    "updateGroup3": $._encode_implicit(_TagClass.context, 4, () => _encode_UpdateGroup3, $.BER),
    "updateGroup4": $._encode_implicit(_TagClass.context, 5, () => _encode_UpdateGroup4, $.BER),
    "updateGroup5": $._encode_implicit(_TagClass.context, 6, () => _encode_UpdateGroup5, $.BER),
    "updateGroup6": $._encode_implicit(_TagClass.context, 7, () => _encode_UpdateGroup6, $.BER),
    "updateGroup7": $._encode_implicit(_TagClass.context, 8, () => _encode_UpdateGroup7, $.BER),
    "updateGroup8": $._encode_implicit(_TagClass.context, 9, () => _encode_UpdateGroup8, $.BER),
    "updateGroup9": $._encode_implicit(_TagClass.context, 10, () => _encode_UpdateGroup9, $.BER),
}, $.BER); }
    return _cached_encoder_for_UpdateGroups(value, elGetter);
}


/* eslint-enable */
