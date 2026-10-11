/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SignalName
 * @description
 * 
 * Package and signal identifier. Typed as `PkgdName` in Annex A: four octets,
 * package then signal. A SignalID is not wildcarded (clause 7.1.11.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignalName  ::=  OCTET STRING
 * ```
 */
export
type SignalName = OCTET_STRING; // OctetStringType
export const _decode_SignalName = $._decodeOctetString;
export const _encode_SignalName = $._encodeOctetString;


/* eslint-enable */
