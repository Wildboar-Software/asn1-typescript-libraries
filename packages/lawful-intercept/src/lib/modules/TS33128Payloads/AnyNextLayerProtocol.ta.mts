/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AnyNextLayerProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnyNextLayerProtocol  ::=  ENUMERATED
 * {
 *     ip(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AnyNextLayerProtocol {
    ip = 1,
}

/**
 * @summary AnyNextLayerProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnyNextLayerProtocol  ::=  ENUMERATED
 * {
 *     ip(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AnyNextLayerProtocol = _enum_for_AnyNextLayerProtocol;

/**
 * @summary AnyNextLayerProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnyNextLayerProtocol  ::=  ENUMERATED
 * {
 *     ip(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AnyNextLayerProtocol = _enum_for_AnyNextLayerProtocol;

/**
 * @summary AnyNextLayerProtocol_ip
 * @constant
 * @type {number}
 */
export
const AnyNextLayerProtocol_ip = AnyNextLayerProtocol.ip satisfies AnyNextLayerProtocol; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ip
 * @constant
 * @type {number}
 */
export
const ip = AnyNextLayerProtocol.ip satisfies AnyNextLayerProtocol; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AnyNextLayerProtocol: $.ASN1Decoder<AnyNextLayerProtocol> = $._decodeEnumerated;
export const _encode_AnyNextLayerProtocol: $.ASN1Encoder<AnyNextLayerProtocol> = $._encodeEnumerated;


/* eslint-enable */
