/* eslint-disable */
import {
    INTEGER
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
const BasicService_telephony: BasicService = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_telephony
 * @constant
 * @type {number}
 */
export
const telephony: BasicService = BasicService_telephony; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_faxGroup2_3
 * @constant
 * @type {number}
 */
export
const BasicService_faxGroup2_3: BasicService = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_faxGroup2_3
 * @constant
 * @type {number}
 */
export
const faxGroup2_3: BasicService = BasicService_faxGroup2_3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_faxGroup4
 * @constant
 * @type {number}
 */
export
const BasicService_faxGroup4: BasicService = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_faxGroup4
 * @constant
 * @type {number}
 */
export
const faxGroup4: BasicService = BasicService_faxGroup4; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_teletexBasicAndMixed
 * @constant
 * @type {number}
 */
export
const BasicService_teletexBasicAndMixed: BasicService = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_teletexBasicAndMixed
 * @constant
 * @type {number}
 */
export
const teletexBasicAndMixed: BasicService = BasicService_teletexBasicAndMixed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_teletexBasicAndProcessable
 * @constant
 * @type {number}
 */
export
const BasicService_teletexBasicAndProcessable: BasicService = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_teletexBasicAndProcessable
 * @constant
 * @type {number}
 */
export
const teletexBasicAndProcessable: BasicService = BasicService_teletexBasicAndProcessable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_teletexBasic
 * @constant
 * @type {number}
 */
export
const BasicService_teletexBasic: BasicService = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_teletexBasic
 * @constant
 * @type {number}
 */
export
const teletexBasic: BasicService = BasicService_teletexBasic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_syntaxBasedVideotex
 * @constant
 * @type {number}
 */
export
const BasicService_syntaxBasedVideotex: BasicService = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_syntaxBasedVideotex
 * @constant
 * @type {number}
 */
export
const syntaxBasedVideotex: BasicService = BasicService_syntaxBasedVideotex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_internationalVideotex
 * @constant
 * @type {number}
 */
export
const BasicService_internationalVideotex: BasicService = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_internationalVideotex
 * @constant
 * @type {number}
 */
export
const internationalVideotex: BasicService = BasicService_internationalVideotex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_telex
 * @constant
 * @type {number}
 */
export
const BasicService_telex: BasicService = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_telex
 * @constant
 * @type {number}
 */
export
const telex: BasicService = BasicService_telex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_messageHandlingSystems
 * @constant
 * @type {number}
 */
export
const BasicService_messageHandlingSystems: BasicService = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_messageHandlingSystems
 * @constant
 * @type {number}
 */
export
const messageHandlingSystems: BasicService = BasicService_messageHandlingSystems; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_osiApplication
 * @constant
 * @type {number}
 */
export
const BasicService_osiApplication: BasicService = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_osiApplication
 * @constant
 * @type {number}
 */
export
const osiApplication: BasicService = BasicService_osiApplication; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_audioVisual
 * @constant
 * @type {number}
 */
export
const BasicService_audioVisual: BasicService = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BasicService_audioVisual
 * @constant
 * @type {number}
 */
export
const audioVisual: BasicService = BasicService_audioVisual; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_BasicService: $.ASN1Decoder<BasicService> = $._decodeInteger;

export
const _encode_BasicService: $.ASN1Encoder<BasicService> = $._encodeInteger;

/* eslint-enable */
