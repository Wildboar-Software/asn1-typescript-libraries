/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSInterworkingIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSInterworkingIndication  ::=  ENUMERATED
 * {
 *     none(1),
 *     withN26(2),
 *     withoutN26(3),
 *     iwkNon3GPP(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EPSInterworkingIndication {
    none = 1,
    withN26 = 2,
    withoutN26 = 3,
    iwkNon3GPP = 4,
}

/**
 * @summary EPSInterworkingIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSInterworkingIndication  ::=  ENUMERATED
 * {
 *     none(1),
 *     withN26(2),
 *     withoutN26(3),
 *     iwkNon3GPP(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EPSInterworkingIndication = _enum_for_EPSInterworkingIndication;

/**
 * @summary EPSInterworkingIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSInterworkingIndication  ::=  ENUMERATED
 * {
 *     none(1),
 *     withN26(2),
 *     withoutN26(3),
 *     iwkNon3GPP(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EPSInterworkingIndication = _enum_for_EPSInterworkingIndication;

/**
 * @summary EPSInterworkingIndication_none
 * @constant
 * @type {number}
 */
export
const EPSInterworkingIndication_none: EPSInterworkingIndication = EPSInterworkingIndication.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: EPSInterworkingIndication = EPSInterworkingIndication.none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSInterworkingIndication_withN26
 * @constant
 * @type {number}
 */
export
const EPSInterworkingIndication_withN26: EPSInterworkingIndication = EPSInterworkingIndication.withN26; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary withN26
 * @constant
 * @type {number}
 */
export
const withN26: EPSInterworkingIndication = EPSInterworkingIndication.withN26; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSInterworkingIndication_withoutN26
 * @constant
 * @type {number}
 */
export
const EPSInterworkingIndication_withoutN26: EPSInterworkingIndication = EPSInterworkingIndication.withoutN26; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary withoutN26
 * @constant
 * @type {number}
 */
export
const withoutN26: EPSInterworkingIndication = EPSInterworkingIndication.withoutN26; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSInterworkingIndication_iwkNon3GPP
 * @constant
 * @type {number}
 */
export
const EPSInterworkingIndication_iwkNon3GPP: EPSInterworkingIndication = EPSInterworkingIndication.iwkNon3GPP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iwkNon3GPP
 * @constant
 * @type {number}
 */
export
const iwkNon3GPP: EPSInterworkingIndication = EPSInterworkingIndication.iwkNon3GPP; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_EPSInterworkingIndication: $.ASN1Decoder<EPSInterworkingIndication> = $._decodeEnumerated;

export const _encode_EPSInterworkingIndication: $.ASN1Encoder<EPSInterworkingIndication> = $._encodeEnumerated;


/* eslint-enable */
