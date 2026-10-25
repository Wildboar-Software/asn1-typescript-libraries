/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_MuxType {
    /**
     * ITU-T H.221 frame multiplex (clause 7.1.3).
     */
    h221 = 0,
    /**
     * ITU-T H.223 multiplex (clause 7.1.3).
     */
    h223 = 1,
    /**
     * ITU-T H.226 multiplex (clause 7.1.3).
     */
    h226 = 2,
    /**
     * ITU-T V.76 multiplex (clause 7.1.3).
     */
    v76 = 3,
    /**
     * N x 64 kbit/s service. One wideband stream toward the context; each
     * bearer termination is 64 kbit/s (clause 7.1.3).
     */
    nx64k = 4,
}

/**
 * @summary MuxType
 * @description
 * 
 * Multiplex carried by a multiplexing termination (ITU-T Rec. H.248.1 (03/2013)
 * clause 7.1.3).
 *
 * H.221, H.223, and H.226 are the framed multimedia multiplexes named in the
 * connection model. V.76 is the LAPM-based multiplex of ITU-T V.76. Nx64K is
 * the N x 64 kbit/s service: one wideband stream on the context side, and
 * bearer terminations of 64 kbit/s each.
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
 * @description
 *
 * ITU-T H.221 frame multiplex (clause 7.1.3).
 *
 * @constant
 * @type {number}
 */
export
const MuxType_h221 = _enum_for_MuxType.h221; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary h221
 * @constant
 * @type {number}
 */
export
const h221 = MuxType_h221; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MuxType_h223
 * @description
 *
 * ITU-T H.223 multiplex (clause 7.1.3).
 *
 * @constant
 * @type {number}
 */
export
const MuxType_h223 = _enum_for_MuxType.h223; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary h223
 * @constant
 * @type {number}
 */
export
const h223 = MuxType_h223; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MuxType_h226
 * @description
 *
 * ITU-T H.226 multiplex (clause 7.1.3).
 *
 * @constant
 * @type {number}
 */
export
const MuxType_h226 = _enum_for_MuxType.h226; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary h226
 * @constant
 * @type {number}
 */
export
const h226 = MuxType_h226; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MuxType_v76
 * @description
 *
 * ITU-T V.76 multiplex (clause 7.1.3).
 *
 * @constant
 * @type {number}
 */
export
const MuxType_v76 = _enum_for_MuxType.v76; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v76
 * @constant
 * @type {number}
 */
export
const v76 = MuxType_v76; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MuxType_nx64k
 * @description
 *
 * N x 64 kbit/s service. One wideband stream toward the context; each bearer
 * termination is 64 kbit/s (clause 7.1.3).
 *
 * @constant
 * @type {number}
 */
export
const MuxType_nx64k = _enum_for_MuxType.nx64k; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nx64k
 * @constant
 * @type {number}
 */
export
const nx64k = MuxType_nx64k; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MuxType = $._decodeEnumerated;
export const _encode_MuxType = $._encodeEnumerated;


/* eslint-enable */
