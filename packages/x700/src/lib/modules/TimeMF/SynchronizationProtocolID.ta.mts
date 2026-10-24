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
    type SimpleNameType,
    _decode_SimpleNameType,
    _encode_SimpleNameType,
} from '@wildboar/attribute-asn1module';
/**
 * @summary SynchronizationProtocolID
 * @description
 *
 * Identifies the synchronization protocol instance. Naming
 * attribute of `synchronizationProtocol` (`GET`,
 * `SET-BY-CREATE`, `NO-MODIFY`). ITU-T Rec. X.743 (06/98)
 * [§8.3.18](https://www.itu.int/rec/T-REC-X.743-199806-I), A.2.18, A.4.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SynchronizationProtocolID  ::=  SimpleNameType
 * ```
 */
export type SynchronizationProtocolID = SimpleNameType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SynchronizationProtocolID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SynchronizationProtocolID} The decoded data structure.
 */
export const _decode_SynchronizationProtocolID: $.ASN1Decoder<SynchronizationProtocolID> = _decode_SimpleNameType;

/**
 * @summary Encodes a(n) SynchronizationProtocolID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SynchronizationProtocolID, encoded as an ASN.1 Element.
 */
export const _encode_SynchronizationProtocolID: $.ASN1Encoder<SynchronizationProtocolID> = _encode_SimpleNameType;


/* eslint-enable */
