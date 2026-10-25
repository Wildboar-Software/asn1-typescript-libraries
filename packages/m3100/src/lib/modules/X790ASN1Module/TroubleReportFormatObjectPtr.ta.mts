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
    type ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';

/**
 * @summary TroubleReportFormatObjectPtr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TroubleReportFormatObjectPtr  ::=  ObjectInstance
 * ```
 */
export type TroubleReportFormatObjectPtr = ObjectInstance; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) TroubleReportFormatObjectPtr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TroubleReportFormatObjectPtr} The decoded data structure.
 */
export const _decode_TroubleReportFormatObjectPtr: $.ASN1Decoder<TroubleReportFormatObjectPtr> = _decode_ObjectInstance;

/**
 * @summary Encodes a(n) TroubleReportFormatObjectPtr into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TroubleReportFormatObjectPtr, encoded as an ASN.1 Element.
 */
export const _encode_TroubleReportFormatObjectPtr: $.ASN1Encoder<TroubleReportFormatObjectPtr> = _encode_ObjectInstance;


/* eslint-enable */
