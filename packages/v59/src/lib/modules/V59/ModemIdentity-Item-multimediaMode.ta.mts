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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ModemIdentity_Item_multimediaMode
 * @description
 *
 * Multimedia capability BIT STRING (Table 4/V.59). Bit 0 is LSB when displayed
 * (ITU-T Rec. V.59 Cor.1 (07/2001) §6.2.3). ITU-T Rec. V.59 (11/2000) §6.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModemIdentity-Item-multimediaMode ::= BIT STRING {dataMode(0), faxT30(1), faxT30C(2), fAXT30F(3),
 *                             voiceV253(4), sVDV70(5), sVDV61(6), vidTelH324(7),
 *                             v80other(8), v18Text(9)}
 * ```
 */
export
type ModemIdentity_Item_multimediaMode = BIT_STRING;

/**
 * @summary ModemIdentity_Item_multimediaMode_dataMode
 * @description
 *
 * Bit 0: Data mode. Table 4/V.59. ITU-T Rec. V.59 (11/2000) §6.5.
 * @constant
 */
export
const ModemIdentity_Item_multimediaMode_dataMode: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary dataMode
 * @constant
 */
export
const dataMode: number = ModemIdentity_Item_multimediaMode_dataMode; /* SHORT_NAMED_BIT */

/**
 * @summary ModemIdentity_Item_multimediaMode_faxT30
 * @description
 *
 * Bit 1: Facsimile per ITU-T T.30. Table 4/V.59. ITU-T Rec. V.59 (11/2000)
 * §6.5.
 * @constant
 */
export
const ModemIdentity_Item_multimediaMode_faxT30: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary faxT30
 * @constant
 */
export
const faxT30: number = ModemIdentity_Item_multimediaMode_faxT30; /* SHORT_NAMED_BIT */

/**
 * @summary ModemIdentity_Item_multimediaMode_faxT30C
 * @description
 *
 * Bit 2: Facsimile per Annex C/T.30. Table 4/V.59. ITU-T Rec. V.59 (11/2000)
 * §6.5.
 * @constant
 */
export
const ModemIdentity_Item_multimediaMode_faxT30C: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary faxT30C
 * @constant
 */
export
const faxT30C: number = ModemIdentity_Item_multimediaMode_faxT30C; /* SHORT_NAMED_BIT */

/**
 * @summary ModemIdentity_Item_multimediaMode_fAXT30F
 * @description
 *
 * Bit 3: Facsimile per Annex F/T.30. Table 4/V.59. ITU-T Rec. V.59 (11/2000)
 * §6.5.
 * @constant
 */
export
const ModemIdentity_Item_multimediaMode_fAXT30F: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary fAXT30F
 * @constant
 */
export
const fAXT30F: number = ModemIdentity_Item_multimediaMode_fAXT30F; /* SHORT_NAMED_BIT */

/**
 * @summary ModemIdentity_Item_multimediaMode_voiceV253
 * @description
 *
 * Bit 4: Voice function and control per ITU-T V.253. Table 4/V.59. ITU-T Rec.
 * V.59 (11/2000) §6.5.
 * @constant
 */
export
const ModemIdentity_Item_multimediaMode_voiceV253: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary voiceV253
 * @constant
 */
export
const voiceV253: number = ModemIdentity_Item_multimediaMode_voiceV253; /* SHORT_NAMED_BIT */

/**
 * @summary ModemIdentity_Item_multimediaMode_sVDV70
 * @description
 *
 * Bit 5: Simultaneous voice and data per ITU-T V.70. Table 4/V.59. ITU-T Rec.
 * V.59 (11/2000) §6.5.
 * @constant
 */
export
const ModemIdentity_Item_multimediaMode_sVDV70: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary sVDV70
 * @constant
 */
export
const sVDV70: number = ModemIdentity_Item_multimediaMode_sVDV70; /* SHORT_NAMED_BIT */

/**
 * @summary ModemIdentity_Item_multimediaMode_sVDV61
 * @description
 *
 * Bit 6: Simultaneous voice and data per ITU-T V.61. Table 4/V.59. ITU-T Rec.
 * V.59 (11/2000) §6.5.
 * @constant
 */
export
const ModemIdentity_Item_multimediaMode_sVDV61: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary sVDV61
 * @constant
 */
export
const sVDV61: number = ModemIdentity_Item_multimediaMode_sVDV61; /* SHORT_NAMED_BIT */

/**
 * @summary ModemIdentity_Item_multimediaMode_vidTelH324
 * @description
 *
 * Bit 7: Video telephony per ITU-T H.324. Table 4/V.59. ITU-T Rec. V.59
 * (11/2000) §6.5.
 * @constant
 */
export
const ModemIdentity_Item_multimediaMode_vidTelH324: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary vidTelH324
 * @constant
 */
export
const vidTelH324: number = ModemIdentity_Item_multimediaMode_vidTelH324; /* SHORT_NAMED_BIT */

/**
 * @summary ModemIdentity_Item_multimediaMode_v80other
 * @description
 *
 * Bit 8: Other V.80-type functionality. Table 4/V.59. ITU-T Rec. V.59 (11/2000)
 * §6.5.
 * @constant
 */
export
const ModemIdentity_Item_multimediaMode_v80other: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary v80other
 * @constant
 */
export
const v80other: number = ModemIdentity_Item_multimediaMode_v80other; /* SHORT_NAMED_BIT */

/**
 * @summary ModemIdentity_Item_multimediaMode_v18Text
 * @description
 *
 * Bit 9: V.18 text telephone. Table 4/V.59. ITU-T Rec. V.59 (11/2000) §6.5.
 * @constant
 */
export
const ModemIdentity_Item_multimediaMode_v18Text: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary v18Text
 * @constant
 */
export
const v18Text: number = ModemIdentity_Item_multimediaMode_v18Text; /* SHORT_NAMED_BIT */
export const _decode_ModemIdentity_Item_multimediaMode = $._decodeBitString;
export const _encode_ModemIdentity_Item_multimediaMode = $._encodeBitString;

/* eslint-enable */
