/* eslint-disable */
import {
  TYPE_IDENTIFIER,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';


/**
 * @summary REALIZATION
 * @description
 *
 * `TYPE-IDENTIFIER` for an association or transfer realization, referenced from `APPLICATION-CONTEXT.&associationRealization` / `&transferRealization` (ITU-T Rec. X.882 (07/94) §8.1, §9.1). The `&Type` is `RealizationParameter`.
 */
export type REALIZATION <Type> = TYPE_IDENTIFIER <Type>;

/* eslint-enable */
