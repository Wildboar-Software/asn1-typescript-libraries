/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_nextcloudUser } from "../LdapNextcloud/id-oc-nextcloudUser.va.mjs";
import { nextcloudEnabled } from "../LdapNextcloud/nextcloudEnabled.oa.mjs";
import { nextcloudQuota } from "../LdapNextcloud/nextcloudQuota.oa.mjs";


/**
 * @summary nextcloudUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nextcloudUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { nextcloudEnabled
 *                               | nextcloudQuota }
 *   LDAP-NAME                 {"nextcloudUser"}
 *   LDAP-DESC                 "A Nextcloud user"
 *   ID                        id-oc-nextcloudUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nextcloudUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ nextcloudEnabled, nextcloudQuota, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nextcloudUser" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "A Nextcloud user" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nextcloudUser /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

