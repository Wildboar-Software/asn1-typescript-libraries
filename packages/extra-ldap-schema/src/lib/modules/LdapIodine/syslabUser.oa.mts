/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { groupMembership } from "../LdapIodine/groupMembership.oa.mjs";
import { id_oc_syslabUser } from "../LdapIodine/id-oc-syslabUser.va.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { homeDirectory } from "../NIS/homeDirectory.oa.mjs";
import { loginShell } from "../NIS/loginShell.oa.mjs";
import { posixAccount } from "../NIS/posixAccount.oa.mjs";
import { uidNumber } from "../NIS/uidNumber.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";

/**
 * @summary syslabUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * syslabUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { posixAccount }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName
 *                               | uid
 *                               | uidNumber
 *                               | gidNumber
 *                               | homeDirectory
 *                               | loginShell }
 *   MAY CONTAIN               { groupMembership }
 *   LDAP-NAME                 {"syslabUser"}
 *   ID                        id-oc-syslabUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const syslabUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [posixAccount] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, uid, uidNumber, gidNumber, homeDirectory, loginShell] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [groupMembership] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["syslabUser"],
    "&id": id_oc_syslabUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
