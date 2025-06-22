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
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';
import {
    GenericName,
    _decode_GenericName,
    _encode_GenericName,
} from '../MhsMTAAsn1Module/GenericName.ta.mjs';
/**
 * @summary EMailMtsUserName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailMtsUserName  ::=  CHOICE {
 *   x400ORName   [0]  ORName,
 *   genericName  [1]  GenericName
 * }
 * ```
 */
export type EMailMtsUserName =
    | { x400ORName: ORName } /* CHOICE_ALT_ROOT */
    | { genericName: GenericName } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EMailMtsUserName: $.ASN1Decoder<EMailMtsUserName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EMailMtsUserName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailMtsUserName} The decoded data structure.
 */
export function _decode_EMailMtsUserName(el: _Element) {
    if (!_cached_decoder_for_EMailMtsUserName) {
        _cached_decoder_for_EMailMtsUserName = $._decode_inextensible_choice<EMailMtsUserName>(
            {
                'CONTEXT 0': [
                    'x400ORName',
                    $._decode_implicit<ORName>(() => _decode_ORName),
                ],
                'CONTEXT 1': [
                    'genericName',
                    $._decode_implicit<GenericName>(() => _decode_GenericName),
                ],
            }
        );
    }
    return _cached_decoder_for_EMailMtsUserName(el);
}

let _cached_encoder_for_EMailMtsUserName: $.ASN1Encoder<EMailMtsUserName> | null = null;

/**
 * @summary Encodes a(n) EMailMtsUserName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailMtsUserName, encoded as an ASN.1 Element.
 */
export function _encode_EMailMtsUserName(
    value: EMailMtsUserName,
    elGetter: $.ASN1Encoder<EMailMtsUserName>
) {
    if (!_cached_encoder_for_EMailMtsUserName) {
        _cached_encoder_for_EMailMtsUserName = $._encode_choice<EMailMtsUserName>(
            {
                x400ORName: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_ORName,
                    $.BER
                ),
                genericName: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_GenericName,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EMailMtsUserName(value, elGetter);
}


/* eslint-enable */
