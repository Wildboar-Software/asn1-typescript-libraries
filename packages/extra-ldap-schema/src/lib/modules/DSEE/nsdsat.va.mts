/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { netscapeDS } from "../DSEE/netscapeDS.va.mjs";

/**
 * @summary nsdsat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsdsat          OBJECT IDENTIFIER ::= { netscapeDS 1 }
 * ```
 * 
 * @constant
 */
export
const nsdsat: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], netscapeDS);

/* eslint-enable */
