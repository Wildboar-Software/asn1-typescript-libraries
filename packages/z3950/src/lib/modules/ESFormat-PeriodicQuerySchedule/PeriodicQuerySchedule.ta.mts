/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PeriodicQuerySchedule_esRequest, _decode_PeriodicQuerySchedule_esRequest, _encode_PeriodicQuerySchedule_esRequest } from "../ESFormat-PeriodicQuerySchedule/PeriodicQuerySchedule-esRequest.ta.mjs";
import { PeriodicQuerySchedule_taskPackage, _decode_PeriodicQuerySchedule_taskPackage, _encode_PeriodicQuerySchedule_taskPackage } from "../ESFormat-PeriodicQuerySchedule/PeriodicQuerySchedule-taskPackage.ta.mjs";


/**
 * @summary PeriodicQuerySchedule
 * @description
 * 
 * Asks the server to establish a schedule that runs a saved query
 * repeatedly, and optionally to activate that schedule on creation or on a
 * later modify. Each run may post results to a persistent result set,
 * export them, or both, and may alert a destination.
 * 
 * Client parameters that stay in the package (`toKeep` / `clientPart`) are
 * the active flag, result-set disposition, alert destination, and export
 * parameters, plus database names only when option bit 20 is not in
 * effect. The query, the client's suggested period and expiration, and the
 * result-set package name are not kept as submitted (`notToKeep`); the
 * server part holds the query it will run, the period and expiration it
 * settled on, and invocation statistics. On modify, supplied values
 * replace the corresponding package values; an omitted optional parameter
 * is left unchanged. A modify may carry as little as the active flag.
 * 
 * If option bit 20 was negotiated, this definition applies; otherwise the
 * Z39.50-1995 definition applies. Under bit 20, database names must not
 * occur in the client part to keep, must not occur in the client part not
 * to keep unless the bit is set, and must occur in the server part. They
 * must not occur in the server part when the bit is not set. Additional
 * search information must not occur in the client part not to keep or in
 * the server part unless bit 20 is set. Last-query time and last-result
 * number are optional if bit 20 is set and mandatory otherwise.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.3, EXT.2, §3.2.1.1.3, §3.2.9.1.1.
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
