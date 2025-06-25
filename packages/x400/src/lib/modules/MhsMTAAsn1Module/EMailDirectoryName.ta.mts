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
    Name,
    _decode_Name,
    _encode_Name,
} from '@wildboar/x500/src/lib/modules/InformationFramework/Name.ta.mjs';
import {
    GenericName,
    _decode_GenericName,
    _encode_GenericName,
} from '../MhsMTAAsn1Module/GenericName.ta.mjs';
/**
 * @summary EMailDirectoryName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailDirectoryName  ::=  CHOICE {
 *   x500DirectoryName  [0]  Name,
 *   genericNames       [1]  SET OF GenericName
 * }
 * ```
 */
export type EMailDirectoryName =
    | { x500DirectoryName: Name } /* CHOICE_ALT_ROOT */
    | { genericNames: GenericName[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EMailDirectoryName: $.ASN1Decoder<EMailDirectoryName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EMailDirectoryName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailDirectoryName} The decoded data structure.
 */
export function _decode_EMailDirectoryName(el: _Element): EMailDirectoryName {
    if (!_cached_decoder_for_EMailDirectoryName) {
        _cached_decoder_for_EMailDirectoryName = $._decode_inextensible_choice<EMailDirectoryName>(
            {
                'CONTEXT 0': [
                    'x500DirectoryName',
                    $._decode_explicit<Name>(() => _decode_Name),
                ],
                'CONTEXT 1': [
                    'genericNames',
                    $._decode_implicit<GenericName[]>(() =>
                        $._decodeSetOf<GenericName>(() => _decode_GenericName)
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_EMailDirectoryName(el);
}

let _cached_encoder_for_EMailDirectoryName: $.ASN1Encoder<EMailDirectoryName> | null = null;

/**
 * @summary Encodes a(n) EMailDirectoryName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailDirectoryName, encoded as an ASN.1 Element.
 */
export function _encode_EMailDirectoryName(
    value: EMailDirectoryName,
    elGetter: $.ASN1Encoder<EMailDirectoryName>
): _Element {
    if (!_cached_encoder_for_EMailDirectoryName) {
        _cached_encoder_for_EMailDirectoryName = $._encode_choice<EMailDirectoryName>(
            {
                x500DirectoryName: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_Name,
                    $.BER
                ),
                genericNames: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSetOf<GenericName>(
                            () => _encode_GenericName,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EMailDirectoryName(value, elGetter);
}


/* eslint-enable */
