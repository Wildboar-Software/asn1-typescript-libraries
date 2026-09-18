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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean
 * @description
 *
 * Boolean special-argument offer. Bit=1 means that value is offered.
 * Named `false-bit`/`true-bit` because `false`/`true` are ASN.1
 * keywords. ISO/IEC 9041-1:1997 §12.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileArgumOfferList-specialProfileArgums-Item-offeredValues-boolean ::= BIT STRING { false-bit (0), true-bit (1) }
 * ```
 */
export
type ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean = BIT_STRING;

/**
 * @summary ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean_false_bit
 * @description
 *
 * Offers boolean false. ISO/IEC 9041-1:1997 §12.2.
 * @constant
 */
export
const ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean_false_bit: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary false_bit
 * @description
 *
 * Offers boolean false. ISO/IEC 9041-1:1997 §12.2.
 * @constant
 */
export
const false_bit: number = ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean_false_bit; /* SHORT_NAMED_BIT */

/**
 * @summary ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean_true_bit
 * @description
 *
 * Offers boolean true. ISO/IEC 9041-1:1997 §12.2.
 * @constant
 */
export
const ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean_true_bit: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary true_bit
 * @description
 *
 * Offers boolean true. ISO/IEC 9041-1:1997 §12.2.
 * @constant
 */
export
const true_bit: number = ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean_true_bit; /* SHORT_NAMED_BIT */
export const _decode_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean = $._decodeBitString;
export const _encode_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean = $._encodeBitString;


/* eslint-enable */
