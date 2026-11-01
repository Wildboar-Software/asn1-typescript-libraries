/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_rubySyncChangeLogEntry } from "../LdapRubysync/id-oc-rubySyncChangeLogEntry.va.mjs";
import { changeNumber } from "../DSEE/changeNumber.oa.mjs";
import { changeType } from "../DSEE/changeType.oa.mjs";
import { rubySyncSourceInfo } from "../LdapRubysync/rubySyncSourceInfo.oa.mjs";
import { rubySyncContext } from "../LdapRubysync/rubySyncContext.oa.mjs";
import { rubySyncDumpEntry } from "../LdapRubysync/rubySyncDumpEntry.oa.mjs";
import { changes } from "../DSEE/changes.oa.mjs";
import { newRdn } from "../DSEE/newRdn.oa.mjs";
import { deleteOldRdn } from "../DSEE/deleteOldRdn.oa.mjs";
import { newSuperior } from "../DSEE/newSuperior.oa.mjs";


/**
 * @summary rubySyncChangeLogEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rubySyncChangeLogEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { changeNumber
 *                               | changeType
 *                               | rubySyncSourceInfo }
 *   MAY CONTAIN               { rubySyncContext
 *                               | rubySyncDumpEntry
 *                               | changes
 *                               | newRdn
 *                               | deleteOldRdn
 *                               | newSuperior }
 *   LDAP-NAME                 {"rubySyncChangeLogEntry"}
 *   LDAP-DESC                 "Useful for LDAP server without native public changelog support (see https://opends.dev.java.net/public/standards/draft-good-ldap-changelog.txt)"
 *   ID                        id-oc-rubySyncChangeLogEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rubySyncChangeLogEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ changeNumber, changeType, rubySyncSourceInfo, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ rubySyncContext, rubySyncDumpEntry, changes, newRdn, deleteOldRdn, newSuperior, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "rubySyncChangeLogEntry" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Useful for LDAP server without native public changelog support (see https://opends.dev.java.net/public/standards/draft-good-ldap-changelog.txt)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_rubySyncChangeLogEntry /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

