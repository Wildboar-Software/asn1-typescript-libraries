/* eslint-disable */
import {
    type BIT_STRING,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ServiceList
 * @description
 *
 * Supplementary services for which a network connection is retained
 * (ECMA-203 §6.3.1, Annex A). Length 1 to 32 bits. Bits other than
 * `ci-low` (4), `ci-medium` (5), and `ci-high` (6) are reserved for
 * other supplementary services. A bit set to ONE requests retention
 * (`pathRetain`, §A.5.1) or reports that the service can be invoked
 * now (`serviceAvailable`, §A.5.2). §6.3.1 does not state which of
 * the three SS-CI bits corresponds to which CICL.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceList  ::=  BIT STRING {
 *     ci-low(4),
 *     ci-medium(5),
 *     ci-high(6)
 * } (SIZE(1..32))
 * ```
 */
export
type ServiceList = BIT_STRING;

/**
 * @summary ServiceList_ci_low
 * @description
 *
 * Bit 4, `ci-low`. One of the three SS-CI path-retention
 * bits (ECMA-203 §6.3.1). Procedures set one of `ci-low`,
 * `ci-medium`, and `ci-high` to ONE for SS-CI (§6.9.6, §6.9.7).
 * §6.3.1 does not state which bit matches which CICL.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 * @constant
 */
export
const ServiceList_ci_low: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ci_low
 * @description Alias of {@link ServiceList_ci_low}.
 * @constant
 */
export
const ci_low: number = ServiceList_ci_low; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceList_ci_medium
 * @description
 *
 * Bit 5, `ci-medium`. One of the three SS-CI path-retention
 * bits (ECMA-203 §6.3.1). Procedures set one of `ci-low`,
 * `ci-medium`, and `ci-high` to ONE for SS-CI (§6.9.6, §6.9.7).
 * §6.3.1 does not state which bit matches which CICL.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 * @constant
 */
export
const ServiceList_ci_medium: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary ci_medium
 * @description Alias of {@link ServiceList_ci_medium}.
 * @constant
 */
export
const ci_medium: number = ServiceList_ci_medium; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceList_ci_high
 * @description
 *
 * Bit 6, `ci-high`. One of the three SS-CI path-retention
 * bits (ECMA-203 §6.3.1). Procedures set one of `ci-low`,
 * `ci-medium`, and `ci-high` to ONE for SS-CI (§6.9.6, §6.9.7).
 * §6.3.1 does not state which bit matches which CICL.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 * @constant
 */
export
const ServiceList_ci_high: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary ci_high
 * @description Alias of {@link ServiceList_ci_high}.
 * @constant
 */
export
const ci_high: number = ServiceList_ci_high; /* SHORT_NAMED_BIT */

export
const _decode_ServiceList = (el: _Element): ServiceList => {
    const value = $._decodeBitString(el);
    if (value.length < 1 || value.length > 32) {
        throw new ASN1SizeError("ServiceList violates SIZE constraint");
    }
    return value;
};

export
const _encode_ServiceList: $.ASN1Encoder<ServiceList> = $._encodeBitString;

/* eslint-enable */
