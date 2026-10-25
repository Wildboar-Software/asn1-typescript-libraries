/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Datagroup
 * @description
 *
 * An LDS data group (`dg1` through `dg16`), the Document Security Object
 * (`sod`), or the Common Data file (`com`). This part does not define the
 * contents of those files; see Doc 9303-10.
 *
 * Doc 9303-12, section 10.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Datagroup  ::=  INTEGER {
 *     dg1(1), dg2(2), dg3(3), dg4(4), dg5(5), dg6(6),
 *     dg7(7), dg8(8), dg9(9), dg10(10), dg11(11),
 *     dg12(12), dg13(13), dg14(14), dg15(15), dg16(16),
 *     sod(20), com(21) }
 * ```
 */
export
type Datagroup = INTEGER;

/**
 * LDS data group 1. Contents are defined in Doc 9303-10, not in this part.
 * @summary Datagroup_dg1
 * @constant
 * @type {number}
 */
export
const Datagroup_dg1 = 1 satisfies Datagroup; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link Datagroup_dg1}.
 * @summary Datagroup_dg1
 * @constant
 * @type {number}
 */
export
const dg1 = Datagroup_dg1 satisfies Datagroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * LDS data group 2. Contents are defined in Doc 9303-10, not in this part.
 * @summary Datagroup_dg2
 * @constant
 * @type {number}
 */
export
const Datagroup_dg2 = 2 satisfies Datagroup; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link Datagroup_dg2}.
 * @summary Datagroup_dg2
 * @constant
 * @type {number}
 */
export
const dg2 = Datagroup_dg2 satisfies Datagroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * LDS data group 3. Contents are defined in Doc 9303-10, not in this part.
 * @summary Datagroup_dg3
 * @constant
 * @type {number}
 */
export
const Datagroup_dg3 = 3 satisfies Datagroup; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link Datagroup_dg3}.
 * @summary Datagroup_dg3
 * @constant
 * @type {number}
 */
export
const dg3 = Datagroup_dg3 satisfies Datagroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * LDS data group 4. Contents are defined in Doc 9303-10, not in this part.
 * @summary Datagroup_dg4
 * @constant
 * @type {number}
 */
export
const Datagroup_dg4 = 4 satisfies Datagroup; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link Datagroup_dg4}.
 * @summary Datagroup_dg4
 * @constant
 * @type {number}
 */
export
const dg4 = Datagroup_dg4 satisfies Datagroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * LDS data group 5. Contents are defined in Doc 9303-10, not in this part.
 * @summary Datagroup_dg5
 * @constant
 * @type {number}
 */
export
const Datagroup_dg5 = 5 satisfies Datagroup; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link Datagroup_dg5}.
 * @summary Datagroup_dg5
 * @constant
 * @type {number}
 */
export
const dg5 = Datagroup_dg5 satisfies Datagroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * LDS data group 6. Contents are defined in Doc 9303-10, not in this part.
 * @summary Datagroup_dg6
 * @constant
 * @type {number}
 */
export
const Datagroup_dg6 = 6 satisfies Datagroup; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link Datagroup_dg6}.
 * @summary Datagroup_dg6
 * @constant
 * @type {number}
 */
export
const dg6 = Datagroup_dg6 satisfies Datagroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * LDS data group 7. Contents are defined in Doc 9303-10, not in this part.
 * @summary Datagroup_dg7
 * @constant
 * @type {number}
 */
export
const Datagroup_dg7 = 7 satisfies Datagroup; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link Datagroup_dg7}.
 * @summary Datagroup_dg7
 * @constant
 * @type {number}
 */
export
const dg7 = Datagroup_dg7 satisfies Datagroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * LDS data group 8. Contents are defined in Doc 9303-10, not in this part.
 * @summary Datagroup_dg8
 * @constant
 * @type {number}
 */
export
const Datagroup_dg8 = 8 satisfies Datagroup; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link Datagroup_dg8}.
 * @summary Datagroup_dg8
 * @constant
 * @type {number}
 */
export
const dg8 = Datagroup_dg8 satisfies Datagroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * LDS data group 9. Contents are defined in Doc 9303-10, not in this part.
 * @summary Datagroup_dg9
 * @constant
 * @type {number}
 */
export
const Datagroup_dg9 = 9 satisfies Datagroup; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link Datagroup_dg9}.
 * @summary Datagroup_dg9
 * @constant
 * @type {number}
 */
export
const dg9 = Datagroup_dg9 satisfies Datagroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * LDS data group 10. Contents are defined in Doc 9303-10, not in this part.
 * @summary Datagroup_dg10
 * @constant
 * @type {number}
 */
export
const Datagroup_dg10 = 10 satisfies Datagroup; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link Datagroup_dg10}.
 * @summary Datagroup_dg10
 * @constant
 * @type {number}
 */
export
const dg10 = Datagroup_dg10 satisfies Datagroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * LDS data group 11. Contents are defined in Doc 9303-10, not in this part.
 * @summary Datagroup_dg11
 * @constant
 * @type {number}
 */
export
const Datagroup_dg11 = 11 satisfies Datagroup; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link Datagroup_dg11}.
 * @summary Datagroup_dg11
 * @constant
 * @type {number}
 */
export
const dg11 = Datagroup_dg11 satisfies Datagroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * LDS data group 12. Contents are defined in Doc 9303-10, not in this part.
 * @summary Datagroup_dg12
 * @constant
 * @type {number}
 */
export
const Datagroup_dg12 = 12 satisfies Datagroup; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link Datagroup_dg12}.
 * @summary Datagroup_dg12
 * @constant
 * @type {number}
 */
export
const dg12 = Datagroup_dg12 satisfies Datagroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * LDS data group 13. Contents are defined in Doc 9303-10, not in this part.
 * @summary Datagroup_dg13
 * @constant
 * @type {number}
 */
export
const Datagroup_dg13 = 13 satisfies Datagroup; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link Datagroup_dg13}.
 * @summary Datagroup_dg13
 * @constant
 * @type {number}
 */
export
const dg13 = Datagroup_dg13 satisfies Datagroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * LDS data group 14. Contents are defined in Doc 9303-10, not in this part.
 * @summary Datagroup_dg14
 * @constant
 * @type {number}
 */
export
const Datagroup_dg14 = 14 satisfies Datagroup; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link Datagroup_dg14}.
 * @summary Datagroup_dg14
 * @constant
 * @type {number}
 */
export
const dg14 = Datagroup_dg14 satisfies Datagroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * LDS data group 15. Contents are defined in Doc 9303-10, not in this part.
 * @summary Datagroup_dg15
 * @constant
 * @type {number}
 */
export
const Datagroup_dg15 = 15 satisfies Datagroup; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link Datagroup_dg15}.
 * @summary Datagroup_dg15
 * @constant
 * @type {number}
 */
export
const dg15 = Datagroup_dg15 satisfies Datagroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * LDS data group 16. Contents are defined in Doc 9303-10, not in this part.
 * @summary Datagroup_dg16
 * @constant
 * @type {number}
 */
export
const Datagroup_dg16 = 16 satisfies Datagroup; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link Datagroup_dg16}.
 * @summary Datagroup_dg16
 * @constant
 * @type {number}
 */
export
const dg16 = Datagroup_dg16 satisfies Datagroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * The Document Security Object.
 * @summary Datagroup_sod
 * @constant
 * @type {number}
 */
export
const Datagroup_sod = 20 satisfies Datagroup; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link Datagroup_sod}.
 * @summary Datagroup_sod
 * @constant
 * @type {number}
 */
export
const sod = Datagroup_sod satisfies Datagroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * The Common Data (COM) file.
 * @summary Datagroup_com
 * @constant
 * @type {number}
 */
export
const Datagroup_com = 21 satisfies Datagroup; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link Datagroup_com}.
 * @summary Datagroup_com
 * @constant
 * @type {number}
 */
export
const com = Datagroup_com satisfies Datagroup; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Datagroup = $._decodeInteger;
export const _encode_Datagroup = $._encodeInteger;


/* eslint-enable */
