/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_goVirusServer } from "../LdapGosaCoreGoserver/id-oc-goVirusServer.va.mjs";
import { avMaxThreads } from "../LdapGosaCoreGoserver/avMaxThreads.oa.mjs";
import { avMaxDirectoryRecursions } from "../LdapGosaCoreGoserver/avMaxDirectoryRecursions.oa.mjs";
import { avUser } from "../LdapGosaCoreGoserver/avUser.oa.mjs";
import { avFlags } from "../LdapGosaCoreGoserver/avFlags.oa.mjs";
import { avArchiveMaxFileSize } from "../LdapGosaCoreGoserver/avArchiveMaxFileSize.oa.mjs";
import { avArchiveMaxRecursion } from "../LdapGosaCoreGoserver/avArchiveMaxRecursion.oa.mjs";
import { avArchiveMaxCompressionRatio } from "../LdapGosaCoreGoserver/avArchiveMaxCompressionRatio.oa.mjs";
import { avDatabaseMirror } from "../LdapGosaCoreGoserver/avDatabaseMirror.oa.mjs";
import { avChecksPerDay } from "../LdapGosaCoreGoserver/avChecksPerDay.oa.mjs";
import { avHttpProxyURL } from "../LdapGosaCoreGoserver/avHttpProxyURL.oa.mjs";
import { avStatus } from "../LdapGosaCoreGoserver/avStatus.oa.mjs";


/**
 * @summary goVirusServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goVirusServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { avMaxThreads
 *                               | avMaxDirectoryRecursions
 *                               | avUser
 *                               | avFlags
 *                               | avArchiveMaxFileSize
 *                               | avArchiveMaxRecursion
 *                               | avArchiveMaxCompressionRatio
 *                               | avDatabaseMirror
 *                               | avChecksPerDay
 *                               | avHttpProxyURL
 *                               | avStatus }
 *   LDAP-NAME                 {"goVirusServer"}
 *   LDAP-DESC                 "Virus server definition (v2.7)"
 *   ID                        id-oc-goVirusServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goVirusServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ avMaxThreads, avMaxDirectoryRecursions, avUser, avFlags, avArchiveMaxFileSize, avArchiveMaxRecursion, avArchiveMaxCompressionRatio, avDatabaseMirror, avChecksPerDay, avHttpProxyURL, avStatus, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "goVirusServer" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Virus server definition (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goVirusServer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

