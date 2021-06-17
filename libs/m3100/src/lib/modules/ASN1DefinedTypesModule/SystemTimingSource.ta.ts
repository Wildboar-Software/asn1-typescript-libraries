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
    SystemTiming,
    _decode_SystemTiming,
    _encode_SystemTiming,
} from '../ASN1DefinedTypesModule/SystemTiming.ta';
export {
    SystemTiming,
    _decode_SystemTiming,
    _encode_SystemTiming,
} from '../ASN1DefinedTypesModule/SystemTiming.ta';

/* START_OF_SYMBOL_DEFINITION SystemTimingSource */
/**
 * @summary SystemTimingSource
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemTimingSource ::= SEQUENCE {
 *   primaryTimingSource    SystemTiming,
 *   secondaryTimingSource  SystemTiming OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class SystemTimingSource {
    constructor(
        /**
         * @summary `primaryTimingSource`.
         * @public
         * @readonly
         */
        readonly primaryTimingSource: SystemTiming,
        /**
         * @summary `secondaryTimingSource`.
         * @public
         * @readonly
         */
        readonly secondaryTimingSource: OPTIONAL<SystemTiming>
    ) {}

    /**
     * @summary Restructures an object into a SystemTimingSource
     * @description
     *
     * This takes an `object` and converts it to a `SystemTimingSource`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SystemTimingSource`.
     * @returns {SystemTimingSource}
     */
    public static _from_object(
        _o: { [_K in keyof SystemTimingSource]: SystemTimingSource[_K] }
    ): SystemTimingSource {
        return new SystemTimingSource(
            _o.primaryTimingSource,
            _o.secondaryTimingSource
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SystemTimingSource */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SystemTimingSource */
/**
 * @summary The Leading Root Component Types of SystemTimingSource
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SystemTimingSource: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'primaryTimingSource',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'secondaryTimingSource',
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SystemTimingSource */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SystemTimingSource */
/**
 * @summary The Trailing Root Component Types of SystemTimingSource
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SystemTimingSource: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SystemTimingSource */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SystemTimingSource */
/**
 * @summary The Extension Addition Component Types of SystemTimingSource
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SystemTimingSource: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SystemTimingSource */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SystemTimingSource */
let _cached_decoder_for_SystemTimingSource: $.ASN1Decoder<SystemTimingSource> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SystemTimingSource */

/* START_OF_SYMBOL_DEFINITION _decode_SystemTimingSource */
/**
 * @summary Decodes an ASN.1 element into a(n) SystemTimingSource
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SystemTimingSource} The decoded data structure.
 */
export function _decode_SystemTimingSource(el: _Element) {
    if (!_cached_decoder_for_SystemTimingSource) {
        _cached_decoder_for_SystemTimingSource = function (
            el: _Element
        ): SystemTimingSource {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let primaryTimingSource!: SystemTiming;
            let secondaryTimingSource: OPTIONAL<SystemTiming>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                primaryTimingSource: (_el: _Element): void => {
                    primaryTimingSource = _decode_SystemTiming(_el);
                },
                secondaryTimingSource: (_el: _Element): void => {
                    secondaryTimingSource = _decode_SystemTiming(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SystemTimingSource,
                _extension_additions_list_spec_for_SystemTimingSource,
                _root_component_type_list_2_spec_for_SystemTimingSource,
                undefined
            );
            return new SystemTimingSource /* SEQUENCE_CONSTRUCTOR_CALL */(
                primaryTimingSource,
                secondaryTimingSource
            );
        };
    }
    return _cached_decoder_for_SystemTimingSource(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SystemTimingSource */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SystemTimingSource */
let _cached_encoder_for_SystemTimingSource: $.ASN1Encoder<SystemTimingSource> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SystemTimingSource */

/* START_OF_SYMBOL_DEFINITION _encode_SystemTimingSource */
/**
 * @summary Encodes a(n) SystemTimingSource into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemTimingSource, encoded as an ASN.1 Element.
 */
export function _encode_SystemTimingSource(
    value: SystemTimingSource,
    elGetter: $.ASN1Encoder<SystemTimingSource>
) {
    if (!_cached_encoder_for_SystemTimingSource) {
        _cached_encoder_for_SystemTimingSource = function (
            value: SystemTimingSource,
            elGetter: $.ASN1Encoder<SystemTimingSource>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SystemTiming(
                            value.primaryTimingSource,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.secondaryTimingSource ===
                        undefined
                            ? undefined
                            : _encode_SystemTiming(
                                  value.secondaryTimingSource,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SystemTimingSource(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SystemTimingSource */

/* eslint-enable */
