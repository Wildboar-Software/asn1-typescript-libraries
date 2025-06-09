/* eslint-disable */
import { cRLDistributionPoint } from "../AuthenticationFramework/cRLDistributionPoint.oa.js";
import { id_nf_cRLDistPtNameForm } from "../AuthenticationFramework/id-nf-cRLDistPtNameForm.va.js";
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.js";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.js";
export { cRLDistributionPoint } from "../AuthenticationFramework/cRLDistributionPoint.oa.js";
export { id_nf_cRLDistPtNameForm } from "../AuthenticationFramework/id-nf-cRLDistPtNameForm.va.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.js";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
export { commonName } from "../SelectedAttributeTypes/commonName.oa.js";

/* START_OF_SYMBOL_DEFINITION cRLDistPtNameForm */
/**
 * @summary cRLDistPtNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cRLDistPtNameForm NAME-FORM ::= {
 *   NAMES               cRLDistributionPoint
 *   WITH ATTRIBUTES     {commonName}
 *   ID                  id-nf-cRLDistPtNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const cRLDistPtNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": cRLDistributionPoint /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_cRLDistPtNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION cRLDistPtNameForm */

/* eslint-enable */
