/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SmscControlParameterHeader
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SmscControlParameterHeader  ::=  BIT STRING {
 *     sRforTransactionCompleted(0),
 *     sRforPermanentError(1),
 *     sRforTempErrorSCnotTrying(2),
 *     sRforTempErrorSCstillTrying(3),
 *     cancelSRRforConcatenatedSM(6),
 *     includeOrigUDHintoSR(7)
 * } (SIZE(8))
 * ```
 */
export
type SmscControlParameterHeader = BIT_STRING;

/**
 * @summary SmscControlParameterHeader_sRforTransactionCompleted
 * @constant
 */
export
const SmscControlParameterHeader_sRforTransactionCompleted: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary sRforTransactionCompleted
 * @constant
 */
export
const sRforTransactionCompleted: number = SmscControlParameterHeader_sRforTransactionCompleted; /* SHORT_NAMED_BIT */

/**
 * @summary SmscControlParameterHeader_sRforPermanentError
 * @constant
 */
export
const SmscControlParameterHeader_sRforPermanentError: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary sRforPermanentError
 * @constant
 */
export
const sRforPermanentError: number = SmscControlParameterHeader_sRforPermanentError; /* SHORT_NAMED_BIT */

/**
 * @summary SmscControlParameterHeader_sRforTempErrorSCnotTrying
 * @constant
 */
export
const SmscControlParameterHeader_sRforTempErrorSCnotTrying: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary sRforTempErrorSCnotTrying
 * @constant
 */
export
const sRforTempErrorSCnotTrying: number = SmscControlParameterHeader_sRforTempErrorSCnotTrying; /* SHORT_NAMED_BIT */

/**
 * @summary SmscControlParameterHeader_sRforTempErrorSCstillTrying
 * @constant
 */
export
const SmscControlParameterHeader_sRforTempErrorSCstillTrying: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary sRforTempErrorSCstillTrying
 * @constant
 */
export
const sRforTempErrorSCstillTrying: number = SmscControlParameterHeader_sRforTempErrorSCstillTrying; /* SHORT_NAMED_BIT */

/**
 * @summary SmscControlParameterHeader_cancelSRRforConcatenatedSM
 * @constant
 */
export
const SmscControlParameterHeader_cancelSRRforConcatenatedSM: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary cancelSRRforConcatenatedSM
 * @constant
 */
export
const cancelSRRforConcatenatedSM: number = SmscControlParameterHeader_cancelSRRforConcatenatedSM; /* SHORT_NAMED_BIT */

/**
 * @summary SmscControlParameterHeader_includeOrigUDHintoSR
 * @constant
 */
export
const SmscControlParameterHeader_includeOrigUDHintoSR: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary includeOrigUDHintoSR
 * @constant
 */
export
const includeOrigUDHintoSR: number = SmscControlParameterHeader_includeOrigUDHintoSR; /* SHORT_NAMED_BIT */

export
const _decode_SmscControlParameterHeader: $.ASN1Decoder<SmscControlParameterHeader> = $._decodeBitString;

export
const _encode_SmscControlParameterHeader: $.ASN1Encoder<SmscControlParameterHeader> = $._encodeBitString;

/* eslint-enable */
