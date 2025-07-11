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
} from '@wildboar/cmip';
/**
 * @summary VerifyMembershipStatusRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VerifyMembershipStatusRequest  ::=  ObjectInstance
 * ```
 */
export type VerifyMembershipStatusRequest = ObjectInstance; // DefinedType

let _cached_decoder_for_VerifyMembershipStatusRequest: $.ASN1Decoder<VerifyMembershipStatusRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VerifyMembershipStatusRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VerifyMembershipStatusRequest} The decoded data structure.
 */
export function _decode_VerifyMembershipStatusRequest(el: _Element): VerifyMembershipStatusRequest {
    if (!_cached_decoder_for_VerifyMembershipStatusRequest) {
        _cached_decoder_for_VerifyMembershipStatusRequest = _decode_ObjectInstance;
    }
    return _cached_decoder_for_VerifyMembershipStatusRequest(el);
}

let _cached_encoder_for_VerifyMembershipStatusRequest: $.ASN1Encoder<VerifyMembershipStatusRequest> | null = null;

/**
 * @summary Encodes a(n) VerifyMembershipStatusRequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VerifyMembershipStatusRequest, encoded as an ASN.1 Element.
 */
export function _encode_VerifyMembershipStatusRequest(
    value: VerifyMembershipStatusRequest,
    elGetter: $.ASN1Encoder<VerifyMembershipStatusRequest>
): _Element {
    if (!_cached_encoder_for_VerifyMembershipStatusRequest) {
        _cached_encoder_for_VerifyMembershipStatusRequest = _encode_ObjectInstance;
    }
    return _cached_encoder_for_VerifyMembershipStatusRequest(value, elGetter);
}


/* eslint-enable */
