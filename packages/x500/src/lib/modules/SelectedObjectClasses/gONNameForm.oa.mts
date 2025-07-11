/* eslint-disable */
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { groupOfNames } from "../SelectedObjectClasses/groupOfNames.oa.mjs";
import { id_nf_gONNameForm } from "../SelectedObjectClasses/id-nf-gONNameForm.va.mjs";
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

/* eslint-enable */
