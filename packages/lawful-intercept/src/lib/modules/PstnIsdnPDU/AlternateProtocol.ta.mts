/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_AlternateProtocol {
    uDPTL = 1,
}

/**
 * @summary AlternateProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlternateProtocol  ::=  ENUMERATED
 * {
 *     uDPTL(1),
 *         -- pstnIsdnCCContents parameter contains UDPTL packets
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AlternateProtocol = _enum_for_AlternateProtocol | ENUMERATED;

/**
 * @summary AlternateProtocol_uDPTL
 * @constant
 * @type {number}
 */
export
const AlternateProtocol_uDPTL: AlternateProtocol = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uDPTL
 * @constant
 * @type {number}
 */
export
const uDPTL: AlternateProtocol = AlternateProtocol_uDPTL; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AlternateProtocol: $.ASN1Decoder<AlternateProtocol> = $._decodeEnumerated;
export const _encode_AlternateProtocol: $.ASN1Encoder<AlternateProtocol> = $._encodeEnumerated;


/* eslint-enable */
