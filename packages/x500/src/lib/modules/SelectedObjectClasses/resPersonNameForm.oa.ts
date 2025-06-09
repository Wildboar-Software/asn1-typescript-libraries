/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.js";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.js";
import { streetAddress } from "../SelectedAttributeTypes/streetAddress.oa.js";
import { id_nf_resPersonNameForm } from "../SelectedObjectClasses/id-nf-resPersonNameForm.va.js";
import { residentialPerson } from "../SelectedObjectClasses/residentialPerson.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.js";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
export { commonName } from "../SelectedAttributeTypes/commonName.oa.js";
export { streetAddress } from "../SelectedAttributeTypes/streetAddress.oa.js";
export { id_nf_resPersonNameForm } from "../SelectedObjectClasses/id-nf-resPersonNameForm.va.js";
export { residentialPerson } from "../SelectedObjectClasses/residentialPerson.oa.js";

/* START_OF_SYMBOL_DEFINITION resPersonNameForm */
/**
 * @summary resPersonNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * resPersonNameForm NAME-FORM ::= {
 *   NAMES            residentialPerson
 *   WITH ATTRIBUTES  {commonName}
 *   AND OPTIONALLY   {streetAddress}
 *   ID               id-nf-resPersonNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const resPersonNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": residentialPerson /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [streetAddress] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_resPersonNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION resPersonNameForm */

/* eslint-enable */
