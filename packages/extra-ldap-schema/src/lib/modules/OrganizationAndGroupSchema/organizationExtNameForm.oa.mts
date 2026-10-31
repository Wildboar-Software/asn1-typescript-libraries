/* eslint-disable */
// export { organizationExt } from "../OrganizationAndGroupSchema/organizationExt.oa.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary organizationExtNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * organizationExtNameForm NAME-FORM ::= {
 *     NAMES                organizationExt
 *     WITH ATTRIBUTES        orgNameForm.&MandatoryAttributes -- organizationName
 *     LDAP-NAME            {"organizationExtNameForm"}
 *     ID                    id-nf-organizationExtNameForm
 * }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const organizationExtNameForm: NAME_FORM = undefined;

/* eslint-enable */
