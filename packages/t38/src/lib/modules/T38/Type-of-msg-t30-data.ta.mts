/* eslint-disable */
import {
  type ENUMERATED,
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
 * `t30-data` enumerations: modulation that carried the DATA
 * element. Root values 0-8 are 1998/2002 syntax; names after `...`
 * are version-3 extensions (V.8, V.34, V.33). The generated
 * constants for those extensions currently all share numeric value
 * 9; Annex A treats them as distinct. ITU-T Rec. T.38 (11/2015)
 * §7.3.2, Table 4.
 */
export const _enum_for_Type_of_msg_t30_data = {
  /** V.21 Channel 2. */
  v21: 0,
  /** V.27 ter 2400 bit/s. */
  v27_2400: 1,
  /** V.27 ter 4800 bit/s. */
  v27_4800: 2,
  /** V.29 7200 bit/s. */
  v29_7200: 3,
  /** V.29 9600 bit/s. */
  v29_9600: 4,
  /** V.17 7200 bit/s. */
  v17_7200: 5,
  /** V.17 9600 bit/s. */
  v17_9600: 6,
  /** V.17 12 000 bit/s. */
  v17_12000: 7,
  /** V.17 14 400 bit/s. */
  v17_14400: 8,
  /** V.8 control-signal data. */
  v8: 9,
  /** V.34 primary-channel rate (`v34rate` Field-Type). */
  v34_pri_rate: 9,
  /** V.34 control channel at 1200 bit/s. */
  v34_CC_1200: 9,
  /** V.34 primary channel (ECM image). */
  v34_pri_ch: 9,
  /** V.33 12 000 bit/s. */
  v33_12000: 9,
  /** V.33 14 400 bit/s. */
  v33_14400: 9,
} as const;

export type _enum_for_Type_of_msg_t30_data = (typeof _enum_for_Type_of_msg_t30_data)[keyof typeof _enum_for_Type_of_msg_t30_data];


/**
 * @summary Type_of_msg_t30_data
 * @description
 *
 * Modulation used to carry the packet's DATA element: T.30 HDLC
 * control, Phase C image (T.4/T.6 or other), and, with V.34, V.8
 * control-signal data plus V.34 control and primary channels.
 * If both G3FEs are IAF, these values shall be ignored (the IP
 * rate is set at call set-up).
 *
 * V.21 HDLC frames shall be at most 7 octets per IFP packet except
 * at IAF devices; split larger frames. Control-channel packets use
 * `v34-CC-1200` with `hdlc-*` Field-Types; primary-channel image
 * uses `v34-pri-ch` (ECM is required). After control-channel
 * start-up the emitting gateway holds flags until `v34-pri-rate`
 * arrives, then retrains if needed so its primary rate is less
 * than or equal to the receiving GW/G3FE pair.
 * ITU-T Rec. T.38 (11/2015)
 * [§7.3.2](https://www.itu.int/rec/T-REC-T.38-201511-I), §7.5,
 * §10.2-§10.3, Table 4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Type-of-msg-t30-data ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type Type_of_msg_t30_data = _enum_for_Type_of_msg_t30_data | ENUMERATED;


/**
 * @summary Type_of_msg_t30_data_v21
 * @description V.21 Channel 2: T.30 HDLC control (and, for IAF, any data).
 * Ignore if both G3FEs are IAF.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v21 = _enum_for_Type_of_msg_t30_data.v21; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v21
 * @description V.21 Channel 2: T.30 HDLC control (and, for IAF, any data).
 * Ignore if both G3FEs are IAF.
 * @constant
 * @type {number}
 */
export const v21 = Type_of_msg_t30_data_v21; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v27_2400
 * @description V.27 ter 2400 bit/s data. Ignore if both G3FEs are IAF.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v27_2400 = _enum_for_Type_of_msg_t30_data.v27_2400; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v27_2400
 * @description V.27 ter 2400 bit/s data. Ignore if both G3FEs are IAF.
 * @constant
 * @type {number}
 */
export const v27_2400 = Type_of_msg_t30_data_v27_2400; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v27_4800
 * @description V.27 ter 4800 bit/s data. Ignore if both G3FEs are IAF.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v27_4800 = _enum_for_Type_of_msg_t30_data.v27_4800; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v27_4800
 * @description V.27 ter 4800 bit/s data. Ignore if both G3FEs are IAF.
 * @constant
 * @type {number}
 */
export const v27_4800 = Type_of_msg_t30_data_v27_4800; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v29_7200
 * @description V.29 7200 bit/s data. Ignore if both G3FEs are IAF.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v29_7200 = _enum_for_Type_of_msg_t30_data.v29_7200; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v29_7200
 * @description V.29 7200 bit/s data. Ignore if both G3FEs are IAF.
 * @constant
 * @type {number}
 */
export const v29_7200 = Type_of_msg_t30_data_v29_7200; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v29_9600
 * @description V.29 9600 bit/s data. Ignore if both G3FEs are IAF.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v29_9600 = _enum_for_Type_of_msg_t30_data.v29_9600; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v29_9600
 * @description V.29 9600 bit/s data. Ignore if both G3FEs are IAF.
 * @constant
 * @type {number}
 */
export const v29_9600 = Type_of_msg_t30_data_v29_9600; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v17_7200
 * @description V.17 7200 bit/s data. Ignore if both G3FEs are IAF.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v17_7200 = _enum_for_Type_of_msg_t30_data.v17_7200; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v17_7200
 * @description V.17 7200 bit/s data. Ignore if both G3FEs are IAF.
 * @constant
 * @type {number}
 */
export const v17_7200 = Type_of_msg_t30_data_v17_7200; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v17_9600
 * @description V.17 9600 bit/s data. Ignore if both G3FEs are IAF.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v17_9600 = _enum_for_Type_of_msg_t30_data.v17_9600; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v17_9600
 * @description V.17 9600 bit/s data. Ignore if both G3FEs are IAF.
 * @constant
 * @type {number}
 */
export const v17_9600 = Type_of_msg_t30_data_v17_9600; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v17_12000
 * @description V.17 12 000 bit/s data. Ignore if both G3FEs are IAF.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v17_12000 = _enum_for_Type_of_msg_t30_data.v17_12000; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v17_12000
 * @description V.17 12 000 bit/s data. Ignore if both G3FEs are IAF.
 * @constant
 * @type {number}
 */
export const v17_12000 = Type_of_msg_t30_data_v17_12000; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v17_14400
 * @description V.17 14 400 bit/s data. Ignore if both G3FEs are IAF.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v17_14400 = _enum_for_Type_of_msg_t30_data.v17_14400; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v17_14400
 * @description V.17 14 400 bit/s data. Ignore if both G3FEs are IAF.
 * @constant
 * @type {number}
 */
export const v17_14400 = Type_of_msg_t30_data_v17_14400; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v8
 * @description V.8 control-signal data. Version-3 extension. Ignore if both
 * G3FEs are IAF.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v8 = _enum_for_Type_of_msg_t30_data.v8; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v8
 * @description V.8 control-signal data. Version-3 extension. Ignore if both
 * G3FEs are IAF.
 * @constant
 * @type {number}
 */
export const v8 = Type_of_msg_t30_data_v8; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v34_pri_rate
 * @description V.34 primary-channel rate (pairs with `v34rate` Field-Type).
 * Version-3 extension.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v34_pri_rate = _enum_for_Type_of_msg_t30_data.v34_pri_rate; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v34_pri_rate
 * @description V.34 primary-channel rate (pairs with `v34rate` Field-Type).
 * Version-3 extension.
 * @constant
 * @type {number}
 */
export const v34_pri_rate = Type_of_msg_t30_data_v34_pri_rate; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v34_CC_1200
 * @description V.34 control channel at 1200 bit/s; Field-Types `hdlc-*`.
 * Version-3 extension.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v34_CC_1200 = _enum_for_Type_of_msg_t30_data.v34_CC_1200; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v34_CC_1200
 * @description V.34 control channel at 1200 bit/s; Field-Types `hdlc-*`.
 * Version-3 extension.
 * @constant
 * @type {number}
 */
export const v34_CC_1200 = Type_of_msg_t30_data_v34_CC_1200; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v34_pri_ch
 * @description V.34 primary channel (ECM image); Field-Types `hdlc-*`.
 * Version-3 extension.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v34_pri_ch = _enum_for_Type_of_msg_t30_data.v34_pri_ch; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v34_pri_ch
 * @description V.34 primary channel (ECM image); Field-Types `hdlc-*`.
 * Version-3 extension.
 * @constant
 * @type {number}
 */
export const v34_pri_ch = Type_of_msg_t30_data_v34_pri_ch; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v33_12000
 * @description V.33 12 000 bit/s data. Version-3 extension. Ignore if both
 * G3FEs are IAF.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v33_12000 = _enum_for_Type_of_msg_t30_data.v33_12000; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v33_12000
 * @description V.33 12 000 bit/s data. Version-3 extension. Ignore if both
 * G3FEs are IAF.
 * @constant
 * @type {number}
 */
export const v33_12000 = Type_of_msg_t30_data_v33_12000; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v33_14400
 * @description V.33 14 400 bit/s data. Version-3 extension. Ignore if both
 * G3FEs are IAF.
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v33_14400 = _enum_for_Type_of_msg_t30_data.v33_14400; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v33_14400
 * @description V.33 14 400 bit/s data. Version-3 extension. Ignore if both
 * G3FEs are IAF.
 * @constant
 * @type {number}
 */
export const v33_14400 = Type_of_msg_t30_data_v33_14400; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_Type_of_msg_t30_data = $._decodeEnumerated;




export const _encode_Type_of_msg_t30_data = $._encodeEnumerated;


/* eslint-enable */
