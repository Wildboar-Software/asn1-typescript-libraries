/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EndDesignation
 * @description
 *
 * Which transferred user's PINX receives this `callTransferComplete`.
 * The two ends get different values so later services can tell them
 * apart. `primaryEnd` is the Primary PINX (User B's end).
 * `secondaryEnd` is the Secondary PINX (User C's end).
 * ECMA-178 §6.5.1.1, §6.5.2.1, §6.5.3.1; ECMA-177 §4.2.5, §4.2.6,
 * §7.2.1.2.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-177/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EndDesignation  ::=  ENUMERATED {
 *     primaryEnd(0),
 *     secondaryEnd(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EndDesignation {
    primaryEnd = 0,
    secondaryEnd = 1,
}

/**
 * @summary EndDesignation
 * @description
 *
 * Which transferred user's PINX receives this `callTransferComplete`.
 * The two ends get different values so later services can tell them
 * apart. `primaryEnd` is the Primary PINX (User B's end).
 * `secondaryEnd` is the Secondary PINX (User C's end).
 * ECMA-178 §6.5.1.1, §6.5.2.1, §6.5.3.1; ECMA-177 §4.2.5, §4.2.6,
 * §7.2.1.2.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-177/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EndDesignation  ::=  ENUMERATED {
 *     primaryEnd(0),
 *     secondaryEnd(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EndDesignation = _enum_for_EndDesignation;

/**
 * @summary EndDesignation
 * @description
 *
 * Which transferred user's PINX receives this `callTransferComplete`.
 * The two ends get different values so later services can tell them
 * apart. `primaryEnd` is the Primary PINX (User B's end).
 * `secondaryEnd` is the Secondary PINX (User C's end).
 * ECMA-178 §6.5.1.1, §6.5.2.1, §6.5.3.1; ECMA-177 §4.2.5, §4.2.6,
 * §7.2.1.2.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-177/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EndDesignation  ::=  ENUMERATED {
 *     primaryEnd(0),
 *     secondaryEnd(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EndDesignation = _enum_for_EndDesignation;

/**
 * @summary EndDesignation_primaryEnd
 * @description
 *
 * This invoke is for the Primary PINX, the end of the primary call
 * nearest User B. The receiver operates as a Primary PINX.
 * ECMA-178 §4.2.2, §6.5.2.1. A Gateway PINX uses this value unless the
 * call is an incoming call from the other network that is not yet
 * Active (ECMA-178 §6.6.1.2, §6.7.1.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 * @constant
 * @type {number}
 */
export
const EndDesignation_primaryEnd: EndDesignation = EndDesignation.primaryEnd; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary primaryEnd
 * @description Alias of {@link EndDesignation_primaryEnd}.
 * @constant
 * @type {number}
 */
export
const primaryEnd: EndDesignation = EndDesignation.primaryEnd; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EndDesignation_secondaryEnd
 * @description
 *
 * This invoke is for the Secondary PINX, the end of the secondary call
 * nearest User C. The receiver operates as a Secondary PINX.
 * ECMA-178 §4.2.4, §6.5.3.1. A Gateway PINX uses this value when the
 * transferred call is an incoming call from the other network that has
 * not reached Active (ECMA-178 §6.6.1.2, §6.7.1.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 * @constant
 * @type {number}
 */
export
const EndDesignation_secondaryEnd: EndDesignation = EndDesignation.secondaryEnd; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary secondaryEnd
 * @description Alias of {@link EndDesignation_secondaryEnd}.
 * @constant
 * @type {number}
 */
export
const secondaryEnd: EndDesignation = EndDesignation.secondaryEnd; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_EndDesignation: $.ASN1Decoder<EndDesignation> = $._decodeEnumerated;

export
const _encode_EndDesignation: $.ASN1Encoder<EndDesignation> = $._encodeEnumerated;

/* eslint-enable */
