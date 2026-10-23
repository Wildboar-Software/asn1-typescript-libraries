/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CalledPartyBusinessGroupID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CalledPartyBusinessGroupID  ::=  OCTET STRING
 * ```
 */
export
type CalledPartyBusinessGroupID = OCTET_STRING; // OctetStringType

export
const _decode_CalledPartyBusinessGroupID: $.ASN1Decoder<CalledPartyBusinessGroupID> = $._decodeOctetString;

export
const _encode_CalledPartyBusinessGroupID: $.ASN1Encoder<CalledPartyBusinessGroupID> = $._encodeOctetString;

/* eslint-enable */
