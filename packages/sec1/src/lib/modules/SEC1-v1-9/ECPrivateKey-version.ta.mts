/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/* START_OF_SYMBOL_DEFINITION ECPrivateKey_version */
/**
 * @summary ECPrivateKey_version
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECPrivateKey-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ECPrivateKey_version = INTEGER;
/* END_OF_SYMBOL_DEFINITION ECPrivateKey_version */

/* START_OF_SYMBOL_DEFINITION ECPrivateKey_version_ecPrivkeyVer1 */
/**
 * @summary ECPrivateKey_version_ecPrivkeyVer1
 * @constant
 * @type {number}
 */
export
const ECPrivateKey_version_ecPrivkeyVer1: ECPrivateKey_version = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ECPrivateKey_version_ecPrivkeyVer1 */

/* START_OF_SYMBOL_DEFINITION ecPrivkeyVer1 */
/**
 * @summary ECPrivateKey_version_ecPrivkeyVer1
 * @constant
 * @type {number}
 */
export
const ecPrivkeyVer1: ECPrivateKey_version = ECPrivateKey_version_ecPrivkeyVer1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ecPrivkeyVer1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ECPrivateKey_version */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ECPrivateKey_version */

/* START_OF_SYMBOL_DEFINITION _decode_ECPrivateKey_version */
export const _decode_ECPrivateKey_version = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ECPrivateKey_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ECPrivateKey_version */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ECPrivateKey_version */

/* START_OF_SYMBOL_DEFINITION _encode_ECPrivateKey_version */
export const _encode_ECPrivateKey_version = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ECPrivateKey_version */

/* eslint-enable */
