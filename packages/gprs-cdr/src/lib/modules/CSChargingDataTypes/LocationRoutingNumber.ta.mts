/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationRoutingNumber
 * @description
 *
 * This field contains Ten-digit Location Routing Number (LRN) for the Number
 * Portability feature. It is populated if received via one of the methods
 * listed as "LRN Source". It identifies the new location of a ported
 * subscriber. For North America Region (NAR) this may be a 10-digit E.164
 * number. For Europe, other formats may apply. If more than 10 digits are
 * received, the first ten digits received are recorded. If fewer than 10
 * digits are received, the information is left justified in the field and
 * padded with 0xF.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.47.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationRoutingNumber  ::=  OCTET STRING ( SIZE( 5 ) )
 * ```
 */
export
type LocationRoutingNumber = OCTET_STRING; // OctetStringType

export const _decode_LocationRoutingNumber = (el: _Element): LocationRoutingNumber => {
    const value = $._decodeOctetString(el);
    if (value.length !== 5) {
        throw new ASN1SizeError("LocationRoutingNumber violates SIZE constraint");
    }
    return value;
};

export
const _encode_LocationRoutingNumber: $.ASN1Encoder<LocationRoutingNumber> = $._encodeOctetString;

/* eslint-enable */
