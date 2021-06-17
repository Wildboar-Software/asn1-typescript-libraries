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
    ExpectedAttributeList,
    _decode_ExpectedAttributeList,
    _encode_ExpectedAttributeList,
} from '../ChangeOverASN1Productions/ExpectedAttributeList.ta';
export {
    ExpectedAttributeList,
    _decode_ExpectedAttributeList,
    _encode_ExpectedAttributeList,
} from '../ChangeOverASN1Productions/ExpectedAttributeList.ta';

/* START_OF_SYMBOL_DEFINITION UnattainableAttributeList */
/**
 * @summary UnattainableAttributeList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnattainableAttributeList ::= SEQUENCE {
 *   primaryChanges    [0] IMPLICIT ExpectedAttributeList OPTIONAL,
 *   secondaryChanges  [1] IMPLICIT ExpectedAttributeList OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class UnattainableAttributeList {
    constructor(
        /**
         * @summary `primaryChanges`.
         * @public
         * @readonly
         */
        readonly primaryChanges: OPTIONAL<ExpectedAttributeList>,
        /**
         * @summary `secondaryChanges`.
         * @public
         * @readonly
         */
        readonly secondaryChanges: OPTIONAL<ExpectedAttributeList>
    ) {}

    /**
     * @summary Restructures an object into a UnattainableAttributeList
     * @description
     *
     * This takes an `object` and converts it to a `UnattainableAttributeList`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UnattainableAttributeList`.
     * @returns {UnattainableAttributeList}
     */
    public static _from_object(
        _o: {
            [_K in keyof UnattainableAttributeList]: UnattainableAttributeList[_K];
        }
    ): UnattainableAttributeList {
        return new UnattainableAttributeList(
            _o.primaryChanges,
            _o.secondaryChanges
        );
    }
}
/* END_OF_SYMBOL_DEFINITION UnattainableAttributeList */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UnattainableAttributeList */
/**
 * @summary The Leading Root Component Types of UnattainableAttributeList
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UnattainableAttributeList: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'primaryChanges',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'secondaryChanges',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UnattainableAttributeList */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UnattainableAttributeList */
/**
 * @summary The Trailing Root Component Types of UnattainableAttributeList
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UnattainableAttributeList: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UnattainableAttributeList */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UnattainableAttributeList */
/**
 * @summary The Extension Addition Component Types of UnattainableAttributeList
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UnattainableAttributeList: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UnattainableAttributeList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnattainableAttributeList */
let _cached_decoder_for_UnattainableAttributeList: $.ASN1Decoder<UnattainableAttributeList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnattainableAttributeList */

/* START_OF_SYMBOL_DEFINITION _decode_UnattainableAttributeList */
/**
 * @summary Decodes an ASN.1 element into a(n) UnattainableAttributeList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnattainableAttributeList} The decoded data structure.
 */
export function _decode_UnattainableAttributeList(el: _Element) {
    if (!_cached_decoder_for_UnattainableAttributeList) {
        _cached_decoder_for_UnattainableAttributeList = function (
            el: _Element
        ): UnattainableAttributeList {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let primaryChanges: OPTIONAL<ExpectedAttributeList>;
            let secondaryChanges: OPTIONAL<ExpectedAttributeList>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                primaryChanges: (_el: _Element): void => {
                    primaryChanges = $._decode_implicit<ExpectedAttributeList>(
                        () => _decode_ExpectedAttributeList
                    )(_el);
                },
                secondaryChanges: (_el: _Element): void => {
                    secondaryChanges = $._decode_implicit<ExpectedAttributeList>(
                        () => _decode_ExpectedAttributeList
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UnattainableAttributeList,
                _extension_additions_list_spec_for_UnattainableAttributeList,
                _root_component_type_list_2_spec_for_UnattainableAttributeList,
                undefined
            );
            return new UnattainableAttributeList /* SEQUENCE_CONSTRUCTOR_CALL */(
                primaryChanges,
                secondaryChanges
            );
        };
    }
    return _cached_decoder_for_UnattainableAttributeList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UnattainableAttributeList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnattainableAttributeList */
let _cached_encoder_for_UnattainableAttributeList: $.ASN1Encoder<UnattainableAttributeList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnattainableAttributeList */

/* START_OF_SYMBOL_DEFINITION _encode_UnattainableAttributeList */
/**
 * @summary Encodes a(n) UnattainableAttributeList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnattainableAttributeList, encoded as an ASN.1 Element.
 */
export function _encode_UnattainableAttributeList(
    value: UnattainableAttributeList,
    elGetter: $.ASN1Encoder<UnattainableAttributeList>
) {
    if (!_cached_encoder_for_UnattainableAttributeList) {
        _cached_encoder_for_UnattainableAttributeList = function (
            value: UnattainableAttributeList,
            elGetter: $.ASN1Encoder<UnattainableAttributeList>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.primaryChanges === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_ExpectedAttributeList,
                                  $.BER
                              )(value.primaryChanges, $.BER),
                        /* IF_ABSENT  */ value.secondaryChanges === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_ExpectedAttributeList,
                                  $.BER
                              )(value.secondaryChanges, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UnattainableAttributeList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UnattainableAttributeList */

/* eslint-enable */
