/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { id_nf_orgPersonNameForm } from "../SelectedObjectClasses/id-nf-orgPersonNameForm.va.mjs";
import { organizationalPerson } from "../SelectedObjectClasses/organizationalPerson.oa.mjs";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
export { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
export { id_nf_orgPersonNameForm } from "../SelectedObjectClasses/id-nf-orgPersonNameForm.va.mjs";
export { organizationalPerson } from "../SelectedObjectClasses/organizationalPerson.oa.mjs";

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
