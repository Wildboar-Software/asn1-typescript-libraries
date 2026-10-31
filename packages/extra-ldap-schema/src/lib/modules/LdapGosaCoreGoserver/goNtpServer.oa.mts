/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_goNtpServer } from "../LdapGosaCoreGoserver/id-oc-goNtpServer.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { goNtpServerStatus } from "./goNtpServerStatus.oa.mjs";
import { goTimeSource } from "./goTimeSource.oa.mjs";

/**
 * @summary goNtpServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goNtpServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { goTimeSource
 *                               | description
 *                               | goNtpServerStatus }
 *   LDAP-NAME                 {"goNtpServer"}
 *   LDAP-DESC                 "Time server description (v2.7)"
 *   ID                        id-oc-goNtpServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goNtpServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [goTimeSource, description, goNtpServerStatus] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["goNtpServer"],
    "&ldapDesc": "Time server description (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goNtpServer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
