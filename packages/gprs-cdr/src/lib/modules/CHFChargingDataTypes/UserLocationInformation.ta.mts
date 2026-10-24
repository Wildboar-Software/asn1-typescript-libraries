/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UserLocationInformation
 * @description
 *
 * This field contains the User Location as described in TS 29.571 [249].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.5.1.15.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserLocationInformation  ::=  OCTET STRING
 * ```
 */
export
type UserLocationInformation = OCTET_STRING; // OctetStringType

export
const _decode_UserLocationInformation: $.ASN1Decoder<UserLocationInformation> = $._decodeOctetString;

export
const _encode_UserLocationInformation: $.ASN1Encoder<UserLocationInformation> = $._encodeOctetString;

/* eslint-enable */
