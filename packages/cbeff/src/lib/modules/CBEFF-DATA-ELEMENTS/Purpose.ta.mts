/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Purpose
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Purpose  ::=  ENUMERATED {
 *    noValueAvailable     (0),
 *    verify               (1),
 *    identify             (2),
 *    enrol                (3),
 *    enrolVerify          (4),
 *    enrolIdentify        (5),
 *    audit                (6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const _enum_for_Purpose: {
    readonly noValueAvailable: 0;
    readonly verify: 1;
    readonly identify: 2;
    readonly enrol: 3;
    readonly enrolVerify: 4;
    readonly enrolIdentify: 5;
    readonly audit: 6;
} = {
    noValueAvailable: 0,
    verify: 1,
    identify: 2,
    enrol: 3,
    enrolVerify: 4,
    enrolIdentify: 5,
    audit: 6,
};

export
type _enum_for_Purpose = ENUMERATED;

/**
 * @summary Purpose
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Purpose  ::=  ENUMERATED {
 *    noValueAvailable     (0),
 *    verify               (1),
 *    identify             (2),
 *    enrol                (3),
 *    enrolVerify          (4),
 *    enrolIdentify        (5),
 *    audit                (6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Purpose = _enum_for_Purpose;

/**
 * @summary Purpose
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Purpose  ::=  ENUMERATED {
 *    noValueAvailable     (0),
 *    verify               (1),
 *    identify             (2),
 *    enrol                (3),
 *    enrolVerify          (4),
 *    enrolIdentify        (5),
 *    audit                (6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Purpose: typeof _enum_for_Purpose = _enum_for_Purpose;

/**
 * @summary Purpose_noValueAvailable
 * @constant
 * @type {number}
 */
export
const Purpose_noValueAvailable: number = Purpose.noValueAvailable satisfies Purpose; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noValueAvailable
 * @constant
 * @type {number}
 */
export
const noValueAvailable: number = Purpose_noValueAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Purpose_verify
 * @constant
 * @type {number}
 */
export
const Purpose_verify: number = Purpose.verify satisfies Purpose; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary verify
 * @constant
 * @type {number}
 */
export
const verify: number = Purpose_verify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Purpose_identify
 * @constant
 * @type {number}
 */
export
const Purpose_identify: number = Purpose.identify satisfies Purpose; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary identify
 * @constant
 * @type {number}
 */
export
const identify: number = Purpose_identify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Purpose_enrol
 * @constant
 * @type {number}
 */
export
const Purpose_enrol: number = Purpose.enrol satisfies Purpose; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enrol
 * @constant
 * @type {number}
 */
export
const enrol: number = Purpose_enrol; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Purpose_enrolVerify
 * @constant
 * @type {number}
 */
export
const Purpose_enrolVerify: number = Purpose.enrolVerify satisfies Purpose; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enrolVerify
 * @constant
 * @type {number}
 */
export
const enrolVerify: number = Purpose_enrolVerify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Purpose_enrolIdentify
 * @constant
 * @type {number}
 */
export
const Purpose_enrolIdentify: number = Purpose.enrolIdentify satisfies Purpose; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enrolIdentify
 * @constant
 * @type {number}
 */
export
const enrolIdentify: number = Purpose_enrolIdentify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Purpose_audit
 * @constant
 * @type {number}
 */
export
const Purpose_audit: number = Purpose.audit satisfies Purpose; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary audit
 * @constant
 * @type {number}
 */
export
const audit: number = Purpose_audit; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_Purpose: $.ASN1Decoder<Purpose> = $._decodeEnumerated;

export
const _encode_Purpose: $.ASN1Encoder<Purpose> = $._encodeEnumerated;

/* eslint-enable */
