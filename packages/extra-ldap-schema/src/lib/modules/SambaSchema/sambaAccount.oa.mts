/* eslint-disable */
import {
    ObjectIdentifier as _OID,
} from "@wildboar/asn1";

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { id_samba_oc } from "../SambaSchema/id-samba-oc.va.mjs";

import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { lmPassword } from "../SambaSchema/lmPassword.oa.mjs";
import { ntPassword } from "../SambaSchema/ntPassword.oa.mjs";
import { pwdLastSet } from "../SambaSchema/pwdLastSet.oa.mjs";
import { logonTime } from "../SambaSchema/logonTime.oa.mjs";
import { logoffTime } from "../SambaSchema/logoffTime.oa.mjs";
import { kickoffTime } from "../SambaSchema/kickoffTime.oa.mjs";
import { pwdCanChange } from "../SambaSchema/pwdCanChange.oa.mjs";
import { pwdMustChange } from "../SambaSchema/pwdMustChange.oa.mjs";
import { acctFlags } from "../SambaSchema/acctFlags.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { smbHome } from "../SambaSchema/smbHome.oa.mjs";
import { homeDrive } from "../SambaSchema/homeDrive.oa.mjs";
import { scriptPath } from "../SambaSchema/scriptPath.oa.mjs";
import { profilePath } from "../SambaSchema/profilePath.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { userWorkstations } from "../SambaSchema/userWorkstations.oa.mjs";
import { primaryGroupID } from "../SambaSchema/primaryGroupID.oa.mjs";
import { domain } from "../SambaSchema/domain.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { rid } from "../SambaSchema/rid.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
/**
 * @summary sambaAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sambaAccount OBJECT-CLASS ::= {
 *     SUBCLASS OF         { top }
 *     KIND                auxiliary
 *     MUST CONTAIN        { uid | rid }
 *     MAY CONTAIN         {
 *         commonName
 *         | lmPassword
 *         | ntPassword
 *         | pwdLastSet
 *         | logonTime
 *         | logoffTime
 *         | kickoffTime
 *         | pwdCanChange
 *         | pwdMustChange
 *         | acctFlags
 *         | displayName
 *         | smbHome
 *         | homeDrive
 *         | scriptPath
 *         | profilePath
 *         | description
 *         | userWorkstations
 *         | primaryGroupID
 *         | domain
 *     }
 *     LDAP-NAME           { "sambaAccount" }
 *     LDAP-DESC           "Samba Auxilary Account"
 *     ID                  { id-samba-oc 3 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sambaAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ uid, rid, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, lmPassword, ntPassword, pwdLastSet, logonTime, logoffTime, kickoffTime, pwdCanChange, pwdMustChange, acctFlags, displayName, smbHome, homeDrive, scriptPath, profilePath, description, userWorkstations, primaryGroupID, domain, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sambaAccount" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Samba Auxilary Account" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([3,], id_samba_oc) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
