/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BearerServiceDescription_sDP_Type
 * @description
 *
 * Role of this SDP in the offer/answer exchange. TS 32.273 does not
 * define the value. The bearer service description is the session
 * portion of the SDP exchanged between the BM-SC and the UE during
 * notification, carried as IMS Information and specified in
 * TS 32.260.
 *
 * 3GPP TS 32.273 V19.0.0 clause 6.3.1.1 and tables 6.1.3.1.1
 * and 6.1.3.2.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BearerServiceDescription-sDP-Type ::= ENUMERATED {
 *    sDP-offer     ( 0 ),
 *    sDP-answer    ( 1 )
 * }
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
 * Role of this SDP in the offer/answer exchange. TS 32.273 does not
 * define the value. The bearer service description is the session
 * portion of the SDP exchanged between the BM-SC and the UE during
 * notification, carried as IMS Information and specified in
 * TS 32.260.
 *
 * 3GPP TS 32.273 V19.0.0 clause 6.3.1.1 and tables 6.1.3.1.1
 * and 6.1.3.2.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BearerServiceDescription-sDP-Type ::= ENUMERATED {
 *    sDP-offer     ( 0 ),
 *    sDP-answer    ( 1 )
 * }
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
 * Role of this SDP in the offer/answer exchange. TS 32.273 does not
 * define the value. The bearer service description is the session
 * portion of the SDP exchanged between the BM-SC and the UE during
 * notification, carried as IMS Information and specified in
 * TS 32.260.
 *
 * 3GPP TS 32.273 V19.0.0 clause 6.3.1.1 and tables 6.1.3.1.1
 * and 6.1.3.2.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BearerServiceDescription-sDP-Type ::= ENUMERATED {
 *    sDP-offer     ( 0 ),
 *    sDP-answer    ( 1 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
const BearerServiceDescription_sDP_Type = _enum_for_BearerServiceDescription_sDP_Type;

/**
 * @summary BearerServiceDescription_sDP_Type_sDP_offer
 * @description
 *
 * SDP offer. TS 32.273 does not define this value; the bearer SDP
 * is IMS Information specified in TS 32.260.
 *
 * 3GPP TS 32.273 V19.0.0 clause 6.3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const BearerServiceDescription_sDP_Type_sDP_offer: BearerServiceDescription_sDP_Type = BearerServiceDescription_sDP_Type.sDP_offer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDP_offer
 * @description
 *
 * SDP offer. TS 32.273 does not define this value; the bearer SDP
 * is IMS Information specified in TS 32.260.
 *
 * 3GPP TS 32.273 V19.0.0 clause 6.3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const sDP_offer: BearerServiceDescription_sDP_Type = BearerServiceDescription_sDP_Type.sDP_offer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BearerServiceDescription_sDP_Type_sDP_answer
 * @description
 *
 * SDP answer. TS 32.273 does not define this value; the bearer SDP
 * is IMS Information specified in TS 32.260.
 *
 * 3GPP TS 32.273 V19.0.0 clause 6.3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const BearerServiceDescription_sDP_Type_sDP_answer: BearerServiceDescription_sDP_Type = BearerServiceDescription_sDP_Type.sDP_answer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDP_answer
 * @description
 *
 * SDP answer. TS 32.273 does not define this value; the bearer SDP
 * is IMS Information specified in TS 32.260.
 *
 * 3GPP TS 32.273 V19.0.0 clause 6.3.1.1.
 *
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
