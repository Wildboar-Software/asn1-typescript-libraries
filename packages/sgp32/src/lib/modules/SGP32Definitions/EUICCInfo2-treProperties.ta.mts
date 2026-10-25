/* eslint-disable */
import {
    type ASN1Element as _Element,
    type BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EUICCInfo2_treProperties
 * @description
 *
 * Optional TRE properties inside EUICCInfo2. usesRemoteMemory is the only bit
 * that section 5.9.2 defines.
 *
 * SGP.32 v1.2, section 5.9.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EUICCInfo2-treProperties ::= BIT STRING {
 *     isDiscrete(0),
 *     isIntegrated(1),
 *     usesRemoteMemory(2) -- refers to the usage of remote memory protected by the Remote Memory Protection Function described in SGP.21 [4]
 * }
 * ```
 */
export
type EUICCInfo2_treProperties = BIT_STRING;

/**
 * @summary EUICCInfo2_treProperties_isDiscrete
 * @description
 *
 * SGP.32 v1.2 lists this bit and does not further define it. Annex C.
 * @constant
 */
export
const EUICCInfo2_treProperties_isDiscrete: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary isDiscrete
 * @description
 *
 * SGP.32 v1.2 does not further define this treProperties bit (Annex C).
 * @constant
 */
export
const isDiscrete: number = EUICCInfo2_treProperties_isDiscrete; /* SHORT_NAMED_BIT */

/**
 * @summary EUICCInfo2_treProperties_isIntegrated
 * @description
 *
 * SGP.32 v1.2 lists this bit and does not further define it. Annex C.
 * @constant
 */
export
const EUICCInfo2_treProperties_isIntegrated: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary isIntegrated
 * @description
 *
 * SGP.32 v1.2 does not further define this treProperties bit (Annex C).
 * @constant
 */
export
const isIntegrated: number = EUICCInfo2_treProperties_isIntegrated; /* SHORT_NAMED_BIT */

/**
 * @summary EUICCInfo2_treProperties_usesRemoteMemory
 * @description
 *
 * The TRE uses remote memory protected by the Remote Memory Protection
 * Function described in SGP.21, as cited by the EUICCInfo2 definition.
 *
 * SGP.32 v1.2, section 5.9.2.
 * @constant
 */
export
const EUICCInfo2_treProperties_usesRemoteMemory: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary usesRemoteMemory
 * @description
 *
 * Remote memory protected by the SGP.21 Remote Memory Protection Function
 * (SGP.32 v1.2, section 5.9.2).
 * @constant
 */
export
const usesRemoteMemory: number = EUICCInfo2_treProperties_usesRemoteMemory; /* SHORT_NAMED_BIT */
export const _decode_EUICCInfo2_treProperties: $.ASN1Decoder<EUICCInfo2_treProperties> = $._decodeBitString;
export const _encode_EUICCInfo2_treProperties: $.ASN1Encoder<EUICCInfo2_treProperties> = $._encodeBitString;


/* eslint-enable */
