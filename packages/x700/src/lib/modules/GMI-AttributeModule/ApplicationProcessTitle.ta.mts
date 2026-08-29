/* eslint-disable */
import {
    NULL,
    OBJECT_IDENTIFIER,
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
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from '@wildboar/cmip';

/**
 * @summary ApplicationProcessTitle
 * @description
 *
 * Directory name form (`directory`), object-identifier name
 * form (`oid`), or `notKnown` (`NULL`) when the title is
 * not known — the rec requires `notKnown` in that case.
 * MATCHES FOR EQUALITY. Registered as `{… attribute(7)
 * applicationProcessTitle(17)}`. Cor.1 notes
 * `RelativeDistinguishedName` is imported from X.501 (1988);
 * the syntax is now in an informative annex of X.711 (1997).
 * ITU-T Rec. X.723 (11/93)
 * [§9.2](https://www.itu.int/rec/T-REC-X.723-199311-I), §13;
 * Cor.1 (06/98) clause 13.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplicationProcessTitle  ::=  CHOICE {
 *   directory  [0]  SEQUENCE OF RelativeDistinguishedName,
 *   oid        [1]  OBJECT IDENTIFIER,
 *   notKnown   NULL
 * }
 * ```
 */
export type ApplicationProcessTitle =
    | { directory: RelativeDistinguishedName[] } /* CHOICE_ALT_ROOT */
    | { oid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { notKnown: NULL } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ApplicationProcessTitle: $.ASN1Decoder<ApplicationProcessTitle> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationProcessTitle
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ApplicationProcessTitle} The decoded data structure.
 */
export function _decode_ApplicationProcessTitle(el: _Element): ApplicationProcessTitle {
    if (!_cached_decoder_for_ApplicationProcessTitle) {
        _cached_decoder_for_ApplicationProcessTitle = $._decode_inextensible_choice<ApplicationProcessTitle>(
            {
                'CONTEXT 0': [
                    'directory',
                    $._decode_implicit<RelativeDistinguishedName[]>(() =>
                        $._decodeSequenceOf<RelativeDistinguishedName>(
                            () => _decode_RelativeDistinguishedName
                        )
                    ),
                ],
                'CONTEXT 1': [
                    'oid',
                    $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    ),
                ],
                'UNIVERSAL 5': ['notKnown', $._decodeNull],
            }
        );
    }
    return _cached_decoder_for_ApplicationProcessTitle(el);
}


let _cached_encoder_for_ApplicationProcessTitle: $.ASN1Encoder<ApplicationProcessTitle> | null = null;


/**
 * @summary Encodes a(n) ApplicationProcessTitle into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationProcessTitle, encoded as an ASN.1 Element.
 */
export function _encode_ApplicationProcessTitle(
    value: ApplicationProcessTitle,
    elGetter: $.ASN1Encoder<ApplicationProcessTitle>
): _Element {
    if (!_cached_encoder_for_ApplicationProcessTitle) {
        _cached_encoder_for_ApplicationProcessTitle = $._encode_choice<ApplicationProcessTitle>(
            {
                directory: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () =>
                        $._encodeSequenceOf<RelativeDistinguishedName>(
                            () => _encode_RelativeDistinguishedName,
                            $.BER
                        ),
                    $.BER
                ),
                oid: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeObjectIdentifier,
                    $.BER
                ),
                notKnown: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ApplicationProcessTitle(value, elGetter);
}


/* eslint-enable */
