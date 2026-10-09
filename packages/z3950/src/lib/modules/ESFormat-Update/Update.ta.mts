/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Update_esRequest, _decode_Update_esRequest, _encode_Update_esRequest } from "../ESFormat-Update/Update-esRequest.ta.mjs";
import { Update_taskPackage, _decode_Update_taskPackage, _encode_Update_taskPackage } from "../ESFormat-Update/Update-taskPackage.ta.mjs";


/**
 * @summary Update
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Update  ::=  CHOICE {
 *     esRequest   [1] IMPLICIT SEQUENCE {
 *         toKeep      [1] ClientPartToKeep,
 *         notToKeep   [2] ClientPartNotToKeep},
 *     taskPackage [2] IMPLICIT SEQUENCE {
 *         clientPart  [1] ClientPartToKeep,
 *         serverPart  [2] ServerPart
 *     }
 * }
 * ```
 */
export
type Update =
    { esRequest: Update_esRequest } /* CHOICE_ALT_ROOT */
    | { taskPackage: Update_taskPackage } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Update: $.ASN1Decoder<Update> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Update
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Update (el: _Element): Update {
    if (!_cached_decoder_for_Update) { _cached_decoder_for_Update = $._decode_inextensible_choice<Update>({
    "CONTEXT 1": [ "esRequest", $._decode_implicit<Update_esRequest>(() => _decode_Update_esRequest) ],
    "CONTEXT 2": [ "taskPackage", $._decode_implicit<Update_taskPackage>(() => _decode_Update_taskPackage) ]
}); }
    return _cached_decoder_for_Update(el);
}

let _cached_encoder_for_Update: $.ASN1Encoder<Update> | null = null;

/**
 * @summary Encodes a(n) Update into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Update, encoded as an ASN.1 Element.
 */
export
function _encode_Update (value: Update, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Update) { _cached_encoder_for_Update = $._encode_choice<Update>({
    "esRequest": $._encode_implicit(_TagClass.context, 1, () => _encode_Update_esRequest, $.BER),
    "taskPackage": $._encode_implicit(_TagClass.context, 2, () => _encode_Update_taskPackage, $.BER),
}, $.BER); }
    return _cached_encoder_for_Update(value, elGetter);
}


/* eslint-enable */
