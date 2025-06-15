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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    EDIM,
    _decode_EDIM,
    _encode_EDIM,
} from '../EDIMSInformationObjects/EDIM.ta.mjs';
import {
    EDIN,
    _decode_EDIN,
    _encode_EDIN,
} from '../EDIMSInformationObjects/EDIN.ta.mjs';
/**
 * @summary InformationObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationObject  ::=  CHOICE {edim  [0]  EDIM,
 *                               edin  [1]  EDIN
 * }
 * ```
 */
export type InformationObject =
    | { edim: EDIM } /* CHOICE_ALT_ROOT */
    | { edin: EDIN } /* CHOICE_ALT_ROOT */;

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
                    'edim',
                    $._decode_implicit<EDIM>(() => _decode_EDIM),
                ],
                'CONTEXT 1': [
                    'edin',
                    $._decode_explicit<EDIN>(() => _decode_EDIN),
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
                edim: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_EDIM,
                    $.BER
                ),
                edin: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_EDIN,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_InformationObject(value, elGetter);
}


/* eslint-enable */
