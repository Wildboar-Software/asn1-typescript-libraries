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
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.js';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.js';
import { MatchingRuleTable } from '../MSMatchingRules/MatchingRuleTable.osa.js';
export { MatchingRuleTable } from '../MSMatchingRules/MatchingRuleTable.osa.js';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.js";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "./AttributeType.ta.js";

/* START_OF_SYMBOL_DEFINITION MatchingRuleAssertion */
/**
 * @summary MatchingRuleAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MatchingRuleAssertion ::= SEQUENCE {
 *   matching-rule   [0]  MATCHING-RULE.&id({MatchingRuleTable}),
 *   attribute-type  [1]  X413ATTRIBUTE.&id,
 *   match-value
 *     [2]  MATCHING-RULE.&AssertionType({MatchingRuleTable}{@matching-rule})
 * }
 * ```
 *
 * @class
 */
export class MatchingRuleAssertion {
    constructor(
        /**
         * @summary `matching_rule`.
         * @public
         * @readonly
         */
        readonly matching_rule: OBJECT_IDENTIFIER,
        /**
         * @summary `attribute_type`.
         * @public
         * @readonly
         */
        readonly attribute_type: AttributeType,
        /**
         * @summary `match_value`.
         * @public
         * @readonly
         */
        readonly match_value: _Element
    ) {}

    /**
     * @summary Restructures an object into a MatchingRuleAssertion
     * @description
     *
     * This takes an `object` and converts it to a `MatchingRuleAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MatchingRuleAssertion`.
     * @returns {MatchingRuleAssertion}
     */
    public static _from_object(
        _o: { [_K in keyof MatchingRuleAssertion]: MatchingRuleAssertion[_K] }
    ): MatchingRuleAssertion {
        return new MatchingRuleAssertion(
            _o.matching_rule,
            _o.attribute_type,
            _o.match_value
        );
    }
}
/* END_OF_SYMBOL_DEFINITION MatchingRuleAssertion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MatchingRuleAssertion */
/**
 * @summary The Leading Root Component Types of MatchingRuleAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MatchingRuleAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'matching-rule',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'attribute-type',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'match-value',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MatchingRuleAssertion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MatchingRuleAssertion */
/**
 * @summary The Trailing Root Component Types of MatchingRuleAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MatchingRuleAssertion: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MatchingRuleAssertion */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MatchingRuleAssertion */
/**
 * @summary The Extension Addition Component Types of MatchingRuleAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MatchingRuleAssertion: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MatchingRuleAssertion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MatchingRuleAssertion */
let _cached_decoder_for_MatchingRuleAssertion: $.ASN1Decoder<MatchingRuleAssertion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MatchingRuleAssertion */

/* START_OF_SYMBOL_DEFINITION _decode_MatchingRuleAssertion */
/**
 * @summary Decodes an ASN.1 element into a(n) MatchingRuleAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MatchingRuleAssertion} The decoded data structure.
 */
export function _decode_MatchingRuleAssertion(el: _Element) {
    if (!_cached_decoder_for_MatchingRuleAssertion) {
        _cached_decoder_for_MatchingRuleAssertion = function (
            el: _Element
        ): MatchingRuleAssertion {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'MatchingRuleAssertion contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'matching-rule';
            sequence[1].name = 'attribute-type';
            sequence[2].name = 'match-value';
            let matching_rule!: OBJECT_IDENTIFIER;
            let attribute_type!: AttributeType;
            let match_value!: _Element;
            matching_rule = $._decode_explicit<OBJECT_IDENTIFIER>(
                () => $._decodeObjectIdentifier
            )(sequence[0]);
            attribute_type = $._decode_explicit<AttributeType>(
                () => _decode_AttributeType
            )(sequence[1]);
            match_value = $._decode_explicit<_Element>(() => $._decodeAny)(
                sequence[2]
            );
            return new MatchingRuleAssertion(
                matching_rule,
                attribute_type,
                match_value
            );
        };
    }
    return _cached_decoder_for_MatchingRuleAssertion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MatchingRuleAssertion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MatchingRuleAssertion */
let _cached_encoder_for_MatchingRuleAssertion: $.ASN1Encoder<MatchingRuleAssertion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MatchingRuleAssertion */

/* START_OF_SYMBOL_DEFINITION _encode_MatchingRuleAssertion */
/**
 * @summary Encodes a(n) MatchingRuleAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MatchingRuleAssertion, encoded as an ASN.1 Element.
 */
export function _encode_MatchingRuleAssertion(
    value: MatchingRuleAssertion,
    elGetter: $.ASN1Encoder<MatchingRuleAssertion>
) {
    if (!_cached_encoder_for_MatchingRuleAssertion) {
        _cached_encoder_for_MatchingRuleAssertion = function (
            value: MatchingRuleAssertion,
            elGetter: $.ASN1Encoder<MatchingRuleAssertion>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => $._encodeObjectIdentifier,
                            $.BER
                        )(value.matching_rule, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_AttributeType,
                            $.BER
                        )(value.attribute_type, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            2,
                            () => $._encodeAny,
                            $.BER
                        )(value.match_value, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MatchingRuleAssertion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MatchingRuleAssertion */

/* eslint-enable */
