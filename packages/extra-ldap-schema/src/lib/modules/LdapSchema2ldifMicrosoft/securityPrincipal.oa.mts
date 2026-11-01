/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_securityPrincipal } from "../LdapSchema2ldifMicrosoft/id-oc-securityPrincipal.va.mjs";

import { nTSecurityDescriptor } from "../MSUser/nTSecurityDescriptor.oa.mjs";
import { securityIdentifier } from "../MSUser/securityIdentifier.oa.mjs";
import { supplementalCredentials } from "../MSUser/supplementalCredentials.oa.mjs";
import { rid } from "../SambaSchema/rid.oa.mjs";
import { sAMAccountType } from "../MSUser/sAMAccountType.oa.mjs";
import { sIDHistory } from "../MSUser/sIDHistory.oa.mjs";
import { altSecurityIdentities } from "../MSUser/altSecurityIdentities.oa.mjs";
import { tokenGroups } from "../MSUser/tokenGroups.oa.mjs";
import { tokenGroupsNoGCAcceptable } from "../MSUser/tokenGroupsNoGCAcceptable.oa.mjs";
import { accountNameHistory } from "../MSUser/accountNameHistory.oa.mjs";
import { tokenGroupsGlobalAndUniversal } from "../MSUser/tokenGroupsGlobalAndUniversal.oa.mjs";
import { objectSid } from "../MSUser/objectSid.oa.mjs";
import { sAMAccountName } from "../MSUser/sAMAccountName.oa.mjs";
/**
 * @summary securityPrincipal
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * securityPrincipal OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { objectSid
 *                               | sAMAccountName }
 *   MAY CONTAIN               { nTSecurityDescriptor
 *                               | securityIdentifier
 *                               | supplementalCredentials
 *                               | rid
 *                               | sAMAccountType
 *                               | sIDHistory
 *                               | altSecurityIdentities
 *                               | tokenGroups
 *                               | tokenGroupsNoGCAcceptable
 *                               | accountNameHistory
 *                               | tokenGroupsGlobalAndUniversal }
 *   LDAP-NAME                 {"securityPrincipal"}
 *   ID                        id-oc-securityPrincipal }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const securityPrincipal: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectSid, sAMAccountName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ nTSecurityDescriptor, securityIdentifier, supplementalCredentials, rid, sAMAccountType, sIDHistory, altSecurityIdentities, tokenGroups, tokenGroupsNoGCAcceptable, accountNameHistory, tokenGroupsGlobalAndUniversal, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "securityPrincipal" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_securityPrincipal /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
