/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { cu } from "../H323-X500-Schema/cu.va.mjs";
// export { cu } from "../H323-X500-Schema/cu.va.mjs";


/**
 * @summary cu_oc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cu-oc OBJECT IDENTIFIER ::= {cu oc(2)}
 * ```
 * 
 * @constant
 */
export
const cu_oc: OBJECT_IDENTIFIER = _OID.fromParts([
    /* oc */ 2,
], cu);

/* eslint-enable */
