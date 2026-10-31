/* eslint-disable */
// export { organizationalRole } from "../SelectedObjectClasses/organizationalRole.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_nf_orgRoleNameForm } from "../SelectedObjectClasses/id-nf-orgRoleNameForm.va.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary orgRoleNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * orgRoleNameForm NAME-FORM ::= {
 *   NAMES            organizationalRole
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-orgRoleNameForm }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const orgRoleNameForm: NAME_FORM = undefined;

/* eslint-enable */
