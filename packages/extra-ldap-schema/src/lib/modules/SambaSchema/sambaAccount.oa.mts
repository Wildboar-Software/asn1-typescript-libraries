/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_samba_oc } from "../SambaSchema/id-samba-oc.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { acctFlags } from "./acctFlags.oa.mjs";
import { domain } from "./domain.oa.mjs";
import { homeDrive } from "./homeDrive.oa.mjs";
import { kickoffTime } from "./kickoffTime.oa.mjs";
import { lmPassword } from "./lmPassword.oa.mjs";
import { logoffTime } from "./logoffTime.oa.mjs";
import { logonTime } from "./logonTime.oa.mjs";
import { ntPassword } from "./ntPassword.oa.mjs";
import { primaryGroupID } from "./primaryGroupID.oa.mjs";
import { profilePath } from "./profilePath.oa.mjs";
import { pwdCanChange } from "./pwdCanChange.oa.mjs";
import { pwdLastSet } from "./pwdLastSet.oa.mjs";
import { pwdMustChange } from "./pwdMustChange.oa.mjs";
import { rid } from "./rid.oa.mjs";
import { scriptPath } from "./scriptPath.oa.mjs";
import { smbHome } from "./smbHome.oa.mjs";
import { userWorkstations } from "./userWorkstations.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [uid, rid] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName, lmPassword, ntPassword, pwdLastSet, logonTime, logoffTime, kickoffTime, pwdCanChange, pwdMustChange, acctFlags, displayName, smbHome, homeDrive, scriptPath, profilePath, description, userWorkstations, primaryGroupID, domain] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["sambaAccount"],
    "&ldapDesc": "Samba Auxilary Account" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([
        3,
    ], id_samba_oc) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
