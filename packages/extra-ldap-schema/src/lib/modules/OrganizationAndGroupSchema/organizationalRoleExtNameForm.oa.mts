/* eslint-disable */
// export { organizationalRoleExt } from "../OrganizationAndGroupSchema/organizationalRoleExt.oa.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary organizationalRoleExtNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * organizationalRoleExtNameForm NAME-FORM ::= {
 *     NAMES                organizationalRoleExt
 *     WITH ATTRIBUTES        orgRoleNameForm.&MandatoryAttributes -- commonName
 *     LDAP-NAME            {"organizationalRoleExtNameForm"}
 *     ID                    id-nf-organizationalRoleExtNameFo
 * }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const organizationalRoleExtNameForm: NAME_FORM = undefined;

/* eslint-enable */
