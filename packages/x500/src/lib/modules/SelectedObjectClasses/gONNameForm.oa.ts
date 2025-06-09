/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.js";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.js";
import { groupOfNames } from "../SelectedObjectClasses/groupOfNames.oa.js";
import { id_nf_gONNameForm } from "../SelectedObjectClasses/id-nf-gONNameForm.va.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.js";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
export { commonName } from "../SelectedAttributeTypes/commonName.oa.js";
export { groupOfNames } from "../SelectedObjectClasses/groupOfNames.oa.js";
export { id_nf_gONNameForm } from "../SelectedObjectClasses/id-nf-gONNameForm.va.js";

/* START_OF_SYMBOL_DEFINITION gONNameForm */
/**
 * @summary gONNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * gONNameForm NAME-FORM ::= {
 *   NAMES            groupOfNames
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-gONNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const gONNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": groupOfNames /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_gONNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION gONNameForm */

/* eslint-enable */
