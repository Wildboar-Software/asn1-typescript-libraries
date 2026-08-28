/* eslint-disable */
import {
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
import { genericULS } from '../ObjectIdentifiers/genericULS.va.mjs';

/**
 * @summary generalTransferSyntax
 * @description
 *
 * Protecting transfer syntax OID when encoding rules for
 * `SyntaxStructure` are not fixed; BER is the default. Used to
 * negotiate or announce a protecting transfer syntax. ITU-T Rec.
 * X.830 (04/95) [Annex F](https://www.itu.int/rec/T-REC-X.830-199504-I); ITU-T Rec. X.833 (04/95)
 * [§9](https://www.itu.int/rec/T-REC-X.833-199504-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * generalTransferSyntax OBJECT IDENTIFIER ::= {genericULS 2}
 * ```
 *
 * @constant
 */
export const generalTransferSyntax: OBJECT_IDENTIFIER = _OID.fromParts(
  [2],
  genericULS
);

/* eslint-enable */
