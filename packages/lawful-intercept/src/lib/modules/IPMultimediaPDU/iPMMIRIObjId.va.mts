/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { iPMultimediaPDUObjId } from "../IPMultimediaPDU/iPMultimediaPDUObjId.va.mjs";
// export { iPMultimediaPDUObjId } from "../IPMultimediaPDU/iPMultimediaPDUObjId.va.mjs";


/**
 * @summary iPMMIRIObjId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iPMMIRIObjId RELATIVE-OID ::= {iPMultimediaPDUObjId iRI(1)}
 * ```
 * 
 * @constant
 */
export
const iPMMIRIObjId: RELATIVE_OID = [ ...iPMultimediaPDUObjId, /* iRI */ 1 ];

/* eslint-enable */
