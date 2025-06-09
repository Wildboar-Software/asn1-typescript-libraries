/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.js";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.js";
import { applicationProcess } from "../SelectedObjectClasses/applicationProcess.oa.js";
import { id_nf_applProcessNameForm } from "../SelectedObjectClasses/id-nf-applProcessNameForm.va.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.js";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
export { commonName } from "../SelectedAttributeTypes/commonName.oa.js";
export { applicationProcess } from "../SelectedObjectClasses/applicationProcess.oa.js";
export { id_nf_applProcessNameForm } from "../SelectedObjectClasses/id-nf-applProcessNameForm.va.js";

/* START_OF_SYMBOL_DEFINITION applProcessNameForm */
/**
 * @summary applProcessNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * applProcessNameForm NAME-FORM ::= {
 *   NAMES            applicationProcess
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-applProcessNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const applProcessNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": applicationProcess /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_applProcessNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION applProcessNameForm */

/* eslint-enable */
