/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { id_nf_orgUnitNameForm } from "../SelectedObjectClasses/id-nf-orgUnitNameForm.va.mjs";
import { organizationalUnit } from "../SelectedObjectClasses/organizationalUnit.oa.mjs";
/* START_OF_SYMBOL_DEFINITION orgUnitNameForm */
/**
 * @summary orgUnitNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * orgUnitNameForm NAME-FORM ::= {
 *   NAMES            organizationalUnit
 *   WITH ATTRIBUTES  {organizationalUnitName}
 *   ID               id-nf-orgUnitNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const orgUnitNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": organizationalUnit /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [organizationalUnitName] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_orgUnitNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION orgUnitNameForm */

/* eslint-enable */
