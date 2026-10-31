/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_rubySyncConnectorState } from "../LdapRubysync/id-oc-rubySyncConnectorState.va.mjs";
import { rubySyncLastSync } from "../LdapRubysync/rubySyncLastSync.oa.mjs";

/**
 * @summary rubySyncConnectorState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rubySyncConnectorState OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { rubySyncLastSync }
 *   LDAP-NAME                 {"rubySyncConnectorState"}
 *   LDAP-DESC                 "Synchronization informations between client and vault connectors"
 *   ID                        id-oc-rubySyncConnectorState }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rubySyncConnectorState: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [rubySyncLastSync] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["rubySyncConnectorState"],
    "&ldapDesc": "Synchronization informations between client and vault connectors" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_rubySyncConnectorState /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
