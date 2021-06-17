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
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta';
export {
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta';

/* START_OF_SYMBOL_DEFINITION NamingObjectClass */
/**
 * @summary NamingObjectClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NamingObjectClass ::= SEQUENCE {
 *   class          TemplateLabel,
 *   andSubclasses  BOOLEAN DEFAULT FALSE
 * }
 * ```
 *
 * @class
 */
export class NamingObjectClass {
    constructor(
        /**
         * @summary `class_`.
         * @public
         * @readonly
         */
        readonly class_: TemplateLabel,
        /**
         * @summary `andSubclasses`.
         * @public
         * @readonly
         */
        readonly andSubclasses: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a NamingObjectClass
     * @description
     *
     * This takes an `object` and converts it to a `NamingObjectClass`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NamingObjectClass`.
     * @returns {NamingObjectClass}
     */
    public static _from_object(
        _o: { [_K in keyof NamingObjectClass]: NamingObjectClass[_K] }
    ): NamingObjectClass {
        return new NamingObjectClass(_o.class_, _o.andSubclasses);
    }

    /**
     * @summary Getter that returns the default value for `andSubclasses`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_andSubclasses() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION NamingObjectClass */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NamingObjectClass */
/**
 * @summary The Leading Root Component Types of NamingObjectClass
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NamingObjectClass: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'class',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'andSubclasses',
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NamingObjectClass */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NamingObjectClass */
/**
 * @summary The Trailing Root Component Types of NamingObjectClass
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NamingObjectClass: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NamingObjectClass */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NamingObjectClass */
/**
 * @summary The Extension Addition Component Types of NamingObjectClass
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NamingObjectClass: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NamingObjectClass */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NamingObjectClass */
let _cached_decoder_for_NamingObjectClass: $.ASN1Decoder<NamingObjectClass> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NamingObjectClass */

/* START_OF_SYMBOL_DEFINITION _decode_NamingObjectClass */
/**
 * @summary Decodes an ASN.1 element into a(n) NamingObjectClass
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NamingObjectClass} The decoded data structure.
 */
export function _decode_NamingObjectClass(el: _Element) {
    if (!_cached_decoder_for_NamingObjectClass) {
        _cached_decoder_for_NamingObjectClass = function (
            el: _Element
        ): NamingObjectClass {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let class_!: TemplateLabel;
            let andSubclasses: OPTIONAL<BOOLEAN> =
                NamingObjectClass._default_value_for_andSubclasses;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                class: (_el: _Element): void => {
                    class_ = _decode_TemplateLabel(_el);
                },
                andSubclasses: (_el: _Element): void => {
                    andSubclasses = $._decodeBoolean(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NamingObjectClass,
                _extension_additions_list_spec_for_NamingObjectClass,
                _root_component_type_list_2_spec_for_NamingObjectClass,
                undefined
            );
            return new NamingObjectClass /* SEQUENCE_CONSTRUCTOR_CALL */(
                class_,
                andSubclasses
            );
        };
    }
    return _cached_decoder_for_NamingObjectClass(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NamingObjectClass */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NamingObjectClass */
let _cached_encoder_for_NamingObjectClass: $.ASN1Encoder<NamingObjectClass> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NamingObjectClass */

/* START_OF_SYMBOL_DEFINITION _encode_NamingObjectClass */
/**
 * @summary Encodes a(n) NamingObjectClass into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NamingObjectClass, encoded as an ASN.1 Element.
 */
export function _encode_NamingObjectClass(
    value: NamingObjectClass,
    elGetter: $.ASN1Encoder<NamingObjectClass>
) {
    if (!_cached_encoder_for_NamingObjectClass) {
        _cached_encoder_for_NamingObjectClass = function (
            value: NamingObjectClass,
            elGetter: $.ASN1Encoder<NamingObjectClass>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TemplateLabel(
                            value.class_,
                            $.BER
                        ),
                        /* IF_DEFAULT */ value.andSubclasses === undefined ||
                        $.deepEq(
                            value.andSubclasses,
                            NamingObjectClass._default_value_for_andSubclasses
                        )
                            ? undefined
                            : $._encodeBoolean(value.andSubclasses, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NamingObjectClass(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NamingObjectClass */

/* eslint-enable */
