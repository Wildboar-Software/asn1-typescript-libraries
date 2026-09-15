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
 * @summary CommonObjectFlags
 * @description
 * 
 * Privacy and mutability of a CIO. Bit 2 (`internal`) is historical and shall
 * not be used. ISO/IEC 7816-15:2016 §8.2.8.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommonObjectFlags  ::=  BIT STRING {
 *       private            (0),
 *       modifiable         (1),
 *       internal           (2)
 * }
 * ```
 */
export
type CommonObjectFlags = BIT_STRING;

/**
 * @summary CommonObjectFlags_private_
 * @description
 * Object may be accessed only after proper authentication. ISO/IEC 7816-15:2016
 * §8.2.8.
 * @constant
 */
export
const CommonObjectFlags_private_: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary private_
 * @constant
 */
export
const private_: number = CommonObjectFlags_private_; /* SHORT_NAMED_BIT */

/**
 * @summary CommonObjectFlags_modifiable
 * @description
 * The object value should be updatable. ISO/IEC 7816-15:2016 §8.2.8.
 * @constant
 */
export
const CommonObjectFlags_modifiable: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary modifiable
 * @constant
 */
export
const modifiable: number = CommonObjectFlags_modifiable; /* SHORT_NAMED_BIT */

/**
 * @summary CommonObjectFlags_internal
 * @description
 * Historical; shall not be used. ISO/IEC 7816-15:2016 §8.2.8.
 * @constant
 */
export
const CommonObjectFlags_internal: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary internal
 * @constant
 */
export
const internal: number = CommonObjectFlags_internal; /* SHORT_NAMED_BIT */
export const _decode_CommonObjectFlags = $._decodeBitString;
export const _encode_CommonObjectFlags = $._encodeBitString;


/* eslint-enable */
