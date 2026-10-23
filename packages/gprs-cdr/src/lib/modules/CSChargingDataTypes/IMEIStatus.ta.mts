/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMEIStatus
 * @description
 *
 * Result of the IMEI check that produced an observed-IMEI ticket. Clause
 * 5.1.3.11 requires a ticket for a blocklisted IMEI, a tracklisted IMEI, or
 * an IMEI that is not on the allow list. The table's examples are
 * blocklisted, tracklisted, and unknown. The ASN.1 identifiers still use the
 * older grey-list, black-list, and non-white-list names. TS 32.298 describes
 * those three values as tracklisted, blocklisted, and non-allowlisted, in
 * that order.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.11 and 6.1.3.19.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEIStatus  ::=  ENUMERATED {
 *    greyListedMobileEquipment        ( 0 ),
 *    blackListedMobileEquipment       ( 1 ),
 *    nonWhiteListedMobileEquipment    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_IMEIStatus {
    greyListedMobileEquipment = 0,
    blackListedMobileEquipment = 1,
    nonWhiteListedMobileEquipment = 2,
}

/**
 * @summary IMEIStatus
 * @description
 *
 * Result of the IMEI check that produced an observed-IMEI ticket. Clause
 * 5.1.3.11 requires a ticket for a blocklisted IMEI, a tracklisted IMEI, or
 * an IMEI that is not on the allow list. The table's examples are
 * blocklisted, tracklisted, and unknown. The ASN.1 identifiers still use the
 * older grey-list, black-list, and non-white-list names. TS 32.298 describes
 * those three values as tracklisted, blocklisted, and non-allowlisted, in
 * that order.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.11 and 6.1.3.19.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEIStatus  ::=  ENUMERATED {
 *    greyListedMobileEquipment        ( 0 ),
 *    blackListedMobileEquipment       ( 1 ),
 *    nonWhiteListedMobileEquipment    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
type IMEIStatus = _enum_for_IMEIStatus;

/**
 * @summary IMEIStatus
 * @description
 *
 * Result of the IMEI check that produced an observed-IMEI ticket. Clause
 * 5.1.3.11 requires a ticket for a blocklisted IMEI, a tracklisted IMEI, or
 * an IMEI that is not on the allow list. The table's examples are
 * blocklisted, tracklisted, and unknown. The ASN.1 identifiers still use the
 * older grey-list, black-list, and non-white-list names. TS 32.298 describes
 * those three values as tracklisted, blocklisted, and non-allowlisted, in
 * that order.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.11 and 6.1.3.19.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEIStatus  ::=  ENUMERATED {
 *    greyListedMobileEquipment        ( 0 ),
 *    blackListedMobileEquipment       ( 1 ),
 *    nonWhiteListedMobileEquipment    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
const IMEIStatus = _enum_for_IMEIStatus;

/**
 * @summary IMEIStatus_greyListedMobileEquipment
 * @description
 *
 * Tracklisted mobile equipment. The ASN.1 identifier is the older grey-list
 * name. A ticket is generated when tracklisted equipment is detected during
 * an IMEI check. 3GPP TS 32.250 V19.0.0 clauses 5.1.3.11 and 6.1.3.19.
 *
 * @constant
 * @type {number}
 */
export
const IMEIStatus_greyListedMobileEquipment: IMEIStatus = IMEIStatus.greyListedMobileEquipment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary greyListedMobileEquipment
 * @description
 *
 * Tracklisted mobile equipment. The ASN.1 identifier is the older grey-list
 * name. A ticket is generated when tracklisted equipment is detected during
 * an IMEI check. 3GPP TS 32.250 V19.0.0 clauses 5.1.3.11 and 6.1.3.19.
 *
 * @constant
 * @type {number}
 */
export
const greyListedMobileEquipment: IMEIStatus = IMEIStatus.greyListedMobileEquipment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMEIStatus_blackListedMobileEquipment
 * @description
 *
 * Blocklisted mobile equipment. The ASN.1 identifier is the older black-list
 * name. A ticket is generated when blocklisted equipment is detected during
 * an IMEI check. 3GPP TS 32.250 V19.0.0 clauses 5.1.3.11 and 6.1.3.19.
 *
 * @constant
 * @type {number}
 */
export
const IMEIStatus_blackListedMobileEquipment: IMEIStatus = IMEIStatus.blackListedMobileEquipment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary blackListedMobileEquipment
 * @description
 *
 * Blocklisted mobile equipment. The ASN.1 identifier is the older black-list
 * name. A ticket is generated when blocklisted equipment is detected during
 * an IMEI check. 3GPP TS 32.250 V19.0.0 clauses 5.1.3.11 and 6.1.3.19.
 *
 * @constant
 * @type {number}
 */
export
const blackListedMobileEquipment: IMEIStatus = IMEIStatus.blackListedMobileEquipment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMEIStatus_nonWhiteListedMobileEquipment
 * @description
 *
 * Mobile equipment that is not on the allow list. The ASN.1 identifier is
 * the older non-white-list name. Clause 6.1.3.19's examples also say
 * "unknown". 3GPP TS 32.250 V19.0.0 clauses 5.1.3.11 and 6.1.3.19.
 *
 * @constant
 * @type {number}
 */
export
const IMEIStatus_nonWhiteListedMobileEquipment: IMEIStatus = IMEIStatus.nonWhiteListedMobileEquipment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonWhiteListedMobileEquipment
 * @description
 *
 * Mobile equipment that is not on the allow list. The ASN.1 identifier is
 * the older non-white-list name. Clause 6.1.3.19's examples also say
 * "unknown". 3GPP TS 32.250 V19.0.0 clauses 5.1.3.11 and 6.1.3.19.
 *
 * @constant
 * @type {number}
 */
export
const nonWhiteListedMobileEquipment: IMEIStatus = IMEIStatus.nonWhiteListedMobileEquipment; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_IMEIStatus: $.ASN1Decoder<IMEIStatus> = $._decodeEnumerated;

export
const _encode_IMEIStatus: $.ASN1Encoder<IMEIStatus> = $._encodeEnumerated;

/* eslint-enable */
