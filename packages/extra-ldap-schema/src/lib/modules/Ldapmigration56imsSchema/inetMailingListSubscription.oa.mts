/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_inetMailingListSubscription } from "../Ldapmigration56imsSchema/id-oc-inetMailingListSubscription.va.mjs";
import { mlsubActionKey } from "./mlsubActionKey.oa.mjs";
import { mlsubDigest } from "./mlsubDigest.oa.mjs";
import { mlsubJoinDate } from "./mlsubJoinDate.oa.mjs";
import { mlsubJoinIPAddress } from "./mlsubJoinIPAddress.oa.mjs";
import { mlsubListIdentifier } from "./mlsubListIdentifier.oa.mjs";
import { mlsubMail } from "./mlsubMail.oa.mjs";
import { mlsubReceiveMail } from "./mlsubReceiveMail.oa.mjs";
import { mlsubRole } from "./mlsubRole.oa.mjs";
import { mlsubSuppressDuplicates } from "./mlsubSuppressDuplicates.oa.mjs";
import { mlsubTentativeEmail } from "./mlsubTentativeEmail.oa.mjs";
import { mlsubTrack } from "./mlsubTrack.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [mlsubListIdentifier, mlsubRole] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [mlsubMail, mlsubDigest, mlsubReceiveMail, mlsubSuppressDuplicates, mlsubJoinDate, mlsubJoinIPAddress, mlsubTentativeEmail, mlsubTrack, mlsubActionKey] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["inetMailingListSubscription"],
    "&ldapDesc": "auxiliary class for mailing list subscriptions" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_inetMailingListSubscription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
