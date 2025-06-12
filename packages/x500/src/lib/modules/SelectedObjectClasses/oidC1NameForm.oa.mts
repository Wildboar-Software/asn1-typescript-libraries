/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { oidC } from "../SelectedAttributeTypes/oidC.oa.mjs";
import { id_nf_oidC1NameForm } from "../SelectedObjectClasses/id-nf-oidC1NameForm.va.mjs";
import { oidCobj } from "../SelectedObjectClasses/oidCobj.oa.mjs";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
export { oidC } from "../SelectedAttributeTypes/oidC.oa.mjs";
export { id_nf_oidC1NameForm } from "../SelectedObjectClasses/id-nf-oidC1NameForm.va.mjs";
export { oidCobj } from "../SelectedObjectClasses/oidCobj.oa.mjs";

/* START_OF_SYMBOL_DEFINITION oidC1NameForm */
/**
 * @summary oidC1NameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidC1NameForm NAME-FORM ::= {
 *   NAMES            oidCobj
 *   WITH ATTRIBUTES  {oidC}
 *   ID               id-nf-oidC1NameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const oidC1NameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": oidCobj /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [oidC] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_oidC1NameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION oidC1NameForm */

/* eslint-enable */
