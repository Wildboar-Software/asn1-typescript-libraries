/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_MuxType {
    h221 = 0,
    h223 = 1,
    h226 = 2,
    v76 = 3,
    nx64k = 4,
}

/**
 * @summary MuxType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MuxType  ::=  ENUMERATED
 *     {
 *         h221(0),
 *         h223(1),
 *         h226(2),
 *         v76(3),
 *         ...,
 *         nx64k(4)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type MuxType = _enum_for_MuxType | ENUMERATED;

/**
 * @summary MuxType_h221
 * @constant
 * @type {number}
 */
export
const MuxType_h221: MuxType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary h221
 * @constant
 * @type {number}
 */
export
const h221: MuxType = MuxType_h221; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MuxType_h223
 * @constant
 * @type {number}
 */
export
const MuxType_h223: MuxType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary h223
 * @constant
 * @type {number}
 */
export
const h223: MuxType = MuxType_h223; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MuxType_h226
 * @constant
 * @type {number}
 */
export
const MuxType_h226: MuxType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary h226
 * @constant
 * @type {number}
 */
export
const h226: MuxType = MuxType_h226; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MuxType_v76
 * @constant
 * @type {number}
 */
export
const MuxType_v76: MuxType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v76
 * @constant
 * @type {number}
 */
export
const v76: MuxType = MuxType_v76; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MuxType_nx64k
 * @constant
 * @type {number}
 */
export
const MuxType_nx64k: MuxType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nx64k
 * @constant
 * @type {number}
 */
export
const nx64k: MuxType = MuxType_nx64k; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MuxType: $.ASN1Decoder<MuxType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MuxType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MuxType (el: _Element): MuxType {
    if (!_cached_decoder_for_MuxType) { _cached_decoder_for_MuxType = $._decodeEnumerated; }
    return _cached_decoder_for_MuxType(el);
}

let _cached_encoder_for_MuxType: $.ASN1Encoder<MuxType> | null = null;

/**
 * @summary Encodes a(n) MuxType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MuxType, encoded as an ASN.1 Element.
 */
export
function _encode_MuxType (value: MuxType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MuxType) { _cached_encoder_for_MuxType = $._encodeEnumerated; }
    return _cached_encoder_for_MuxType(value, elGetter);
}


/* eslint-enable */
