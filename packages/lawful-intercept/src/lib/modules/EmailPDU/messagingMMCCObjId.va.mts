/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { emailPDUObjId } from "../EmailPDU/emailPDUObjId.va.mjs";
// export { emailPDUObjId } from "../EmailPDU/emailPDUObjId.va.mjs";


/**
 * @summary messagingMMCCObjId
 * @description
 *
 * Relative OID placed in `MessagingMMCC.messaging_mm_cc_obj_id`. Value
 * `{emailPDUObjId messagingMMCC(5)}`.
 *
 * Identifies unified-messaging captured content carried as an `IPMMCC` from
 * ETSI TS 102 232-5.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * messagingMMCCObjId RELATIVE-OID ::= {emailPDUObjId messagingMMCC(5)}
 * ```
 * 
 * @constant
 */
export
const messagingMMCCObjId: RELATIVE_OID = [ ...emailPDUObjId, /* messagingMMCC */ 5 ];

/* eslint-enable */
