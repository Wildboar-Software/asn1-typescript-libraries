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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    SimpleNameType,
    _decode_SimpleNameType,
    _encode_SimpleNameType,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/SimpleNameType.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ServiceRequestId */
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
/* END_OF_SYMBOL_DEFINITION ServiceRequestId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceRequestId */
let _cached_decoder_for_ServiceRequestId: $.ASN1Decoder<ServiceRequestId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceRequestId */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceRequestId */
/**
 * @summary Decodes an ASN.1 element into a(n) ServiceRequestId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceRequestId} The decoded data structure.
 */
export function _decode_ServiceRequestId(el: _Element) {
    if (!_cached_decoder_for_ServiceRequestId) {
        _cached_decoder_for_ServiceRequestId = _decode_SimpleNameType;
    }
    return _cached_decoder_for_ServiceRequestId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ServiceRequestId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceRequestId */
let _cached_encoder_for_ServiceRequestId: $.ASN1Encoder<ServiceRequestId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceRequestId */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceRequestId */
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
) {
    if (!_cached_encoder_for_ServiceRequestId) {
        _cached_encoder_for_ServiceRequestId = _encode_SimpleNameType;
    }
    return _cached_encoder_for_ServiceRequestId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ServiceRequestId */

/* eslint-enable */
