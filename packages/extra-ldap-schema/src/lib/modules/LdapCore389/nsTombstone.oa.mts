/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsTombstone } from "../LdapCore389/id-oc-nsTombstone.va.mjs";

import { nstombstonecsn } from "../LdapCore389/nstombstonecsn.oa.mjs";
import { nsParentUniqueId } from "../LdapCore389/nsParentUniqueId.oa.mjs";
import { nscpEntryDN } from "../LdapCore389/nscpEntryDN.oa.mjs";
/**
 * @summary nsTombstone
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsTombstone OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { nstombstonecsn
 *                               | nsParentUniqueId
 *                               | nscpEntryDN }
 *   LDAP-NAME                 {"nsTombstone"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsTombstone }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsTombstone: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ nstombstonecsn, nsParentUniqueId, nscpEntryDN, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsTombstone" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsTombstone /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
