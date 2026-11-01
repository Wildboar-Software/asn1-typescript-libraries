/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxU2fRequest } from "../LdapOx/id-oc-oxU2fRequest.va.mjs";
import { oxId } from "../LdapOx/oxId.oa.mjs";
import { oxRequestId } from "../LdapOx/oxRequestId.oa.mjs";
import { oxRequest } from "../LdapOx/oxRequest.oa.mjs";
import { oxSessionStateId } from "../LdapOx/oxSessionStateId.oa.mjs";
import { del } from "../LdapOx/del.oa.mjs";
import { exp } from "../LdapOx/exp.oa.mjs";
import { personInum } from "../LdapOx/personInum.oa.mjs";
import { creationDate } from "../LdapOx/creationDate.oa.mjs";
// export { id_oc_oxU2fRequest } from "../LdapOx/id-oc-oxU2fRequest.va.mjs";


/**
 * @summary oxU2fRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxU2fRequest OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { oxId
 *                               | oxRequestId
 *                               | oxRequest
 *                               | oxSessionStateId
 *                               | del
 *                               | exp
 *                               | personInum
 *                               | creationDate }
 *   LDAP-NAME                 {"oxU2fRequest"}
 *   ID                        id-oc-oxU2fRequest }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxU2fRequest: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ oxId, oxRequestId, oxRequest, oxSessionStateId, del, exp, personInum, creationDate, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxU2fRequest" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxU2fRequest /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
