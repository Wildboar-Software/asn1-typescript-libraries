/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary JurisdictionInformationParameterSourceIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * JurisdictionInformationParameterSourceIndicator  ::=  INTEGER {
 *    lRN-NP-Database        ( 1 ),
 *    switchingSystemData    ( 2 ),
 *    incomingsignaling      ( 3 ),
 *    unknown                ( 9 )}
 * ```
 */
export
type JurisdictionInformationParameterSourceIndicator = INTEGER;

/**
 * @summary JurisdictionInformationParameterSourceIndicator_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const JurisdictionInformationParameterSourceIndicator_lRN_NP_Database: 1 = 1 satisfies JurisdictionInformationParameterSourceIndicator; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterSourceIndicator_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const lRN_NP_Database: 1 = JurisdictionInformationParameterSourceIndicator_lRN_NP_Database; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterSourceIndicator_switchingSystemData
 * @constant
 * @type {number}
 */
export
const JurisdictionInformationParameterSourceIndicator_switchingSystemData: 2 = 2 satisfies JurisdictionInformationParameterSourceIndicator; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterSourceIndicator_switchingSystemData
 * @constant
 * @type {number}
 */
export
const switchingSystemData: 2 = JurisdictionInformationParameterSourceIndicator_switchingSystemData; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterSourceIndicator_incomingsignaling
 * @constant
 * @type {number}
 */
export
const JurisdictionInformationParameterSourceIndicator_incomingsignaling: 3 = 3 satisfies JurisdictionInformationParameterSourceIndicator; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterSourceIndicator_incomingsignaling
 * @constant
 * @type {number}
 */
export
const incomingsignaling: 3 = JurisdictionInformationParameterSourceIndicator_incomingsignaling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterSourceIndicator_unknown
 * @constant
 * @type {number}
 */
export
const JurisdictionInformationParameterSourceIndicator_unknown: 9 = 9 satisfies JurisdictionInformationParameterSourceIndicator; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterSourceIndicator_unknown
 * @constant
 * @type {number}
 */
export
const unknown: 9 = JurisdictionInformationParameterSourceIndicator_unknown; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_JurisdictionInformationParameterSourceIndicator: $.ASN1Decoder<JurisdictionInformationParameterSourceIndicator> = $._decodeInteger;

export
const _encode_JurisdictionInformationParameterSourceIndicator: $.ASN1Encoder<JurisdictionInformationParameterSourceIndicator> = $._encodeInteger;

/* eslint-enable */
