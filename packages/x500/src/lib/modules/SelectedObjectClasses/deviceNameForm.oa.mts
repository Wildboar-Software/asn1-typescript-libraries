/* eslint-disable */
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { device } from "../SelectedObjectClasses/device.oa.mjs";
import { id_nf_deviceNameForm } from "../SelectedObjectClasses/id-nf-deviceNameForm.va.mjs";
/**
 * @summary deviceNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * deviceNameForm NAME-FORM ::= {
 *   NAMES            device
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-deviceNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const deviceNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": device /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_deviceNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
