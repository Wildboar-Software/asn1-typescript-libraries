/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Associate_source_diagnostic_acse_service_user, _encode_Associate_source_diagnostic_acse_service_user, Associate_source_diagnostic_acse_service_user } from "../XDLMS-1/Associate-source-diagnostic-acse-service-user.ta.mjs";
// export { Associate_source_diagnostic_acse_service_user, Associate_source_diagnostic_acse_service_user_null /* IMPORTED_LONG_NAMED_INTEGER */, Associate_source_diagnostic_acse_service_user_no_reason_given /* IMPORTED_LONG_NAMED_INTEGER */, Associate_source_diagnostic_acse_service_user_application_context_name_not_supported /* IMPORTED_LONG_NAMED_INTEGER */, application_context_name_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */, Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_not_recognised /* IMPORTED_LONG_NAMED_INTEGER */, authentication_mechanism_name_not_recognised /* IMPORTED_SHORT_NAMED_INTEGER */, Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_required /* IMPORTED_LONG_NAMED_INTEGER */, authentication_mechanism_name_required /* IMPORTED_SHORT_NAMED_INTEGER */, Associate_source_diagnostic_acse_service_user_authentication_failure /* IMPORTED_LONG_NAMED_INTEGER */, authentication_failure /* IMPORTED_SHORT_NAMED_INTEGER */, Associate_source_diagnostic_acse_service_user_authentication_required /* IMPORTED_LONG_NAMED_INTEGER */, authentication_required /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Associate_source_diagnostic_acse_service_user, _encode_Associate_source_diagnostic_acse_service_user } from "../XDLMS-1/Associate-source-diagnostic-acse-service-user.ta.mjs";
import { _decode_Associate_source_diagnostic_acse_service_provider, _encode_Associate_source_diagnostic_acse_service_provider, Associate_source_diagnostic_acse_service_provider } from "../XDLMS-1/Associate-source-diagnostic-acse-service-provider.ta.mjs";
// export { Associate_source_diagnostic_acse_service_provider, Associate_source_diagnostic_acse_service_provider_null /* IMPORTED_LONG_NAMED_INTEGER */, Associate_source_diagnostic_acse_service_provider_no_reason_given /* IMPORTED_LONG_NAMED_INTEGER */, Associate_source_diagnostic_acse_service_provider_no_common_acse_version /* IMPORTED_LONG_NAMED_INTEGER */, no_common_acse_version /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Associate_source_diagnostic_acse_service_provider, _encode_Associate_source_diagnostic_acse_service_provider } from "../XDLMS-1/Associate-source-diagnostic-acse-service-provider.ta.mjs";


/**
 * @summary Associate_source_diagnostic
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Associate-source-diagnostic  ::=  CHOICE
 *      {
 *          acse-service-user [1] INTEGER
 *             {
 *              null (0),
 *              no-reason-given (1),
 *              application-context-name-not-supported (2),
 *              authentication-mechanism-name-not-recognised (11),
 *              authentication-mechanism-name-required (12),
 *              authentication-failure (13),
 *              authentication-required (14)
 *              },
 *          acse-service-provider [2] INTEGER
 *          {
 *              null (0),
 *              no-reason-given (1),
 *              no-common-acse-version (2)
 *          }
 *      }
 * ```
 */
export
type Associate_source_diagnostic =
    { acse_service_user: Associate_source_diagnostic_acse_service_user } /* CHOICE_ALT_ROOT */
    | { acse_service_provider: Associate_source_diagnostic_acse_service_provider } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Associate_source_diagnostic: $.ASN1Decoder<Associate_source_diagnostic> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Associate_source_diagnostic
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Associate_source_diagnostic (el: _Element): Associate_source_diagnostic {
    if (!_cached_decoder_for_Associate_source_diagnostic) { _cached_decoder_for_Associate_source_diagnostic = $._decode_inextensible_choice<Associate_source_diagnostic>({
    "CONTEXT 1": [ "acse_service_user", $._decode_implicit<Associate_source_diagnostic_acse_service_user>(() => _decode_Associate_source_diagnostic_acse_service_user) ],
    "CONTEXT 2": [ "acse_service_provider", $._decode_implicit<Associate_source_diagnostic_acse_service_provider>(() => _decode_Associate_source_diagnostic_acse_service_provider) ]
}); }
    return _cached_decoder_for_Associate_source_diagnostic(el);
}

let _cached_encoder_for_Associate_source_diagnostic: $.ASN1Encoder<Associate_source_diagnostic> | null = null;

/**
 * @summary Encodes a(n) Associate_source_diagnostic into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Associate_source_diagnostic, encoded as an ASN.1 Element.
 */
export
function _encode_Associate_source_diagnostic (value: Associate_source_diagnostic, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Associate_source_diagnostic) { _cached_encoder_for_Associate_source_diagnostic = $._encode_choice<Associate_source_diagnostic>({
    "acse_service_user": $._encode_implicit(_TagClass.context, 1, () => _encode_Associate_source_diagnostic_acse_service_user, $.BER),
    "acse_service_provider": $._encode_implicit(_TagClass.context, 2, () => _encode_Associate_source_diagnostic_acse_service_provider, $.BER),
}, $.BER); }
    return _cached_encoder_for_Associate_source_diagnostic(value, elGetter);
}


/* eslint-enable */
