/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { sambaSID } from "../SambaV3Schema/sambaSID.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { sambaAcctFlags } from "../SambaV3Schema/sambaAcctFlags.oa.mjs";
import { sambaBadPasswordCount } from "../SambaV3Schema/sambaBadPasswordCount.oa.mjs";
import { sambaBadPasswordTime } from "../SambaV3Schema/sambaBadPasswordTime.oa.mjs";
import { sambaDomainName } from "../SambaV3Schema/sambaDomainName.oa.mjs";
import { sambaHomeDrive } from "../SambaV3Schema/sambaHomeDrive.oa.mjs";
import { sambaHomePath } from "../SambaV3Schema/sambaHomePath.oa.mjs";
import { sambaKickoffTime } from "../SambaV3Schema/sambaKickoffTime.oa.mjs";
import { sambaLMPassword } from "../SambaV3Schema/sambaLMPassword.oa.mjs";
import { sambaLogoffTime } from "../SambaV3Schema/sambaLogoffTime.oa.mjs";
import { sambaLogonHours } from "../SambaV3Schema/sambaLogonHours.oa.mjs";
import { sambaLogonScript } from "../SambaV3Schema/sambaLogonScript.oa.mjs";
import { sambaLogonTime } from "../SambaV3Schema/sambaLogonTime.oa.mjs";
import { sambaMungedDial } from "../SambaV3Schema/sambaMungedDial.oa.mjs";
import { sambaNTPassword } from "../SambaV3Schema/sambaNTPassword.oa.mjs";
import { sambaPasswordHistory } from "../SambaV3Schema/sambaPasswordHistory.oa.mjs";
import { sambaPrimaryGroupSID } from "../SambaV3Schema/sambaPrimaryGroupSID.oa.mjs";
import { sambaProfilePath } from "../SambaV3Schema/sambaProfilePath.oa.mjs";
import { sambaPwdCanChange } from "../SambaV3Schema/sambaPwdCanChange.oa.mjs";
import { sambaPwdLastSet } from "../SambaV3Schema/sambaPwdLastSet.oa.mjs";
import { sambaPwdMustChange } from "../SambaV3Schema/sambaPwdMustChange.oa.mjs";
import { sambaUserWorkstations } from "../SambaV3Schema/sambaUserWorkstations.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ sambaSID, uid, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, description, displayName, sambaAcctFlags, sambaBadPasswordCount, sambaBadPasswordTime, sambaDomainName, sambaHomeDrive, sambaHomePath, sambaKickoffTime, sambaLMPassword, sambaLogoffTime, sambaLogonHours, sambaLogonScript, sambaLogonTime, sambaMungedDial, sambaNTPassword, sambaPasswordHistory, sambaPrimaryGroupSID, sambaProfilePath, sambaPwdCanChange, sambaPwdLastSet, sambaPwdMustChange, sambaUserWorkstations, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sambaSamAccount" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Samba 3.0 Auxilary SAM Account" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1, 3, 6, 1, 4, 1, 7165, 2, 2, 6,]) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
