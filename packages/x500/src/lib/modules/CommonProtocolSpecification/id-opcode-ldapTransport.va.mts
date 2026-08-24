/* eslint-disable */
import { Code } from "../CommonProtocolSpecification/Code.ta.mjs";
/**
 * @summary id_opcode_ldapTransport
 * @description
 *
 * DAP/DSP local:12 (`ldapTransport` / `chainedLdapTransport`). Defined
 * for DAP and DSP, but only the DSP application-context / `dsp-ip`
 * includes it (as chained). Not in `directoryAccessAC` / `dap-ip`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-opcode-ldapTransport           Code ::= local:12
 * ```
 *
 * @constant
 */
export const id_opcode_ldapTransport: Code = { local: 12 };

/* eslint-enable */
