/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PersistentQuery_esRequest, _decode_PersistentQuery_esRequest, _encode_PersistentQuery_esRequest } from "../ESFormat-PersistentQuery/PersistentQuery-esRequest.ta.mjs";
// export { PersistentQuery_esRequest, _decode_PersistentQuery_esRequest, _encode_PersistentQuery_esRequest } from "../ESFormat-PersistentQuery/PersistentQuery-esRequest.ta.mjs";
import { PersistentQuery_taskPackage, _decode_PersistentQuery_taskPackage, _encode_PersistentQuery_taskPackage } from "../ESFormat-PersistentQuery/PersistentQuery-taskPackage.ta.mjs";
// export { PersistentQuery_taskPackage, _decode_PersistentQuery_taskPackage, _encode_PersistentQuery_taskPackage } from "../ESFormat-PersistentQuery/PersistentQuery-taskPackage.ta.mjs";


/**
 * @summary PersistentQuery
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PersistentQuery  ::=  CHOICE{
 *     esRequest       [1] IMPLICIT SEQUENCE{
 *         toKeep          [1] ClientPartToKeep OPTIONAL,
 *         notToKeep       [2] ClientPartNotToKeep},
 *     taskPackage     [2] IMPLICIT SEQUENCE{
 *         clientPart      [1] ClientPartToKeep OPTIONAL,
 *         serverPart      [2] ServerPart
 *     }
 * }
 * ```
 */
export
type PersistentQuery =
    { esRequest: PersistentQuery_esRequest } /* CHOICE_ALT_ROOT */
    | { taskPackage: PersistentQuery_taskPackage } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PersistentQuery: $.ASN1Decoder<PersistentQuery> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PersistentQuery
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PersistentQuery (el: _Element): PersistentQuery {
    if (!_cached_decoder_for_PersistentQuery) { _cached_decoder_for_PersistentQuery = $._decode_inextensible_choice<PersistentQuery>({
    "CONTEXT 1": [ "esRequest", $._decode_implicit<PersistentQuery_esRequest>(() => _decode_PersistentQuery_esRequest) ],
    "CONTEXT 2": [ "taskPackage", $._decode_implicit<PersistentQuery_taskPackage>(() => _decode_PersistentQuery_taskPackage) ]
}); }
    return _cached_decoder_for_PersistentQuery(el);
}

let _cached_encoder_for_PersistentQuery: $.ASN1Encoder<PersistentQuery> | null = null;

/**
 * @summary Encodes a(n) PersistentQuery into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PersistentQuery, encoded as an ASN.1 Element.
 */
export
function _encode_PersistentQuery (value: PersistentQuery, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PersistentQuery) { _cached_encoder_for_PersistentQuery = $._encode_choice<PersistentQuery>({
    "esRequest": $._encode_implicit(_TagClass.context, 1, () => _encode_PersistentQuery_esRequest, $.BER),
    "taskPackage": $._encode_implicit(_TagClass.context, 2, () => _encode_PersistentQuery_taskPackage, $.BER),
}, $.BER); }
    return _cached_encoder_for_PersistentQuery(value, elGetter);
}


/* eslint-enable */
