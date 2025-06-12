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
    SecurityLabel_Item_initiatorLabel_clearance,
    _decode_SecurityLabel_Item_initiatorLabel_clearance,
    _encode_SecurityLabel_Item_initiatorLabel_clearance,
} from '../AccessControl-ASN1Module/SecurityLabel-Item-initiatorLabel-clearance.ta.mjs';
export {
    SecurityLabel_Item_initiatorLabel_clearance,
    _decode_SecurityLabel_Item_initiatorLabel_clearance,
    _encode_SecurityLabel_Item_initiatorLabel_clearance,
} from '../AccessControl-ASN1Module/SecurityLabel-Item-initiatorLabel-clearance.ta.mjs';

/* START_OF_SYMBOL_DEFINITION SecurityLabel_Item_initiatorLabel */
/**
 * @summary SecurityLabel_Item_initiatorLabel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityLabel-Item-initiatorLabel ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class SecurityLabel_Item_initiatorLabel {
    constructor(
        /**
         * @summary `clearance`.
         * @public
         * @readonly
         */
        readonly clearance: SecurityLabel_Item_initiatorLabel_clearance,
        /**
         * @summary `category`.
         * @public
         * @readonly
         */
        readonly category: OPTIONAL<BIT_STRING>
    ) {}

    /**
     * @summary Restructures an object into a SecurityLabel_Item_initiatorLabel
     * @description
     *
     * This takes an `object` and converts it to a `SecurityLabel_Item_initiatorLabel`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecurityLabel_Item_initiatorLabel`.
     * @returns {SecurityLabel_Item_initiatorLabel}
     */
    public static _from_object(
        _o: {
            [_K in keyof SecurityLabel_Item_initiatorLabel]: SecurityLabel_Item_initiatorLabel[_K];
        }
    ): SecurityLabel_Item_initiatorLabel {
        return new SecurityLabel_Item_initiatorLabel(_o.clearance, _o.category);
    }
}
/* END_OF_SYMBOL_DEFINITION SecurityLabel_Item_initiatorLabel */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SecurityLabel_Item_initiatorLabel */
/**
 * @summary The Leading Root Component Types of SecurityLabel_Item_initiatorLabel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SecurityLabel_Item_initiatorLabel: $.ComponentSpec[] = [
    new $.ComponentSpec('clearance', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'category',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SecurityLabel_Item_initiatorLabel */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SecurityLabel_Item_initiatorLabel */
/**
 * @summary The Trailing Root Component Types of SecurityLabel_Item_initiatorLabel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SecurityLabel_Item_initiatorLabel: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SecurityLabel_Item_initiatorLabel */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SecurityLabel_Item_initiatorLabel */
/**
 * @summary The Extension Addition Component Types of SecurityLabel_Item_initiatorLabel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SecurityLabel_Item_initiatorLabel: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SecurityLabel_Item_initiatorLabel */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityLabel_Item_initiatorLabel */
let _cached_decoder_for_SecurityLabel_Item_initiatorLabel: $.ASN1Decoder<SecurityLabel_Item_initiatorLabel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityLabel_Item_initiatorLabel */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityLabel_Item_initiatorLabel */
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityLabel_Item_initiatorLabel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityLabel_Item_initiatorLabel} The decoded data structure.
 */
export function _decode_SecurityLabel_Item_initiatorLabel(el: _Element) {
    if (!_cached_decoder_for_SecurityLabel_Item_initiatorLabel) {
        _cached_decoder_for_SecurityLabel_Item_initiatorLabel = function (
            el: _Element
        ): SecurityLabel_Item_initiatorLabel {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let clearance!: SecurityLabel_Item_initiatorLabel_clearance;
            let category: OPTIONAL<BIT_STRING>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                clearance: (_el: _Element): void => {
                    clearance = _decode_SecurityLabel_Item_initiatorLabel_clearance(
                        _el
                    );
                },
                category: (_el: _Element): void => {
                    category = $._decode_implicit<BIT_STRING>(
                        () => $._decodeBitString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SecurityLabel_Item_initiatorLabel,
                _extension_additions_list_spec_for_SecurityLabel_Item_initiatorLabel,
                _root_component_type_list_2_spec_for_SecurityLabel_Item_initiatorLabel,
                undefined
            );
            return new SecurityLabel_Item_initiatorLabel /* SEQUENCE_CONSTRUCTOR_CALL */(
                clearance,
                category
            );
        };
    }
    return _cached_decoder_for_SecurityLabel_Item_initiatorLabel(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecurityLabel_Item_initiatorLabel */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityLabel_Item_initiatorLabel */
let _cached_encoder_for_SecurityLabel_Item_initiatorLabel: $.ASN1Encoder<SecurityLabel_Item_initiatorLabel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityLabel_Item_initiatorLabel */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityLabel_Item_initiatorLabel */
/**
 * @summary Encodes a(n) SecurityLabel_Item_initiatorLabel into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityLabel_Item_initiatorLabel, encoded as an ASN.1 Element.
 */
export function _encode_SecurityLabel_Item_initiatorLabel(
    value: SecurityLabel_Item_initiatorLabel,
    elGetter: $.ASN1Encoder<SecurityLabel_Item_initiatorLabel>
) {
    if (!_cached_encoder_for_SecurityLabel_Item_initiatorLabel) {
        _cached_encoder_for_SecurityLabel_Item_initiatorLabel = function (
            value: SecurityLabel_Item_initiatorLabel,
            elGetter: $.ASN1Encoder<SecurityLabel_Item_initiatorLabel>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SecurityLabel_Item_initiatorLabel_clearance(
                            value.clearance,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.category === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeBitString,
                                  $.BER
                              )(value.category, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SecurityLabel_Item_initiatorLabel(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_SecurityLabel_Item_initiatorLabel */

/* eslint-enable */
