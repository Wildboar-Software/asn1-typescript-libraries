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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/* START_OF_SYMBOL_DEFINITION CertPolicyFlags */
/**
 * @summary CertPolicyFlags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertPolicyFlags  ::=  BIT STRING {
 *     inhibitPolicyMapping    (0),
 *     requireExplicitPolicy   (1),
 *     inhibitAnyPolicy        (2) }
 * ```
 */
export
type CertPolicyFlags = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION CertPolicyFlags */

/* START_OF_SYMBOL_DEFINITION CertPolicyFlags_inhibitPolicyMapping */
/**
 * @summary CertPolicyFlags_inhibitPolicyMapping
 * @constant
 */
export
const CertPolicyFlags_inhibitPolicyMapping: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CertPolicyFlags_inhibitPolicyMapping */

/* START_OF_SYMBOL_DEFINITION inhibitPolicyMapping */
/**
 * @summary inhibitPolicyMapping
 * @constant
 */
export
const inhibitPolicyMapping: number = CertPolicyFlags_inhibitPolicyMapping; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION inhibitPolicyMapping */

/* START_OF_SYMBOL_DEFINITION CertPolicyFlags_requireExplicitPolicy */
/**
 * @summary CertPolicyFlags_requireExplicitPolicy
 * @constant
 */
export
const CertPolicyFlags_requireExplicitPolicy: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CertPolicyFlags_requireExplicitPolicy */

/* START_OF_SYMBOL_DEFINITION requireExplicitPolicy */
/**
 * @summary requireExplicitPolicy
 * @constant
 */
export
const requireExplicitPolicy: number = CertPolicyFlags_requireExplicitPolicy; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION requireExplicitPolicy */

/* START_OF_SYMBOL_DEFINITION CertPolicyFlags_inhibitAnyPolicy */
/**
 * @summary CertPolicyFlags_inhibitAnyPolicy
 * @constant
 */
export
const CertPolicyFlags_inhibitAnyPolicy: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CertPolicyFlags_inhibitAnyPolicy */

/* START_OF_SYMBOL_DEFINITION inhibitAnyPolicy */
/**
 * @summary inhibitAnyPolicy
 * @constant
 */
export
const inhibitAnyPolicy: number = CertPolicyFlags_inhibitAnyPolicy; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION inhibitAnyPolicy */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertPolicyFlags */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertPolicyFlags */

/* START_OF_SYMBOL_DEFINITION _decode_CertPolicyFlags */
export const _decode_CertPolicyFlags = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_CertPolicyFlags */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertPolicyFlags */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertPolicyFlags */

/* START_OF_SYMBOL_DEFINITION _encode_CertPolicyFlags */
export const _encode_CertPolicyFlags = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_CertPolicyFlags */

/* eslint-enable */
