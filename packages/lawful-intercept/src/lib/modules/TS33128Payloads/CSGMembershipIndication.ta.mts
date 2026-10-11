/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CSGMembershipIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGMembershipIndication  ::=  ENUMERATED
 * {
 *     notCSGMember(1),
 *     cSGMember(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CSGMembershipIndication {
    notCSGMember = 1,
    cSGMember = 2,
}

/**
 * @summary CSGMembershipIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGMembershipIndication  ::=  ENUMERATED
 * {
 *     notCSGMember(1),
 *     cSGMember(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CSGMembershipIndication = _enum_for_CSGMembershipIndication;

/**
 * @summary CSGMembershipIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGMembershipIndication  ::=  ENUMERATED
 * {
 *     notCSGMember(1),
 *     cSGMember(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CSGMembershipIndication = _enum_for_CSGMembershipIndication;

/**
 * @summary CSGMembershipIndication_notCSGMember
 * @constant
 * @type {number}
 */
export
const CSGMembershipIndication_notCSGMember: CSGMembershipIndication = CSGMembershipIndication.notCSGMember; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notCSGMember
 * @constant
 * @type {number}
 */
export
const notCSGMember: CSGMembershipIndication = CSGMembershipIndication.notCSGMember; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CSGMembershipIndication_cSGMember
 * @constant
 * @type {number}
 */
export
const CSGMembershipIndication_cSGMember: CSGMembershipIndication = CSGMembershipIndication.cSGMember; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cSGMember
 * @constant
 * @type {number}
 */
export
const cSGMember: CSGMembershipIndication = CSGMembershipIndication.cSGMember; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_CSGMembershipIndication: $.ASN1Decoder<CSGMembershipIndication> = $._decodeEnumerated;

export const _encode_CSGMembershipIndication: $.ASN1Encoder<CSGMembershipIndication> = $._encodeEnumerated;


/* eslint-enable */
