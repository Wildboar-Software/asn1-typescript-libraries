/* eslint-disable */
// export { UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
// export { id_lsx_directoryString } from "../SelectedAttributeTypes/id-lsx-directoryString.va.mjs";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";


/**
 * @summary directoryString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * directoryString SYNTAX-NAME ::= {
 *   LDAP-DESC         "Directory String"
 *   DIRECTORY SYNTAX  UnboundedDirectoryString
 *   ID                id-lsx-directoryString }
 * ```
 * 
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export
const directoryString: SYNTAX_NAME = undefined;

/* eslint-enable */
