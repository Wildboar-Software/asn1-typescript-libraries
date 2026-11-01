/* eslint-disable */
import { groupOfNames } from "../SelectedObjectClasses/groupOfNames.oa.mjs";
// export { groupOfNames } from "../SelectedObjectClasses/groupOfNames.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_nf_gONNameForm } from "../SelectedObjectClasses/id-nf-gONNameForm.va.mjs";
// export { id_nf_gONNameForm } from "../SelectedObjectClasses/id-nf-gONNameForm.va.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


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
export
const gONNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": groupOfNames /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_gONNameForm /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
