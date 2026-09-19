/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InitiateAuthenticationResponseEsipa, _decode_InitiateAuthenticationResponseEsipa, _encode_InitiateAuthenticationResponseEsipa } from "../SGP32Definitions/InitiateAuthenticationResponseEsipa.ta.mjs";
// export { InitiateAuthenticationResponseEsipa, _decode_InitiateAuthenticationResponseEsipa, _encode_InitiateAuthenticationResponseEsipa } from "../SGP32Definitions/InitiateAuthenticationResponseEsipa.ta.mjs";
import { AuthenticateClientResponseEsipa, _decode_AuthenticateClientResponseEsipa, _encode_AuthenticateClientResponseEsipa } from "../SGP32Definitions/AuthenticateClientResponseEsipa.ta.mjs";
// export { AuthenticateClientResponseEsipa, _decode_AuthenticateClientResponseEsipa, _encode_AuthenticateClientResponseEsipa } from "../SGP32Definitions/AuthenticateClientResponseEsipa.ta.mjs";
import { GetBoundProfilePackageResponseEsipa, _decode_GetBoundProfilePackageResponseEsipa, _encode_GetBoundProfilePackageResponseEsipa } from "../SGP32Definitions/GetBoundProfilePackageResponseEsipa.ta.mjs";
// export { GetBoundProfilePackageResponseEsipa, _decode_GetBoundProfilePackageResponseEsipa, _encode_GetBoundProfilePackageResponseEsipa } from "../SGP32Definitions/GetBoundProfilePackageResponseEsipa.ta.mjs";
import { CancelSessionResponseEsipa, _decode_CancelSessionResponseEsipa, _encode_CancelSessionResponseEsipa } from "../SGP32Definitions/CancelSessionResponseEsipa.ta.mjs";
// export { CancelSessionResponseEsipa, _decode_CancelSessionResponseEsipa, _encode_CancelSessionResponseEsipa } from "../SGP32Definitions/CancelSessionResponseEsipa.ta.mjs";
import { TransferEimPackageRequest, _decode_TransferEimPackageRequest, _encode_TransferEimPackageRequest } from "../SGP32Definitions/TransferEimPackageRequest.ta.mjs";
// export { TransferEimPackageRequest, _decode_TransferEimPackageRequest, _encode_TransferEimPackageRequest } from "../SGP32Definitions/TransferEimPackageRequest.ta.mjs";
import { GetEimPackageResponse, _decode_GetEimPackageResponse, _encode_GetEimPackageResponse } from "../SGP32Definitions/GetEimPackageResponse.ta.mjs";
// export { GetEimPackageResponse, _decode_GetEimPackageResponse, _encode_GetEimPackageResponse } from "../SGP32Definitions/GetEimPackageResponse.ta.mjs";
import { ProvideEimPackageResultResponse, _decode_ProvideEimPackageResultResponse, _encode_ProvideEimPackageResultResponse } from "../SGP32Definitions/ProvideEimPackageResultResponse.ta.mjs";
// export { ProvideEimPackageResultResponse, _decode_ProvideEimPackageResultResponse, _encode_ProvideEimPackageResultResponse } from "../SGP32Definitions/ProvideEimPackageResultResponse.ta.mjs";


/**
 * @summary EsipaMessageFromEimToIpa
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EsipaMessageFromEimToIpa  ::=  CHOICE {
 *     initiateAuthenticationResponseEsipa [57] InitiateAuthenticationResponseEsipa, -- Tag 'BF39'
 *     authenticateClientResponseEsipa [59] AuthenticateClientResponseEsipa, -- Tag 'BF3B'
 *     getBoundProfilePackageResponseEsipa [58] GetBoundProfilePackageResponseEsipa, -- Tag 'BF3A'
 *     cancelSessionResponseEsipa [65] CancelSessionResponseEsipa, -- Tag 'BF41'
 *     transferEimPackageRequest [78] TransferEimPackageRequest, -- Tag 'BF4E'
 *     getEimPackageResponse [79] GetEimPackageResponse, -- Tag 'BF4F'
 *     provideEimPackageResultResponse [80] ProvideEimPackageResultResponse -- Tag 'BF50'
 * }
 * ```
 */
