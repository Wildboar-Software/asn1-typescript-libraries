/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMStatusExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStatusExtension  ::=  ENUMERATED
 * {
 *     rejectionByMMSRecipient(0),
 *     rejectionByOtherRS(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMStatusExtension {
    rejectionByMMSRecipient = 0,
    rejectionByOtherRS = 1,
}

/**
 * @summary MMStatusExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStatusExtension  ::=  ENUMERATED
 * {
 *     rejectionByMMSRecipient(0),
 *     rejectionByOtherRS(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMStatusExtension = _enum_for_MMStatusExtension;

/**
 * @summary MMStatusExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStatusExtension  ::=  ENUMERATED
 * {
 *     rejectionByMMSRecipient(0),
 *     rejectionByOtherRS(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMStatusExtension = _enum_for_MMStatusExtension;

/**
 * @summary MMStatusExtension_rejectionByMMSRecipient
 * @constant
 * @type {number}
 */
export
const MMStatusExtension_rejectionByMMSRecipient: MMStatusExtension = MMStatusExtension.rejectionByMMSRecipient; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejectionByMMSRecipient
 * @constant
 * @type {number}
 */
export
const rejectionByMMSRecipient: MMStatusExtension = MMStatusExtension.rejectionByMMSRecipient; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatusExtension_rejectionByOtherRS
 * @constant
 * @type {number}
 */
export
const MMStatusExtension_rejectionByOtherRS: MMStatusExtension = MMStatusExtension.rejectionByOtherRS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejectionByOtherRS
 * @constant
 * @type {number}
 */
export
const rejectionByOtherRS: MMStatusExtension = MMStatusExtension.rejectionByOtherRS; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MMStatusExtension: $.ASN1Decoder<MMStatusExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMStatusExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMStatusExtension (el: _Element): MMStatusExtension {
    if (!_cached_decoder_for_MMStatusExtension) { _cached_decoder_for_MMStatusExtension = $._decodeEnumerated; }
    return _cached_decoder_for_MMStatusExtension(el);
}

let _cached_encoder_for_MMStatusExtension: $.ASN1Encoder<MMStatusExtension> | null = null;

/**
 * @summary Encodes a(n) MMStatusExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMStatusExtension, encoded as an ASN.1 Element.
 */
export
function _encode_MMStatusExtension (value: MMStatusExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMStatusExtension) { _cached_encoder_for_MMStatusExtension = $._encodeEnumerated; }
    return _cached_encoder_for_MMStatusExtension(value, elGetter);
}


/* eslint-enable */
