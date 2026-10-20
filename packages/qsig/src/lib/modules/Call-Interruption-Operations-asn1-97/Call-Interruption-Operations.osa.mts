/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { callInterruptionRequest } from "../Call-Interruption-Operations-asn1-97/callInterruptionRequest.oa.mjs";
import { callProtectionRequest } from "../Call-Interruption-Operations-asn1-97/callProtectionRequest.oa.mjs";

/**
 * @summary Call_Interruption_Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Call-Interruption-Operations OPERATION ::= { callInterruptionRequest | callProtectionRequest }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const Call_Interruption_Operations: (OPERATION)[] = [ callInterruptionRequest, callProtectionRequest, ];

/* eslint-enable */
