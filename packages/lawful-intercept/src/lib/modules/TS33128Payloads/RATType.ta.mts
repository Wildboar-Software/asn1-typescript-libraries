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
const RATType: typeof _enum_for_RATType = _enum_for_RATType;

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
const RATType_nR: _enum_for_RATType.nR = RATType.nR; /* LONG_NAMED_ENUMERATED_VALUE */

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
const nR: _enum_for_RATType.nR = RATType.nR; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_eUTRA: _enum_for_RATType.eUTRA = RATType.eUTRA; /* LONG_NAMED_ENUMERATED_VALUE */

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
const eUTRA: _enum_for_RATType.eUTRA = RATType.eUTRA; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_wLAN: _enum_for_RATType.wLAN = RATType.wLAN; /* LONG_NAMED_ENUMERATED_VALUE */

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
const wLAN: _enum_for_RATType.wLAN = RATType.wLAN; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_virtual: _enum_for_RATType.virtual = RATType.virtual; /* LONG_NAMED_ENUMERATED_VALUE */

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
const virtual: _enum_for_RATType.virtual = RATType.virtual; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_nBIOT: _enum_for_RATType.nBIOT = RATType.nBIOT; /* LONG_NAMED_ENUMERATED_VALUE */

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
const nBIOT: _enum_for_RATType.nBIOT = RATType.nBIOT; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_wireline: _enum_for_RATType.wireline = RATType.wireline; /* LONG_NAMED_ENUMERATED_VALUE */

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
const wireline: _enum_for_RATType.wireline = RATType.wireline; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_wirelineCable: _enum_for_RATType.wirelineCable = RATType.wirelineCable; /* LONG_NAMED_ENUMERATED_VALUE */

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
const wirelineCable: _enum_for_RATType.wirelineCable = RATType.wirelineCable; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_wirelineBBF: _enum_for_RATType.wirelineBBF = RATType.wirelineBBF; /* LONG_NAMED_ENUMERATED_VALUE */

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
const wirelineBBF: _enum_for_RATType.wirelineBBF = RATType.wirelineBBF; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_lTEM: _enum_for_RATType.lTEM = RATType.lTEM; /* LONG_NAMED_ENUMERATED_VALUE */

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
const lTEM: _enum_for_RATType.lTEM = RATType.lTEM; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_nRU: _enum_for_RATType.nRU = RATType.nRU; /* LONG_NAMED_ENUMERATED_VALUE */

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
const nRU: _enum_for_RATType.nRU = RATType.nRU; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_eUTRAU: _enum_for_RATType.eUTRAU = RATType.eUTRAU; /* LONG_NAMED_ENUMERATED_VALUE */

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
const eUTRAU: _enum_for_RATType.eUTRAU = RATType.eUTRAU; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_trustedN3GA: _enum_for_RATType.trustedN3GA = RATType.trustedN3GA; /* LONG_NAMED_ENUMERATED_VALUE */

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
const trustedN3GA: _enum_for_RATType.trustedN3GA = RATType.trustedN3GA; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_trustedWLAN: _enum_for_RATType.trustedWLAN = RATType.trustedWLAN; /* LONG_NAMED_ENUMERATED_VALUE */

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
const trustedWLAN: _enum_for_RATType.trustedWLAN = RATType.trustedWLAN; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_uTRA: _enum_for_RATType.uTRA = RATType.uTRA; /* LONG_NAMED_ENUMERATED_VALUE */

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
const uTRA: _enum_for_RATType.uTRA = RATType.uTRA; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_gERA: _enum_for_RATType.gERA = RATType.gERA; /* LONG_NAMED_ENUMERATED_VALUE */

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
const gERA: _enum_for_RATType.gERA = RATType.gERA; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_nRLEO: _enum_for_RATType.nRLEO = RATType.nRLEO; /* LONG_NAMED_ENUMERATED_VALUE */

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
const nRLEO: _enum_for_RATType.nRLEO = RATType.nRLEO; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_nRMEO: _enum_for_RATType.nRMEO = RATType.nRMEO; /* LONG_NAMED_ENUMERATED_VALUE */

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
const nRMEO: _enum_for_RATType.nRMEO = RATType.nRMEO; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_nRGEO: _enum_for_RATType.nRGEO = RATType.nRGEO; /* LONG_NAMED_ENUMERATED_VALUE */

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
const nRGEO: _enum_for_RATType.nRGEO = RATType.nRGEO; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_nROTHERSAT: _enum_for_RATType.nROTHERSAT = RATType.nROTHERSAT; /* LONG_NAMED_ENUMERATED_VALUE */

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
const nROTHERSAT: _enum_for_RATType.nROTHERSAT = RATType.nROTHERSAT; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_nRREDCAP: _enum_for_RATType.nRREDCAP = RATType.nRREDCAP; /* LONG_NAMED_ENUMERATED_VALUE */

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
const nRREDCAP: _enum_for_RATType.nRREDCAP = RATType.nRREDCAP; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_wBEUTRANLEO: _enum_for_RATType.wBEUTRANLEO = RATType.wBEUTRANLEO; /* LONG_NAMED_ENUMERATED_VALUE */

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
const wBEUTRANLEO: _enum_for_RATType.wBEUTRANLEO = RATType.wBEUTRANLEO; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_wBEUTRANMEO: _enum_for_RATType.wBEUTRANMEO = RATType.wBEUTRANMEO; /* LONG_NAMED_ENUMERATED_VALUE */

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
const wBEUTRANMEO: _enum_for_RATType.wBEUTRANMEO = RATType.wBEUTRANMEO; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_wBEUTRANGEO: _enum_for_RATType.wBEUTRANGEO = RATType.wBEUTRANGEO; /* LONG_NAMED_ENUMERATED_VALUE */

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
const wBEUTRANGEO: _enum_for_RATType.wBEUTRANGEO = RATType.wBEUTRANGEO; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_wBEUTRANOTHERSAT: _enum_for_RATType.wBEUTRANOTHERSAT = RATType.wBEUTRANOTHERSAT; /* LONG_NAMED_ENUMERATED_VALUE */

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
const wBEUTRANOTHERSAT: _enum_for_RATType.wBEUTRANOTHERSAT = RATType.wBEUTRANOTHERSAT; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_nBIOTLEO: _enum_for_RATType.nBIOTLEO = RATType.nBIOTLEO; /* LONG_NAMED_ENUMERATED_VALUE */

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
const nBIOTLEO: _enum_for_RATType.nBIOTLEO = RATType.nBIOTLEO; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_nBIOTMEO: _enum_for_RATType.nBIOTMEO = RATType.nBIOTMEO; /* LONG_NAMED_ENUMERATED_VALUE */

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
const nBIOTMEO: _enum_for_RATType.nBIOTMEO = RATType.nBIOTMEO; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_nBIOTGEO: _enum_for_RATType.nBIOTGEO = RATType.nBIOTGEO; /* LONG_NAMED_ENUMERATED_VALUE */

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
const nBIOTGEO: _enum_for_RATType.nBIOTGEO = RATType.nBIOTGEO; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_nBIOTOTHERSAT: _enum_for_RATType.nBIOTOTHERSAT = RATType.nBIOTOTHERSAT; /* LONG_NAMED_ENUMERATED_VALUE */

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
const nBIOTOTHERSAT: _enum_for_RATType.nBIOTOTHERSAT = RATType.nBIOTOTHERSAT; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_lTEMLEO: _enum_for_RATType.lTEMLEO = RATType.lTEMLEO; /* LONG_NAMED_ENUMERATED_VALUE */

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
const lTEMLEO: _enum_for_RATType.lTEMLEO = RATType.lTEMLEO; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_lTEMMEO: _enum_for_RATType.lTEMMEO = RATType.lTEMMEO; /* LONG_NAMED_ENUMERATED_VALUE */

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
const lTEMMEO: _enum_for_RATType.lTEMMEO = RATType.lTEMMEO; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_lTEMGEO: _enum_for_RATType.lTEMGEO = RATType.lTEMGEO; /* LONG_NAMED_ENUMERATED_VALUE */

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
const lTEMGEO: _enum_for_RATType.lTEMGEO = RATType.lTEMGEO; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_lTEMOTHERSAT: _enum_for_RATType.lTEMOTHERSAT = RATType.lTEMOTHERSAT; /* LONG_NAMED_ENUMERATED_VALUE */

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
const lTEMOTHERSAT: _enum_for_RATType.lTEMOTHERSAT = RATType.lTEMOTHERSAT; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const RATType_nREREDCAP: _enum_for_RATType.nREREDCAP = RATType.nREREDCAP; /* LONG_NAMED_ENUMERATED_VALUE */

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
const nREREDCAP: _enum_for_RATType.nREREDCAP = RATType.nREREDCAP; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RATType: $.ASN1Decoder<RATType> = $._decodeEnumerated;
export const _encode_RATType: $.ASN1Encoder<RATType> = $._encodeEnumerated;


/* eslint-enable */
