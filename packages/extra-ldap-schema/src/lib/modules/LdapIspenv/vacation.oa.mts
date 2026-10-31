/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_vacation } from "../LdapIspenv/id-oc-vacation.va.mjs";
import { vacationActive } from "../LdapIspenv/vacationActive.oa.mjs";
import { vacationEnd } from "./vacationEnd.oa.mjs";
import { vacationForward } from "./vacationForward.oa.mjs";
import { vacationInfo } from "./vacationInfo.oa.mjs";
import { vacationStart } from "./vacationStart.oa.mjs";

/**
 * @summary vacation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * vacation OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { vacationActive }
 *   MAY CONTAIN               { vacationInfo
 *                               | vacationStart
 *                               | vacationEnd
 *                               | vacationForward }
 *   LDAP-NAME                 {"Vacation"}
 *   LDAP-DESC                 "Users vacation status information"
 *   ID                        id-oc-vacation }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const vacation: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [vacationActive] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [vacationInfo, vacationStart, vacationEnd, vacationForward] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["Vacation"],
    "&ldapDesc": "Users vacation status information" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_vacation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
