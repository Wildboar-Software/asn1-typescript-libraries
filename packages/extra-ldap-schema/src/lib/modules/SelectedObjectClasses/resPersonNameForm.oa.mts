/* eslint-disable */
import { residentialPerson } from "../SelectedObjectClasses/residentialPerson.oa.mjs";
// export { residentialPerson } from "../SelectedObjectClasses/residentialPerson.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { streetAddress } from "../SelectedAttributeTypes/streetAddress.oa.mjs";
// export { streetAddress } from "../SelectedAttributeTypes/streetAddress.oa.mjs";
import { id_nf_resPersonNameForm } from "../SelectedObjectClasses/id-nf-resPersonNameForm.va.mjs";
// export { id_nf_resPersonNameForm } from "../SelectedObjectClasses/id-nf-resPersonNameForm.va.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary resPersonNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * resPersonNameForm NAME-FORM ::= {
 *   NAMES            residentialPerson
 *   WITH ATTRIBUTES  {commonName}
 *   AND OPTIONALLY   {streetAddress}
 *   ID               id-nf-resPersonNameForm }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const resPersonNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": residentialPerson /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ streetAddress, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_resPersonNameForm /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
