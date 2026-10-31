/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { evolutionTasksURI } from "../LdapEvoldap/evolutionTasksURI.oa.mjs";
import { id_oc_evolutionTasksSource } from "../LdapEvoldap/id-oc-evolutionTasksSource.va.mjs";

/**
 * @summary evolutionTasksSource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * evolutionTasksSource OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { evolutionTasksURI }
 *   LDAP-NAME                 {"evolutionTasksSource"}
 *   LDAP-DESC                 "Evolution tasks source"
 *   ID                        id-oc-evolutionTasksSource }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const evolutionTasksSource: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [evolutionTasksURI] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["evolutionTasksSource"],
    "&ldapDesc": "Evolution tasks source" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_evolutionTasksSource /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
