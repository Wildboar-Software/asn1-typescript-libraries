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
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.js';
export { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.js';

/* START_OF_SYMBOL_DEFINITION IPMSExtension */
/**
 * @summary IPMSExtension
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMSExtension{IPMS-EXTENSION:ChosenFrom} ::= SEQUENCE {
 *   type   IPMS-EXTENSION.&id({ChosenFrom}),
 *   value  IPMS-EXTENSION.&Type({ChosenFrom}{@type}) DEFAULT NULL:NULL
 * }
 * ```
 *
 * @class
 */
export class IPMSExtension {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OBJECT_IDENTIFIER,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a IPMSExtension
     * @description
     *
     * This takes an `object` and converts it to a `IPMSExtension`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPMSExtension`.
     * @returns {IPMSExtension}
     */
    public static _from_object(
        _o: { [_K in keyof IPMSExtension]: IPMSExtension[_K] }
    ): IPMSExtension {
        return new IPMSExtension(_o.type_, _o.value);
    }

    /**
     * @summary Getter that returns the default value for `value`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_value() {
        return null;
    }
}
/* END_OF_SYMBOL_DEFINITION IPMSExtension */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IPMSExtension */
/**
 * @summary The Leading Root Component Types of IPMSExtension
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IPMSExtension: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'type',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec('value', true, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IPMSExtension */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IPMSExtension */
/**
 * @summary The Trailing Root Component Types of IPMSExtension
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IPMSExtension: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IPMSExtension */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IPMSExtension */
/**
 * @summary The Extension Addition Component Types of IPMSExtension
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IPMSExtension: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IPMSExtension */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IPMSExtension */
let _cached_decoder_for_IPMSExtension: $.ASN1Decoder<IPMSExtension> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IPMSExtension */

/* START_OF_SYMBOL_DEFINITION _decode_IPMSExtension */
/**
 * @summary Decodes an ASN.1 element into a(n) IPMSExtension
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IPMSExtension} The decoded data structure.
 */
export function _decode_IPMSExtension(el: _Element) {
    if (!_cached_decoder_for_IPMSExtension) {
        _cached_decoder_for_IPMSExtension = function (
            el: _Element
        ): IPMSExtension {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let type_!: OBJECT_IDENTIFIER;
            let value: OPTIONAL<_Element> =
                IPMSExtension._default_value_for_value;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                type: (_el: _Element): void => {
                    type_ = $._decodeObjectIdentifier(_el);
                },
                value: (_el: _Element): void => {
                    value = $._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IPMSExtension,
                _extension_additions_list_spec_for_IPMSExtension,
                _root_component_type_list_2_spec_for_IPMSExtension,
                undefined
            );
            return new IPMSExtension /* SEQUENCE_CONSTRUCTOR_CALL */(
                type_,
                value
            );
        };
    }
    return _cached_decoder_for_IPMSExtension(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IPMSExtension */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IPMSExtension */
let _cached_encoder_for_IPMSExtension: $.ASN1Encoder<IPMSExtension> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IPMSExtension */

/* START_OF_SYMBOL_DEFINITION _encode_IPMSExtension */
/**
 * @summary Encodes a(n) IPMSExtension into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPMSExtension, encoded as an ASN.1 Element.
 */
export function _encode_IPMSExtension(
    value: IPMSExtension,
    elGetter: $.ASN1Encoder<IPMSExtension>
) {
    if (!_cached_encoder_for_IPMSExtension) {
        _cached_encoder_for_IPMSExtension = function (
            value: IPMSExtension,
            elGetter: $.ASN1Encoder<IPMSExtension>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.type_,
                            $.BER
                        ),
                        /* IF_DEFAULT */ value.value === undefined ||
                        $.deepEq(
                            value.value,
                            IPMSExtension._default_value_for_value
                        )
                            ? undefined
                            : $._encodeAny(value.value, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IPMSExtension(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IPMSExtension */

/* eslint-enable */
