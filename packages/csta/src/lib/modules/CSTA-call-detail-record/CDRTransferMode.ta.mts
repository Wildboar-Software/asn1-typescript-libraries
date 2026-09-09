/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CDRTransferMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDRTransferMode  ::=  ENUMERATED
 * {     transferAtEndOfCall             (0),
 *     transferOnRequest             (1),
 *     transferOnThresholdReached         (2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CDRTransferMode {
    transferAtEndOfCall = 0,
    transferOnRequest = 1,
    transferOnThresholdReached = 2,
}

/**
 * @summary CDRTransferMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDRTransferMode  ::=  ENUMERATED
 * {     transferAtEndOfCall             (0),
 *     transferOnRequest             (1),
 *     transferOnThresholdReached         (2) }
 * ```
 * 
 * @enum {number}
 */
export
type CDRTransferMode = _enum_for_CDRTransferMode;

/**
 * @summary CDRTransferMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDRTransferMode  ::=  ENUMERATED
 * {     transferAtEndOfCall             (0),
 *     transferOnRequest             (1),
 *     transferOnThresholdReached         (2) }
 * ```
 * 
 * @enum {number}
 */
export
const CDRTransferMode = _enum_for_CDRTransferMode;

/**
 * @summary CDRTransferMode_transferAtEndOfCall
 * @constant
 * @type {number}
 */
export
const CDRTransferMode_transferAtEndOfCall: CDRTransferMode = CDRTransferMode.transferAtEndOfCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transferAtEndOfCall
 * @constant
 * @type {number}
 */
export
const transferAtEndOfCall: CDRTransferMode = CDRTransferMode.transferAtEndOfCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CDRTransferMode_transferOnRequest
 * @constant
 * @type {number}
 */
export
const CDRTransferMode_transferOnRequest: CDRTransferMode = CDRTransferMode.transferOnRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transferOnRequest
 * @constant
 * @type {number}
 */
export
const transferOnRequest: CDRTransferMode = CDRTransferMode.transferOnRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CDRTransferMode_transferOnThresholdReached
 * @constant
 * @type {number}
 */
export
const CDRTransferMode_transferOnThresholdReached: CDRTransferMode = CDRTransferMode.transferOnThresholdReached; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transferOnThresholdReached
 * @constant
 * @type {number}
 */
export
const transferOnThresholdReached: CDRTransferMode = CDRTransferMode.transferOnThresholdReached; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CDRTransferMode: $.ASN1Decoder<CDRTransferMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CDRTransferMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CDRTransferMode (el: _Element): CDRTransferMode {
    if (!_cached_decoder_for_CDRTransferMode) { _cached_decoder_for_CDRTransferMode = $._decodeEnumerated; }
    return _cached_decoder_for_CDRTransferMode(el);
}

let _cached_encoder_for_CDRTransferMode: $.ASN1Encoder<CDRTransferMode> | null = null;

/**
 * @summary Encodes a(n) CDRTransferMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CDRTransferMode, encoded as an ASN.1 Element.
 */
export
function _encode_CDRTransferMode (value: CDRTransferMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CDRTransferMode) { _cached_encoder_for_CDRTransferMode = $._encodeEnumerated; }
    return _cached_encoder_for_CDRTransferMode(value, elGetter);
}


/* eslint-enable */
