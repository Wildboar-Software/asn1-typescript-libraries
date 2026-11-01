/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxAuthUmaPCT } from "../LdapOx/id-oc-oxAuthUmaPCT.va.mjs";
import { clnId } from "../LdapOx/clnId.oa.mjs";
import { iat } from "../LdapOx/iat.oa.mjs";
import { exp } from "../LdapOx/exp.oa.mjs";
import { del } from "../LdapOx/del.oa.mjs";
import { tknCde } from "../LdapOx/tknCde.oa.mjs";
import { oxClaimValues } from "../LdapOx/oxClaimValues.oa.mjs";
// export { id_oc_oxAuthUmaPCT } from "../LdapOx/id-oc-oxAuthUmaPCT.va.mjs";


/**
 * @summary oxAuthUmaPCT
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxAuthUmaPCT OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { clnId
 *                               | iat
 *                               | exp
 *                               | del
 *                               | tknCde
 *                               | oxClaimValues }
 *   LDAP-NAME                 {"oxAuthUmaPCT"}
 *   ID                        id-oc-oxAuthUmaPCT }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxAuthUmaPCT: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ clnId, iat, exp, del, tknCde, oxClaimValues, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxAuthUmaPCT" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxAuthUmaPCT /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
