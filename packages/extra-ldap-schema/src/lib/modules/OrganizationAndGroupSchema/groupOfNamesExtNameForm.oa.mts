/* eslint-disable */
// export { groupOfNamesExt } from "../OrganizationAndGroupSchema/groupOfNamesExt.oa.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary groupOfNamesExtNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * groupOfNamesExtNameForm NAME-FORM ::= {
 *     NAMES                groupOfNamesExt
 *     WITH ATTRIBUTES        gONNameForm.&MandatoryAttributes -- commonName
 *     LDAP-NAME            {"groupOfNamesExtNameForm"}
 *     ID                    id-nf-groupOfNamesExtNameForm
 * }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const groupOfNamesExtNameForm: NAME_FORM = undefined;

/* eslint-enable */
