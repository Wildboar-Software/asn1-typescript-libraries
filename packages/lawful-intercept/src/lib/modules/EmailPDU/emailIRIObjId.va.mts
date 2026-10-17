/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { emailPDUObjId } from "../EmailPDU/emailPDUObjId.va.mjs";
// export { emailPDUObjId } from "../EmailPDU/emailPDUObjId.va.mjs";


/**
 * @summary emailIRIObjId
 * @description
 *
 * Relative OID placed in `EmailIRI.emailIRIObjId`. Value `{emailPDUObjId
 * iRI(1)}`.
 *
 * Identifies an HI2 intercept-related-information PDU for an email event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 6.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * emailIRIObjId RELATIVE-OID ::= {emailPDUObjId iRI(1)}
 * ```
 * 
 * @constant
 */
export
const emailIRIObjId: RELATIVE_OID = [ ...emailPDUObjId, /* iRI */ 1 ];

/* eslint-enable */
