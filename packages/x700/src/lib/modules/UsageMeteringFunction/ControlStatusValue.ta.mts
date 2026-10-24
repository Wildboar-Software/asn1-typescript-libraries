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
    type ControlStatus,
    _decode_ControlStatus,
    _encode_ControlStatus,
} from '@wildboar/attribute-asn1module';
/**
 * @summary ControlStatusValue
 * @description
 *
 * Permitted/required values of the data object's `controlStatus`
 * (X.731) in the metering data condition package: `suspended`
 * when the object is not metering. Set by suspend; cleared by
 * start or resume. ITU-T Rec. X.742 (04/95)
 * [§8.2.4.1](https://www.itu.int/rec/T-REC-X.742-199504-I), A.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlStatusValue  ::=  ControlStatus(WITH COMPONENT (suspended))
 * ```
 */
export type ControlStatusValue = ControlStatus; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ControlStatusValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ControlStatusValue} The decoded data structure.
 */
export const _decode_ControlStatusValue: $.ASN1Decoder<ControlStatusValue> = _decode_ControlStatus;

/**
 * @summary Encodes a(n) ControlStatusValue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlStatusValue, encoded as an ASN.1 Element.
 */
export const _encode_ControlStatusValue: $.ASN1Encoder<ControlStatusValue> = _encode_ControlStatus;


/* eslint-enable */
