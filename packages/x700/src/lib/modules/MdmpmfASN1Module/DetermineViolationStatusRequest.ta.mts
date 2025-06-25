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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/**
 * @summary DetermineViolationStatusRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DetermineViolationStatusRequest  ::=  ObjectInstance
 * ```
 */
export type DetermineViolationStatusRequest = ObjectInstance; // DefinedType

let _cached_decoder_for_DetermineViolationStatusRequest: $.ASN1Decoder<DetermineViolationStatusRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DetermineViolationStatusRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DetermineViolationStatusRequest} The decoded data structure.
 */
export function _decode_DetermineViolationStatusRequest(el: _Element): DetermineViolationStatusRequest {
    if (!_cached_decoder_for_DetermineViolationStatusRequest) {
        _cached_decoder_for_DetermineViolationStatusRequest = _decode_ObjectInstance;
    }
    return _cached_decoder_for_DetermineViolationStatusRequest(el);
}

let _cached_encoder_for_DetermineViolationStatusRequest: $.ASN1Encoder<DetermineViolationStatusRequest> | null = null;

/**
 * @summary Encodes a(n) DetermineViolationStatusRequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DetermineViolationStatusRequest, encoded as an ASN.1 Element.
 */
export function _encode_DetermineViolationStatusRequest(
    value: DetermineViolationStatusRequest,
    elGetter: $.ASN1Encoder<DetermineViolationStatusRequest>
): _Element {
    if (!_cached_encoder_for_DetermineViolationStatusRequest) {
        _cached_encoder_for_DetermineViolationStatusRequest = _encode_ObjectInstance;
    }
    return _cached_encoder_for_DetermineViolationStatusRequest(value, elGetter);
}


/* eslint-enable */
