/* eslint-disable */
import {
  BOOLEAN,
  OBJECT_IDENTIFIER,
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
import { type OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca.mjs';

/**
 * @summary CONNECTION_PACKAGE
 * @description
 *
 * Bind and unbind operations (and related flags) used when associations are established and released dynamically. Specify a connection package only when bind/unbind are used for that purpose (ITU-T Rec. X.880 (07/94) §8.5). Defaults are `emptyBind` and `emptyUnbind` (X.880 §10.2–10.3).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CONNECTION-PACKAGE ::= CLASS {
 *   &bind                OPERATION DEFAULT emptyBind,
 *   &unbind              OPERATION DEFAULT emptyUnbind,
 *   &responderCanUnbind  BOOLEAN DEFAULT FALSE,
 *   &unbindCanFail       BOOLEAN DEFAULT FALSE,
 *   &id                  OBJECT IDENTIFIER UNIQUE OPTIONAL
 * }
 * WITH SYNTAX {
 *   [BIND &bind]
 *   [UNBIND &unbind]
 *   [RESPONDER UNBIND &responderCanUnbind]
 *   [FAILURE TO UNBIND &unbindCanFail]
 *   [ID &id]
 * }
 * ```
 *
 * @interface
 */
export interface CONNECTION_PACKAGE {
  /**
   * @summary A fixed string that can be used for external programs to determine the object class of this object.
   */
  readonly class: 'CONNECTION-PACKAGE';
  /**
   * @summary A map of type fields to their corresponding decoders.
   */
  readonly decoderFor: Partial<
    {
      // For decoding types supplied in type fields
      [_K in keyof CONNECTION_PACKAGE]: $.ASN1Decoder<CONNECTION_PACKAGE[_K]>;
    }
  >;
  /**
   * @summary A map of type fields to their corresponding encoders.
   */
  readonly encoderFor: Partial<
    {
      // For encoding types supplied in type fields
      [_K in keyof CONNECTION_PACKAGE]: $.ASN1Encoder<CONNECTION_PACKAGE[_K]>;
    }
  >;
  /**
   * @summary &bind
   * @description Operation performed as part of association establishment. Must have `&returnResult` and `&alwaysReturns` `TRUE` and a single error. Success returns a result; failure reports that error. Default `emptyBind` (X.880 §8.5.2).
   */
  readonly '&bind'?: OPERATION;
  /**
   * @summary &unbind
   * @description Operation performed as part of association release. Must have `&returnResult` and `&alwaysReturns` `TRUE` and a single error. Successful release returns a result; unsuccessful release reports the error. Default `emptyUnbind` (X.880 §8.5.3).
   */
  readonly '&unbind'?: OPERATION;
  /**
   * @summary &responderCanUnbind
   * @description If `TRUE`, the association responder (as well as the initiator) may invoke `&unbind` (X.880 §8.5.4). Default `FALSE`.
   */
  readonly '&responderCanUnbind'?: BOOLEAN;
  /**
   * @summary &unbindCanFail
   * @description If `TRUE`, the association may still exist after `&unbind` has signalled an error (X.880 §8.5.5). Default `FALSE`.
   */
  readonly '&unbindCanFail'?: BOOLEAN;
  /**
   * @summary &id
   * @description Object identifier for announcing or negotiating this connection package (X.880 §8.5.6).
   */
  readonly '&id'?: OBJECT_IDENTIFIER;
}

/* eslint-enable */
