/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { netscapeRoot } from "../DSEE/netscapeRoot.va.mjs";
// export { netscapeRoot } from "../DSEE/netscapeRoot.va.mjs";


/**
 * @summary netscapeDS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * netscapeDS      OBJECT IDENTIFIER ::= { netscapeRoot 3 }
 * ```
 * 
 * @constant
 */
export
const netscapeDS: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], netscapeRoot);

/* eslint-enable */
