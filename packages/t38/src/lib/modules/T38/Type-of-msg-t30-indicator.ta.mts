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
 * `t30-indicator` enumerations. Root values 0-15 are 1998/2002
 * syntax; names after `...` are version-3 extensions (V.8, V.34,
 * V.33). The generated constants for those extensions currently
 * all share numeric value 16; Annex A treats them as distinct.
 * ITU-T Rec. T.38 (11/2015) §7.3.1, Table 3.
 */
export enum _enum_for_Type_of_msg_t30_indicator {
  /** No TDM signal (e.g. V.21 to V.17). */
  no_signal = 0,
  /** CNG calling tone, 1100 Hz. */
  cng = 1,
  /** CED called-station identification, 2100 Hz. */
  ced = 2,
  /** V.21 HDLC preamble flags. */
  v21_preamble = 3,
  /** V.27 ter 2400 bit/s training. */
  v27_2400_training = 4,
  /** V.27 ter 4800 bit/s training. */
  v27_4800_training = 5,
  /** V.29 7200 bit/s training. */
  v29_7200_training = 6,
  /** V.29 9600 bit/s training. */
  v29_9600_training = 7,
  /** V.17 7200 bit/s short training. */
  v17_7200_short_training = 8,
  /** V.17 7200 bit/s long training. */
  v17_7200_long_training = 9,
  /** V.17 9600 bit/s short training. */
  v17_9600_short_training = 10,
  /** V.17 9600 bit/s long training. */
  v17_9600_long_training = 11,
  /** V.17 12 000 bit/s short training. */
  v17_12000_short_training = 12,
  /** V.17 12 000 bit/s long training. */
  v17_12000_long_training = 13,
  /** V.17 14 400 bit/s short training. */
  v17_14400_short_training = 14,
  /** V.17 14 400 bit/s long training. */
  v17_14400_long_training = 15,
  /** V.8 ANSam. Report as `ced` to a non-V.34 peer. */
  v8_ansam = 16,
  /** V.8 signal (e.g. turn-around polling after DTC). */
  v8_signal = 16,
  /** V.34 control channel at 1200 bit/s. */
  v34_cntl_channel_1200 = 16,
  /** Transition to the V.34 primary channel. */
  v34_pri_channel = 16,
  /** V.34 control-channel retrain (primary-rate change). */
  v34_CC_retrain = 16,
  /** V.33 12 000 bit/s training. */
  v33_12000_training = 16,
  /** V.33 14 400 bit/s training. */
  v33_14400_training = 16,
}


/**
 * @summary Type_of_msg_t30_indicator
 * @description
 *
 * Signals detected on the PSTN side, or to generate toward a G3FE:
 * CED/CNG, HDLC preamble, and modem training. Sent both ways
 * between gateways. Mandatory except when both G3FEs are IAF.
 * CNG and CED themselves are generated locally; the peer is told
 * they were detected so it can regenerate them. The receiver of an
 * indicator is responsible for the analogue cadence and for
 * terminating it.
 *
 * "No signal" may be sent whenever TDM input is idle, including
 * between V.21 and high-speed modulations. `v8-ansam` is reported
 * only to a V.34-capable emitting gateway; otherwise map ANSam to
 * `ced`. Do not send version-3 indicators to a version 0-2 peer.
 * ITU-T Rec. T.38 (11/2015) §6.2, §7.3.1, §10.1, §10.4, Table 3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Type-of-msg-t30-indicator ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type Type_of_msg_t30_indicator =
  | _enum_for_Type_of_msg_t30_indicator
  | ENUMERATED;


/**
 * @summary Type_of_msg_t30_indicator_no_signal
 * @description No TDM signal (e.g. between V.21 and V.17).
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_no_signal: Type_of_msg_t30_indicator = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary no_signal
 * @description No TDM signal (e.g. between V.21 and V.17).
 * @constant
 * @type {number}
 */
export const no_signal: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_no_signal; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_cng
 * @description CNG calling tone, 1100 Hz. Generated locally; this reports
 * detection.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_cng: Type_of_msg_t30_indicator = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary cng
 * @description CNG calling tone, 1100 Hz. Generated locally; this reports
 * detection.
 * @constant
 * @type {number}
 */
export const cng: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_cng; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_ced
 * @description CED called-station identification, 2100 Hz. Also used to report
 * ANSam to a non-V.34 peer.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_ced: Type_of_msg_t30_indicator = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary ced
 * @description CED called-station identification, 2100 Hz. Also used to report
 * ANSam to a non-V.34 peer.
 * @constant
 * @type {number}
 */
export const ced: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_ced; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v21_preamble
 * @description V.21 HDLC preamble flags.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v21_preamble: Type_of_msg_t30_indicator = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v21_preamble
 * @description V.21 HDLC preamble flags.
 * @constant
 * @type {number}
 */
export const v21_preamble: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v21_preamble; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v27_2400_training
 * @description V.27 ter 2400 bit/s modulation training.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v27_2400_training: Type_of_msg_t30_indicator = 4; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v27_2400_training
 * @description V.27 ter 2400 bit/s modulation training.
 * @constant
 * @type {number}
 */
export const v27_2400_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v27_2400_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v27_4800_training
 * @description V.27 ter 4800 bit/s modulation training.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v27_4800_training: Type_of_msg_t30_indicator = 5; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v27_4800_training
 * @description V.27 ter 4800 bit/s modulation training.
 * @constant
 * @type {number}
 */
export const v27_4800_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v27_4800_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v29_7200_training
 * @description V.29 7200 bit/s modulation training.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v29_7200_training: Type_of_msg_t30_indicator = 6; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v29_7200_training
 * @description V.29 7200 bit/s modulation training.
 * @constant
 * @type {number}
 */
