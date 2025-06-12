/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_nf_orgRoleNameForm } from "../SelectedObjectClasses/id-nf-orgRoleNameForm.va.mjs";
import { organizationalRole } from "../SelectedObjectClasses/organizationalRole.oa.mjs";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
export { id_nf_orgRoleNameForm } from "../SelectedObjectClasses/id-nf-orgRoleNameForm.va.mjs";
export { organizationalRole } from "../SelectedObjectClasses/organizationalRole.oa.mjs";

/* START_OF_SYMBOL_DEFINITION orgRoleNameForm */
/**
 * @summary orgRoleNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * orgRoleNameForm NAME-FORM ::= {
 *   NAMES            organizationalRole
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-orgRoleNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const orgRoleNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": organizationalRole /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_orgRoleNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION orgRoleNameForm */

/* eslint-enable */
