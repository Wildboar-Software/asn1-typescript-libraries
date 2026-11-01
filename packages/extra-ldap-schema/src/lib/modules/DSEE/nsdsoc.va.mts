/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { netscapeDS } from "../DSEE/netscapeDS.va.mjs";

/**
 * @summary nsdsoc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsdsoc          OBJECT IDENTIFIER ::= { netscapeDS 2 }
 * ```
 * 
 * @constant
 */
export
const nsdsoc: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], netscapeDS);

/* eslint-enable */
