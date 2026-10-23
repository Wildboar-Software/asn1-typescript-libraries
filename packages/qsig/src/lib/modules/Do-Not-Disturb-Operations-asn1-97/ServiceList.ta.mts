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
 * @constant
 */
export
const ServiceList_dndo_low: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary dndo_low
 * @constant
 */
export
const dndo_low: number = ServiceList_dndo_low; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceList_dndo_medium
 * @constant
 */
export
const ServiceList_dndo_medium: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary dndo_medium
 * @constant
 */
export
const dndo_medium: number = ServiceList_dndo_medium; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceList_dndo_high
 * @constant
 */
export
const ServiceList_dndo_high: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary dndo_high
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
