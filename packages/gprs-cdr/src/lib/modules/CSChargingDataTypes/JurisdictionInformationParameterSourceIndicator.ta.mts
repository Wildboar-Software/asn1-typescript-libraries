/* eslint-disable */
import {
    INTEGER
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
const JurisdictionInformationParameterSourceIndicator_lRN_NP_Database: JurisdictionInformationParameterSourceIndicator = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterSourceIndicator_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const lRN_NP_Database: JurisdictionInformationParameterSourceIndicator = JurisdictionInformationParameterSourceIndicator_lRN_NP_Database; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterSourceIndicator_switchingSystemData
 * @constant
 * @type {number}
 */
export
const JurisdictionInformationParameterSourceIndicator_switchingSystemData: JurisdictionInformationParameterSourceIndicator = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterSourceIndicator_switchingSystemData
 * @constant
 * @type {number}
 */
export
const switchingSystemData: JurisdictionInformationParameterSourceIndicator = JurisdictionInformationParameterSourceIndicator_switchingSystemData; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterSourceIndicator_incomingsignaling
 * @constant
 * @type {number}
 */
export
const JurisdictionInformationParameterSourceIndicator_incomingsignaling: JurisdictionInformationParameterSourceIndicator = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterSourceIndicator_incomingsignaling
 * @constant
 * @type {number}
 */
export
const incomingsignaling: JurisdictionInformationParameterSourceIndicator = JurisdictionInformationParameterSourceIndicator_incomingsignaling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterSourceIndicator_unknown
 * @constant
 * @type {number}
 */
export
const JurisdictionInformationParameterSourceIndicator_unknown: JurisdictionInformationParameterSourceIndicator = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterSourceIndicator_unknown
 * @constant
 * @type {number}
 */
export
const unknown: JurisdictionInformationParameterSourceIndicator = JurisdictionInformationParameterSourceIndicator_unknown; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_JurisdictionInformationParameterSourceIndicator: $.ASN1Decoder<JurisdictionInformationParameterSourceIndicator> = $._decodeInteger;

export
const _encode_JurisdictionInformationParameterSourceIndicator: $.ASN1Encoder<JurisdictionInformationParameterSourceIndicator> = $._encodeInteger;

/* eslint-enable */
