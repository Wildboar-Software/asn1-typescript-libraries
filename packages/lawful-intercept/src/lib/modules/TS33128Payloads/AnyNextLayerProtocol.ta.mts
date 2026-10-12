/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
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
const AnyNextLayerProtocol_ip: AnyNextLayerProtocol = AnyNextLayerProtocol.ip; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ip
 * @constant
 * @type {number}
 */
export
const ip: AnyNextLayerProtocol = AnyNextLayerProtocol.ip; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AnyNextLayerProtocol: $.ASN1Decoder<AnyNextLayerProtocol> = $._decodeEnumerated;
export const _encode_AnyNextLayerProtocol: $.ASN1Encoder<AnyNextLayerProtocol> = $._encodeEnumerated;


/* eslint-enable */
