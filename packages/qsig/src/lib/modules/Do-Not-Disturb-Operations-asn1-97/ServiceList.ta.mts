/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ServiceList
 * @description
 *
 * Supplementary services for which path retention is requested
 * (`pathRetain`) or for which the connection has been retained
 * (`serviceAvailable`). A bit set to ONE names such a service; every
 * other bit is ZERO (ECMA-194 §A.5.1, §A.5.2). Bits other than
 * `dndo-low`, `dndo-medium`, and `dndo-high` are reserved for other
 * supplementary services (§6.3.1, §A.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceList  ::=  BIT STRING {
 *     dndo-low(1),
 *     dndo-medium(2),
 *     dndo-high(3)
 * } (SIZE(1..32))
 * ```
 */
export
type ServiceList = BIT_STRING;

/**
 * @summary ServiceList_dndo_low
 * @description
 *
 * Bit 1 (`dndo-low`). SS-DNDO at low capability. Set in `pathRetain`
 * to request retention, and in `serviceAvailable` to report that
 * SS-DNDO at that capability is invokable (ECMA-194 §6.6.1.1,
 * §A.5). The Terminating PINX compares a received DNDOCL with the
 * served user's DNDPL. ECMA-194 does not state a numeric identity
 * between this bit and `overrideLowProt`.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
 */
export
const ServiceList_dndo_low: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary dndo_low
 * @description Alias of {@link ServiceList_dndo_low}.
 * @constant
 */
export
const dndo_low: number = ServiceList_dndo_low; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceList_dndo_medium
 * @description
 *
 * Bit 2 (`dndo-medium`). SS-DNDO at medium capability. Same use as
 * `dndo-low` (ECMA-194 §6.6.1.1, §A.5). ECMA-194 does not state a
 * numeric identity with `overrideMediumProt` beyond these names and
 * the DNDPL < DNDOCL test.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
 */
export
const ServiceList_dndo_medium: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary dndo_medium
 * @description Alias of {@link ServiceList_dndo_medium}.
 * @constant
 */
export
const dndo_medium: number = ServiceList_dndo_medium; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceList_dndo_high
 * @description
 *
 * Bit 3 (`dndo-high`). SS-DNDO at high capability. Same use as
 * `dndo-low` (ECMA-194 §6.6.1.1, §A.5). ECMA-194 does not state a
 * numeric identity with `overrideHighProt` beyond these names and
 * the DNDPL < DNDOCL test.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
 */
export
const ServiceList_dndo_high: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary dndo_high
 * @description Alias of {@link ServiceList_dndo_high}.
 * @constant
 */
export
const dndo_high: number = ServiceList_dndo_high; /* SHORT_NAMED_BIT */

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
