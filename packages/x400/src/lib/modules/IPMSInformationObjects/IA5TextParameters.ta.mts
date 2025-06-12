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
import {
    Repertoire,
    _enum_for_Repertoire,
    Repertoire_ita2 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ita2 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    Repertoire_ia5 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ia5 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_Repertoire,
    _encode_Repertoire,
} from '../IPMSInformationObjects/Repertoire.ta.mjs';
export {
    Repertoire,
    _enum_for_Repertoire,
    Repertoire_ita2 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ita2 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    Repertoire_ia5 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ia5 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_Repertoire,
    _encode_Repertoire,
} from '../IPMSInformationObjects/Repertoire.ta.mjs';

/* START_OF_SYMBOL_DEFINITION IA5TextParameters */
/**
 * @summary IA5TextParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IA5TextParameters ::= SET {repertoire  [0]  Repertoire DEFAULT ia5
 * }
 * ```
 *
 * @class
 */
export class IA5TextParameters {
    constructor(
        /**
         * @summary `repertoire`.
         * @public
         * @readonly
         */
        readonly repertoire: OPTIONAL<Repertoire>
    ) {}

    /**
     * @summary Restructures an object into a IA5TextParameters
     * @description
     *
     * This takes an `object` and converts it to a `IA5TextParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IA5TextParameters`.
     * @returns {IA5TextParameters}
     */
    public static _from_object(
        _o: { [_K in keyof IA5TextParameters]: IA5TextParameters[_K] }
    ): IA5TextParameters {
        return new IA5TextParameters(_o.repertoire);
    }

    /**
     * @summary Getter that returns the default value for `repertoire`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_repertoire() {
        return Repertoire_ia5;
    }
    /**
     * @summary The enum used as the type of the component `repertoire`
     * @public
     * @static
     */

    public static _enum_for_repertoire = _enum_for_Repertoire;
}
/* END_OF_SYMBOL_DEFINITION IA5TextParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IA5TextParameters */
/**
 * @summary The Leading Root Component Types of IA5TextParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IA5TextParameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'repertoire',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IA5TextParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IA5TextParameters */
/**
 * @summary The Trailing Root Component Types of IA5TextParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IA5TextParameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IA5TextParameters */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IA5TextParameters */
/**
 * @summary The Extension Addition Component Types of IA5TextParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IA5TextParameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IA5TextParameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IA5TextParameters */
let _cached_decoder_for_IA5TextParameters: $.ASN1Decoder<IA5TextParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IA5TextParameters */

/* START_OF_SYMBOL_DEFINITION _decode_IA5TextParameters */
/**
 * @summary Decodes an ASN.1 element into a(n) IA5TextParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IA5TextParameters} The decoded data structure.
 */
export function _decode_IA5TextParameters(el: _Element) {
    if (!_cached_decoder_for_IA5TextParameters) {
        _cached_decoder_for_IA5TextParameters = function (
            el: _Element
        ): IA5TextParameters {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let repertoire: OPTIONAL<Repertoire> =
                IA5TextParameters._default_value_for_repertoire;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                repertoire: (_el: _Element): void => {
                    repertoire = $._decode_implicit<Repertoire>(
                        () => _decode_Repertoire
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IA5TextParameters,
                _extension_additions_list_spec_for_IA5TextParameters,
                _root_component_type_list_2_spec_for_IA5TextParameters,
                undefined
            );
            return new IA5TextParameters /* SET_CONSTRUCTOR_CALL */(repertoire);
        };
    }
    return _cached_decoder_for_IA5TextParameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IA5TextParameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IA5TextParameters */
let _cached_encoder_for_IA5TextParameters: $.ASN1Encoder<IA5TextParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IA5TextParameters */

/* START_OF_SYMBOL_DEFINITION _encode_IA5TextParameters */
/**
 * @summary Encodes a(n) IA5TextParameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IA5TextParameters, encoded as an ASN.1 Element.
 */
export function _encode_IA5TextParameters(
    value: IA5TextParameters,
    elGetter: $.ASN1Encoder<IA5TextParameters>
) {
    if (!_cached_encoder_for_IA5TextParameters) {
        _cached_encoder_for_IA5TextParameters = function (
            value: IA5TextParameters,
            elGetter: $.ASN1Encoder<IA5TextParameters>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.repertoire === undefined ||
                        $.deepEq(
                            value.repertoire,
                            IA5TextParameters._default_value_for_repertoire
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Repertoire,
                                  $.BER
                              )(value.repertoire, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IA5TextParameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IA5TextParameters */

/* eslint-enable */
