/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary _enum_for_IPAddress_iP_type
 * @description
 *
 * Address family of the IP value: IPv4 or IPv6. The module names those two
 * values and states no further coding.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @enum {number}
 */
export
enum _enum_for_IPAddress_iP_type {
    /**
     * IPv4. The module states no further coding for this name.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    iPV4 = 0,
    /**
     * IPv6. The module states no further coding for this name.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    iPV6 = 1,
}

/**
 * @summary IPAddress_iP_type
 * @description
 *
 * Address family of the IP value: IPv4 or IPv6. The module names those two
 * values and states no further coding.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPAddress-iP-type ::= ENUMERATED {
 *     iPV4(0),
 *     iPV6(1),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IPAddress_iP_type = _enum_for_IPAddress_iP_type | ENUMERATED;

/**
 * @summary IPAddress_iP_type_iPV4
 * @description
 *
 * IPv4. The module states no further coding for this name.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IPAddress_iP_type_iPV4: IPAddress_iP_type = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPV4
 * @description
 *
 * IPv4. The module states no further coding for this name.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const iPV4: IPAddress_iP_type = IPAddress_iP_type_iPV4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPAddress_iP_type_iPV6
 * @description
 *
 * IPv6. The module states no further coding for this name.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IPAddress_iP_type_iPV6: IPAddress_iP_type = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPV6
 * @description
 *
 * IPv6. The module states no further coding for this name.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const iPV6: IPAddress_iP_type = IPAddress_iP_type_iPV6; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IPAddress_iP_type: $.ASN1Decoder<IPAddress_iP_type> = $._decodeEnumerated;
export const _encode_IPAddress_iP_type: $.ASN1Encoder<IPAddress_iP_type> = $._encodeEnumerated;


/* eslint-enable */
