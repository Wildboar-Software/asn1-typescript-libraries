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
const RecordType_moCallRecord = 0 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moCallRecord
 * @constant
 * @type {number}
 */
export
const moCallRecord = RecordType_moCallRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtCallRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mtCallRecord = 1 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtCallRecord
 * @constant
 * @type {number}
 */
export
const mtCallRecord = RecordType_mtCallRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_roamingRecord
 * @constant
 * @type {number}
 */
export
const RecordType_roamingRecord = 2 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_roamingRecord
 * @constant
 * @type {number}
 */
export
const roamingRecord = RecordType_roamingRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_incGatewayRecord
 * @constant
 * @type {number}
 */
export
const RecordType_incGatewayRecord = 3 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_incGatewayRecord
 * @constant
 * @type {number}
 */
export
const incGatewayRecord = RecordType_incGatewayRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_outGatewayRecord
 * @constant
 * @type {number}
 */
export
const RecordType_outGatewayRecord = 4 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_outGatewayRecord
 * @constant
 * @type {number}
 */
export
const outGatewayRecord = RecordType_outGatewayRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_transitCallRecord
 * @constant
 * @type {number}
 */
export
const RecordType_transitCallRecord = 5 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_transitCallRecord
 * @constant
 * @type {number}
 */
export
const transitCallRecord = RecordType_transitCallRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moSMSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_moSMSRecord = 6 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moSMSRecord
 * @constant
 * @type {number}
 */
export
const moSMSRecord = RecordType_moSMSRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtSMSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mtSMSRecord = 7 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtSMSRecord
 * @constant
 * @type {number}
 */
export
const mtSMSRecord = RecordType_mtSMSRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moSMSIWRecord
 * @constant
 * @type {number}
 */
export
const RecordType_moSMSIWRecord = 8 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moSMSIWRecord
 * @constant
 * @type {number}
 */
export
const moSMSIWRecord = RecordType_moSMSIWRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtSMSGWRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mtSMSGWRecord = 9 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtSMSGWRecord
 * @constant
 * @type {number}
 */
export
const mtSMSGWRecord = RecordType_mtSMSGWRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_ssActionRecord
 * @constant
 * @type {number}
 */
export
const RecordType_ssActionRecord = 10 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_ssActionRecord
 * @constant
 * @type {number}
 */
export
const ssActionRecord = RecordType_ssActionRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_hlrIntRecord
 * @constant
 * @type {number}
 */
export
const RecordType_hlrIntRecord = 11 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_hlrIntRecord
 * @constant
 * @type {number}
 */
export
const hlrIntRecord = RecordType_hlrIntRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_locUpdateHLRRecord
 * @constant
 * @type {number}
 */
export
const RecordType_locUpdateHLRRecord = 12 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_locUpdateHLRRecord
 * @constant
 * @type {number}
 */
export
const locUpdateHLRRecord = RecordType_locUpdateHLRRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_locUpdateVLRRecord
 * @constant
 * @type {number}
 */
export
const RecordType_locUpdateVLRRecord = 13 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_locUpdateVLRRecord
 * @constant
 * @type {number}
 */
export
const locUpdateVLRRecord = RecordType_locUpdateVLRRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_commonEquipRecord
 * @constant
 * @type {number}
 */
export
const RecordType_commonEquipRecord = 14 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_commonEquipRecord
 * @constant
 * @type {number}
 */
export
const commonEquipRecord = RecordType_commonEquipRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moTraceRecord
 * @constant
 * @type {number}
 */
export
const RecordType_moTraceRecord = 15 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moTraceRecord
 * @constant
 * @type {number}
 */
export
const moTraceRecord = RecordType_moTraceRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtTraceRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mtTraceRecord = 16 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtTraceRecord
 * @constant
 * @type {number}
 */
export
const mtTraceRecord = RecordType_mtTraceRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_termCAMELRecord
 * @constant
 * @type {number}
 */
export
const RecordType_termCAMELRecord = 17 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_termCAMELRecord
 * @constant
 * @type {number}
 */
export
const termCAMELRecord = RecordType_termCAMELRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnPDPRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sgsnPDPRecord = 18 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnPDPRecord
 * @constant
 * @type {number}
 */
export
const sgsnPDPRecord = RecordType_sgsnPDPRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnMMRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sgsnMMRecord = 20 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnMMRecord
 * @constant
 * @type {number}
 */
export
const sgsnMMRecord = RecordType_sgsnMMRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnSMORecord
 * @constant
 * @type {number}
 */
