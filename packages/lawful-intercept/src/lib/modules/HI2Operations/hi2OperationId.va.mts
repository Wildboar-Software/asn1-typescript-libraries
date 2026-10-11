/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { hi2DomainId } from "../HI2Operations/hi2DomainId.va.mjs";
// export { hi2DomainId } from "../HI2Operations/hi2DomainId.va.mjs";


/**
 * @summary hi2OperationId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi2OperationId OBJECT IDENTIFIER ::= {hi2DomainId version18(18)}
 * ```
 * 
 * @constant
 */
export
const hi2OperationId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* version18 */ 18,
], hi2DomainId);

/* eslint-enable */
