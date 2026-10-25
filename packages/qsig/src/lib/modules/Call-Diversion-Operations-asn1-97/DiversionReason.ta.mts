/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary DiversionReason
 * @description
 *
 * Why a call was diverted (ECMA-174 §4.2.9, §6.3.1). `unknown` is used only
 * when the reason arrives from another network during interworking, and is not
 * sent as `rerouteingReason` (§6.5.3.1.5). The Rerouteing PINX uses the reason
 * to choose the CFU/CFB procedure or the CFNR procedure (§6.5.4.1). There is no
 * separate value for Call Deflection: immediate deflection uses the CFU
 * protocol and deflection from alert uses the CFNR protocol (§6.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiversionReason  ::=  ENUMERATED {
 *     unknown(0),
 *     cfu(1),
 *     cfb(2),
 *     cfnr(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DiversionReason {
    unknown = 0,
    cfu = 1,
    cfb = 2,
    cfnr = 3,
}

/**
 * @summary DiversionReason
 * @description
 *
 * Why a call was diverted (ECMA-174 §4.2.9, §6.3.1). `unknown` is used only
 * when the reason arrives from another network during interworking, and is not
 * sent as `rerouteingReason` (§6.5.3.1.5). The Rerouteing PINX uses the reason
 * to choose the CFU/CFB procedure or the CFNR procedure (§6.5.4.1). There is no
 * separate value for Call Deflection: immediate deflection uses the CFU
 * protocol and deflection from alert uses the CFNR protocol (§6.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiversionReason  ::=  ENUMERATED {
 *     unknown(0),
 *     cfu(1),
 *     cfb(2),
 *     cfnr(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type DiversionReason = _enum_for_DiversionReason;

/**
 * @summary DiversionReason
 * @description
 *
 * Why a call was diverted (ECMA-174 §4.2.9, §6.3.1). `unknown` is used only
 * when the reason arrives from another network during interworking, and is not
 * sent as `rerouteingReason` (§6.5.3.1.5). The Rerouteing PINX uses the reason
 * to choose the CFU/CFB procedure or the CFNR procedure (§6.5.4.1). There is no
 * separate value for Call Deflection: immediate deflection uses the CFU
 * protocol and deflection from alert uses the CFNR protocol (§6.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiversionReason  ::=  ENUMERATED {
 *     unknown(0),
 *     cfu(1),
 *     cfb(2),
 *     cfnr(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const DiversionReason = _enum_for_DiversionReason;

/**
 * @summary DiversionReason_unknown
 * @description
 *
 * Reason received from another network during interworking (ECMA-174 §6.3.1).
 * Not sent as `rerouteingReason` (§6.5.3.1.5).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 */
export
const DiversionReason_unknown = DiversionReason.unknown satisfies DiversionReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description Alias of {@link DiversionReason_unknown}.
 * @constant
 * @type {number}
 */
export
const unknown = DiversionReason.unknown satisfies DiversionReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DiversionReason_cfu
 * @description
 *
 * Call Forwarding Unconditional (ECMA-173 §6.1.1). Calls to the served user are
 * redirected regardless of that user's status. Call Deflection Immediate uses
 * the CFU protocol; there is no separate reason value (ECMA-174 §6.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
 */
export
const DiversionReason_cfu = DiversionReason.cfu satisfies DiversionReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cfu
 * @description Alias of {@link DiversionReason_cfu}.
 * @constant
 * @type {number}
 */
export
const cfu = DiversionReason.cfu satisfies DiversionReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DiversionReason_cfb
 * @description
 *
 * Call Forwarding Busy (ECMA-173 §7.1.1). Calls that meet busy are redirected.
 * A further CFB is not notified to the calling user if diversion was already
 * indicated (ECMA-174 §6.5.1.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
 */
export
const DiversionReason_cfb = DiversionReason.cfb satisfies DiversionReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cfb
 * @description Alias of {@link DiversionReason_cfb}.
 * @constant
 * @type {number}
 */
export
const cfb = DiversionReason.cfb satisfies DiversionReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DiversionReason_cfnr
 * @description
 *
 * Call Forwarding No Reply (ECMA-173 §8.1.1). The call is redirected if it is
 * not answered within a predefined time. The served user can still answer until
 * the diverted-to user alerts (§8.2.2.2). Call Deflection from Alert uses the
 * CFNR protocol; there is no separate reason value (ECMA-174 §6.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
 */
export
const DiversionReason_cfnr = DiversionReason.cfnr satisfies DiversionReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cfnr
 * @description Alias of {@link DiversionReason_cfnr}.
 * @constant
 * @type {number}
 */
export
const cfnr = DiversionReason.cfnr satisfies DiversionReason; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_DiversionReason: $.ASN1Decoder<DiversionReason> = $._decodeEnumerated;

export
const _encode_DiversionReason: $.ASN1Encoder<DiversionReason> = $._encodeEnumerated;

/* eslint-enable */
