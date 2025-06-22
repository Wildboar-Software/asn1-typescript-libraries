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
    TCSingleAS,
    _decode_TCSingleAS,
    _encode_TCSingleAS,
} from '../TC-Notation-Extensions/TCSingleAS.ta.mjs';
/**
 * @summary AllPackagesAS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AllPackagesAS{APPLICATION-CONTEXT:ac}  ::=
 *   TCSingleAS
 *     {combine{{ac.&associationContract.&OperationsOf |
 *             ac.&associationContract.&InitiatorConsumerOf |
 *             ac.&associationContract.&InitiatorSupplierOf},
 *             {...}, --Illegaly empty, needs to be changed
 *             { -- Information Object of class OPERATION-PACKAGE to be defined --}}}
 * ```
 */
export type AllPackagesAS = TCSingleAS; // DefinedType

let _cached_decoder_for_AllPackagesAS: $.ASN1Decoder<AllPackagesAS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AllPackagesAS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AllPackagesAS} The decoded data structure.
 */
export function _decode_AllPackagesAS(el: _Element) {
    if (!_cached_decoder_for_AllPackagesAS) {
        _cached_decoder_for_AllPackagesAS = _decode_TCSingleAS;
    }
    return _cached_decoder_for_AllPackagesAS(el);
}

let _cached_encoder_for_AllPackagesAS: $.ASN1Encoder<AllPackagesAS> | null = null;

/**
 * @summary Encodes a(n) AllPackagesAS into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AllPackagesAS, encoded as an ASN.1 Element.
 */
export function _encode_AllPackagesAS(
    value: AllPackagesAS,
    elGetter: $.ASN1Encoder<AllPackagesAS>
) {
    if (!_cached_encoder_for_AllPackagesAS) {
        _cached_encoder_for_AllPackagesAS = _encode_TCSingleAS;
    }
    return _cached_encoder_for_AllPackagesAS(value, elGetter);
}


/* eslint-enable */
