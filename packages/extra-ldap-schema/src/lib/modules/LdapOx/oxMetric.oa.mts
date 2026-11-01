/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxMetric } from "../LdapOx/id-oc-oxMetric.va.mjs";
import { uniqueIdentifier } from "../SelectedAttributeTypes/uniqueIdentifier.oa.mjs";
import { oxStartDate } from "../LdapOx/oxStartDate.oa.mjs";
import { oxEndDate } from "../LdapOx/oxEndDate.oa.mjs";
import { oxApplicationType } from "../LdapOx/oxApplicationType.oa.mjs";
import { oxMetricType } from "../LdapOx/oxMetricType.oa.mjs";
import { creationDate } from "../LdapOx/creationDate.oa.mjs";
import { del } from "../LdapOx/del.oa.mjs";
import { exp } from "../LdapOx/exp.oa.mjs";
import { oxData } from "../LdapOx/oxData.oa.mjs";
import { oxHost } from "../LdapOx/oxHost.oa.mjs";
// export { id_oc_oxMetric } from "../LdapOx/id-oc-oxMetric.va.mjs";


/**
 * @summary oxMetric
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxMetric OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { uniqueIdentifier
 *                               | oxStartDate
 *                               | oxEndDate
 *                               | oxApplicationType
 *                               | oxMetricType
 *                               | creationDate
 *                               | del
 *                               | exp
 *                               | oxData
 *                               | oxHost }
 *   LDAP-NAME                 {"oxMetric"}
 *   ID                        id-oc-oxMetric }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxMetric: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ uniqueIdentifier, oxStartDate, oxEndDate, oxApplicationType, oxMetricType, creationDate, del, exp, oxData, oxHost, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxMetric" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxMetric /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
