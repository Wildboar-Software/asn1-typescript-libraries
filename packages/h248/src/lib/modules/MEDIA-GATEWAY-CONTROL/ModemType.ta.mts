/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ModemType {
    /**
     * ITU-T V.18 (clause 7.1.2). The Modem descriptor itself is deprecated.
     */
    v18 = 0,
    /**
     * ITU-T V.22 (clause 7.1.2).
     */
    v22 = 1,
    /**
     * ITU-T V.22 bis (clause 7.1.2).
     */
    v22bis = 2,
    /**
     * ITU-T V.32 (clause 7.1.2).
     */
    v32 = 3,
    /**
     * ITU-T V.32 bis (clause 7.1.2).
     */
    v32bis = 4,
    /**
     * ITU-T V.34 (clause 7.1.2).
     */
    v34 = 5,
    /**
     * ITU-T V.90 (clause 7.1.2).
     */
    v90 = 6,
    /**
     * ITU-T V.91 (clause 7.1.2).
     */
    v91 = 7,
    /**
     * Synchronous ISDN modem (clause 7.1.2).
     */
    synchISDN = 8,
}

/**
 * @summary ModemType
 * @description
 * 
 * One modem type in a deprecated Modem descriptor (clause 7.1.2).
 *
 * V.18, V.22, V.22 bis, V.32, V.32 bis, V.34, V.90, V.91, and synchronous ISDN.
 * Extensions use the extensible enumeration.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModemType  ::=  ENUMERATED
 *     {
 *         v18(0),
 *         v22(1),
 *         v22bis(2),
 *         v32(3),
 *         v32bis(4),
 *         v34(5),
 *         v90(6),
 *         v91(7),
 *         synchISDN(8),
 *         ...
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type ModemType = _enum_for_ModemType | ENUMERATED;

/**
 * @summary ModemType_v18
 * @description
 *
 * ITU-T V.18 (clause 7.1.2). The Modem descriptor itself is deprecated.
 *
 * @constant
 * @type {number}
 */
export
const ModemType_v18 = _enum_for_ModemType.v18 satisfies ModemType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v18
 * @constant
 * @type {number}
 */
export
const v18 = ModemType_v18 satisfies ModemType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ModemType_v22
 * @description
 *
 * ITU-T V.22 (clause 7.1.2).
 *
 * @constant
 * @type {number}
 */
export
const ModemType_v22 = _enum_for_ModemType.v22 satisfies ModemType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v22
 * @constant
 * @type {number}
 */
export
const v22 = ModemType_v22 satisfies ModemType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ModemType_v22bis
 * @description
 *
 * ITU-T V.22 bis (clause 7.1.2).
 *
 * @constant
 * @type {number}
 */
export
const ModemType_v22bis = _enum_for_ModemType.v22bis satisfies ModemType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v22bis
 * @constant
 * @type {number}
 */
export
const v22bis = ModemType_v22bis satisfies ModemType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ModemType_v32
 * @description
 *
 * ITU-T V.32 (clause 7.1.2).
 *
 * @constant
 * @type {number}
 */
export
const ModemType_v32 = _enum_for_ModemType.v32 satisfies ModemType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v32
 * @constant
 * @type {number}
 */
export
const v32 = ModemType_v32 satisfies ModemType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ModemType_v32bis
 * @description
 *
 * ITU-T V.32 bis (clause 7.1.2).
 *
 * @constant
 * @type {number}
 */
export
const ModemType_v32bis = _enum_for_ModemType.v32bis satisfies ModemType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v32bis
 * @constant
 * @type {number}
 */
export
const v32bis = ModemType_v32bis satisfies ModemType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ModemType_v34
 * @description
 *
 * ITU-T V.34 (clause 7.1.2).
 *
 * @constant
 * @type {number}
 */
export
const ModemType_v34 = _enum_for_ModemType.v34 satisfies ModemType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v34
 * @constant
 * @type {number}
 */
export
const v34 = ModemType_v34 satisfies ModemType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ModemType_v90
 * @description
 *
 * ITU-T V.90 (clause 7.1.2).
 *
 * @constant
 * @type {number}
 */
export
const ModemType_v90 = _enum_for_ModemType.v90 satisfies ModemType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v90
 * @constant
 * @type {number}
 */
export
const v90 = ModemType_v90 satisfies ModemType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ModemType_v91
 * @description
 *
 * ITU-T V.91 (clause 7.1.2).
 *
 * @constant
 * @type {number}
 */
export
const ModemType_v91 = _enum_for_ModemType.v91 satisfies ModemType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v91
 * @constant
 * @type {number}
 */
export
const v91 = ModemType_v91 satisfies ModemType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ModemType_synchISDN
 * @description
 *
 * Synchronous ISDN modem (clause 7.1.2).
 *
 * @constant
 * @type {number}
 */
export
const ModemType_synchISDN = _enum_for_ModemType.synchISDN satisfies ModemType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary synchISDN
 * @constant
 * @type {number}
 */
export
const synchISDN = ModemType_synchISDN satisfies ModemType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ModemType = $._decodeEnumerated;
export const _encode_ModemType = $._encodeEnumerated;


/* eslint-enable */
