/* eslint-disable */
// export { organizationalPerson } from "../SelectedObjectClasses/organizationalPerson.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
// export { id_nf_orgPersonNameForm } from "../SelectedObjectClasses/id-nf-orgPersonNameForm.va.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary orgPersonNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * orgPersonNameForm NAME-FORM ::= {
 *   NAMES            organizationalPerson
 *   WITH ATTRIBUTES  {commonName}
 *   AND OPTIONALLY   {organizationalUnitName}
 *   ID               id-nf-orgPersonNameForm }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const orgPersonNameForm: NAME_FORM = undefined;

/* eslint-enable */
