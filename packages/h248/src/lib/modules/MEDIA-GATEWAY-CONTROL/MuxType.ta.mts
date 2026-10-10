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
export const _decode_MuxType = $._decodeEnumerated;
export const _encode_MuxType = $._encodeEnumerated;


/* eslint-enable */
