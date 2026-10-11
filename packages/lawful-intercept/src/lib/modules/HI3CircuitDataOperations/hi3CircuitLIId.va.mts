/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { lawfulInterceptDomainId } from "../HI3CircuitDataOperations/lawfulInterceptDomainId.va.mjs";
// export { lawfulInterceptDomainId } from "../HI3CircuitDataOperations/lawfulInterceptDomainId.va.mjs";


/**
 * @summary hi3CircuitLIId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi3CircuitLIId OBJECT IDENTIFIER ::= {lawfulInterceptDomainId hi3(2) circuitLI(1)}
 * ```
 * 
 * @constant
 */
export
const hi3CircuitLIId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi3 */ 2,
    /* circuitLI */ 1,
], lawfulInterceptDomainId);

/* eslint-enable */
