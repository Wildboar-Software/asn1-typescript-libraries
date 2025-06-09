/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.js";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.js";
import { id_nf_orgNameForm } from "../SelectedObjectClasses/id-nf-orgNameForm.va.js";
import { organization } from "../SelectedObjectClasses/organization.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.js";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
export { organizationName } from "../SelectedAttributeTypes/organizationName.oa.js";
export { id_nf_orgNameForm } from "../SelectedObjectClasses/id-nf-orgNameForm.va.js";
export { organization } from "../SelectedObjectClasses/organization.oa.js";

/* START_OF_SYMBOL_DEFINITION orgNameForm */
/**
 * @summary orgNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * orgNameForm NAME-FORM ::= {
 *   NAMES            organization
 *   WITH ATTRIBUTES  {organizationName}
 *   ID               id-nf-orgNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const orgNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": organization /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [organizationName] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_orgNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION orgNameForm */

/* eslint-enable */
