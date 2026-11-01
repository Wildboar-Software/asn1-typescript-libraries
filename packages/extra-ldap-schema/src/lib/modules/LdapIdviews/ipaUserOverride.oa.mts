/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { ipaOverrideAnchor } from "../LdapIdviews/ipaOverrideAnchor.oa.mjs";
import { id_oc_ipaUserOverride } from "../LdapIdviews/id-oc-ipaUserOverride.va.mjs";

import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { uidNumber } from "../NIS/uidNumber.oa.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { homeDirectory } from "../NIS/homeDirectory.oa.mjs";
import { loginShell } from "../NIS/loginShell.oa.mjs";
import { gecos } from "../NIS/gecos.oa.mjs";
import { ipaOriginalUid } from "../LdapIdviews/ipaOriginalUid.oa.mjs";
/**
 * @summary ipaUserOverride
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaUserOverride OBJECT-CLASS ::= {
 *   SUBCLASS OF               { ipaOverrideAnchor }
 *   MAY CONTAIN               { uid
 *                               | uidNumber
 *                               | gidNumber
 *                               | homeDirectory
 *                               | loginShell
 *                               | gecos
 *                               | ipaOriginalUid }
 *   LDAP-NAME                 {"ipaUserOverride"}
 *   LDAP-DESC                 "Override for User Attributes"
 *   ID                        id-oc-ipaUserOverride }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaUserOverride: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ ipaOverrideAnchor, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ uid, uidNumber, gidNumber, homeDirectory, loginShell, gecos, ipaOriginalUid, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ipaUserOverride" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Override for User Attributes" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaUserOverride /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
