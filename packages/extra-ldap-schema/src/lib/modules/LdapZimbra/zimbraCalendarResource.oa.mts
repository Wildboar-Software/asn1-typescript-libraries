/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraCalendarResource } from "../LdapZimbra/id-oc-zimbraCalendarResource.va.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { zimbraAccountCalendarUserType } from "../LdapZimbra/zimbraAccountCalendarUserType.oa.mjs";
import { zimbraCalResType } from "../LdapZimbra/zimbraCalResType.oa.mjs";
import { zimbraId } from "../LdapZimbra/zimbraId.oa.mjs";
import { zimbraCalResAutoAcceptDecline } from "../LdapZimbra/zimbraCalResAutoAcceptDecline.oa.mjs";
import { zimbraCalResAutoDeclineIfBusy } from "../LdapZimbra/zimbraCalResAutoDeclineIfBusy.oa.mjs";
import { zimbraCalResAutoDeclineRecurring } from "../LdapZimbra/zimbraCalResAutoDeclineRecurring.oa.mjs";
import { zimbraCalResBuilding } from "../LdapZimbra/zimbraCalResBuilding.oa.mjs";
import { zimbraCalResCapacity } from "../LdapZimbra/zimbraCalResCapacity.oa.mjs";
import { zimbraCalResContactEmail } from "../LdapZimbra/zimbraCalResContactEmail.oa.mjs";
import { zimbraCalResContactName } from "../LdapZimbra/zimbraCalResContactName.oa.mjs";
import { zimbraCalResContactPhone } from "../LdapZimbra/zimbraCalResContactPhone.oa.mjs";
import { zimbraCalResFloor } from "../LdapZimbra/zimbraCalResFloor.oa.mjs";
import { zimbraCalResLocationDisplayName } from "../LdapZimbra/zimbraCalResLocationDisplayName.oa.mjs";
import { zimbraCalResMaxNumConflictsAllowed } from "../LdapZimbra/zimbraCalResMaxNumConflictsAllowed.oa.mjs";
import { zimbraCalResMaxPercentConflictsAllowed } from "../LdapZimbra/zimbraCalResMaxPercentConflictsAllowed.oa.mjs";
import { zimbraCalResRoom } from "../LdapZimbra/zimbraCalResRoom.oa.mjs";
import { zimbraCalResSite } from "../LdapZimbra/zimbraCalResSite.oa.mjs";
import { zimbraCreateTimestamp } from "../LdapZimbra/zimbraCreateTimestamp.oa.mjs";
import { zimbraLocale } from "../LdapZimbra/zimbraLocale.oa.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ displayName, zimbraAccountCalendarUserType, zimbraCalResType, zimbraId, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ zimbraCalResAutoAcceptDecline, zimbraCalResAutoDeclineIfBusy, zimbraCalResAutoDeclineRecurring, zimbraCalResBuilding, zimbraCalResCapacity, zimbraCalResContactEmail, zimbraCalResContactName, zimbraCalResContactPhone, zimbraCalResFloor, zimbraCalResLocationDisplayName, zimbraCalResMaxNumConflictsAllowed, zimbraCalResMaxPercentConflictsAllowed, zimbraCalResRoom, zimbraCalResSite, zimbraCreateTimestamp, zimbraLocale, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraCalendarResource" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Calendar resource object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraCalendarResource /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

