/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { fqdn } from "../Ldap60basev2/fqdn.oa.mjs";
// export { fqdn } from "../Ldap60basev2/fqdn.oa.mjs";
import { id_oc_ipaHost } from "../Ldap60basev2/id-oc-ipaHost.va.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { ipaClientVersion } from "../Ldap60basev2/ipaClientVersion.oa.mjs";
import { enrolledBy } from "../Ldap60basev2/enrolledBy.oa.mjs";
import { memberOf } from "../MSUser/memberOf.oa.mjs";
import { userClass } from "../LdapSchema2ldifCosine/userClass.oa.mjs";
import { ipaAssignedIDView } from "../Ldap60basev2/ipaAssignedIDView.oa.mjs";
// export { id_oc_ipaHost } from "../Ldap60basev2/id-oc-ipaHost.va.mjs";


/**
 * @summary ipaHost
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaHost OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { fqdn }
 *   MAY CONTAIN               { userPassword
 *                               | ipaClientVersion
 *                               | enrolledBy
 *                               | memberOf
 *                               | userClass
 *                               | ipaAssignedIDView }
 *   LDAP-NAME                 {"ipaHost"}
 *   ID                        id-oc-ipaHost }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaHost: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ fqdn, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ userPassword, ipaClientVersion, enrolledBy, memberOf, userClass, ipaAssignedIDView, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ipaHost" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaHost /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
