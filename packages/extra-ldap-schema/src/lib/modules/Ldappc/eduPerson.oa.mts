/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_eduPerson } from "../Ldappc/id-oc-eduPerson.va.mjs";
import { eduPersonAffiliation } from "../Ldappc/eduPersonAffiliation.oa.mjs";
import { eduPersonNickname } from "../Ldappc/eduPersonNickname.oa.mjs";
import { eduPersonOrgDN } from "../Ldappc/eduPersonOrgDN.oa.mjs";
import { eduPersonOrgUnitDN } from "../Ldappc/eduPersonOrgUnitDN.oa.mjs";
import { eduPersonPrimaryAffiliation } from "../Ldappc/eduPersonPrimaryAffiliation.oa.mjs";
import { eduPersonPrincipalName } from "../Ldappc/eduPersonPrincipalName.oa.mjs";
import { eduPersonEntitlement } from "../Ldappc/eduPersonEntitlement.oa.mjs";
import { eduPersonPrimaryOrgUnitDN } from "../Ldappc/eduPersonPrimaryOrgUnitDN.oa.mjs";
import { eduPersonScopedAffiliation } from "../Ldappc/eduPersonScopedAffiliation.oa.mjs";
// export { id_oc_eduPerson } from "../Ldappc/id-oc-eduPerson.va.mjs";


/**
 * @summary eduPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * eduPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { eduPersonAffiliation
 *                               | eduPersonNickname
 *                               | eduPersonOrgDN
 *                               | eduPersonOrgUnitDN
 *                               | eduPersonPrimaryAffiliation
 *                               | eduPersonPrincipalName
 *                               | eduPersonEntitlement
 *                               | eduPersonPrimaryOrgUnitDN
 *                               | eduPersonScopedAffiliation }
 *   LDAP-NAME                 {"eduPerson"}
 *   ID                        id-oc-eduPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const eduPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ eduPersonAffiliation, eduPersonNickname, eduPersonOrgDN, eduPersonOrgUnitDN, eduPersonPrimaryAffiliation, eduPersonPrincipalName, eduPersonEntitlement, eduPersonPrimaryOrgUnitDN, eduPersonScopedAffiliation, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "eduPerson" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_eduPerson /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
