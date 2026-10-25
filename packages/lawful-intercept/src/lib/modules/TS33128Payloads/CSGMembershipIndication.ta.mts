/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CSGMembershipIndication
 * @description
 * 
 * The CSGMemebershipIndication indicates the UE is a member of the accessing
 * CSG cell. CSGMemebershipIndication is derived from the
 * CSG-Membership-Indication type defined in TS 32.299 [111] clause 7.2.46B.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.84.
 * https://www.3gpp.org/DynaReport/33128.htm
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
    /**
     * @description
     *
     * UE is not a member of the reported CSG.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.84.
     */
    notCSGMember = 1,
    /**
     * @description
     *
     * UE is a member of the reported CSG.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.84.
     */
    cSGMember = 2,
}

/**
 * @summary CSGMembershipIndication
 * @description
 * 
 * The CSGMemebershipIndication indicates the UE is a member of the accessing
 * CSG cell. CSGMemebershipIndication is derived from the
 * CSG-Membership-Indication type defined in TS 32.299 [111] clause 7.2.46B.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.84.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * The CSGMemebershipIndication indicates the UE is a member of the accessing
 * CSG cell. CSGMemebershipIndication is derived from the
 * CSG-Membership-Indication type defined in TS 32.299 [111] clause 7.2.46B.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.84.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * @description
 *
 * UE is not a member of the reported CSG.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.84.
 *
 * @constant
 * @type {number}
 */
export
const CSGMembershipIndication_notCSGMember = CSGMembershipIndication.notCSGMember satisfies CSGMembershipIndication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notCSGMember
 * @description
 *
 * UE is not a member of the reported CSG.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.84.
 *
 * @constant
 * @type {number}
 */
export
const notCSGMember = CSGMembershipIndication.notCSGMember satisfies CSGMembershipIndication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CSGMembershipIndication_cSGMember
 * @description
 *
 * UE is a member of the reported CSG.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.84.
 *
 * @constant
 * @type {number}
 */
export
const CSGMembershipIndication_cSGMember = CSGMembershipIndication.cSGMember satisfies CSGMembershipIndication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cSGMember
 * @description
 *
 * UE is a member of the reported CSG.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.84.
 *
 * @constant
 * @type {number}
 */
export
const cSGMember = CSGMembershipIndication.cSGMember satisfies CSGMembershipIndication; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CSGMembershipIndication: $.ASN1Decoder<CSGMembershipIndication> = $._decodeEnumerated;
export const _encode_CSGMembershipIndication: $.ASN1Encoder<CSGMembershipIndication> = $._encodeEnumerated;


/* eslint-enable */
