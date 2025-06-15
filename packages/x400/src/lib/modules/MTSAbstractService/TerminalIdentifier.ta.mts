/* eslint-disable */
import {
    PrintableString,
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

/* START_OF_SYMBOL_DEFINITION TerminalIdentifier */
/**
 * @summary TerminalIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminalIdentifier  ::=  PrintableString(SIZE (1..ub-terminal-id-length))
 * ```
 */
export type TerminalIdentifier = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION TerminalIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminalIdentifier */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminalIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_TerminalIdentifier */
export const _decode_TerminalIdentifier = $._decodePrintableString;
/* END_OF_SYMBOL_DEFINITION _decode_TerminalIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminalIdentifier */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminalIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_TerminalIdentifier */
export const _encode_TerminalIdentifier = $._encodePrintableString;

/* END_OF_SYMBOL_DEFINITION _encode_TerminalIdentifier */

/* eslint-enable */
