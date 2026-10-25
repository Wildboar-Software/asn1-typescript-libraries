/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TypeOfTransaction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeOfTransaction  ::=  ENUMERATED {
 *    successful      ( 0 ),
 *    unsuccessful    ( 1 ),
 *    all             ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TypeOfTransaction {
    successful = 0,
    unsuccessful = 1,
    all = 2,
}

/**
 * @summary TypeOfTransaction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeOfTransaction  ::=  ENUMERATED {
 *    successful      ( 0 ),
 *    unsuccessful    ( 1 ),
 *    all             ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
type TypeOfTransaction = _enum_for_TypeOfTransaction;

/**
 * @summary TypeOfTransaction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeOfTransaction  ::=  ENUMERATED {
 *    successful      ( 0 ),
 *    unsuccessful    ( 1 ),
 *    all             ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
const TypeOfTransaction = _enum_for_TypeOfTransaction;

/**
 * @summary TypeOfTransaction_successful
 * @constant
 * @type {number}
 */
export
const TypeOfTransaction_successful = TypeOfTransaction.successful satisfies TypeOfTransaction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary successful
 * @constant
 * @type {number}
 */
export
const successful = TypeOfTransaction.successful satisfies TypeOfTransaction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeOfTransaction_unsuccessful
 * @constant
 * @type {number}
 */
export
const TypeOfTransaction_unsuccessful = TypeOfTransaction.unsuccessful satisfies TypeOfTransaction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsuccessful
 * @constant
 * @type {number}
 */
export
const unsuccessful = TypeOfTransaction.unsuccessful satisfies TypeOfTransaction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeOfTransaction_all
 * @constant
 * @type {number}
 */
export
const TypeOfTransaction_all = TypeOfTransaction.all satisfies TypeOfTransaction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary all
 * @constant
 * @type {number}
 */
export
const all = TypeOfTransaction.all satisfies TypeOfTransaction; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_TypeOfTransaction: $.ASN1Decoder<TypeOfTransaction> = $._decodeEnumerated;

export
const _encode_TypeOfTransaction: $.ASN1Encoder<TypeOfTransaction> = $._encodeEnumerated;

/* eslint-enable */
