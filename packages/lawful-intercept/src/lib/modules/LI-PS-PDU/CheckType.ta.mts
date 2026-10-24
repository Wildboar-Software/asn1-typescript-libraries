/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary _enum_for_CheckType
 * @description
 *
 * Whether an integrity-check PDU carries a hash of DataPDUs or a signature of
 * earlier hashes. See annex J.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @enum {number}
 */
export
enum _enum_for_CheckType {
    /**
     * A Secure Hash Algorithm digest (FIPS PUB 180-4) over the DataPDUs listed
     * in `includedSequenceNumbers`. The SHA variant is a national choice.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.1.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    hash = 1,
    /**
     * A DSS/DSA signature (FIPS PUB 186-4) over the hashes listed in
     * `includedSequenceNumbers`. Parameter sizes and the SHA used for DSA are a
     * national choice. Key generation and distribution are out of scope. The
     * signature encoding may be the structure in IETF RFC 3279, clause 2.2.2.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.1.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    signature = 2,
}

/**
 * @summary CheckType
 * @description
 * 
 * Whether an integrity-check PDU carries a hash of DataPDUs or a signature of
 * earlier hashes. See annex J.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CheckType  ::=  ENUMERATED
 * {
 *     hash(1),
 *         -- hash value
 *     signature(2),
 *         -- DSS/DSA signature
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CheckType = _enum_for_CheckType | ENUMERATED;

/**
 * @summary CheckType_hash
 * @description
 *
 * A Secure Hash Algorithm digest (FIPS PUB 180-4) over the DataPDUs listed in
 * `includedSequenceNumbers`. The SHA variant is a national choice.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const CheckType_hash: CheckType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hash
 * @description
 *
 * A Secure Hash Algorithm digest (FIPS PUB 180-4) over the DataPDUs listed in
 * `includedSequenceNumbers`. The SHA variant is a national choice.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const hash: CheckType = CheckType_hash; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CheckType_signature
 * @description
 *
 * A DSS/DSA signature (FIPS PUB 186-4) over the hashes listed in
 * `includedSequenceNumbers`. Parameter sizes and the SHA used for DSA are a
 * national choice. Key generation and distribution are out of scope. The
 * signature encoding may be the structure in IETF RFC 3279, clause 2.2.2.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const CheckType_signature: CheckType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary signature
 * @description
 *
 * A DSS/DSA signature (FIPS PUB 186-4) over the hashes listed in
 * `includedSequenceNumbers`. Parameter sizes and the SHA used for DSA are a
 * national choice. Key generation and distribution are out of scope. The
 * signature encoding may be the structure in IETF RFC 3279, clause 2.2.2.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const signature: CheckType = CheckType_signature; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CheckType: $.ASN1Decoder<CheckType> = $._decodeEnumerated;
export const _encode_CheckType: $.ASN1Encoder<CheckType> = $._encodeEnumerated;


/* eslint-enable */
