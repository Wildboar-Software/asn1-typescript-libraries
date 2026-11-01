/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxAuthUmaRPT } from "../LdapOx/id-oc-oxAuthUmaRPT.va.mjs";
import { authnTime } from "../LdapOx/authnTime.oa.mjs";
import { clnId } from "../LdapOx/clnId.oa.mjs";
import { iat } from "../LdapOx/iat.oa.mjs";
import { exp } from "../LdapOx/exp.oa.mjs";
import { del } from "../LdapOx/del.oa.mjs";
import { tknCde } from "../LdapOx/tknCde.oa.mjs";
import { oxAuthUserId } from "../LdapOx/oxAuthUserId.oa.mjs";
import { oxUmaPermission } from "../LdapOx/oxUmaPermission.oa.mjs";
import { uuid } from "../LdapOx/uuid.oa.mjs";
// export { id_oc_oxAuthUmaRPT } from "../LdapOx/id-oc-oxAuthUmaRPT.va.mjs";


/**
 * @summary oxAuthUmaRPT
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxAuthUmaRPT OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { authnTime
 *                               | clnId
 *                               | iat
 *                               | exp
 *                               | del
 *                               | tknCde
 *                               | oxAuthUserId
 *                               | oxUmaPermission
 *                               | uuid }
 *   LDAP-NAME                 {"oxAuthUmaRPT"}
 *   ID                        id-oc-oxAuthUmaRPT }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxAuthUmaRPT: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ authnTime, clnId, iat, exp, del, tknCde, oxAuthUserId, oxUmaPermission, uuid, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxAuthUmaRPT" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxAuthUmaRPT /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
