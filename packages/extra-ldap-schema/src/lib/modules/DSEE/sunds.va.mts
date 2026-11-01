/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { sunroot } from "../DSEE/sunroot.va.mjs";
// export { sunroot } from "../DSEE/sunroot.va.mjs";


/**
 * @summary sunds
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sunds           OBJECT IDENTIFIER ::= { sunroot 2 27 }
 * ```
 * 
 * @constant
 */
export
const sunds: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
    27,
], sunroot);

/* eslint-enable */
