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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CMISFilter, _decode_CMISFilter, _encode_CMISFilter } from "@wildboar/cmip";
/**
 * @summary DiscriminatorConstruct
 * @description
 *
 * CMIS filter that an event-forwarding discriminator or log applies to
 * potential event reports. `{smi2AttributeID 56}`. Default `and:{}` (matches
 * everything). ITU-T Rec. X.721 (02/92) §10.7.4.8, §14.2; ITU-T Rec. X.734 |
 * ISO/IEC 10164-5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DiscriminatorConstruct  ::=
 *   CMISFilter
 * ```
 */
export
type DiscriminatorConstruct = CMISFilter; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DiscriminatorConstruct
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DiscriminatorConstruct} The decoded data structure.
 */
export const _decode_DiscriminatorConstruct: $.ASN1Decoder<DiscriminatorConstruct> = _decode_CMISFilter;

/**
 * @summary Encodes a(n) DiscriminatorConstruct into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiscriminatorConstruct, encoded as an ASN.1 Element.
 */
export const _encode_DiscriminatorConstruct: $.ASN1Encoder<DiscriminatorConstruct> = _encode_CMISFilter;


/* eslint-enable */
