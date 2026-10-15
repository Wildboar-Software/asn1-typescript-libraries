/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @description
 *
 * Application protocol of `pstnIsdnCCContents` when a complete IP frame, UDP
 * frame, or application frame is available and the payload is not RTP. The
 * enumeration is not closed. The only defined value is UDPTL.
 *
 * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.3.2 and annex A.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223206/03.05.01_60/ts_10223206v030501p.pdf
 */
export
enum _enum_for_AlternateProtocol {
    /**
     * `pstnIsdnCCContents` contains UDPTL packets (ITU-T T.38, facsimile over
     * UDP). `mediaFormat` shall be 0, and that value is insignificant to the
     * LEMF.
     *
     * ETSI TS 102 232-6 V3.5.1 (2023-03), clauses 6.2 and 6.3.2, and annex A.
     */
    uDPTL = 1,
}

/**
 * @summary AlternateProtocol
 * @description
 *
 * Application protocol of `pstnIsdnCCContents` when a complete IP frame, UDP
 * frame, or application frame is available and the payload is not RTP. The
 * enumeration is not closed. The only defined value is UDPTL.
 *
 * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.3.2 and annex A.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223206/03.05.01_60/ts_10223206v030501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlternateProtocol  ::=  ENUMERATED
 * {
 *     uDPTL(1),
 *         -- pstnIsdnCCContents parameter contains UDPTL packets
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AlternateProtocol = _enum_for_AlternateProtocol | ENUMERATED;

/**
 * @summary AlternateProtocol_uDPTL
 * @description
 *
 * `pstnIsdnCCContents` contains UDPTL packets (ITU-T T.38, facsimile over
 * UDP). `mediaFormat` shall be 0, and that value is insignificant to the
 * LEMF.
 *
 * ETSI TS 102 232-6 V3.5.1 (2023-03), clauses 6.2 and 6.3.2, and annex A.
 *
 * @constant
 * @type {number}
 */
export
const AlternateProtocol_uDPTL: AlternateProtocol = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uDPTL
 * @description
 *
 * `pstnIsdnCCContents` contains UDPTL packets (ITU-T T.38, facsimile over
 * UDP). `mediaFormat` shall be 0, and that value is insignificant to the
 * LEMF.
 *
 * ETSI TS 102 232-6 V3.5.1 (2023-03), clauses 6.2 and 6.3.2, and annex A.
 *
 * @constant
 * @type {number}
 */
export
const uDPTL: AlternateProtocol = AlternateProtocol_uDPTL; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AlternateProtocol: $.ASN1Decoder<AlternateProtocol> = $._decodeEnumerated;
export const _encode_AlternateProtocol: $.ASN1Encoder<AlternateProtocol> = $._encodeEnumerated;


/* eslint-enable */
