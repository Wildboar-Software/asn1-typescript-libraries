/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.js";
import { oidC } from "../SelectedAttributeTypes/oidC.oa.js";
import { id_nf_oidCNameForm } from "../SelectedObjectClasses/id-nf-oidCNameForm.va.js";
import { oidCobj } from "../SelectedObjectClasses/oidCobj.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.js";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
export { oidC } from "../SelectedAttributeTypes/oidC.oa.js";
export { id_nf_oidCNameForm } from "../SelectedObjectClasses/id-nf-oidCNameForm.va.js";
export { oidCobj } from "../SelectedObjectClasses/oidCobj.oa.js";

/* START_OF_SYMBOL_DEFINITION oidCNameForm */
/**
 * @summary oidCNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidCNameForm NAME-FORM ::= {
 *   NAMES            oidCobj
 *   WITH ATTRIBUTES  {oidC}
 *   ID               id-nf-oidCNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const oidCNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": oidCobj /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [oidC] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_oidCNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION oidCNameForm */

/* eslint-enable */
