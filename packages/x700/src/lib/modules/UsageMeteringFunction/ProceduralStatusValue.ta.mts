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
    ProceduralStatus,
    _decode_ProceduralStatus,
    _encode_ProceduralStatus,
} from '@wildboar/attribute-asn1module';
/**
 * @summary ProceduralStatusValue
 * @description
 *
 * Permitted/required values of the data object's
 * `proceduralStatus` (X.731) in the metering data condition
 * package: `terminating` after a delete request until a
 * required usage report has been emitted. Start/suspend/resume
 * in this state return `deniedMeteringAction`. ITU-T Rec. X.742
 * (04/95)
 * [§8.2.4.1](https://www.itu.int/rec/T-REC-X.742-199504-I),
 * §8.4.1, Table 1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProceduralStatusValue  ::=  ProceduralStatus(WITH COMPONENT (terminating))
 * ```
 */
export type ProceduralStatusValue = ProceduralStatus; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ProceduralStatusValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProceduralStatusValue} The decoded data structure.
 */
export const _decode_ProceduralStatusValue: $.ASN1Decoder<ProceduralStatusValue> = _decode_ProceduralStatus;

/**
 * @summary Encodes a(n) ProceduralStatusValue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProceduralStatusValue, encoded as an ASN.1 Element.
 */
export const _encode_ProceduralStatusValue: $.ASN1Encoder<ProceduralStatusValue> = _encode_ProceduralStatus;


/* eslint-enable */
