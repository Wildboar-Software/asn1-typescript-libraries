/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { id_at_nsDS5ReplicaBindDnGroupCheckInterval } from "../LdapCore389/id-at-nsDS5ReplicaBindDnGroupCheckInterval.va.mjs";

/**
 * @summary nsDS5ReplicaBindDnGroupCheckInterval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsDS5ReplicaBindDnGroupCheckInterval ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"nsDS5ReplicaBindDnGroupCheckInterval"}
 *   LDAP-DESC                 "Replication configuration setting for controlling the bind dn group check interval"
 *   ID                        id-at-nsDS5ReplicaBindDnGroupCheckInterval }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export
const nsDS5ReplicaBindDnGroupCheckInterval: ATTRIBUTE<INTEGER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsDS5ReplicaBindDnGroupCheckInterval" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Replication configuration setting for controlling the bind dn group check interval" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_nsDS5ReplicaBindDnGroupCheckInterval /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