export const v29_7200_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v29_7200_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v29_9600_training
 * @description V.29 9600 bit/s modulation training.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v29_9600_training: Type_of_msg_t30_indicator = 7; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v29_9600_training
 * @description V.29 9600 bit/s modulation training.
 * @constant
 * @type {number}
 */
export const v29_9600_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v29_9600_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v17_7200_short_training
 * @description V.17 7200 bit/s short training.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v17_7200_short_training: Type_of_msg_t30_indicator = 8; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v17_7200_short_training
 * @description V.17 7200 bit/s short training.
 * @constant
 * @type {number}
 */
export const v17_7200_short_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v17_7200_short_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v17_7200_long_training
 * @description V.17 7200 bit/s long training.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v17_7200_long_training: Type_of_msg_t30_indicator = 9; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v17_7200_long_training
 * @description V.17 7200 bit/s long training.
 * @constant
 * @type {number}
 */
export const v17_7200_long_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v17_7200_long_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v17_9600_short_training
 * @description V.17 9600 bit/s short training.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v17_9600_short_training: Type_of_msg_t30_indicator = 10; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v17_9600_short_training
 * @description V.17 9600 bit/s short training.
 * @constant
 * @type {number}
 */
export const v17_9600_short_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v17_9600_short_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v17_9600_long_training
 * @description V.17 9600 bit/s long training.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v17_9600_long_training: Type_of_msg_t30_indicator = 11; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v17_9600_long_training
 * @description V.17 9600 bit/s long training.
 * @constant
 * @type {number}
 */
export const v17_9600_long_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v17_9600_long_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v17_12000_short_training
 * @description V.17 12 000 bit/s short training.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v17_12000_short_training: Type_of_msg_t30_indicator = 12; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v17_12000_short_training
 * @description V.17 12 000 bit/s short training.
 * @constant
 * @type {number}
 */
export const v17_12000_short_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v17_12000_short_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v17_12000_long_training
 * @description V.17 12 000 bit/s long training.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v17_12000_long_training: Type_of_msg_t30_indicator = 13; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v17_12000_long_training
 * @description V.17 12 000 bit/s long training.
 * @constant
 * @type {number}
 */
export const v17_12000_long_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v17_12000_long_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v17_14400_short_training
 * @description V.17 14 400 bit/s short training.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v17_14400_short_training: Type_of_msg_t30_indicator = 14; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v17_14400_short_training
 * @description V.17 14 400 bit/s short training.
 * @constant
 * @type {number}
 */
export const v17_14400_short_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v17_14400_short_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v17_14400_long_training
 * @description V.17 14 400 bit/s long training.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v17_14400_long_training: Type_of_msg_t30_indicator = 15; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v17_14400_long_training
 * @description V.17 14 400 bit/s long training.
 * @constant
 * @type {number}
 */
export const v17_14400_long_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v17_14400_long_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v8_ansam
 * @description V.8 ANSam. Version-3 extension. Report as `ced` to version 0-2
 * peers.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v8_ansam: Type_of_msg_t30_indicator = 16; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v8_ansam
 * @description V.8 ANSam. Version-3 extension. Report as `ced` to version 0-2
 * peers.
 * @constant
 * @type {number}
 */
export const v8_ansam: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v8_ansam; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v8_signal
 * @description V.8 signal; used e.g. for turn-around polling after DTC.
 * Version-3 extension.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v8_signal: Type_of_msg_t30_indicator = 16; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v8_signal
 * @description V.8 signal; used e.g. for turn-around polling after DTC.
 * Version-3 extension.
 * @constant
 * @type {number}
 */
export const v8_signal: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v8_signal; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v34_cntl_channel_1200
 * @description V.34 control channel at 1200 bit/s (after primary turn-off).
 * Version-3 extension.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v34_cntl_channel_1200: Type_of_msg_t30_indicator = 16; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v34_cntl_channel_1200
 * @description V.34 control channel at 1200 bit/s (after primary turn-off).
 * Version-3 extension.
 * @constant
 * @type {number}
 */
export const v34_cntl_channel_1200: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v34_cntl_channel_1200; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v34_pri_channel
 * @description Ready to switch from control channel to V.34 primary. Version-3
 * extension.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v34_pri_channel: Type_of_msg_t30_indicator = 16; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v34_pri_channel
 * @description Ready to switch from control channel to V.34 primary. Version-3
 * extension.
 * @constant
 * @type {number}
 */
export const v34_pri_channel: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v34_pri_channel; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v34_CC_retrain
 * @description V.34 control-channel retrain to change the primary rate.
 * Version-3 extension.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v34_CC_retrain: Type_of_msg_t30_indicator = 16; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v34_CC_retrain
 * @description V.34 control-channel retrain to change the primary rate.
 * Version-3 extension.
 * @constant
 * @type {number}
 */
export const v34_CC_retrain: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v34_CC_retrain; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v33_12000_training
 * @description V.33 12 000 bit/s modulation training. Version-3 extension.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v33_12000_training: Type_of_msg_t30_indicator = 16; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v33_12000_training
 * @description V.33 12 000 bit/s modulation training. Version-3 extension.
 * @constant
 * @type {number}
 */
export const v33_12000_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v33_12000_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v33_14400_training
 * @description V.33 14 400 bit/s modulation training. Version-3 extension.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v33_14400_training: Type_of_msg_t30_indicator = 16; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v33_14400_training
 * @description V.33 14 400 bit/s modulation training. Version-3 extension.
 * @constant
 * @type {number}
 */
export const v33_14400_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v33_14400_training; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_Type_of_msg_t30_indicator = $._decodeEnumerated;




export const _encode_Type_of_msg_t30_indicator = $._encodeEnumerated;


/* eslint-enable */
