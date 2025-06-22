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
    MTAName,
    _decode_MTAName,
    _encode_MTAName,
} from '../MTSAbstractService/MTAName.ta.mjs';
import {
    GenericName,
    _decode_GenericName,
    _encode_GenericName,
} from '../MhsMTAAsn1Module/GenericName.ta.mjs';
/**
 * @summary EMailMtaName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailMtaName  ::=  CHOICE {
 *   x400MTAName     [0]  MTAName,
 *   genericMTAName  [1]  GenericName
 * }
 * ```
 */
export type EMailMtaName =
    | { x400MTAName: MTAName } /* CHOICE_ALT_ROOT */
    | { genericMTAName: GenericName } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EMailMtaName: $.ASN1Decoder<EMailMtaName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EMailMtaName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailMtaName} The decoded data structure.
 */
export function _decode_EMailMtaName(el: _Element) {
    if (!_cached_decoder_for_EMailMtaName) {
        _cached_decoder_for_EMailMtaName = $._decode_inextensible_choice<EMailMtaName>(
            {
                'CONTEXT 0': [
                    'x400MTAName',
                    $._decode_implicit<MTAName>(() => _decode_MTAName),
                ],
                'CONTEXT 1': [
                    'genericMTAName',
                    $._decode_implicit<GenericName>(() => _decode_GenericName),
                ],
            }
        );
    }
    return _cached_decoder_for_EMailMtaName(el);
}

let _cached_encoder_for_EMailMtaName: $.ASN1Encoder<EMailMtaName> | null = null;

/**
 * @summary Encodes a(n) EMailMtaName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailMtaName, encoded as an ASN.1 Element.
 */
export function _encode_EMailMtaName(
    value: EMailMtaName,
    elGetter: $.ASN1Encoder<EMailMtaName>
) {
    if (!_cached_encoder_for_EMailMtaName) {
        _cached_encoder_for_EMailMtaName = $._encode_choice<EMailMtaName>(
            {
                x400MTAName: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_MTAName,
                    $.BER
                ),
                genericMTAName: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_GenericName,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EMailMtaName(value, elGetter);
}


/* eslint-enable */
