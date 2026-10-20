/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { scfChained } from "../IN-SCF-SCF-ops-args/scfChained.oa.mjs";
// export { scfChained } from "../IN-SCF-SCF-ops-args/scfChained.oa.mjs";
// export { establishChargingRecord } from "../IN-SCF-SCF-ops-args/establishChargingRecord.oa.mjs";


/**
 * @summary chainedEstablishChargingRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * chainedEstablishChargingRecord OPERATION ::= scfChained{establishChargingRecord}
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const chainedEstablishChargingRecord: OPERATION = scfChained;

/* eslint-enable */
