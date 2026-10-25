/* eslint-disable */
import {
    type ASN1Element as _Element,
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
    type DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/dn';
/**
 * @summary RoutingCollectiveName
 * @description
 *
 * The Routing Collective Name attribute type specifies an identifier for Routing
 * Collective entries. NOTE – This attribute is used, rather than Common Name, because it
 * makes possible an optimization in the Routing-decision procedure. See ITU-T X.412
 * (1999), §7.2.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RoutingCollectiveName  ::=  DistinguishedName
 * ```
 */
export type RoutingCollectiveName = DistinguishedName; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) RoutingCollectiveName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RoutingCollectiveName} The decoded data structure.
 */
export const _decode_RoutingCollectiveName: $.ASN1Decoder<RoutingCollectiveName> = _decode_DistinguishedName;

/**
 * @summary Encodes a(n) RoutingCollectiveName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoutingCollectiveName, encoded as an ASN.1 Element.
 */
export const _encode_RoutingCollectiveName: $.ASN1Encoder<RoutingCollectiveName> = _encode_DistinguishedName;


/* eslint-enable */
