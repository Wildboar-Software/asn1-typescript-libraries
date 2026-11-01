/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_controlAccessRight } from "../LdapSchema2ldifMicrosoft/id-oc-controlAccessRight.va.mjs";
import { rightsGuid } from "../MSUser/rightsGuid.oa.mjs";
import { appliesTo } from "../MSUser/appliesTo.oa.mjs";
import { localizationDisplayId } from "../MSUser/localizationDisplayId.oa.mjs";
import { validAccesses } from "../MSUser/validAccesses.oa.mjs";
// export { id_oc_controlAccessRight } from "../LdapSchema2ldifMicrosoft/id-oc-controlAccessRight.va.mjs";


/**
 * @summary controlAccessRight
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * controlAccessRight OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { rightsGuid
 *                               | appliesTo
 *                               | localizationDisplayId
 *                               | validAccesses }
 *   LDAP-NAME                 {"controlAccessRight"}
 *   ID                        id-oc-controlAccessRight }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const controlAccessRight: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ rightsGuid, appliesTo, localizationDisplayId, validAccesses, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "controlAccessRight" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_controlAccessRight /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
