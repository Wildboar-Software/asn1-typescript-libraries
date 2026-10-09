/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExportInvocation_esRequest, _decode_ExportInvocation_esRequest, _encode_ExportInvocation_esRequest } from "../ESFormat-ExportInvocation/ExportInvocation-esRequest.ta.mjs";
// export { ExportInvocation_esRequest, _decode_ExportInvocation_esRequest, _encode_ExportInvocation_esRequest } from "../ESFormat-ExportInvocation/ExportInvocation-esRequest.ta.mjs";
import { ExportInvocation_taskPackage, _decode_ExportInvocation_taskPackage, _encode_ExportInvocation_taskPackage } from "../ESFormat-ExportInvocation/ExportInvocation-taskPackage.ta.mjs";
// export { ExportInvocation_taskPackage, _decode_ExportInvocation_taskPackage, _encode_ExportInvocation_taskPackage } from "../ESFormat-ExportInvocation/ExportInvocation-taskPackage.ta.mjs";


/**
 * @summary ExportInvocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExportInvocation  ::=  CHOICE {
 *     esRequest       [1] IMPLICIT SEQUENCE {
 *         toKeep          [1] ClientPartToKeep,
 *         notToKeep       [2] ClientPartNotToKeep},
 *     taskPackage     [2] IMPLICIT SEQUENCE {
 *         clientPart      [1] ClientPartToKeep,
 *         serverPart      [2] ServerPart OPTIONAL
 *     }
 * }
 * ```
 */
export
type ExportInvocation =
    { esRequest: ExportInvocation_esRequest } /* CHOICE_ALT_ROOT */
    | { taskPackage: ExportInvocation_taskPackage } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ExportInvocation: $.ASN1Decoder<ExportInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExportInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExportInvocation (el: _Element): ExportInvocation {
    if (!_cached_decoder_for_ExportInvocation) { _cached_decoder_for_ExportInvocation = $._decode_inextensible_choice<ExportInvocation>({
    "CONTEXT 1": [ "esRequest", $._decode_implicit<ExportInvocation_esRequest>(() => _decode_ExportInvocation_esRequest) ],
    "CONTEXT 2": [ "taskPackage", $._decode_implicit<ExportInvocation_taskPackage>(() => _decode_ExportInvocation_taskPackage) ]
}); }
    return _cached_decoder_for_ExportInvocation(el);
}

let _cached_encoder_for_ExportInvocation: $.ASN1Encoder<ExportInvocation> | null = null;

/**
 * @summary Encodes a(n) ExportInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExportInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_ExportInvocation (value: ExportInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExportInvocation) { _cached_encoder_for_ExportInvocation = $._encode_choice<ExportInvocation>({
    "esRequest": $._encode_implicit(_TagClass.context, 1, () => _encode_ExportInvocation_esRequest, $.BER),
    "taskPackage": $._encode_implicit(_TagClass.context, 2, () => _encode_ExportInvocation_taskPackage, $.BER),
}, $.BER); }
    return _cached_encoder_for_ExportInvocation(value, elGetter);
}


/* eslint-enable */
