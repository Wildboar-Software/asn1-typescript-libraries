/* eslint-disable */
import {
    type RELATIVE_OID
} from "@wildboar/asn1";
import { emailPDUObjId } from "../EmailPDU/emailPDUObjId.va.mjs";
// export { emailPDUObjId } from "../EmailPDU/emailPDUObjId.va.mjs";


/**
 * @summary messagingCCObjId
 * @description
 *
 * Relative OID placed in `MessagingCC.messaging_cc_obj_id`. Value
 * `{emailPDUObjId messagingCC(4)}`.
 *
 * Identifies unified-messaging captured content that does not need the
 * multimedia signalling of ETSI TS 102 232-5. When that signalling is required,
 * use `messagingMMCCObjId` instead.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * messagingCCObjId RELATIVE-OID ::= {emailPDUObjId messagingCC(4)}
 * ```
 * 
 * @constant
 */
export
const messagingCCObjId: RELATIVE_OID = [ ...emailPDUObjId, /* messagingCC */ 4 ];

/* eslint-enable */
