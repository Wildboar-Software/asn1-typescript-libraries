/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { h350_cr } from "../H323-X500-Schema/h350-cr.va.mjs";

/**
 * @summary sip_Id
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sip-Id OBJECT IDENTIFIER ::= {h350-cr sip-Id(6)}
 * ```
 * 
 * @constant
 */
export
const sip_Id: OBJECT_IDENTIFIER = _OID.fromParts([
    /* sip-Id */ 6,
], h350_cr);

/* eslint-enable */
