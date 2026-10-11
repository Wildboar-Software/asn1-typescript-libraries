/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MRZField
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MRZField  ::=  INTEGER {
 *     generic(0), documentCode(1), issuingState(2), personName(3),
 *     documentNumber(4), nationality(5), dateOfBirth(6),
 *     sex(7), dateOfExpiry(8), optionalData(9) }
 * ```
 */
export
type MRZField = INTEGER;

/**
 * @summary MRZField_generic
 * @constant
 * @type {number}
 */
export
const MRZField_generic: MRZField = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MRZField_generic
 * @constant
 * @type {number}
 */
export
const generic: MRZField = MRZField_generic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MRZField_documentCode
 * @constant
 * @type {number}
 */
export
const MRZField_documentCode: MRZField = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MRZField_documentCode
 * @constant
 * @type {number}
 */
export
const documentCode: MRZField = MRZField_documentCode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MRZField_issuingState
 * @constant
 * @type {number}
 */
export
const MRZField_issuingState: MRZField = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MRZField_issuingState
 * @constant
 * @type {number}
 */
export
const issuingState: MRZField = MRZField_issuingState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MRZField_personName
 * @constant
 * @type {number}
 */
export
const MRZField_personName: MRZField = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MRZField_personName
 * @constant
 * @type {number}
 */
export
const personName: MRZField = MRZField_personName; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MRZField_documentNumber
 * @constant
 * @type {number}
 */
export
const MRZField_documentNumber: MRZField = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MRZField_documentNumber
 * @constant
 * @type {number}
 */
export
const documentNumber: MRZField = MRZField_documentNumber; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MRZField_nationality
 * @constant
 * @type {number}
 */
export
const MRZField_nationality: MRZField = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MRZField_nationality
 * @constant
 * @type {number}
 */
export
const nationality: MRZField = MRZField_nationality; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MRZField_dateOfBirth
 * @constant
 * @type {number}
 */
export
const MRZField_dateOfBirth: MRZField = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MRZField_dateOfBirth
 * @constant
 * @type {number}
 */
export
const dateOfBirth: MRZField = MRZField_dateOfBirth; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MRZField_sex
 * @constant
 * @type {number}
 */
export
const MRZField_sex: MRZField = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MRZField_sex
 * @constant
 * @type {number}
 */
export
const sex: MRZField = MRZField_sex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MRZField_dateOfExpiry
 * @constant
 * @type {number}
 */
export
const MRZField_dateOfExpiry: MRZField = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MRZField_dateOfExpiry
 * @constant
 * @type {number}
 */
export
const dateOfExpiry: MRZField = MRZField_dateOfExpiry; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MRZField_optionalData
 * @constant
 * @type {number}
 */
export
const MRZField_optionalData: MRZField = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MRZField_optionalData
 * @constant
 * @type {number}
 */
export
const optionalData: MRZField = MRZField_optionalData; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_MRZField = $._decodeInteger;
export const _encode_MRZField = $._encodeInteger;


/* eslint-enable */
