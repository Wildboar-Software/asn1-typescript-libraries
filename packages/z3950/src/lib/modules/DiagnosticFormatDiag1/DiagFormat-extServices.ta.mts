/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_DiagFormat_extServices_req, _encode_DiagFormat_extServices_req, DiagFormat_extServices_req } from "../DiagnosticFormatDiag1/DiagFormat-extServices-req.ta.mjs";
// export { DiagFormat_extServices_req, DiagFormat_extServices_req_nameInUse /* IMPORTED_LONG_NAMED_INTEGER */, nameInUse /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_extServices_req_noSuchName /* IMPORTED_LONG_NAMED_INTEGER */, noSuchName /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_extServices_req_quota /* IMPORTED_LONG_NAMED_INTEGER */, quota /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_extServices_req_type /* IMPORTED_LONG_NAMED_INTEGER */, type_ /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DiagFormat_extServices_req, _encode_DiagFormat_extServices_req } from "../DiagnosticFormatDiag1/DiagFormat-extServices-req.ta.mjs";
import { _decode_DiagFormat_extServices_permission, _encode_DiagFormat_extServices_permission, DiagFormat_extServices_permission } from "../DiagnosticFormatDiag1/DiagFormat-extServices-permission.ta.mjs";
// export { DiagFormat_extServices_permission, DiagFormat_extServices_permission_id /* IMPORTED_LONG_NAMED_INTEGER */, id /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_extServices_permission_modifyDelete /* IMPORTED_LONG_NAMED_INTEGER */, modifyDelete /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DiagFormat_extServices_permission, _encode_DiagFormat_extServices_permission } from "../DiagnosticFormatDiag1/DiagFormat-extServices-permission.ta.mjs";
import { _decode_DiagFormat_extServices_immediate, _encode_DiagFormat_extServices_immediate, DiagFormat_extServices_immediate } from "../DiagnosticFormatDiag1/DiagFormat-extServices-immediate.ta.mjs";
// export { DiagFormat_extServices_immediate, DiagFormat_extServices_immediate_failed /* IMPORTED_LONG_NAMED_INTEGER */, failed /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_extServices_immediate_service /* IMPORTED_LONG_NAMED_INTEGER */, service /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_extServices_immediate_parameters /* IMPORTED_LONG_NAMED_INTEGER */, parameters /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DiagFormat_extServices_immediate, _encode_DiagFormat_extServices_immediate } from "../DiagnosticFormatDiag1/DiagFormat-extServices-immediate.ta.mjs";


/**
 * @summary DiagFormat_extServices
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-extServices ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagFormat_extServices =
    { req: DiagFormat_extServices_req } /* CHOICE_ALT_ROOT */
    | { permission: DiagFormat_extServices_permission } /* CHOICE_ALT_ROOT */
    | { immediate: DiagFormat_extServices_immediate } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiagFormat_extServices: $.ASN1Decoder<DiagFormat_extServices> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_extServices
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_extServices (el: _Element): DiagFormat_extServices {
    if (!_cached_decoder_for_DiagFormat_extServices) { _cached_decoder_for_DiagFormat_extServices = $._decode_inextensible_choice<DiagFormat_extServices>({
    "CONTEXT 1": [ "req", $._decode_implicit<DiagFormat_extServices_req>(() => _decode_DiagFormat_extServices_req) ],
    "CONTEXT 2": [ "permission", $._decode_implicit<DiagFormat_extServices_permission>(() => _decode_DiagFormat_extServices_permission) ],
    "CONTEXT 3": [ "immediate", $._decode_implicit<DiagFormat_extServices_immediate>(() => _decode_DiagFormat_extServices_immediate) ]
}); }
    return _cached_decoder_for_DiagFormat_extServices(el);
}

let _cached_encoder_for_DiagFormat_extServices: $.ASN1Encoder<DiagFormat_extServices> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_extServices into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_extServices, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_extServices (value: DiagFormat_extServices, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_extServices) { _cached_encoder_for_DiagFormat_extServices = $._encode_choice<DiagFormat_extServices>({
    "req": $._encode_implicit(_TagClass.context, 1, () => _encode_DiagFormat_extServices_req, $.BER),
    "permission": $._encode_implicit(_TagClass.context, 2, () => _encode_DiagFormat_extServices_permission, $.BER),
    "immediate": $._encode_implicit(_TagClass.context, 3, () => _encode_DiagFormat_extServices_immediate, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiagFormat_extServices(value, elGetter);
}


/* eslint-enable */
