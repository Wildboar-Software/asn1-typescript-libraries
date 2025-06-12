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
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION KEKIdentifier */
/**
 * @summary KEKIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KEKIdentifier ::= SEQUENCE {
 *   keyIdentifier OCTET STRING,
 * --date          GeneralizedTime OPTIONAL,
 * --other         OtherKeyAttribute OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class KEKIdentifier {
    constructor(
        /**
         * @summary `keyIdentifier`.
         * @public
         * @readonly
         */
        readonly keyIdentifier: OCTET_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a KEKIdentifier
     * @description
     *
     * This takes an `object` and converts it to a `KEKIdentifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KEKIdentifier`.
     * @returns {KEKIdentifier}
     */
    public static _from_object(
        _o: { [_K in keyof KEKIdentifier]: KEKIdentifier[_K] }
    ): KEKIdentifier {
        return new KEKIdentifier(
            _o.keyIdentifier,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION KEKIdentifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KEKIdentifier */
/**
 * @summary The Leading Root Component Types of KEKIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KEKIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'keyIdentifier',
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KEKIdentifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KEKIdentifier */
/**
 * @summary The Trailing Root Component Types of KEKIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KEKIdentifier: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KEKIdentifier */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KEKIdentifier */
/**
 * @summary The Extension Addition Component Types of KEKIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KEKIdentifier: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KEKIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KEKIdentifier */
let _cached_decoder_for_KEKIdentifier: $.ASN1Decoder<KEKIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KEKIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_KEKIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) KEKIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KEKIdentifier} The decoded data structure.
 */
export function _decode_KEKIdentifier(el: _Element) {
    if (!_cached_decoder_for_KEKIdentifier) {
        _cached_decoder_for_KEKIdentifier = function (
            el: _Element
        ): KEKIdentifier {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    'KEKIdentifier contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'keyIdentifier';
            let keyIdentifier!: OCTET_STRING;
            keyIdentifier = $._decodeOctetString(sequence[0]);
            return new KEKIdentifier(keyIdentifier, sequence.slice(1));
        };
    }
    return _cached_decoder_for_KEKIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KEKIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KEKIdentifier */
let _cached_encoder_for_KEKIdentifier: $.ASN1Encoder<KEKIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KEKIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_KEKIdentifier */
/**
 * @summary Encodes a(n) KEKIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KEKIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_KEKIdentifier(
    value: KEKIdentifier,
    elGetter: $.ASN1Encoder<KEKIdentifier>
) {
    if (!_cached_encoder_for_KEKIdentifier) {
        _cached_encoder_for_KEKIdentifier = function (
            value: KEKIdentifier,
            elGetter: $.ASN1Encoder<KEKIdentifier>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeOctetString(
                                value.keyIdentifier,
                                $.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_KEKIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KEKIdentifier */

/* eslint-enable */
