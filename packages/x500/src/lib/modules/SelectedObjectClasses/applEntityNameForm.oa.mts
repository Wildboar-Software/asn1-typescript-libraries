/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { applicationEntity } from "../SelectedObjectClasses/applicationEntity.oa.mjs";
import { id_nf_applEntityNameForm } from "../SelectedObjectClasses/id-nf-applEntityNameForm.va.mjs";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
export { applicationEntity } from "../SelectedObjectClasses/applicationEntity.oa.mjs";
export { id_nf_applEntityNameForm } from "../SelectedObjectClasses/id-nf-applEntityNameForm.va.mjs";

/* START_OF_SYMBOL_DEFINITION applEntityNameForm */
/**
 * @summary applEntityNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * applEntityNameForm NAME-FORM ::= {
 *   NAMES            applicationEntity
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-applEntityNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const applEntityNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": applicationEntity /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_applEntityNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION applEntityNameForm */

/* eslint-enable */
