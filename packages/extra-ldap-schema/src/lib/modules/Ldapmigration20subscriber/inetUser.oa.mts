/* eslint-disable */
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_inetUser } from "../Ldapmigration20subscriber/id-oc-inetUser.va.mjs";
import { memberOf } from "../MSUser/memberOf.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { inetUserHttpURL } from "./inetUserHttpURL.oa.mjs";
import { inetUserStatus } from "./inetUserStatus.oa.mjs";

/**
 * @summary inetUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { uid
 *                               | inetUserStatus
 *                               | inetUserHttpURL
 *                               | userPassword
 *                               | memberOf }
 *   LDAP-NAME                 {"inetUser"}
 *   LDAP-DESC                 "Auxiliary class which must be present in an entry for delivery of subscriber services"
 *   ID                        id-oc-inetUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [uid, inetUserStatus, inetUserHttpURL, userPassword, memberOf] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["inetUser"],
    "&ldapDesc": "Auxiliary class which must be present in an entry for delivery of subscriber services" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_inetUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
