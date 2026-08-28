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
 * @summary specificTransferSyntax
 * @description
 *
 * Prefix for a protecting transfer syntax that stipulates a
 * specific set of encoding rules for `SyntaxStructure`. Remaining
 * arcs match those after `{joint-iso-itu-t asn1(1)}` (e.g.
 * `{… specificTransferSyntax(3) ber(1)}` for BER,
 * `{… ber-derived(2) distinguished-encoding(1)}` for DER).
 * ITU-T Rec. X.830 (04/95) [Annex F](https://www.itu.int/rec/T-REC-X.830-199504-I); ITU-T Rec. X.833
 * (04/95) [§9](https://www.itu.int/rec/T-REC-X.833-199504-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * specificTransferSyntax OBJECT IDENTIFIER ::= {genericULS 3}
 * ```
 *
 * @constant
 */
export const specificTransferSyntax: OBJECT_IDENTIFIER = _OID.fromParts(
  [3],
  genericULS
);

/* eslint-enable */
