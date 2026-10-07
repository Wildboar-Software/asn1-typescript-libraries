/* eslint-disable */
import { OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Data
 * @description
 *
 * Sequence of measured values in an ASDU (`seqData`). For the
 * 9-2LE dataset `PhsMeas1`, Figure 5 of the
 * [guideline, R2.1](http://www.tc57wg10.info/downloads/digifspec92ler21040707cb.pdf)
 * packs eight instantaneous values. Each value is a
 * big-endian signed 32-bit magnitude (`instMag.i`) followed
 * by a 4-octet quality vector, in this order (Table 6):
 *
 * 1. Phase A current (`InnATCTR1.Amp`)
 * 2. Phase B current (`InnBTCTR2.Amp`)
 * 3. Phase C current (`InnCTCTR3.Amp`)
 * 4. Neutral current (`InnNTCTR4.Amp`)
 * 5. Phase A voltage (`UnnATVTR1.Vol`)
 * 6. Phase B voltage (`UnnBTVTR2.Vol`)
 * 7. Phase C voltage (`UnnCTVTR3.Vol`)
 * 8. Neutral voltage (`UnnNTVTR4.Vol`)
 *
 * Write the magnitude as an integer: multiply amperes by
 * 1000 and volts by 100. That is `sVC.scaleFactor` 0.001 for
 * current (1 LSB = 1 mA) and 0.01 for voltage (1 LSB = 10 mV).
 * `sVC.offset` is 0 (Table 7, Appendix D).
 *
 * The quality vector is 32 bits, big-endian, so bit 0 is the
 * least significant (rightmost) bit. The first 14 bits apply
 * to the magnitude they follow:
 *
 * - Validity (bits 1 and 0, bit 1 more significant):
 *   `00` good, `01` invalid, `10` reserved,
 *   `11` questionable
 * - Overflow (bit 2): `0` false, `1` true
 * - Out of range (bit 3): `0` false, `1` true
 * - Bad reference (bit 4): `0` false, `1` true
 * - Oscillatory (bit 5): `0` false, `1` true
 * - Failure (bit 6): `0` false, `1` true
 * - Old data (bit 7): `0` false, `1` true
 * - Inconsistent (bit 8): `0` false, `1` true
 * - Inaccurate (bit 9): `0` false, `1` true
 * - Source (bit 10): `0` process, `1` substituted
 * - Test (bit 11): `0` false, `1` true. 9-2LE test mode
 *   still sends frames and sets this bit (clause 7.2.1).
 *   Implementing test mode is optional.
 * - Operator blocked (bit 12): `0` false, `1` true
 * - Derived (bit 13): `0` false, `1` true. False when the
 *   value comes from a real sensor; extra calculation such
 *   as RMS still counts as measured. True when no physical
 *   sensor produced the value and it is combined from other
 *   sensors (clause 6.2.3). A neutral current or voltage
 *   summed from the phase values is derived (clause 7.2.4).
 *
 * The guide does not define the remaining bits.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Data  ::=  OCTET STRING
 * ```
 */
export
type Data = OCTET_STRING; // OctetStringType
export const _decode_Data = $._decodeOctetString;
export const _encode_Data = $._encodeOctetString;


/* eslint-enable */
