/* eslint-disable */
// export { groupOfUniqueNamesExt } from "../OrganizationAndGroupSchema/groupOfUniqueNamesExt.oa.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary groupOfUniqueNamesExtNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * groupOfUniqueNamesExtNameForm NAME-FORM ::= {
 *     NAMES                groupOfUniqueNamesExt
 *     WITH ATTRIBUTES        {commonName}
 *     LDAP-NAME            {"groupOfUniqueNamesExtNameForm"}
 *     ID                    id-nf-groupOfUniqueNamesExtNameFo
 * }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const groupOfUniqueNamesExtNameForm: NAME_FORM = undefined;

/* eslint-enable */
