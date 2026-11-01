/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { co } from "../H323-X500-Schema/co.va.mjs";


/**
 * @summary co_oc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * co-oc OBJECT IDENTIFIER ::= {co oc(2)}
 * ```
 * 
 * @constant
 */
export
const co_oc: OBJECT_IDENTIFIER = _OID.fromParts([
    /* oc */ 2,
], co);

/* eslint-enable */

