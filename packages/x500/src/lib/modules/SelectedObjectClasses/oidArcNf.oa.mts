/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { oidC } from "../SelectedAttributeTypes/oidC.oa.mjs";
import { id_oidArcNf } from "../SelectedObjectClasses/id-oidArcNf.va.mjs";
import { oidArc } from "../SelectedObjectClasses/oidArc.oa.mjs";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
export { oidC } from "../SelectedAttributeTypes/oidC.oa.mjs";
export { id_oidArcNf } from "../SelectedObjectClasses/id-oidArcNf.va.mjs";
export { oidArc } from "../SelectedObjectClasses/oidArc.oa.mjs";

/* START_OF_SYMBOL_DEFINITION oidArcNf */
/**
 * @summary oidArcNf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidArcNf NAME-FORM ::= {
 *   NAMES            oidArc
 *   WITH ATTRIBUTES  {oidC}
 *   ID               id-oidArcNf }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const oidArcNf: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": oidArc /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [oidC] /* OBJECT_FIELD_SETTING */,
    "&id": id_oidArcNf /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION oidArcNf */

/* eslint-enable */
