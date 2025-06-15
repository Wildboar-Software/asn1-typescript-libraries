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
import * as $ from 'asn1-ts/dist/functional.mjs';


/**
 * @summary Time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Time  ::=  TIME ((SETTINGS "Basic=Time")
 *                          EXCEPT (SETTINGS "Midnight=End"))
 * (CONSTRAINED BY {/ *The time-zone shall be in the range -14 to +14* /})
 * (CONSTRAINED BY {/ *The seconds and fractions of a second shall be less
 *                    than 60 (no leap seconds supported, in accordance with
 *                    W3C XML Schema 1.0 Part 2, D.2)* /})
 * (CONSTRAINED BY {/ *Constrained to "Time=HMSFn" for any n* /})
 * ```
 */
export type Time = TIME; // TimeType




export const _decode_Time = $._decodeTime;




export const _encode_Time = $._encodeTime;


/* eslint-enable */
