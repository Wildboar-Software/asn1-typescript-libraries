/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { oidC } from "../SelectedAttributeTypes/oidC.oa.mjs";
import { id_nf_oidCNameForm } from "../SelectedObjectClasses/id-nf-oidCNameForm.va.mjs";
import { oidCobj } from "../SelectedObjectClasses/oidCobj.oa.mjs";
/**
 * @summary oidCNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidCNameForm NAME-FORM ::= {
 *   NAMES            oidCobj
 *   WITH ATTRIBUTES  {oidC}
 *   ID               id-nf-oidCNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const oidCNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": oidCobj /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [oidC] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_oidCNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
