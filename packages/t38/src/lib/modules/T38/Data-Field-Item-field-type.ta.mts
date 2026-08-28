/* eslint-disable */
import {
  ENUMERATED,
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
 * `field-type` enumerations. Root values 0-7 are 1998/2002 syntax;
 * names after `...` are version-3 extensions (V.8 CM/JM/CI, V.34
 * rate). The generated constants for those extensions currently
 * all share numeric value 8; Annex A treats them as distinct.
 * ITU-T Rec. T.38 (11/2015) §7.4, Table 5.
 */
export enum _enum_for_Data_Field_Item_field_type {
  /** HDLC frame octets without FCS; bit stuffing removed. */
  hdlc_data = 0,
  /** HDLC energy below turn-off; no `field-data`. */
  hdlc_sig_end = 1,
  /** End of HDLC frame, FCS good, more frames follow. */
  hdlc_fcs_OK = 2,
  /** End of HDLC frame, FCS bad, more frames follow. */
  hdlc_fcs_BAD = 3,
  /** End of HDLC frame, FCS good; stop V.21 or send V.34 flags. */
  hdlc_fcs_OK_sig_end = 4,
  /** End of HDLC frame, FCS bad; final frame, stop transmission. */
  hdlc_fcs_BAD_sig_end = 5,
  /** Non-ECM T.4 Phase C or Method-2 TCF; not the last chunk. */
  t4_non_ecm_data = 6,
  /** Last non-ECM T.4 Phase C or Method-2 TCF chunk. */
  t4_non_ecm_sig_end = 7,
  /** V.8 CM as FAP profile digit `1`..`6`. */
  cm_message = 8,
  /** ACK/NAK to `cm-message` (`A0` / `N0`..`N2`). */
  jm_message = 8,
  /** V.8 CI: IA5 `4` (send) or `5` (receive). */
  ci_message = 8,
  /** V.34 primary DSR; three IA5 digits, rate/100. */
  v34rate = 8,
}


/**
 * @summary Data_Field_Item_field_type
 * @description
 *
 * Kind of one DATA-Field entry. `hdlc-data` carries T.30 control
 * and ECM Phase C: address through but not including FCS, bit
 * stuffing removed; the peer regenerates flags, stuffing, and FCS.
 * `*-sig-end` marks the end of a message (or HDLC energy drop).
 * Non-ECM T.4 / Method-2 TCF uses `t4-non-ecm-*`. Skip an
 * unrecognized Field-Type and continue with the next field.
 * Emit `cm-message` after two identical consecutive facsimile CMs;
 * `jm-message` ACK/NAK after two identical consecutive JMs;
 * `ci-message` when CI answers DIS (manual V.34 entry).
 *
 * Version-3 V.8/V.34 fields: `cm-message` is one IA5 profile digit
 * (Table 8: 1-6); `jm-message` is two IA5 chars (`A0` ACK, `N0`
 * no compatible mode, `N1` fall back to G3, `N2` V.34-only);
 * `ci-message` is IA5 `4` or `5` from CI call-function bits 6-8;
 * `v34rate` is three IA5 digits encoding primary DSR/100 (`024` =
 * 2400 bit/s; 2400 bit/s at the receiving GW/G3FE pair is
 * disallowed). ITU-T Rec. T.38 (11/2015)
 * [§7.4](https://www.itu.int/rec/T-REC-T.38-201511-I), Tables 5,
 * 8, 9; §10.1-§10.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Data-Field-Item-field-type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type Data_Field_Item_field_type =
  | _enum_for_Data_Field_Item_field_type
  | ENUMERATED;


/**
 * @summary Data_Field_Item_field_type_hdlc_data
 * @description HDLC octets of one frame, address through but not including FCS;
 * bit stuffing removed. Partial frames allowed.
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_hdlc_data: Data_Field_Item_field_type = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary hdlc_data
 * @description HDLC octets of one frame, address through but not including FCS;
 * bit stuffing removed. Partial frames allowed.
 * @constant
 * @type {number}
 */
export const hdlc_data: Data_Field_Item_field_type = Data_Field_Item_field_type_hdlc_data; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Data_Field_Item_field_type_hdlc_sig_end
 * @description HDLC energy dropped below the turn-off threshold. No
 * `field-data`. May end a V.34 control channel.
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_hdlc_sig_end: Data_Field_Item_field_type = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary hdlc_sig_end
 * @description HDLC energy dropped below the turn-off threshold. No
 * `field-data`. May end a V.34 control channel.
 * @constant
 * @type {number}
 */
export const hdlc_sig_end: Data_Field_Item_field_type = Data_Field_Item_field_type_hdlc_sig_end; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Data_Field_Item_field_type_hdlc_fcs_OK
 * @description End of an HDLC frame; FCS good; more frames follow. No
 * `field-data`.
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_hdlc_fcs_OK: Data_Field_Item_field_type = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary hdlc_fcs_OK
 * @description End of an HDLC frame; FCS good; more frames follow. No
 * `field-data`.
 * @constant
 * @type {number}
 */
export const hdlc_fcs_OK: Data_Field_Item_field_type = Data_Field_Item_field_type_hdlc_fcs_OK; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Data_Field_Item_field_type_hdlc_fcs_BAD
 * @description End of an HDLC frame; FCS bad; more frames follow. No
 * `field-data`.
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_hdlc_fcs_BAD: Data_Field_Item_field_type = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary hdlc_fcs_BAD
 * @description End of an HDLC frame; FCS bad; more frames follow. No
 * `field-data`.
 * @constant
 * @type {number}
 */
export const hdlc_fcs_BAD: Data_Field_Item_field_type = Data_Field_Item_field_type_hdlc_fcs_BAD; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Data_Field_Item_field_type_hdlc_fcs_OK_sig_end
 * @description End of HDLC frame; FCS good. Non-V.34: stop V.21. V.34: send
 * flags after the frame. No `field-data`.
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_hdlc_fcs_OK_sig_end: Data_Field_Item_field_type = 4; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary hdlc_fcs_OK_sig_end
 * @description End of HDLC frame; FCS good. Non-V.34: stop V.21. V.34: send
 * flags after the frame. No `field-data`.
 * @constant
 * @type {number}
 */
export const hdlc_fcs_OK_sig_end: Data_Field_Item_field_type = Data_Field_Item_field_type_hdlc_fcs_OK_sig_end; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Data_Field_Item_field_type_hdlc_fcs_BAD_sig_end
 * @description End of HDLC frame; FCS bad; this is the final frame; stop
 * transmission. No `field-data`.
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_hdlc_fcs_BAD_sig_end: Data_Field_Item_field_type = 5; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary hdlc_fcs_BAD_sig_end
 * @description End of HDLC frame; FCS bad; this is the final frame; stop
 * transmission. No `field-data`.
 * @constant
 * @type {number}
 */
export const hdlc_fcs_BAD_sig_end: Data_Field_Item_field_type = Data_Field_Item_field_type_hdlc_fcs_BAD_sig_end; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Data_Field_Item_field_type_t4_non_ecm_data
 * @description Non-ECM T.4 Phase C or Method-2 TCF; not the last chunk.
 * `field-data` includes fill bits and RTC.
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_t4_non_ecm_data: Data_Field_Item_field_type = 6; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary t4_non_ecm_data
 * @description Non-ECM T.4 Phase C or Method-2 TCF; not the last chunk.
 * `field-data` includes fill bits and RTC.
 * @constant
 * @type {number}
 */
export const t4_non_ecm_data: Data_Field_Item_field_type = Data_Field_Item_field_type_t4_non_ecm_data; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Data_Field_Item_field_type_t4_non_ecm_sig_end
 * @description Last non-ECM T.4 Phase C or Method-2 TCF chunk. `field-data`
 * includes fill bits and RTC.
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_t4_non_ecm_sig_end: Data_Field_Item_field_type = 7; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary t4_non_ecm_sig_end
 * @description Last non-ECM T.4 Phase C or Method-2 TCF chunk. `field-data`
 * includes fill bits and RTC.
 * @constant
 * @type {number}
 */
export const t4_non_ecm_sig_end: Data_Field_Item_field_type = Data_Field_Item_field_type_t4_non_ecm_sig_end; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Data_Field_Item_field_type_cm_message
 * @description V.8 CM as a facsimile application profile. `field-data`: one IA5
 * digit `1`..`6` (Table 8). Version-3 extension.
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_cm_message: Data_Field_Item_field_type = 8; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary cm_message
 * @description V.8 CM as a facsimile application profile. `field-data`: one IA5
 * digit `1`..`6` (Table 8). Version-3 extension.
 * @constant
 * @type {number}
 */
export const cm_message: Data_Field_Item_field_type = Data_Field_Item_field_type_cm_message; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Data_Field_Item_field_type_jm_message
 * @description ACK/NAK to `cm-message`. `field-data`: two IA5 chars (`A0`,
 * `N0`, `N1`, `N2`; Table 9). Version-3 extension.
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_jm_message: Data_Field_Item_field_type = 8; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary jm_message
 * @description ACK/NAK to `cm-message`. `field-data`: two IA5 chars (`A0`,
 * `N0`, `N1`, `N2`; Table 9). Version-3 extension.
 * @constant
 * @type {number}
 */
export const jm_message: Data_Field_Item_field_type = Data_Field_Item_field_type_jm_message; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Data_Field_Item_field_type_ci_message
 * @description V.8 CI call function. `field-data`: IA5 `4` (sending) or `5`
 * (receiving). Version-3 extension.
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_ci_message: Data_Field_Item_field_type = 8; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary ci_message
 * @description V.8 CI call function. `field-data`: IA5 `4` (sending) or `5`
 * (receiving). Version-3 extension.
 * @constant
 * @type {number}
 */
export const ci_message: Data_Field_Item_field_type = Data_Field_Item_field_type_ci_message; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Data_Field_Item_field_type_v34rate
 * @description Negotiated V.34 primary DSR. `field-data`: three IA5 digits,
 * rate/100 (`024` = 2400 bit/s). Version-3 extension.
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_v34rate: Data_Field_Item_field_type = 8; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v34rate
 * @description Negotiated V.34 primary DSR. `field-data`: three IA5 digits,
 * rate/100 (`024` = 2400 bit/s). Version-3 extension.
 * @constant
 * @type {number}
 */
export const v34rate: Data_Field_Item_field_type = Data_Field_Item_field_type_v34rate; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_Data_Field_Item_field_type = $._decodeEnumerated;




export const _encode_Data_Field_Item_field_type = $._encodeEnumerated;


/* eslint-enable */
