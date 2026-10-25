/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary _enum_for_HashAlgorithm
 * @description
 *
 * SHA used for an integrity hash (FIPS PUB 180-4). The choice among these
 * values is national. When the field is used it is present on every hash.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @enum {number}
 */
export
enum _enum_for_HashAlgorithm {
    /**
     * SHA-1. The module includes it for legacy and migration only, and says it
     * is not to be used for new implementations.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.1.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    sHA_1 = 1,
    /**
     * SHA-256.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.1.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    sHA_256 = 2,
    /**
     * SHA-384.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.1.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    sHA_384 = 3,
    /**
     * SHA-512.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.1.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    sHA_512 = 4,
}

/**
 * @summary HashAlgorithm
 * @description
 * 
 * SHA used for an integrity hash (FIPS PUB 180-4). The choice among these
 * values is national. When the field is used it is present on every hash.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HashAlgorithm  ::=  ENUMERATED
 * {
 *     sHA-1(1),
 *         -- Included for legacy/migration purposes only, not to be used for new implementations
 *     sHA-256(2),
 *     sHA-384(3),
 *     sHA-512(4),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type HashAlgorithm = _enum_for_HashAlgorithm | ENUMERATED;

/**
 * @summary HashAlgorithm_sHA_1
 * @description
 *
 * SHA-1. The module includes it for legacy and migration only, and says it is
 * not to be used for new implementations.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const HashAlgorithm_sHA_1: _enum_for_HashAlgorithm.sHA_1 = _enum_for_HashAlgorithm.sHA_1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sHA_1
 * @description
 *
 * SHA-1. The module includes it for legacy and migration only, and says it is
 * not to be used for new implementations.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const sHA_1: _enum_for_HashAlgorithm.sHA_1 = HashAlgorithm_sHA_1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HashAlgorithm_sHA_256
 * @description
 *
 * SHA-256.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const HashAlgorithm_sHA_256: _enum_for_HashAlgorithm.sHA_256 = _enum_for_HashAlgorithm.sHA_256; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sHA_256
 * @description
 *
 * SHA-256.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const sHA_256: _enum_for_HashAlgorithm.sHA_256 = HashAlgorithm_sHA_256; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HashAlgorithm_sHA_384
 * @description
 *
 * SHA-384.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const HashAlgorithm_sHA_384: _enum_for_HashAlgorithm.sHA_384 = _enum_for_HashAlgorithm.sHA_384; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sHA_384
 * @description
 *
 * SHA-384.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const sHA_384: _enum_for_HashAlgorithm.sHA_384 = HashAlgorithm_sHA_384; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HashAlgorithm_sHA_512
 * @description
 *
 * SHA-512.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const HashAlgorithm_sHA_512: _enum_for_HashAlgorithm.sHA_512 = _enum_for_HashAlgorithm.sHA_512; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sHA_512
 * @description
 *
 * SHA-512.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const sHA_512: _enum_for_HashAlgorithm.sHA_512 = HashAlgorithm_sHA_512; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_HashAlgorithm: $.ASN1Decoder<HashAlgorithm> = $._decodeEnumerated;
export const _encode_HashAlgorithm: $.ASN1Encoder<HashAlgorithm> = $._encodeEnumerated;


/* eslint-enable */
