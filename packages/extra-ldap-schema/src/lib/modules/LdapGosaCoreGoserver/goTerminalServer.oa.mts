/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_goTerminalServer } from "../LdapGosaCoreGoserver/id-oc-goTerminalServer.va.mjs";

import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { goTerminalServerStatus } from "../LdapGosaCoreGoserver/goTerminalServerStatus.oa.mjs";
import { gotoSessionType } from "../LdapGosaCoreGoserver/gotoSessionType.oa.mjs";
import { goFontPath } from "../LdapGosaCoreGoserver/goFontPath.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { goXdmcpIsEnabled } from "../LdapGosaCoreGoserver/goXdmcpIsEnabled.oa.mjs";
/**
 * @summary goTerminalServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goTerminalServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName
 *                               | goXdmcpIsEnabled }
 *   MAY CONTAIN               { description
 *                               | goTerminalServerStatus
 *                               | gotoSessionType
 *                               | goFontPath }
 *   LDAP-NAME                 {"goTerminalServer"}
 *   LDAP-DESC                 "Terminal server description (v2.7)"
 *   ID                        id-oc-goTerminalServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goTerminalServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, goXdmcpIsEnabled, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, goTerminalServerStatus, gotoSessionType, goFontPath, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "goTerminalServer" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Terminal server description (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goTerminalServer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
