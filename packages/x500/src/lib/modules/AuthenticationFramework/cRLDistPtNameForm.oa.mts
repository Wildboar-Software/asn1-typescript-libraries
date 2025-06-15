/* eslint-disable */
import { cRLDistributionPoint } from "../AuthenticationFramework/cRLDistributionPoint.oa.mjs";
import { id_nf_cRLDistPtNameForm } from "../AuthenticationFramework/id-nf-cRLDistPtNameForm.va.mjs";
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
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

/* eslint-enable */
