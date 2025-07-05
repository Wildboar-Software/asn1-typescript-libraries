/* eslint-disable */
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { urnC } from "../SelectedAttributeTypes/urnC.oa.mjs";
import { id_nf_urnCNameForm } from "../SelectedObjectClasses/id-nf-urnCNameForm.va.mjs";
import { urnCobj } from "../SelectedObjectClasses/urnCobj.oa.mjs";
/**
 * @summary urnCNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * urnCNameForm NAME-FORM ::= {
 *   NAMES            urnCobj
 *   WITH ATTRIBUTES  {urnC}
 *   ID               id-nf-urnCNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const urnCNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": urnCobj /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [urnC] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_urnCNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
