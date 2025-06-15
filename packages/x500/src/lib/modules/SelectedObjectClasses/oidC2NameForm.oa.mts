/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { oidC } from "../SelectedAttributeTypes/oidC.oa.mjs";
import { id_nf_oidC2NameForm } from "../SelectedObjectClasses/id-nf-oidC2NameForm.va.mjs";
import { oidCobj } from "../SelectedObjectClasses/oidCobj.oa.mjs";
/**
 * @summary oidC2NameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidC2NameForm NAME-FORM ::= {
 *   NAMES            oidCobj
 *   WITH ATTRIBUTES  {oidC}
 *   ID               id-nf-oidC2NameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const oidC2NameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": oidCobj /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [oidC] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_oidC2NameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
