/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { connectionPoint } from "../LdapSchema2ldifFmserver/connectionPoint.oa.mjs";
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
const printQueue: OBJECT_CLASS = undefined;

/* eslint-enable */
