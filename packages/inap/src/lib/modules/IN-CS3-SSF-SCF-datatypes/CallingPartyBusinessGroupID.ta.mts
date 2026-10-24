/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallingPartyBusinessGroupID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallingPartyBusinessGroupID  ::=  OCTET STRING
 * ```
 */
export
type CallingPartyBusinessGroupID = OCTET_STRING; // OctetStringType

export
const _decode_CallingPartyBusinessGroupID: $.ASN1Decoder<CallingPartyBusinessGroupID> = $._decodeOctetString;

export
const _encode_CallingPartyBusinessGroupID: $.ASN1Encoder<CallingPartyBusinessGroupID> = $._encodeOctetString;

/* eslint-enable */
