/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { sambaAlgorithmicRidBase } from "./sambaAlgorithmicRidBase.oa.mjs";
import { sambaDomainName } from "./sambaDomainName.oa.mjs";
import { sambaForceLogoff } from "./sambaForceLogoff.oa.mjs";
import { sambaLockoutDuration } from "./sambaLockoutDuration.oa.mjs";
import { sambaLockoutObservationWindow } from "./sambaLockoutObservationWindow.oa.mjs";
import { sambaLockoutThreshold } from "./sambaLockoutThreshold.oa.mjs";
import { sambaLogonToChgPwd } from "./sambaLogonToChgPwd.oa.mjs";
import { sambaMaxPwdAge } from "./sambaMaxPwdAge.oa.mjs";
import { sambaMinPwdAge } from "./sambaMinPwdAge.oa.mjs";
import { sambaMinPwdLength } from "./sambaMinPwdLength.oa.mjs";
import { sambaNextGroupRid } from "./sambaNextGroupRid.oa.mjs";
import { sambaNextRid } from "./sambaNextRid.oa.mjs";
import { sambaNextUserRid } from "./sambaNextUserRid.oa.mjs";
import { sambaPwdHistoryLength } from "./sambaPwdHistoryLength.oa.mjs";
import { sambaRefuseMachinePwdChange } from "./sambaRefuseMachinePwdChange.oa.mjs";
import { sambaSID } from "./sambaSID.oa.mjs";

/**
 * @summary sambaDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sambaDomain OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            structural
 *     MUST CONTAIN    {sambaDomainName | sambaSID}
 *     MAY CONTAIN     {sambaAlgorithmicRidBase | sambaForceLogoff | sambaLockoutDuration | sambaLockoutObservationWindow | sambaLockoutThreshold | sambaLogonToChgPwd | sambaMaxPwdAge | sambaMinPwdAge | sambaMinPwdLength | sambaNextGroupRid | sambaNextRid | sambaNextUserRid | sambaPwdHistoryLength | sambaRefuseMachinePwdChange}
 *     LDAP-NAME       {"sambaDomain"}
 *     LDAP-DESC       "Samba Domain Information"
 *     ID              { 1 3 6 1 4 1 7165 2 2 5 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sambaDomain: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [sambaDomainName, sambaSID] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [sambaAlgorithmicRidBase, sambaForceLogoff, sambaLockoutDuration, sambaLockoutObservationWindow, sambaLockoutThreshold, sambaLogonToChgPwd, sambaMaxPwdAge, sambaMinPwdAge, sambaMinPwdLength, sambaNextGroupRid, sambaNextRid, sambaNextUserRid, sambaPwdHistoryLength, sambaRefuseMachinePwdChange] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["sambaDomain"],
    "&ldapDesc": "Samba Domain Information" /* OBJECT_FIELD_SETTING */,
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
        5,
    ]) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
