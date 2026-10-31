/* eslint-disable */
// export { BootParameterSyntax, _decode_BootParameterSyntax, _encode_BootParameterSyntax } from "../NIS/BootParameterSyntax.ta.mjs";
// export { id_nis_lsx } from "../NIS/id-nis-lsx.va.mjs";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";


/**
 * @summary bootParameterSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * bootParameterSyntax SYNTAX-NAME ::= {
 *     LDAP-DESC         "Boot parameter"
 *     DIRECTORY SYNTAX  BootParameterSyntax
 *     ID                { id-nis-lsx 1 } }
 * ```
 * 
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export
const bootParameterSyntax: SYNTAX_NAME = undefined;

/* eslint-enable */
