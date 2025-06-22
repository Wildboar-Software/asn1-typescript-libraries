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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';

/**
 * @summary QofConnectivityService
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * QofConnectivityService  ::=  ObjectInstance
 * ```
 */
export type QofConnectivityService = ObjectInstance; // DefinedType


let _cached_decoder_for_QofConnectivityService: $.ASN1Decoder<QofConnectivityService> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) QofConnectivityService
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {QofConnectivityService} The decoded data structure.
 */
export function _decode_QofConnectivityService(el: _Element) {
    if (!_cached_decoder_for_QofConnectivityService) {
        _cached_decoder_for_QofConnectivityService = _decode_ObjectInstance;
    }
    return _cached_decoder_for_QofConnectivityService(el);
}


let _cached_encoder_for_QofConnectivityService: $.ASN1Encoder<QofConnectivityService> | null = null;


/**
 * @summary Encodes a(n) QofConnectivityService into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QofConnectivityService, encoded as an ASN.1 Element.
 */
export function _encode_QofConnectivityService(
    value: QofConnectivityService,
    elGetter: $.ASN1Encoder<QofConnectivityService>
) {
    if (!_cached_encoder_for_QofConnectivityService) {
        _cached_encoder_for_QofConnectivityService = _encode_ObjectInstance;
    }
    return _cached_encoder_for_QofConnectivityService(value, elGetter);
}


/* eslint-enable */
