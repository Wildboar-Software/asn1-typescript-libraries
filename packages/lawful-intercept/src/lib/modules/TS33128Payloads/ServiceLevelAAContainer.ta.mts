/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceLevelAAContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceLevelAAContainer  ::=  OCTET STRING (SIZE(4..65538))
 * ```
 */
export
type ServiceLevelAAContainer = OCTET_STRING; // OctetStringType

export function _decode_ServiceLevelAAContainer (el: _Element): ServiceLevelAAContainer {
    const value = $._decodeOctetString(el);
    if (value.length < 4 || value.length > 65538) {
        throw new ASN1SizeError("ServiceLevelAAContainer violates the SIZE constraint");
    }
    return value;
}

export const _encode_ServiceLevelAAContainer: $.ASN1Encoder<ServiceLevelAAContainer> = $._encodeOctetString;


/* eslint-enable */
