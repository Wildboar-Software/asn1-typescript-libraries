/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { h350_cr } from "../H323-X500-Schema/h350-cr.va.mjs";

/**
 * @summary call_Id
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * call-Id OBJECT IDENTIFIER ::= {h350-cr call-Id(8)}
 * ```
 * 
 * @constant
 */
export
const call_Id: OBJECT_IDENTIFIER = _OID.fromParts([
    /* call-Id */ 8,
], h350_cr);

/* eslint-enable */
