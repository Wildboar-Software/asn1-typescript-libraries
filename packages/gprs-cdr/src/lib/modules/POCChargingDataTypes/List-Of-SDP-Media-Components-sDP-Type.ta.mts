/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary List_Of_SDP_Media_Components_sDP_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * List-Of-SDP-Media-Components-sDP-Type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_List_Of_SDP_Media_Components_sDP_Type {
    sDP_offer = 0,
    sDP_answer = 1,
}

/**
 * @summary List_Of_SDP_Media_Components_sDP_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * List-Of-SDP-Media-Components-sDP-Type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type List_Of_SDP_Media_Components_sDP_Type = _enum_for_List_Of_SDP_Media_Components_sDP_Type;

/**
 * @summary List_Of_SDP_Media_Components_sDP_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * List-Of-SDP-Media-Components-sDP-Type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const List_Of_SDP_Media_Components_sDP_Type = _enum_for_List_Of_SDP_Media_Components_sDP_Type;

/**
 * @summary List_Of_SDP_Media_Components_sDP_Type_sDP_offer
 * @constant
 * @type {number}
 */
export
const List_Of_SDP_Media_Components_sDP_Type_sDP_offer: List_Of_SDP_Media_Components_sDP_Type = List_Of_SDP_Media_Components_sDP_Type.sDP_offer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDP_offer
 * @constant
 * @type {number}
 */
export
const sDP_offer: List_Of_SDP_Media_Components_sDP_Type = List_Of_SDP_Media_Components_sDP_Type.sDP_offer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary List_Of_SDP_Media_Components_sDP_Type_sDP_answer
 * @constant
 * @type {number}
 */
export
const List_Of_SDP_Media_Components_sDP_Type_sDP_answer: List_Of_SDP_Media_Components_sDP_Type = List_Of_SDP_Media_Components_sDP_Type.sDP_answer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDP_answer
 * @constant
 * @type {number}
 */
export
const sDP_answer: List_Of_SDP_Media_Components_sDP_Type = List_Of_SDP_Media_Components_sDP_Type.sDP_answer; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_List_Of_SDP_Media_Components_sDP_Type: $.ASN1Decoder<List_Of_SDP_Media_Components_sDP_Type> = $._decodeEnumerated;

export
const _encode_List_Of_SDP_Media_Components_sDP_Type: $.ASN1Encoder<List_Of_SDP_Media_Components_sDP_Type> = $._encodeEnumerated;

/* eslint-enable */
