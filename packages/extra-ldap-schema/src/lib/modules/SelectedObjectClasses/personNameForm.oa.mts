/* eslint-disable */
// export { person } from "../SelectedObjectClasses/person.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_nf_personNameForm } from "../SelectedObjectClasses/id-nf-personNameForm.va.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary personNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * personNameForm NAME-FORM ::= {
 *   NAMES            person
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-personNameForm }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const personNameForm: NAME_FORM = undefined;

/* eslint-enable */
