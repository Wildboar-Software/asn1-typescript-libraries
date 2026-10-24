/* eslint-disable */
import {
    type RELATIVE_OID
} from "@wildboar/asn1";
import { emailPDUObjId } from "../EmailPDU/emailPDUObjId.va.mjs";
// export { emailPDUObjId } from "../EmailPDU/emailPDUObjId.va.mjs";


/**
 * @summary messagingIRIObjId
 * @description
 *
 * Relative OID placed in `MessagingIRI.messaging_iri_obj_id`. Value
 * `{emailPDUObjId messagingIRI(3)}`.
 *
 * Identifies an HI2 PDU for a unified-messaging event. Intercepted email uses
 * `emailIRIObjId` unless a national agreement overrides that and allows the
 * messaging structures.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 4.2 and 8.0.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * messagingIRIObjId RELATIVE-OID ::= {emailPDUObjId messagingIRI(3)}
 * ```
 * 
 * @constant
 */
export
const messagingIRIObjId: RELATIVE_OID = [ ...emailPDUObjId, /* messagingIRI */ 3 ];

/* eslint-enable */
