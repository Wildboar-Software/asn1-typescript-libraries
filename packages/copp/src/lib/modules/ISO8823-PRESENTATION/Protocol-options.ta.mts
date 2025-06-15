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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';


/**
 * @summary Protocol_options
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Protocol-options  ::=  BIT STRING {
 *   nominated-context(0), short-encoding(1), packed-encoding-rules(2)}
 * ```
 */
export type Protocol_options = BIT_STRING;


/**
 * @summary Protocol_options_nominated_context
 * @constant
 */
export const Protocol_options_nominated_context: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary nominated_context
 * @constant
 */
export const nominated_context: number = Protocol_options_nominated_context; /* SHORT_NAMED_BIT */


/**
 * @summary Protocol_options_short_encoding
 * @constant
 */
export const Protocol_options_short_encoding: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary short_encoding
 * @constant
 */
export const short_encoding: number = Protocol_options_short_encoding; /* SHORT_NAMED_BIT */


/**
 * @summary Protocol_options_packed_encoding_rules
 * @constant
 */
export const Protocol_options_packed_encoding_rules: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary packed_encoding_rules
 * @constant
 */
export const packed_encoding_rules: number = Protocol_options_packed_encoding_rules; /* SHORT_NAMED_BIT */




export const _decode_Protocol_options = $._decodeBitString;




export const _encode_Protocol_options = $._encodeBitString;


/* eslint-enable */