export
type EsipaMessageFromEimToIpa =
    { initiateAuthenticationResponseEsipa: InitiateAuthenticationResponseEsipa } /* CHOICE_ALT_ROOT */
    | { authenticateClientResponseEsipa: AuthenticateClientResponseEsipa } /* CHOICE_ALT_ROOT */
    | { getBoundProfilePackageResponseEsipa: GetBoundProfilePackageResponseEsipa } /* CHOICE_ALT_ROOT */
    | { cancelSessionResponseEsipa: CancelSessionResponseEsipa } /* CHOICE_ALT_ROOT */
    | { transferEimPackageRequest: TransferEimPackageRequest } /* CHOICE_ALT_ROOT */
    | { getEimPackageResponse: GetEimPackageResponse } /* CHOICE_ALT_ROOT */
    | { provideEimPackageResultResponse: ProvideEimPackageResultResponse } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EsipaMessageFromEimToIpa: $.ASN1Decoder<EsipaMessageFromEimToIpa> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EsipaMessageFromEimToIpa
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EsipaMessageFromEimToIpa (el: _Element): EsipaMessageFromEimToIpa {
    if (!_cached_decoder_for_EsipaMessageFromEimToIpa) { _cached_decoder_for_EsipaMessageFromEimToIpa = $._decode_inextensible_choice<EsipaMessageFromEimToIpa>({
    "CONTEXT 57": [ "initiateAuthenticationResponseEsipa", $._decode_implicit<InitiateAuthenticationResponseEsipa>(() => _decode_InitiateAuthenticationResponseEsipa) ],
    "CONTEXT 59": [ "authenticateClientResponseEsipa", $._decode_implicit<AuthenticateClientResponseEsipa>(() => _decode_AuthenticateClientResponseEsipa) ],
    "CONTEXT 58": [ "getBoundProfilePackageResponseEsipa", $._decode_implicit<GetBoundProfilePackageResponseEsipa>(() => _decode_GetBoundProfilePackageResponseEsipa) ],
    "CONTEXT 65": [ "cancelSessionResponseEsipa", $._decode_implicit<CancelSessionResponseEsipa>(() => _decode_CancelSessionResponseEsipa) ],
    "CONTEXT 78": [ "transferEimPackageRequest", $._decode_implicit<TransferEimPackageRequest>(() => _decode_TransferEimPackageRequest) ],
    "CONTEXT 79": [ "getEimPackageResponse", $._decode_implicit<GetEimPackageResponse>(() => _decode_GetEimPackageResponse) ],
    "CONTEXT 80": [ "provideEimPackageResultResponse", $._decode_implicit<ProvideEimPackageResultResponse>(() => _decode_ProvideEimPackageResultResponse) ]
}); }
    return _cached_decoder_for_EsipaMessageFromEimToIpa(el);
}

let _cached_encoder_for_EsipaMessageFromEimToIpa: $.ASN1Encoder<EsipaMessageFromEimToIpa> | null = null;

/**
 * @summary Encodes a(n) EsipaMessageFromEimToIpa into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EsipaMessageFromEimToIpa, encoded as an ASN.1 Element.
 */
export
function _encode_EsipaMessageFromEimToIpa (value: EsipaMessageFromEimToIpa, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EsipaMessageFromEimToIpa) { _cached_encoder_for_EsipaMessageFromEimToIpa = $._encode_choice<EsipaMessageFromEimToIpa>({
    "initiateAuthenticationResponseEsipa": $._encode_implicit(_TagClass.context, 57, () => _encode_InitiateAuthenticationResponseEsipa, $.BER),
    "authenticateClientResponseEsipa": $._encode_implicit(_TagClass.context, 59, () => _encode_AuthenticateClientResponseEsipa, $.BER),
    "getBoundProfilePackageResponseEsipa": $._encode_implicit(_TagClass.context, 58, () => _encode_GetBoundProfilePackageResponseEsipa, $.BER),
    "cancelSessionResponseEsipa": $._encode_implicit(_TagClass.context, 65, () => _encode_CancelSessionResponseEsipa, $.BER),
    "transferEimPackageRequest": $._encode_implicit(_TagClass.context, 78, () => _encode_TransferEimPackageRequest, $.BER),
    "getEimPackageResponse": $._encode_implicit(_TagClass.context, 79, () => _encode_GetEimPackageResponse, $.BER),
    "provideEimPackageResultResponse": $._encode_implicit(_TagClass.context, 80, () => _encode_ProvideEimPackageResultResponse, $.BER),
}, $.BER); }
    return _cached_encoder_for_EsipaMessageFromEimToIpa(value, elGetter);
}


/* eslint-enable */
