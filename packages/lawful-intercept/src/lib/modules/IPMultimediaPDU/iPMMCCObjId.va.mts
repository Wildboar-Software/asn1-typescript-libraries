/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { iPMultimediaPDUObjId } from "../IPMultimediaPDU/iPMultimediaPDUObjId.va.mjs";
// export { iPMultimediaPDUObjId } from "../IPMultimediaPDU/iPMultimediaPDUObjId.va.mjs";


/**
 * @summary iPMMCCObjId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iPMMCCObjId RELATIVE-OID ::= {iPMultimediaPDUObjId cC(2)}
 * ```
 * 
 * @constant
 */
export
const iPMMCCObjId: RELATIVE_OID = [ ...iPMultimediaPDUObjId, /* cC */ 2 ];

/* eslint-enable */
