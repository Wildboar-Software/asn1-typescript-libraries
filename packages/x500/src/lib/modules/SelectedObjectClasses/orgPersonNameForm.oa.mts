/* eslint-disable */
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { id_nf_orgPersonNameForm } from "../SelectedObjectClasses/id-nf-orgPersonNameForm.va.mjs";
import { organizationalPerson } from "../SelectedObjectClasses/organizationalPerson.oa.mjs";
/**
 * @summary orgPersonNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * orgPersonNameForm NAME-FORM ::= {
 *   NAMES            organizationalPerson
 *   WITH ATTRIBUTES  {commonName}
 *   AND OPTIONALLY   {organizationalUnitName}
 *   ID               id-nf-orgPersonNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const orgPersonNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": organizationalPerson /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [organizationalUnitName] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_orgPersonNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
