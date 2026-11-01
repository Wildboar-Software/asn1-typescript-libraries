/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { ipHost } from "../NIS/ipHost.oa.mjs";
import { id_oc_soniaHost } from "../Ldapmigration97sonia/id-oc-soniaHost.va.mjs";
import { soniaHostMacAddress } from "../Ldapmigration97sonia/soniaHostMacAddress.oa.mjs";
import { soniaHostSubdomainName } from "../Ldapmigration97sonia/soniaHostSubdomainName.oa.mjs";
import { soniaHostDefaultRouter } from "../Ldapmigration97sonia/soniaHostDefaultRouter.oa.mjs";
import { soniaHostDirectoryServiceType } from "../Ldapmigration97sonia/soniaHostDirectoryServiceType.oa.mjs";
import { soniaHostDnsEntryType } from "../Ldapmigration97sonia/soniaHostDnsEntryType.oa.mjs";
import { soniaHostDnsDomain } from "../Ldapmigration97sonia/soniaHostDnsDomain.oa.mjs";
import { soniaHostNetgroupEntry } from "../Ldapmigration97sonia/soniaHostNetgroupEntry.oa.mjs";
import { soniaHostHardwareType } from "../Ldapmigration97sonia/soniaHostHardwareType.oa.mjs";
import { soniaHostOsType } from "../Ldapmigration97sonia/soniaHostOsType.oa.mjs";
import { soniaHostNetbootType } from "../Ldapmigration97sonia/soniaHostNetbootType.oa.mjs";
import { soniaHostIsInstallServer } from "../Ldapmigration97sonia/soniaHostIsInstallServer.oa.mjs";
import { soniaHostIsUpdateServer } from "../Ldapmigration97sonia/soniaHostIsUpdateServer.oa.mjs";
import { soniaHostAquisitionDate } from "../Ldapmigration97sonia/soniaHostAquisitionDate.oa.mjs";
import { soniaHostWarrentyUntil } from "../Ldapmigration97sonia/soniaHostWarrentyUntil.oa.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ ipHost, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ soniaHostMacAddress, soniaHostSubdomainName, soniaHostDefaultRouter, soniaHostDirectoryServiceType, soniaHostDnsEntryType, soniaHostDnsDomain, soniaHostNetgroupEntry, soniaHostHardwareType, soniaHostOsType, soniaHostNetbootType, soniaHostIsInstallServer, soniaHostIsUpdateServer, soniaHostAquisitionDate, soniaHostWarrentyUntil, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "soniaHost" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_soniaHost /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

