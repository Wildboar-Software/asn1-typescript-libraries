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
    ROS_SingleAS,
    _decode_ROS_SingleAS,
    _encode_ROS_SingleAS,
} from '@wildboar/rose';
/**
 * @summary MessageAdministrationPDUs88
 * @description
 *
 * Defined in ITU-T X.419 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageAdministrationPDUs88  ::=  ROS-SingleAS{{MTSInvokeIds}, administration-88}
 * ```
 */
export type MessageAdministrationPDUs88 = ROS_SingleAS; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MessageAdministrationPDUs88
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageAdministrationPDUs88} The decoded data structure.
 */
export const _decode_MessageAdministrationPDUs88: $.ASN1Decoder<MessageAdministrationPDUs88> = _decode_ROS_SingleAS;

/**
 * @summary Encodes a(n) MessageAdministrationPDUs88 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageAdministrationPDUs88, encoded as an ASN.1 Element.
 */
export const _encode_MessageAdministrationPDUs88: $.ASN1Encoder<MessageAdministrationPDUs88> = _encode_ROS_SingleAS;


/* eslint-enable */
