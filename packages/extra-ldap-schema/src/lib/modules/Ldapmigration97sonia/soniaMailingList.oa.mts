/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { inetMailGroup } from "../Ldapmigration56imsSchema/inetMailGroup.oa.mjs";
import { id_oc_soniaMailingList } from "../Ldapmigration97sonia/id-oc-soniaMailingList.va.mjs";

import { soniaMailingListBroadcastType } from "../Ldapmigration97sonia/soniaMailingListBroadcastType.oa.mjs";
import { soniaMailingListAdministrator } from "../Ldapmigration97sonia/soniaMailingListAdministrator.oa.mjs";
import { soniaMailingListJoinabilityFilter } from "../Ldapmigration97sonia/soniaMailingListJoinabilityFilter.oa.mjs";
import { soniaMailingListAllowedBroadcaster } from "../Ldapmigration97sonia/soniaMailingListAllowedBroadcaster.oa.mjs";
/**
 * @summary soniaMailingList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaMailingList OBJECT-CLASS ::= {
 *   SUBCLASS OF               { inetMailGroup }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { soniaMailingListBroadcastType
 *                               | soniaMailingListAdministrator
 *                               | soniaMailingListJoinabilityFilter
 *                               | soniaMailingListAllowedBroadcaster }
 *   LDAP-NAME                 {"soniaMailingList"}
 *   ID                        id-oc-soniaMailingList }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const soniaMailingList: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ inetMailGroup, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ soniaMailingListBroadcastType, soniaMailingListAdministrator, soniaMailingListJoinabilityFilter, soniaMailingListAllowedBroadcaster, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "soniaMailingList" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_soniaMailingList /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
