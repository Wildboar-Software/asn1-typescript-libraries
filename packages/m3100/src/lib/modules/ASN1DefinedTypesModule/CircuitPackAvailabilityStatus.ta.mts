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
    type AvailabilityStatus,
    _decode_AvailabilityStatus,
    _encode_AvailabilityStatus,
} from '@wildboar/attribute-asn1module';

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

/**
 * @summary Decodes an ASN.1 element into a(n) CircuitPackAvailabilityStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CircuitPackAvailabilityStatus} The decoded data structure.
 */
export const _decode_CircuitPackAvailabilityStatus: $.ASN1Decoder<CircuitPackAvailabilityStatus> = _decode_AvailabilityStatus;

/**
 * @summary Encodes a(n) CircuitPackAvailabilityStatus into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CircuitPackAvailabilityStatus, encoded as an ASN.1 Element.
 */
export const _encode_CircuitPackAvailabilityStatus: $.ASN1Encoder<CircuitPackAvailabilityStatus> = _encode_AvailabilityStatus;


/* eslint-enable */
