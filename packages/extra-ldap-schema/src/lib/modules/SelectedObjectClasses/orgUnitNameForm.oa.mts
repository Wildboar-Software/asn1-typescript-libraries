/* eslint-disable */
// export { organizationalUnit } from "../SelectedObjectClasses/organizationalUnit.oa.mjs";
// export { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
// export { id_nf_orgUnitNameForm } from "../SelectedObjectClasses/id-nf-orgUnitNameForm.va.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary orgUnitNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * orgUnitNameForm NAME-FORM ::= {
 *   NAMES            organizationalUnit
 *   WITH ATTRIBUTES  {organizationalUnitName}
 *   ID               id-nf-orgUnitNameForm }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const orgUnitNameForm: NAME_FORM = undefined;

/* eslint-enable */
