/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary _enum_for_IPAddress_iP_type
 * @description
 *
 * Whether `IPAddress` holds an IPv4 or an IPv6 value. The module assigns no
 * further coding. A binary IPv6 value makes `iPv6PrefixLength` mandatory.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex A, clause A.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @enum {number}
 */
export
enum _enum_for_IPAddress_iP_type {
    /**
     * IPv4. A binary value is 4 octets and may carry `iPv4SubnetMask`.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex A, clause A.2.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    iPV4 = 0,
    /**
     * IPv6. A binary value carries `iPv6PrefixLength`, and that length is
     * mandatory.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex A, clause A.2.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    iPV6 = 1,
}

/**
 * @summary IPAddress_iP_type
 * @description
 * 
 * Whether `IPAddress` holds an IPv4 or an IPv6 value. The module assigns no
 * further coding. A binary IPv6 value makes `iPv6PrefixLength` mandatory.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex A, clause A.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
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
 * IPv4. A binary value is 4 octets and may carry `iPv4SubnetMask`.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex A, clause A.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
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
 * IPv4. A binary value is 4 octets and may carry `iPv4SubnetMask`.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex A, clause A.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
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
 * IPv6. A binary value carries `iPv6PrefixLength`, and that length is
 * mandatory.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex A, clause A.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
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
 * IPv6. A binary value carries `iPv6PrefixLength`, and that length is
 * mandatory.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex A, clause A.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const iPV6: IPAddress_iP_type = IPAddress_iP_type_iPV6; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IPAddress_iP_type: $.ASN1Decoder<IPAddress_iP_type> = $._decodeEnumerated;
export const _encode_IPAddress_iP_type: $.ASN1Encoder<IPAddress_iP_type> = $._encodeEnumerated;


/* eslint-enable */
