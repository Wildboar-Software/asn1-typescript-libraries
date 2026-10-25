/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary REDCAPIndication
 * @description
 * 
 * Indicates that the UE is a Reduced Capability (RedCap) UE.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.14.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * REDCAPIndication  ::=  ENUMERATED
 * {
 *     redCAP(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_REDCAPIndication {
    redCAP = 1,
}

/**
 * @summary REDCAPIndication
 * @description
 * 
 * Indicates that the UE is a Reduced Capability (RedCap) UE.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.14.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * REDCAPIndication  ::=  ENUMERATED
 * {
 *     redCAP(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type REDCAPIndication = _enum_for_REDCAPIndication;

/**
 * @summary REDCAPIndication
 * @description
 * 
 * Indicates that the UE is a Reduced Capability (RedCap) UE.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.14.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * REDCAPIndication  ::=  ENUMERATED
 * {
 *     redCAP(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const REDCAPIndication = _enum_for_REDCAPIndication;

/**
 * @summary REDCAPIndication_redCAP
 * @constant
 * @type {number}
 */
export
const REDCAPIndication_redCAP = REDCAPIndication.redCAP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary redCAP
 * @constant
 * @type {number}
 */
export
const redCAP = REDCAPIndication.redCAP; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_REDCAPIndication: $.ASN1Decoder<REDCAPIndication> = $._decodeEnumerated;
export const _encode_REDCAPIndication: $.ASN1Encoder<REDCAPIndication> = $._encodeEnumerated;


/* eslint-enable */
