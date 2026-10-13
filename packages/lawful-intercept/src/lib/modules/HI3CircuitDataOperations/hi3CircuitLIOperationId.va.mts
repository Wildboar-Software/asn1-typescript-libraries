/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { hi3CircuitLIId } from "../HI3CircuitDataOperations/hi3CircuitLIId.va.mjs";
// export { hi3CircuitLIId } from "../HI3CircuitDataOperations/hi3CircuitLIId.va.mjs";


/**
 * @summary hi3CircuitLIOperationId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi3CircuitLIOperationId OBJECT IDENTIFIER ::= {hi3CircuitLIId version3(3)}
 * ```
 * 
 * @constant
 */
export
const hi3CircuitLIOperationId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* version3 */ 3,
], hi3CircuitLIId);

/* eslint-enable */
