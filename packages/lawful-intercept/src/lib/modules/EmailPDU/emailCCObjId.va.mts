/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { emailPDUObjId } from "../EmailPDU/emailPDUObjId.va.mjs";
// export { emailPDUObjId } from "../EmailPDU/emailPDUObjId.va.mjs";


/**
 * @summary emailCCObjId
 * @description
 *
 * Relative OID placed in `EmailCC.emailCCObjId`. Value `{emailPDUObjId cC(2)}`.
 *
 * Identifies an HI3 captured-content PDU for email.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 6.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * emailCCObjId RELATIVE-OID ::= {emailPDUObjId cC(2)}
 * ```
 * 
 * @constant
 */
export
const emailCCObjId: RELATIVE_OID = [ ...emailPDUObjId, /* cC */ 2 ];

/* eslint-enable */
