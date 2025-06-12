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
    Condition,
    _decode_Condition,
    _encode_Condition,
} from '../ChangeOverASN1Productions/Condition.ta.js';
export {
    Condition,
    _decode_Condition,
    _encode_Condition,
} from '../ChangeOverASN1Productions/Condition.ta.js';

/* START_OF_SYMBOL_DEFINITION Conditions */
/**
 * @summary Conditions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Conditions ::= SEQUENCE {
 *   primary    [0] IMPLICIT Condition OPTIONAL,
 *   secondary  [1] IMPLICIT Condition OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Conditions {
    constructor(
        /**
         * @summary `primary`.
         * @public
         * @readonly
         */
        readonly primary: OPTIONAL<Condition>,
        /**
         * @summary `secondary`.
         * @public
         * @readonly
         */
        readonly secondary: OPTIONAL<Condition>
    ) {}

    /**
     * @summary Restructures an object into a Conditions
     * @description
     *
     * This takes an `object` and converts it to a `Conditions`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Conditions`.
     * @returns {Conditions}
     */
    public static _from_object(
        _o: { [_K in keyof Conditions]: Conditions[_K] }
    ): Conditions {
        return new Conditions(_o.primary, _o.secondary);
    }
}
/* END_OF_SYMBOL_DEFINITION Conditions */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Conditions */
/**
 * @summary The Leading Root Component Types of Conditions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Conditions: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'primary',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'secondary',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Conditions */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Conditions */
/**
 * @summary The Trailing Root Component Types of Conditions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Conditions: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Conditions */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Conditions */
/**
 * @summary The Extension Addition Component Types of Conditions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Conditions: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Conditions */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Conditions */
let _cached_decoder_for_Conditions: $.ASN1Decoder<Conditions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Conditions */

/* START_OF_SYMBOL_DEFINITION _decode_Conditions */
/**
 * @summary Decodes an ASN.1 element into a(n) Conditions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Conditions} The decoded data structure.
 */
export function _decode_Conditions(el: _Element) {
    if (!_cached_decoder_for_Conditions) {
        _cached_decoder_for_Conditions = function (el: _Element): Conditions {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let primary: OPTIONAL<Condition>;
            let secondary: OPTIONAL<Condition>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                primary: (_el: _Element): void => {
                    primary = $._decode_implicit<Condition>(
                        () => _decode_Condition
                    )(_el);
                },
                secondary: (_el: _Element): void => {
                    secondary = $._decode_implicit<Condition>(
                        () => _decode_Condition
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Conditions,
                _extension_additions_list_spec_for_Conditions,
                _root_component_type_list_2_spec_for_Conditions,
                undefined
            );
            return new Conditions /* SEQUENCE_CONSTRUCTOR_CALL */(
                primary,
                secondary
            );
        };
    }
    return _cached_decoder_for_Conditions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Conditions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Conditions */
let _cached_encoder_for_Conditions: $.ASN1Encoder<Conditions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Conditions */

/* START_OF_SYMBOL_DEFINITION _encode_Conditions */
/**
 * @summary Encodes a(n) Conditions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Conditions, encoded as an ASN.1 Element.
 */
export function _encode_Conditions(
    value: Conditions,
    elGetter: $.ASN1Encoder<Conditions>
) {
    if (!_cached_encoder_for_Conditions) {
        _cached_encoder_for_Conditions = function (
            value: Conditions,
            elGetter: $.ASN1Encoder<Conditions>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.primary === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Condition,
                                  $.BER
                              )(value.primary, $.BER),
                        /* IF_ABSENT  */ value.secondary === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Condition,
                                  $.BER
                              )(value.secondary, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Conditions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Conditions */

/* eslint-enable */
