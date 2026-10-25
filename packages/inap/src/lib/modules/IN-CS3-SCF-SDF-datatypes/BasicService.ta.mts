/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BasicService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasicService  ::=  INTEGER {
 *   telephony(1), faxGroup2-3(2), faxGroup4(3), teletexBasicAndMixed(4),
 *   teletexBazicAndProcessable(5), teletexBasic(6), syntaxBasedVideotex(7),
 *   internationalVideotex(8), telex(9), messageHandlingSystems(10),
 *   osiApplication(11), audioVisual(12)}
 * ```
 */
export
type BasicService = INTEGER;

/**
 * @summary BasicService_telephony
 * @constant
 * @type {number}
 */
export
const BasicService_telephony = 1 satisfies BasicService; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_telephony
 * @constant
 * @type {number}
 */
export
const telephony = BasicService_telephony; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_faxGroup2_3
 * @constant
 * @type {number}
 */
export
const BasicService_faxGroup2_3 = 2 satisfies BasicService; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_faxGroup2_3
 * @constant
 * @type {number}
 */
export
const faxGroup2_3 = BasicService_faxGroup2_3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_faxGroup4
 * @constant
 * @type {number}
 */
export
const BasicService_faxGroup4 = 3 satisfies BasicService; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_faxGroup4
 * @constant
 * @type {number}
 */
export
const faxGroup4 = BasicService_faxGroup4; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_teletexBasicAndMixed
 * @constant
 * @type {number}
 */
export
const BasicService_teletexBasicAndMixed = 4 satisfies BasicService; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_teletexBasicAndMixed
 * @constant
 * @type {number}
 */
export
const teletexBasicAndMixed = BasicService_teletexBasicAndMixed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_teletexBazicAndProcessable
 * @constant
 * @type {number}
 */
export
const BasicService_teletexBazicAndProcessable = 5 satisfies BasicService; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_teletexBazicAndProcessable
 * @constant
 * @type {number}
 */
export
const teletexBazicAndProcessable = BasicService_teletexBazicAndProcessable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_teletexBasic
 * @constant
 * @type {number}
 */
export
const BasicService_teletexBasic = 6 satisfies BasicService; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_teletexBasic
 * @constant
 * @type {number}
 */
export
const teletexBasic = BasicService_teletexBasic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_syntaxBasedVideotex
 * @constant
 * @type {number}
 */
export
const BasicService_syntaxBasedVideotex = 7 satisfies BasicService; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_syntaxBasedVideotex
 * @constant
 * @type {number}
 */
export
const syntaxBasedVideotex = BasicService_syntaxBasedVideotex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_internationalVideotex
 * @constant
 * @type {number}
 */
export
const BasicService_internationalVideotex = 8 satisfies BasicService; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_internationalVideotex
 * @constant
 * @type {number}
 */
export
const internationalVideotex = BasicService_internationalVideotex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_telex
 * @constant
 * @type {number}
 */
export
const BasicService_telex = 9 satisfies BasicService; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_telex
 * @constant
 * @type {number}
 */
export
const telex = BasicService_telex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_messageHandlingSystems
 * @constant
 * @type {number}
 */
export
const BasicService_messageHandlingSystems = 10 satisfies BasicService; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_messageHandlingSystems
 * @constant
 * @type {number}
 */
export
const messageHandlingSystems = BasicService_messageHandlingSystems; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_osiApplication
 * @constant
 * @type {number}
 */
export
const BasicService_osiApplication = 11 satisfies BasicService; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_osiApplication
 * @constant
 * @type {number}
 */
export
const osiApplication = BasicService_osiApplication; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_audioVisual
 * @constant
 * @type {number}
 */
export
const BasicService_audioVisual = 12 satisfies BasicService; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_audioVisual
 * @constant
 * @type {number}
 */
export
const audioVisual = BasicService_audioVisual; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_BasicService: $.ASN1Decoder<BasicService> = $._decodeInteger;

export
const _encode_BasicService: $.ASN1Encoder<BasicService> = $._encodeInteger;

/* eslint-enable */
