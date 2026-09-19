/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ErrorDescriptor, _decode_ErrorDescriptor, _encode_ErrorDescriptor } from "../MEDIA-GATEWAY-CONTROL/ErrorDescriptor.ta.mjs";
// export { ErrorDescriptor, _decode_ErrorDescriptor, _encode_ErrorDescriptor } from "../MEDIA-GATEWAY-CONTROL/ErrorDescriptor.ta.mjs";
import { ServiceChangeResParm, _decode_ServiceChangeResParm, _encode_ServiceChangeResParm } from "../MEDIA-GATEWAY-CONTROL/ServiceChangeResParm.ta.mjs";
// export { ServiceChangeResParm, _decode_ServiceChangeResParm, _encode_ServiceChangeResParm } from "../MEDIA-GATEWAY-CONTROL/ServiceChangeResParm.ta.mjs";


/**
 * @summary ServiceChangeResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceChangeResult  ::=  CHOICE
 *     {
 *         errorDescriptor                [0] ErrorDescriptor,
 *         serviceChangeResParms        [1] ServiceChangeResParm
 *     }
 * ```
 */
export
type ServiceChangeResult =
    { errorDescriptor: ErrorDescriptor } /* CHOICE_ALT_ROOT */
    | { serviceChangeResParms: ServiceChangeResParm } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ServiceChangeResult: $.ASN1Decoder<ServiceChangeResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceChangeResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceChangeResult (el: _Element): ServiceChangeResult {
    if (!_cached_decoder_for_ServiceChangeResult) { _cached_decoder_for_ServiceChangeResult = $._decode_inextensible_choice<ServiceChangeResult>({
    "CONTEXT 0": [ "errorDescriptor", $._decode_implicit<ErrorDescriptor>(() => _decode_ErrorDescriptor) ],
    "CONTEXT 1": [ "serviceChangeResParms", $._decode_implicit<ServiceChangeResParm>(() => _decode_ServiceChangeResParm) ]
}); }
    return _cached_decoder_for_ServiceChangeResult(el);
}

let _cached_encoder_for_ServiceChangeResult: $.ASN1Encoder<ServiceChangeResult> | null = null;

/**
 * @summary Encodes a(n) ServiceChangeResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceChangeResult, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceChangeResult (value: ServiceChangeResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceChangeResult) { _cached_encoder_for_ServiceChangeResult = $._encode_choice<ServiceChangeResult>({
    "errorDescriptor": $._encode_implicit(_TagClass.context, 0, () => _encode_ErrorDescriptor, $.BER),
    "serviceChangeResParms": $._encode_implicit(_TagClass.context, 1, () => _encode_ServiceChangeResParm, $.BER),
}, $.BER); }
    return _cached_encoder_for_ServiceChangeResult(value, elGetter);
}


/* eslint-enable */
