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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Protocol_options
 * @description
 *
 * Presentation protocol options negotiated on CP/CPA, independent of
 * presentation FUs (X.226/Amd.1 §5.4 bis, §6.2.6.5). Absent ⇒ none
 * proposed/selected. Named bits:
 *
 * - `nominated-context` (0): each PPM may name one DCS member for
 *   simpler User-data PCI when all PDVs are from that context
 *   (Amd.1 §5.4 bis.1, §6.2.6.6). Independent per direction.
 * - `short-encoding` (1): short form of User data when there is a
 *   single PDV; selected only if both PPMs propose it (Amd.1 §5.4
 *   bis.2, §6.2.6.7).
 * - `packed-encoding-rules` (2): encode PPDUs of §8.2 with PER instead
 *   of BER (Amd.1 §5.4 bis.3, §6.2.6.8).
 *
 * Null-encoding and short-connect are also Amd.1 options but are not
 * named bits here (short-connect does not use CP). Unrecognized bits
 * on CP are ignored (X.226 §8.5.1).
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
 * @description
 *
 * Sender may use simply-encoded User data for PDVs from its nominated
 * context even when the DCS has many members (X.226/Amd.1 §5.4 bis.1).
 *
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
 * @description
 *
 * Short User-data encoding when a PPDU carries a single PDV
 * (X.226/Amd.1 §5.4 bis.2). Selected only if both PPMs propose it.
 *
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
 * @description
 *
 * Encode §8.2 PPDUs with PER (X.226/Amd.1 §5.4 bis.3, §6.2.6.8).
 *
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