export
const RecordType_sgsnSMORecord = 21 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnSMORecord
 * @constant
 * @type {number}
 */
export
const sgsnSMORecord = RecordType_sgsnSMORecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnSMTRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sgsnSMTRecord = 22 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnSMTRecord
 * @constant
 * @type {number}
 */
export
const sgsnSMTRecord = RecordType_sgsnSMTRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtLCSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mtLCSRecord = 23 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mtLCSRecord
 * @constant
 * @type {number}
 */
export
const mtLCSRecord = RecordType_mtLCSRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moLCSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_moLCSRecord = 24 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_moLCSRecord
 * @constant
 * @type {number}
 */
export
const moLCSRecord = RecordType_moLCSRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_niLCSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_niLCSRecord = 25 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_niLCSRecord
 * @constant
 * @type {number}
 */
export
const niLCSRecord = RecordType_niLCSRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnMTLCSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sgsnMTLCSRecord = 26 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnMTLCSRecord
 * @constant
 * @type {number}
 */
export
const sgsnMTLCSRecord = RecordType_sgsnMTLCSRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnMOLCSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sgsnMOLCSRecord = 27 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnMOLCSRecord
 * @constant
 * @type {number}
 */
export
const sgsnMOLCSRecord = RecordType_sgsnMOLCSRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnNILCSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sgsnNILCSRecord = 28 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnNILCSRecord
 * @constant
 * @type {number}
 */
export
const sgsnNILCSRecord = RecordType_sgsnNILCSRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO1SRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMO1SRecord = 30 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO1SRecord
 * @constant
 * @type {number}
 */
export
const mMO1SRecord = RecordType_mMO1SRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO4FRqRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMO4FRqRecord = 31 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO4FRqRecord
 * @constant
 * @type {number}
 */
export
const mMO4FRqRecord = RecordType_mMO4FRqRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO4FRsRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMO4FRsRecord = 32 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO4FRsRecord
 * @constant
 * @type {number}
 */
export
const mMO4FRsRecord = RecordType_mMO4FRsRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO4DRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMO4DRecord = 33 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO4DRecord
 * @constant
 * @type {number}
 */
export
const mMO4DRecord = RecordType_mMO4DRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO1DRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMO1DRecord = 34 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO1DRecord
 * @constant
 * @type {number}
 */
export
const mMO1DRecord = RecordType_mMO1DRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO4RRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMO4RRecord = 35 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO4RRecord
 * @constant
 * @type {number}
 */
export
const mMO4RRecord = RecordType_mMO4RRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO1RRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMO1RRecord = 36 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMO1RRecord
 * @constant
 * @type {number}
 */
export
const mMO1RRecord = RecordType_mMO1RRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMOMDRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMOMDRecord = 37 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMOMDRecord
 * @constant
 * @type {number}
 */
export
const mMOMDRecord = RecordType_mMOMDRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4FRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR4FRecord = 38 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4FRecord
 * @constant
 * @type {number}
 */
export
const mMR4FRecord = RecordType_mMR4FRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1NRqRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR1NRqRecord = 39 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1NRqRecord
 * @constant
 * @type {number}
 */
export
const mMR1NRqRecord = RecordType_mMR1NRqRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1NRsRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR1NRsRecord = 40 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1NRsRecord
 * @constant
 * @type {number}
 */
export
const mMR1NRsRecord = RecordType_mMR1NRsRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1RtRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR1RtRecord = 41 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1RtRecord
 * @constant
 * @type {number}
 */
export
const mMR1RtRecord = RecordType_mMR1RtRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1AFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR1AFRecord = 42 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1AFRecord
 * @constant
 * @type {number}
 */
export
const mMR1AFRecord = RecordType_mMR1AFRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4DRqRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR4DRqRecord = 43 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4DRqRecord
 * @constant
 * @type {number}
 */
export
const mMR4DRqRecord = RecordType_mMR4DRqRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4DRsRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR4DRsRecord = 44 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4DRsRecord
 * @constant
 * @type {number}
 */
export
const mMR4DRsRecord = RecordType_mMR4DRsRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1RRRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR1RRRecord = 45 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR1RRRecord
 * @constant
 * @type {number}
 */
export
const mMR1RRRecord = RecordType_mMR1RRRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4RRqRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR4RRqRecord = 46 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4RRqRecord
 * @constant
 * @type {number}
 */
export
const mMR4RRqRecord = RecordType_mMR4RRqRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4RRsRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMR4RRsRecord = 47 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMR4RRsRecord
 * @constant
 * @type {number}
 */
