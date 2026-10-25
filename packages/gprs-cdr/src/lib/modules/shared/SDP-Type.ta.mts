/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SDP_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SDP-Type    ::=  ENUMERATED {
 *    sDP-offer     ( 0 ),
 *    sDP-answer    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SDP_Type {
    sDP_offer = 0,
    sDP_answer = 1,
}

/**
 * @summary SDP_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SDP-Type    ::=  ENUMERATED {
 *    sDP-offer     ( 0 ),
 *    sDP-answer    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type SDP_Type = _enum_for_SDP_Type;

/**
 * @summary SDP_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SDP-Type    ::=  ENUMERATED {
 *    sDP-offer     ( 0 ),
 *    sDP-answer    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const SDP_Type = _enum_for_SDP_Type;

/**
 * @summary SDP_Type_sDP_offer
 * @constant
 * @type {number}
 */
export
const SDP_Type_sDP_offer = SDP_Type.sDP_offer satisfies SDP_Type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDP_offer
 * @constant
 * @type {number}
 */
export
const sDP_offer = SDP_Type.sDP_offer satisfies SDP_Type; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SDP_Type_sDP_answer
 * @constant
 * @type {number}
 */
export
const SDP_Type_sDP_answer = SDP_Type.sDP_answer satisfies SDP_Type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDP_answer
 * @constant
 * @type {number}
 */
export
const sDP_answer = SDP_Type.sDP_answer satisfies SDP_Type; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SDP_Type: $.ASN1Decoder<SDP_Type> = $._decodeEnumerated;

export
const _encode_SDP_Type: $.ASN1Encoder<SDP_Type> = $._encodeEnumerated;

/* eslint-enable */
