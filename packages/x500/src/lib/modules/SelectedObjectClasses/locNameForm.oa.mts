/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { id_nf_locNameForm } from "../SelectedObjectClasses/id-nf-locNameForm.va.mjs";
import { locality } from "../SelectedObjectClasses/locality.oa.mjs";
/* START_OF_SYMBOL_DEFINITION locNameForm */
/**
 * @summary locNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * locNameForm NAME-FORM ::= {
 *   NAMES            locality
 *   WITH ATTRIBUTES  {localityName}
 *   ID               id-nf-locNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const locNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": locality /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [localityName] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_locNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION locNameForm */

/* eslint-enable */
