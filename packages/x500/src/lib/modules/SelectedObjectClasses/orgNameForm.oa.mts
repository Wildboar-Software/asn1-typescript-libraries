/* eslint-disable */
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { id_nf_orgNameForm } from "../SelectedObjectClasses/id-nf-orgNameForm.va.mjs";
import { organization } from "../SelectedObjectClasses/organization.oa.mjs";
/**
 * @summary orgNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * orgNameForm NAME-FORM ::= {
 *   NAMES            organization
 *   WITH ATTRIBUTES  {organizationName}
 *   ID               id-nf-orgNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const orgNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": organization /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [organizationName] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_orgNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
