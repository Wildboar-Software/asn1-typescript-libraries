/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EimIdType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EimIdType  ::=  INTEGER {
 *     eimIdTypeOid(1),
 *     eimIdTypeFqdn(2),
 *     eimIdTypeProprietary(3)
 * }
 * ```
 */
export
type EimIdType = INTEGER;

/**
 * @summary EimIdType_eimIdTypeOid
 * @constant
 * @type {number}
 */
export
const EimIdType_eimIdTypeOid: EimIdType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EimIdType_eimIdTypeOid
 * @constant
 * @type {number}
 */
export
const eimIdTypeOid: EimIdType = EimIdType_eimIdTypeOid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EimIdType_eimIdTypeFqdn
 * @constant
 * @type {number}
 */
export
const EimIdType_eimIdTypeFqdn: EimIdType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EimIdType_eimIdTypeFqdn
 * @constant
 * @type {number}
 */
export
const eimIdTypeFqdn: EimIdType = EimIdType_eimIdTypeFqdn; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EimIdType_eimIdTypeProprietary
 * @constant
 * @type {number}
 */
export
const EimIdType_eimIdTypeProprietary: EimIdType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EimIdType_eimIdTypeProprietary
 * @constant
 * @type {number}
 */
export
const eimIdTypeProprietary: EimIdType = EimIdType_eimIdTypeProprietary; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EimIdType: $.ASN1Decoder<EimIdType> = $._decodeInteger;
export const _encode_EimIdType: $.ASN1Encoder<EimIdType> = $._encodeInteger;


/* eslint-enable */
