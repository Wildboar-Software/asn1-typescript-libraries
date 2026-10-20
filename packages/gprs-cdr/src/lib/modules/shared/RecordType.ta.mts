/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RecordType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RecordType  ::=  INTEGER {
 *    moCallRecord              ( 0 ),
 *    mtCallRecord              ( 1 ),
 *    roamingRecord             ( 2 ),
 *    incGatewayRecord          ( 3 ),
 *    outGatewayRecord          ( 4 ),
 *    transitCallRecord         ( 5 ),
 *    moSMSRecord               ( 6 ),
 *    mtSMSRecord               ( 7 ),
 *    moSMSIWRecord             ( 8 ),
 *    mtSMSGWRecord             ( 9 ),
 *    ssActionRecord            ( 10 ),
 *    hlrIntRecord              ( 11 ),
 *    locUpdateHLRRecord        ( 12 ),
 *    locUpdateVLRRecord        ( 13 ),
 *    commonEquipRecord         ( 14 ),
 *    moTraceRecord             ( 15 ),
 *    mtTraceRecord             ( 16 ),
 *    termCAMELRecord           ( 17 ),
 *    sgsnPDPRecord             ( 18 ),
 *    sgsnMMRecord              ( 20 ),
 *    sgsnSMORecord             ( 21 ),
 *    sgsnSMTRecord             ( 22 ),
 *    mtLCSRecord               ( 23 ),
 *    moLCSRecord               ( 24 ),
 *    niLCSRecord               ( 25 ),
 *    sgsnMTLCSRecord           ( 26 ),
 *    sgsnMOLCSRecord           ( 27 ),
 *    sgsnNILCSRecord           ( 28 ),
 *    mMO1SRecord               ( 30 ),
 *    mMO4FRqRecord             ( 31 ),
 *    mMO4FRsRecord             ( 32 ),
 *    mMO4DRecord               ( 33 ),
 *    mMO1DRecord               ( 34 ),
 *    mMO4RRecord               ( 35 ),
 *    mMO1RRecord               ( 36 ),
 *    mMOMDRecord               ( 37 ),
 *    mMR4FRecord               ( 38 ),
 *    mMR1NRqRecord             ( 39 ),
 *    mMR1NRsRecord             ( 40 ),
 *    mMR1RtRecord              ( 41 ),
 *    mMR1AFRecord              ( 42 ),
 *    mMR4DRqRecord             ( 43 ),
 *    mMR4DRsRecord             ( 44 ),
 *    mMR1RRRecord              ( 45 ),
 *    mMR4RRqRecord             ( 46 ),
 *    mMR4RRsRecord             ( 47 ),
 *    mMRMDRecord               ( 48 ),
 *    mMFRecord                 ( 49 ),
 *    mMBx1SRecord              ( 50 ),
 *    mMBx1VRecord              ( 51 ),
 *    mMBx1URecord              ( 52 ),
 *    mMBx1DRecord              ( 53 ),
 *    mM7SRecord                ( 54 ),
 *    mM7DRqRecord              ( 55 ),
 *    mM7DRsRecord              ( 56 ),
 *    mM7CRecord                ( 57 ),
 *    mM7RRecord                ( 58 ),
 *    mM7DRRqRecord             ( 59 ),
 *    mM7DRRsRecord             ( 60 ),
 *    mM7RRqRecord              ( 61 ),
 *    mM7RRsRecord              ( 62 ),
 *    sCSCFRecord               ( 63 ),
 *    pCSCFRecord               ( 64 ),
 *    iCSCFRecord               ( 65 ),
 *    mRFCRecord                ( 66 ),
 *    mGCFRecord                ( 67 ),
 *    bGCFRecord                ( 68 ),
 *    aSRecord                  ( 69 ),
 *    eCSCFRecord               ( 70 ),
 *    iBCFRecord                ( 82 ),
 *    tRFRecord                 ( 89 ),
 *    tFRecord                  ( 90 ),
 *    aTCFRecord                ( 91 ),
 *    lCSGMORecord              ( 71 ),
 *    lCSRGMTRecord             ( 72 ),
 *    lCSHGMTRecord             ( 73 ),
 *    lCSVGMTRecord             ( 74 ),
 *    lCSGNIRecord              ( 75 ),
 *    sgsnMBMSRecord            ( 76 ),
 *    ggsnMBMSRecord            ( 77 ),
 *    gwMBMSRecord              ( 86 ),
 *    sUBBMSCRecord             ( 78 ),
 *    cONTENTBMSCRecord         ( 79 ),
 *    pPFRecord                 ( 80 ),
 *    cPFRecord                 ( 81 ),
 *    sGWRecord                 ( 84 ),
 *    pGWRecord                 ( 85 ),
 *    tDFRecord                 ( 92 ),
 *    iPERecord                 ( 95 ),
 *    ePDGRecord                ( 96 ),
 *    tWAGRecord                ( 97 ),
 *    mMTelRecord               ( 83 ),
 *    mSCsRVCCRecord            ( 87 ),
 *    mMTRFRecord               ( 88 ),
 *    iCSRegisterRecord         ( 99 ),
 *    sCSMORecord               ( 93 ),
 *    sCSMTRecord               ( 94 ),
 *    pFDDRecord                ( 100 ),
 *    pFEDRecord                ( 101 ),
 *    pFDCRecord                ( 102 ),
 *    mECORecord                ( 103 ),
 *    mERERecord                ( 104 ),
 *    cPDTSCERecord             ( 105 ),
 *    cPDTSNNRecord             ( 106 ),
 *    sCDVTT4Record             ( 110 ),
 *    sCSMOT4Record             ( 111 ),
 *    iSMSMORecord              ( 112 ),
 *    iSMSMTRecord              ( 113 ),
 *    eASCERecord               ( 120 ),
 *    chargingFunctionRecord    ( 200 )}
 * ```
 */
export
type RecordType = INTEGER;

/**
 * @summary RecordType_moCallRecord
 * @constant
 * @type {number}
 */
export
const RecordType_moCallRecord: RecordType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moCallRecord
 * @constant
 * @type {number}
 */
export
const moCallRecord: RecordType = RecordType_moCallRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtCallRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mtCallRecord: RecordType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtCallRecord
 * @constant
 * @type {number}
 */
export
const mtCallRecord: RecordType = RecordType_mtCallRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_roamingRecord
 * @constant
 * @type {number}
 */
export
const RecordType_roamingRecord: RecordType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_roamingRecord
 * @constant
 * @type {number}
 */
export
const roamingRecord: RecordType = RecordType_roamingRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_incGatewayRecord
 * @constant
 * @type {number}
 */
export
const RecordType_incGatewayRecord: RecordType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_incGatewayRecord
 * @constant
 * @type {number}
 */
export
const incGatewayRecord: RecordType = RecordType_incGatewayRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_outGatewayRecord
 * @constant
 * @type {number}
 */
export
const RecordType_outGatewayRecord: RecordType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_outGatewayRecord
 * @constant
 * @type {number}
 */
export
const outGatewayRecord: RecordType = RecordType_outGatewayRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_transitCallRecord
 * @constant
 * @type {number}
 */
export
const RecordType_transitCallRecord: RecordType = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_transitCallRecord
 * @constant
 * @type {number}
 */
export
const transitCallRecord: RecordType = RecordType_transitCallRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moSMSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_moSMSRecord: RecordType = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moSMSRecord
 * @constant
 * @type {number}
 */
export
const moSMSRecord: RecordType = RecordType_moSMSRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtSMSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mtSMSRecord: RecordType = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtSMSRecord
 * @constant
 * @type {number}
 */
export
const mtSMSRecord: RecordType = RecordType_mtSMSRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moSMSIWRecord
 * @constant
 * @type {number}
 */
export
const RecordType_moSMSIWRecord: RecordType = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moSMSIWRecord
 * @constant
 * @type {number}
 */
export
const moSMSIWRecord: RecordType = RecordType_moSMSIWRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtSMSGWRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mtSMSGWRecord: RecordType = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtSMSGWRecord
 * @constant
 * @type {number}
 */
export
const mtSMSGWRecord: RecordType = RecordType_mtSMSGWRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_ssActionRecord
 * @constant
 * @type {number}
 */
export
const RecordType_ssActionRecord: RecordType = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_ssActionRecord
 * @constant
 * @type {number}
 */
export
const ssActionRecord: RecordType = RecordType_ssActionRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_hlrIntRecord
 * @constant
 * @type {number}
 */
export
const RecordType_hlrIntRecord: RecordType = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_hlrIntRecord
 * @constant
 * @type {number}
 */
export
const hlrIntRecord: RecordType = RecordType_hlrIntRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_locUpdateHLRRecord
 * @constant
 * @type {number}
 */
export
const RecordType_locUpdateHLRRecord: RecordType = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_locUpdateHLRRecord
 * @constant
 * @type {number}
 */
export
const locUpdateHLRRecord: RecordType = RecordType_locUpdateHLRRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_locUpdateVLRRecord
 * @constant
 * @type {number}
 */
export
const RecordType_locUpdateVLRRecord: RecordType = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_locUpdateVLRRecord
 * @constant
 * @type {number}
 */
export
const locUpdateVLRRecord: RecordType = RecordType_locUpdateVLRRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_commonEquipRecord
 * @constant
 * @type {number}
 */
export
const RecordType_commonEquipRecord: RecordType = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_commonEquipRecord
 * @constant
 * @type {number}
 */
export
const commonEquipRecord: RecordType = RecordType_commonEquipRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moTraceRecord
 * @constant
 * @type {number}
 */
export
const RecordType_moTraceRecord: RecordType = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moTraceRecord
 * @constant
 * @type {number}
 */
export
const moTraceRecord: RecordType = RecordType_moTraceRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtTraceRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mtTraceRecord: RecordType = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtTraceRecord
 * @constant
 * @type {number}
 */
export
const mtTraceRecord: RecordType = RecordType_mtTraceRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_termCAMELRecord
 * @constant
 * @type {number}
 */
export
const RecordType_termCAMELRecord: RecordType = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_termCAMELRecord
 * @constant
 * @type {number}
 */
export
const termCAMELRecord: RecordType = RecordType_termCAMELRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnPDPRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sgsnPDPRecord: RecordType = 18; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnPDPRecord
 * @constant
 * @type {number}
 */
export
const sgsnPDPRecord: RecordType = RecordType_sgsnPDPRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnMMRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sgsnMMRecord: RecordType = 20; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnMMRecord
 * @constant
 * @type {number}
 */
export
const sgsnMMRecord: RecordType = RecordType_sgsnMMRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnSMORecord
 * @constant
 * @type {number}
 */
export
const RecordType_sgsnSMORecord: RecordType = 21; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnSMORecord
 * @constant
 * @type {number}
 */
export
const sgsnSMORecord: RecordType = RecordType_sgsnSMORecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnSMTRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sgsnSMTRecord: RecordType = 22; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnSMTRecord
 * @constant
 * @type {number}
 */
export
const sgsnSMTRecord: RecordType = RecordType_sgsnSMTRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtLCSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mtLCSRecord: RecordType = 23; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtLCSRecord
 * @constant
 * @type {number}
 */
export
const mtLCSRecord: RecordType = RecordType_mtLCSRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moLCSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_moLCSRecord: RecordType = 24; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moLCSRecord
 * @constant
 * @type {number}
 */
export
const moLCSRecord: RecordType = RecordType_moLCSRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_niLCSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_niLCSRecord: RecordType = 25; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_niLCSRecord
 * @constant
 * @type {number}
 */
export
const niLCSRecord: RecordType = RecordType_niLCSRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnMTLCSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sgsnMTLCSRecord: RecordType = 26; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnMTLCSRecord
 * @constant
 * @type {number}
 */
export
const sgsnMTLCSRecord: RecordType = RecordType_sgsnMTLCSRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnMOLCSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sgsnMOLCSRecord: RecordType = 27; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnMOLCSRecord
 * @constant
 * @type {number}
 */
export
const sgsnMOLCSRecord: RecordType = RecordType_sgsnMOLCSRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnNILCSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sgsnNILCSRecord: RecordType = 28; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnNILCSRecord
 * @constant
 * @type {number}
 */
export
const sgsnNILCSRecord: RecordType = RecordType_sgsnNILCSRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO1SRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMO1SRecord: RecordType = 30; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO1SRecord
 * @constant
 * @type {number}
 */
export
const mMO1SRecord: RecordType = RecordType_mMO1SRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO4FRqRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMO4FRqRecord: RecordType = 31; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO4FRqRecord
 * @constant
 * @type {number}
 */
export
const mMO4FRqRecord: RecordType = RecordType_mMO4FRqRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO4FRsRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMO4FRsRecord: RecordType = 32; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO4FRsRecord
 * @constant
 * @type {number}
 */
export
const mMO4FRsRecord: RecordType = RecordType_mMO4FRsRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO4DRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMO4DRecord: RecordType = 33; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO4DRecord
 * @constant
 * @type {number}
 */
export
const mMO4DRecord: RecordType = RecordType_mMO4DRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO1DRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMO1DRecord: RecordType = 34; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO1DRecord
 * @constant
 * @type {number}
 */
export
const mMO1DRecord: RecordType = RecordType_mMO1DRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO4RRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMO4RRecord: RecordType = 35; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO4RRecord
 * @constant
 * @type {number}
 */
export
const mMO4RRecord: RecordType = RecordType_mMO4RRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO1RRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMO1RRecord: RecordType = 36; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO1RRecord
 * @constant
 * @type {number}
 */
export
const mMO1RRecord: RecordType = RecordType_mMO1RRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMOMDRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMOMDRecord: RecordType = 37; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMOMDRecord
 * @constant
 * @type {number}
 */
export
const mMOMDRecord: RecordType = RecordType_mMOMDRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4FRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR4FRecord: RecordType = 38; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4FRecord
 * @constant
 * @type {number}
 */
export
const mMR4FRecord: RecordType = RecordType_mMR4FRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1NRqRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR1NRqRecord: RecordType = 39; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1NRqRecord
 * @constant
 * @type {number}
 */
export
const mMR1NRqRecord: RecordType = RecordType_mMR1NRqRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1NRsRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR1NRsRecord: RecordType = 40; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1NRsRecord
 * @constant
 * @type {number}
 */
export
const mMR1NRsRecord: RecordType = RecordType_mMR1NRsRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1RtRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR1RtRecord: RecordType = 41; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1RtRecord
 * @constant
 * @type {number}
 */
export
const mMR1RtRecord: RecordType = RecordType_mMR1RtRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1AFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR1AFRecord: RecordType = 42; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1AFRecord
 * @constant
 * @type {number}
 */
export
const mMR1AFRecord: RecordType = RecordType_mMR1AFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4DRqRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR4DRqRecord: RecordType = 43; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4DRqRecord
 * @constant
 * @type {number}
 */
export
const mMR4DRqRecord: RecordType = RecordType_mMR4DRqRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4DRsRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR4DRsRecord: RecordType = 44; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4DRsRecord
 * @constant
 * @type {number}
 */
export
const mMR4DRsRecord: RecordType = RecordType_mMR4DRsRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1RRRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR1RRRecord: RecordType = 45; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1RRRecord
 * @constant
 * @type {number}
 */
export
const mMR1RRRecord: RecordType = RecordType_mMR1RRRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4RRqRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR4RRqRecord: RecordType = 46; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4RRqRecord
 * @constant
 * @type {number}
 */
export
const mMR4RRqRecord: RecordType = RecordType_mMR4RRqRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4RRsRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR4RRsRecord: RecordType = 47; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4RRsRecord
 * @constant
 * @type {number}
 */
export
const mMR4RRsRecord: RecordType = RecordType_mMR4RRsRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMRMDRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMRMDRecord: RecordType = 48; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMRMDRecord
 * @constant
 * @type {number}
 */
export
const mMRMDRecord: RecordType = RecordType_mMRMDRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMFRecord: RecordType = 49; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMFRecord
 * @constant
 * @type {number}
 */
export
const mMFRecord: RecordType = RecordType_mMFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMBx1SRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMBx1SRecord: RecordType = 50; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMBx1SRecord
 * @constant
 * @type {number}
 */
export
const mMBx1SRecord: RecordType = RecordType_mMBx1SRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMBx1VRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMBx1VRecord: RecordType = 51; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMBx1VRecord
 * @constant
 * @type {number}
 */
export
const mMBx1VRecord: RecordType = RecordType_mMBx1VRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMBx1URecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMBx1URecord: RecordType = 52; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMBx1URecord
 * @constant
 * @type {number}
 */
export
const mMBx1URecord: RecordType = RecordType_mMBx1URecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMBx1DRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMBx1DRecord: RecordType = 53; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMBx1DRecord
 * @constant
 * @type {number}
 */
export
const mMBx1DRecord: RecordType = RecordType_mMBx1DRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7SRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7SRecord: RecordType = 54; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7SRecord
 * @constant
 * @type {number}
 */
export
const mM7SRecord: RecordType = RecordType_mM7SRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7DRqRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7DRqRecord: RecordType = 55; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7DRqRecord
 * @constant
 * @type {number}
 */
export
const mM7DRqRecord: RecordType = RecordType_mM7DRqRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7DRsRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7DRsRecord: RecordType = 56; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7DRsRecord
 * @constant
 * @type {number}
 */
export
const mM7DRsRecord: RecordType = RecordType_mM7DRsRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7CRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7CRecord: RecordType = 57; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7CRecord
 * @constant
 * @type {number}
 */
export
const mM7CRecord: RecordType = RecordType_mM7CRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7RRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7RRecord: RecordType = 58; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7RRecord
 * @constant
 * @type {number}
 */
export
const mM7RRecord: RecordType = RecordType_mM7RRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7DRRqRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7DRRqRecord: RecordType = 59; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7DRRqRecord
 * @constant
 * @type {number}
 */
export
const mM7DRRqRecord: RecordType = RecordType_mM7DRRqRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7DRRsRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7DRRsRecord: RecordType = 60; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7DRRsRecord
 * @constant
 * @type {number}
 */
export
const mM7DRRsRecord: RecordType = RecordType_mM7DRRsRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7RRqRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7RRqRecord: RecordType = 61; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7RRqRecord
 * @constant
 * @type {number}
 */
export
const mM7RRqRecord: RecordType = RecordType_mM7RRqRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7RRsRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7RRsRecord: RecordType = 62; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7RRsRecord
 * @constant
 * @type {number}
 */
export
const mM7RRsRecord: RecordType = RecordType_mM7RRsRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCSCFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sCSCFRecord: RecordType = 63; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCSCFRecord
 * @constant
 * @type {number}
 */
export
const sCSCFRecord: RecordType = RecordType_sCSCFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pCSCFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_pCSCFRecord: RecordType = 64; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pCSCFRecord
 * @constant
 * @type {number}
 */
export
const pCSCFRecord: RecordType = RecordType_pCSCFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iCSCFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_iCSCFRecord: RecordType = 65; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iCSCFRecord
 * @constant
 * @type {number}
 */
export
const iCSCFRecord: RecordType = RecordType_iCSCFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mRFCRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mRFCRecord: RecordType = 66; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mRFCRecord
 * @constant
 * @type {number}
 */
export
const mRFCRecord: RecordType = RecordType_mRFCRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mGCFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mGCFRecord: RecordType = 67; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mGCFRecord
 * @constant
 * @type {number}
 */
export
const mGCFRecord: RecordType = RecordType_mGCFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_bGCFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_bGCFRecord: RecordType = 68; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_bGCFRecord
 * @constant
 * @type {number}
 */
export
const bGCFRecord: RecordType = RecordType_bGCFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_aSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_aSRecord: RecordType = 69; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_aSRecord
 * @constant
 * @type {number}
 */
export
const aSRecord: RecordType = RecordType_aSRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_eCSCFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_eCSCFRecord: RecordType = 70; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_eCSCFRecord
 * @constant
 * @type {number}
 */
export
const eCSCFRecord: RecordType = RecordType_eCSCFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iBCFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_iBCFRecord: RecordType = 82; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iBCFRecord
 * @constant
 * @type {number}
 */
export
const iBCFRecord: RecordType = RecordType_iBCFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_tRFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_tRFRecord: RecordType = 89; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_tRFRecord
 * @constant
 * @type {number}
 */
export
const tRFRecord: RecordType = RecordType_tRFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_tFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_tFRecord: RecordType = 90; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_tFRecord
 * @constant
 * @type {number}
 */
export
const tFRecord: RecordType = RecordType_tFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_aTCFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_aTCFRecord: RecordType = 91; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_aTCFRecord
 * @constant
 * @type {number}
 */
export
const aTCFRecord: RecordType = RecordType_aTCFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSGMORecord
 * @constant
 * @type {number}
 */
export
const RecordType_lCSGMORecord: RecordType = 71; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSGMORecord
 * @constant
 * @type {number}
 */
export
const lCSGMORecord: RecordType = RecordType_lCSGMORecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSRGMTRecord
 * @constant
 * @type {number}
 */
export
const RecordType_lCSRGMTRecord: RecordType = 72; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSRGMTRecord
 * @constant
 * @type {number}
 */
export
const lCSRGMTRecord: RecordType = RecordType_lCSRGMTRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSHGMTRecord
 * @constant
 * @type {number}
 */
export
const RecordType_lCSHGMTRecord: RecordType = 73; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSHGMTRecord
 * @constant
 * @type {number}
 */
export
const lCSHGMTRecord: RecordType = RecordType_lCSHGMTRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSVGMTRecord
 * @constant
 * @type {number}
 */
export
const RecordType_lCSVGMTRecord: RecordType = 74; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSVGMTRecord
 * @constant
 * @type {number}
 */
export
const lCSVGMTRecord: RecordType = RecordType_lCSVGMTRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSGNIRecord
 * @constant
 * @type {number}
 */
export
const RecordType_lCSGNIRecord: RecordType = 75; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSGNIRecord
 * @constant
 * @type {number}
 */
export
const lCSGNIRecord: RecordType = RecordType_lCSGNIRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnMBMSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sgsnMBMSRecord: RecordType = 76; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnMBMSRecord
 * @constant
 * @type {number}
 */
export
const sgsnMBMSRecord: RecordType = RecordType_sgsnMBMSRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_ggsnMBMSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_ggsnMBMSRecord: RecordType = 77; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_ggsnMBMSRecord
 * @constant
 * @type {number}
 */
export
const ggsnMBMSRecord: RecordType = RecordType_ggsnMBMSRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_gwMBMSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_gwMBMSRecord: RecordType = 86; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_gwMBMSRecord
 * @constant
 * @type {number}
 */
export
const gwMBMSRecord: RecordType = RecordType_gwMBMSRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sUBBMSCRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sUBBMSCRecord: RecordType = 78; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sUBBMSCRecord
 * @constant
 * @type {number}
 */
export
const sUBBMSCRecord: RecordType = RecordType_sUBBMSCRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_cONTENTBMSCRecord
 * @constant
 * @type {number}
 */
export
const RecordType_cONTENTBMSCRecord: RecordType = 79; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_cONTENTBMSCRecord
 * @constant
 * @type {number}
 */
export
const cONTENTBMSCRecord: RecordType = RecordType_cONTENTBMSCRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pPFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_pPFRecord: RecordType = 80; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pPFRecord
 * @constant
 * @type {number}
 */
export
const pPFRecord: RecordType = RecordType_pPFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_cPFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_cPFRecord: RecordType = 81; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_cPFRecord
 * @constant
 * @type {number}
 */
export
const cPFRecord: RecordType = RecordType_cPFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sGWRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sGWRecord: RecordType = 84; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sGWRecord
 * @constant
 * @type {number}
 */
export
const sGWRecord: RecordType = RecordType_sGWRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pGWRecord
 * @constant
 * @type {number}
 */
export
const RecordType_pGWRecord: RecordType = 85; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pGWRecord
 * @constant
 * @type {number}
 */
export
const pGWRecord: RecordType = RecordType_pGWRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_tDFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_tDFRecord: RecordType = 92; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_tDFRecord
 * @constant
 * @type {number}
 */
export
const tDFRecord: RecordType = RecordType_tDFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iPERecord
 * @constant
 * @type {number}
 */
export
const RecordType_iPERecord: RecordType = 95; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iPERecord
 * @constant
 * @type {number}
 */
export
const iPERecord: RecordType = RecordType_iPERecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_ePDGRecord
 * @constant
 * @type {number}
 */
export
const RecordType_ePDGRecord: RecordType = 96; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_ePDGRecord
 * @constant
 * @type {number}
 */
export
const ePDGRecord: RecordType = RecordType_ePDGRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_tWAGRecord
 * @constant
 * @type {number}
 */
export
const RecordType_tWAGRecord: RecordType = 97; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_tWAGRecord
 * @constant
 * @type {number}
 */
export
const tWAGRecord: RecordType = RecordType_tWAGRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMTelRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMTelRecord: RecordType = 83; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMTelRecord
 * @constant
 * @type {number}
 */
export
const mMTelRecord: RecordType = RecordType_mMTelRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mSCsRVCCRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mSCsRVCCRecord: RecordType = 87; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mSCsRVCCRecord
 * @constant
 * @type {number}
 */
export
const mSCsRVCCRecord: RecordType = RecordType_mSCsRVCCRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMTRFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMTRFRecord: RecordType = 88; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMTRFRecord
 * @constant
 * @type {number}
 */
export
const mMTRFRecord: RecordType = RecordType_mMTRFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iCSRegisterRecord
 * @constant
 * @type {number}
 */
export
const RecordType_iCSRegisterRecord: RecordType = 99; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iCSRegisterRecord
 * @constant
 * @type {number}
 */
export
const iCSRegisterRecord: RecordType = RecordType_iCSRegisterRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCSMORecord
 * @constant
 * @type {number}
 */
export
const RecordType_sCSMORecord: RecordType = 93; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCSMORecord
 * @constant
 * @type {number}
 */
export
const sCSMORecord: RecordType = RecordType_sCSMORecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCSMTRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sCSMTRecord: RecordType = 94; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCSMTRecord
 * @constant
 * @type {number}
 */
export
const sCSMTRecord: RecordType = RecordType_sCSMTRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pFDDRecord
 * @constant
 * @type {number}
 */
export
const RecordType_pFDDRecord: RecordType = 100; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pFDDRecord
 * @constant
 * @type {number}
 */
export
const pFDDRecord: RecordType = RecordType_pFDDRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pFEDRecord
 * @constant
 * @type {number}
 */
export
const RecordType_pFEDRecord: RecordType = 101; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pFEDRecord
 * @constant
 * @type {number}
 */
export
const pFEDRecord: RecordType = RecordType_pFEDRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pFDCRecord
 * @constant
 * @type {number}
 */
export
const RecordType_pFDCRecord: RecordType = 102; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pFDCRecord
 * @constant
 * @type {number}
 */
export
const pFDCRecord: RecordType = RecordType_pFDCRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mECORecord
 * @constant
 * @type {number}
 */
export
const RecordType_mECORecord: RecordType = 103; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mECORecord
 * @constant
 * @type {number}
 */
export
const mECORecord: RecordType = RecordType_mECORecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mERERecord
 * @constant
 * @type {number}
 */
export
const RecordType_mERERecord: RecordType = 104; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mERERecord
 * @constant
 * @type {number}
 */
export
const mERERecord: RecordType = RecordType_mERERecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_cPDTSCERecord
 * @constant
 * @type {number}
 */
export
const RecordType_cPDTSCERecord: RecordType = 105; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_cPDTSCERecord
 * @constant
 * @type {number}
 */
export
const cPDTSCERecord: RecordType = RecordType_cPDTSCERecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_cPDTSNNRecord
 * @constant
 * @type {number}
 */
export
const RecordType_cPDTSNNRecord: RecordType = 106; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_cPDTSNNRecord
 * @constant
 * @type {number}
 */
export
const cPDTSNNRecord: RecordType = RecordType_cPDTSNNRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCDVTT4Record
 * @constant
 * @type {number}
 */
export
const RecordType_sCDVTT4Record: RecordType = 110; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCDVTT4Record
 * @constant
 * @type {number}
 */
export
const sCDVTT4Record: RecordType = RecordType_sCDVTT4Record; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCSMOT4Record
 * @constant
 * @type {number}
 */
export
const RecordType_sCSMOT4Record: RecordType = 111; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCSMOT4Record
 * @constant
 * @type {number}
 */
export
const sCSMOT4Record: RecordType = RecordType_sCSMOT4Record; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iSMSMORecord
 * @constant
 * @type {number}
 */
export
const RecordType_iSMSMORecord: RecordType = 112; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iSMSMORecord
 * @constant
 * @type {number}
 */
export
const iSMSMORecord: RecordType = RecordType_iSMSMORecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iSMSMTRecord
 * @constant
 * @type {number}
 */
export
const RecordType_iSMSMTRecord: RecordType = 113; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iSMSMTRecord
 * @constant
 * @type {number}
 */
export
const iSMSMTRecord: RecordType = RecordType_iSMSMTRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_eASCERecord
 * @constant
 * @type {number}
 */
export
const RecordType_eASCERecord: RecordType = 120; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_eASCERecord
 * @constant
 * @type {number}
 */
export
const eASCERecord: RecordType = RecordType_eASCERecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_chargingFunctionRecord
 * @constant
 * @type {number}
 */
export
const RecordType_chargingFunctionRecord: RecordType = 200; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_chargingFunctionRecord
 * @constant
 * @type {number}
 */
export
const chargingFunctionRecord: RecordType = RecordType_chargingFunctionRecord; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_RecordType: $.ASN1Decoder<RecordType> = $._decodeInteger;

export
const _encode_RecordType: $.ASN1Encoder<RecordType> = $._encodeInteger;

/* eslint-enable */
