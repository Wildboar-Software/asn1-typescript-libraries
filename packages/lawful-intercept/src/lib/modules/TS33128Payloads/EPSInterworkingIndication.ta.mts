/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSInterworkingIndication
 * @description
 * 
 * Indicates whether and how the PDU Session may be moved to EPS. Shall be
 * derived from the EpsInterworkingIndication associated with the PDU Session at
 * the SMF+PGW-C (see TS 29.502 [16] clause 6.1.6.3.11).
 *
 * 3GPP TS 33.128, clause 6.2.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Indicates whether and how the PDU Session may be moved to EPS. Shall be
 * derived from the EpsInterworkingIndication associated with the PDU Session at
 * the SMF+PGW-C (see TS 29.502 [16] clause 6.1.6.3.11).
 *
 * 3GPP TS 33.128, clause 6.2.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Indicates whether and how the PDU Session may be moved to EPS. Shall be
 * derived from the EpsInterworkingIndication associated with the PDU Session at
 * the SMF+PGW-C (see TS 29.502 [16] clause 6.1.6.3.11).
 *
 * 3GPP TS 33.128, clause 6.2.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
const EPSInterworkingIndication: typeof _enum_for_EPSInterworkingIndication = _enum_for_EPSInterworkingIndication;

/**
 * @summary EPSInterworkingIndication_none
 * @constant
 * @type {number}
 */
export
const EPSInterworkingIndication_none: _enum_for_EPSInterworkingIndication.none = EPSInterworkingIndication.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: _enum_for_EPSInterworkingIndication.none = EPSInterworkingIndication.none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSInterworkingIndication_withN26
 * @constant
 * @type {number}
 */
export
const EPSInterworkingIndication_withN26: _enum_for_EPSInterworkingIndication.withN26 = EPSInterworkingIndication.withN26; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary withN26
 * @constant
 * @type {number}
 */
export
const withN26: _enum_for_EPSInterworkingIndication.withN26 = EPSInterworkingIndication.withN26; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSInterworkingIndication_withoutN26
 * @constant
 * @type {number}
 */
export
const EPSInterworkingIndication_withoutN26: _enum_for_EPSInterworkingIndication.withoutN26 = EPSInterworkingIndication.withoutN26; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary withoutN26
 * @constant
 * @type {number}
 */
export
const withoutN26: _enum_for_EPSInterworkingIndication.withoutN26 = EPSInterworkingIndication.withoutN26; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSInterworkingIndication_iwkNon3GPP
 * @constant
 * @type {number}
 */
export
const EPSInterworkingIndication_iwkNon3GPP: _enum_for_EPSInterworkingIndication.iwkNon3GPP = EPSInterworkingIndication.iwkNon3GPP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iwkNon3GPP
 * @constant
 * @type {number}
 */
export
const iwkNon3GPP: _enum_for_EPSInterworkingIndication.iwkNon3GPP = EPSInterworkingIndication.iwkNon3GPP; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EPSInterworkingIndication: $.ASN1Decoder<EPSInterworkingIndication> = $._decodeEnumerated;
export const _encode_EPSInterworkingIndication: $.ASN1Encoder<EPSInterworkingIndication> = $._encodeEnumerated;


/* eslint-enable */
