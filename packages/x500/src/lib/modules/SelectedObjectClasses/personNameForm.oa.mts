/* eslint-disable */
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_nf_personNameForm } from "../SelectedObjectClasses/id-nf-personNameForm.va.mjs";
import { person } from "../SelectedObjectClasses/person.oa.mjs";
/**
 * @summary personNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * personNameForm NAME-FORM ::= {
 *   NAMES            person
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-personNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const personNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": person /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_personNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
