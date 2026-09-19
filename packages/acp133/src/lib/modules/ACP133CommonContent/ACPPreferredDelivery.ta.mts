/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ACPPreferredDelivery
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACPPreferredDelivery  ::=  ENUMERATED { smtp(0), acp127(1), mhs(2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ACPPreferredDelivery {
    smtp = 0,
    acp127 = 1,
    mhs = 2,
}

/**
 * @summary ACPPreferredDelivery
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACPPreferredDelivery  ::=  ENUMERATED { smtp(0), acp127(1), mhs(2) }
 * ```
 * 
 * @enum {number}
 */
export
type ACPPreferredDelivery = _enum_for_ACPPreferredDelivery;

/**
 * @summary ACPPreferredDelivery
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACPPreferredDelivery  ::=  ENUMERATED { smtp(0), acp127(1), mhs(2) }
 * ```
 * 
 * @enum {number}
 */
export
const ACPPreferredDelivery = _enum_for_ACPPreferredDelivery;

/**
 * @summary ACPPreferredDelivery_smtp
 * @constant
 * @type {number}
 */
export
const ACPPreferredDelivery_smtp: ACPPreferredDelivery = ACPPreferredDelivery.smtp; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary smtp
 * @constant
 * @type {number}
 */
export
const smtp: ACPPreferredDelivery = ACPPreferredDelivery.smtp; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACPPreferredDelivery_acp127
 * @constant
 * @type {number}
 */
export
const ACPPreferredDelivery_acp127: ACPPreferredDelivery = ACPPreferredDelivery.acp127; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary acp127
 * @constant
 * @type {number}
 */
export
const acp127: ACPPreferredDelivery = ACPPreferredDelivery.acp127; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACPPreferredDelivery_mhs
 * @constant
 * @type {number}
 */
export
const ACPPreferredDelivery_mhs: ACPPreferredDelivery = ACPPreferredDelivery.mhs; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mhs
 * @constant
 * @type {number}
 */
export
const mhs: ACPPreferredDelivery = ACPPreferredDelivery.mhs; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ACPPreferredDelivery: $.ASN1Decoder<ACPPreferredDelivery> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACPPreferredDelivery
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ACPPreferredDelivery (el: _Element): ACPPreferredDelivery {
    if (!_cached_decoder_for_ACPPreferredDelivery) { _cached_decoder_for_ACPPreferredDelivery = $._decodeEnumerated; }
    return _cached_decoder_for_ACPPreferredDelivery(el);
}

let _cached_encoder_for_ACPPreferredDelivery: $.ASN1Encoder<ACPPreferredDelivery> | null = null;

/**
 * @summary Encodes a(n) ACPPreferredDelivery into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACPPreferredDelivery, encoded as an ASN.1 Element.
 */
export
function _encode_ACPPreferredDelivery (value: ACPPreferredDelivery, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ACPPreferredDelivery) { _cached_encoder_for_ACPPreferredDelivery = $._encodeEnumerated; }
    return _cached_encoder_for_ACPPreferredDelivery(value, elGetter);
}


/* eslint-enable */
