/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    Packages,
    _decode_Packages,
    _encode_Packages,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/Packages.ta';
export {
    Packages,
    _decode_Packages,
    _encode_Packages,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/Packages.ta';

/* START_OF_SYMBOL_DEFINITION PackageConflict_Item */
/**
 * @summary PackageConflict_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PackageConflict-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type PackageConflict_Item =
    | { conflictingPackagesPresent: Packages } /* CHOICE_ALT_ROOT */
    | { packagesMissing: Packages } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION PackageConflict_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PackageConflict_Item */
let _cached_decoder_for_PackageConflict_Item: $.ASN1Decoder<PackageConflict_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PackageConflict_Item */

/* START_OF_SYMBOL_DEFINITION _decode_PackageConflict_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) PackageConflict_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PackageConflict_Item} The decoded data structure.
 */
export function _decode_PackageConflict_Item(el: _Element) {
    if (!_cached_decoder_for_PackageConflict_Item) {
        _cached_decoder_for_PackageConflict_Item = $._decode_inextensible_choice<PackageConflict_Item>(
            {
                'CONTEXT 0': [
                    'conflictingPackagesPresent',
                    $._decode_implicit<Packages>(() => _decode_Packages),
                ],
                'CONTEXT 1': [
                    'packagesMissing',
                    $._decode_implicit<Packages>(() => _decode_Packages),
                ],
            }
        );
    }
    return _cached_decoder_for_PackageConflict_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PackageConflict_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PackageConflict_Item */
let _cached_encoder_for_PackageConflict_Item: $.ASN1Encoder<PackageConflict_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PackageConflict_Item */

/* START_OF_SYMBOL_DEFINITION _encode_PackageConflict_Item */
/**
 * @summary Encodes a(n) PackageConflict_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PackageConflict_Item, encoded as an ASN.1 Element.
 */
export function _encode_PackageConflict_Item(
    value: PackageConflict_Item,
    elGetter: $.ASN1Encoder<PackageConflict_Item>
) {
    if (!_cached_encoder_for_PackageConflict_Item) {
        _cached_encoder_for_PackageConflict_Item = $._encode_choice<PackageConflict_Item>(
            {
                conflictingPackagesPresent: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_Packages,
                    $.BER
                ),
                packagesMissing: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_Packages,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_PackageConflict_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PackageConflict_Item */

/* eslint-enable */
