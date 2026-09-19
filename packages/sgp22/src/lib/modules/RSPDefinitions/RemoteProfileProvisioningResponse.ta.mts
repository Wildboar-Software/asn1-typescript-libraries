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
import { InitiateAuthenticationResponse, _decode_InitiateAuthenticationResponse, _encode_InitiateAuthenticationResponse } from "../RSPDefinitions/InitiateAuthenticationResponse.ta.mjs";
// export { InitiateAuthenticationResponse, _decode_InitiateAuthenticationResponse, _encode_InitiateAuthenticationResponse } from "../RSPDefinitions/InitiateAuthenticationResponse.ta.mjs";
import { AuthenticateClientResponseEs9, _decode_AuthenticateClientResponseEs9, _encode_AuthenticateClientResponseEs9 } from "../RSPDefinitions/AuthenticateClientResponseEs9.ta.mjs";
// export { AuthenticateClientResponseEs9, _decode_AuthenticateClientResponseEs9, _encode_AuthenticateClientResponseEs9 } from "../RSPDefinitions/AuthenticateClientResponseEs9.ta.mjs";
import { GetBoundProfilePackageResponse, _decode_GetBoundProfilePackageResponse, _encode_GetBoundProfilePackageResponse } from "../RSPDefinitions/GetBoundProfilePackageResponse.ta.mjs";
// export { GetBoundProfilePackageResponse, _decode_GetBoundProfilePackageResponse, _encode_GetBoundProfilePackageResponse } from "../RSPDefinitions/GetBoundProfilePackageResponse.ta.mjs";
import { CancelSessionResponseEs9, _decode_CancelSessionResponseEs9, _encode_CancelSessionResponseEs9 } from "../RSPDefinitions/CancelSessionResponseEs9.ta.mjs";
// export { CancelSessionResponseEs9, _decode_CancelSessionResponseEs9, _encode_CancelSessionResponseEs9 } from "../RSPDefinitions/CancelSessionResponseEs9.ta.mjs";
import { AuthenticateClientResponseEs11, _decode_AuthenticateClientResponseEs11, _encode_AuthenticateClientResponseEs11 } from "../RSPDefinitions/AuthenticateClientResponseEs11.ta.mjs";
// export { AuthenticateClientResponseEs11, _decode_AuthenticateClientResponseEs11, _encode_AuthenticateClientResponseEs11 } from "../RSPDefinitions/AuthenticateClientResponseEs11.ta.mjs";


/**
 * @summary RemoteProfileProvisioningResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteProfileProvisioningResponse  ::=  [2] CHOICE { -- Tag 'A2'
 *     initiateAuthenticationResponse [57] InitiateAuthenticationResponse, -- Tag 'BF39'
 *     authenticateClientResponseEs9 [59] AuthenticateClientResponseEs9, -- Tag 'BF3B'
 *     getBoundProfilePackageResponse [58] GetBoundProfilePackageResponse, -- Tag 'BF3A'
 *     cancelSessionResponseEs9 [65] CancelSessionResponseEs9, -- Tag 'BF41'
 *     authenticateClientResponseEs11 [64] AuthenticateClientResponseEs11 -- Tag 'BF40'
 * }
 * ```
 */
export
type RemoteProfileProvisioningResponse =
    { initiateAuthenticationResponse: InitiateAuthenticationResponse } /* CHOICE_ALT_ROOT */
    | { authenticateClientResponseEs9: AuthenticateClientResponseEs9 } /* CHOICE_ALT_ROOT */
    | { getBoundProfilePackageResponse: GetBoundProfilePackageResponse } /* CHOICE_ALT_ROOT */
    | { cancelSessionResponseEs9: CancelSessionResponseEs9 } /* CHOICE_ALT_ROOT */
    | { authenticateClientResponseEs11: AuthenticateClientResponseEs11 } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RemoteProfileProvisioningResponse: $.ASN1Decoder<RemoteProfileProvisioningResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RemoteProfileProvisioningResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RemoteProfileProvisioningResponse (el: _Element): RemoteProfileProvisioningResponse {
    if (!_cached_decoder_for_RemoteProfileProvisioningResponse) { _cached_decoder_for_RemoteProfileProvisioningResponse = $._decode_explicit<RemoteProfileProvisioningResponse>(() => $._decode_inextensible_choice<RemoteProfileProvisioningResponse>({
    "CONTEXT 57": [ "initiateAuthenticationResponse", $._decode_implicit<InitiateAuthenticationResponse>(() => _decode_InitiateAuthenticationResponse) ],
    "CONTEXT 59": [ "authenticateClientResponseEs9", $._decode_implicit<AuthenticateClientResponseEs9>(() => _decode_AuthenticateClientResponseEs9) ],
    "CONTEXT 58": [ "getBoundProfilePackageResponse", $._decode_implicit<GetBoundProfilePackageResponse>(() => _decode_GetBoundProfilePackageResponse) ],
    "CONTEXT 65": [ "cancelSessionResponseEs9", $._decode_implicit<CancelSessionResponseEs9>(() => _decode_CancelSessionResponseEs9) ],
    "CONTEXT 64": [ "authenticateClientResponseEs11", $._decode_implicit<AuthenticateClientResponseEs11>(() => _decode_AuthenticateClientResponseEs11) ]
})); }
    return _cached_decoder_for_RemoteProfileProvisioningResponse(el);
}

let _cached_encoder_for_RemoteProfileProvisioningResponse: $.ASN1Encoder<RemoteProfileProvisioningResponse> | null = null;

/**
 * @summary Encodes a(n) RemoteProfileProvisioningResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoteProfileProvisioningResponse, encoded as an ASN.1 Element.
 */
export
function _encode_RemoteProfileProvisioningResponse (value: RemoteProfileProvisioningResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RemoteProfileProvisioningResponse) { _cached_encoder_for_RemoteProfileProvisioningResponse = $._encode_explicit(_TagClass.context, 2, () => $._encode_choice<RemoteProfileProvisioningResponse>({
    "initiateAuthenticationResponse": $._encode_implicit(_TagClass.context, 57, () => _encode_InitiateAuthenticationResponse, $.BER),
    "authenticateClientResponseEs9": $._encode_implicit(_TagClass.context, 59, () => _encode_AuthenticateClientResponseEs9, $.BER),
    "getBoundProfilePackageResponse": $._encode_implicit(_TagClass.context, 58, () => _encode_GetBoundProfilePackageResponse, $.BER),
    "cancelSessionResponseEs9": $._encode_implicit(_TagClass.context, 65, () => _encode_CancelSessionResponseEs9, $.BER),
    "authenticateClientResponseEs11": $._encode_implicit(_TagClass.context, 64, () => _encode_AuthenticateClientResponseEs11, $.BER),
}, $.BER), $.BER); }
    return _cached_encoder_for_RemoteProfileProvisioningResponse(value, elGetter);
}


/* eslint-enable */
