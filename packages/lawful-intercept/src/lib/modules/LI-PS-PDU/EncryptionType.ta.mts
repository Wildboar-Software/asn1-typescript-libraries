/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary _enum_for_EncryptionType
 * @description
 *
 * Cipher used on `encryptedPayload`. National agreement picks the scheme and
 * the key management. Annex G fixes the IV for the CBC algorithms: the 32-bit
 * unsigned header `sequenceNumber`, concatenated four times for a 128-bit IV
 * and twice for a 64-bit IV. Padding, when the cipher needs it, is all zeros.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G, clause 6.2.6.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @enum {number}
 */
export
enum _enum_for_EncryptionType {
    /**
     * No encryption. Annex G uses this value on the PS-PDU that is DER-encoded
     * and digested, before the payload octets are encrypted and this field is
     * set to the real cipher.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G, clause 6.2.6.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    none = 1,
    /**
     * An encryption scheme agreed nationally. Annex G does not define an IV for
     * this value.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G, clause 6.2.6.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    national_option = 2,
    /**
     * AES with a 192-bit key in CBC mode. The IV is 128 bits: the header
     * sequence number concatenated four times.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G, clause 6.2.6.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    aES_192_CBC = 3,
    /**
     * AES with a 256-bit key in CBC mode. The IV is 128 bits: the header
     * sequence number concatenated four times.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G, clause 6.2.6.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    aES_256_CBC = 4,
    /**
     * Blowfish with a 192-bit key in CBC mode. The module points at the
     * Blowfish description published by Schneier. The IV is 64 bits: the header
     * sequence number concatenated twice.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G, clause 6.2.6.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    blowfish_192_CBC = 5,
    /**
     * Blowfish with a 256-bit key in CBC mode. The IV is 64 bits: the header
     * sequence number concatenated twice.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G, clause 6.2.6.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    blowfish_256_CBC = 6,
    /**
     * Triple-DES with a 192-bit key in CBC mode. The IV is 64 bits: the header
     * sequence number concatenated twice.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G, clause 6.2.6.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    threedes_cbc = 7,
}

/**
 * @summary EncryptionType
 * @description
 * 
 * Cipher used on `encryptedPayload`. National agreement picks the scheme and
 * the key management. Annex G fixes the IV for the CBC algorithms: the 32-bit
 * unsigned header `sequenceNumber`, concatenated four times for a 128-bit IV
 * and twice for a 64-bit IV. Padding, when the cipher needs it, is all zeros.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G, clause 6.2.6.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncryptionType  ::=  ENUMERATED
 * {
 *     none(1),
 *         -- No encryption is applied.
 *     national-option(2),
 *         -- Use this option when an encryption scheme is negotiated on a national level
 *     aES-192-CBC(3),
 *         -- The Advanced Encryption Standard using a 192 bit key in CBC mode
 *     aES-256-CBC(4),
 *         -- The Advanced Encryption Standard using a 256 bit key in CBC mode
 *     blowfish-192-CBC(5),
 *         -- Blowfish (www.schneier.com/blowfish.html) using a 192 bit key in CBC mode
 *     blowfish-256-CBC(6),
 *         -- Blowfish using a 256 bit key in CBC mode
 *     threedes-cbc(7),
 *         -- Triple-DES using a 192 bit key in CBC mode
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EncryptionType = _enum_for_EncryptionType | ENUMERATED;

/**
 * @summary EncryptionType_none
 * @description
 *
 * No encryption. Annex G uses this value on the PS-PDU that is DER-encoded and
 * digested, before the payload octets are encrypted and this field is set to
 * the real cipher.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G, clause 6.2.6.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const EncryptionType_none: EncryptionType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @description
 *
 * No encryption. Annex G uses this value on the PS-PDU that is DER-encoded and
 * digested, before the payload octets are encrypted and this field is set to
 * the real cipher.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G, clause 6.2.6.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const none: EncryptionType = EncryptionType_none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EncryptionType_national_option
 * @description
 *
 * An encryption scheme agreed nationally. Annex G does not define an IV for
 * this value.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G, clause 6.2.6.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const EncryptionType_national_option: EncryptionType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary national_option
 * @description
 *
 * An encryption scheme agreed nationally. Annex G does not define an IV for
 * this value.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G, clause 6.2.6.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const national_option: EncryptionType = EncryptionType_national_option; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EncryptionType_aES_192_CBC
 * @description
 *
 * AES with a 192-bit key in CBC mode. The IV is 128 bits: the header sequence
 * number concatenated four times.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G, clause 6.2.6.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const EncryptionType_aES_192_CBC: EncryptionType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aES_192_CBC
 * @description
 *
 * AES with a 192-bit key in CBC mode. The IV is 128 bits: the header sequence
 * number concatenated four times.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G, clause 6.2.6.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const aES_192_CBC: EncryptionType = EncryptionType_aES_192_CBC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EncryptionType_aES_256_CBC
 * @description
 *
 * AES with a 256-bit key in CBC mode. The IV is 128 bits: the header sequence
 * number concatenated four times.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G, clause 6.2.6.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const EncryptionType_aES_256_CBC: EncryptionType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aES_256_CBC
 * @description
 *
 * AES with a 256-bit key in CBC mode. The IV is 128 bits: the header sequence
 * number concatenated four times.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G, clause 6.2.6.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const aES_256_CBC: EncryptionType = EncryptionType_aES_256_CBC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EncryptionType_blowfish_192_CBC
 * @description
 *
 * Blowfish with a 192-bit key in CBC mode. The module points at the Blowfish
 * description published by Schneier. The IV is 64 bits: the header sequence
 * number concatenated twice.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G, clause 6.2.6.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const EncryptionType_blowfish_192_CBC: EncryptionType = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary blowfish_192_CBC
 * @description
 *
 * Blowfish with a 192-bit key in CBC mode. The module points at the Blowfish
 * description published by Schneier. The IV is 64 bits: the header sequence
 * number concatenated twice.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G, clause 6.2.6.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const blowfish_192_CBC: EncryptionType = EncryptionType_blowfish_192_CBC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EncryptionType_blowfish_256_CBC
 * @description
 *
 * Blowfish with a 256-bit key in CBC mode. The IV is 64 bits: the header
 * sequence number concatenated twice.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G, clause 6.2.6.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const EncryptionType_blowfish_256_CBC: EncryptionType = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary blowfish_256_CBC
 * @description
 *
 * Blowfish with a 256-bit key in CBC mode. The IV is 64 bits: the header
 * sequence number concatenated twice.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G, clause 6.2.6.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const blowfish_256_CBC: EncryptionType = EncryptionType_blowfish_256_CBC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EncryptionType_threedes_cbc
 * @description
 *
 * Triple-DES with a 192-bit key in CBC mode. The IV is 64 bits: the header
 * sequence number concatenated twice.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G, clause 6.2.6.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const EncryptionType_threedes_cbc: EncryptionType = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary threedes_cbc
 * @description
 *
 * Triple-DES with a 192-bit key in CBC mode. The IV is 64 bits: the header
 * sequence number concatenated twice.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G, clause 6.2.6.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const threedes_cbc: EncryptionType = EncryptionType_threedes_cbc; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EncryptionType: $.ASN1Decoder<EncryptionType> = $._decodeEnumerated;
export const _encode_EncryptionType: $.ASN1Encoder<EncryptionType> = $._encodeEnumerated;


/* eslint-enable */
