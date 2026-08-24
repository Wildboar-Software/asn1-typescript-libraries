/* eslint-disable */
import { Code } from "../CommonProtocolSpecification/Code.ta.mjs";
/**
 * @summary id_opcode_requestShadowUpdate
 * @description
 *
 * DISP local:1 (`requestShadowUpdate`). Same integer as DAP/DSP
 * `read`. Only in consumer-initiated DISP ACs (and IDM `disp-ip`);
 * not in supplier-initiated OSI ACs.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-opcode-requestShadowUpdate     Code ::= local:1
 * ```
 *
 * @constant
 */
export const id_opcode_requestShadowUpdate: Code = { local: 1 };

/* eslint-enable */
