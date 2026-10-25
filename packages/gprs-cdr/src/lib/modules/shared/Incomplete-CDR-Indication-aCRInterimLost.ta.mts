/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Incomplete_CDR_Indication_aCRInterimLost
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Incomplete-CDR-Indication-aCRInterimLost ::= ENUMERATED {
 *    no          ( 0 ),
 *    yes         ( 1 ),
 *    unknown     ( 2 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Incomplete_CDR_Indication_aCRInterimLost {
    no = 0,
    yes = 1,
    unknown = 2,
}

/**
 * @summary Incomplete_CDR_Indication_aCRInterimLost
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Incomplete-CDR-Indication-aCRInterimLost ::= ENUMERATED {
 *    no          ( 0 ),
 *    yes         ( 1 ),
 *    unknown     ( 2 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Incomplete_CDR_Indication_aCRInterimLost = _enum_for_Incomplete_CDR_Indication_aCRInterimLost;

/**
 * @summary Incomplete_CDR_Indication_aCRInterimLost
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Incomplete-CDR-Indication-aCRInterimLost ::= ENUMERATED {
 *    no          ( 0 ),
 *    yes         ( 1 ),
 *    unknown     ( 2 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Incomplete_CDR_Indication_aCRInterimLost = _enum_for_Incomplete_CDR_Indication_aCRInterimLost;

/**
 * @summary Incomplete_CDR_Indication_aCRInterimLost_no
 * @constant
 * @type {number}
 */
export
const Incomplete_CDR_Indication_aCRInterimLost_no = Incomplete_CDR_Indication_aCRInterimLost.no; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no
 * @constant
 * @type {number}
 */
export
const no = Incomplete_CDR_Indication_aCRInterimLost.no; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Incomplete_CDR_Indication_aCRInterimLost_yes
 * @constant
 * @type {number}
 */
export
const Incomplete_CDR_Indication_aCRInterimLost_yes = Incomplete_CDR_Indication_aCRInterimLost.yes; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary yes
 * @constant
 * @type {number}
 */
export
const yes = Incomplete_CDR_Indication_aCRInterimLost.yes; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Incomplete_CDR_Indication_aCRInterimLost_unknown
 * @constant
 * @type {number}
 */
export
const Incomplete_CDR_Indication_aCRInterimLost_unknown = Incomplete_CDR_Indication_aCRInterimLost.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown = Incomplete_CDR_Indication_aCRInterimLost.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_Incomplete_CDR_Indication_aCRInterimLost: $.ASN1Decoder<Incomplete_CDR_Indication_aCRInterimLost> = $._decodeEnumerated;

export
const _encode_Incomplete_CDR_Indication_aCRInterimLost: $.ASN1Encoder<Incomplete_CDR_Indication_aCRInterimLost> = $._encodeEnumerated;

/* eslint-enable */
