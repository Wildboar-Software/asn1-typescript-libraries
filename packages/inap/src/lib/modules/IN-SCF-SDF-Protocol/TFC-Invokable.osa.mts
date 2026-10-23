/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { trafficFlowControl } from "../IN-SCF-SDF-operations/trafficFlowControl.oa.mjs";
// export { trafficFlowControl } from "../IN-SCF-SDF-operations/trafficFlowControl.oa.mjs";


/**
 * @summary TFC_Invokable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TFC-Invokable OPERATION ::= {trafficFlowControl}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const TFC_Invokable: (OPERATION)[] = [ trafficFlowControl, ];

/* eslint-enable */
