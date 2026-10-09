/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PeriodicQuerySchedule_esRequest, _decode_PeriodicQuerySchedule_esRequest, _encode_PeriodicQuerySchedule_esRequest } from "../ESFormat-PeriodicQuerySchedule/PeriodicQuerySchedule-esRequest.ta.mjs";
// export { PeriodicQuerySchedule_esRequest, _decode_PeriodicQuerySchedule_esRequest, _encode_PeriodicQuerySchedule_esRequest } from "../ESFormat-PeriodicQuerySchedule/PeriodicQuerySchedule-esRequest.ta.mjs";
import { PeriodicQuerySchedule_taskPackage, _decode_PeriodicQuerySchedule_taskPackage, _encode_PeriodicQuerySchedule_taskPackage } from "../ESFormat-PeriodicQuerySchedule/PeriodicQuerySchedule-taskPackage.ta.mjs";
// export { PeriodicQuerySchedule_taskPackage, _decode_PeriodicQuerySchedule_taskPackage, _encode_PeriodicQuerySchedule_taskPackage } from "../ESFormat-PeriodicQuerySchedule/PeriodicQuerySchedule-taskPackage.ta.mjs";


/**
 * @summary PeriodicQuerySchedule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeriodicQuerySchedule  ::=  CHOICE {
 *     esRequest       [1] IMPLICIT SEQUENCE {
 *         toKeep          [1] ClientPartToKeep,
 *         notToKeep       [2] ClientPartNotToKeep
 *     },
 *     taskPackage     [2] IMPLICIT SEQUENCE {
 *         clientPart      [1] ClientPartToKeep,
 *         serverPart      [2] ServerPart
 *     }
 * }
 * ```
 */
export
type PeriodicQuerySchedule =
    { esRequest: PeriodicQuerySchedule_esRequest } /* CHOICE_ALT_ROOT */
    | { taskPackage: PeriodicQuerySchedule_taskPackage } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PeriodicQuerySchedule: $.ASN1Decoder<PeriodicQuerySchedule> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PeriodicQuerySchedule
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PeriodicQuerySchedule (el: _Element): PeriodicQuerySchedule {
    if (!_cached_decoder_for_PeriodicQuerySchedule) { _cached_decoder_for_PeriodicQuerySchedule = $._decode_inextensible_choice<PeriodicQuerySchedule>({
    "CONTEXT 1": [ "esRequest", $._decode_implicit<PeriodicQuerySchedule_esRequest>(() => _decode_PeriodicQuerySchedule_esRequest) ],
    "CONTEXT 2": [ "taskPackage", $._decode_implicit<PeriodicQuerySchedule_taskPackage>(() => _decode_PeriodicQuerySchedule_taskPackage) ]
}); }
    return _cached_decoder_for_PeriodicQuerySchedule(el);
}

let _cached_encoder_for_PeriodicQuerySchedule: $.ASN1Encoder<PeriodicQuerySchedule> | null = null;

/**
 * @summary Encodes a(n) PeriodicQuerySchedule into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PeriodicQuerySchedule, encoded as an ASN.1 Element.
 */
export
function _encode_PeriodicQuerySchedule (value: PeriodicQuerySchedule, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PeriodicQuerySchedule) { _cached_encoder_for_PeriodicQuerySchedule = $._encode_choice<PeriodicQuerySchedule>({
    "esRequest": $._encode_implicit(_TagClass.context, 1, () => _encode_PeriodicQuerySchedule_esRequest, $.BER),
    "taskPackage": $._encode_implicit(_TagClass.context, 2, () => _encode_PeriodicQuerySchedule_taskPackage, $.BER),
}, $.BER); }
    return _cached_encoder_for_PeriodicQuerySchedule(value, elGetter);
}


/* eslint-enable */
