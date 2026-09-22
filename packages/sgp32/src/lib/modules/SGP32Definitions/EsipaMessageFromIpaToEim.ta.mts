/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InitiateAuthenticationRequestEsipa, _decode_InitiateAuthenticationRequestEsipa, _encode_InitiateAuthenticationRequestEsipa } from "../SGP32Definitions/InitiateAuthenticationRequestEsipa.ta.mjs";
// export { InitiateAuthenticationRequestEsipa, _decode_InitiateAuthenticationRequestEsipa, _encode_InitiateAuthenticationRequestEsipa } from "../SGP32Definitions/InitiateAuthenticationRequestEsipa.ta.mjs";
import { AuthenticateClientRequestEsipa, _decode_AuthenticateClientRequestEsipa, _encode_AuthenticateClientRequestEsipa } from "../SGP32Definitions/AuthenticateClientRequestEsipa.ta.mjs";
// export { AuthenticateClientRequestEsipa, _decode_AuthenticateClientRequestEsipa, _encode_AuthenticateClientRequestEsipa } from "../SGP32Definitions/AuthenticateClientRequestEsipa.ta.mjs";
import { GetBoundProfilePackageRequestEsipa, _decode_GetBoundProfilePackageRequestEsipa, _encode_GetBoundProfilePackageRequestEsipa } from "../SGP32Definitions/GetBoundProfilePackageRequestEsipa.ta.mjs";
// export { GetBoundProfilePackageRequestEsipa, _decode_GetBoundProfilePackageRequestEsipa, _encode_GetBoundProfilePackageRequestEsipa } from "../SGP32Definitions/GetBoundProfilePackageRequestEsipa.ta.mjs";
import { CancelSessionRequestEsipa, _decode_CancelSessionRequestEsipa, _encode_CancelSessionRequestEsipa } from "../SGP32Definitions/CancelSessionRequestEsipa.ta.mjs";
// export { CancelSessionRequestEsipa, _decode_CancelSessionRequestEsipa, _encode_CancelSessionRequestEsipa } from "../SGP32Definitions/CancelSessionRequestEsipa.ta.mjs";
import { HandleNotificationEsipa, _decode_HandleNotificationEsipa, _encode_HandleNotificationEsipa } from "../SGP32Definitions/HandleNotificationEsipa.ta.mjs";
// export { HandleNotificationEsipa, _decode_HandleNotificationEsipa, _encode_HandleNotificationEsipa } from "../SGP32Definitions/HandleNotificationEsipa.ta.mjs";
import { TransferEimPackageResponse, _decode_TransferEimPackageResponse, _encode_TransferEimPackageResponse } from "../SGP32Definitions/TransferEimPackageResponse.ta.mjs";
// export { TransferEimPackageResponse, _decode_TransferEimPackageResponse, _encode_TransferEimPackageResponse } from "../SGP32Definitions/TransferEimPackageResponse.ta.mjs";
import { GetEimPackageRequest, _decode_GetEimPackageRequest, _encode_GetEimPackageRequest } from "../SGP32Definitions/GetEimPackageRequest.ta.mjs";
// export { GetEimPackageRequest, _decode_GetEimPackageRequest, _encode_GetEimPackageRequest } from "../SGP32Definitions/GetEimPackageRequest.ta.mjs";
import { ProvideEimPackageResult, _decode_ProvideEimPackageResult, _encode_ProvideEimPackageResult } from "../SGP32Definitions/ProvideEimPackageResult.ta.mjs";
// export { ProvideEimPackageResult, _decode_ProvideEimPackageResult, _encode_ProvideEimPackageResult } from "../SGP32Definitions/ProvideEimPackageResult.ta.mjs";


/**
 * @summary EsipaMessageFromIpaToEim
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EsipaMessageFromIpaToEim  ::=  CHOICE {
 *     initiateAuthenticationRequestEsipa [57] InitiateAuthenticationRequestEsipa, -- Tag 'BF39'
 *     authenticateClientRequestEsipa [59] AuthenticateClientRequestEsipa, -- Tag 'BF3B'
 *     getBoundProfilePackageRequestEsipa [58] GetBoundProfilePackageRequestEsipa, -- Tag 'BF3A'
 *     cancelSessionRequestEsipa [65] CancelSessionRequestEsipa, -- Tag 'BF41'
 *     handleNotificationEsipa [61] HandleNotificationEsipa, -- Tag 'BF3D'
 *     transferEimPackageResponse [78] TransferEimPackageResponse, -- Tag 'BF4E'
 *     getEimPackageRequest [79] GetEimPackageRequest, -- Tag 'BF4F'
 *     provideEimPackageResult [80] ProvideEimPackageResult -- Tag 'BF50'
 * }
 * ```
 */
