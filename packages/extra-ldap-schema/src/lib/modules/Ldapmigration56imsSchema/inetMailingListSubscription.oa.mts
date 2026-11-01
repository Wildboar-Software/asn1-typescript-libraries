/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_inetMailingListSubscription } from "../Ldapmigration56imsSchema/id-oc-inetMailingListSubscription.va.mjs";
import { mlsubListIdentifier } from "../Ldapmigration56imsSchema/mlsubListIdentifier.oa.mjs";
import { mlsubRole } from "../Ldapmigration56imsSchema/mlsubRole.oa.mjs";
import { mlsubMail } from "../Ldapmigration56imsSchema/mlsubMail.oa.mjs";
import { mlsubDigest } from "../Ldapmigration56imsSchema/mlsubDigest.oa.mjs";
import { mlsubReceiveMail } from "../Ldapmigration56imsSchema/mlsubReceiveMail.oa.mjs";
import { mlsubSuppressDuplicates } from "../Ldapmigration56imsSchema/mlsubSuppressDuplicates.oa.mjs";
import { mlsubJoinDate } from "../Ldapmigration56imsSchema/mlsubJoinDate.oa.mjs";
import { mlsubJoinIPAddress } from "../Ldapmigration56imsSchema/mlsubJoinIPAddress.oa.mjs";
import { mlsubTentativeEmail } from "../Ldapmigration56imsSchema/mlsubTentativeEmail.oa.mjs";
import { mlsubTrack } from "../Ldapmigration56imsSchema/mlsubTrack.oa.mjs";
import { mlsubActionKey } from "../Ldapmigration56imsSchema/mlsubActionKey.oa.mjs";


/**
 * @summary inetMailingListSubscription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetMailingListSubscription OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { mlsubListIdentifier
 *                               | mlsubRole }
 *   MAY CONTAIN               { mlsubMail
 *                               | mlsubDigest
 *                               | mlsubReceiveMail
 *                               | mlsubSuppressDuplicates
 *                               | mlsubJoinDate
 *                               | mlsubJoinIPAddress
 *                               | mlsubTentativeEmail
 *                               | mlsubTrack
 *                               | mlsubActionKey }
 *   LDAP-NAME                 {"inetMailingListSubscription"}
 *   LDAP-DESC                 "auxiliary class for mailing list subscriptions"
 *   ID                        id-oc-inetMailingListSubscription }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetMailingListSubscription: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ mlsubListIdentifier, mlsubRole, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mlsubMail, mlsubDigest, mlsubReceiveMail, mlsubSuppressDuplicates, mlsubJoinDate, mlsubJoinIPAddress, mlsubTentativeEmail, mlsubTrack, mlsubActionKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "inetMailingListSubscription" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "auxiliary class for mailing list subscriptions" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_inetMailingListSubscription /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

