/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FingerPrintInformation_hand
 * @description
 * 
 * Hand for a fingerprint template. ISO/IEC 7816-15:2016 §8.9.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FingerPrintInformation-hand ::= ENUMERATED { left, right }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FingerPrintInformation_hand {
    left = 0,
    right = 1,
}

/**
 * @summary FingerPrintInformation_hand
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FingerPrintInformation-hand ::= ENUMERATED { left, right }
 * ```
 * 
 * @enum {number}
 */
export
type FingerPrintInformation_hand = _enum_for_FingerPrintInformation_hand;

/**
 * @summary FingerPrintInformation_hand
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FingerPrintInformation-hand ::= ENUMERATED { left, right }
 * ```
 * 
 * @enum {number}
 */
export
const FingerPrintInformation_hand: typeof _enum_for_FingerPrintInformation_hand = _enum_for_FingerPrintInformation_hand;

/**
 * @summary FingerPrintInformation_hand_left
 * @constant
 * @type {number}
 */
export
const FingerPrintInformation_hand_left: _enum_for_FingerPrintInformation_hand.left = FingerPrintInformation_hand.left; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary left
 * @constant
 * @type {number}
 */
export
const left: _enum_for_FingerPrintInformation_hand.left = FingerPrintInformation_hand.left; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FingerPrintInformation_hand_right
 * @constant
 * @type {number}
 */
export
const FingerPrintInformation_hand_right: _enum_for_FingerPrintInformation_hand.right = FingerPrintInformation_hand.right; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary right
 * @constant
 * @type {number}
 */
export
const right: _enum_for_FingerPrintInformation_hand.right = FingerPrintInformation_hand.right; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FingerPrintInformation_hand: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_FingerPrintInformation_hand: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
