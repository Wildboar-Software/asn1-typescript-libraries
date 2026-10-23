/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary DiversionType
 * @description
 *
 * Which diversion service was invoked at the Served User PINX (ECMA-212
 * §6.9.4.1). The `aocFinal` sent back to the diverting user uses the
 * `FinalBillingId` of the same name (§6.6.2.4.1). Call transfer is not a
 * diversion type; it uses `aocComplete`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiversionType  ::=  ENUMERATED {
 *     callForwardingUnconditional(0),
 *     callForwardingBusy(1),
 *     callForwardingNoReply(2),
 *     callDeflection(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DiversionType {
    callForwardingUnconditional = 0,
    callForwardingBusy = 1,
    callForwardingNoReply = 2,
    callDeflection = 3,
}

/**
 * @summary DiversionType
 * @description
 *
 * Which diversion service was invoked at the Served User PINX (ECMA-212
 * §6.9.4.1). The `aocFinal` sent back to the diverting user uses the
 * `FinalBillingId` of the same name (§6.6.2.4.1). Call transfer is not a
 * diversion type; it uses `aocComplete`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiversionType  ::=  ENUMERATED {
 *     callForwardingUnconditional(0),
 *     callForwardingBusy(1),
 *     callForwardingNoReply(2),
 *     callDeflection(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type DiversionType = _enum_for_DiversionType;

/**
 * @summary DiversionType
 * @description
 *
 * Which diversion service was invoked at the Served User PINX (ECMA-212
 * §6.9.4.1). The `aocFinal` sent back to the diverting user uses the
 * `FinalBillingId` of the same name (§6.6.2.4.1). Call transfer is not a
 * diversion type; it uses `aocComplete`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiversionType  ::=  ENUMERATED {
 *     callForwardingUnconditional(0),
 *     callForwardingBusy(1),
 *     callForwardingNoReply(2),
 *     callDeflection(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const DiversionType = _enum_for_DiversionType;

/**
 * @summary DiversionType_callForwardingUnconditional
 * @description
 *
 * Call forwarding unconditional, as invoked at the Served User PINX (ECMA-212
 * §6.9.4.1).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const DiversionType_callForwardingUnconditional: DiversionType = DiversionType.callForwardingUnconditional; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardingUnconditional
 * @description Alias of {@link DiversionType_callForwardingUnconditional}.
 * @constant
 * @type {number}
 */
export
const callForwardingUnconditional: DiversionType = DiversionType.callForwardingUnconditional; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DiversionType_callForwardingBusy
 * @description
 *
 * Call forwarding busy, as invoked at the Served User PINX (ECMA-212 §6.9.4.1).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const DiversionType_callForwardingBusy: DiversionType = DiversionType.callForwardingBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardingBusy
 * @description Alias of {@link DiversionType_callForwardingBusy}.
 * @constant
 * @type {number}
 */
export
const callForwardingBusy: DiversionType = DiversionType.callForwardingBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DiversionType_callForwardingNoReply
 * @description
 *
 * Call forwarding no reply, as invoked at the Served User PINX (ECMA-212
 * §6.9.4.1).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const DiversionType_callForwardingNoReply: DiversionType = DiversionType.callForwardingNoReply; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardingNoReply
 * @description Alias of {@link DiversionType_callForwardingNoReply}.
 * @constant
 * @type {number}
 */
export
const callForwardingNoReply: DiversionType = DiversionType.callForwardingNoReply; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DiversionType_callDeflection
 * @description
 *
 * Call deflection, as invoked at the Served User PINX (ECMA-212 §6.9.4.1).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const DiversionType_callDeflection: DiversionType = DiversionType.callDeflection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callDeflection
 * @description Alias of {@link DiversionType_callDeflection}.
 * @constant
 * @type {number}
 */
export
const callDeflection: DiversionType = DiversionType.callDeflection; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_DiversionType: $.ASN1Decoder<DiversionType> = $._decodeEnumerated;

export
const _encode_DiversionType: $.ASN1Encoder<DiversionType> = $._encodeEnumerated;

/* eslint-enable */
