/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { dmdName } from "../SelectedAttributeTypes/dmdName.oa.mjs";
import { dMD } from "../SelectedObjectClasses/dMD.oa.mjs";
import { id_nf_dMDNameForm } from "../SelectedObjectClasses/id-nf-dMDNameForm.va.mjs";
/**
 * @summary dMDNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dMDNameForm NAME-FORM ::= {
 *   NAMES            dMD
 *   WITH ATTRIBUTES  {dmdName}
 *   ID               id-nf-dMDNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const dMDNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": dMD /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [dmdName] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_dMDNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
