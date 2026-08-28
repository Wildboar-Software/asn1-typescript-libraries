/* eslint-disable */
import {
  BOOLEAN,
  OBJECT_IDENTIFIER,
  ABSTRACT_SYNTAX,
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
import { type CONTRACT } from '../Remote-Operations-Information-Objects/CONTRACT.oca.mjs';
import { type REALIZATION } from '../Remote-Operations-Information-Objects-extensions/REALIZATION.oca.mjs';

/**
 * @summary APPLICATION_CONTEXT
 * @description
 *
 * Static ROS aspects of an OSI application context: the association contract being realized, how associations are established/released, how ROSE PCI is transferred, the abstract syntaxes required, and the application-context name used on A-ASSOCIATE (ITU-T Rec. X.881 (07/94) §7.2). `&associationRealization` shall be present iff the contract has a `&connection` package (X.881 §7.2.3). `&probe` / `&acknowledge` are not in X.881 (07/94) as printed; they appear in this compiled class alongside the built-in operations of X.880 Amd.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * APPLICATION-CONTEXT ::= CLASS {
 *   &probe                   BOOLEAN DEFAULT FALSE,
 *   &acknowledge             BOOLEAN DEFAULT FALSE,
 *   &associationContract     CONTRACT,
 *   &associationRealization  REALIZATION OPTIONAL,
 *   &transferRealization     REALIZATION,
 *   &AbstractSyntaxes        ABSTRACT-SYNTAX,
 *   &applicationContextName  OBJECT IDENTIFIER UNIQUE
 * }
 * WITH SYNTAX {
 *   [PROBE &probe]
 *   [ACKNOWLEDGE &acknowledge]
 *   CONTRACT &associationContract
 *   [ESTABLISHED BY &associationRealization]
 *   INFORMATION TRANSFER BY &transferRealization
 *   ABSTRACT SYNTAXES &AbstractSyntaxes
 *   APPLICATION CONTEXT NAME &applicationContextName
 * }
 * ```
 *
 * @interface
 */
export interface APPLICATION_CONTEXT {
  /**
   * @summary A fixed string that can be used for external programs to determine the object class of this object.
   */
  readonly class: 'APPLICATION-CONTEXT';
  /**
   * @summary A map of type fields to their corresponding decoders.
   */
  readonly decoderFor: Partial<
    {
      // For decoding types supplied in type fields
      [_K in keyof APPLICATION_CONTEXT]: $.ASN1Decoder<APPLICATION_CONTEXT[_K]>;
    }
  >;
  /**
   * @summary A map of type fields to their corresponding encoders.
   */
  readonly encoderFor: Partial<
    {
      // For encoding types supplied in type fields
      [_K in keyof APPLICATION_CONTEXT]: $.ASN1Encoder<APPLICATION_CONTEXT[_K]>;
    }
  >;
  /**
   * @summary &probe
   * @description Not in X.881 (07/94) APPLICATION-CONTEXT as published. Relates to inclusion of the X.880 Amd.1 `probe` operation.
   */
  readonly '&probe'?: BOOLEAN;
  /**
   * @summary &acknowledge
   * @description Not in X.881 (07/94) APPLICATION-CONTEXT as published. Relates to inclusion of the X.880 Amd.1 `acknowledge` operation; that Recommendation requires `acknowledge` in every package that includes `probe`.
   */
  readonly '&acknowledge'?: BOOLEAN;
  /**
   * @summary &associationContract
   * @description Association contract this application context realizes. Also determines responder-unbind and unbind-can-fail intent (X.881 §7.2.2).
   */
  readonly '&associationContract'?: CONTRACT;
  /**
   * @summary &associationRealization
   * @description Dynamic association establishment and release. Present iff the contract has a connection package. Objects: `acse`, `acse-with-concatenation`, `association-by-RTSE` (X.881 §7.2.3; X.882 §8).
   */
  readonly '&associationRealization'?: REALIZATION <any>;
  /**
   * @summary &transferRealization
   * @description How ROSE APDUs are transferred. Objects: `pData`, `pData-with-concatenation`, `transfer-by-RTSE` (X.881 §7.2.4; X.882 §9).
   */
  readonly '&transferRealization'?: REALIZATION <any>;
  /**
   * @summary &AbstractSyntaxes
   * @description Abstract syntaxes needed to convey bind/unbind and the contract's operations (X.881 §7.2.4; X.882 §10).
   */
  readonly '&AbstractSyntaxes'?: ABSTRACT_SYNTAX[];
  /**
   * @summary &applicationContextName
   * @description Object identifier identifying this application context when the OSI association is established (X.881 §7.2.4).
   */
  readonly '&applicationContextName'?: OBJECT_IDENTIFIER;
}

/* eslint-enable */
