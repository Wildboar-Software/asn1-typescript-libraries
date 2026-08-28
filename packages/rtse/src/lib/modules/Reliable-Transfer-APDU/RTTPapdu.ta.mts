/* eslint-disable */
import {
  INTEGER,
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
 * @summary RTTPapdu
 * @description
 *
 * RT-TURN-PLEASE (RTTP). Priority of the action the requestor wants
 * the Turn for, carried as P-TOKEN-PLEASE user data. Zero is highest
 * and is reserved for releasing the association; other values are
 * assigned to APDU transfers by the application context. If the
 * RT-TURN-PLEASE Priority parameter is absent, zero is assumed.
 * Transparent to the RTPM. ITU-T Rec. X.218 (03/93) §9.4.1.1; ITU-T
 * Rec. X.228 (11/88) §7.4, §7.4.4.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RTTPapdu  ::=  -- priority-- INTEGER
 * ```
 */
export type RTTPapdu = INTEGER;




export const _decode_RTTPapdu = $._decodeInteger;




export const _encode_RTTPapdu = $._encodeInteger;


/* eslint-enable */
