/* eslint-disable */
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { oidC } from "../SelectedAttributeTypes/oidC.oa.mjs";
import { oidC1 } from "../SelectedAttributeTypes/oidC1.oa.mjs";
import { oidC2 } from "../SelectedAttributeTypes/oidC2.oa.mjs";
import { id_oidRootNf } from "../SelectedObjectClasses/id-oidRootNf.va.mjs";
import { oidRoot } from "../SelectedObjectClasses/oidRoot.oa.mjs";
/**
 * @summary oidRootNf
 * @description
 *
 * Names `oidRoot` by `oidC1`, `oidC2`, and `oidC` — `|` is set union;
 * this binding treats all three as mandatory distinguished attributes
 * (the RDN contains all three). Moved from X.660. OID is `{id 4}`, not
 * under `id-nf`.
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

/* eslint-enable */
