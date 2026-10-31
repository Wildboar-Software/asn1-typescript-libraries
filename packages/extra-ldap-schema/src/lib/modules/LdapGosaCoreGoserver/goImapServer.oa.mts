/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_goImapServer } from "../LdapGosaCoreGoserver/id-oc-goImapServer.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { cyrusImap } from "./cyrusImap.oa.mjs";
import { cyrusImapSSL } from "./cyrusImapSSL.oa.mjs";
import { cyrusPop3 } from "./cyrusPop3.oa.mjs";
import { cyrusPop3SSL } from "./cyrusPop3SSL.oa.mjs";
import { goImapAdmin } from "./goImapAdmin.oa.mjs";
import { goImapConnect } from "./goImapConnect.oa.mjs";
import { goImapName } from "./goImapName.oa.mjs";
import { goImapPassword } from "./goImapPassword.oa.mjs";
import { goImapServerStatus } from "./goImapServerStatus.oa.mjs";
import { goImapSievePort } from "./goImapSievePort.oa.mjs";
import { goImapSieveServer } from "./goImapSieveServer.oa.mjs";

/**
 * @summary goImapServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goImapServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName
 *                               | goImapName
 *                               | goImapConnect
 *                               | goImapAdmin
 *                               | goImapPassword }
 *   MAY CONTAIN               { goImapSieveServer
 *                               | goImapSievePort
 *                               | description
 *                               | goImapServerStatus
 *                               | cyrusImap
 *                               | cyrusImapSSL
 *                               | cyrusPop3
 *                               | cyrusPop3SSL }
 *   LDAP-NAME                 {"goImapServer"}
 *   LDAP-DESC                 "IMAP server description (v2.7)"
 *   ID                        id-oc-goImapServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goImapServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, goImapName, goImapConnect, goImapAdmin, goImapPassword] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [goImapSieveServer, goImapSievePort, description, goImapServerStatus, cyrusImap, cyrusImapSSL, cyrusPop3, cyrusPop3SSL] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["goImapServer"],
    "&ldapDesc": "IMAP server description (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goImapServer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
