/* eslint-disable */
import {
    INTEGER,
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



/**
 * @summary PhysicalStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PhysicalStatus  ::=  [1] IMPLICIT INTEGER {
 *     operational                   (0),
 *     partially-operational         (1),
 *     inoperable                    (2),
 *     needs-commissioning           (3)
 * } (0..3)
 * ```
 */
export
type PhysicalStatus = INTEGER;

/**
 * @summary PhysicalStatus_operational
 * @constant
 * @type {number}
 */
export
const PhysicalStatus_operational: PhysicalStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PhysicalStatus_operational
 * @constant
 * @type {number}
 */
export
const operational: PhysicalStatus = PhysicalStatus_operational; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PhysicalStatus_partially_operational
 * @constant
 * @type {number}
 */
export
const PhysicalStatus_partially_operational: PhysicalStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PhysicalStatus_partially_operational
 * @constant
 * @type {number}
 */
export
const partially_operational: PhysicalStatus = PhysicalStatus_partially_operational; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PhysicalStatus_inoperable
 * @constant
 * @type {number}
 */
export
const PhysicalStatus_inoperable: PhysicalStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PhysicalStatus_inoperable
 * @constant
 * @type {number}
 */
export
const inoperable: PhysicalStatus = PhysicalStatus_inoperable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PhysicalStatus_needs_commissioning
 * @constant
 * @type {number}
 */
export
const PhysicalStatus_needs_commissioning: PhysicalStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PhysicalStatus_needs_commissioning
 * @constant
 * @type {number}
 */
export
const needs_commissioning: PhysicalStatus = PhysicalStatus_needs_commissioning; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_PhysicalStatus: $.ASN1Decoder<PhysicalStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PhysicalStatus (el: _Element): PhysicalStatus {
    if (!_cached_decoder_for_PhysicalStatus) { _cached_decoder_for_PhysicalStatus = $._decode_implicit<PhysicalStatus>(() => $._decodeInteger); }
    return _cached_decoder_for_PhysicalStatus(el);
}

let _cached_encoder_for_PhysicalStatus: $.ASN1Encoder<PhysicalStatus> | null = null;

/**
 * @summary Encodes a(n) PhysicalStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalStatus, encoded as an ASN.1 Element.
 */
export
function _encode_PhysicalStatus (value: PhysicalStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PhysicalStatus) { _cached_encoder_for_PhysicalStatus = $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_PhysicalStatus(value, elGetter);
}


/* eslint-enable */
