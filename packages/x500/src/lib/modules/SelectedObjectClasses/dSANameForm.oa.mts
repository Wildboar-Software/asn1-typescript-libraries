/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { dSA } from "../SelectedObjectClasses/dSA.oa.mjs";
import { id_nf_dSANameForm } from "../SelectedObjectClasses/id-nf-dSANameForm.va.mjs";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
export { dSA } from "../SelectedObjectClasses/dSA.oa.mjs";
export { id_nf_dSANameForm } from "../SelectedObjectClasses/id-nf-dSANameForm.va.mjs";

/* START_OF_SYMBOL_DEFINITION dSANameForm */
/**
 * @summary dSANameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dSANameForm NAME-FORM ::= {
 *   NAMES            dSA
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-dSANameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const dSANameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": dSA /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_dSANameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dSANameForm */

/* eslint-enable */
