/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { gosaDefaultLanguage } from "../LdapGosaCoreGosaSamba3/gosaDefaultLanguage.oa.mjs";
import { id_oc_gosaIntranetAccount } from "../LdapGosaCoreGosaSamba3/id-oc-gosaIntranetAccount.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";


/**
 * @summary gosaIntranetAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaIntranetAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName
 *                               | uid }
 *   MAY CONTAIN               { gosaDefaultLanguage }
 *   LDAP-NAME                 {"gosaIntranetAccount"}
 *   LDAP-DESC                 "GOsa Inatrent enabling account (v2.7)"
 *   ID                        id-oc-gosaIntranetAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaIntranetAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, uid, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gosaDefaultLanguage, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gosaIntranetAccount" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "GOsa Inatrent enabling account (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaIntranetAccount /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

