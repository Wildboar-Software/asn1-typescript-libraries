/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RATType
 * @description
 * 
 * The RATType type is derived from the data present in the RATType type defined
 * in TS 29.571 [17] clause 5.4.3.2.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RATType  ::=  ENUMERATED
 * {
 *     nR(1),
 *     eUTRA(2),
 *     wLAN(3),
 *     virtual(4),
 *     nBIOT(5),
 *     wireline(6),
 *     wirelineCable(7),
 *     wirelineBBF(8),
 *     lTEM(9),
 *     nRU(10),
 *     eUTRAU(11),
 *     trustedN3GA(12),
 *     trustedWLAN(13),
 *     uTRA(14),
 *     gERA(15),
 *     nRLEO(16),
 *     nRMEO(17),
 *     nRGEO(18),
 *     nROTHERSAT(19),
 *     nRREDCAP(20),
 *     wBEUTRANLEO(21),
 *     wBEUTRANMEO(22),
 *     wBEUTRANGEO(23),
 *     wBEUTRANOTHERSAT(24),
 *     nBIOTLEO(25),
 *     nBIOTMEO(26),
 *     nBIOTGEO(27),
 *     nBIOTOTHERSAT(28),
 *     lTEMLEO(29),
 *     lTEMMEO(30),
 *     lTEMGEO(31),
 *     lTEMOTHERSAT(32),
 *     nREREDCAP(33)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RATType {
    /**
     * @description
     *
     * New Radio.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    nR = 1,
    /**
     * @description
     *
     * (WB) Evolved Universal Terrestrial Radio Access.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    eUTRA = 2,
    /**
     * @description
     *
     * Untrusted Wireless LAN (IEEE 802.11) access.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    wLAN = 3,
    /**
     * @description
     *
     * Virtual. Used if the N3IWF does not know the access technology used for
     * an untrusted non-3GPP access.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    virtual = 4,
    /**
     * @description
     *
     * NB IoT.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    nBIOT = 5,
    /**
     * @description
     *
     * Wireline access.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    wireline = 6,
    /**
     * @description
     *
     * Wireline Cable Access.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    wirelineCable = 7,
    /**
     * @description
     *
     * Wireline BBF Access.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    wirelineBBF = 8,
    /**
     * @description
     *
     * LTE-M. Also used when a Category M UE using E-UTRA has provided a
     * Category M indication to the NG-RAN.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    lTEM = 9,
    /**
     * @description
     *
     * New Radio in unlicensed bands.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    nRU = 10,
    /**
     * @description
     *
     * (WB) Evolved Universal Terrestrial Radio Access in unlicensed bands.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    eUTRAU = 11,
    /**
     * @description
     *
     * Trusted Non-3GPP access.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    trustedN3GA = 12,
    /**
     * @description
     *
     * Trusted Wireless LAN (IEEE 802.11) access.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    trustedWLAN = 13,
    /**
     * @description
     *
     * UMTS Terrestrial Radio Access.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    uTRA = 14,
    /**
     * @description
     *
     * GSM EDGE Radio Access Network.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    gERA = 15,
    /**
     * @description
     *
     * NR (LEO) satellite access type.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    nRLEO = 16,
    /**
     * @description
     *
     * NR (MEO) satellite access type.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    nRMEO = 17,
    /**
     * @description
     *
     * NR (GEO) satellite access type.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    nRGEO = 18,
    /**
     * @description
     *
     * NR (OTHERSAT) satellite access type.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    nROTHERSAT = 19,
    /**
     * @description
     *
     * NR RedCap access type.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    nRREDCAP = 20,
    /**
     * @description
     *
     * WB-E-UTRAN (LEO) satellite access type.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    wBEUTRANLEO = 21,
    /**
     * @description
     *
     * WB-E-UTRAN (MEO) satellite access type.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    wBEUTRANMEO = 22,
    /**
     * @description
     *
     * WB-E-UTRAN (GEO) satellite access type.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    wBEUTRANGEO = 23,
    /**
     * @description
     *
     * WB-E-UTRAN (OTHERSAT) satellite access type.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    wBEUTRANOTHERSAT = 24,
    /**
     * @description
     *
     * NB-IoT (LEO) satellite access type.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    nBIOTLEO = 25,
    /**
     * @description
     *
     * NB-IoT (MEO) satellite access type.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    nBIOTMEO = 26,
    /**
     * @description
     *
     * NB-IoT (GEO) satellite access type.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    nBIOTGEO = 27,
    /**
     * @description
     *
     * NB-IoT (OTHERSAT) satellite access type.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    nBIOTOTHERSAT = 28,
    /**
     * @description
     *
     * LTE-M (LEO) satellite access type.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    lTEMLEO = 29,
    /**
     * @description
     *
     * LTE-M (MEO) satellite access type.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    lTEMMEO = 30,
    /**
     * @description
     *
     * LTE-M (GEO) satellite access type.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    lTEMGEO = 31,
    /**
     * @description
     *
     * LTE-M (OTHERSAT).
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    lTEMOTHERSAT = 32,
    /**
     * @description
     *
     * NR eRedCap access type.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.20.
     */
    nREREDCAP = 33,
}

/**
 * @summary RATType
 * @description
 * 
 * The RATType type is derived from the data present in the RATType type defined
 * in TS 29.571 [17] clause 5.4.3.2.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RATType  ::=  ENUMERATED
 * {
 *     nR(1),
 *     eUTRA(2),
 *     wLAN(3),
 *     virtual(4),
 *     nBIOT(5),
 *     wireline(6),
 *     wirelineCable(7),
 *     wirelineBBF(8),
 *     lTEM(9),
 *     nRU(10),
 *     eUTRAU(11),
 *     trustedN3GA(12),
 *     trustedWLAN(13),
 *     uTRA(14),
 *     gERA(15),
 *     nRLEO(16),
 *     nRMEO(17),
 *     nRGEO(18),
 *     nROTHERSAT(19),
 *     nRREDCAP(20),
 *     wBEUTRANLEO(21),
 *     wBEUTRANMEO(22),
 *     wBEUTRANGEO(23),
 *     wBEUTRANOTHERSAT(24),
 *     nBIOTLEO(25),
 *     nBIOTMEO(26),
 *     nBIOTGEO(27),
 *     nBIOTOTHERSAT(28),
 *     lTEMLEO(29),
 *     lTEMMEO(30),
 *     lTEMGEO(31),
 *     lTEMOTHERSAT(32),
 *     nREREDCAP(33)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RATType = _enum_for_RATType;

/**
 * @summary RATType
 * @description
 * 
 * The RATType type is derived from the data present in the RATType type defined
 * in TS 29.571 [17] clause 5.4.3.2.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RATType  ::=  ENUMERATED
 * {
 *     nR(1),
 *     eUTRA(2),
 *     wLAN(3),
 *     virtual(4),
 *     nBIOT(5),
 *     wireline(6),
 *     wirelineCable(7),
 *     wirelineBBF(8),
 *     lTEM(9),
 *     nRU(10),
 *     eUTRAU(11),
 *     trustedN3GA(12),
 *     trustedWLAN(13),
 *     uTRA(14),
 *     gERA(15),
 *     nRLEO(16),
 *     nRMEO(17),
 *     nRGEO(18),
 *     nROTHERSAT(19),
 *     nRREDCAP(20),
 *     wBEUTRANLEO(21),
 *     wBEUTRANMEO(22),
 *     wBEUTRANGEO(23),
 *     wBEUTRANOTHERSAT(24),
 *     nBIOTLEO(25),
 *     nBIOTMEO(26),
 *     nBIOTGEO(27),
 *     nBIOTOTHERSAT(28),
 *     lTEMLEO(29),
 *     lTEMMEO(30),
 *     lTEMGEO(31),
 *     lTEMOTHERSAT(32),
 *     nREREDCAP(33)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RATType = _enum_for_RATType;

/**
 * @summary RATType_nR
 * @description
 *
 * New Radio.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_nR = RATType.nR satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nR
 * @description
 *
 * New Radio.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const nR = RATType.nR satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_eUTRA
 * @description
 *
 * (WB) Evolved Universal Terrestrial Radio Access.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_eUTRA = RATType.eUTRA satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eUTRA
 * @description
 *
 * (WB) Evolved Universal Terrestrial Radio Access.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const eUTRA = RATType.eUTRA satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_wLAN
 * @description
 *
 * Untrusted Wireless LAN (IEEE 802.11) access.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_wLAN = RATType.wLAN satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wLAN
 * @description
 *
 * Untrusted Wireless LAN (IEEE 802.11) access.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const wLAN = RATType.wLAN satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_virtual
 * @description
 *
 * Virtual. Used if the N3IWF does not know the access technology used for an
 * untrusted non-3GPP access.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_virtual = RATType.virtual satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary virtual
 * @description
 *
 * Virtual. Used if the N3IWF does not know the access technology used for an
 * untrusted non-3GPP access.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const virtual = RATType.virtual satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_nBIOT
 * @description
 *
 * NB IoT.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_nBIOT = RATType.nBIOT satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nBIOT
 * @description
 *
 * NB IoT.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const nBIOT = RATType.nBIOT satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_wireline
 * @description
 *
 * Wireline access.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_wireline = RATType.wireline satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wireline
 * @description
 *
 * Wireline access.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const wireline = RATType.wireline satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_wirelineCable
 * @description
 *
 * Wireline Cable Access.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_wirelineCable = RATType.wirelineCable satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wirelineCable
 * @description
 *
 * Wireline Cable Access.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const wirelineCable = RATType.wirelineCable satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_wirelineBBF
 * @description
 *
 * Wireline BBF Access.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_wirelineBBF = RATType.wirelineBBF satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wirelineBBF
 * @description
 *
 * Wireline BBF Access.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const wirelineBBF = RATType.wirelineBBF satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_lTEM
 * @description
 *
 * LTE-M. Also used when a Category M UE using E-UTRA has provided a Category M
 * indication to the NG-RAN.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_lTEM = RATType.lTEM satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lTEM
 * @description
 *
 * LTE-M. Also used when a Category M UE using E-UTRA has provided a Category M
 * indication to the NG-RAN.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const lTEM = RATType.lTEM satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_nRU
 * @description
 *
 * New Radio in unlicensed bands.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_nRU = RATType.nRU satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nRU
 * @description
 *
 * New Radio in unlicensed bands.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const nRU = RATType.nRU satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_eUTRAU
 * @description
 *
 * (WB) Evolved Universal Terrestrial Radio Access in unlicensed bands.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_eUTRAU = RATType.eUTRAU satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eUTRAU
 * @description
 *
 * (WB) Evolved Universal Terrestrial Radio Access in unlicensed bands.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const eUTRAU = RATType.eUTRAU satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_trustedN3GA
 * @description
 *
 * Trusted Non-3GPP access.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_trustedN3GA = RATType.trustedN3GA satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trustedN3GA
 * @description
 *
 * Trusted Non-3GPP access.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const trustedN3GA = RATType.trustedN3GA satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_trustedWLAN
 * @description
 *
 * Trusted Wireless LAN (IEEE 802.11) access.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_trustedWLAN = RATType.trustedWLAN satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trustedWLAN
 * @description
 *
 * Trusted Wireless LAN (IEEE 802.11) access.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const trustedWLAN = RATType.trustedWLAN satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_uTRA
 * @description
 *
 * UMTS Terrestrial Radio Access.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_uTRA = RATType.uTRA satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uTRA
 * @description
 *
 * UMTS Terrestrial Radio Access.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const uTRA = RATType.uTRA satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_gERA
 * @description
 *
 * GSM EDGE Radio Access Network.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_gERA = RATType.gERA satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gERA
 * @description
 *
 * GSM EDGE Radio Access Network.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const gERA = RATType.gERA satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_nRLEO
 * @description
 *
 * NR (LEO) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_nRLEO = RATType.nRLEO satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nRLEO
 * @description
 *
 * NR (LEO) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const nRLEO = RATType.nRLEO satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_nRMEO
 * @description
 *
 * NR (MEO) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_nRMEO = RATType.nRMEO satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nRMEO
 * @description
 *
 * NR (MEO) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const nRMEO = RATType.nRMEO satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_nRGEO
 * @description
 *
 * NR (GEO) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_nRGEO = RATType.nRGEO satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nRGEO
 * @description
 *
 * NR (GEO) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const nRGEO = RATType.nRGEO satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_nROTHERSAT
 * @description
 *
 * NR (OTHERSAT) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_nROTHERSAT = RATType.nROTHERSAT satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nROTHERSAT
 * @description
 *
 * NR (OTHERSAT) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const nROTHERSAT = RATType.nROTHERSAT satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_nRREDCAP
 * @description
 *
 * NR RedCap access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_nRREDCAP = RATType.nRREDCAP satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nRREDCAP
 * @description
 *
 * NR RedCap access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const nRREDCAP = RATType.nRREDCAP satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_wBEUTRANLEO
 * @description
 *
 * WB-E-UTRAN (LEO) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_wBEUTRANLEO = RATType.wBEUTRANLEO satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wBEUTRANLEO
 * @description
 *
 * WB-E-UTRAN (LEO) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const wBEUTRANLEO = RATType.wBEUTRANLEO satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_wBEUTRANMEO
 * @description
 *
 * WB-E-UTRAN (MEO) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_wBEUTRANMEO = RATType.wBEUTRANMEO satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wBEUTRANMEO
 * @description
 *
 * WB-E-UTRAN (MEO) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const wBEUTRANMEO = RATType.wBEUTRANMEO satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_wBEUTRANGEO
 * @description
 *
 * WB-E-UTRAN (GEO) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_wBEUTRANGEO = RATType.wBEUTRANGEO satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wBEUTRANGEO
 * @description
 *
 * WB-E-UTRAN (GEO) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const wBEUTRANGEO = RATType.wBEUTRANGEO satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_wBEUTRANOTHERSAT
 * @description
 *
 * WB-E-UTRAN (OTHERSAT) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_wBEUTRANOTHERSAT = RATType.wBEUTRANOTHERSAT satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wBEUTRANOTHERSAT
 * @description
 *
 * WB-E-UTRAN (OTHERSAT) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const wBEUTRANOTHERSAT = RATType.wBEUTRANOTHERSAT satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_nBIOTLEO
 * @description
 *
 * NB-IoT (LEO) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_nBIOTLEO = RATType.nBIOTLEO satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nBIOTLEO
 * @description
 *
 * NB-IoT (LEO) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const nBIOTLEO = RATType.nBIOTLEO satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_nBIOTMEO
 * @description
 *
 * NB-IoT (MEO) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_nBIOTMEO = RATType.nBIOTMEO satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nBIOTMEO
 * @description
 *
 * NB-IoT (MEO) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const nBIOTMEO = RATType.nBIOTMEO satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_nBIOTGEO
 * @description
 *
 * NB-IoT (GEO) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_nBIOTGEO = RATType.nBIOTGEO satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nBIOTGEO
 * @description
 *
 * NB-IoT (GEO) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const nBIOTGEO = RATType.nBIOTGEO satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_nBIOTOTHERSAT
 * @description
 *
 * NB-IoT (OTHERSAT) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_nBIOTOTHERSAT = RATType.nBIOTOTHERSAT satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nBIOTOTHERSAT
 * @description
 *
 * NB-IoT (OTHERSAT) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const nBIOTOTHERSAT = RATType.nBIOTOTHERSAT satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_lTEMLEO
 * @description
 *
 * LTE-M (LEO) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_lTEMLEO = RATType.lTEMLEO satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lTEMLEO
 * @description
 *
 * LTE-M (LEO) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const lTEMLEO = RATType.lTEMLEO satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_lTEMMEO
 * @description
 *
 * LTE-M (MEO) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_lTEMMEO = RATType.lTEMMEO satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lTEMMEO
 * @description
 *
 * LTE-M (MEO) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const lTEMMEO = RATType.lTEMMEO satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_lTEMGEO
 * @description
 *
 * LTE-M (GEO) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_lTEMGEO = RATType.lTEMGEO satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lTEMGEO
 * @description
 *
 * LTE-M (GEO) satellite access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const lTEMGEO = RATType.lTEMGEO satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_lTEMOTHERSAT
 * @description
 *
 * LTE-M (OTHERSAT).
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_lTEMOTHERSAT = RATType.lTEMOTHERSAT satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lTEMOTHERSAT
 * @description
 *
 * LTE-M (OTHERSAT).
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const lTEMOTHERSAT = RATType.lTEMOTHERSAT satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_nREREDCAP
 * @description
 *
 * NR eRedCap access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const RATType_nREREDCAP = RATType.nREREDCAP satisfies RATType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nREREDCAP
 * @description
 *
 * NR eRedCap access type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.20.
 *
 * @constant
 * @type {number}
 */
export
const nREREDCAP = RATType.nREREDCAP satisfies RATType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RATType: $.ASN1Decoder<RATType> = $._decodeEnumerated;
export const _encode_RATType: $.ASN1Encoder<RATType> = $._encodeEnumerated;


/* eslint-enable */
