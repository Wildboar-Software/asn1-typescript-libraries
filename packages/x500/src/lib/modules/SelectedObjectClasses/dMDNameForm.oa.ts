/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.js";
import { dmdName } from "../SelectedAttributeTypes/dmdName.oa.js";
import { dMD } from "../SelectedObjectClasses/dMD.oa.js";
import { id_nf_dMDNameForm } from "../SelectedObjectClasses/id-nf-dMDNameForm.va.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.js";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
export { dmdName } from "../SelectedAttributeTypes/dmdName.oa.js";
export { dMD } from "../SelectedObjectClasses/dMD.oa.js";
export { id_nf_dMDNameForm } from "../SelectedObjectClasses/id-nf-dMDNameForm.va.js";

/* START_OF_SYMBOL_DEFINITION dMDNameForm */
/**
 * @summary dMDNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dMDNameForm NAME-FORM ::= {
 *   NAMES            dMD
 *   WITH ATTRIBUTES  {dmdName}
 *   ID               id-nf-dMDNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const dMDNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": dMD /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [dmdName] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_dMDNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dMDNameForm */

/* eslint-enable */
