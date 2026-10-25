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
 *   teletexBasicAndProcessable(5), teletexBasic(6), syntaxBasedVideotex(7),
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
const BasicService_telephony: 1 = 1 satisfies BasicService; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_telephony
 * @constant
 * @type {number}
 */
export
const telephony: 1 = BasicService_telephony; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_faxGroup2_3
 * @constant
 * @type {number}
 */
export
const BasicService_faxGroup2_3: 2 = 2 satisfies BasicService; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_faxGroup2_3
 * @constant
 * @type {number}
 */
export
const faxGroup2_3: 2 = BasicService_faxGroup2_3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_faxGroup4
 * @constant
 * @type {number}
 */
export
const BasicService_faxGroup4: 3 = 3 satisfies BasicService; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_faxGroup4
 * @constant
 * @type {number}
 */
export
const faxGroup4: 3 = BasicService_faxGroup4; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_teletexBasicAndMixed
 * @constant
 * @type {number}
 */
export
const BasicService_teletexBasicAndMixed: 4 = 4 satisfies BasicService; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_teletexBasicAndMixed
 * @constant
 * @type {number}
 */
export
const teletexBasicAndMixed: 4 = BasicService_teletexBasicAndMixed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_teletexBasicAndProcessable
 * @constant
 * @type {number}
 */
export
const BasicService_teletexBasicAndProcessable: 5 = 5 satisfies BasicService; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_teletexBasicAndProcessable
 * @constant
 * @type {number}
 */
export
const teletexBasicAndProcessable: 5 = BasicService_teletexBasicAndProcessable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_teletexBasic
 * @constant
 * @type {number}
 */
export
const BasicService_teletexBasic: 6 = 6 satisfies BasicService; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_teletexBasic
 * @constant
 * @type {number}
 */
export
const teletexBasic: 6 = BasicService_teletexBasic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_syntaxBasedVideotex
 * @constant
 * @type {number}
 */
export
const BasicService_syntaxBasedVideotex: 7 = 7 satisfies BasicService; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_syntaxBasedVideotex
 * @constant
 * @type {number}
 */
export
const syntaxBasedVideotex: 7 = BasicService_syntaxBasedVideotex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_internationalVideotex
 * @constant
 * @type {number}
 */
export
const BasicService_internationalVideotex: 8 = 8 satisfies BasicService; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_internationalVideotex
 * @constant
 * @type {number}
 */
export
const internationalVideotex: 8 = BasicService_internationalVideotex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_telex
 * @constant
 * @type {number}
 */
export
const BasicService_telex: 9 = 9 satisfies BasicService; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_telex
 * @constant
 * @type {number}
 */
export
const telex: 9 = BasicService_telex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_messageHandlingSystems
 * @constant
 * @type {number}
 */
export
const BasicService_messageHandlingSystems: 10 = 10 satisfies BasicService; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_messageHandlingSystems
 * @constant
 * @type {number}
 */
export
const messageHandlingSystems: 10 = BasicService_messageHandlingSystems; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_osiApplication
 * @constant
 * @type {number}
 */
export
const BasicService_osiApplication: 11 = 11 satisfies BasicService; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_osiApplication
 * @constant
 * @type {number}
 */
export
const osiApplication: 11 = BasicService_osiApplication; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_audioVisual
 * @constant
 * @type {number}
 */
export
const BasicService_audioVisual: 12 = 12 satisfies BasicService; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_audioVisual
 * @constant
 * @type {number}
 */
export
const audioVisual: 12 = BasicService_audioVisual; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_BasicService: $.ASN1Decoder<BasicService> = $._decodeInteger;

export
const _encode_BasicService: $.ASN1Encoder<BasicService> = $._encodeInteger;

/* eslint-enable */
