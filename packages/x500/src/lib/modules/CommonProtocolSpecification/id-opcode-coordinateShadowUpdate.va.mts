/* eslint-disable */
import { Code } from "../CommonProtocolSpecification/Code.ta.mjs";
/**
 * @summary id_opcode_coordinateShadowUpdate
 * @description
 *
 * DISP local:3 (`coordinateShadowUpdate`). Same integer as DAP/DSP
 * `abandon`. Only in supplier-initiated DISP ACs (and IDM `disp-ip`);
 * not in consumer-initiated OSI ACs.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-opcode-coordinateShadowUpdate  Code ::= local:3
 * ```
 *
 * @constant
 */
export const id_opcode_coordinateShadowUpdate: Code = { local: 3 };

/* eslint-enable */