export
const mMR4RRsRecord = RecordType_mMR4RRsRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMRMDRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMRMDRecord = 48 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMRMDRecord
 * @constant
 * @type {number}
 */
export
const mMRMDRecord = RecordType_mMRMDRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMFRecord = 49 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMFRecord
 * @constant
 * @type {number}
 */
export
const mMFRecord = RecordType_mMFRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMBx1SRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMBx1SRecord = 50 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMBx1SRecord
 * @constant
 * @type {number}
 */
export
const mMBx1SRecord = RecordType_mMBx1SRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMBx1VRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMBx1VRecord = 51 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMBx1VRecord
 * @constant
 * @type {number}
 */
export
const mMBx1VRecord = RecordType_mMBx1VRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMBx1URecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMBx1URecord = 52 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMBx1URecord
 * @constant
 * @type {number}
 */
export
const mMBx1URecord = RecordType_mMBx1URecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMBx1DRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMBx1DRecord = 53 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMBx1DRecord
 * @constant
 * @type {number}
 */
export
const mMBx1DRecord = RecordType_mMBx1DRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7SRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7SRecord = 54 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7SRecord
 * @constant
 * @type {number}
 */
export
const mM7SRecord = RecordType_mM7SRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7DRqRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7DRqRecord = 55 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7DRqRecord
 * @constant
 * @type {number}
 */
export
const mM7DRqRecord = RecordType_mM7DRqRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7DRsRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7DRsRecord = 56 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7DRsRecord
 * @constant
 * @type {number}
 */
export
const mM7DRsRecord = RecordType_mM7DRsRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7CRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7CRecord = 57 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7CRecord
 * @constant
 * @type {number}
 */
export
const mM7CRecord = RecordType_mM7CRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7RRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7RRecord = 58 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7RRecord
 * @constant
 * @type {number}
 */
export
const mM7RRecord = RecordType_mM7RRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7DRRqRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7DRRqRecord = 59 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7DRRqRecord
 * @constant
 * @type {number}
 */
export
const mM7DRRqRecord = RecordType_mM7DRRqRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7DRRsRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7DRRsRecord = 60 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7DRRsRecord
 * @constant
 * @type {number}
 */
export
const mM7DRRsRecord = RecordType_mM7DRRsRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7RRqRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7RRqRecord = 61 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7RRqRecord
 * @constant
 * @type {number}
 */
export
const mM7RRqRecord = RecordType_mM7RRqRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7RRsRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mM7RRsRecord = 62 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mM7RRsRecord
 * @constant
 * @type {number}
 */
export
const mM7RRsRecord = RecordType_mM7RRsRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCSCFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sCSCFRecord = 63 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCSCFRecord
 * @constant
 * @type {number}
 */
export
const sCSCFRecord = RecordType_sCSCFRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pCSCFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_pCSCFRecord = 64 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pCSCFRecord
 * @constant
 * @type {number}
 */
export
const pCSCFRecord = RecordType_pCSCFRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iCSCFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_iCSCFRecord = 65 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iCSCFRecord
 * @constant
 * @type {number}
 */
export
const iCSCFRecord = RecordType_iCSCFRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mRFCRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mRFCRecord = 66 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mRFCRecord
 * @constant
 * @type {number}
 */
export
const mRFCRecord = RecordType_mRFCRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mGCFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mGCFRecord = 67 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mGCFRecord
 * @constant
 * @type {number}
 */
export
const mGCFRecord = RecordType_mGCFRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_bGCFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_bGCFRecord = 68 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_bGCFRecord
 * @constant
 * @type {number}
 */
export
const bGCFRecord = RecordType_bGCFRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_aSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_aSRecord = 69 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_aSRecord
 * @constant
 * @type {number}
 */
export
const aSRecord = RecordType_aSRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_eCSCFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_eCSCFRecord = 70 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_eCSCFRecord
 * @constant
 * @type {number}
 */
export
const eCSCFRecord = RecordType_eCSCFRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iBCFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_iBCFRecord = 82 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iBCFRecord
 * @constant
 * @type {number}
 */
export
const iBCFRecord = RecordType_iBCFRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_tRFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_tRFRecord = 89 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_tRFRecord
 * @constant
 * @type {number}
 */
export
const tRFRecord = RecordType_tRFRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_tFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_tFRecord = 90 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_tFRecord
 * @constant
 * @type {number}
 */
