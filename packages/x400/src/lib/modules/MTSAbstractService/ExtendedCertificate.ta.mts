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
} from '@wildboar/x500/InformationFramework';
import {
    Certificates,
    _decode_Certificates,
    _encode_Certificates,
} from '@wildboar/x500/AuthenticationFramework';
/**
 * @summary ExtendedCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedCertificate  ::=  CHOICE {
 *   directory-entry  [0]  Name, -- Name of a Directory entry where the certificate can be found
 *   certificate      [1]  Certificates
 * }
 * ```
 */
export type ExtendedCertificate =
    | { directory_entry: Name } /* CHOICE_ALT_ROOT */
    | { certificate: Certificates } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ExtendedCertificate: $.ASN1Decoder<ExtendedCertificate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedCertificate} The decoded data structure.
 */
export function _decode_ExtendedCertificate(el: _Element): ExtendedCertificate {
    if (!_cached_decoder_for_ExtendedCertificate) {
        _cached_decoder_for_ExtendedCertificate = $._decode_inextensible_choice<ExtendedCertificate>(
            {
                'CONTEXT 0': [
                    'directory_entry',
                    $._decode_explicit<Name>(() => _decode_Name),
                ],
                'CONTEXT 1': [
                    'certificate',
                    $._decode_implicit<Certificates>(
                        () => _decode_Certificates
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ExtendedCertificate(el);
}

let _cached_encoder_for_ExtendedCertificate: $.ASN1Encoder<ExtendedCertificate> | null = null;

/**
 * @summary Encodes a(n) ExtendedCertificate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedCertificate, encoded as an ASN.1 Element.
 */
export function _encode_ExtendedCertificate(
    value: ExtendedCertificate,
    elGetter: $.ASN1Encoder<ExtendedCertificate>
): _Element {
    if (!_cached_encoder_for_ExtendedCertificate) {
        _cached_encoder_for_ExtendedCertificate = $._encode_choice<ExtendedCertificate>(
            {
                directory_entry: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_Name,
                    $.BER
                ),
                certificate: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_Certificates,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ExtendedCertificate(value, elGetter);
}


/* eslint-enable */
