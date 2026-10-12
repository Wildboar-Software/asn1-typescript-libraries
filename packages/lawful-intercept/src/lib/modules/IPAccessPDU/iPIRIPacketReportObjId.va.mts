/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { iPAccessPDUObjId } from "../IPAccessPDU/iPAccessPDUObjId.va.mjs";
// export { iPAccessPDUObjId } from "../IPAccessPDU/iPAccessPDUObjId.va.mjs";


/**
 * @summary iPIRIPacketReportObjId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iPIRIPacketReportObjId RELATIVE-OID ::= {iPAccessPDUObjId iRIPacketReport(4)}
 * ```
 * 
 * @constant
 */
export
const iPIRIPacketReportObjId: RELATIVE_OID = [ iPAccessPDUObjId, /* iRIPacketReport */ 4 ];

/* eslint-enable */
