/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EstablishmentStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EstablishmentStatus  ::=  ENUMERATED
 * {
 *     established(0),
 *     released(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EstablishmentStatus {
    established = 0,
    released = 1,
}

/**
 * @summary EstablishmentStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EstablishmentStatus  ::=  ENUMERATED
 * {
 *     established(0),
 *     released(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EstablishmentStatus = _enum_for_EstablishmentStatus;

/**
 * @summary EstablishmentStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EstablishmentStatus  ::=  ENUMERATED
 * {
 *     established(0),
 *     released(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EstablishmentStatus = _enum_for_EstablishmentStatus;

/**
 * @summary EstablishmentStatus_established
 * @constant
 * @type {number}
 */
export
const EstablishmentStatus_established: EstablishmentStatus = EstablishmentStatus.established; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary established
 * @constant
 * @type {number}
 */
export
const established: EstablishmentStatus = EstablishmentStatus.established; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EstablishmentStatus_released
 * @constant
 * @type {number}
 */
export
const EstablishmentStatus_released: EstablishmentStatus = EstablishmentStatus.released; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary released
 * @constant
 * @type {number}
 */
export
const released: EstablishmentStatus = EstablishmentStatus.released; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_EstablishmentStatus: $.ASN1Decoder<EstablishmentStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EstablishmentStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EstablishmentStatus (el: _Element): EstablishmentStatus {
    if (!_cached_decoder_for_EstablishmentStatus) { _cached_decoder_for_EstablishmentStatus = $._decodeEnumerated; }
    return _cached_decoder_for_EstablishmentStatus(el);
}

let _cached_encoder_for_EstablishmentStatus: $.ASN1Encoder<EstablishmentStatus> | null = null;

/**
 * @summary Encodes a(n) EstablishmentStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishmentStatus, encoded as an ASN.1 Element.
 */
export
function _encode_EstablishmentStatus (value: EstablishmentStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EstablishmentStatus) { _cached_encoder_for_EstablishmentStatus = $._encodeEnumerated; }
    return _cached_encoder_for_EstablishmentStatus(value, elGetter);
}


/* eslint-enable */
