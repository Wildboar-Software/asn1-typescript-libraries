/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.js";
import { urnC } from "../SelectedAttributeTypes/urnC.oa.js";
import { id_nf_urnCNameForm } from "../SelectedObjectClasses/id-nf-urnCNameForm.va.js";
import { urnCobj } from "../SelectedObjectClasses/urnCobj.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.js";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
export { urnC } from "../SelectedAttributeTypes/urnC.oa.js";
export { id_nf_urnCNameForm } from "../SelectedObjectClasses/id-nf-urnCNameForm.va.js";
export { urnCobj } from "../SelectedObjectClasses/urnCobj.oa.js";

/* START_OF_SYMBOL_DEFINITION urnCNameForm */
/**
 * @summary urnCNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * urnCNameForm NAME-FORM ::= {
 *   NAMES            urnCobj
 *   WITH ATTRIBUTES  {urnC}
 *   ID               id-nf-urnCNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const urnCNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": urnCobj /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [urnC] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_urnCNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION urnCNameForm */

/* eslint-enable */
