/* eslint-disable */
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { applicationEntity } from "../SelectedObjectClasses/applicationEntity.oa.mjs";
import { id_nf_applEntityNameForm } from "../SelectedObjectClasses/id-nf-applEntityNameForm.va.mjs";
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

/* eslint-enable */
