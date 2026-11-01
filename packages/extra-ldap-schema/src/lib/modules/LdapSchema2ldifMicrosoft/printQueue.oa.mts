/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { connectionPoint } from "../LdapSchema2ldifFmserver/connectionPoint.oa.mjs";
// export { connectionPoint } from "../LdapSchema2ldifFmserver/connectionPoint.oa.mjs";
import { id_oc_printQueue } from "../LdapSchema2ldifMicrosoft/id-oc-printQueue.va.mjs";
import { uNCName } from "../MSUser/uNCName.oa.mjs";
import { versionNumber } from "../MSUser/versionNumber.oa.mjs";
import { serverName } from "../MSUser/serverName.oa.mjs";
import { printerName } from "../MSUser/printerName.oa.mjs";
import { shortServerName } from "../MSUser/shortServerName.oa.mjs";
import { location } from "../MSUser/location.oa.mjs";
import { portName } from "../MSUser/portName.oa.mjs";
import { driverName } from "../MSUser/driverName.oa.mjs";
import { printSeparatorFile } from "../MSUser/printSeparatorFile.oa.mjs";
import { priority } from "../MSUser/priority.oa.mjs";
import { defaultPriority } from "../MSUser/defaultPriority.oa.mjs";
import { printStartTime } from "../MSUser/printStartTime.oa.mjs";
import { printEndTime } from "../MSUser/printEndTime.oa.mjs";
import { printFormName } from "../MSUser/printFormName.oa.mjs";
import { printBinNames } from "../MSUser/printBinNames.oa.mjs";
import { printMaxResolutionSupported } from "../MSUser/printMaxResolutionSupported.oa.mjs";
import { printOrientationsSupported } from "../MSUser/printOrientationsSupported.oa.mjs";
import { printMaxCopies } from "../MSUser/printMaxCopies.oa.mjs";
import { printCollate } from "../MSUser/printCollate.oa.mjs";
import { printColor } from "../MSUser/printColor.oa.mjs";
import { printLanguage } from "../MSUser/printLanguage.oa.mjs";
import { printAttributes } from "../MSUser/printAttributes.oa.mjs";
import { printShareName } from "../MSUser/printShareName.oa.mjs";
import { printOwner } from "../MSUser/printOwner.oa.mjs";
import { printNotify } from "../MSUser/printNotify.oa.mjs";
import { printStatus } from "../MSUser/printStatus.oa.mjs";
import { printSpooling } from "../MSUser/printSpooling.oa.mjs";
import { printKeepPrintedJobs } from "../MSUser/printKeepPrintedJobs.oa.mjs";
import { driverVersion } from "../MSUser/driverVersion.oa.mjs";
import { printMaxXExtent } from "../MSUser/printMaxXExtent.oa.mjs";
import { printMaxYExtent } from "../MSUser/printMaxYExtent.oa.mjs";
import { printMinXExtent } from "../MSUser/printMinXExtent.oa.mjs";
import { printMinYExtent } from "../MSUser/printMinYExtent.oa.mjs";
import { printStaplingSupported } from "../MSUser/printStaplingSupported.oa.mjs";
import { printMemory } from "../MSUser/printMemory.oa.mjs";
import { assetNumber } from "../MSUser/assetNumber.oa.mjs";
import { bytesPerMinute } from "../MSUser/bytesPerMinute.oa.mjs";
import { printRate } from "../MSUser/printRate.oa.mjs";
import { printRateUnit } from "../MSUser/printRateUnit.oa.mjs";
import { printNetworkAddress } from "../MSUser/printNetworkAddress.oa.mjs";
import { printMACAddress } from "../MSUser/printMACAddress.oa.mjs";
import { printMediaReady } from "../MSUser/printMediaReady.oa.mjs";
import { printNumberUp } from "../MSUser/printNumberUp.oa.mjs";
import { printMediaSupported } from "../MSUser/printMediaSupported.oa.mjs";
import { operatingSystem } from "../MSUser/operatingSystem.oa.mjs";
import { operatingSystemVersion } from "../MSUser/operatingSystemVersion.oa.mjs";
import { operatingSystemServicePack } from "../MSUser/operatingSystemServicePack.oa.mjs";
import { operatingSystemHotfix } from "../MSUser/operatingSystemHotfix.oa.mjs";
import { physicalLocationObject } from "../MSUser/physicalLocationObject.oa.mjs";
import { printPagesPerMinute } from "../MSUser/printPagesPerMinute.oa.mjs";
import { printDuplexSupported } from "../MSUser/printDuplexSupported.oa.mjs";
// export { id_oc_printQueue } from "../LdapSchema2ldifMicrosoft/id-oc-printQueue.va.mjs";


/**
 * @summary printQueue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * printQueue OBJECT-CLASS ::= {
 *   SUBCLASS OF               { connectionPoint }
 *   MUST CONTAIN              { uNCName
 *                               | versionNumber
 *                               | serverName
 *                               | printerName
 *                               | shortServerName }
 *   MAY CONTAIN               { location
 *                               | portName
 *                               | driverName
 *                               | printSeparatorFile
 *                               | priority
 *                               | defaultPriority
 *                               | printStartTime
 *                               | printEndTime
 *                               | printFormName
 *                               | printBinNames
 *                               | printMaxResolutionSupported
 *                               | printOrientationsSupported
 *                               | printMaxCopies
 *                               | printCollate
 *                               | printColor
 *                               | printLanguage
 *                               | printAttributes
 *                               | printShareName
 *                               | printOwner
 *                               | printNotify
 *                               | printStatus
 *                               | printSpooling
 *                               | printKeepPrintedJobs
 *                               | driverVersion
 *                               | printMaxXExtent
 *                               | printMaxYExtent
 *                               | printMinXExtent
 *                               | printMinYExtent
 *                               | printStaplingSupported
 *                               | printMemory
 *                               | assetNumber
 *                               | bytesPerMinute
 *                               | printRate
 *                               | printRateUnit
 *                               | printNetworkAddress
 *                               | printMACAddress
 *                               | printMediaReady
 *                               | printNumberUp
 *                               | printMediaSupported
 *                               | operatingSystem
 *                               | operatingSystemVersion
 *                               | operatingSystemServicePack
 *                               | operatingSystemHotfix
 *                               | physicalLocationObject
 *                               | printPagesPerMinute
 *                               | printDuplexSupported }
 *   LDAP-NAME                 {"printQueue"}
 *   ID                        id-oc-printQueue }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const printQueue: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ connectionPoint, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ uNCName, versionNumber, serverName, printerName, shortServerName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ location, portName, driverName, printSeparatorFile, priority, defaultPriority, printStartTime, printEndTime, printFormName, printBinNames, printMaxResolutionSupported, printOrientationsSupported, printMaxCopies, printCollate, printColor, printLanguage, printAttributes, printShareName, printOwner, printNotify, printStatus, printSpooling, printKeepPrintedJobs, driverVersion, printMaxXExtent, printMaxYExtent, printMinXExtent, printMinYExtent, printStaplingSupported, printMemory, assetNumber, bytesPerMinute, printRate, printRateUnit, printNetworkAddress, printMACAddress, printMediaReady, printNumberUp, printMediaSupported, operatingSystem, operatingSystemVersion, operatingSystemServicePack, operatingSystemHotfix, physicalLocationObject, printPagesPerMinute, printDuplexSupported, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "printQueue" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_printQueue /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