export
const tFRecord = RecordType_tFRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_aTCFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_aTCFRecord = 91 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_aTCFRecord
 * @constant
 * @type {number}
 */
export
const aTCFRecord = RecordType_aTCFRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSGMORecord
 * @constant
 * @type {number}
 */
export
const RecordType_lCSGMORecord = 71 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSGMORecord
 * @constant
 * @type {number}
 */
export
const lCSGMORecord = RecordType_lCSGMORecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSRGMTRecord
 * @constant
 * @type {number}
 */
export
const RecordType_lCSRGMTRecord = 72 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSRGMTRecord
 * @constant
 * @type {number}
 */
export
const lCSRGMTRecord = RecordType_lCSRGMTRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSHGMTRecord
 * @constant
 * @type {number}
 */
export
const RecordType_lCSHGMTRecord = 73 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSHGMTRecord
 * @constant
 * @type {number}
 */
export
const lCSHGMTRecord = RecordType_lCSHGMTRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSVGMTRecord
 * @constant
 * @type {number}
 */
export
const RecordType_lCSVGMTRecord = 74 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSVGMTRecord
 * @constant
 * @type {number}
 */
export
const lCSVGMTRecord = RecordType_lCSVGMTRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSGNIRecord
 * @constant
 * @type {number}
 */
export
const RecordType_lCSGNIRecord = 75 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_lCSGNIRecord
 * @constant
 * @type {number}
 */
export
const lCSGNIRecord = RecordType_lCSGNIRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnMBMSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sgsnMBMSRecord = 76 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sgsnMBMSRecord
 * @constant
 * @type {number}
 */
export
const sgsnMBMSRecord = RecordType_sgsnMBMSRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_ggsnMBMSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_ggsnMBMSRecord = 77 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_ggsnMBMSRecord
 * @constant
 * @type {number}
 */
export
const ggsnMBMSRecord = RecordType_ggsnMBMSRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_gwMBMSRecord
 * @constant
 * @type {number}
 */
export
const RecordType_gwMBMSRecord = 86 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_gwMBMSRecord
 * @constant
 * @type {number}
 */
export
const gwMBMSRecord = RecordType_gwMBMSRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sUBBMSCRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sUBBMSCRecord = 78 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sUBBMSCRecord
 * @constant
 * @type {number}
 */
export
const sUBBMSCRecord = RecordType_sUBBMSCRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_cONTENTBMSCRecord
 * @constant
 * @type {number}
 */
export
const RecordType_cONTENTBMSCRecord = 79 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_cONTENTBMSCRecord
 * @constant
 * @type {number}
 */
export
const cONTENTBMSCRecord = RecordType_cONTENTBMSCRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pPFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_pPFRecord = 80 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pPFRecord
 * @constant
 * @type {number}
 */
export
const pPFRecord = RecordType_pPFRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_cPFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_cPFRecord = 81 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_cPFRecord
 * @constant
 * @type {number}
 */
export
const cPFRecord = RecordType_cPFRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sGWRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sGWRecord = 84 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sGWRecord
 * @constant
 * @type {number}
 */
export
const sGWRecord = RecordType_sGWRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pGWRecord
 * @constant
 * @type {number}
 */
export
const RecordType_pGWRecord = 85 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pGWRecord
 * @constant
 * @type {number}
 */
export
const pGWRecord = RecordType_pGWRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_tDFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_tDFRecord = 92 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_tDFRecord
 * @constant
 * @type {number}
 */
export
const tDFRecord = RecordType_tDFRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iPERecord
 * @constant
 * @type {number}
 */
export
const RecordType_iPERecord = 95 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iPERecord
 * @constant
 * @type {number}
 */
export
const iPERecord = RecordType_iPERecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_ePDGRecord
 * @constant
 * @type {number}
 */
export
const RecordType_ePDGRecord = 96 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_ePDGRecord
 * @constant
 * @type {number}
 */
export
const ePDGRecord = RecordType_ePDGRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_tWAGRecord
 * @constant
 * @type {number}
 */
export
const RecordType_tWAGRecord = 97 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_tWAGRecord
 * @constant
 * @type {number}
 */
export
const tWAGRecord = RecordType_tWAGRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMTelRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMTelRecord = 83 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMTelRecord
 * @constant
 * @type {number}
 */
export
const mMTelRecord = RecordType_mMTelRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mSCsRVCCRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mSCsRVCCRecord = 87 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mSCsRVCCRecord
 * @constant
 * @type {number}
 */
