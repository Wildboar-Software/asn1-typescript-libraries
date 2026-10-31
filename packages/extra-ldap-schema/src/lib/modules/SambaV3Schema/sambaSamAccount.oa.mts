/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { sambaAcctFlags } from "./sambaAcctFlags.oa.mjs";
import { sambaBadPasswordCount } from "./sambaBadPasswordCount.oa.mjs";
import { sambaBadPasswordTime } from "./sambaBadPasswordTime.oa.mjs";
import { sambaDomainName } from "./sambaDomainName.oa.mjs";
import { sambaHomeDrive } from "./sambaHomeDrive.oa.mjs";
import { sambaHomePath } from "./sambaHomePath.oa.mjs";
import { sambaKickoffTime } from "./sambaKickoffTime.oa.mjs";
import { sambaLMPassword } from "./sambaLMPassword.oa.mjs";
import { sambaLogoffTime } from "./sambaLogoffTime.oa.mjs";
import { sambaLogonHours } from "./sambaLogonHours.oa.mjs";
import { sambaLogonScript } from "./sambaLogonScript.oa.mjs";
import { sambaLogonTime } from "./sambaLogonTime.oa.mjs";
import { sambaMungedDial } from "./sambaMungedDial.oa.mjs";
import { sambaNTPassword } from "./sambaNTPassword.oa.mjs";
import { sambaPasswordHistory } from "./sambaPasswordHistory.oa.mjs";
import { sambaPrimaryGroupSID } from "./sambaPrimaryGroupSID.oa.mjs";
import { sambaProfilePath } from "./sambaProfilePath.oa.mjs";
import { sambaPwdCanChange } from "./sambaPwdCanChange.oa.mjs";
import { sambaPwdLastSet } from "./sambaPwdLastSet.oa.mjs";
import { sambaPwdMustChange } from "./sambaPwdMustChange.oa.mjs";
import { sambaSID } from "./sambaSID.oa.mjs";
import { sambaUserWorkstations } from "./sambaUserWorkstations.oa.mjs";

/**
 * @summary sambaSamAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sambaSamAccount OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            auxiliary
 *     MUST CONTAIN    {sambaSID | uid}
 *     MAY CONTAIN     {
 *         commonName
 *         | description
 *         | displayName
 *         | sambaAcctFlags
 *         | sambaBadPasswordCount
 *         | sambaBadPasswordTime
 *         | sambaDomainName
 *         | sambaHomeDrive
 *         | sambaHomePath
 *         | sambaKickoffTime
 *         | sambaLMPassword
 *         | sambaLogoffTime
 *         | sambaLogonHours
 *         | sambaLogonScript
 *         | sambaLogonTime
 *         | sambaMungedDial
 *         | sambaNTPassword
 *         | sambaPasswordHistory
 *         | sambaPrimaryGroupSID
 *         | sambaProfilePath
 *         | sambaPwdCanChange
 *         | sambaPwdLastSet
 *         | sambaPwdMustChange
 *         | sambaUserWorkstations
 *     }
 *     LDAP-NAME       {"sambaSamAccount"}
 *     LDAP-DESC       "Samba 3.0 Auxilary SAM Account"
 *     ID              { 1 3 6 1 4 1 7165 2 2 6 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sambaSamAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [sambaSID, uid] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName, description, displayName, sambaAcctFlags, sambaBadPasswordCount, sambaBadPasswordTime, sambaDomainName, sambaHomeDrive, sambaHomePath, sambaKickoffTime, sambaLMPassword, sambaLogoffTime, sambaLogonHours, sambaLogonScript, sambaLogonTime, sambaMungedDial, sambaNTPassword, sambaPasswordHistory, sambaPrimaryGroupSID, sambaProfilePath, sambaPwdCanChange, sambaPwdLastSet, sambaPwdMustChange, sambaUserWorkstations] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["sambaSamAccount"],
    "&ldapDesc": "Samba 3.0 Auxilary SAM Account" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([
        1,
        3,
        6,
        1,
        4,
        1,
        7165,
        2,
        2,
        6,
    ]) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
