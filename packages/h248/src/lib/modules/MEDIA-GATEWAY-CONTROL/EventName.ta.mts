/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EventName
 * @description
 * 
 * Package and event identifier. The Recommendation types this as `PkgdName`:
 * four octets, package then event (Annex A). See `PkgdName` for wildcarding.
 * The ALL wildcard is allowed on an event identifier (clause 7.1.9.2) and is
 * not allowed on a signal identifier.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventName  ::=  OCTET STRING
 * ```
 */
export
type EventName = OCTET_STRING; // OctetStringType
export const _decode_EventName = $._decodeOctetString;
export const _encode_EventName = $._encodeOctetString;


/* eslint-enable */
