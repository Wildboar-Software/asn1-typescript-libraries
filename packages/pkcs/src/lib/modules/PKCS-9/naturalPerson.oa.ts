/* eslint-disable */
import type { OBJECT_CLASS } from "@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca.js";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta.js";
import { top } from "@wildboar/x500/src/lib/modules/InformationFramework/top.oa.js";
import { NaturalPersonAttributeSet } from "../PKCS-9/NaturalPersonAttributeSet.osa.js";
import { pkcs_9_oc_naturalPerson } from "../PKCS-9/pkcs-9-oc-naturalPerson.va.js";

/* START_OF_SYMBOL_DEFINITION naturalPerson */
/**
 * @summary naturalPerson
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * naturalPerson OBJECT-CLASS ::= {
 *         SUBCLASS OF     { top }
 *         KIND            auxiliary
 *         MAY CONTAIN     { NaturalPersonAttributeSet }
 *         ID              pkcs-9-oc-naturalPerson
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const naturalPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        ...NaturalPersonAttributeSet,
    ] /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_oc_naturalPerson /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION naturalPerson */

/* eslint-enable */
