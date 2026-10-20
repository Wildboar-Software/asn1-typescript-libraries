/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BearerServiceDescription_sDP_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BearerServiceDescription-sDP-Type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_BearerServiceDescription_sDP_Type {
    sDP_offer = 0,
    sDP_answer = 1,
}

/**
 * @summary BearerServiceDescription_sDP_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BearerServiceDescription-sDP-Type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type BearerServiceDescription_sDP_Type = _enum_for_BearerServiceDescription_sDP_Type;

/**
 * @summary BearerServiceDescription_sDP_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BearerServiceDescription-sDP-Type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const BearerServiceDescription_sDP_Type = _enum_for_BearerServiceDescription_sDP_Type;

/**
 * @summary BearerServiceDescription_sDP_Type_sDP_offer
 * @constant
 * @type {number}
 */
export
const BearerServiceDescription_sDP_Type_sDP_offer: BearerServiceDescription_sDP_Type = BearerServiceDescription_sDP_Type.sDP_offer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDP_offer
 * @constant
 * @type {number}
 */
export
const sDP_offer: BearerServiceDescription_sDP_Type = BearerServiceDescription_sDP_Type.sDP_offer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BearerServiceDescription_sDP_Type_sDP_answer
 * @constant
 * @type {number}
 */
export
const BearerServiceDescription_sDP_Type_sDP_answer: BearerServiceDescription_sDP_Type = BearerServiceDescription_sDP_Type.sDP_answer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDP_answer
 * @constant
 * @type {number}
 */
export
const sDP_answer: BearerServiceDescription_sDP_Type = BearerServiceDescription_sDP_Type.sDP_answer; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_BearerServiceDescription_sDP_Type: $.ASN1Decoder<BearerServiceDescription_sDP_Type> = $._decodeEnumerated;

export
const _encode_BearerServiceDescription_sDP_Type: $.ASN1Encoder<BearerServiceDescription_sDP_Type> = $._encodeEnumerated;

/* eslint-enable */
