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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    IPM,
    _decode_IPM,
    _encode_IPM,
} from '../IPMSInformationObjects/IPM.ta.mjs';
import {
    IPN,
    _decode_IPN,
    _encode_IPN,
} from '../IPMSInformationObjects/IPN.ta.mjs';
/**
 * @summary InformationObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationObject  ::=  CHOICE {ipm  [0]  IPM,
 *                               ipn  [1]  IPN
 * }
 * ```
 */
export type InformationObject =
    | { ipm: IPM } /* CHOICE_ALT_ROOT */
    | { ipn: IPN } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_InformationObject: $.ASN1Decoder<InformationObject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InformationObject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InformationObject} The decoded data structure.
 */
export function _decode_InformationObject(el: _Element) {
    if (!_cached_decoder_for_InformationObject) {
        _cached_decoder_for_InformationObject = $._decode_inextensible_choice<InformationObject>(
            {
                'CONTEXT 0': [
                    'ipm',
                    $._decode_implicit<IPM>(() => _decode_IPM),
                ],
                'CONTEXT 1': [
                    'ipn',
                    $._decode_implicit<IPN>(() => _decode_IPN),
                ],
            }
        );
    }
    return _cached_decoder_for_InformationObject(el);
}

let _cached_encoder_for_InformationObject: $.ASN1Encoder<InformationObject> | null = null;

/**
 * @summary Encodes a(n) InformationObject into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformationObject, encoded as an ASN.1 Element.
 */
export function _encode_InformationObject(
    value: InformationObject,
    elGetter: $.ASN1Encoder<InformationObject>
) {
    if (!_cached_encoder_for_InformationObject) {
        _cached_encoder_for_InformationObject = $._encode_choice<InformationObject>(
            {
                ipm: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_IPM,
                    $.BER
                ),
                ipn: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_IPN,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_InformationObject(value, elGetter);
}


/* eslint-enable */
