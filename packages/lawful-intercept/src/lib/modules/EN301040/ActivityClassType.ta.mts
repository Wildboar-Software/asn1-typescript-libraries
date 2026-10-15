/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ActivityClassType
 * @description
 * 
 * Class of service or non-call signal, carried in `ActivityType.cctivity`.
 * Clause 6.3 calls that component ActivityType!Activity. `allServices` is
 * enumerated in annex E and is left unassigned by clause 6.3 and clause 6.4.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3, clause 6.4, annex E.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
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
    /**
     * Enumerated in annex E. Clauses 6.3 and 6.4 assign every other class and
     * leave `allServices` unassigned.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), annex E.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    allServices = 0,
    /**
     * Circuit-mode TETRA speech (clause 6.3.1). `direction` and `scope` are
     * present. Annex C.1 encodes a target-originated individual speech U-SETUP
     * with this class, `fromTarget`, and `point2Point`. The speech is delivered
     * as discrete TETRA air-interface packets on `TTRAFFICind` and
     * `CTTRAFFICind`, verbatim and without transcoding (clause 4.3.3,
     * clause 5.2.2.2.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    tETRASpeech = 1,
    /**
     * Circuit-mode single-slot data, one of the three classes
     * `singleSlotData24`, `singleSlotData48`, and `singleSlotData72`
     * (clause 6.3.1). `direction` and `scope` are present. The U-plane bits are
     * air-interface packets on `TTRAFFICind` and `CTTRAFFICind`. Air-interface
     * encryption, scrambling, and channel coding are removed before delivery
     * (clause 4.3.3, clause 6.3.1, clause 6.7). EN 301 040 does not define the
     * digits in this name.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    singleSlotData24 = 2,
    /**
     * Circuit-mode single-slot data, one of the three classes
     * `singleSlotData24`, `singleSlotData48`, and `singleSlotData72`
     * (clause 6.3.1). `direction` and `scope` are present. The U-plane bits are
     * air-interface packets on `TTRAFFICind` and `CTTRAFFICind`. Air-interface
     * encryption, scrambling, and channel coding are removed before delivery
     * (clause 4.3.3, clause 6.3.1, clause 6.7). EN 301 040 does not define the
     * digits in this name.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    singleSlotData48 = 3,
    /**
     * Circuit-mode single-slot data, one of the three classes
     * `singleSlotData24`, `singleSlotData48`, and `singleSlotData72`
     * (clause 6.3.1). `direction` and `scope` are present. The U-plane bits are
     * air-interface packets on `TTRAFFICind` and `CTTRAFFICind`. Air-interface
     * encryption, scrambling, and channel coding are removed before delivery
     * (clause 4.3.3, clause 6.3.1, clause 6.7). EN 301 040 does not define the
     * digits in this name.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    singleSlotData72 = 4,
    /**
     * Circuit-mode multi-slot data (clause 6.3.1). The classes are
     * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
     * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
     * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`.
     * `direction` and `scope` are present. The U-plane bits are air-interface
     * packets on `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption,
     * scrambling, and channel coding are removed before delivery (clause 4.3.3,
     * clause 6.3.1, clause 6.7). EN 301 040 does not define the digits in this
     * name.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    multiSlotData224 = 5,
    /**
     * Circuit-mode multi-slot data (clause 6.3.1). The classes are
     * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
     * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
     * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`.
     * `direction` and `scope` are present. The U-plane bits are air-interface
     * packets on `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption,
     * scrambling, and channel coding are removed before delivery (clause 4.3.3,
     * clause 6.3.1, clause 6.7). EN 301 040 does not define the digits in this
     * name.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    multiSlotData248 = 6,
    /**
     * Circuit-mode multi-slot data (clause 6.3.1). The classes are
     * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
     * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
     * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`.
     * `direction` and `scope` are present. The U-plane bits are air-interface
     * packets on `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption,
     * scrambling, and channel coding are removed before delivery (clause 4.3.3,
     * clause 6.3.1, clause 6.7). EN 301 040 does not define the digits in this
     * name.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    multiSlotData272 = 7,
    /**
     * Circuit-mode multi-slot data (clause 6.3.1). The classes are
     * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
     * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
     * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`.
     * `direction` and `scope` are present. The U-plane bits are air-interface
     * packets on `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption,
     * scrambling, and channel coding are removed before delivery (clause 4.3.3,
     * clause 6.3.1, clause 6.7). EN 301 040 does not define the digits in this
     * name.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    multiSlotData324 = 8,
    /**
     * Circuit-mode multi-slot data (clause 6.3.1). The classes are
     * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
     * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
     * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`.
     * `direction` and `scope` are present. The U-plane bits are air-interface
     * packets on `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption,
     * scrambling, and channel coding are removed before delivery (clause 4.3.3,
     * clause 6.3.1, clause 6.7). EN 301 040 does not define the digits in this
     * name.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    multiSlotData348 = 9,
    /**
     * Circuit-mode multi-slot data (clause 6.3.1). The classes are
     * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
     * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
     * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`.
     * `direction` and `scope` are present. The U-plane bits are air-interface
     * packets on `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption,
     * scrambling, and channel coding are removed before delivery (clause 4.3.3,
     * clause 6.3.1, clause 6.7). EN 301 040 does not define the digits in this
     * name.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    multiSlotData372 = 10,
    /**
     * Circuit-mode multi-slot data (clause 6.3.1). The classes are
     * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
     * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
     * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`.
     * `direction` and `scope` are present. The U-plane bits are air-interface
     * packets on `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption,
     * scrambling, and channel coding are removed before delivery (clause 4.3.3,
     * clause 6.3.1, clause 6.7). EN 301 040 does not define the digits in this
     * name.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    multiSlotData424 = 11,
    /**
     * Circuit-mode multi-slot data (clause 6.3.1). The classes are
     * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
     * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
     * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`.
     * `direction` and `scope` are present. The U-plane bits are air-interface
     * packets on `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption,
     * scrambling, and channel coding are removed before delivery (clause 4.3.3,
     * clause 6.3.1, clause 6.7). EN 301 040 does not define the digits in this
     * name.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    multiSlotData448 = 12,
    /**
     * Circuit-mode multi-slot data (clause 6.3.1). The classes are
     * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
     * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
     * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`.
     * `direction` and `scope` are present. The U-plane bits are air-interface
     * packets on `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption,
     * scrambling, and channel coding are removed before delivery (clause 4.3.3,
     * clause 6.3.1, clause 6.7). EN 301 040 does not define the digits in this
     * name.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    multiSlotData472 = 13,
    /**
     * Unacknowledged short data (clause 6.3.2.1). The SwMI may be unable to
     * turn an encoded message identity into text. `direction` and `scope`
     * follow the service. `cPlaneData` carries the user-defined data. The SwMI
     * may send the message to the mediation function both when it enters the
     * store and when it is retrieved. This value is one of `sDSType1`,
     * `sDSType2`, `sDSType3`, and `sDSType4`.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    sDSType1 = 14,
    /**
     * Unacknowledged short data (clause 6.3.2.1). The SwMI may be unable to
     * turn an encoded message identity into text. `direction` and `scope`
     * follow the service. `cPlaneData` carries the user-defined data. The SwMI
     * may send the message to the mediation function both when it enters the
     * store and when it is retrieved. This value is one of `sDSType1`,
     * `sDSType2`, `sDSType3`, and `sDSType4`.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    sDSType2 = 15,
    /**
     * Unacknowledged short data (clause 6.3.2.1). The SwMI may be unable to
     * turn an encoded message identity into text. `direction` and `scope`
     * follow the service. `cPlaneData` carries the user-defined data. The SwMI
     * may send the message to the mediation function both when it enters the
     * store and when it is retrieved. This value is one of `sDSType1`,
     * `sDSType2`, `sDSType3`, and `sDSType4`.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    sDSType3 = 16,
    /**
     * Unacknowledged short data (clause 6.3.2.1). The SwMI may be unable to
     * turn an encoded message identity into text. `direction` and `scope`
     * follow the service. `cPlaneData` carries the user-defined data. The SwMI
     * may send the message to the mediation function both when it enters the
     * store and when it is retrieved. This value is one of `sDSType1`,
     * `sDSType2`, `sDSType3`, and `sDSType4`.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    sDSType4 = 17,
    /**
     * Unacknowledged short data (clause 6.3.2.1). The SwMI may be unable to
     * turn an encoded message identity into text. `direction` and `scope`
     * follow the service. `cPlaneData` carries the user-defined data. The SwMI
     * may send the message to the mediation function both when it enters the
     * store and when it is retrieved. This value is the unacknowledged status
     * variant, listed beside the four SDS types.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    status = 18,
    /**
     * Acknowledged short data (clause 6.3.2.2). Acknowledged SDS is described
     * in EN 300 392-2. The SwMI may store and forward, so an acknowledgement
     * event may follow the paired SDS-ACK event by a long interval. `direction`
     * and `scope` follow the service. `cPlaneData` carries the user-defined
     * data. The message may be reported on entry to the store and on retrieval.
     * This value is one of `sDSACKType1` through `sDSACKType4`.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    sDSACKType1 = 19,
    /**
     * Acknowledged short data (clause 6.3.2.2). Acknowledged SDS is described
     * in EN 300 392-2. The SwMI may store and forward, so an acknowledgement
     * event may follow the paired SDS-ACK event by a long interval. `direction`
     * and `scope` follow the service. `cPlaneData` carries the user-defined
     * data. The message may be reported on entry to the store and on retrieval.
     * This value is one of `sDSACKType1` through `sDSACKType4`.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    sDSACKType2 = 20,
    /**
     * Acknowledged short data (clause 6.3.2.2). Acknowledged SDS is described
     * in EN 300 392-2. The SwMI may store and forward, so an acknowledgement
     * event may follow the paired SDS-ACK event by a long interval. `direction`
     * and `scope` follow the service. `cPlaneData` carries the user-defined
     * data. The message may be reported on entry to the store and on retrieval.
     * This value is one of `sDSACKType1` through `sDSACKType4`.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    sDSACKType3 = 21,
    /**
     * Acknowledged short data (clause 6.3.2.2). Acknowledged SDS is described
     * in EN 300 392-2. The SwMI may store and forward, so an acknowledgement
     * event may follow the paired SDS-ACK event by a long interval. `direction`
     * and `scope` follow the service. `cPlaneData` carries the user-defined
     * data. The message may be reported on entry to the store and on retrieval.
     * This value is one of `sDSACKType1` through `sDSACKType4`.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    sDSACKType4 = 22,
    /**
     * Acknowledged short data (clause 6.3.2.2). Acknowledged SDS is described
     * in EN 300 392-2. The SwMI may store and forward, so an acknowledgement
     * event may follow the paired SDS-ACK event by a long interval. `direction`
     * and `scope` follow the service. `cPlaneData` carries the user-defined
     * data. The message may be reported on entry to the store and on retrieval.
     * This value is the acknowledged status variant.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    statusack = 23,
    /**
     * Successful SDS acknowledgement (clause 6.3.2.2). Because the SwMI may
     * store and forward, this event may be much later than the paired SDS-ACK
     * event.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    sDSAcknowledgementsuccess = 24,
    /**
     * Failed SDS acknowledgement (clause 6.3.2.2). Because the SwMI may store
     * and forward, this event may be much later than the paired SDS-ACK event.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    sDSAcknowledgementfail = 25,
    /**
     * Specific Connectionless Network Service packet data (clause 6.3.2.3). The
     * SwMI generally cannot identify the source and destination applications.
     * `direction` and `scope` follow the service. `cPlaneData` carries the
     * user-defined data. Clause 6.3.2.3 writes the class as SCLNS_PacketData;
     * annex E spells it `sCLNSPacketData`.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.3.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    sCLNSPacketData = 26,
    /**
     * Connection Oriented Network Service packet data (clause 6.3.2.4). TETRA
     * CONS is a delta to ISO/IEC 8348 and ISO/IEC 8878. `direction` and `scope`
     * follow the service. `cPlaneData` carries the user-defined data, which the
     * mediation function may decode to identify virtual-circuit establishment.
     * Clause 6.3.2.4 writes the class as CONS_PacketData; annex E spells it
     * `cONSPacketData`.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.4.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    cONSPacketData = 27,
    /**
     * Internet Protocol (clause 6.3.2.5). The target IP address is carried in
     * the supplementary target address of `TARGETACTIVITYMONITORind`, and the
     * correspondent IP address in the co-target address. `direction` and
     * `scope` follow the service. `cPlaneData` is the full IP packet, header
     * and data.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.5.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    internetProtocol = 28,
    /**
     * SwMI authentication succeeded. Authentication may run at registration or
     * periodically, invoked by the mobile station or by the SwMI. Mutual
     * authentication is two separate authentications (clause 6.4.1).
     * Clause 6.4.1 writes this class as SwMI_authentication_success.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    swMIauthenticationsuccess = 29,
    /**
     * SwMI authentication failed. Authentication may run at registration or
     * periodically, invoked by the mobile station or by the SwMI. Mutual
     * authentication is two separate authentications (clause 6.4.1).
     * Clause 6.4.1 writes this class as SwMI_authentication_fail.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    swMIauthenticationfail = 30,
    /**
     * ITSI authentication succeeded. Authentication may run at registration or
     * periodically, invoked by the mobile station or by the SwMI. Mutual
     * authentication is two separate authentications (clause 6.4.1).
     * Clause 6.4.1 writes this class as ITSI_authentication_success.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    iTSIauthenticationsuccess = 31,
    /**
     * ITSI authentication failed. Authentication may run at registration or
     * periodically, invoked by the mobile station or by the SwMI. Mutual
     * authentication is two separate authentications (clause 6.4.1).
     * Clause 6.4.1 writes this class as ITSI_authentication_fail.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    iTSIauthenticationfail = 32,
    /**
     * Over-the-air rekeying of the Static Cipher Key (SCK) succeeded. The SwMI
     * may refresh SCK, Group Cipher Key (GCK), and Common Cipher Key (CCK)
     * (clause 6.4.2).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    oTARSCKsuccess = 33,
    /**
     * Over-the-air rekeying of the Static Cipher Key (SCK) failed
     * (clause 6.4.2).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    oTARSCKfail = 34,
    /**
     * Over-the-air rekeying of the Group Cipher Key (GCK) succeeded
     * (clause 6.4.2).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    oTARGCKsuccess = 35,
    /**
     * Over-the-air rekeying of the Group Cipher Key (GCK) failed
     * (clause 6.4.2).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    oTARGCKfail = 36,
    /**
     * Over-the-air rekeying of the Common Cipher Key (CCK) succeeded
     * (clause 6.4.2).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    oTARCCKsuccess = 37,
    /**
     * Over-the-air rekeying of the Common Cipher Key (CCK) failed
     * (clause 6.4.2).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    oTARCCKfail = 38,
    /**
     * Temporary disable of the target subscription. The SwMI may disable a
     * subscription or an equipment during a session. The `_T` suffix means
     * temporary and the `_P` suffix means permanent (clause 6.4.3).
     * Clause 6.4.3 writes TARGET_SUSCRIPTION_DISABLED_T; annex E keeps that
     * spelling in `tARGETSUSCRIPTIONDISABLEDT`.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.3.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    tARGETSUSCRIPTIONDISABLEDT = 39,
    /**
     * Temporary disable of the target equipment during a session. The `_T`
     * suffix means temporary (clause 6.4.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.3.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    tARGETEQUIPMENTDISABLEDT = 40,
    /**
     * Permanent disable of the target subscription. The `_P` suffix means
     * permanent (clause 6.4.3). Annex E keeps the clause 6.4.3 spelling
     * SUSCRIPTION in `tARGETSUSCRIPTIONDISABLEDP`.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.3.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    tARGETSUSCRIPTIONDISABLEDP = 41,
    /**
     * Permanent disable of the target equipment. The `_P` suffix means
     * permanent (clause 6.4.3). Clause 6.4.3 and annex E spell this value
     * EQUIPEMENT: `tARGETEQUIPEMENTDISABLEDP`.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.3.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    tARGETEQUIPEMENTDISABLEDP = 42,
    /**
     * The target subscription has been enabled (clause 6.4.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.3.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    tARGETSUBSCRIPTIONENABLED = 43,
    /**
     * The target equipment has been enabled (clause 6.4.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.3.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    tARGETEQUIPMENTENABLED = 44,
    /**
     * The target has registered, which on a session system such as TETRA is how
     * it shows that it can make and receive calls (clause 6.4.4). Annex C.2
     * encodes U-LOCATION UPDATE DEMAND with location-update type ITSI attach as
     * this class and `fromTarget`. Ciphering parameters in that demand cause a
     * later authentication report.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.4, annex C.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    sessionregistration = 45,
    /**
     * The target has deregistered (clause 6.4.4).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.4.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    sessionderegistration = 46,
    /**
     * The target moved from one SwMI to another, using a variant of
     * registration (clause 6.4.5). The new location is the activity-monitor
     * header. After a successful migration the target is deregistered on the
     * previous system and registered on the new one, which may produce several
     * related flows. A home network has no duty to supply a result of
     * interception from a visited network (clause 4.3.1). Clause 6.4.5 writes
     * this class as MIGRATION.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.5.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    mIGRATION = 47,
    /**
     * The target moved inside one SwMI from one location area, or serving cell,
     * to another, using a variant of registration (clause 6.4.6). The new
     * location is the activity-monitor header. Clause 6.4.6 writes this class
     * as ROAMING.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.6.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    rOAMING = 48,
    /**
     * A TETRA supplementary service (clause 6.4.7). `direction` is set as
     * appropriate, `scope` is omitted, `cPlaneData` is omitted, and `sStype`
     * selects the service. Invoking interception does not alter the
     * supplementary service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    supplementaryService = 49,
}

/**
 * @summary ActivityClassType
 * @description
 * 
 * Class of service or non-call signal, carried in `ActivityType.cctivity`.
 * Clause 6.3 calls that component ActivityType!Activity. `allServices` is
 * enumerated in annex E and is left unassigned by clause 6.3 and clause 6.4.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3, clause 6.4, annex E.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
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
 * Class of service or non-call signal, carried in `ActivityType.cctivity`.
 * Clause 6.3 calls that component ActivityType!Activity. `allServices` is
 * enumerated in annex E and is left unassigned by clause 6.3 and clause 6.4.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3, clause 6.4, annex E.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
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
 * @description
 *
 * Enumerated in annex E. Clauses 6.3 and 6.4 assign every other class and leave
 * `allServices` unassigned.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), annex E.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_allServices: ActivityClassType = ActivityClassType.allServices; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allServices
 * @description
 *
 * Enumerated in annex E. Clauses 6.3 and 6.4 assign every other class and leave
 * `allServices` unassigned.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), annex E.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const allServices: ActivityClassType = ActivityClassType.allServices; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_tETRASpeech
 * @description
 *
 * Circuit-mode TETRA speech (clause 6.3.1). `direction` and `scope` are
 * present. Annex C.1 encodes a target-originated individual speech U-SETUP with
 * this class, `fromTarget`, and `point2Point`. The speech is delivered as
 * discrete TETRA air-interface packets on `TTRAFFICind` and `CTTRAFFICind`,
 * verbatim and without transcoding (clause 4.3.3, clause 5.2.2.2.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_tETRASpeech: ActivityClassType = ActivityClassType.tETRASpeech; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tETRASpeech
 * @description
 *
 * Circuit-mode TETRA speech (clause 6.3.1). `direction` and `scope` are
 * present. Annex C.1 encodes a target-originated individual speech U-SETUP with
 * this class, `fromTarget`, and `point2Point`. The speech is delivered as
 * discrete TETRA air-interface packets on `TTRAFFICind` and `CTTRAFFICind`,
 * verbatim and without transcoding (clause 4.3.3, clause 5.2.2.2.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const tETRASpeech: ActivityClassType = ActivityClassType.tETRASpeech; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_singleSlotData24
 * @description
 *
 * Circuit-mode single-slot data, one of the three classes `singleSlotData24`,
 * `singleSlotData48`, and `singleSlotData72` (clause 6.3.1). `direction` and
 * `scope` are present. The U-plane bits are air-interface packets on
 * `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption, scrambling, and
 * channel coding are removed before delivery (clause 4.3.3, clause 6.3.1,
 * clause 6.7). EN 301 040 does not define the digits in this name.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_singleSlotData24: ActivityClassType = ActivityClassType.singleSlotData24; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleSlotData24
 * @description
 *
 * Circuit-mode single-slot data, one of the three classes `singleSlotData24`,
 * `singleSlotData48`, and `singleSlotData72` (clause 6.3.1). `direction` and
 * `scope` are present. The U-plane bits are air-interface packets on
 * `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption, scrambling, and
 * channel coding are removed before delivery (clause 4.3.3, clause 6.3.1,
 * clause 6.7). EN 301 040 does not define the digits in this name.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const singleSlotData24: ActivityClassType = ActivityClassType.singleSlotData24; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_singleSlotData48
 * @description
 *
 * Circuit-mode single-slot data, one of the three classes `singleSlotData24`,
 * `singleSlotData48`, and `singleSlotData72` (clause 6.3.1). `direction` and
 * `scope` are present. The U-plane bits are air-interface packets on
 * `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption, scrambling, and
 * channel coding are removed before delivery (clause 4.3.3, clause 6.3.1,
 * clause 6.7). EN 301 040 does not define the digits in this name.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_singleSlotData48: ActivityClassType = ActivityClassType.singleSlotData48; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleSlotData48
 * @description
 *
 * Circuit-mode single-slot data, one of the three classes `singleSlotData24`,
 * `singleSlotData48`, and `singleSlotData72` (clause 6.3.1). `direction` and
 * `scope` are present. The U-plane bits are air-interface packets on
 * `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption, scrambling, and
 * channel coding are removed before delivery (clause 4.3.3, clause 6.3.1,
 * clause 6.7). EN 301 040 does not define the digits in this name.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const singleSlotData48: ActivityClassType = ActivityClassType.singleSlotData48; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_singleSlotData72
 * @description
 *
 * Circuit-mode single-slot data, one of the three classes `singleSlotData24`,
 * `singleSlotData48`, and `singleSlotData72` (clause 6.3.1). `direction` and
 * `scope` are present. The U-plane bits are air-interface packets on
 * `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption, scrambling, and
 * channel coding are removed before delivery (clause 4.3.3, clause 6.3.1,
 * clause 6.7). EN 301 040 does not define the digits in this name.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_singleSlotData72: ActivityClassType = ActivityClassType.singleSlotData72; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleSlotData72
 * @description
 *
 * Circuit-mode single-slot data, one of the three classes `singleSlotData24`,
 * `singleSlotData48`, and `singleSlotData72` (clause 6.3.1). `direction` and
 * `scope` are present. The U-plane bits are air-interface packets on
 * `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption, scrambling, and
 * channel coding are removed before delivery (clause 4.3.3, clause 6.3.1,
 * clause 6.7). EN 301 040 does not define the digits in this name.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const singleSlotData72: ActivityClassType = ActivityClassType.singleSlotData72; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_multiSlotData224
 * @description
 *
 * Circuit-mode multi-slot data (clause 6.3.1). The classes are
 * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
 * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
 * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`. `direction`
 * and `scope` are present. The U-plane bits are air-interface packets on
 * `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption, scrambling, and
 * channel coding are removed before delivery (clause 4.3.3, clause 6.3.1,
 * clause 6.7). EN 301 040 does not define the digits in this name.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_multiSlotData224: ActivityClassType = ActivityClassType.multiSlotData224; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiSlotData224
 * @description
 *
 * Circuit-mode multi-slot data (clause 6.3.1). The classes are
 * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
 * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
 * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`. `direction`
 * and `scope` are present. The U-plane bits are air-interface packets on
 * `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption, scrambling, and
 * channel coding are removed before delivery (clause 4.3.3, clause 6.3.1,
 * clause 6.7). EN 301 040 does not define the digits in this name.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const multiSlotData224: ActivityClassType = ActivityClassType.multiSlotData224; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_multiSlotData248
 * @description
 *
 * Circuit-mode multi-slot data (clause 6.3.1). The classes are
 * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
 * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
 * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`. `direction`
 * and `scope` are present. The U-plane bits are air-interface packets on
 * `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption, scrambling, and
 * channel coding are removed before delivery (clause 4.3.3, clause 6.3.1,
 * clause 6.7). EN 301 040 does not define the digits in this name.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_multiSlotData248: ActivityClassType = ActivityClassType.multiSlotData248; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiSlotData248
 * @description
 *
 * Circuit-mode multi-slot data (clause 6.3.1). The classes are
 * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
 * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
 * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`. `direction`
 * and `scope` are present. The U-plane bits are air-interface packets on
 * `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption, scrambling, and
 * channel coding are removed before delivery (clause 4.3.3, clause 6.3.1,
 * clause 6.7). EN 301 040 does not define the digits in this name.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const multiSlotData248: ActivityClassType = ActivityClassType.multiSlotData248; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_multiSlotData272
 * @description
 *
 * Circuit-mode multi-slot data (clause 6.3.1). The classes are
 * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
 * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
 * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`. `direction`
 * and `scope` are present. The U-plane bits are air-interface packets on
 * `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption, scrambling, and
 * channel coding are removed before delivery (clause 4.3.3, clause 6.3.1,
 * clause 6.7). EN 301 040 does not define the digits in this name.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_multiSlotData272: ActivityClassType = ActivityClassType.multiSlotData272; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiSlotData272
 * @description
 *
 * Circuit-mode multi-slot data (clause 6.3.1). The classes are
 * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
 * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
 * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`. `direction`
 * and `scope` are present. The U-plane bits are air-interface packets on
 * `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption, scrambling, and
 * channel coding are removed before delivery (clause 4.3.3, clause 6.3.1,
 * clause 6.7). EN 301 040 does not define the digits in this name.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const multiSlotData272: ActivityClassType = ActivityClassType.multiSlotData272; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_multiSlotData324
 * @description
 *
 * Circuit-mode multi-slot data (clause 6.3.1). The classes are
 * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
 * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
 * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`. `direction`
 * and `scope` are present. The U-plane bits are air-interface packets on
 * `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption, scrambling, and
 * channel coding are removed before delivery (clause 4.3.3, clause 6.3.1,
 * clause 6.7). EN 301 040 does not define the digits in this name.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_multiSlotData324: ActivityClassType = ActivityClassType.multiSlotData324; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiSlotData324
 * @description
 *
 * Circuit-mode multi-slot data (clause 6.3.1). The classes are
 * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
 * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
 * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`. `direction`
 * and `scope` are present. The U-plane bits are air-interface packets on
 * `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption, scrambling, and
 * channel coding are removed before delivery (clause 4.3.3, clause 6.3.1,
 * clause 6.7). EN 301 040 does not define the digits in this name.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const multiSlotData324: ActivityClassType = ActivityClassType.multiSlotData324; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_multiSlotData348
 * @description
 *
 * Circuit-mode multi-slot data (clause 6.3.1). The classes are
 * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
 * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
 * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`. `direction`
 * and `scope` are present. The U-plane bits are air-interface packets on
 * `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption, scrambling, and
 * channel coding are removed before delivery (clause 4.3.3, clause 6.3.1,
 * clause 6.7). EN 301 040 does not define the digits in this name.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_multiSlotData348: ActivityClassType = ActivityClassType.multiSlotData348; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiSlotData348
 * @description
 *
 * Circuit-mode multi-slot data (clause 6.3.1). The classes are
 * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
 * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
 * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`. `direction`
 * and `scope` are present. The U-plane bits are air-interface packets on
 * `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption, scrambling, and
 * channel coding are removed before delivery (clause 4.3.3, clause 6.3.1,
 * clause 6.7). EN 301 040 does not define the digits in this name.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const multiSlotData348: ActivityClassType = ActivityClassType.multiSlotData348; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_multiSlotData372
 * @description
 *
 * Circuit-mode multi-slot data (clause 6.3.1). The classes are
 * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
 * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
 * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`. `direction`
 * and `scope` are present. The U-plane bits are air-interface packets on
 * `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption, scrambling, and
 * channel coding are removed before delivery (clause 4.3.3, clause 6.3.1,
 * clause 6.7). EN 301 040 does not define the digits in this name.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_multiSlotData372: ActivityClassType = ActivityClassType.multiSlotData372; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiSlotData372
 * @description
 *
 * Circuit-mode multi-slot data (clause 6.3.1). The classes are
 * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
 * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
 * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`. `direction`
 * and `scope` are present. The U-plane bits are air-interface packets on
 * `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption, scrambling, and
 * channel coding are removed before delivery (clause 4.3.3, clause 6.3.1,
 * clause 6.7). EN 301 040 does not define the digits in this name.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const multiSlotData372: ActivityClassType = ActivityClassType.multiSlotData372; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_multiSlotData424
 * @description
 *
 * Circuit-mode multi-slot data (clause 6.3.1). The classes are
 * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
 * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
 * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`. `direction`
 * and `scope` are present. The U-plane bits are air-interface packets on
 * `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption, scrambling, and
 * channel coding are removed before delivery (clause 4.3.3, clause 6.3.1,
 * clause 6.7). EN 301 040 does not define the digits in this name.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_multiSlotData424: ActivityClassType = ActivityClassType.multiSlotData424; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiSlotData424
 * @description
 *
 * Circuit-mode multi-slot data (clause 6.3.1). The classes are
 * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
 * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
 * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`. `direction`
 * and `scope` are present. The U-plane bits are air-interface packets on
 * `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption, scrambling, and
 * channel coding are removed before delivery (clause 4.3.3, clause 6.3.1,
 * clause 6.7). EN 301 040 does not define the digits in this name.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const multiSlotData424: ActivityClassType = ActivityClassType.multiSlotData424; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_multiSlotData448
 * @description
 *
 * Circuit-mode multi-slot data (clause 6.3.1). The classes are
 * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
 * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
 * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`. `direction`
 * and `scope` are present. The U-plane bits are air-interface packets on
 * `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption, scrambling, and
 * channel coding are removed before delivery (clause 4.3.3, clause 6.3.1,
 * clause 6.7). EN 301 040 does not define the digits in this name.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_multiSlotData448: ActivityClassType = ActivityClassType.multiSlotData448; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiSlotData448
 * @description
 *
 * Circuit-mode multi-slot data (clause 6.3.1). The classes are
 * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
 * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
 * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`. `direction`
 * and `scope` are present. The U-plane bits are air-interface packets on
 * `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption, scrambling, and
 * channel coding are removed before delivery (clause 4.3.3, clause 6.3.1,
 * clause 6.7). EN 301 040 does not define the digits in this name.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const multiSlotData448: ActivityClassType = ActivityClassType.multiSlotData448; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_multiSlotData472
 * @description
 *
 * Circuit-mode multi-slot data (clause 6.3.1). The classes are
 * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
 * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
 * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`. `direction`
 * and `scope` are present. The U-plane bits are air-interface packets on
 * `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption, scrambling, and
 * channel coding are removed before delivery (clause 4.3.3, clause 6.3.1,
 * clause 6.7). EN 301 040 does not define the digits in this name.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_multiSlotData472: ActivityClassType = ActivityClassType.multiSlotData472; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiSlotData472
 * @description
 *
 * Circuit-mode multi-slot data (clause 6.3.1). The classes are
 * `multiSlotData224`, `multiSlotData248`, `multiSlotData272`,
 * `multiSlotData324`, `multiSlotData348`, `multiSlotData372`,
 * `multiSlotData424`, `multiSlotData448`, and `multiSlotData472`. `direction`
 * and `scope` are present. The U-plane bits are air-interface packets on
 * `TTRAFFICind` and `CTTRAFFICind`. Air-interface encryption, scrambling, and
 * channel coding are removed before delivery (clause 4.3.3, clause 6.3.1,
 * clause 6.7). EN 301 040 does not define the digits in this name.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const multiSlotData472: ActivityClassType = ActivityClassType.multiSlotData472; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sDSType1
 * @description
 *
 * Unacknowledged short data (clause 6.3.2.1). The SwMI may be unable to turn an
 * encoded message identity into text. `direction` and `scope` follow the
 * service. `cPlaneData` carries the user-defined data. The SwMI may send the
 * message to the mediation function both when it enters the store and when it
 * is retrieved. This value is one of `sDSType1`, `sDSType2`, `sDSType3`, and
 * `sDSType4`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sDSType1: ActivityClassType = ActivityClassType.sDSType1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDSType1
 * @description
 *
 * Unacknowledged short data (clause 6.3.2.1). The SwMI may be unable to turn an
 * encoded message identity into text. `direction` and `scope` follow the
 * service. `cPlaneData` carries the user-defined data. The SwMI may send the
 * message to the mediation function both when it enters the store and when it
 * is retrieved. This value is one of `sDSType1`, `sDSType2`, `sDSType3`, and
 * `sDSType4`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const sDSType1: ActivityClassType = ActivityClassType.sDSType1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sDSType2
 * @description
 *
 * Unacknowledged short data (clause 6.3.2.1). The SwMI may be unable to turn an
 * encoded message identity into text. `direction` and `scope` follow the
 * service. `cPlaneData` carries the user-defined data. The SwMI may send the
 * message to the mediation function both when it enters the store and when it
 * is retrieved. This value is one of `sDSType1`, `sDSType2`, `sDSType3`, and
 * `sDSType4`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sDSType2: ActivityClassType = ActivityClassType.sDSType2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDSType2
 * @description
 *
 * Unacknowledged short data (clause 6.3.2.1). The SwMI may be unable to turn an
 * encoded message identity into text. `direction` and `scope` follow the
 * service. `cPlaneData` carries the user-defined data. The SwMI may send the
 * message to the mediation function both when it enters the store and when it
 * is retrieved. This value is one of `sDSType1`, `sDSType2`, `sDSType3`, and
 * `sDSType4`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const sDSType2: ActivityClassType = ActivityClassType.sDSType2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sDSType3
 * @description
 *
 * Unacknowledged short data (clause 6.3.2.1). The SwMI may be unable to turn an
 * encoded message identity into text. `direction` and `scope` follow the
 * service. `cPlaneData` carries the user-defined data. The SwMI may send the
 * message to the mediation function both when it enters the store and when it
 * is retrieved. This value is one of `sDSType1`, `sDSType2`, `sDSType3`, and
 * `sDSType4`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sDSType3: ActivityClassType = ActivityClassType.sDSType3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDSType3
 * @description
 *
 * Unacknowledged short data (clause 6.3.2.1). The SwMI may be unable to turn an
 * encoded message identity into text. `direction` and `scope` follow the
 * service. `cPlaneData` carries the user-defined data. The SwMI may send the
 * message to the mediation function both when it enters the store and when it
 * is retrieved. This value is one of `sDSType1`, `sDSType2`, `sDSType3`, and
 * `sDSType4`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const sDSType3: ActivityClassType = ActivityClassType.sDSType3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sDSType4
 * @description
 *
 * Unacknowledged short data (clause 6.3.2.1). The SwMI may be unable to turn an
 * encoded message identity into text. `direction` and `scope` follow the
 * service. `cPlaneData` carries the user-defined data. The SwMI may send the
 * message to the mediation function both when it enters the store and when it
 * is retrieved. This value is one of `sDSType1`, `sDSType2`, `sDSType3`, and
 * `sDSType4`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sDSType4: ActivityClassType = ActivityClassType.sDSType4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDSType4
 * @description
 *
 * Unacknowledged short data (clause 6.3.2.1). The SwMI may be unable to turn an
 * encoded message identity into text. `direction` and `scope` follow the
 * service. `cPlaneData` carries the user-defined data. The SwMI may send the
 * message to the mediation function both when it enters the store and when it
 * is retrieved. This value is one of `sDSType1`, `sDSType2`, `sDSType3`, and
 * `sDSType4`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const sDSType4: ActivityClassType = ActivityClassType.sDSType4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_status
 * @description
 *
 * Unacknowledged short data (clause 6.3.2.1). The SwMI may be unable to turn an
 * encoded message identity into text. `direction` and `scope` follow the
 * service. `cPlaneData` carries the user-defined data. The SwMI may send the
 * message to the mediation function both when it enters the store and when it
 * is retrieved. This value is the unacknowledged status variant, listed beside
 * the four SDS types.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_status: ActivityClassType = ActivityClassType.status; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary status
 * @description
 *
 * Unacknowledged short data (clause 6.3.2.1). The SwMI may be unable to turn an
 * encoded message identity into text. `direction` and `scope` follow the
 * service. `cPlaneData` carries the user-defined data. The SwMI may send the
 * message to the mediation function both when it enters the store and when it
 * is retrieved. This value is the unacknowledged status variant, listed beside
 * the four SDS types.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const status: ActivityClassType = ActivityClassType.status; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sDSACKType1
 * @description
 *
 * Acknowledged short data (clause 6.3.2.2). Acknowledged SDS is described in
 * EN 300 392-2. The SwMI may store and forward, so an acknowledgement event may
 * follow the paired SDS-ACK event by a long interval. `direction` and `scope`
 * follow the service. `cPlaneData` carries the user-defined data. The message
 * may be reported on entry to the store and on retrieval. This value is one of
 * `sDSACKType1` through `sDSACKType4`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sDSACKType1: ActivityClassType = ActivityClassType.sDSACKType1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDSACKType1
 * @description
 *
 * Acknowledged short data (clause 6.3.2.2). Acknowledged SDS is described in
 * EN 300 392-2. The SwMI may store and forward, so an acknowledgement event may
 * follow the paired SDS-ACK event by a long interval. `direction` and `scope`
 * follow the service. `cPlaneData` carries the user-defined data. The message
 * may be reported on entry to the store and on retrieval. This value is one of
 * `sDSACKType1` through `sDSACKType4`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const sDSACKType1: ActivityClassType = ActivityClassType.sDSACKType1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sDSACKType2
 * @description
 *
 * Acknowledged short data (clause 6.3.2.2). Acknowledged SDS is described in
 * EN 300 392-2. The SwMI may store and forward, so an acknowledgement event may
 * follow the paired SDS-ACK event by a long interval. `direction` and `scope`
 * follow the service. `cPlaneData` carries the user-defined data. The message
 * may be reported on entry to the store and on retrieval. This value is one of
 * `sDSACKType1` through `sDSACKType4`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sDSACKType2: ActivityClassType = ActivityClassType.sDSACKType2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDSACKType2
 * @description
 *
 * Acknowledged short data (clause 6.3.2.2). Acknowledged SDS is described in
 * EN 300 392-2. The SwMI may store and forward, so an acknowledgement event may
 * follow the paired SDS-ACK event by a long interval. `direction` and `scope`
 * follow the service. `cPlaneData` carries the user-defined data. The message
 * may be reported on entry to the store and on retrieval. This value is one of
 * `sDSACKType1` through `sDSACKType4`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const sDSACKType2: ActivityClassType = ActivityClassType.sDSACKType2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sDSACKType3
 * @description
 *
 * Acknowledged short data (clause 6.3.2.2). Acknowledged SDS is described in
 * EN 300 392-2. The SwMI may store and forward, so an acknowledgement event may
 * follow the paired SDS-ACK event by a long interval. `direction` and `scope`
 * follow the service. `cPlaneData` carries the user-defined data. The message
 * may be reported on entry to the store and on retrieval. This value is one of
 * `sDSACKType1` through `sDSACKType4`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sDSACKType3: ActivityClassType = ActivityClassType.sDSACKType3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDSACKType3
 * @description
 *
 * Acknowledged short data (clause 6.3.2.2). Acknowledged SDS is described in
 * EN 300 392-2. The SwMI may store and forward, so an acknowledgement event may
 * follow the paired SDS-ACK event by a long interval. `direction` and `scope`
 * follow the service. `cPlaneData` carries the user-defined data. The message
 * may be reported on entry to the store and on retrieval. This value is one of
 * `sDSACKType1` through `sDSACKType4`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const sDSACKType3: ActivityClassType = ActivityClassType.sDSACKType3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sDSACKType4
 * @description
 *
 * Acknowledged short data (clause 6.3.2.2). Acknowledged SDS is described in
 * EN 300 392-2. The SwMI may store and forward, so an acknowledgement event may
 * follow the paired SDS-ACK event by a long interval. `direction` and `scope`
 * follow the service. `cPlaneData` carries the user-defined data. The message
 * may be reported on entry to the store and on retrieval. This value is one of
 * `sDSACKType1` through `sDSACKType4`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sDSACKType4: ActivityClassType = ActivityClassType.sDSACKType4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDSACKType4
 * @description
 *
 * Acknowledged short data (clause 6.3.2.2). Acknowledged SDS is described in
 * EN 300 392-2. The SwMI may store and forward, so an acknowledgement event may
 * follow the paired SDS-ACK event by a long interval. `direction` and `scope`
 * follow the service. `cPlaneData` carries the user-defined data. The message
 * may be reported on entry to the store and on retrieval. This value is one of
 * `sDSACKType1` through `sDSACKType4`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const sDSACKType4: ActivityClassType = ActivityClassType.sDSACKType4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_statusack
 * @description
 *
 * Acknowledged short data (clause 6.3.2.2). Acknowledged SDS is described in
 * EN 300 392-2. The SwMI may store and forward, so an acknowledgement event may
 * follow the paired SDS-ACK event by a long interval. `direction` and `scope`
 * follow the service. `cPlaneData` carries the user-defined data. The message
 * may be reported on entry to the store and on retrieval. This value is the
 * acknowledged status variant.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_statusack: ActivityClassType = ActivityClassType.statusack; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary statusack
 * @description
 *
 * Acknowledged short data (clause 6.3.2.2). Acknowledged SDS is described in
 * EN 300 392-2. The SwMI may store and forward, so an acknowledgement event may
 * follow the paired SDS-ACK event by a long interval. `direction` and `scope`
 * follow the service. `cPlaneData` carries the user-defined data. The message
 * may be reported on entry to the store and on retrieval. This value is the
 * acknowledged status variant.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const statusack: ActivityClassType = ActivityClassType.statusack; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sDSAcknowledgementsuccess
 * @description
 *
 * Successful SDS acknowledgement (clause 6.3.2.2). Because the SwMI may store
 * and forward, this event may be much later than the paired SDS-ACK event.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sDSAcknowledgementsuccess: ActivityClassType = ActivityClassType.sDSAcknowledgementsuccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDSAcknowledgementsuccess
 * @description
 *
 * Successful SDS acknowledgement (clause 6.3.2.2). Because the SwMI may store
 * and forward, this event may be much later than the paired SDS-ACK event.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const sDSAcknowledgementsuccess: ActivityClassType = ActivityClassType.sDSAcknowledgementsuccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sDSAcknowledgementfail
 * @description
 *
 * Failed SDS acknowledgement (clause 6.3.2.2). Because the SwMI may store and
 * forward, this event may be much later than the paired SDS-ACK event.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sDSAcknowledgementfail: ActivityClassType = ActivityClassType.sDSAcknowledgementfail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDSAcknowledgementfail
 * @description
 *
 * Failed SDS acknowledgement (clause 6.3.2.2). Because the SwMI may store and
 * forward, this event may be much later than the paired SDS-ACK event.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const sDSAcknowledgementfail: ActivityClassType = ActivityClassType.sDSAcknowledgementfail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sCLNSPacketData
 * @description
 *
 * Specific Connectionless Network Service packet data (clause 6.3.2.3). The
 * SwMI generally cannot identify the source and destination applications.
 * `direction` and `scope` follow the service. `cPlaneData` carries the
 * user-defined data. Clause 6.3.2.3 writes the class as SCLNS_PacketData;
 * annex E spells it `sCLNSPacketData`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sCLNSPacketData: ActivityClassType = ActivityClassType.sCLNSPacketData; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sCLNSPacketData
 * @description
 *
 * Specific Connectionless Network Service packet data (clause 6.3.2.3). The
 * SwMI generally cannot identify the source and destination applications.
 * `direction` and `scope` follow the service. `cPlaneData` carries the
 * user-defined data. Clause 6.3.2.3 writes the class as SCLNS_PacketData;
 * annex E spells it `sCLNSPacketData`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const sCLNSPacketData: ActivityClassType = ActivityClassType.sCLNSPacketData; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_cONSPacketData
 * @description
 *
 * Connection Oriented Network Service packet data (clause 6.3.2.4). TETRA CONS
 * is a delta to ISO/IEC 8348 and ISO/IEC 8878. `direction` and `scope` follow
 * the service. `cPlaneData` carries the user-defined data, which the mediation
 * function may decode to identify virtual-circuit establishment. Clause 6.3.2.4
 * writes the class as CONS_PacketData; annex E spells it `cONSPacketData`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.4.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_cONSPacketData: ActivityClassType = ActivityClassType.cONSPacketData; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cONSPacketData
 * @description
 *
 * Connection Oriented Network Service packet data (clause 6.3.2.4). TETRA CONS
 * is a delta to ISO/IEC 8348 and ISO/IEC 8878. `direction` and `scope` follow
 * the service. `cPlaneData` carries the user-defined data, which the mediation
 * function may decode to identify virtual-circuit establishment. Clause 6.3.2.4
 * writes the class as CONS_PacketData; annex E spells it `cONSPacketData`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.4.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const cONSPacketData: ActivityClassType = ActivityClassType.cONSPacketData; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_internetProtocol
 * @description
 *
 * Internet Protocol (clause 6.3.2.5). The target IP address is carried in the
 * supplementary target address of `TARGETACTIVITYMONITORind`, and the
 * correspondent IP address in the co-target address. `direction` and `scope`
 * follow the service. `cPlaneData` is the full IP packet, header and data.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.5.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_internetProtocol: ActivityClassType = ActivityClassType.internetProtocol; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internetProtocol
 * @description
 *
 * Internet Protocol (clause 6.3.2.5). The target IP address is carried in the
 * supplementary target address of `TARGETACTIVITYMONITORind`, and the
 * correspondent IP address in the co-target address. `direction` and `scope`
 * follow the service. `cPlaneData` is the full IP packet, header and data.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.5.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const internetProtocol: ActivityClassType = ActivityClassType.internetProtocol; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_swMIauthenticationsuccess
 * @description
 *
 * SwMI authentication succeeded. Authentication may run at registration or
 * periodically, invoked by the mobile station or by the SwMI. Mutual
 * authentication is two separate authentications (clause 6.4.1). Clause 6.4.1
 * writes this class as SwMI_authentication_success.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_swMIauthenticationsuccess: ActivityClassType = ActivityClassType.swMIauthenticationsuccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary swMIauthenticationsuccess
 * @description
 *
 * SwMI authentication succeeded. Authentication may run at registration or
 * periodically, invoked by the mobile station or by the SwMI. Mutual
 * authentication is two separate authentications (clause 6.4.1). Clause 6.4.1
 * writes this class as SwMI_authentication_success.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const swMIauthenticationsuccess: ActivityClassType = ActivityClassType.swMIauthenticationsuccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_swMIauthenticationfail
 * @description
 *
 * SwMI authentication failed. Authentication may run at registration or
 * periodically, invoked by the mobile station or by the SwMI. Mutual
 * authentication is two separate authentications (clause 6.4.1). Clause 6.4.1
 * writes this class as SwMI_authentication_fail.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_swMIauthenticationfail: ActivityClassType = ActivityClassType.swMIauthenticationfail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary swMIauthenticationfail
 * @description
 *
 * SwMI authentication failed. Authentication may run at registration or
 * periodically, invoked by the mobile station or by the SwMI. Mutual
 * authentication is two separate authentications (clause 6.4.1). Clause 6.4.1
 * writes this class as SwMI_authentication_fail.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const swMIauthenticationfail: ActivityClassType = ActivityClassType.swMIauthenticationfail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_iTSIauthenticationsuccess
 * @description
 *
 * ITSI authentication succeeded. Authentication may run at registration or
 * periodically, invoked by the mobile station or by the SwMI. Mutual
 * authentication is two separate authentications (clause 6.4.1). Clause 6.4.1
 * writes this class as ITSI_authentication_success.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_iTSIauthenticationsuccess: ActivityClassType = ActivityClassType.iTSIauthenticationsuccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iTSIauthenticationsuccess
 * @description
 *
 * ITSI authentication succeeded. Authentication may run at registration or
 * periodically, invoked by the mobile station or by the SwMI. Mutual
 * authentication is two separate authentications (clause 6.4.1). Clause 6.4.1
 * writes this class as ITSI_authentication_success.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const iTSIauthenticationsuccess: ActivityClassType = ActivityClassType.iTSIauthenticationsuccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_iTSIauthenticationfail
 * @description
 *
 * ITSI authentication failed. Authentication may run at registration or
 * periodically, invoked by the mobile station or by the SwMI. Mutual
 * authentication is two separate authentications (clause 6.4.1). Clause 6.4.1
 * writes this class as ITSI_authentication_fail.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_iTSIauthenticationfail: ActivityClassType = ActivityClassType.iTSIauthenticationfail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iTSIauthenticationfail
 * @description
 *
 * ITSI authentication failed. Authentication may run at registration or
 * periodically, invoked by the mobile station or by the SwMI. Mutual
 * authentication is two separate authentications (clause 6.4.1). Clause 6.4.1
 * writes this class as ITSI_authentication_fail.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const iTSIauthenticationfail: ActivityClassType = ActivityClassType.iTSIauthenticationfail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_oTARSCKsuccess
 * @description
 *
 * Over-the-air rekeying of the Static Cipher Key (SCK) succeeded. The SwMI may
 * refresh SCK, Group Cipher Key (GCK), and Common Cipher Key (CCK)
 * (clause 6.4.2).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_oTARSCKsuccess: ActivityClassType = ActivityClassType.oTARSCKsuccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oTARSCKsuccess
 * @description
 *
 * Over-the-air rekeying of the Static Cipher Key (SCK) succeeded. The SwMI may
 * refresh SCK, Group Cipher Key (GCK), and Common Cipher Key (CCK)
 * (clause 6.4.2).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const oTARSCKsuccess: ActivityClassType = ActivityClassType.oTARSCKsuccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_oTARSCKfail
 * @description
 *
 * Over-the-air rekeying of the Static Cipher Key (SCK) failed (clause 6.4.2).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_oTARSCKfail: ActivityClassType = ActivityClassType.oTARSCKfail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oTARSCKfail
 * @description
 *
 * Over-the-air rekeying of the Static Cipher Key (SCK) failed (clause 6.4.2).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const oTARSCKfail: ActivityClassType = ActivityClassType.oTARSCKfail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_oTARGCKsuccess
 * @description
 *
 * Over-the-air rekeying of the Group Cipher Key (GCK) succeeded (clause 6.4.2).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_oTARGCKsuccess: ActivityClassType = ActivityClassType.oTARGCKsuccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oTARGCKsuccess
 * @description
 *
 * Over-the-air rekeying of the Group Cipher Key (GCK) succeeded (clause 6.4.2).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const oTARGCKsuccess: ActivityClassType = ActivityClassType.oTARGCKsuccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_oTARGCKfail
 * @description
 *
 * Over-the-air rekeying of the Group Cipher Key (GCK) failed (clause 6.4.2).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_oTARGCKfail: ActivityClassType = ActivityClassType.oTARGCKfail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oTARGCKfail
 * @description
 *
 * Over-the-air rekeying of the Group Cipher Key (GCK) failed (clause 6.4.2).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const oTARGCKfail: ActivityClassType = ActivityClassType.oTARGCKfail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_oTARCCKsuccess
 * @description
 *
 * Over-the-air rekeying of the Common Cipher Key (CCK) succeeded
 * (clause 6.4.2).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_oTARCCKsuccess: ActivityClassType = ActivityClassType.oTARCCKsuccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oTARCCKsuccess
 * @description
 *
 * Over-the-air rekeying of the Common Cipher Key (CCK) succeeded
 * (clause 6.4.2).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const oTARCCKsuccess: ActivityClassType = ActivityClassType.oTARCCKsuccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_oTARCCKfail
 * @description
 *
 * Over-the-air rekeying of the Common Cipher Key (CCK) failed (clause 6.4.2).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_oTARCCKfail: ActivityClassType = ActivityClassType.oTARCCKfail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oTARCCKfail
 * @description
 *
 * Over-the-air rekeying of the Common Cipher Key (CCK) failed (clause 6.4.2).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const oTARCCKfail: ActivityClassType = ActivityClassType.oTARCCKfail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_tARGETSUSCRIPTIONDISABLEDT
 * @description
 *
 * Temporary disable of the target subscription. The SwMI may disable a
 * subscription or an equipment during a session. The `_T` suffix means
 * temporary and the `_P` suffix means permanent (clause 6.4.3). Clause 6.4.3
 * writes TARGET_SUSCRIPTION_DISABLED_T; annex E keeps that spelling in
 * `tARGETSUSCRIPTIONDISABLEDT`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_tARGETSUSCRIPTIONDISABLEDT: ActivityClassType = ActivityClassType.tARGETSUSCRIPTIONDISABLEDT; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tARGETSUSCRIPTIONDISABLEDT
 * @description
 *
 * Temporary disable of the target subscription. The SwMI may disable a
 * subscription or an equipment during a session. The `_T` suffix means
 * temporary and the `_P` suffix means permanent (clause 6.4.3). Clause 6.4.3
 * writes TARGET_SUSCRIPTION_DISABLED_T; annex E keeps that spelling in
 * `tARGETSUSCRIPTIONDISABLEDT`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const tARGETSUSCRIPTIONDISABLEDT: ActivityClassType = ActivityClassType.tARGETSUSCRIPTIONDISABLEDT; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_tARGETEQUIPMENTDISABLEDT
 * @description
 *
 * Temporary disable of the target equipment during a session. The `_T` suffix
 * means temporary (clause 6.4.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_tARGETEQUIPMENTDISABLEDT: ActivityClassType = ActivityClassType.tARGETEQUIPMENTDISABLEDT; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tARGETEQUIPMENTDISABLEDT
 * @description
 *
 * Temporary disable of the target equipment during a session. The `_T` suffix
 * means temporary (clause 6.4.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const tARGETEQUIPMENTDISABLEDT: ActivityClassType = ActivityClassType.tARGETEQUIPMENTDISABLEDT; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_tARGETSUSCRIPTIONDISABLEDP
 * @description
 *
 * Permanent disable of the target subscription. The `_P` suffix means permanent
 * (clause 6.4.3). Annex E keeps the clause 6.4.3 spelling SUSCRIPTION in
 * `tARGETSUSCRIPTIONDISABLEDP`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_tARGETSUSCRIPTIONDISABLEDP: ActivityClassType = ActivityClassType.tARGETSUSCRIPTIONDISABLEDP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tARGETSUSCRIPTIONDISABLEDP
 * @description
 *
 * Permanent disable of the target subscription. The `_P` suffix means permanent
 * (clause 6.4.3). Annex E keeps the clause 6.4.3 spelling SUSCRIPTION in
 * `tARGETSUSCRIPTIONDISABLEDP`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const tARGETSUSCRIPTIONDISABLEDP: ActivityClassType = ActivityClassType.tARGETSUSCRIPTIONDISABLEDP; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_tARGETEQUIPEMENTDISABLEDP
 * @description
 *
 * Permanent disable of the target equipment. The `_P` suffix means permanent
 * (clause 6.4.3). Clause 6.4.3 and annex E spell this value EQUIPEMENT:
 * `tARGETEQUIPEMENTDISABLEDP`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_tARGETEQUIPEMENTDISABLEDP: ActivityClassType = ActivityClassType.tARGETEQUIPEMENTDISABLEDP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tARGETEQUIPEMENTDISABLEDP
 * @description
 *
 * Permanent disable of the target equipment. The `_P` suffix means permanent
 * (clause 6.4.3). Clause 6.4.3 and annex E spell this value EQUIPEMENT:
 * `tARGETEQUIPEMENTDISABLEDP`.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const tARGETEQUIPEMENTDISABLEDP: ActivityClassType = ActivityClassType.tARGETEQUIPEMENTDISABLEDP; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_tARGETSUBSCRIPTIONENABLED
 * @description
 *
 * The target subscription has been enabled (clause 6.4.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_tARGETSUBSCRIPTIONENABLED: ActivityClassType = ActivityClassType.tARGETSUBSCRIPTIONENABLED; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tARGETSUBSCRIPTIONENABLED
 * @description
 *
 * The target subscription has been enabled (clause 6.4.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const tARGETSUBSCRIPTIONENABLED: ActivityClassType = ActivityClassType.tARGETSUBSCRIPTIONENABLED; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_tARGETEQUIPMENTENABLED
 * @description
 *
 * The target equipment has been enabled (clause 6.4.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_tARGETEQUIPMENTENABLED: ActivityClassType = ActivityClassType.tARGETEQUIPMENTENABLED; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tARGETEQUIPMENTENABLED
 * @description
 *
 * The target equipment has been enabled (clause 6.4.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const tARGETEQUIPMENTENABLED: ActivityClassType = ActivityClassType.tARGETEQUIPMENTENABLED; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sessionregistration
 * @description
 *
 * The target has registered, which on a session system such as TETRA is how it
 * shows that it can make and receive calls (clause 6.4.4). Annex C.2 encodes
 * U-LOCATION UPDATE DEMAND with location-update type ITSI attach as this class
 * and `fromTarget`. Ciphering parameters in that demand cause a later
 * authentication report.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.4, annex C.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sessionregistration: ActivityClassType = ActivityClassType.sessionregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionregistration
 * @description
 *
 * The target has registered, which on a session system such as TETRA is how it
 * shows that it can make and receive calls (clause 6.4.4). Annex C.2 encodes
 * U-LOCATION UPDATE DEMAND with location-update type ITSI attach as this class
 * and `fromTarget`. Ciphering parameters in that demand cause a later
 * authentication report.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.4, annex C.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const sessionregistration: ActivityClassType = ActivityClassType.sessionregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_sessionderegistration
 * @description
 *
 * The target has deregistered (clause 6.4.4).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.4.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_sessionderegistration: ActivityClassType = ActivityClassType.sessionderegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionderegistration
 * @description
 *
 * The target has deregistered (clause 6.4.4).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.4.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const sessionderegistration: ActivityClassType = ActivityClassType.sessionderegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_mIGRATION
 * @description
 *
 * The target moved from one SwMI to another, using a variant of registration
 * (clause 6.4.5). The new location is the activity-monitor header. After a
 * successful migration the target is deregistered on the previous system and
 * registered on the new one, which may produce several related flows. A home
 * network has no duty to supply a result of interception from a visited network
 * (clause 4.3.1). Clause 6.4.5 writes this class as MIGRATION.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.5.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_mIGRATION: ActivityClassType = ActivityClassType.mIGRATION; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mIGRATION
 * @description
 *
 * The target moved from one SwMI to another, using a variant of registration
 * (clause 6.4.5). The new location is the activity-monitor header. After a
 * successful migration the target is deregistered on the previous system and
 * registered on the new one, which may produce several related flows. A home
 * network has no duty to supply a result of interception from a visited network
 * (clause 4.3.1). Clause 6.4.5 writes this class as MIGRATION.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.5.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const mIGRATION: ActivityClassType = ActivityClassType.mIGRATION; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_rOAMING
 * @description
 *
 * The target moved inside one SwMI from one location area, or serving cell, to
 * another, using a variant of registration (clause 6.4.6). The new location is
 * the activity-monitor header. Clause 6.4.6 writes this class as ROAMING.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.6.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_rOAMING: ActivityClassType = ActivityClassType.rOAMING; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rOAMING
 * @description
 *
 * The target moved inside one SwMI from one location area, or serving cell, to
 * another, using a variant of registration (clause 6.4.6). The new location is
 * the activity-monitor header. Clause 6.4.6 writes this class as ROAMING.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.6.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const rOAMING: ActivityClassType = ActivityClassType.rOAMING; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityClassType_supplementaryService
 * @description
 *
 * A TETRA supplementary service (clause 6.4.7). `direction` is set as
 * appropriate, `scope` is omitted, `cPlaneData` is omitted, and `sStype`
 * selects the service. Invoking interception does not alter the supplementary
 * service (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityClassType_supplementaryService: ActivityClassType = ActivityClassType.supplementaryService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary supplementaryService
 * @description
 *
 * A TETRA supplementary service (clause 6.4.7). `direction` is set as
 * appropriate, `scope` is omitted, `cPlaneData` is omitted, and `sStype`
 * selects the service. Invoking interception does not alter the supplementary
 * service (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const supplementaryService: ActivityClassType = ActivityClassType.supplementaryService; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ActivityClassType: $.ASN1Decoder<ActivityClassType> = $._decodeEnumerated;
export const _encode_ActivityClassType: $.ASN1Encoder<ActivityClassType> = $._encodeEnumerated;


/* eslint-enable */
