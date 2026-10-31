/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_soniaHost } from "../Ldapmigration97sonia/id-oc-soniaHost.va.mjs";
import { ipHost } from "../NIS/ipHost.oa.mjs";
import { soniaHostAquisitionDate } from "./soniaHostAquisitionDate.oa.mjs";
import { soniaHostDefaultRouter } from "./soniaHostDefaultRouter.oa.mjs";
import { soniaHostDirectoryServiceType } from "./soniaHostDirectoryServiceType.oa.mjs";
import { soniaHostDnsDomain } from "./soniaHostDnsDomain.oa.mjs";
import { soniaHostDnsEntryType } from "./soniaHostDnsEntryType.oa.mjs";
import { soniaHostHardwareType } from "./soniaHostHardwareType.oa.mjs";
import { soniaHostIsInstallServer } from "./soniaHostIsInstallServer.oa.mjs";
import { soniaHostIsUpdateServer } from "./soniaHostIsUpdateServer.oa.mjs";
import { soniaHostMacAddress } from "./soniaHostMacAddress.oa.mjs";
import { soniaHostNetbootType } from "./soniaHostNetbootType.oa.mjs";
import { soniaHostNetgroupEntry } from "./soniaHostNetgroupEntry.oa.mjs";
import { soniaHostOsType } from "./soniaHostOsType.oa.mjs";
import { soniaHostSubdomainName } from "./soniaHostSubdomainName.oa.mjs";
import { soniaHostWarrentyUntil } from "./soniaHostWarrentyUntil.oa.mjs";

/**
 * @summary soniaHost
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaHost OBJECT-CLASS ::= {
 *   SUBCLASS OF               { ipHost }
 *   MAY CONTAIN               { soniaHostMacAddress
 *                               | soniaHostSubdomainName
 *                               | soniaHostDefaultRouter
 *                               | soniaHostDirectoryServiceType
 *                               | soniaHostDnsEntryType
 *                               | soniaHostDnsDomain
 *                               | soniaHostNetgroupEntry
 *                               | soniaHostHardwareType
 *                               | soniaHostOsType
 *                               | soniaHostNetbootType
 *                               | soniaHostIsInstallServer
 *                               | soniaHostIsUpdateServer
 *                               | soniaHostAquisitionDate
 *                               | soniaHostWarrentyUntil }
 *   LDAP-NAME                 {"soniaHost"}
 *   ID                        id-oc-soniaHost }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const soniaHost: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [ipHost] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [soniaHostMacAddress, soniaHostSubdomainName, soniaHostDefaultRouter, soniaHostDirectoryServiceType, soniaHostDnsEntryType, soniaHostDnsDomain, soniaHostNetgroupEntry, soniaHostHardwareType, soniaHostOsType, soniaHostNetbootType, soniaHostIsInstallServer, soniaHostIsUpdateServer, soniaHostAquisitionDate, soniaHostWarrentyUntil] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["soniaHost"],
    "&id": id_oc_soniaHost /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
