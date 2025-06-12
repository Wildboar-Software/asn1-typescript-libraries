/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { stateOrProvinceName } from "../SelectedAttributeTypes/stateOrProvinceName.oa.mjs";
import { id_nf_sOPNameForm } from "../SelectedObjectClasses/id-nf-sOPNameForm.va.mjs";
import { locality } from "../SelectedObjectClasses/locality.oa.mjs";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
export { stateOrProvinceName } from "../SelectedAttributeTypes/stateOrProvinceName.oa.mjs";
export { id_nf_sOPNameForm } from "../SelectedObjectClasses/id-nf-sOPNameForm.va.mjs";
export { locality } from "../SelectedObjectClasses/locality.oa.mjs";

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
