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
   */
  readonly '&bind'?: OPERATION;
  /**
   * @summary &unbind
   */
  readonly '&unbind'?: OPERATION;
  /**
   * @summary &responderCanUnbind
   */
  readonly '&responderCanUnbind'?: BOOLEAN;
  /**
   * @summary &unbindCanFail
   */
  readonly '&unbindCanFail'?: BOOLEAN;
  /**
   * @summary &id
   */
  readonly '&id'?: OBJECT_IDENTIFIER;
}

/* eslint-enable */
