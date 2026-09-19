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
import { InitiateAuthenticationRequest, _decode_InitiateAuthenticationRequest, _encode_InitiateAuthenticationRequest } from "../RSPDefinitions/InitiateAuthenticationRequest.ta.mjs";
// export { InitiateAuthenticationRequest, _decode_InitiateAuthenticationRequest, _encode_InitiateAuthenticationRequest } from "../RSPDefinitions/InitiateAuthenticationRequest.ta.mjs";
import { AuthenticateClientRequest, _decode_AuthenticateClientRequest, _encode_AuthenticateClientRequest } from "../RSPDefinitions/AuthenticateClientRequest.ta.mjs";
// export { AuthenticateClientRequest, _decode_AuthenticateClientRequest, _encode_AuthenticateClientRequest } from "../RSPDefinitions/AuthenticateClientRequest.ta.mjs";
import { GetBoundProfilePackageRequest, _decode_GetBoundProfilePackageRequest, _encode_GetBoundProfilePackageRequest } from "../RSPDefinitions/GetBoundProfilePackageRequest.ta.mjs";
// export { GetBoundProfilePackageRequest, _decode_GetBoundProfilePackageRequest, _encode_GetBoundProfilePackageRequest } from "../RSPDefinitions/GetBoundProfilePackageRequest.ta.mjs";
import { CancelSessionRequestEs9, _decode_CancelSessionRequestEs9, _encode_CancelSessionRequestEs9 } from "../RSPDefinitions/CancelSessionRequestEs9.ta.mjs";
// export { CancelSessionRequestEs9, _decode_CancelSessionRequestEs9, _encode_CancelSessionRequestEs9 } from "../RSPDefinitions/CancelSessionRequestEs9.ta.mjs";
import { HandleNotification, _decode_HandleNotification, _encode_HandleNotification } from "../RSPDefinitions/HandleNotification.ta.mjs";
// export { HandleNotification, _decode_HandleNotification, _encode_HandleNotification } from "../RSPDefinitions/HandleNotification.ta.mjs";


/**
 * @summary RemoteProfileProvisioningRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteProfileProvisioningRequest  ::=  [2] CHOICE {  -- Tag 'A2'
 *     initiateAuthenticationRequest [57] InitiateAuthenticationRequest,  -- Tag 'BF39'
 *     authenticateClientRequest [59] AuthenticateClientRequest, -- Tag 'BF3B'
 *     getBoundProfilePackageRequest [58] GetBoundProfilePackageRequest,  -- Tag 'BF3A'
 *     cancelSessionRequestEs9 [65] CancelSessionRequestEs9, -- Tag 'BF41'
 *     handleNotification [61] HandleNotification -- tag 'BF3D'
 * }
 * ```
 */
export
type RemoteProfileProvisioningRequest =
    { initiateAuthenticationRequest: InitiateAuthenticationRequest } /* CHOICE_ALT_ROOT */
    | { authenticateClientRequest: AuthenticateClientRequest } /* CHOICE_ALT_ROOT */
    | { getBoundProfilePackageRequest: GetBoundProfilePackageRequest } /* CHOICE_ALT_ROOT */
    | { cancelSessionRequestEs9: CancelSessionRequestEs9 } /* CHOICE_ALT_ROOT */
    | { handleNotification: HandleNotification } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RemoteProfileProvisioningRequest: $.ASN1Decoder<RemoteProfileProvisioningRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RemoteProfileProvisioningRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RemoteProfileProvisioningRequest (el: _Element): RemoteProfileProvisioningRequest {
    if (!_cached_decoder_for_RemoteProfileProvisioningRequest) { _cached_decoder_for_RemoteProfileProvisioningRequest = $._decode_explicit<RemoteProfileProvisioningRequest>(() => $._decode_inextensible_choice<RemoteProfileProvisioningRequest>({
    "CONTEXT 57": [ "initiateAuthenticationRequest", $._decode_implicit<InitiateAuthenticationRequest>(() => _decode_InitiateAuthenticationRequest) ],
    "CONTEXT 59": [ "authenticateClientRequest", $._decode_implicit<AuthenticateClientRequest>(() => _decode_AuthenticateClientRequest) ],
    "CONTEXT 58": [ "getBoundProfilePackageRequest", $._decode_implicit<GetBoundProfilePackageRequest>(() => _decode_GetBoundProfilePackageRequest) ],
    "CONTEXT 65": [ "cancelSessionRequestEs9", $._decode_implicit<CancelSessionRequestEs9>(() => _decode_CancelSessionRequestEs9) ],
    "CONTEXT 61": [ "handleNotification", $._decode_implicit<HandleNotification>(() => _decode_HandleNotification) ]
})); }
    return _cached_decoder_for_RemoteProfileProvisioningRequest(el);
}

let _cached_encoder_for_RemoteProfileProvisioningRequest: $.ASN1Encoder<RemoteProfileProvisioningRequest> | null = null;

/**
 * @summary Encodes a(n) RemoteProfileProvisioningRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoteProfileProvisioningRequest, encoded as an ASN.1 Element.
 */
export
function _encode_RemoteProfileProvisioningRequest (value: RemoteProfileProvisioningRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RemoteProfileProvisioningRequest) { _cached_encoder_for_RemoteProfileProvisioningRequest = $._encode_explicit(_TagClass.context, 2, () => $._encode_choice<RemoteProfileProvisioningRequest>({
    "initiateAuthenticationRequest": $._encode_implicit(_TagClass.context, 57, () => _encode_InitiateAuthenticationRequest, $.BER),
    "authenticateClientRequest": $._encode_implicit(_TagClass.context, 59, () => _encode_AuthenticateClientRequest, $.BER),
    "getBoundProfilePackageRequest": $._encode_implicit(_TagClass.context, 58, () => _encode_GetBoundProfilePackageRequest, $.BER),
    "cancelSessionRequestEs9": $._encode_implicit(_TagClass.context, 65, () => _encode_CancelSessionRequestEs9, $.BER),
    "handleNotification": $._encode_implicit(_TagClass.context, 61, () => _encode_HandleNotification, $.BER),
}, $.BER), $.BER); }
    return _cached_encoder_for_RemoteProfileProvisioningRequest(value, elGetter);
}


/* eslint-enable */
