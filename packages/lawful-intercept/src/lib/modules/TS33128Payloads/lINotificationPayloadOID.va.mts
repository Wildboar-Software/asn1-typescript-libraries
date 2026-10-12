/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { tS33128PayloadsOID } from "../TS33128Payloads/tS33128PayloadsOID.va.mjs";
// export { tS33128PayloadsOID } from "../TS33128Payloads/tS33128PayloadsOID.va.mjs";


/**
 * @summary lINotificationPayloadOID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * lINotificationPayloadOID    RELATIVE-OID ::= {tS33128PayloadsOID lINotification(5)}
 * ```
 * 
 * @constant
 */
export
const lINotificationPayloadOID: RELATIVE_OID = [ ...tS33128PayloadsOID, /* lINotification */ 5 ];

/* eslint-enable */
