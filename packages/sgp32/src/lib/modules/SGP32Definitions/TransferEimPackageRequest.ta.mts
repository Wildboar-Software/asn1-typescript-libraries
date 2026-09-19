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
import { EuiccPackageRequest, _decode_EuiccPackageRequest, _encode_EuiccPackageRequest } from "../SGP32Definitions/EuiccPackageRequest.ta.mjs";
// export { EuiccPackageRequest, _decode_EuiccPackageRequest, _encode_EuiccPackageRequest } from "../SGP32Definitions/EuiccPackageRequest.ta.mjs";
import { IpaEuiccDataRequest, _decode_IpaEuiccDataRequest, _encode_IpaEuiccDataRequest } from "../SGP32Definitions/IpaEuiccDataRequest.ta.mjs";
// export { IpaEuiccDataRequest, _decode_IpaEuiccDataRequest, _encode_IpaEuiccDataRequest } from "../SGP32Definitions/IpaEuiccDataRequest.ta.mjs";
import { EimAcknowledgements, _decode_EimAcknowledgements, _encode_EimAcknowledgements } from "../SGP32Definitions/EimAcknowledgements.ta.mjs";
// export { EimAcknowledgements, _decode_EimAcknowledgements, _encode_EimAcknowledgements } from "../SGP32Definitions/EimAcknowledgements.ta.mjs";
import { ProfileDownloadTriggerRequest, _decode_ProfileDownloadTriggerRequest, _encode_ProfileDownloadTriggerRequest } from "../SGP32Definitions/ProfileDownloadTriggerRequest.ta.mjs";
// export { ProfileDownloadTriggerRequest, _decode_ProfileDownloadTriggerRequest, _encode_ProfileDownloadTriggerRequest } from "../SGP32Definitions/ProfileDownloadTriggerRequest.ta.mjs";


/**
 * @summary TransferEimPackageRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransferEimPackageRequest  ::=  [78] CHOICE { -- Tag 'BF4E'
 *     euiccPackageRequest [81] EuiccPackageRequest, -- Tag 'BF51'
 *     ipaEuiccDataRequest [82] IpaEuiccDataRequest, -- Tag 'BF52'
 *     eimAcknowledgements [83] EimAcknowledgements, -- Tag 'BF53'
 *     profileDownloadTriggerRequest [84] ProfileDownloadTriggerRequest -- Tag 'BF54'
 * }
 * ```
 */
export
type TransferEimPackageRequest =
    { euiccPackageRequest: EuiccPackageRequest } /* CHOICE_ALT_ROOT */
    | { ipaEuiccDataRequest: IpaEuiccDataRequest } /* CHOICE_ALT_ROOT */
    | { eimAcknowledgements: EimAcknowledgements } /* CHOICE_ALT_ROOT */
    | { profileDownloadTriggerRequest: ProfileDownloadTriggerRequest } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TransferEimPackageRequest: $.ASN1Decoder<TransferEimPackageRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransferEimPackageRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransferEimPackageRequest (el: _Element): TransferEimPackageRequest {
    if (!_cached_decoder_for_TransferEimPackageRequest) { _cached_decoder_for_TransferEimPackageRequest = $._decode_explicit<TransferEimPackageRequest>(() => $._decode_inextensible_choice<TransferEimPackageRequest>({
    "CONTEXT 81": [ "euiccPackageRequest", $._decode_implicit<EuiccPackageRequest>(() => _decode_EuiccPackageRequest) ],
    "CONTEXT 82": [ "ipaEuiccDataRequest", $._decode_implicit<IpaEuiccDataRequest>(() => _decode_IpaEuiccDataRequest) ],
    "CONTEXT 83": [ "eimAcknowledgements", $._decode_implicit<EimAcknowledgements>(() => _decode_EimAcknowledgements) ],
    "CONTEXT 84": [ "profileDownloadTriggerRequest", $._decode_implicit<ProfileDownloadTriggerRequest>(() => _decode_ProfileDownloadTriggerRequest) ]
})); }
    return _cached_decoder_for_TransferEimPackageRequest(el);
}

let _cached_encoder_for_TransferEimPackageRequest: $.ASN1Encoder<TransferEimPackageRequest> | null = null;

/**
 * @summary Encodes a(n) TransferEimPackageRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransferEimPackageRequest, encoded as an ASN.1 Element.
 */
export
function _encode_TransferEimPackageRequest (value: TransferEimPackageRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransferEimPackageRequest) { _cached_encoder_for_TransferEimPackageRequest = $._encode_explicit(_TagClass.context, 78, () => $._encode_choice<TransferEimPackageRequest>({
    "euiccPackageRequest": $._encode_implicit(_TagClass.context, 81, () => _encode_EuiccPackageRequest, $.BER),
    "ipaEuiccDataRequest": $._encode_implicit(_TagClass.context, 82, () => _encode_IpaEuiccDataRequest, $.BER),
    "eimAcknowledgements": $._encode_implicit(_TagClass.context, 83, () => _encode_EimAcknowledgements, $.BER),
    "profileDownloadTriggerRequest": $._encode_implicit(_TagClass.context, 84, () => _encode_ProfileDownloadTriggerRequest, $.BER),
}, $.BER), $.BER); }
    return _cached_encoder_for_TransferEimPackageRequest(value, elGetter);
}


/* eslint-enable */
