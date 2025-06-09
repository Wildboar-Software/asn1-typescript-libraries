/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.js";
import { stateOrProvinceName } from "../SelectedAttributeTypes/stateOrProvinceName.oa.js";
import { id_nf_sOPNameForm } from "../SelectedObjectClasses/id-nf-sOPNameForm.va.js";
import { locality } from "../SelectedObjectClasses/locality.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.js";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
export { stateOrProvinceName } from "../SelectedAttributeTypes/stateOrProvinceName.oa.js";
export { id_nf_sOPNameForm } from "../SelectedObjectClasses/id-nf-sOPNameForm.va.js";
export { locality } from "../SelectedObjectClasses/locality.oa.js";

/* START_OF_SYMBOL_DEFINITION sOPNameForm */
/**
 * @summary sOPNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sOPNameForm NAME-FORM ::= {
 *   NAMES            locality
 *   WITH ATTRIBUTES  {stateOrProvinceName}
 *   ID               id-nf-sOPNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const sOPNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": locality /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [stateOrProvinceName] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_sOPNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION sOPNameForm */

/* eslint-enable */
