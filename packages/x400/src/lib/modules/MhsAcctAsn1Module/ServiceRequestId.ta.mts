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
    SimpleNameType,
    _decode_SimpleNameType,
    _encode_SimpleNameType,
} from '@wildboar/attribute-asn1module';
/**
 * @summary ServiceRequestId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceRequestId  ::=  SimpleNameType
 * ```
 */
export type ServiceRequestId = SimpleNameType; // DefinedType

let _cached_decoder_for_ServiceRequestId: $.ASN1Decoder<ServiceRequestId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceRequestId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceRequestId} The decoded data structure.
 */
export function _decode_ServiceRequestId(el: _Element): ServiceRequestId {
    if (!_cached_decoder_for_ServiceRequestId) {
        _cached_decoder_for_ServiceRequestId = _decode_SimpleNameType;
    }
    return _cached_decoder_for_ServiceRequestId(el);
}

let _cached_encoder_for_ServiceRequestId: $.ASN1Encoder<ServiceRequestId> | null = null;

/**
 * @summary Encodes a(n) ServiceRequestId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceRequestId, encoded as an ASN.1 Element.
 */
export function _encode_ServiceRequestId(
    value: ServiceRequestId,
    elGetter: $.ASN1Encoder<ServiceRequestId>
): _Element {
    if (!_cached_encoder_for_ServiceRequestId) {
        _cached_encoder_for_ServiceRequestId = _encode_SimpleNameType;
    }
    return _cached_encoder_for_ServiceRequestId(value, elGetter);
}


/* eslint-enable */
