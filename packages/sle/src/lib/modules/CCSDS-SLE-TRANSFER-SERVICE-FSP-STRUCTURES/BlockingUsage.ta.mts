/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BlockingUsage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BlockingUsage            ::=    INTEGER
 * {  permitted               (0)
 * ,  notPermitted            (1)
 * }
 * ```
 */
export
type BlockingUsage = INTEGER;

/**
 * @summary BlockingUsage_permitted
 * @constant
 * @type {number}
 */
export
const BlockingUsage_permitted: BlockingUsage = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BlockingUsage_permitted
 * @constant
 * @type {number}
 */
export
const permitted: BlockingUsage = BlockingUsage_permitted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BlockingUsage_notPermitted
 * @constant
 * @type {number}
 */
export
const BlockingUsage_notPermitted: BlockingUsage = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BlockingUsage_notPermitted
 * @constant
 * @type {number}
 */
export
const notPermitted: BlockingUsage = BlockingUsage_notPermitted; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_BlockingUsage: $.ASN1Decoder<BlockingUsage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BlockingUsage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BlockingUsage (el: _Element): BlockingUsage {
    if (!_cached_decoder_for_BlockingUsage) { _cached_decoder_for_BlockingUsage = $._decodeInteger; }
    return _cached_decoder_for_BlockingUsage(el);
}

let _cached_encoder_for_BlockingUsage: $.ASN1Encoder<BlockingUsage> | null = null;

/**
 * @summary Encodes a(n) BlockingUsage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BlockingUsage, encoded as an ASN.1 Element.
 */
export
function _encode_BlockingUsage (value: BlockingUsage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BlockingUsage) { _cached_encoder_for_BlockingUsage = $._encodeInteger; }
    return _cached_encoder_for_BlockingUsage(value, elGetter);
}


/* eslint-enable */
