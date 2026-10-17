/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { iPAccessPDUObjId } from "../IPAccessPDU/iPAccessPDUObjId.va.mjs";
// export { iPAccessPDUObjId } from "../IPAccessPDU/iPAccessPDUObjId.va.mjs";


/**
 * @summary iPCCObjId
 * @description
 *
 * Identifies an `IPCC` HI3 payload. Arc `cC(2)` under
 * `iPAccessPDUObjId` (ETSI TS 102 232-3 V3.9.1, clause 8).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iPCCObjId RELATIVE-OID ::= {iPAccessPDUObjId cC(2)}
 * ```
 * 
 * @constant
 */
export
const iPCCObjId: RELATIVE_OID = [ ...iPAccessPDUObjId, /* cC */ 2 ];

/* eslint-enable */
