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
 * @summary KeyUsageConstraints_keyUsageConstraintsFlag
 * @description
 * 
 * `immediateUsage` (0): no C-RP between key preparation and usage. ISO/IEC
 * 7816-15:2016 §8.2.10.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyUsageConstraints-keyUsageConstraintsFlag ::= BIT STRING {
 *     immediateUsage (0)
 * }
 * ```
 */
export
type KeyUsageConstraints_keyUsageConstraintsFlag = BIT_STRING;

/**
 * @summary KeyUsageConstraints_keyUsageConstraintsFlag_immediateUsage
 * @description
 * IFD must not send a C-RP between preparation and usage on the logical channel
 * used for the key. ISO/IEC 7816-15:2016 §8.2.10.
 * @constant
 */
export
const KeyUsageConstraints_keyUsageConstraintsFlag_immediateUsage: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary immediateUsage
 * @constant
 */
export
const immediateUsage: number = KeyUsageConstraints_keyUsageConstraintsFlag_immediateUsage; /* SHORT_NAMED_BIT */
export const _decode_KeyUsageConstraints_keyUsageConstraintsFlag = $._decodeBitString;
export const _encode_KeyUsageConstraints_keyUsageConstraintsFlag = $._encodeBitString;


/* eslint-enable */
