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
    AvailabilityStatus,
    _decode_AvailabilityStatus,
    _encode_AvailabilityStatus,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AvailabilityStatus.ta.mjs';

/**
 * @summary CircuitPackAvailabilityStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CircuitPackAvailabilityStatus  ::=
 *   AvailabilityStatus(WITH COMPONENT (notInstalled))
 * ```
 */
export type CircuitPackAvailabilityStatus = AvailabilityStatus; // DefinedType


let _cached_decoder_for_CircuitPackAvailabilityStatus: $.ASN1Decoder<CircuitPackAvailabilityStatus> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CircuitPackAvailabilityStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CircuitPackAvailabilityStatus} The decoded data structure.
 */
export function _decode_CircuitPackAvailabilityStatus(el: _Element): CircuitPackAvailabilityStatus {
    if (!_cached_decoder_for_CircuitPackAvailabilityStatus) {
        _cached_decoder_for_CircuitPackAvailabilityStatus = _decode_AvailabilityStatus;
    }
    return _cached_decoder_for_CircuitPackAvailabilityStatus(el);
}


let _cached_encoder_for_CircuitPackAvailabilityStatus: $.ASN1Encoder<CircuitPackAvailabilityStatus> | null = null;


/**
 * @summary Encodes a(n) CircuitPackAvailabilityStatus into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CircuitPackAvailabilityStatus, encoded as an ASN.1 Element.
 */
export function _encode_CircuitPackAvailabilityStatus(
    value: CircuitPackAvailabilityStatus,
    elGetter: $.ASN1Encoder<CircuitPackAvailabilityStatus>
): _Element {
    if (!_cached_encoder_for_CircuitPackAvailabilityStatus) {
        _cached_encoder_for_CircuitPackAvailabilityStatus = _encode_AvailabilityStatus;
    }
    return _cached_encoder_for_CircuitPackAvailabilityStatus(value, elGetter);
}


/* eslint-enable */
