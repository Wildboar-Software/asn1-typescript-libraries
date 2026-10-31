/* eslint-disable */
// export { dSA } from "../SelectedObjectClasses/dSA.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_nf_dSANameForm } from "../SelectedObjectClasses/id-nf-dSANameForm.va.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary dSANameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dSANameForm NAME-FORM ::= {
 *   NAMES            dSA
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-dSANameForm }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const dSANameForm: NAME_FORM = undefined;

/* eslint-enable */
