/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MBMSInformation_mBMS2G3GIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSInformation-mBMS2G3GIndicator ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MBMSInformation_mBMS2G3GIndicator {
    twoG = 0,
    threeG = 1,
    twoG_AND_threeG = 2,
}

/**
 * @summary MBMSInformation_mBMS2G3GIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSInformation-mBMS2G3GIndicator ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type MBMSInformation_mBMS2G3GIndicator = _enum_for_MBMSInformation_mBMS2G3GIndicator;

/**
 * @summary MBMSInformation_mBMS2G3GIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSInformation-mBMS2G3GIndicator ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const MBMSInformation_mBMS2G3GIndicator = _enum_for_MBMSInformation_mBMS2G3GIndicator;

/**
 * @summary MBMSInformation_mBMS2G3GIndicator_twoG
 * @constant
 * @type {number}
 */
export
const MBMSInformation_mBMS2G3GIndicator_twoG: MBMSInformation_mBMS2G3GIndicator = MBMSInformation_mBMS2G3GIndicator.twoG; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary twoG
 * @constant
 * @type {number}
 */
export
const twoG: MBMSInformation_mBMS2G3GIndicator = MBMSInformation_mBMS2G3GIndicator.twoG; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMSInformation_mBMS2G3GIndicator_threeG
 * @constant
 * @type {number}
 */
export
const MBMSInformation_mBMS2G3GIndicator_threeG: MBMSInformation_mBMS2G3GIndicator = MBMSInformation_mBMS2G3GIndicator.threeG; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary threeG
 * @constant
 * @type {number}
 */
export
const threeG: MBMSInformation_mBMS2G3GIndicator = MBMSInformation_mBMS2G3GIndicator.threeG; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMSInformation_mBMS2G3GIndicator_twoG_AND_threeG
 * @constant
 * @type {number}
 */
export
const MBMSInformation_mBMS2G3GIndicator_twoG_AND_threeG: MBMSInformation_mBMS2G3GIndicator = MBMSInformation_mBMS2G3GIndicator.twoG_AND_threeG; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary twoG_AND_threeG
 * @constant
 * @type {number}
 */
export
const twoG_AND_threeG: MBMSInformation_mBMS2G3GIndicator = MBMSInformation_mBMS2G3GIndicator.twoG_AND_threeG; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MBMSInformation_mBMS2G3GIndicator: $.ASN1Decoder<MBMSInformation_mBMS2G3GIndicator> = $._decodeEnumerated;

export
const _encode_MBMSInformation_mBMS2G3GIndicator: $.ASN1Encoder<MBMSInformation_mBMS2G3GIndicator> = $._encodeEnumerated;

/* eslint-enable */
