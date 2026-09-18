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
 * @summary BlockParamOffer_capability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BlockParamOffer-capability ::= BIT STRING { yes (0), no (1) }
 * ```
 */
export
type BlockParamOffer_capability = BIT_STRING;

/**
 * @summary BlockParamOffer_capability_yes
 * @constant
 */
export
const BlockParamOffer_capability_yes: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary yes
 * @constant
 */
export
const yes: number = BlockParamOffer_capability_yes; /* SHORT_NAMED_BIT */

/**
 * @summary BlockParamOffer_capability_no
 * @constant
 */
export
const BlockParamOffer_capability_no: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary no
 * @constant
 */
export
const no: number = BlockParamOffer_capability_no; /* SHORT_NAMED_BIT */
export const _decode_BlockParamOffer_capability = $._decodeBitString;
export const _encode_BlockParamOffer_capability = $._encodeBitString;


/* eslint-enable */
