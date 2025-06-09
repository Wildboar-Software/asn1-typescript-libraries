/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.js";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.js";
import { device } from "../SelectedObjectClasses/device.oa.js";
import { id_nf_deviceNameForm } from "../SelectedObjectClasses/id-nf-deviceNameForm.va.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.js";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
export { commonName } from "../SelectedAttributeTypes/commonName.oa.js";
export { device } from "../SelectedObjectClasses/device.oa.js";
export { id_nf_deviceNameForm } from "../SelectedObjectClasses/id-nf-deviceNameForm.va.js";

/* START_OF_SYMBOL_DEFINITION deviceNameForm */
/**
 * @summary deviceNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * deviceNameForm NAME-FORM ::= {
 *   NAMES            device
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-deviceNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const deviceNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": device /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_deviceNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION deviceNameForm */

/* eslint-enable */
