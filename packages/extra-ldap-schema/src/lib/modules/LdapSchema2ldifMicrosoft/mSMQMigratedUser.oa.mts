/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_mSMQMigratedUser } from "../LdapSchema2ldifMicrosoft/id-oc-mSMQMigratedUser.va.mjs";

import { objectSid } from "../MSUser/objectSid.oa.mjs";
import { mSMQSignCertificates } from "../MSUser/mSMQSignCertificates.oa.mjs";
import { mSMQDigests } from "../MSUser/mSMQDigests.oa.mjs";
import { mSMQDigestsMig } from "../MSUser/mSMQDigestsMig.oa.mjs";
import { mSMQSignCertificatesMig } from "../MSUser/mSMQSignCertificatesMig.oa.mjs";
import { mSMQUserSid } from "../MSUser/mSMQUserSid.oa.mjs";
/**
 * @summary mSMQMigratedUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mSMQMigratedUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { objectSid
 *                               | mSMQSignCertificates
 *                               | mSMQDigests
 *                               | mSMQDigestsMig
 *                               | mSMQSignCertificatesMig
 *                               | mSMQUserSid }
 *   LDAP-NAME                 {"mSMQMigratedUser"}
 *   ID                        id-oc-mSMQMigratedUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mSMQMigratedUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ objectSid, mSMQSignCertificates, mSMQDigests, mSMQDigestsMig, mSMQSignCertificatesMig, mSMQUserSid, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mSMQMigratedUser" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mSMQMigratedUser /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
