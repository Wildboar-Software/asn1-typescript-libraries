/* eslint-disable */
import {
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
import { ServiceProblem, _enum_for_ServiceProblem, _decode_ServiceProblem, _encode_ServiceProblem } from "../DFRAbstractService/ServiceProblem.ta.mjs";
import { SecurityProblem, _enum_for_SecurityProblem, _decode_SecurityProblem, _encode_SecurityProblem } from "../DFRAbstractService/SecurityProblem.ta.mjs";


/**
 * @summary DfrBindError
 * @description
 *
 * Bind failure: `security-error` if credentials cannot grant access;
 * `service-error` if the server cannot establish the association. Same problem
 * codes as the operation errors. ISO/IEC 10166-1:1991 §7.1.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrBindError  ::=  CHOICE {
 *     service-error   [0] ServiceProblem,
 *     security-error  [1] SecurityProblem
 * }
 * ```
 */
export
type DfrBindError =
    { service_error: ServiceProblem } /* CHOICE_ALT_ROOT */
    | { security_error: SecurityProblem } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DfrBindError: $.ASN1Decoder<DfrBindError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DfrBindError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DfrBindError (el: _Element): DfrBindError {
    if (!_cached_decoder_for_DfrBindError) { _cached_decoder_for_DfrBindError = $._decode_inextensible_choice<DfrBindError>({
    "CONTEXT 0": [ "service_error", $._decode_implicit<ServiceProblem>(() => _decode_ServiceProblem) ],
    "CONTEXT 1": [ "security_error", $._decode_implicit<SecurityProblem>(() => _decode_SecurityProblem) ]
}); }
    return _cached_decoder_for_DfrBindError(el);
}

let _cached_encoder_for_DfrBindError: $.ASN1Encoder<DfrBindError> | null = null;

/**
 * @summary Encodes a(n) DfrBindError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DfrBindError, encoded as an ASN.1 Element.
 */
export
function _encode_DfrBindError (value: DfrBindError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DfrBindError) { _cached_encoder_for_DfrBindError = $._encode_choice<DfrBindError>({
    "service_error": $._encode_implicit(_TagClass.context, 0, () => _encode_ServiceProblem, $.BER),
    "security_error": $._encode_implicit(_TagClass.context, 1, () => _encode_SecurityProblem, $.BER),
}, $.BER); }
    return _cached_encoder_for_DfrBindError(value, elGetter);
}


/* eslint-enable */
