/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { dSA } from "../SelectedObjectClasses/dSA.oa.mjs";
import { id_nf_dSANameForm } from "../SelectedObjectClasses/id-nf-dSANameForm.va.mjs";
/* START_OF_SYMBOL_DEFINITION dSANameForm */
/**
 * @summary dSANameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dSANameForm NAME-FORM ::= {
 *   NAMES            dSA
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-dSANameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const dSANameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": dSA /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_dSANameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dSANameForm */

/* eslint-enable */
