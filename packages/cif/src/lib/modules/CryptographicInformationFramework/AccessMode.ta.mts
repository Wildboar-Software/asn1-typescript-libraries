/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessMode
 * @description
 * 
 * `read`/`update`/`execute`/`delete` apply to the object; `attribute` covers
 * changing attributes (e.g. resetting a key retry counter). The PSO and
 * authenticate bits complete `execute` and shall be set together with it.
 * ISO/IEC 7816-15:2016 §8.2.8.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessMode  ::=  BIT STRING {
 *     read        (0),
 *     update      (1),
 *     execute     (2),
 *     delete      (3),
 *     attribute   (4),
 *     pso-cds     (5),
 *     pso-verif   (6),
 *     pso-dec     (7),
 *     pso-enc     (8),
 *     int-auth    (9),
 *     ext-auth    (10)
 * }
 * ```
 */
export
type AccessMode = BIT_STRING;

/**
 * @summary AccessMode_read
 * @description
 * Read the object. ISO/IEC 7816-15:2016 §8.2.8.
 * @constant
 */
export
const AccessMode_read: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary read
 * @constant
 */
export
const read: number = AccessMode_read; /* SHORT_NAMED_BIT */

/**
 * @summary AccessMode_update
 * @description
 * Update the object. ISO/IEC 7816-15:2016 §8.2.8.
 * @constant
 */
export
const AccessMode_update: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary update
 * @constant
 */
export
const update: number = AccessMode_update; /* SHORT_NAMED_BIT */

/**
 * @summary AccessMode_execute
 * @description
 * Execute using the object; combine with PSO / authenticate bits to name the
 * command. ISO/IEC 7816-15:2016 §8.2.8.
 * @constant
 */
export
const AccessMode_execute: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary execute
 * @constant
 */
export
const execute: number = AccessMode_execute; /* SHORT_NAMED_BIT */

/**
 * @summary AccessMode_delete_
 * @description
 * Delete the object. ISO/IEC 7816-15:2016 §8.2.8.
 * @constant
 */
export
const AccessMode_delete_: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary delete_
 * @constant
 */
export
const delete_: number = AccessMode_delete_; /* SHORT_NAMED_BIT */

/**
 * @summary AccessMode_attribute
 * @description
 * Change attributes (e.g. reset retry counter). ISO/IEC 7816-15:2016 §8.2.8.
 * @constant
 */
export
const AccessMode_attribute: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary attribute
 * @constant
 */
export
const attribute: number = AccessMode_attribute; /* SHORT_NAMED_BIT */

/**
 * @summary AccessMode_pso_cds
 * @description
 * PSO COMPUTE DIGITAL SIGNATURE. ISO/IEC 7816-15:2016 §8.2.8.
 * @constant
 */
export
const AccessMode_pso_cds: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary pso_cds
 * @constant
 */
export
const pso_cds: number = AccessMode_pso_cds; /* SHORT_NAMED_BIT */

/**
 * @summary AccessMode_pso_verif
 * @description
 * PSO VERIFY CERTIFICATE. ISO/IEC 7816-15:2016 §8.2.8.
 * @constant
 */
export
const AccessMode_pso_verif: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary pso_verif
 * @constant
 */
export
const pso_verif: number = AccessMode_pso_verif; /* SHORT_NAMED_BIT */

/**
 * @summary AccessMode_pso_dec
 * @description
 * PSO DECIPHER. ISO/IEC 7816-15:2016 §8.2.8.
 * @constant
 */
export
const AccessMode_pso_dec: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary pso_dec
 * @constant
 */
export
const pso_dec: number = AccessMode_pso_dec; /* SHORT_NAMED_BIT */

/**
 * @summary AccessMode_pso_enc
 * @description
 * PSO ENCIPHER. ISO/IEC 7816-15:2016 §8.2.8.
 * @constant
 */
export
const AccessMode_pso_enc: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary pso_enc
 * @constant
 */
export
const pso_enc: number = AccessMode_pso_enc; /* SHORT_NAMED_BIT */

/**
 * @summary AccessMode_int_auth
 * @description
 * INTERNAL AUTHENTICATE. ISO/IEC 7816-15:2016 §8.2.8.
 * @constant
 */
export
const AccessMode_int_auth: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary int_auth
 * @constant
 */
export
const int_auth: number = AccessMode_int_auth; /* SHORT_NAMED_BIT */

/**
 * @summary AccessMode_ext_auth
 * @description
 * EXTERNAL AUTHENTICATE. ISO/IEC 7816-15:2016 §8.2.8.
 * @constant
 */
export
const AccessMode_ext_auth: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary ext_auth
 * @constant
 */
export
const ext_auth: number = AccessMode_ext_auth; /* SHORT_NAMED_BIT */
export const _decode_AccessMode = $._decodeBitString;
export const _encode_AccessMode = $._encodeBitString;


/* eslint-enable */
