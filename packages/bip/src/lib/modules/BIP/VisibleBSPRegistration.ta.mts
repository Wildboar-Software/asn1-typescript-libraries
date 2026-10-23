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
  BioAPI_BSP_SCHEMA,
  _decode_BioAPI_BSP_SCHEMA,
  _encode_BioAPI_BSP_SCHEMA,
} from '../BIP/BioAPI-BSP-SCHEMA.ta.mjs';

/**
 * @summary VisibleBSPRegistration
 * @description
 *
 * Row of the `VisibleBSPRegistrations` conceptual table.
 * Defined to aid specification of framework behaviour; abstract
 * values do not occur in any BIP message and are never encoded.
 * One row per BSP registered in the local registry or in a
 * slave's registry (a BSP registered in two endpoints yields
 * two rows, differing at least in `hostingEndpointIRI`). Also
 * carries the framework-generated `bspAccessUuid` used to
 * disambiguate `BioAPI_BSPLoad` when the same product UUID
 * appears more than once. Unique on
 * (`hostingEndpointIRI`, `bspProductUuid`) and on
 * `bspAccessUuid`; access UUID shall differ from every product
 * UUID in the table. Present in all BIP endpoints. ITU-T Rec.
 * X.1083 (11/2007)
 * [§18.3](https://www.itu.int/rec/T-REC-X.1083-200711-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VisibleBSPRegistration  ::=  BioAPI-BSP-SCHEMA
 * ```
 */
export type VisibleBSPRegistration = BioAPI_BSP_SCHEMA; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) VisibleBSPRegistration
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VisibleBSPRegistration} The decoded data structure.
 */
export const _decode_VisibleBSPRegistration: $.ASN1Decoder<VisibleBSPRegistration> = _decode_BioAPI_BSP_SCHEMA;

/**
 * @summary Encodes a(n) VisibleBSPRegistration into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VisibleBSPRegistration, encoded as an ASN.1 Element.
 */
export const _encode_VisibleBSPRegistration: $.ASN1Encoder<VisibleBSPRegistration> = _encode_BioAPI_BSP_SCHEMA;


/* eslint-enable */