export
type EsipaMessageFromIpaToEim =
    { initiateAuthenticationRequestEsipa: InitiateAuthenticationRequestEsipa } /* CHOICE_ALT_ROOT */
    | { authenticateClientRequestEsipa: AuthenticateClientRequestEsipa } /* CHOICE_ALT_ROOT */
    | { getBoundProfilePackageRequestEsipa: GetBoundProfilePackageRequestEsipa } /* CHOICE_ALT_ROOT */
    | { cancelSessionRequestEsipa: CancelSessionRequestEsipa } /* CHOICE_ALT_ROOT */
    | { handleNotificationEsipa: HandleNotificationEsipa } /* CHOICE_ALT_ROOT */
    | { transferEimPackageResponse: TransferEimPackageResponse } /* CHOICE_ALT_ROOT */
    | { getEimPackageRequest: GetEimPackageRequest } /* CHOICE_ALT_ROOT */
    | { provideEimPackageResult: ProvideEimPackageResult } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EsipaMessageFromIpaToEim: $.ASN1Decoder<EsipaMessageFromIpaToEim> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EsipaMessageFromIpaToEim
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EsipaMessageFromIpaToEim (el: _Element): EsipaMessageFromIpaToEim {
    if (!_cached_decoder_for_EsipaMessageFromIpaToEim) { _cached_decoder_for_EsipaMessageFromIpaToEim = $._decode_inextensible_choice<EsipaMessageFromIpaToEim>({
    "CONTEXT 57": [ "initiateAuthenticationRequestEsipa", $._decode_implicit<InitiateAuthenticationRequestEsipa>(() => _decode_InitiateAuthenticationRequestEsipa) ],
    "CONTEXT 59": [ "authenticateClientRequestEsipa", $._decode_implicit<AuthenticateClientRequestEsipa>(() => _decode_AuthenticateClientRequestEsipa) ],
    "CONTEXT 58": [ "getBoundProfilePackageRequestEsipa", $._decode_implicit<GetBoundProfilePackageRequestEsipa>(() => _decode_GetBoundProfilePackageRequestEsipa) ],
    "CONTEXT 65": [ "cancelSessionRequestEsipa", $._decode_implicit<CancelSessionRequestEsipa>(() => _decode_CancelSessionRequestEsipa) ],
    "CONTEXT 61": [ "handleNotificationEsipa", $._decode_implicit<HandleNotificationEsipa>(() => _decode_HandleNotificationEsipa) ],
    "CONTEXT 78": [ "transferEimPackageResponse", $._decode_implicit<TransferEimPackageResponse>(() => _decode_TransferEimPackageResponse) ],
    "CONTEXT 79": [ "getEimPackageRequest", $._decode_implicit<GetEimPackageRequest>(() => _decode_GetEimPackageRequest) ],
    "CONTEXT 80": [ "provideEimPackageResult", $._decode_implicit<ProvideEimPackageResult>(() => _decode_ProvideEimPackageResult) ]
}); }
    return _cached_decoder_for_EsipaMessageFromIpaToEim(el);
}

let _cached_encoder_for_EsipaMessageFromIpaToEim: $.ASN1Encoder<EsipaMessageFromIpaToEim> | null = null;

/**
 * @summary Encodes a(n) EsipaMessageFromIpaToEim into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EsipaMessageFromIpaToEim, encoded as an ASN.1 Element.
 */
export
function _encode_EsipaMessageFromIpaToEim (value: EsipaMessageFromIpaToEim, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EsipaMessageFromIpaToEim) { _cached_encoder_for_EsipaMessageFromIpaToEim = $._encode_choice<EsipaMessageFromIpaToEim>({
    "initiateAuthenticationRequestEsipa": $._encode_implicit(_TagClass.context, 57, () => _encode_InitiateAuthenticationRequestEsipa, $.BER),
    "authenticateClientRequestEsipa": $._encode_implicit(_TagClass.context, 59, () => _encode_AuthenticateClientRequestEsipa, $.BER),
    "getBoundProfilePackageRequestEsipa": $._encode_implicit(_TagClass.context, 58, () => _encode_GetBoundProfilePackageRequestEsipa, $.BER),
    "cancelSessionRequestEsipa": $._encode_implicit(_TagClass.context, 65, () => _encode_CancelSessionRequestEsipa, $.BER),
    "handleNotificationEsipa": $._encode_implicit(_TagClass.context, 61, () => _encode_HandleNotificationEsipa, $.BER),
    "transferEimPackageResponse": $._encode_implicit(_TagClass.context, 78, () => _encode_TransferEimPackageResponse, $.BER),
    "getEimPackageRequest": $._encode_implicit(_TagClass.context, 79, () => _encode_GetEimPackageRequest, $.BER),
    "provideEimPackageResult": $._encode_implicit(_TagClass.context, 80, () => _encode_ProvideEimPackageResult, $.BER),
}, $.BER); }
    return _cached_encoder_for_EsipaMessageFromIpaToEim(value, elGetter);
}


/* eslint-enable */