export
const mSCsRVCCRecord = RecordType_mSCsRVCCRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMTRFRecord
 * @constant
 * @type {number}
 */
export
const RecordType_mMTRFRecord = 88 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mMTRFRecord
 * @constant
 * @type {number}
 */
export
const mMTRFRecord = RecordType_mMTRFRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iCSRegisterRecord
 * @constant
 * @type {number}
 */
export
const RecordType_iCSRegisterRecord = 99 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iCSRegisterRecord
 * @constant
 * @type {number}
 */
export
const iCSRegisterRecord = RecordType_iCSRegisterRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCSMORecord
 * @constant
 * @type {number}
 */
export
const RecordType_sCSMORecord = 93 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCSMORecord
 * @constant
 * @type {number}
 */
export
const sCSMORecord = RecordType_sCSMORecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCSMTRecord
 * @constant
 * @type {number}
 */
export
const RecordType_sCSMTRecord = 94 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCSMTRecord
 * @constant
 * @type {number}
 */
export
const sCSMTRecord = RecordType_sCSMTRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pFDDRecord
 * @constant
 * @type {number}
 */
export
const RecordType_pFDDRecord = 100 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pFDDRecord
 * @constant
 * @type {number}
 */
export
const pFDDRecord = RecordType_pFDDRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pFEDRecord
 * @constant
 * @type {number}
 */
export
const RecordType_pFEDRecord = 101 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pFEDRecord
 * @constant
 * @type {number}
 */
export
const pFEDRecord = RecordType_pFEDRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pFDCRecord
 * @constant
 * @type {number}
 */
export
const RecordType_pFDCRecord = 102 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_pFDCRecord
 * @constant
 * @type {number}
 */
export
const pFDCRecord = RecordType_pFDCRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mECORecord
 * @constant
 * @type {number}
 */
export
const RecordType_mECORecord = 103 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mECORecord
 * @constant
 * @type {number}
 */
export
const mECORecord = RecordType_mECORecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mERERecord
 * @constant
 * @type {number}
 */
export
const RecordType_mERERecord = 104 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_mERERecord
 * @constant
 * @type {number}
 */
export
const mERERecord = RecordType_mERERecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_cPDTSCERecord
 * @constant
 * @type {number}
 */
export
const RecordType_cPDTSCERecord = 105 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_cPDTSCERecord
 * @constant
 * @type {number}
 */
export
const cPDTSCERecord = RecordType_cPDTSCERecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_cPDTSNNRecord
 * @constant
 * @type {number}
 */
export
const RecordType_cPDTSNNRecord = 106 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_cPDTSNNRecord
 * @constant
 * @type {number}
 */
export
const cPDTSNNRecord = RecordType_cPDTSNNRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCDVTT4Record
 * @constant
 * @type {number}
 */
export
const RecordType_sCDVTT4Record = 110 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCDVTT4Record
 * @constant
 * @type {number}
 */
export
const sCDVTT4Record = RecordType_sCDVTT4Record satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCSMOT4Record
 * @constant
 * @type {number}
 */
export
const RecordType_sCSMOT4Record = 111 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_sCSMOT4Record
 * @constant
 * @type {number}
 */
export
const sCSMOT4Record = RecordType_sCSMOT4Record satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iSMSMORecord
 * @constant
 * @type {number}
 */
export
const RecordType_iSMSMORecord = 112 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iSMSMORecord
 * @constant
 * @type {number}
 */
export
const iSMSMORecord = RecordType_iSMSMORecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iSMSMTRecord
 * @constant
 * @type {number}
 */
export
const RecordType_iSMSMTRecord = 113 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_iSMSMTRecord
 * @constant
 * @type {number}
 */
export
const iSMSMTRecord = RecordType_iSMSMTRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_eASCERecord
 * @constant
 * @type {number}
 */
export
const RecordType_eASCERecord = 120 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_eASCERecord
 * @constant
 * @type {number}
 */
export
const eASCERecord = RecordType_eASCERecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_chargingFunctionRecord
 * @constant
 * @type {number}
 */
export
const RecordType_chargingFunctionRecord = 200 satisfies RecordType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordType_chargingFunctionRecord
 * @constant
 * @type {number}
 */
export
const chargingFunctionRecord = RecordType_chargingFunctionRecord satisfies RecordType; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_RecordType: $.ASN1Decoder<RecordType> = $._decodeInteger;

export
const _encode_RecordType: $.ASN1Encoder<RecordType> = $._encodeInteger;

/* eslint-enable */
