/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MRZField
 * @description
 *
 * A field of the machine-readable zone, named by this part for a deviation.
 * The specification does not further define `generic`, and it does not
 * define the MRZ layout; that is in Doc 9303-3 through Doc 9303-6.
 *
 * Doc 9303-12, section 10.2.
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
 * Assigned, and not defined further.
 * @summary MRZField_generic
 * @constant
 * @type {number}
 */
export
const MRZField_generic: 0 = 0 satisfies MRZField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link MRZField_generic}.
 * @summary MRZField_generic
 * @constant
 * @type {number}
 */
export
const generic: 0 = MRZField_generic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * MRZ document code.
 * @summary MRZField_documentCode
 * @constant
 * @type {number}
 */
export
const MRZField_documentCode: 1 = 1 satisfies MRZField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link MRZField_documentCode}.
 * @summary MRZField_documentCode
 * @constant
 * @type {number}
 */
export
const documentCode: 1 = MRZField_documentCode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * MRZ issuing state.
 * @summary MRZField_issuingState
 * @constant
 * @type {number}
 */
export
const MRZField_issuingState: 2 = 2 satisfies MRZField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link MRZField_issuingState}.
 * @summary MRZField_issuingState
 * @constant
 * @type {number}
 */
export
const issuingState: 2 = MRZField_issuingState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * MRZ holder name.
 * @summary MRZField_personName
 * @constant
 * @type {number}
 */
export
const MRZField_personName: 3 = 3 satisfies MRZField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link MRZField_personName}.
 * @summary MRZField_personName
 * @constant
 * @type {number}
 */
export
const personName: 3 = MRZField_personName; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * MRZ document number.
 * @summary MRZField_documentNumber
 * @constant
 * @type {number}
 */
export
const MRZField_documentNumber: 4 = 4 satisfies MRZField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link MRZField_documentNumber}.
 * @summary MRZField_documentNumber
 * @constant
 * @type {number}
 */
export
const documentNumber: 4 = MRZField_documentNumber; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * MRZ nationality.
 * @summary MRZField_nationality
 * @constant
 * @type {number}
 */
export
const MRZField_nationality: 5 = 5 satisfies MRZField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link MRZField_nationality}.
 * @summary MRZField_nationality
 * @constant
 * @type {number}
 */
export
const nationality: 5 = MRZField_nationality; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * MRZ date of birth.
 * @summary MRZField_dateOfBirth
 * @constant
 * @type {number}
 */
export
const MRZField_dateOfBirth: 6 = 6 satisfies MRZField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link MRZField_dateOfBirth}.
 * @summary MRZField_dateOfBirth
 * @constant
 * @type {number}
 */
export
const dateOfBirth: 6 = MRZField_dateOfBirth; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * MRZ sex.
 * @summary MRZField_sex
 * @constant
 * @type {number}
 */
export
const MRZField_sex: 7 = 7 satisfies MRZField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link MRZField_sex}.
 * @summary MRZField_sex
 * @constant
 * @type {number}
 */
export
const sex: 7 = MRZField_sex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * MRZ date of expiry.
 * @summary MRZField_dateOfExpiry
 * @constant
 * @type {number}
 */
export
const MRZField_dateOfExpiry: 8 = 8 satisfies MRZField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link MRZField_dateOfExpiry}.
 * @summary MRZField_dateOfExpiry
 * @constant
 * @type {number}
 */
export
const dateOfExpiry: 8 = MRZField_dateOfExpiry; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * MRZ optional data.
 * @summary MRZField_optionalData
 * @constant
 * @type {number}
 */
export
const MRZField_optionalData: 9 = 9 satisfies MRZField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link MRZField_optionalData}.
 * @summary MRZField_optionalData
 * @constant
 * @type {number}
 */
export
const optionalData: 9 = MRZField_optionalData; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_MRZField: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_MRZField: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
