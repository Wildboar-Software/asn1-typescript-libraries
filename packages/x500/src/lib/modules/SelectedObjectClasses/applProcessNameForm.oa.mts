/* eslint-disable */
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { applicationProcess } from "../SelectedObjectClasses/applicationProcess.oa.mjs";
import { id_nf_applProcessNameForm } from "../SelectedObjectClasses/id-nf-applProcessNameForm.va.mjs";
/**
 * @summary applProcessNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * applProcessNameForm NAME-FORM ::= {
 *   NAMES            applicationProcess
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-applProcessNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const applProcessNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": applicationProcess /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_applProcessNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
