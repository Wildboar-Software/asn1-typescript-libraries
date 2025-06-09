/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.js";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.js";
import { id_nf_personNameForm } from "../SelectedObjectClasses/id-nf-personNameForm.va.js";
import { person } from "../SelectedObjectClasses/person.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.js";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
export { commonName } from "../SelectedAttributeTypes/commonName.oa.js";
export { id_nf_personNameForm } from "../SelectedObjectClasses/id-nf-personNameForm.va.js";
export { person } from "../SelectedObjectClasses/person.oa.js";

/* START_OF_SYMBOL_DEFINITION personNameForm */
/**
 * @summary personNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * personNameForm NAME-FORM ::= {
 *   NAMES            person
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-personNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const personNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": person /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_personNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION personNameForm */

/* eslint-enable */
