/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_netscapeAttrTypes } from "../InetOrgPerson/id-netscapeAttrTypes.va.mjs";


/**
 * @summary id_at_employeeNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-employeeNumber            OBJECT IDENTIFIER ::= { id-netscapeAttrTypes 3 }
 * ```
 * 
 * @constant
 */
export
const id_at_employeeNumber: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], id_netscapeAttrTypes);

/* eslint-enable */

