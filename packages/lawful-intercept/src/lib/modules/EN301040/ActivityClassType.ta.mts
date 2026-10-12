/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ActivityClassType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityClassType  ::=  ENUMERATED {
 *     allServices,
 *     tETRASpeech,
 *     singleSlotData24,
 *     singleSlotData48,
 *     singleSlotData72,
 *     multiSlotData224,
 *     multiSlotData248,
 *     multiSlotData272,
 *     multiSlotData324,
 *     multiSlotData348,
 *     multiSlotData372,
 *     multiSlotData424,
 *     multiSlotData448,
 *     multiSlotData472,
 *     sDSType1,
 *     sDSType2,
 *     sDSType3,
 *     sDSType4,
 *     status,
 *     sDSACKType1,
 *     sDSACKType2,
 *     sDSACKType3,
 *     sDSACKType4,
 *     statusack,
 *     sDSAcknowledgementsuccess,
 *     sDSAcknowledgementfail,
 *     sCLNSPacketData,
 *     cONSPacketData,
 *     internetProtocol,
 *     swMIauthenticationsuccess,
 *     swMIauthenticationfail,
 *     iTSIauthenticationsuccess,
 *     iTSIauthenticationfail,
 *     oTARSCKsuccess,
 *     oTARSCKfail,
 *     oTARGCKsuccess,
 *     oTARGCKfail,
 *     oTARCCKsuccess,
 *     oTARCCKfail,
 *     tARGETSUSCRIPTIONDISABLEDT,
 *     tARGETEQUIPMENTDISABLEDT,
 *     tARGETSUSCRIPTIONDISABLEDP,
 *     tARGETEQUIPEMENTDISABLEDP,
 *     tARGETSUBSCRIPTIONENABLED,
 *     tARGETEQUIPMENTENABLED,
 *     sessionregistration,
 *     sessionderegistration,
 *     mIGRATION,
 *     rOAMING, 
 *     supplementaryService
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ActivityClassType {
    allServices = 0,
    tETRASpeech = 1,
    singleSlotData24 = 2,
    singleSlotData48 = 3,
    singleSlotData72 = 4,
    multiSlotData224 = 5,
    multiSlotData248 = 6,
    multiSlotData272 = 7,
    multiSlotData324 = 8,
    multiSlotData348 = 9,
    multiSlotData372 = 10,
    multiSlotData424 = 11,
    multiSlotData448 = 12,
    multiSlotData472 = 13,
    sDSType1 = 14,
    sDSType2 = 15,
    sDSType3 = 16,
    sDSType4 = 17,
    status = 18,
    sDSACKType1 = 19,
    sDSACKType2 = 20,
    sDSACKType3 = 21,
    sDSACKType4 = 22,
    statusack = 23,
    sDSAcknowledgementsuccess = 24,
    sDSAcknowledgementfail = 25,
    sCLNSPacketData = 26,
    cONSPacketData = 27,
    internetProtocol = 28,
    swMIauthenticationsuccess = 29,
    swMIauthenticationfail = 30,
    iTSIauthenticationsuccess = 31,
    iTSIauthenticationfail = 32,
    oTARSCKsuccess = 33,
    oTARSCKfail = 34,
    oTARGCKsuccess = 35,
    oTARGCKfail = 36,
    oTARCCKsuccess = 37,
    oTARCCKfail = 38,
    tARGETSUSCRIPTIONDISABLEDT = 39,
    tARGETEQUIPMENTDISABLEDT = 40,
    tARGETSUSCRIPTIONDISABLEDP = 41,
    tARGETEQUIPEMENTDISABLEDP = 42,
    tARGETSUBSCRIPTIONENABLED = 43,
    tARGETEQUIPMENTENABLED = 44,
    sessionregistration = 45,
    sessionderegistration = 46,
    mIGRATION = 47,
    rOAMING = 48,
    supplementaryService = 49,
}

/**
 * @summary ActivityClassType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityClassType  ::=  ENUMERATED {
 *     allServices,
 *     tETRASpeech,
 *     singleSlotData24,
 *     singleSlotData48,
 *     singleSlotData72,
 *     multiSlotData224,
 *     multiSlotData248,
 *     multiSlotData272,
 *     multiSlotData324,
 *     multiSlotData348,
 *     multiSlotData372,
 *     multiSlotData424,
 *     multiSlotData448,
 *     multiSlotData472,
 *     sDSType1,
 *     sDSType2,
 *     sDSType3,
 *     sDSType4,
 *     status,
 *     sDSACKType1,
 *     sDSACKType2,
 *     sDSACKType3,
 *     sDSACKType4,
 *     statusack,
 *     sDSAcknowledgementsuccess,
 *     sDSAcknowledgementfail,
 *     sCLNSPacketData,
 *     cONSPacketData,
 *     internetProtocol,
 *     swMIauthenticationsuccess,
 *     swMIauthenticationfail,
 *     iTSIauthenticationsuccess,
 *     iTSIauthenticationfail,
 *     oTARSCKsuccess,
 *     oTARSCKfail,
 *     oTARGCKsuccess,
 *     oTARGCKfail,
 *     oTARCCKsuccess,
 *     oTARCCKfail,
 *     tARGETSUSCRIPTIONDISABLEDT,
 *     tARGETEQUIPMENTDISABLEDT,
 *     tARGETSUSCRIPTIONDISABLEDP,
 *     tARGETEQUIPEMENTDISABLEDP,
 *     tARGETSUBSCRIPTIONENABLED,
 *     tARGETEQUIPMENTENABLED,
 *     sessionregistration,
 *     sessionderegistration,
 *     mIGRATION,
 *     rOAMING, 
 *     supplementaryService
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ActivityClassType = _enum_for_ActivityClassType;

/**
 * @summary ActivityClassType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityClassType  ::=  ENUMERATED {
 *     allServices,
 *     tETRASpeech,
 *     singleSlotData24,
 *     singleSlotData48,
 *     singleSlotData72,
 *     multiSlotData224,
 *     multiSlotData248,
 *     multiSlotData272,
 *     multiSlotData324,
 *     multiSlotData348,
 *     multiSlotData372,
 *     multiSlotData424,
 *     multiSlotData448,
 *     multiSlotData472,
 *     sDSType1,
 *     sDSType2,
 *     sDSType3,
 *     sDSType4,
 *     status,
 *     sDSACKType1,
 *     sDSACKType2,
 *     sDSACKType3,
 *     sDSACKType4,
 *     statusack,
 *     sDSAcknowledgementsuccess,
 *     sDSAcknowledgementfail,
 *     sCLNSPacketData,
 *     cONSPacketData,
 *     internetProtocol,
 *     swMIauthenticationsuccess,
 *     swMIauthenticationfail,
 *     iTSIauthenticationsuccess,
 *     iTSIauthenticationfail,
 *     oTARSCKsuccess,
 *     oTARSCKfail,
 *     oTARGCKsuccess,
 *     oTARGCKfail,
 *     oTARCCKsuccess,
 *     oTARCCKfail,
 *     tARGETSUSCRIPTIONDISABLEDT,
 *     tARGETEQUIPMENTDISABLEDT,
 *     tARGETSUSCRIPTIONDISABLEDP,
 *     tARGETEQUIPEMENTDISABLEDP,
 *     tARGETSUBSCRIPTIONENABLED,
 *     tARGETEQUIPMENTENABLED,
 *     sessionregistration,
 *     sessionderegistration,
 *     mIGRATION,
 *     rOAMING, 
 *     supplementaryService
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ActivityClassType = _enum_for_ActivityClassType;

/**
 * @summary ActivityClassType_allServices
 * @constant
 * @type {number}
 */
export
const ActivityClassType_allServices: ActivityClassType = ActivityClassType.allServices; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allServices
 * @constant
 * @type {number}
 */
export
const allServices: ActivityClassType = ActivityClassType.allServices; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_tETRASpeech
 * @constant
 * @type {number}
 */
export
const ActivityClassType_tETRASpeech: ActivityClassType = ActivityClassType.tETRASpeech; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tETRASpeech
 * @constant
 * @type {number}
 */
export
const tETRASpeech: ActivityClassType = ActivityClassType.tETRASpeech; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_singleSlotData24
 * @constant
 * @type {number}
 */
export
const ActivityClassType_singleSlotData24: ActivityClassType = ActivityClassType.singleSlotData24; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleSlotData24
 * @constant
 * @type {number}
 */
export
const singleSlotData24: ActivityClassType = ActivityClassType.singleSlotData24; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_singleSlotData48
 * @constant
 * @type {number}
 */
export
const ActivityClassType_singleSlotData48: ActivityClassType = ActivityClassType.singleSlotData48; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleSlotData48
 * @constant
 * @type {number}
 */
export
const singleSlotData48: ActivityClassType = ActivityClassType.singleSlotData48; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_singleSlotData72
 * @constant
 * @type {number}
 */
export
const ActivityClassType_singleSlotData72: ActivityClassType = ActivityClassType.singleSlotData72; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleSlotData72
 * @constant
 * @type {number}
 */
export
const singleSlotData72: ActivityClassType = ActivityClassType.singleSlotData72; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_multiSlotData224
 * @constant
 * @type {number}
 */
export
const ActivityClassType_multiSlotData224: ActivityClassType = ActivityClassType.multiSlotData224; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiSlotData224
 * @constant
 * @type {number}
 */
export
const multiSlotData224: ActivityClassType = ActivityClassType.multiSlotData224; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_multiSlotData248
 * @constant
 * @type {number}
 */
export
const ActivityClassType_multiSlotData248: ActivityClassType = ActivityClassType.multiSlotData248; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiSlotData248
 * @constant
 * @type {number}
 */
export
const multiSlotData248: ActivityClassType = ActivityClassType.multiSlotData248; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_multiSlotData272
 * @constant
 * @type {number}
 */
export
const ActivityClassType_multiSlotData272: ActivityClassType = ActivityClassType.multiSlotData272; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiSlotData272
 * @constant
 * @type {number}
 */
export
const multiSlotData272: ActivityClassType = ActivityClassType.multiSlotData272; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_multiSlotData324
 * @constant
 * @type {number}
 */
export
const ActivityClassType_multiSlotData324: ActivityClassType = ActivityClassType.multiSlotData324; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiSlotData324
 * @constant
 * @type {number}
 */
export
const multiSlotData324: ActivityClassType = ActivityClassType.multiSlotData324; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_multiSlotData348
 * @constant
 * @type {number}
 */
export
const ActivityClassType_multiSlotData348: ActivityClassType = ActivityClassType.multiSlotData348; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiSlotData348
 * @constant
 * @type {number}
 */
export
const multiSlotData348: ActivityClassType = ActivityClassType.multiSlotData348; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_multiSlotData372
 * @constant
 * @type {number}
 */
export
const ActivityClassType_multiSlotData372: ActivityClassType = ActivityClassType.multiSlotData372; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiSlotData372
 * @constant
 * @type {number}
 */
export
const multiSlotData372: ActivityClassType = ActivityClassType.multiSlotData372; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_multiSlotData424
 * @constant
 * @type {number}
 */
export
const ActivityClassType_multiSlotData424: ActivityClassType = ActivityClassType.multiSlotData424; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiSlotData424
 * @constant
 * @type {number}
 */
export
const multiSlotData424: ActivityClassType = ActivityClassType.multiSlotData424; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_multiSlotData448
 * @constant
 * @type {number}
 */
export
const ActivityClassType_multiSlotData448: ActivityClassType = ActivityClassType.multiSlotData448; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiSlotData448
 * @constant
 * @type {number}
 */
export
const multiSlotData448: ActivityClassType = ActivityClassType.multiSlotData448; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_multiSlotData472
 * @constant
 * @type {number}
 */
export
const ActivityClassType_multiSlotData472: ActivityClassType = ActivityClassType.multiSlotData472; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiSlotData472
 * @constant
 * @type {number}
 */
export
const multiSlotData472: ActivityClassType = ActivityClassType.multiSlotData472; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sDSType1
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sDSType1: ActivityClassType = ActivityClassType.sDSType1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDSType1
 * @constant
 * @type {number}
 */
export
const sDSType1: ActivityClassType = ActivityClassType.sDSType1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sDSType2
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sDSType2: ActivityClassType = ActivityClassType.sDSType2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDSType2
 * @constant
 * @type {number}
 */
export
const sDSType2: ActivityClassType = ActivityClassType.sDSType2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sDSType3
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sDSType3: ActivityClassType = ActivityClassType.sDSType3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDSType3
 * @constant
 * @type {number}
 */
export
const sDSType3: ActivityClassType = ActivityClassType.sDSType3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sDSType4
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sDSType4: ActivityClassType = ActivityClassType.sDSType4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDSType4
 * @constant
 * @type {number}
 */
export
const sDSType4: ActivityClassType = ActivityClassType.sDSType4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_status
 * @constant
 * @type {number}
 */
export
const ActivityClassType_status: ActivityClassType = ActivityClassType.status; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary status
 * @constant
 * @type {number}
 */
export
const status: ActivityClassType = ActivityClassType.status; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sDSACKType1
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sDSACKType1: ActivityClassType = ActivityClassType.sDSACKType1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDSACKType1
 * @constant
 * @type {number}
 */
export
const sDSACKType1: ActivityClassType = ActivityClassType.sDSACKType1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sDSACKType2
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sDSACKType2: ActivityClassType = ActivityClassType.sDSACKType2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDSACKType2
 * @constant
 * @type {number}
 */
export
const sDSACKType2: ActivityClassType = ActivityClassType.sDSACKType2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sDSACKType3
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sDSACKType3: ActivityClassType = ActivityClassType.sDSACKType3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDSACKType3
 * @constant
 * @type {number}
 */
export
const sDSACKType3: ActivityClassType = ActivityClassType.sDSACKType3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sDSACKType4
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sDSACKType4: ActivityClassType = ActivityClassType.sDSACKType4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDSACKType4
 * @constant
 * @type {number}
 */
export
const sDSACKType4: ActivityClassType = ActivityClassType.sDSACKType4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_statusack
 * @constant
 * @type {number}
 */
export
const ActivityClassType_statusack: ActivityClassType = ActivityClassType.statusack; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary statusack
 * @constant
 * @type {number}
 */
export
const statusack: ActivityClassType = ActivityClassType.statusack; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sDSAcknowledgementsuccess
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sDSAcknowledgementsuccess: ActivityClassType = ActivityClassType.sDSAcknowledgementsuccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDSAcknowledgementsuccess
 * @constant
 * @type {number}
 */
export
const sDSAcknowledgementsuccess: ActivityClassType = ActivityClassType.sDSAcknowledgementsuccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sDSAcknowledgementfail
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sDSAcknowledgementfail: ActivityClassType = ActivityClassType.sDSAcknowledgementfail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDSAcknowledgementfail
 * @constant
 * @type {number}
 */
export
const sDSAcknowledgementfail: ActivityClassType = ActivityClassType.sDSAcknowledgementfail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sCLNSPacketData
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sCLNSPacketData: ActivityClassType = ActivityClassType.sCLNSPacketData; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sCLNSPacketData
 * @constant
 * @type {number}
 */
export
const sCLNSPacketData: ActivityClassType = ActivityClassType.sCLNSPacketData; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_cONSPacketData
 * @constant
 * @type {number}
 */
export
const ActivityClassType_cONSPacketData: ActivityClassType = ActivityClassType.cONSPacketData; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cONSPacketData
 * @constant
 * @type {number}
 */
export
const cONSPacketData: ActivityClassType = ActivityClassType.cONSPacketData; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_internetProtocol
 * @constant
 * @type {number}
 */
export
const ActivityClassType_internetProtocol: ActivityClassType = ActivityClassType.internetProtocol; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internetProtocol
 * @constant
 * @type {number}
 */
export
const internetProtocol: ActivityClassType = ActivityClassType.internetProtocol; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_swMIauthenticationsuccess
 * @constant
 * @type {number}
 */
export
const ActivityClassType_swMIauthenticationsuccess: ActivityClassType = ActivityClassType.swMIauthenticationsuccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary swMIauthenticationsuccess
 * @constant
 * @type {number}
 */
export
const swMIauthenticationsuccess: ActivityClassType = ActivityClassType.swMIauthenticationsuccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_swMIauthenticationfail
 * @constant
 * @type {number}
 */
export
const ActivityClassType_swMIauthenticationfail: ActivityClassType = ActivityClassType.swMIauthenticationfail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary swMIauthenticationfail
 * @constant
 * @type {number}
 */
export
const swMIauthenticationfail: ActivityClassType = ActivityClassType.swMIauthenticationfail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_iTSIauthenticationsuccess
 * @constant
 * @type {number}
 */
export
const ActivityClassType_iTSIauthenticationsuccess: ActivityClassType = ActivityClassType.iTSIauthenticationsuccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iTSIauthenticationsuccess
 * @constant
 * @type {number}
 */
export
const iTSIauthenticationsuccess: ActivityClassType = ActivityClassType.iTSIauthenticationsuccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_iTSIauthenticationfail
 * @constant
 * @type {number}
 */
export
const ActivityClassType_iTSIauthenticationfail: ActivityClassType = ActivityClassType.iTSIauthenticationfail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iTSIauthenticationfail
 * @constant
 * @type {number}
 */
export
const iTSIauthenticationfail: ActivityClassType = ActivityClassType.iTSIauthenticationfail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_oTARSCKsuccess
 * @constant
 * @type {number}
 */
export
const ActivityClassType_oTARSCKsuccess: ActivityClassType = ActivityClassType.oTARSCKsuccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oTARSCKsuccess
 * @constant
 * @type {number}
 */
export
const oTARSCKsuccess: ActivityClassType = ActivityClassType.oTARSCKsuccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_oTARSCKfail
 * @constant
 * @type {number}
 */
export
const ActivityClassType_oTARSCKfail: ActivityClassType = ActivityClassType.oTARSCKfail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oTARSCKfail
 * @constant
 * @type {number}
 */
export
const oTARSCKfail: ActivityClassType = ActivityClassType.oTARSCKfail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_oTARGCKsuccess
 * @constant
 * @type {number}
 */
export
const ActivityClassType_oTARGCKsuccess: ActivityClassType = ActivityClassType.oTARGCKsuccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oTARGCKsuccess
 * @constant
 * @type {number}
 */
export
const oTARGCKsuccess: ActivityClassType = ActivityClassType.oTARGCKsuccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_oTARGCKfail
 * @constant
 * @type {number}
 */
export
const ActivityClassType_oTARGCKfail: ActivityClassType = ActivityClassType.oTARGCKfail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oTARGCKfail
 * @constant
 * @type {number}
 */
export
const oTARGCKfail: ActivityClassType = ActivityClassType.oTARGCKfail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_oTARCCKsuccess
 * @constant
 * @type {number}
 */
export
const ActivityClassType_oTARCCKsuccess: ActivityClassType = ActivityClassType.oTARCCKsuccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oTARCCKsuccess
 * @constant
 * @type {number}
 */
export
const oTARCCKsuccess: ActivityClassType = ActivityClassType.oTARCCKsuccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_oTARCCKfail
 * @constant
 * @type {number}
 */
export
const ActivityClassType_oTARCCKfail: ActivityClassType = ActivityClassType.oTARCCKfail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oTARCCKfail
 * @constant
 * @type {number}
 */
export
const oTARCCKfail: ActivityClassType = ActivityClassType.oTARCCKfail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_tARGETSUSCRIPTIONDISABLEDT
 * @constant
 * @type {number}
 */
export
const ActivityClassType_tARGETSUSCRIPTIONDISABLEDT: ActivityClassType = ActivityClassType.tARGETSUSCRIPTIONDISABLEDT; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tARGETSUSCRIPTIONDISABLEDT
 * @constant
 * @type {number}
 */
export
const tARGETSUSCRIPTIONDISABLEDT: ActivityClassType = ActivityClassType.tARGETSUSCRIPTIONDISABLEDT; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_tARGETEQUIPMENTDISABLEDT
 * @constant
 * @type {number}
 */
export
const ActivityClassType_tARGETEQUIPMENTDISABLEDT: ActivityClassType = ActivityClassType.tARGETEQUIPMENTDISABLEDT; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tARGETEQUIPMENTDISABLEDT
 * @constant
 * @type {number}
 */
export
const tARGETEQUIPMENTDISABLEDT: ActivityClassType = ActivityClassType.tARGETEQUIPMENTDISABLEDT; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_tARGETSUSCRIPTIONDISABLEDP
 * @constant
 * @type {number}
 */
export
const ActivityClassType_tARGETSUSCRIPTIONDISABLEDP: ActivityClassType = ActivityClassType.tARGETSUSCRIPTIONDISABLEDP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tARGETSUSCRIPTIONDISABLEDP
 * @constant
 * @type {number}
 */
export
const tARGETSUSCRIPTIONDISABLEDP: ActivityClassType = ActivityClassType.tARGETSUSCRIPTIONDISABLEDP; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_tARGETEQUIPEMENTDISABLEDP
 * @constant
 * @type {number}
 */
export
const ActivityClassType_tARGETEQUIPEMENTDISABLEDP: ActivityClassType = ActivityClassType.tARGETEQUIPEMENTDISABLEDP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tARGETEQUIPEMENTDISABLEDP
 * @constant
 * @type {number}
 */
export
const tARGETEQUIPEMENTDISABLEDP: ActivityClassType = ActivityClassType.tARGETEQUIPEMENTDISABLEDP; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_tARGETSUBSCRIPTIONENABLED
 * @constant
 * @type {number}
 */
export
const ActivityClassType_tARGETSUBSCRIPTIONENABLED: ActivityClassType = ActivityClassType.tARGETSUBSCRIPTIONENABLED; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tARGETSUBSCRIPTIONENABLED
 * @constant
 * @type {number}
 */
export
const tARGETSUBSCRIPTIONENABLED: ActivityClassType = ActivityClassType.tARGETSUBSCRIPTIONENABLED; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_tARGETEQUIPMENTENABLED
 * @constant
 * @type {number}
 */
export
const ActivityClassType_tARGETEQUIPMENTENABLED: ActivityClassType = ActivityClassType.tARGETEQUIPMENTENABLED; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tARGETEQUIPMENTENABLED
 * @constant
 * @type {number}
 */
export
const tARGETEQUIPMENTENABLED: ActivityClassType = ActivityClassType.tARGETEQUIPMENTENABLED; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sessionregistration
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sessionregistration: ActivityClassType = ActivityClassType.sessionregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionregistration
 * @constant
 * @type {number}
 */
export
const sessionregistration: ActivityClassType = ActivityClassType.sessionregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sessionderegistration
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sessionderegistration: ActivityClassType = ActivityClassType.sessionderegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionderegistration
 * @constant
 * @type {number}
 */
export
const sessionderegistration: ActivityClassType = ActivityClassType.sessionderegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_mIGRATION
 * @constant
 * @type {number}
 */
export
const ActivityClassType_mIGRATION: ActivityClassType = ActivityClassType.mIGRATION; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mIGRATION
 * @constant
 * @type {number}
 */
export
const mIGRATION: ActivityClassType = ActivityClassType.mIGRATION; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_rOAMING
 * @constant
 * @type {number}
 */
export
const ActivityClassType_rOAMING: ActivityClassType = ActivityClassType.rOAMING; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rOAMING
 * @constant
 * @type {number}
 */
export
const rOAMING: ActivityClassType = ActivityClassType.rOAMING; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_supplementaryService
 * @constant
 * @type {number}
 */
export
const ActivityClassType_supplementaryService: ActivityClassType = ActivityClassType.supplementaryService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary supplementaryService
 * @constant
 * @type {number}
 */
export
const supplementaryService: ActivityClassType = ActivityClassType.supplementaryService; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ActivityClassType: $.ASN1Decoder<ActivityClassType> = $._decodeEnumerated;
export const _encode_ActivityClassType: $.ASN1Encoder<ActivityClassType> = $._encodeEnumerated;


/* eslint-enable */
