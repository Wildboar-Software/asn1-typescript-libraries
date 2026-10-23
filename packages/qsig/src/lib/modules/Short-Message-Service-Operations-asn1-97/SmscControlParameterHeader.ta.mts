/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SmscControlParameterHeader
 * @description
 *
 * Which Status Reports the Sending User wants, beyond `statusReportRequest`
 * (ECMA-325 §E.1.3.1.1). The header applies only when `statusReportRequest` on
 * `smsSubmit` is TRUE. If the header was not received, the Service Centre
 * treats every condition as requested (§6.5.3.1.1). On a concatenated Short
 * Message the header is identical in every segment. Bits 4 and 5 are unnamed;
 * §E.1.3.1.1 is silent on them. The bit string size is 8.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
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
 * @description
 *
 * Bit 0. When set, return a Status Report once the Short Message transaction
 * completes (ECMA-325 §E.1.3.1.1).
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 */
export
const SmscControlParameterHeader_sRforTransactionCompleted: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary sRforTransactionCompleted
 * @description
 * Alias of {@link SmscControlParameterHeader_sRforTransactionCompleted}.
 * @constant
 */
export
const sRforTransactionCompleted: number = SmscControlParameterHeader_sRforTransactionCompleted; /* SHORT_NAMED_BIT */

/**
 * @summary SmscControlParameterHeader_sRforPermanentError
 * @description
 *
 * Bit 1. When set, return a Status Report on a permanent error, when the
 * Service Centre will make no further transfer attempts (ECMA-325 §E.1.3.1.1).
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 */
export
const SmscControlParameterHeader_sRforPermanentError: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary sRforPermanentError
 * @description Alias of {@link SmscControlParameterHeader_sRforPermanentError}.
 * @constant
 */
export
const sRforPermanentError: number = SmscControlParameterHeader_sRforPermanentError; /* SHORT_NAMED_BIT */

/**
 * @summary SmscControlParameterHeader_sRforTempErrorSCnotTrying
 * @description
 *
 * Bit 2. When set, return a Status Report on a temporary error when the
 * Service Centre is not trying again (ECMA-325 §E.1.3.1.1).
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 */
export
const SmscControlParameterHeader_sRforTempErrorSCnotTrying: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary sRforTempErrorSCnotTrying
 * @description
 * Alias of {@link SmscControlParameterHeader_sRforTempErrorSCnotTrying}.
 * @constant
 */
export
const sRforTempErrorSCnotTrying: number = SmscControlParameterHeader_sRforTempErrorSCnotTrying; /* SHORT_NAMED_BIT */

/**
 * @summary SmscControlParameterHeader_sRforTempErrorSCstillTrying
 * @description
 *
 * Bit 3. When set, return a Status Report on a temporary error while the
 * Service Centre is still trying to transfer the Short Message (ECMA-325
 * §E.1.3.1.1).
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 */
export
const SmscControlParameterHeader_sRforTempErrorSCstillTrying: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary sRforTempErrorSCstillTrying
 * @description
 * Alias of {@link SmscControlParameterHeader_sRforTempErrorSCstillTrying}.
 * @constant
 */
export
const sRforTempErrorSCstillTrying: number = SmscControlParameterHeader_sRforTempErrorSCstillTrying; /* SHORT_NAMED_BIT */

/**
 * @summary SmscControlParameterHeader_cancelSRRforConcatenatedSM
 * @description
 *
 * Bit 6. A Status Report from this Short Message, caused by a permanent error
 * or the last temporary error, cancels Status Report requests for the rest of
 * the concatenated Short Message (ECMA-325 §E.1.3.1.1). Usable only when the
 * Service Centre knows the segmentation; that is an implementation matter.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 */
export
const SmscControlParameterHeader_cancelSRRforConcatenatedSM: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary cancelSRRforConcatenatedSM
 * @description
 * Alias of {@link SmscControlParameterHeader_cancelSRRforConcatenatedSM}.
 * @constant
 */
export
const cancelSRRforConcatenatedSM: number = SmscControlParameterHeader_cancelSRRforConcatenatedSM; /* SHORT_NAMED_BIT */

/**
 * @summary SmscControlParameterHeader_includeOrigUDHintoSR
 * @description
 *
 * Bit 7. When set, the original user-data header is included in the Status
 * Report (ECMA-325 §E.1.3.1.1).
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 */
export
const SmscControlParameterHeader_includeOrigUDHintoSR: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary includeOrigUDHintoSR
 * @description
 * Alias of {@link SmscControlParameterHeader_includeOrigUDHintoSR}.
 * @constant
 */
export
const includeOrigUDHintoSR: number = SmscControlParameterHeader_includeOrigUDHintoSR; /* SHORT_NAMED_BIT */

export
const _decode_SmscControlParameterHeader = (el: _Element): SmscControlParameterHeader => {
    const value = $._decodeBitString(el);
    if (value.length !== 8) {
        throw new ASN1SizeError("SmscControlParameterHeader violates SIZE constraint");
    }
    return value;
};

export
const _encode_SmscControlParameterHeader: $.ASN1Encoder<SmscControlParameterHeader> = $._encodeBitString;

/* eslint-enable */
