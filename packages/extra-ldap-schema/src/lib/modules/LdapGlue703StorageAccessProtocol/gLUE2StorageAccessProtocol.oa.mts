/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { gLUE2StorageAccessProtocolMaxStreams } from "../LdapGlue703StorageAccessProtocol/gLUE2StorageAccessProtocolMaxStreams.oa.mjs";
import { id_oc_gLUE2StorageAccessProtocol } from "../LdapGlue703StorageAccessProtocol/id-oc-gLUE2StorageAccessProtocol.va.mjs";
import { gLUE2StorageAccessProtocolID } from "./gLUE2StorageAccessProtocolID.oa.mjs";
import { gLUE2StorageAccessProtocolStorageServiceForeignKey } from "./gLUE2StorageAccessProtocolStorageServiceForeignKey.oa.mjs";
import { gLUE2StorageAccessProtocolType } from "./gLUE2StorageAccessProtocolType.oa.mjs";
import { gLUE2StorageAccessProtocolVersion } from "./gLUE2StorageAccessProtocolVersion.oa.mjs";

/**
 * @summary gLUE2StorageAccessProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2StorageAccessProtocol OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2StorageAccessProtocolID
 *                               | gLUE2StorageAccessProtocolType
 *                               | gLUE2StorageAccessProtocolVersion
 *                               | gLUE2StorageAccessProtocolStorageServiceForeignKey }
 *   MAY CONTAIN               { gLUE2StorageAccessProtocolMaxStreams }
 *   LDAP-NAME                 {"GLUE2StorageAccessProtocol"}
 *   LDAP-DESC                 "A type of protocol available to access the available storage capacities"
 *   ID                        id-oc-gLUE2StorageAccessProtocol }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2StorageAccessProtocol: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [gLUE2Entity] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [gLUE2StorageAccessProtocolID, gLUE2StorageAccessProtocolType, gLUE2StorageAccessProtocolVersion, gLUE2StorageAccessProtocolStorageServiceForeignKey] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gLUE2StorageAccessProtocolMaxStreams] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GLUE2StorageAccessProtocol"],
    "&ldapDesc": "A type of protocol available to access the available storage capacities" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2StorageAccessProtocol /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
