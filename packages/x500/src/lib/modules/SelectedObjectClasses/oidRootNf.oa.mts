/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { oidC } from "../SelectedAttributeTypes/oidC.oa.mjs";
import { oidC1 } from "../SelectedAttributeTypes/oidC1.oa.mjs";
import { oidC2 } from "../SelectedAttributeTypes/oidC2.oa.mjs";
import { id_oidRootNf } from "../SelectedObjectClasses/id-oidRootNf.va.mjs";
import { oidRoot } from "../SelectedObjectClasses/oidRoot.oa.mjs";
/* START_OF_SYMBOL_DEFINITION oidRootNf */
/**
 * @summary oidRootNf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidRootNf NAME-FORM ::= {
 *   NAMES            oidRoot
 *   WITH ATTRIBUTES  {oidC1 | oidC2 | oidC}
 *   ID               id-oidRootNf }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const oidRootNf: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": oidRoot /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [oidC1, oidC2, oidC] /* OBJECT_FIELD_SETTING */,
    "&id": id_oidRootNf /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION oidRootNf */

/* eslint-enable */
