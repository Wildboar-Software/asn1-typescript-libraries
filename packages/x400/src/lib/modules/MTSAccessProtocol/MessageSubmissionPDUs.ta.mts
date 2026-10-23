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
    ROS_SingleAS,
    _decode_ROS_SingleAS,
    _encode_ROS_SingleAS,
} from '@wildboar/rose';
/**
 * @summary MessageSubmissionPDUs
 * @description
 *
 * Defined in ITU-T X.419 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageSubmissionPDUs  ::=  ROS-SingleAS{{MTSInvokeIds}, submission}
 * ```
 */
export type MessageSubmissionPDUs = ROS_SingleAS; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MessageSubmissionPDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageSubmissionPDUs} The decoded data structure.
 */
export const _decode_MessageSubmissionPDUs: $.ASN1Decoder<MessageSubmissionPDUs> = _decode_ROS_SingleAS;

/**
 * @summary Encodes a(n) MessageSubmissionPDUs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageSubmissionPDUs, encoded as an ASN.1 Element.
 */
export const _encode_MessageSubmissionPDUs: $.ASN1Encoder<MessageSubmissionPDUs> = _encode_ROS_SingleAS;


/* eslint-enable */
