/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { hi3GPRSLIId } from "../Gprs-HI3-PS/hi3GPRSLIId.va.mjs";
// export { hi3GPRSLIId } from "../Gprs-HI3-PS/hi3GPRSLIId.va.mjs";


/**
 * @summary hi3GPRSLIIdOperationId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi3GPRSLIIdOperationId OBJECT IDENTIFIER ::= {hi3GPRSLIId version3(3)}
 * ```
 * 
 * @constant
 */
export
const hi3GPRSLIIdOperationId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* version3 */ 3,
], hi3GPRSLIId);

/* eslint-enable */
