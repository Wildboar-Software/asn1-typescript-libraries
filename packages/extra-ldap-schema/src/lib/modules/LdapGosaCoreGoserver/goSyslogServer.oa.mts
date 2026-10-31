/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_goSyslogServer } from "../LdapGosaCoreGoserver/id-oc-goSyslogServer.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { goSyslogSection } from "./goSyslogSection.oa.mjs";
import { goSyslogServerStatus } from "./goSyslogServerStatus.oa.mjs";

/**
 * @summary goSyslogServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goSyslogServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { goSyslogSection
 *                               | description
 *                               | goSyslogServerStatus }
 *   LDAP-NAME                 {"goSyslogServer"}
 *   LDAP-DESC                 "Syslog server description (v2.7)"
 *   ID                        id-oc-goSyslogServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goSyslogServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [goSyslogSection, description, goSyslogServerStatus] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["goSyslogServer"],
    "&ldapDesc": "Syslog server description (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goSyslogServer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
