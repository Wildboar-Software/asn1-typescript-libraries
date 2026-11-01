/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_netscapeAttrTypes } from "../InetOrgPerson/id-netscapeAttrTypes.va.mjs";


/**
 * @summary id_at_departmentNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-departmentNumber          OBJECT IDENTIFIER ::= { id-netscapeAttrTypes 2 }
 * ```
 * 
 * @constant
 */
export
const id_at_departmentNumber: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_netscapeAttrTypes);

/* eslint-enable */

