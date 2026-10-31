/* eslint-disable */
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraCalendarResource } from "../LdapZimbra/id-oc-zimbraCalendarResource.va.mjs";
import { zimbraAccountCalendarUserType } from "./zimbraAccountCalendarUserType.oa.mjs";
import { zimbraCalResAutoAcceptDecline } from "./zimbraCalResAutoAcceptDecline.oa.mjs";
import { zimbraCalResAutoDeclineIfBusy } from "./zimbraCalResAutoDeclineIfBusy.oa.mjs";
import { zimbraCalResAutoDeclineRecurring } from "./zimbraCalResAutoDeclineRecurring.oa.mjs";
import { zimbraCalResBuilding } from "./zimbraCalResBuilding.oa.mjs";
import { zimbraCalResCapacity } from "./zimbraCalResCapacity.oa.mjs";
import { zimbraCalResContactEmail } from "./zimbraCalResContactEmail.oa.mjs";
import { zimbraCalResContactName } from "./zimbraCalResContactName.oa.mjs";
import { zimbraCalResContactPhone } from "./zimbraCalResContactPhone.oa.mjs";
import { zimbraCalResFloor } from "./zimbraCalResFloor.oa.mjs";
import { zimbraCalResLocationDisplayName } from "./zimbraCalResLocationDisplayName.oa.mjs";
import { zimbraCalResMaxNumConflictsAllowed } from "./zimbraCalResMaxNumConflictsAllowed.oa.mjs";
import { zimbraCalResMaxPercentConflictsAllowed } from "./zimbraCalResMaxPercentConflictsAllowed.oa.mjs";
import { zimbraCalResRoom } from "./zimbraCalResRoom.oa.mjs";
import { zimbraCalResSite } from "./zimbraCalResSite.oa.mjs";
import { zimbraCalResType } from "./zimbraCalResType.oa.mjs";
import { zimbraCreateTimestamp } from "./zimbraCreateTimestamp.oa.mjs";
import { zimbraId } from "./zimbraId.oa.mjs";
import { zimbraLocale } from "./zimbraLocale.oa.mjs";

/**
 * @summary zimbraCalendarResource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraCalendarResource OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { displayName
 *                               | zimbraAccountCalendarUserType
 *                               | zimbraCalResType
 *                               | zimbraId }
 *   MAY CONTAIN               { zimbraCalResAutoAcceptDecline
 *                               | zimbraCalResAutoDeclineIfBusy
 *                               | zimbraCalResAutoDeclineRecurring
 *                               | zimbraCalResBuilding
 *                               | zimbraCalResCapacity
 *                               | zimbraCalResContactEmail
 *                               | zimbraCalResContactName
 *                               | zimbraCalResContactPhone
 *                               | zimbraCalResFloor
 *                               | zimbraCalResLocationDisplayName
 *                               | zimbraCalResMaxNumConflictsAllowed
 *                               | zimbraCalResMaxPercentConflictsAllowed
 *                               | zimbraCalResRoom
 *                               | zimbraCalResSite
 *                               | zimbraCreateTimestamp
 *                               | zimbraLocale }
 *   LDAP-NAME                 {"zimbraCalendarResource"}
 *   LDAP-DESC                 "Calendar resource object"
 *   ID                        id-oc-zimbraCalendarResource }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraCalendarResource: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [displayName, zimbraAccountCalendarUserType, zimbraCalResType, zimbraId] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [zimbraCalResAutoAcceptDecline, zimbraCalResAutoDeclineIfBusy, zimbraCalResAutoDeclineRecurring, zimbraCalResBuilding, zimbraCalResCapacity, zimbraCalResContactEmail, zimbraCalResContactName, zimbraCalResContactPhone, zimbraCalResFloor, zimbraCalResLocationDisplayName, zimbraCalResMaxNumConflictsAllowed, zimbraCalResMaxPercentConflictsAllowed, zimbraCalResRoom, zimbraCalResSite, zimbraCreateTimestamp, zimbraLocale] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraCalendarResource"],
    "&ldapDesc": "Calendar resource object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraCalendarResource /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
