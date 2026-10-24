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
    type ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';
/**
 * @summary VerifyMembershipStatusRequest
 * @description
 *
 * Action information for `verifyMembershipStatus`: name of the
 * object whose membership status is requested. ITU-T Rec. X.749
 * (08/97)
 * [§8.4.3](https://www.itu.int/rec/T-REC-X.749-199708-I), A.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VerifyMembershipStatusRequest  ::=  ObjectInstance
 * ```
 */
export type VerifyMembershipStatusRequest = ObjectInstance; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) VerifyMembershipStatusRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VerifyMembershipStatusRequest} The decoded data structure.
 */
export const _decode_VerifyMembershipStatusRequest: $.ASN1Decoder<VerifyMembershipStatusRequest> = _decode_ObjectInstance;

/**
 * @summary Encodes a(n) VerifyMembershipStatusRequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VerifyMembershipStatusRequest, encoded as an ASN.1 Element.
 */
export const _encode_VerifyMembershipStatusRequest: $.ASN1Encoder<VerifyMembershipStatusRequest> = _encode_ObjectInstance;


/* eslint-enable */
