/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { inetMailGroup } from "../Ldapmigration56imsSchema/inetMailGroup.oa.mjs";
import { id_oc_soniaMailingList } from "../Ldapmigration97sonia/id-oc-soniaMailingList.va.mjs";
import { soniaMailingListAdministrator } from "./soniaMailingListAdministrator.oa.mjs";
import { soniaMailingListAllowedBroadcaster } from "./soniaMailingListAllowedBroadcaster.oa.mjs";
import { soniaMailingListBroadcastType } from "./soniaMailingListBroadcastType.oa.mjs";
import { soniaMailingListJoinabilityFilter } from "./soniaMailingListJoinabilityFilter.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [inetMailGroup] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [soniaMailingListBroadcastType, soniaMailingListAdministrator, soniaMailingListJoinabilityFilter, soniaMailingListAllowedBroadcaster] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["soniaMailingList"],
    "&id": id_oc_soniaMailingList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
