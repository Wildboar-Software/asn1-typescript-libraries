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
    AdditionalActions,
    _decode_AdditionalActions,
    _encode_AdditionalActions,
} from '../MTAAbstractService/AdditionalActions.ta.mjs';
/**
 * @summary InternalAdditionalActions
 * @description
 *
 * Defined in ITU-T X.411 (1999) (§12).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InternalAdditionalActions  ::=  AdditionalActions
 * ```
 */
export type InternalAdditionalActions = AdditionalActions; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) InternalAdditionalActions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InternalAdditionalActions} The decoded data structure.
 */
export const _decode_InternalAdditionalActions: $.ASN1Decoder<InternalAdditionalActions> = _decode_AdditionalActions;

/**
 * @summary Encodes a(n) InternalAdditionalActions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InternalAdditionalActions, encoded as an ASN.1 Element.
 */
export const _encode_InternalAdditionalActions: $.ASN1Encoder<InternalAdditionalActions> = _encode_AdditionalActions;


/* eslint-enable */
