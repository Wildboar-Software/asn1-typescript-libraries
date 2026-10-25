/* eslint-disable */
import {
    type INTEGER
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
const RecordType_moCallRecord: 0 = 0 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moCallRecord
 * @constant
 * @type {number}
 */
export
const moCallRecord: 0 = RecordType_moCallRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtCallRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mtCallRecord: 1 = 1 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtCallRecord
 * @constant
 * @type {number}
 */
export
const mtCallRecord: 1 = RecordType_mtCallRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_roamingRecord
 * @constant
 * @type {number}
 */
export
const RecordType_roamingRecord: 2 = 2 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_roamingRecord
 * @constant
 * @type {number}
 */
export
const roamingRecord: 2 = RecordType_roamingRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_incGatewayRecord
 * @constant
 * @type {number}
 */
export
const RecordType_incGatewayRecord: 3 = 3 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_incGatewayRecord
 * @constant
 * @type {number}
 */
export
const incGatewayRecord: 3 = RecordType_incGatewayRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_outGatewayRecord
 * @constant
 * @type {number}
 */
export
const RecordType_outGatewayRecord: 4 = 4 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_outGatewayRecord
 * @constant
 * @type {number}
 */
export
const outGatewayRecord: 4 = RecordType_outGatewayRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_transitCallRecord
 * @constant
 * @type {number}
 */
export
const RecordType_transitCallRecord: 5 = 5 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_transitCallRecord
 * @constant
 * @type {number}
 */
export
const transitCallRecord: 5 = RecordType_transitCallRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moSMSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_moSMSRecord: 6 = 6 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moSMSRecord
 * @constant
 * @type {number}
 */
export
const moSMSRecord: 6 = RecordType_moSMSRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtSMSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mtSMSRecord: 7 = 7 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtSMSRecord
 * @constant
 * @type {number}
 */
export
const mtSMSRecord: 7 = RecordType_mtSMSRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moSMSIWRecord
 * @constant
 * @type {number}
 */
export
const RecordType_moSMSIWRecord: 8 = 8 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moSMSIWRecord
 * @constant
 * @type {number}
 */
export
const moSMSIWRecord: 8 = RecordType_moSMSIWRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtSMSGWRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mtSMSGWRecord: 9 = 9 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtSMSGWRecord
 * @constant
 * @type {number}
 */
export
const mtSMSGWRecord: 9 = RecordType_mtSMSGWRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_ssActionRecord
 * @constant
 * @type {number}
 */
export
const RecordType_ssActionRecord: 10 = 10 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_ssActionRecord
 * @constant
 * @type {number}
 */
export
const ssActionRecord: 10 = RecordType_ssActionRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_hlrIntRecord
 * @constant
 * @type {number}
 */
export
const RecordType_hlrIntRecord: 11 = 11 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_hlrIntRecord
 * @constant
 * @type {number}
 */
export
const hlrIntRecord: 11 = RecordType_hlrIntRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_locUpdateHLRRecord
 * @constant
 * @type {number}
 */
export
const RecordType_locUpdateHLRRecord: 12 = 12 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_locUpdateHLRRecord
 * @constant
 * @type {number}
 */
export
const locUpdateHLRRecord: 12 = RecordType_locUpdateHLRRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_locUpdateVLRRecord
 * @constant
 * @type {number}
 */
export
const RecordType_locUpdateVLRRecord: 13 = 13 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_locUpdateVLRRecord
 * @constant
 * @type {number}
 */
export
const locUpdateVLRRecord: 13 = RecordType_locUpdateVLRRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_commonEquipRecord
 * @constant
 * @type {number}
 */
export
const RecordType_commonEquipRecord: 14 = 14 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_commonEquipRecord
 * @constant
 * @type {number}
 */
export
const commonEquipRecord: 14 = RecordType_commonEquipRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moTraceRecord
 * @constant
 * @type {number}
 */
export
const RecordType_moTraceRecord: 15 = 15 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moTraceRecord
 * @constant
 * @type {number}
 */
export
const moTraceRecord: 15 = RecordType_moTraceRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtTraceRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mtTraceRecord: 16 = 16 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtTraceRecord
 * @constant
 * @type {number}
 */
export
const mtTraceRecord: 16 = RecordType_mtTraceRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_termCAMELRecord
 * @constant
 * @type {number}
 */
export
const RecordType_termCAMELRecord: 17 = 17 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_termCAMELRecord
 * @constant
 * @type {number}
 */
export
const termCAMELRecord: 17 = RecordType_termCAMELRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnPDPRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sgsnPDPRecord: 18 = 18 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnPDPRecord
 * @constant
 * @type {number}
 */
export
const sgsnPDPRecord: 18 = RecordType_sgsnPDPRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnMMRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sgsnMMRecord: 20 = 20 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnMMRecord
 * @constant
 * @type {number}
 */
export
const sgsnMMRecord: 20 = RecordType_sgsnMMRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnSMORecord
 * @constant
 * @type {number}
 */
export
const RecordType_sgsnSMORecord: 21 = 21 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnSMORecord
 * @constant
 * @type {number}
 */
export
const sgsnSMORecord: 21 = RecordType_sgsnSMORecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnSMTRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sgsnSMTRecord: 22 = 22 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnSMTRecord
 * @constant
 * @type {number}
 */
export
const sgsnSMTRecord: 22 = RecordType_sgsnSMTRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtLCSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mtLCSRecord: 23 = 23 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtLCSRecord
 * @constant
 * @type {number}
 */
export
const mtLCSRecord: 23 = RecordType_mtLCSRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moLCSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_moLCSRecord: 24 = 24 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moLCSRecord
 * @constant
 * @type {number}
 */
export
const moLCSRecord: 24 = RecordType_moLCSRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_niLCSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_niLCSRecord: 25 = 25 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_niLCSRecord
 * @constant
 * @type {number}
 */
export
const niLCSRecord: 25 = RecordType_niLCSRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnMTLCSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sgsnMTLCSRecord: 26 = 26 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnMTLCSRecord
 * @constant
 * @type {number}
 */
export
const sgsnMTLCSRecord: 26 = RecordType_sgsnMTLCSRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnMOLCSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sgsnMOLCSRecord: 27 = 27 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnMOLCSRecord
 * @constant
 * @type {number}
 */
export
const sgsnMOLCSRecord: 27 = RecordType_sgsnMOLCSRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnNILCSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sgsnNILCSRecord: 28 = 28 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnNILCSRecord
 * @constant
 * @type {number}
 */
export
const sgsnNILCSRecord: 28 = RecordType_sgsnNILCSRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO1SRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMO1SRecord: 30 = 30 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO1SRecord
 * @constant
 * @type {number}
 */
export
const mMO1SRecord: 30 = RecordType_mMO1SRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO4FRqRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMO4FRqRecord: 31 = 31 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO4FRqRecord
 * @constant
 * @type {number}
 */
export
const mMO4FRqRecord: 31 = RecordType_mMO4FRqRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO4FRsRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMO4FRsRecord: 32 = 32 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO4FRsRecord
 * @constant
 * @type {number}
 */
export
const mMO4FRsRecord: 32 = RecordType_mMO4FRsRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO4DRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMO4DRecord: 33 = 33 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO4DRecord
 * @constant
 * @type {number}
 */
export
const mMO4DRecord: 33 = RecordType_mMO4DRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO1DRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMO1DRecord: 34 = 34 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO1DRecord
 * @constant
 * @type {number}
 */
export
const mMO1DRecord: 34 = RecordType_mMO1DRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO4RRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMO4RRecord: 35 = 35 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO4RRecord
 * @constant
 * @type {number}
 */
export
const mMO4RRecord: 35 = RecordType_mMO4RRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO1RRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMO1RRecord: 36 = 36 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO1RRecord
 * @constant
 * @type {number}
 */
export
const mMO1RRecord: 36 = RecordType_mMO1RRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMOMDRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMOMDRecord: 37 = 37 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMOMDRecord
 * @constant
 * @type {number}
 */
export
const mMOMDRecord: 37 = RecordType_mMOMDRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4FRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR4FRecord: 38 = 38 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4FRecord
 * @constant
 * @type {number}
 */
export
const mMR4FRecord: 38 = RecordType_mMR4FRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1NRqRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR1NRqRecord: 39 = 39 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1NRqRecord
 * @constant
 * @type {number}
 */
export
const mMR1NRqRecord: 39 = RecordType_mMR1NRqRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1NRsRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR1NRsRecord: 40 = 40 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1NRsRecord
 * @constant
 * @type {number}
 */
export
const mMR1NRsRecord: 40 = RecordType_mMR1NRsRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1RtRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR1RtRecord: 41 = 41 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1RtRecord
 * @constant
 * @type {number}
 */
export
const mMR1RtRecord: 41 = RecordType_mMR1RtRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1AFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR1AFRecord: 42 = 42 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1AFRecord
 * @constant
 * @type {number}
 */
export
const mMR1AFRecord: 42 = RecordType_mMR1AFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4DRqRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR4DRqRecord: 43 = 43 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4DRqRecord
 * @constant
 * @type {number}
 */
export
const mMR4DRqRecord: 43 = RecordType_mMR4DRqRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4DRsRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR4DRsRecord: 44 = 44 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4DRsRecord
 * @constant
 * @type {number}
 */
export
const mMR4DRsRecord: 44 = RecordType_mMR4DRsRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1RRRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR1RRRecord: 45 = 45 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1RRRecord
 * @constant
 * @type {number}
 */
export
const mMR1RRRecord: 45 = RecordType_mMR1RRRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4RRqRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR4RRqRecord: 46 = 46 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4RRqRecord
 * @constant
 * @type {number}
 */
export
const mMR4RRqRecord: 46 = RecordType_mMR4RRqRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4RRsRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR4RRsRecord: 47 = 47 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4RRsRecord
 * @constant
 * @type {number}
 */
export
const mMR4RRsRecord: 47 = RecordType_mMR4RRsRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMRMDRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMRMDRecord: 48 = 48 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMRMDRecord
 * @constant
 * @type {number}
 */
export
const mMRMDRecord: 48 = RecordType_mMRMDRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMFRecord: 49 = 49 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMFRecord
 * @constant
 * @type {number}
 */
export
const mMFRecord: 49 = RecordType_mMFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMBx1SRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMBx1SRecord: 50 = 50 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMBx1SRecord
 * @constant
 * @type {number}
 */
export
const mMBx1SRecord: 50 = RecordType_mMBx1SRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMBx1VRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMBx1VRecord: 51 = 51 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMBx1VRecord
 * @constant
 * @type {number}
 */
export
const mMBx1VRecord: 51 = RecordType_mMBx1VRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMBx1URecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMBx1URecord: 52 = 52 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMBx1URecord
 * @constant
 * @type {number}
 */
export
const mMBx1URecord: 52 = RecordType_mMBx1URecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMBx1DRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMBx1DRecord: 53 = 53 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMBx1DRecord
 * @constant
 * @type {number}
 */
export
const mMBx1DRecord: 53 = RecordType_mMBx1DRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7SRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7SRecord: 54 = 54 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7SRecord
 * @constant
 * @type {number}
 */
export
const mM7SRecord: 54 = RecordType_mM7SRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7DRqRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7DRqRecord: 55 = 55 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7DRqRecord
 * @constant
 * @type {number}
 */
export
const mM7DRqRecord: 55 = RecordType_mM7DRqRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7DRsRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7DRsRecord: 56 = 56 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7DRsRecord
 * @constant
 * @type {number}
 */
export
const mM7DRsRecord: 56 = RecordType_mM7DRsRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7CRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7CRecord: 57 = 57 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7CRecord
 * @constant
 * @type {number}
 */
export
const mM7CRecord: 57 = RecordType_mM7CRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7RRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7RRecord: 58 = 58 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7RRecord
 * @constant
 * @type {number}
 */
export
const mM7RRecord: 58 = RecordType_mM7RRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7DRRqRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7DRRqRecord: 59 = 59 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7DRRqRecord
 * @constant
 * @type {number}
 */
export
const mM7DRRqRecord: 59 = RecordType_mM7DRRqRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7DRRsRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7DRRsRecord: 60 = 60 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7DRRsRecord
 * @constant
 * @type {number}
 */
export
const mM7DRRsRecord: 60 = RecordType_mM7DRRsRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7RRqRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7RRqRecord: 61 = 61 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7RRqRecord
 * @constant
 * @type {number}
 */
export
const mM7RRqRecord: 61 = RecordType_mM7RRqRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7RRsRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7RRsRecord: 62 = 62 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7RRsRecord
 * @constant
 * @type {number}
 */
export
const mM7RRsRecord: 62 = RecordType_mM7RRsRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCSCFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sCSCFRecord: 63 = 63 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCSCFRecord
 * @constant
 * @type {number}
 */
export
const sCSCFRecord: 63 = RecordType_sCSCFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pCSCFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_pCSCFRecord: 64 = 64 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pCSCFRecord
 * @constant
 * @type {number}
 */
export
const pCSCFRecord: 64 = RecordType_pCSCFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iCSCFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_iCSCFRecord: 65 = 65 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iCSCFRecord
 * @constant
 * @type {number}
 */
export
const iCSCFRecord: 65 = RecordType_iCSCFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mRFCRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mRFCRecord: 66 = 66 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mRFCRecord
 * @constant
 * @type {number}
 */
export
const mRFCRecord: 66 = RecordType_mRFCRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mGCFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mGCFRecord: 67 = 67 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mGCFRecord
 * @constant
 * @type {number}
 */
export
const mGCFRecord: 67 = RecordType_mGCFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_bGCFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_bGCFRecord: 68 = 68 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_bGCFRecord
 * @constant
 * @type {number}
 */
export
const bGCFRecord: 68 = RecordType_bGCFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_aSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_aSRecord: 69 = 69 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_aSRecord
 * @constant
 * @type {number}
 */
export
const aSRecord: 69 = RecordType_aSRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_eCSCFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_eCSCFRecord: 70 = 70 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_eCSCFRecord
 * @constant
 * @type {number}
 */
export
const eCSCFRecord: 70 = RecordType_eCSCFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iBCFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_iBCFRecord: 82 = 82 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iBCFRecord
 * @constant
 * @type {number}
 */
export
const iBCFRecord: 82 = RecordType_iBCFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_tRFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_tRFRecord: 89 = 89 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_tRFRecord
 * @constant
 * @type {number}
 */
export
const tRFRecord: 89 = RecordType_tRFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_tFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_tFRecord: 90 = 90 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_tFRecord
 * @constant
 * @type {number}
 */
export
const tFRecord: 90 = RecordType_tFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_aTCFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_aTCFRecord: 91 = 91 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_aTCFRecord
 * @constant
 * @type {number}
 */
export
const aTCFRecord: 91 = RecordType_aTCFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSGMORecord
 * @constant
 * @type {number}
 */
export
const RecordType_lCSGMORecord: 71 = 71 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSGMORecord
 * @constant
 * @type {number}
 */
export
const lCSGMORecord: 71 = RecordType_lCSGMORecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSRGMTRecord
 * @constant
 * @type {number}
 */
export
const RecordType_lCSRGMTRecord: 72 = 72 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSRGMTRecord
 * @constant
 * @type {number}
 */
export
const lCSRGMTRecord: 72 = RecordType_lCSRGMTRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSHGMTRecord
 * @constant
 * @type {number}
 */
export
const RecordType_lCSHGMTRecord: 73 = 73 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSHGMTRecord
 * @constant
 * @type {number}
 */
export
const lCSHGMTRecord: 73 = RecordType_lCSHGMTRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSVGMTRecord
 * @constant
 * @type {number}
 */
export
const RecordType_lCSVGMTRecord: 74 = 74 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSVGMTRecord
 * @constant
 * @type {number}
 */
export
const lCSVGMTRecord: 74 = RecordType_lCSVGMTRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSGNIRecord
 * @constant
 * @type {number}
 */
export
const RecordType_lCSGNIRecord: 75 = 75 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSGNIRecord
 * @constant
 * @type {number}
 */
export
const lCSGNIRecord: 75 = RecordType_lCSGNIRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnMBMSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sgsnMBMSRecord: 76 = 76 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnMBMSRecord
 * @constant
 * @type {number}
 */
export
const sgsnMBMSRecord: 76 = RecordType_sgsnMBMSRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_ggsnMBMSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_ggsnMBMSRecord: 77 = 77 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_ggsnMBMSRecord
 * @constant
 * @type {number}
 */
export
const ggsnMBMSRecord: 77 = RecordType_ggsnMBMSRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_gwMBMSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_gwMBMSRecord: 86 = 86 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_gwMBMSRecord
 * @constant
 * @type {number}
 */
export
const gwMBMSRecord: 86 = RecordType_gwMBMSRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sUBBMSCRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sUBBMSCRecord: 78 = 78 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sUBBMSCRecord
 * @constant
 * @type {number}
 */
export
const sUBBMSCRecord: 78 = RecordType_sUBBMSCRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_cONTENTBMSCRecord
 * @constant
 * @type {number}
 */
export
const RecordType_cONTENTBMSCRecord: 79 = 79 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_cONTENTBMSCRecord
 * @constant
 * @type {number}
 */
export
const cONTENTBMSCRecord: 79 = RecordType_cONTENTBMSCRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pPFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_pPFRecord: 80 = 80 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pPFRecord
 * @constant
 * @type {number}
 */
export
const pPFRecord: 80 = RecordType_pPFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_cPFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_cPFRecord: 81 = 81 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_cPFRecord
 * @constant
 * @type {number}
 */
export
const cPFRecord: 81 = RecordType_cPFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sGWRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sGWRecord: 84 = 84 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sGWRecord
 * @constant
 * @type {number}
 */
export
const sGWRecord: 84 = RecordType_sGWRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pGWRecord
 * @constant
 * @type {number}
 */
export
const RecordType_pGWRecord: 85 = 85 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pGWRecord
 * @constant
 * @type {number}
 */
export
const pGWRecord: 85 = RecordType_pGWRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_tDFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_tDFRecord: 92 = 92 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_tDFRecord
 * @constant
 * @type {number}
 */
export
const tDFRecord: 92 = RecordType_tDFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iPERecord
 * @constant
 * @type {number}
 */
export
const RecordType_iPERecord: 95 = 95 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iPERecord
 * @constant
 * @type {number}
 */
export
const iPERecord: 95 = RecordType_iPERecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_ePDGRecord
 * @constant
 * @type {number}
 */
export
const RecordType_ePDGRecord: 96 = 96 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_ePDGRecord
 * @constant
 * @type {number}
 */
export
const ePDGRecord: 96 = RecordType_ePDGRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_tWAGRecord
 * @constant
 * @type {number}
 */
export
const RecordType_tWAGRecord: 97 = 97 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_tWAGRecord
 * @constant
 * @type {number}
 */
export
const tWAGRecord: 97 = RecordType_tWAGRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMTelRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMTelRecord: 83 = 83 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMTelRecord
 * @constant
 * @type {number}
 */
export
const mMTelRecord: 83 = RecordType_mMTelRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mSCsRVCCRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mSCsRVCCRecord: 87 = 87 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mSCsRVCCRecord
 * @constant
 * @type {number}
 */
export
const mSCsRVCCRecord: 87 = RecordType_mSCsRVCCRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMTRFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMTRFRecord: 88 = 88 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMTRFRecord
 * @constant
 * @type {number}
 */
export
const mMTRFRecord: 88 = RecordType_mMTRFRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iCSRegisterRecord
 * @constant
 * @type {number}
 */
export
const RecordType_iCSRegisterRecord: 99 = 99 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iCSRegisterRecord
 * @constant
 * @type {number}
 */
export
const iCSRegisterRecord: 99 = RecordType_iCSRegisterRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCSMORecord
 * @constant
 * @type {number}
 */
export
const RecordType_sCSMORecord: 93 = 93 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCSMORecord
 * @constant
 * @type {number}
 */
export
const sCSMORecord: 93 = RecordType_sCSMORecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCSMTRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sCSMTRecord: 94 = 94 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCSMTRecord
 * @constant
 * @type {number}
 */
export
const sCSMTRecord: 94 = RecordType_sCSMTRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pFDDRecord
 * @constant
 * @type {number}
 */
export
const RecordType_pFDDRecord: 100 = 100 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pFDDRecord
 * @constant
 * @type {number}
 */
export
const pFDDRecord: 100 = RecordType_pFDDRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pFEDRecord
 * @constant
 * @type {number}
 */
export
const RecordType_pFEDRecord: 101 = 101 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pFEDRecord
 * @constant
 * @type {number}
 */
export
const pFEDRecord: 101 = RecordType_pFEDRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pFDCRecord
 * @constant
 * @type {number}
 */
export
const RecordType_pFDCRecord: 102 = 102 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pFDCRecord
 * @constant
 * @type {number}
 */
export
const pFDCRecord: 102 = RecordType_pFDCRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mECORecord
 * @constant
 * @type {number}
 */
export
const RecordType_mECORecord: 103 = 103 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mECORecord
 * @constant
 * @type {number}
 */
export
const mECORecord: 103 = RecordType_mECORecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mERERecord
 * @constant
 * @type {number}
 */
export
const RecordType_mERERecord: 104 = 104 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mERERecord
 * @constant
 * @type {number}
 */
export
const mERERecord: 104 = RecordType_mERERecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_cPDTSCERecord
 * @constant
 * @type {number}
 */
export
const RecordType_cPDTSCERecord: 105 = 105 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_cPDTSCERecord
 * @constant
 * @type {number}
 */
export
const cPDTSCERecord: 105 = RecordType_cPDTSCERecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_cPDTSNNRecord
 * @constant
 * @type {number}
 */
export
const RecordType_cPDTSNNRecord: 106 = 106 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_cPDTSNNRecord
 * @constant
 * @type {number}
 */
export
const cPDTSNNRecord: 106 = RecordType_cPDTSNNRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCDVTT4Record
 * @constant
 * @type {number}
 */
export
const RecordType_sCDVTT4Record: 110 = 110 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCDVTT4Record
 * @constant
 * @type {number}
 */
export
const sCDVTT4Record: 110 = RecordType_sCDVTT4Record; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCSMOT4Record
 * @constant
 * @type {number}
 */
export
const RecordType_sCSMOT4Record: 111 = 111 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCSMOT4Record
 * @constant
 * @type {number}
 */
export
const sCSMOT4Record: 111 = RecordType_sCSMOT4Record; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iSMSMORecord
 * @constant
 * @type {number}
 */
export
const RecordType_iSMSMORecord: 112 = 112 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iSMSMORecord
 * @constant
 * @type {number}
 */
export
const iSMSMORecord: 112 = RecordType_iSMSMORecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iSMSMTRecord
 * @constant
 * @type {number}
 */
export
const RecordType_iSMSMTRecord: 113 = 113 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iSMSMTRecord
 * @constant
 * @type {number}
 */
export
const iSMSMTRecord: 113 = RecordType_iSMSMTRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_eASCERecord
 * @constant
 * @type {number}
 */
export
const RecordType_eASCERecord: 120 = 120 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_eASCERecord
 * @constant
 * @type {number}
 */
export
const eASCERecord: 120 = RecordType_eASCERecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_chargingFunctionRecord
 * @constant
 * @type {number}
 */
export
const RecordType_chargingFunctionRecord: 200 = 200 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_chargingFunctionRecord
 * @constant
 * @type {number}
 */
export
const chargingFunctionRecord: 200 = RecordType_chargingFunctionRecord; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_RecordType: $.ASN1Decoder<RecordType> = $._decodeInteger;

export
const _encode_RecordType: $.ASN1Encoder<RecordType> = $._encodeInteger;

/* eslint-enable */
