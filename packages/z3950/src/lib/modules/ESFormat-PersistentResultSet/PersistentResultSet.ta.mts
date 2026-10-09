/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PersistentResultSet_esRequest, _decode_PersistentResultSet_esRequest, _encode_PersistentResultSet_esRequest } from "../ESFormat-PersistentResultSet/PersistentResultSet-esRequest.ta.mjs";
// export { PersistentResultSet_esRequest, _decode_PersistentResultSet_esRequest, _encode_PersistentResultSet_esRequest } from "../ESFormat-PersistentResultSet/PersistentResultSet-esRequest.ta.mjs";
import { PersistentResultSet_taskPackage, _decode_PersistentResultSet_taskPackage, _encode_PersistentResultSet_taskPackage } from "../ESFormat-PersistentResultSet/PersistentResultSet-taskPackage.ta.mjs";
// export { PersistentResultSet_taskPackage, _decode_PersistentResultSet_taskPackage, _encode_PersistentResultSet_taskPackage } from "../ESFormat-PersistentResultSet/PersistentResultSet-taskPackage.ta.mjs";


/**
 * @summary PersistentResultSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PersistentResultSet  ::=  CHOICE{
 *     esRequest   [1] IMPLICIT SEQUENCE{
 *         toKeep             [1] IMPLICIT NULL,
 *         notToKeep          [2] ClientPartNotToKeep OPTIONAL},
 *     taskPackage [2] IMPLICIT SEQUENCE{
 *         clientPart         [1] IMPLICIT NULL,
 *         serverPart         [2] ServerPart OPTIONAL
 *     }
 * }
 * ```
 */
export
type PersistentResultSet =
    { esRequest: PersistentResultSet_esRequest } /* CHOICE_ALT_ROOT */
    | { taskPackage: PersistentResultSet_taskPackage } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PersistentResultSet: $.ASN1Decoder<PersistentResultSet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PersistentResultSet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PersistentResultSet (el: _Element): PersistentResultSet {
    if (!_cached_decoder_for_PersistentResultSet) { _cached_decoder_for_PersistentResultSet = $._decode_inextensible_choice<PersistentResultSet>({
    "CONTEXT 1": [ "esRequest", $._decode_implicit<PersistentResultSet_esRequest>(() => _decode_PersistentResultSet_esRequest) ],
    "CONTEXT 2": [ "taskPackage", $._decode_implicit<PersistentResultSet_taskPackage>(() => _decode_PersistentResultSet_taskPackage) ]
}); }
    return _cached_decoder_for_PersistentResultSet(el);
}

let _cached_encoder_for_PersistentResultSet: $.ASN1Encoder<PersistentResultSet> | null = null;

/**
 * @summary Encodes a(n) PersistentResultSet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PersistentResultSet, encoded as an ASN.1 Element.
 */
export
function _encode_PersistentResultSet (value: PersistentResultSet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PersistentResultSet) { _cached_encoder_for_PersistentResultSet = $._encode_choice<PersistentResultSet>({
    "esRequest": $._encode_implicit(_TagClass.context, 1, () => _encode_PersistentResultSet_esRequest, $.BER),
    "taskPackage": $._encode_implicit(_TagClass.context, 2, () => _encode_PersistentResultSet_taskPackage, $.BER),
}, $.BER); }
    return _cached_encoder_for_PersistentResultSet(value, elGetter);
}


/* eslint-enable */
