/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceIdentifier
 * @description
 *
 * Service Identifier is an identifier for a service. The service identifier
 * may designate an end user service, a part of an end user service or an
 * arbitrarily formed group thereof. This field is only included if reporting
 * is per combination of the rating group and service id.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceIdentifier  ::=  INTEGER ( 0 .. 4294967295 )
 * ```
 */
export
type ServiceIdentifier = INTEGER;

export const _decode_ServiceIdentifier = (el: _Element): ServiceIdentifier => {
    const value = $._decodeInteger(el);
    if (value < 0 || value > 4294967295) {
        throw new ASN1OverflowError("ServiceIdentifier violates INTEGER range");
    }
    return value;
};

export
const _encode_ServiceIdentifier: $.ASN1Encoder<ServiceIdentifier> = $._encodeInteger;

/* eslint-enable */
