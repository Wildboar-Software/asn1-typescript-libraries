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
 * @constant
 */
export
const ServiceList_ci_low: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ci_low
 * @constant
 */
export
const ci_low: number = ServiceList_ci_low; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceList_ci_medium
 * @constant
 */
export
const ServiceList_ci_medium: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary ci_medium
 * @constant
 */
export
const ci_medium: number = ServiceList_ci_medium; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceList_ci_high
 * @constant
 */
export
const ServiceList_ci_high: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary ci_high
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
