/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RCSSessionLeg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionLeg  ::=  ENUMERATED
 * {
 *     remoteLeg(1),
 *     localLeg(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RCSSessionLeg {
    remoteLeg = 1,
    localLeg = 2,
}

/**
 * @summary RCSSessionLeg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionLeg  ::=  ENUMERATED
 * {
 *     remoteLeg(1),
 *     localLeg(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RCSSessionLeg = _enum_for_RCSSessionLeg;

/**
 * @summary RCSSessionLeg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionLeg  ::=  ENUMERATED
 * {
 *     remoteLeg(1),
 *     localLeg(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RCSSessionLeg = _enum_for_RCSSessionLeg;

/**
 * @summary RCSSessionLeg_remoteLeg
 * @constant
 * @type {number}
 */
export
const RCSSessionLeg_remoteLeg: RCSSessionLeg = RCSSessionLeg.remoteLeg; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary remoteLeg
 * @constant
 * @type {number}
 */
export
const remoteLeg: RCSSessionLeg = RCSSessionLeg.remoteLeg; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionLeg_localLeg
 * @constant
 * @type {number}
 */
export
const RCSSessionLeg_localLeg: RCSSessionLeg = RCSSessionLeg.localLeg; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary localLeg
 * @constant
 * @type {number}
 */
export
const localLeg: RCSSessionLeg = RCSSessionLeg.localLeg; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RCSSessionLeg: $.ASN1Decoder<RCSSessionLeg> = $._decodeEnumerated;
export const _encode_RCSSessionLeg: $.ASN1Encoder<RCSSessionLeg> = $._encodeEnumerated;


/* eslint-enable */
