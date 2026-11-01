/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { objectSid } from "../MSUser/objectSid.oa.mjs";
// export { objectSid } from "../MSUser/objectSid.oa.mjs";
import { foreignIdentifier } from "../MSUser/foreignIdentifier.oa.mjs";
// export { foreignIdentifier } from "../MSUser/foreignIdentifier.oa.mjs";
import { id_oc_foreignSecurityPrincipal } from "../LdapSchema2ldifMicrosoft/id-oc-foreignSecurityPrincipal.va.mjs";
// export { id_oc_foreignSecurityPrincipal } from "../LdapSchema2ldifMicrosoft/id-oc-foreignSecurityPrincipal.va.mjs";


/**
 * @summary foreignSecurityPrincipal
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * foreignSecurityPrincipal OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectSid }
 *   MAY CONTAIN               { foreignIdentifier }
 *   LDAP-NAME                 {"foreignSecurityPrincipal"}
 *   ID                        id-oc-foreignSecurityPrincipal }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const foreignSecurityPrincipal: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectSid, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ foreignIdentifier, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "foreignSecurityPrincipal" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_foreignSecurityPrincipal /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
