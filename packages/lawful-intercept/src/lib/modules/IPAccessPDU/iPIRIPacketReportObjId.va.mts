/* eslint-disable */
import {
    type RELATIVE_OID
} from "@wildboar/asn1";
import { iPAccessPDUObjId } from "../IPAccessPDU/iPAccessPDUObjId.va.mjs";
// export { iPAccessPDUObjId } from "../IPAccessPDU/iPAccessPDUObjId.va.mjs";


/**
 * @summary iPIRIPacketReportObjId
 * @description
 *
 * Arc `iRIPacketReport(4)` under `iPAccessPDUObjId`. ETSI
 * TS 102 232-3 V3.9.1 clause 8 (module version14) does not define this
 * arc; that edition stops at `iRIOnly(3)`.
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
const iPIRIPacketReportObjId: RELATIVE_OID = [ ...iPAccessPDUObjId, /* iRIPacketReport */ 4 ];

/* eslint-enable */
