/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_goVirusServer } from "../LdapGosaCoreGoserver/id-oc-goVirusServer.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { avArchiveMaxCompressionRatio } from "./avArchiveMaxCompressionRatio.oa.mjs";
import { avArchiveMaxFileSize } from "./avArchiveMaxFileSize.oa.mjs";
import { avArchiveMaxRecursion } from "./avArchiveMaxRecursion.oa.mjs";
import { avChecksPerDay } from "./avChecksPerDay.oa.mjs";
import { avDatabaseMirror } from "./avDatabaseMirror.oa.mjs";
import { avFlags } from "./avFlags.oa.mjs";
import { avHttpProxyURL } from "./avHttpProxyURL.oa.mjs";
import { avMaxDirectoryRecursions } from "./avMaxDirectoryRecursions.oa.mjs";
import { avMaxThreads } from "./avMaxThreads.oa.mjs";
import { avStatus } from "./avStatus.oa.mjs";
import { avUser } from "./avUser.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [avMaxThreads, avMaxDirectoryRecursions, avUser, avFlags, avArchiveMaxFileSize, avArchiveMaxRecursion, avArchiveMaxCompressionRatio, avDatabaseMirror, avChecksPerDay, avHttpProxyURL, avStatus] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["goVirusServer"],
    "&ldapDesc": "Virus server definition (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goVirusServer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
