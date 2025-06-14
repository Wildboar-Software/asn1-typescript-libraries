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

/* START_OF_SYMBOL_DEFINITION CompareOK */
/**
 * @summary CompareOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CompareOK ::= SEQUENCE {
 *   matched        [0] BOOLEAN,
 *   matchedSubtype [1] BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 *
 * @class
 */
export class CompareOK {
    constructor(
        /**
         * @summary `matched`.
         * @public
         * @readonly
         */
        readonly matched: BOOLEAN,
        /**
         * @summary `matchedSubtype`.
         * @public
         * @readonly
         */
        readonly matchedSubtype: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CompareOK
     * @description
     *
     * This takes an `object` and converts it to a `CompareOK`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompareOK`.
     * @returns {CompareOK}
     */
    public static _from_object(
        _o: { [_K in keyof CompareOK]: CompareOK[_K] }
    ): CompareOK {
        return new CompareOK(
            _o.matched,
            _o.matchedSubtype,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `matchedSubtype`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_matchedSubtype() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION CompareOK */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CompareOK */
/**
 * @summary The Leading Root Component Types of CompareOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CompareOK: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'matched',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'matchedSubtype',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CompareOK */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CompareOK */
/**
 * @summary The Trailing Root Component Types of CompareOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CompareOK: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CompareOK */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CompareOK */
/**
 * @summary The Extension Addition Component Types of CompareOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CompareOK: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CompareOK */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CompareOK */
let _cached_decoder_for_CompareOK: $.ASN1Decoder<CompareOK> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CompareOK */

/* START_OF_SYMBOL_DEFINITION _decode_CompareOK */
/**
 * @summary Decodes an ASN.1 element into a(n) CompareOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CompareOK} The decoded data structure.
 */
export function _decode_CompareOK(el: _Element) {
    if (!_cached_decoder_for_CompareOK) {
        _cached_decoder_for_CompareOK = function (el: _Element): CompareOK {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let matched!: BOOLEAN;
            let matchedSubtype: OPTIONAL<BOOLEAN> =
                CompareOK._default_value_for_matchedSubtype;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                matched: (_el: _Element): void => {
                    matched = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                matchedSubtype: (_el: _Element): void => {
                    matchedSubtype = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CompareOK,
                _extension_additions_list_spec_for_CompareOK,
                _root_component_type_list_2_spec_for_CompareOK,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CompareOK /* SEQUENCE_CONSTRUCTOR_CALL */(
                matched,
                matchedSubtype,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CompareOK(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CompareOK */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CompareOK */
let _cached_encoder_for_CompareOK: $.ASN1Encoder<CompareOK> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CompareOK */

/* START_OF_SYMBOL_DEFINITION _encode_CompareOK */
/**
 * @summary Encodes a(n) CompareOK into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompareOK, encoded as an ASN.1 Element.
 */
export function _encode_CompareOK(
    value: CompareOK,
    elGetter: $.ASN1Encoder<CompareOK>
) {
    if (!_cached_encoder_for_CompareOK) {
        _cached_encoder_for_CompareOK = function (
            value: CompareOK,
            elGetter: $.ASN1Encoder<CompareOK>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                0,
                                () => $._encodeBoolean,
                                $.BER
                            )(value.matched, $.BER),
                            /* IF_DEFAULT */ value.matchedSubtype ===
                                undefined ||
                            $.deepEq(
                                value.matchedSubtype,
                                CompareOK._default_value_for_matchedSubtype
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.matchedSubtype, $.BER),
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
    return _cached_encoder_for_CompareOK(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CompareOK */

/* eslint-enable */
