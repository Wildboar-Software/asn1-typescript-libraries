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
 * (ECMA-192 §6.3.1, Annex A). Length 1 to 32 bits. Bits other than
 * `callOffer` (0) are reserved for other supplementary services. A
 * bit set to ONE requests retention (`pathRetain`, §A.5.1) or
 * reports that the service can be invoked now (`serviceAvailable`,
 * §A.5.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-192/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceList  ::=  BIT STRING {callOffer(0)} (SIZE(1..32))
 * ```
 */
export
type ServiceList = BIT_STRING;

/**
 * @summary ServiceList_callOffer
 * @description
 *
 * Bit 0. Set to ONE to request or report path retention for Call
 * Offer (ECMA-192 §6.3.1, §A.5).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-192/
 * @constant
 */
export
const ServiceList_callOffer: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary callOffer
 * @description Alias of {@link ServiceList_callOffer}.
 * @constant
 */
export
const callOffer: number = ServiceList_callOffer; /* SHORT_NAMED_BIT */

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
