/* eslint-disable */
import { oidArc } from "../SelectedObjectClasses/oidArc.oa.mjs";
// export { oidArc } from "../SelectedObjectClasses/oidArc.oa.mjs";
import { oidC } from "../SelectedAttributeTypes/oidC.oa.mjs";
// export { oidC } from "../SelectedAttributeTypes/oidC.oa.mjs";
import { id_oidArcNf } from "../SelectedObjectClasses/id-oidArcNf.va.mjs";
// export { id_oidArcNf } from "../SelectedObjectClasses/id-oidArcNf.va.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


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
export
const oidArcNf: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": oidArc /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ oidC, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oidArcNf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
