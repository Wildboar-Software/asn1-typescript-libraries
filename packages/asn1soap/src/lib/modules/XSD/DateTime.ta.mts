/* eslint-disable */
import {
  TIME,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary DateTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DateTime  ::=  TIME ((SETTINGS "Basic=Date-Time Date=YMD Midnight=Start"))
 * (CONSTRAINED BY {/ *The time-zone shall be in the range -14 to +14* /})
 * (CONSTRAINED BY {/ *The seconds and fractions of a second shall be less
 *                    than 60 (no leap seconds supported, in accordance with
 *                    W3C XML Schema 1.0 Part 2, 3.2.7)* /})
 * (CONSTRAINED BY {/ *The type is constrained to "Time=HMSFn" for any n* /})
 * ```
 */
export type DateTime = TIME; // TimeType




export const _decode_DateTime = $._decodeTime;




export const _encode_DateTime = $._encodeTime;


/* eslint-enable */
