/* eslint-disable */
import { Code } from "../CommonProtocolSpecification/Code.ta.mjs";
/**
 * @summary id_opcode_linkedLDAP
 * @description
 *
 * DAP/DSP local:13 (`linkedLDAP` / `chainedLinkedLDAP`). Defined for
 * DAP and DSP, but only the DSP application-context / `dsp-ip`
 * includes it (as chained). Not in `directoryAccessAC` / `dap-ip`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-opcode-linkedLDAP              Code ::= local:13
 * ```
 *
 * @constant
 */
export const id_opcode_linkedLDAP: Code = { local: 13 };

/* eslint-enable */
