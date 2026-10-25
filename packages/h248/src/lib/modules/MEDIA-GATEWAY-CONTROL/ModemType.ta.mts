/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
const _enum_for_ModemType = {
    /**
     * ITU-T V.18 (clause 7.1.2). The Modem descriptor itself is deprecated.
     */
    v18: 0,
    /**
     * ITU-T V.22 (clause 7.1.2).
     */
    v22: 1,
    /**
     * ITU-T V.22 bis (clause 7.1.2).
     */
    v22bis: 2,
    /**
     * ITU-T V.32 (clause 7.1.2).
     */
    v32: 3,
    /**
     * ITU-T V.32 bis (clause 7.1.2).
     */
    v32bis: 4,
    /**
     * ITU-T V.34 (clause 7.1.2).
     */
    v34: 5,
    /**
     * ITU-T V.90 (clause 7.1.2).
     */
    v90: 6,
    /**
     * ITU-T V.91 (clause 7.1.2).
     */
    v91: 7,
    /**
     * Synchronous ISDN modem (clause 7.1.2).
     */
    synchISDN: 8,
} as const;

export type _enum_for_ModemType = (typeof _enum_for_ModemType)[keyof typeof _enum_for_ModemType];

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
const ModemType_v18: 0 = _enum_for_ModemType.v18; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v18
 * @constant
 * @type {number}
 */
export
const v18: 0 = ModemType_v18; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ModemType_v22: 1 = _enum_for_ModemType.v22; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v22
 * @constant
 * @type {number}
 */
export
const v22: 1 = ModemType_v22; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ModemType_v22bis: 2 = _enum_for_ModemType.v22bis; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v22bis
 * @constant
 * @type {number}
 */
export
const v22bis: 2 = ModemType_v22bis; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ModemType_v32: 3 = _enum_for_ModemType.v32; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v32
 * @constant
 * @type {number}
 */
export
const v32: 3 = ModemType_v32; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ModemType_v32bis: 4 = _enum_for_ModemType.v32bis; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v32bis
 * @constant
 * @type {number}
 */
export
const v32bis: 4 = ModemType_v32bis; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ModemType_v34: 5 = _enum_for_ModemType.v34; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v34
 * @constant
 * @type {number}
 */
export
const v34: 5 = ModemType_v34; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ModemType_v90: 6 = _enum_for_ModemType.v90; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v90
 * @constant
 * @type {number}
 */
export
const v90: 6 = ModemType_v90; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ModemType_v91: 7 = _enum_for_ModemType.v91; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v91
 * @constant
 * @type {number}
 */
export
const v91: 7 = ModemType_v91; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ModemType_synchISDN: 8 = _enum_for_ModemType.synchISDN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary synchISDN
 * @constant
 * @type {number}
 */
export
const synchISDN: 8 = ModemType_synchISDN; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ModemType: $.ASN1Decoder<ModemType> = $._decodeEnumerated as $.ASN1Decoder<ModemType>;
export const _encode_ModemType: $.ASN1Encoder<ModemType> = $._encodeEnumerated as $.ASN1Encoder<ModemType>;


/* eslint-enable */
