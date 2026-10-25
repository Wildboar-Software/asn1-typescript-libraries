/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSOverNASIndicator
 * @description
 * 
 * The SMSOverNASIndicator type is derived from the SMS over NAS transport
 * allowed portion of the 5GS registration result IE defined in TS 24.501 [13]
 * clause 9.11.3.6.1.
 *
 * 3GPP TS 33.128, clause 8.5.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSOverNASIndicator  ::=  ENUMERATED
 * {
 *     sMSOverNASNotAllowed(1),
 *     sMSOverNASAllowed(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SMSOverNASIndicator {
    /**
     * @description
     *
     * SMS over NAS not allowed.
     *
     * 3GPP TS 33.128, clause 8.5.3.
     */
    sMSOverNASNotAllowed = 1,
    /**
     * @description
     *
     * SMS over NAS allowed.
     *
     * 3GPP TS 33.128, clause 8.5.3.
     */
    sMSOverNASAllowed = 2,
}

/**
 * @summary SMSOverNASIndicator
 * @description
 * 
 * The SMSOverNASIndicator type is derived from the SMS over NAS transport
 * allowed portion of the 5GS registration result IE defined in TS 24.501 [13]
 * clause 9.11.3.6.1.
 *
 * 3GPP TS 33.128, clause 8.5.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSOverNASIndicator  ::=  ENUMERATED
 * {
 *     sMSOverNASNotAllowed(1),
 *     sMSOverNASAllowed(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SMSOverNASIndicator = _enum_for_SMSOverNASIndicator;

/**
 * @summary SMSOverNASIndicator
 * @description
 * 
 * The SMSOverNASIndicator type is derived from the SMS over NAS transport
 * allowed portion of the 5GS registration result IE defined in TS 24.501 [13]
 * clause 9.11.3.6.1.
 *
 * 3GPP TS 33.128, clause 8.5.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSOverNASIndicator  ::=  ENUMERATED
 * {
 *     sMSOverNASNotAllowed(1),
 *     sMSOverNASAllowed(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SMSOverNASIndicator: typeof _enum_for_SMSOverNASIndicator = _enum_for_SMSOverNASIndicator;

/**
 * @summary SMSOverNASIndicator_sMSOverNASNotAllowed
 * @description
 *
 * SMS over NAS not allowed.
 *
 * 3GPP TS 33.128, clause 8.5.3.
 *
 * @constant
 * @type {number}
 */
export
const SMSOverNASIndicator_sMSOverNASNotAllowed: _enum_for_SMSOverNASIndicator.sMSOverNASNotAllowed = SMSOverNASIndicator.sMSOverNASNotAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMSOverNASNotAllowed
 * @description
 *
 * SMS over NAS not allowed.
 *
 * 3GPP TS 33.128, clause 8.5.3.
 *
 * @constant
 * @type {number}
 */
export
const sMSOverNASNotAllowed: _enum_for_SMSOverNASIndicator.sMSOverNASNotAllowed = SMSOverNASIndicator.sMSOverNASNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSOverNASIndicator_sMSOverNASAllowed
 * @description
 *
 * SMS over NAS allowed.
 *
 * 3GPP TS 33.128, clause 8.5.3.
 *
 * @constant
 * @type {number}
 */
export
const SMSOverNASIndicator_sMSOverNASAllowed: _enum_for_SMSOverNASIndicator.sMSOverNASAllowed = SMSOverNASIndicator.sMSOverNASAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMSOverNASAllowed
 * @description
 *
 * SMS over NAS allowed.
 *
 * 3GPP TS 33.128, clause 8.5.3.
 *
 * @constant
 * @type {number}
 */
export
const sMSOverNASAllowed: _enum_for_SMSOverNASIndicator.sMSOverNASAllowed = SMSOverNASIndicator.sMSOverNASAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SMSOverNASIndicator: $.ASN1Decoder<SMSOverNASIndicator> = $._decodeEnumerated;
export const _encode_SMSOverNASIndicator: $.ASN1Encoder<SMSOverNASIndicator> = $._encodeEnumerated;


/* eslint-enable */
