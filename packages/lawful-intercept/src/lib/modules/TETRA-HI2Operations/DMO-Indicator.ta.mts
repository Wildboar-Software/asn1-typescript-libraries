/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_DMO_Indicator {
    /**
     * The specification gives the name and no further behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.7, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    dMOSTATETUNKNOWNC = 0,
    /**
     * The specification gives the name and no further behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.7, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    dMOSTATETTMOC = 1,
    /**
     * The specification gives the name and no further behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.7, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    dMOSTATETDMOC = 2,
    /**
     * The specification gives the name and no further behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.7, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    dMOSTATETIDLEDUALWATCHC = 3,
    /**
     * The specification gives the name and no further behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.7, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    dMOSTATETFULLDUALWATCHC = 4,
    /**
     * The specification gives the name and no further behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.7, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    dMOSTATETTXINHIBITC = 5,
}

/**
 * @summary DMO_Indicator
 * @description
 * 
 * Direct Mode state reported with the DMO event. Annex A.9.2.1.4.7 requires the
 * indicator on that REPORT. The event tells the LEA that the observed party has
 * entered radio communications which the TETRA switch cannot observe. The
 * module gives each value a name and no further behaviour. An extension marker
 * follows the named values.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.7, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DMO-Indicator  ::=  ENUMERATED
 * {
 *     dMOSTATETUNKNOWNC(0),
 *     dMOSTATETTMOC(1),
 *     dMOSTATETDMOC(2),
 *     dMOSTATETIDLEDUALWATCHC(3),
 *     dMOSTATETFULLDUALWATCHC(4),
 *     dMOSTATETTXINHIBITC(5),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type DMO_Indicator = _enum_for_DMO_Indicator | ENUMERATED;

/**
 * @summary DMO_Indicator_dMOSTATETUNKNOWNC
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.7, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const DMO_Indicator_dMOSTATETUNKNOWNC: DMO_Indicator = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dMOSTATETUNKNOWNC
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.7, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const dMOSTATETUNKNOWNC: DMO_Indicator = DMO_Indicator_dMOSTATETUNKNOWNC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DMO_Indicator_dMOSTATETTMOC
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.7, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const DMO_Indicator_dMOSTATETTMOC: DMO_Indicator = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dMOSTATETTMOC
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.7, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const dMOSTATETTMOC: DMO_Indicator = DMO_Indicator_dMOSTATETTMOC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DMO_Indicator_dMOSTATETDMOC
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.7, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const DMO_Indicator_dMOSTATETDMOC: DMO_Indicator = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dMOSTATETDMOC
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.7, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const dMOSTATETDMOC: DMO_Indicator = DMO_Indicator_dMOSTATETDMOC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DMO_Indicator_dMOSTATETIDLEDUALWATCHC
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.7, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const DMO_Indicator_dMOSTATETIDLEDUALWATCHC: DMO_Indicator = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dMOSTATETIDLEDUALWATCHC
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.7, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const dMOSTATETIDLEDUALWATCHC: DMO_Indicator = DMO_Indicator_dMOSTATETIDLEDUALWATCHC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DMO_Indicator_dMOSTATETFULLDUALWATCHC
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.7, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const DMO_Indicator_dMOSTATETFULLDUALWATCHC: DMO_Indicator = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dMOSTATETFULLDUALWATCHC
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.7, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const dMOSTATETFULLDUALWATCHC: DMO_Indicator = DMO_Indicator_dMOSTATETFULLDUALWATCHC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DMO_Indicator_dMOSTATETTXINHIBITC
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.7, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const DMO_Indicator_dMOSTATETTXINHIBITC: DMO_Indicator = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dMOSTATETTXINHIBITC
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.7, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const dMOSTATETTXINHIBITC: DMO_Indicator = DMO_Indicator_dMOSTATETTXINHIBITC; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_DMO_Indicator: $.ASN1Decoder<DMO_Indicator> = $._decodeEnumerated;
export const _encode_DMO_Indicator: $.ASN1Encoder<DMO_Indicator> = $._encodeEnumerated;


/* eslint-enable */
