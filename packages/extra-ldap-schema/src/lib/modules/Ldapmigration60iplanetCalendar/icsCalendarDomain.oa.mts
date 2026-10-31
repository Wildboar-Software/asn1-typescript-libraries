/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_icsCalendarDomain } from "../Ldapmigration60iplanetCalendar/id-oc-icsCalendarDomain.va.mjs";
import { davAllowedServices } from "./davAllowedServices.oa.mjs";
import { icsAllowRights } from "./icsAllowRights.oa.mjs";
import { icsAllowedServiceAccess } from "./icsAllowedServiceAccess.oa.mjs";
import { icsAnonymousAllowWrite } from "./icsAnonymousAllowWrite.oa.mjs";
import { icsAnonymousCalendar } from "./icsAnonymousCalendar.oa.mjs";
import { icsAnonymousDefaultSet } from "./icsAnonymousDefaultSet.oa.mjs";
import { icsAnonymousLogin } from "./icsAnonymousLogin.oa.mjs";
import { icsAnonymousSet } from "./icsAnonymousSet.oa.mjs";
import { icsDWPBackEndHosts } from "./icsDWPBackEndHosts.oa.mjs";
import { icsDefaultAccess } from "./icsDefaultAccess.oa.mjs";
import { icsDomainAcl } from "./icsDomainAcl.oa.mjs";
import { icsDomainAllowed } from "./icsDomainAllowed.oa.mjs";
import { icsDomainNames } from "./icsDomainNames.oa.mjs";
import { icsDomainNotAllowed } from "./icsDomainNotAllowed.oa.mjs";
import { icsExtended } from "./icsExtended.oa.mjs";
import { icsExtendedDomainPrefs } from "./icsExtendedDomainPrefs.oa.mjs";
import { icsMandatorySubscribed } from "./icsMandatorySubscribed.oa.mjs";
import { icsMandatoryView } from "./icsMandatoryView.oa.mjs";
import { icsPreferredHost } from "./icsPreferredHost.oa.mjs";
import { icsQuota } from "./icsQuota.oa.mjs";
import { icsRecurrenceBound } from "./icsRecurrenceBound.oa.mjs";
import { icsRecurrenceDate } from "./icsRecurrenceDate.oa.mjs";
import { icsSessionTimeout } from "./icsSessionTimeout.oa.mjs";
import { icsSourceHtml } from "./icsSourceHtml.oa.mjs";
import { icsStatus } from "./icsStatus.oa.mjs";
import { icsTimezone } from "./icsTimezone.oa.mjs";

/**
 * @summary icsCalendarDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * icsCalendarDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { icsAllowedServiceAccess
 *                               | icsAllowRights
 *                               | icsAnonymousAllowWrite
 *                               | icsAnonymousCalendar
 *                               | icsAnonymousDefaultSet
 *                               | icsAnonymousLogin
 *                               | icsAnonymousSet
 *                               | icsDWPBackEndHosts
 *                               | icsExtended
 *                               | icsExtendedDomainPrefs
 *                               | icsDefaultAccess
 *                               | icsDomainAllowed
 *                               | icsDomainNames
 *                               | icsDomainNotAllowed
 *                               | icsMandatorySubscribed
 *                               | icsMandatoryView
 *                               | icsPreferredHost
 *                               | icsQuota
 *                               | icsRecurrenceBound
 *                               | icsRecurrenceDate
 *                               | icsSessionTimeout
 *                               | icsSourceHtml
 *                               | icsStatus
 *                               | icsTimezone
 *                               | davAllowedServices
 *                               | icsDomainAcl }
 *   LDAP-NAME                 {"icsCalendarDomain"}
 *   LDAP-DESC                 "Standard Object Class"
 *   ID                        id-oc-icsCalendarDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const icsCalendarDomain: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [icsAllowedServiceAccess, icsAllowRights, icsAnonymousAllowWrite, icsAnonymousCalendar, icsAnonymousDefaultSet, icsAnonymousLogin, icsAnonymousSet, icsDWPBackEndHosts, icsExtended, icsExtendedDomainPrefs, icsDefaultAccess, icsDomainAllowed, icsDomainNames, icsDomainNotAllowed, icsMandatorySubscribed, icsMandatoryView, icsPreferredHost, icsQuota, icsRecurrenceBound, icsRecurrenceDate, icsSessionTimeout, icsSourceHtml, icsStatus, icsTimezone, davAllowedServices, icsDomainAcl] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["icsCalendarDomain"],
    "&ldapDesc": "Standard Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_icsCalendarDomain /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
