/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary SupportedCmipProfiles
 * @description
 *
 * CMIP profiles supported by the system in the agent role. Optional
 * on a repertoire object; present when that object represents the
 * components that support communications. Named bits:
 *
 * - `aom10`(0): ISP 11183-1
 * - `aom11`(1): ISP 11183-3
 * - `aom12`(2): ISP 11183-2
 *
 * ITU-T Rec. X.750 (10/96)
 * [A.2.3](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * A.2.1 (supportedCmipProfilesPackage).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedCmipProfiles  ::=  BIT STRING {
 *   aom10(0), -- the managed system supports ISP 11183-1
 *   aom11(1), -- the managed system supports ISP 11183-3
 *   aom12(2)}
 * ```
 */
export type SupportedCmipProfiles = BIT_STRING;

/**
 * @summary SupportedCmipProfiles_aom10
 * @description
 *
 * Bit 0: the managed system supports ISP 11183-1. ITU-T Rec. X.750
 * (10/96) A.2.3.
 * @constant
 */
export const SupportedCmipProfiles_aom10: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary aom10
 * @description
 *
 * Bit 0: the managed system supports ISP 11183-1. ITU-T Rec. X.750
 * (10/96) A.2.3.
 * @constant
 */
export const aom10: number = SupportedCmipProfiles_aom10; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedCmipProfiles_aom11
 * @description
 *
 * Bit 1: the managed system supports ISP 11183-3. ITU-T Rec. X.750
 * (10/96) A.2.3.
 * @constant
 */
export const SupportedCmipProfiles_aom11: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary aom11
 * @description
 *
 * Bit 1: the managed system supports ISP 11183-3. ITU-T Rec. X.750
 * (10/96) A.2.3.
 * @constant
 */
export const aom11: number = SupportedCmipProfiles_aom11; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedCmipProfiles_aom12
 * @description
 *
 * Bit 2: the managed system supports ISP 11183-2. ITU-T Rec. X.750
 * (10/96) A.2.3.
 * @constant
 */
export const SupportedCmipProfiles_aom12: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary aom12
 * @description
 *
 * Bit 2: the managed system supports ISP 11183-2. ITU-T Rec. X.750
 * (10/96) A.2.3.
 * @constant
 */
export const aom12: number = SupportedCmipProfiles_aom12; /* SHORT_NAMED_BIT */


export const _decode_SupportedCmipProfiles = $._decodeBitString;


export const _encode_SupportedCmipProfiles = $._encodeBitString;


/* eslint-enable */
