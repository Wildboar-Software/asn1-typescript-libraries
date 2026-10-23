/* eslint-disable */
import {
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
import {
  BioAPI_BFP_SCHEMA,
  _decode_BioAPI_BFP_SCHEMA,
  _encode_BioAPI_BFP_SCHEMA,
} from '../BIP/BioAPI-BFP-SCHEMA.ta.mjs';

/**
 * @summary VisibleBFPRegistration
 * @description
 *
 * Row of the `VisibleBFPRegistrations` conceptual table.
 * Defined to aid specification of framework behaviour; abstract
 * values do not occur in any BIP message and are never encoded.
 * One row per BFP registered in the local registry or in a
 * slave's registry (a BFP registered in two endpoints yields
 * two rows, differing at least in `hostingEndpointIRI`). Unique
 * on (`hostingEndpointIRI`, `bfpProductUuid`). The BFP is
 * available to the local application through a registered BSP
 * in the same endpoint. Present in all BIP endpoints. ITU-T
 * Rec. X.1083 (11/2007)
 * [§18.4](https://www.itu.int/rec/T-REC-X.1083-200711-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VisibleBFPRegistration  ::=  BioAPI-BFP-SCHEMA
 * ```
 */
export type VisibleBFPRegistration = BioAPI_BFP_SCHEMA; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) VisibleBFPRegistration
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VisibleBFPRegistration} The decoded data structure.
 */
export const _decode_VisibleBFPRegistration: $.ASN1Decoder<VisibleBFPRegistration> = _decode_BioAPI_BFP_SCHEMA;

/**
 * @summary Encodes a(n) VisibleBFPRegistration into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VisibleBFPRegistration, encoded as an ASN.1 Element.
 */
export const _encode_VisibleBFPRegistration: $.ASN1Encoder<VisibleBFPRegistration> = _encode_BioAPI_BFP_SCHEMA;


/* eslint-enable */
