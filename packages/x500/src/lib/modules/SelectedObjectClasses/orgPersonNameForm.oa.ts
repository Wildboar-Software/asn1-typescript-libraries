/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.js";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.js";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.js";
import { id_nf_orgPersonNameForm } from "../SelectedObjectClasses/id-nf-orgPersonNameForm.va.js";
import { organizationalPerson } from "../SelectedObjectClasses/organizationalPerson.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.js";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
export { commonName } from "../SelectedAttributeTypes/commonName.oa.js";
export { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.js";
export { id_nf_orgPersonNameForm } from "../SelectedObjectClasses/id-nf-orgPersonNameForm.va.js";
export { organizationalPerson } from "../SelectedObjectClasses/organizationalPerson.oa.js";

/* START_OF_SYMBOL_DEFINITION orgPersonNameForm */
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
export const orgPersonNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": organizationalPerson /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [organizationalUnitName] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_orgPersonNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION orgPersonNameForm */

/* eslint-enable */
