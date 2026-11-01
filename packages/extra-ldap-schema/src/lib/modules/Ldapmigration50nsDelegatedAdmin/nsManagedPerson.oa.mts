/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsManagedPerson } from "../Ldapmigration50nsDelegatedAdmin/id-oc-nsManagedPerson.va.mjs";
import { memberOf } from "../MSUser/memberOf.oa.mjs";
import { nsDADomain } from "../Ldapmigration50nsDelegatedAdmin/nsDADomain.oa.mjs";
import { nsdaCapability } from "../Ldapmigration50nsDelegatedAdmin/nsdaCapability.oa.mjs";
import { nsSearchFilter } from "../Ldapmigration50nsDelegatedAdmin/nsSearchFilter.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { nsdaModifiableBy } from "../Ldapmigration50nsDelegatedAdmin/nsdaModifiableBy.oa.mjs";
// export { id_oc_nsManagedPerson } from "../Ldapmigration50nsDelegatedAdmin/id-oc-nsManagedPerson.va.mjs";


/**
 * @summary nsManagedPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsManagedPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { memberOf
 *                               | nsDADomain
 *                               | nsdaCapability
 *                               | nsSearchFilter
 *                               | owner
 *                               | nsdaModifiableBy }
 *   LDAP-NAME                 {"nsManagedPerson"}
 *   LDAP-DESC                 "Delegated Admin marker for managed person"
 *   ID                        id-oc-nsManagedPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsManagedPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ memberOf, nsDADomain, nsdaCapability, nsSearchFilter, owner, nsdaModifiableBy, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsManagedPerson" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Delegated Admin marker for managed person" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsManagedPerson /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
