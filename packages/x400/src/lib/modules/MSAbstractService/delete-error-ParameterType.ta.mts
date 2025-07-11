/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    delete_error_ParameterType_problems_Item,
    _decode_delete_error_ParameterType_problems_Item,
    _encode_delete_error_ParameterType_problems_Item,
} from '../MSAbstractService/delete-error-ParameterType-problems-Item.ta.mjs';
import {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
/**
 * @summary delete_error_ParameterType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * delete-error-ParameterType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class delete_error_ParameterType {
    constructor(
        /**
         * @summary `problems`.
         * @public
         * @readonly
         */
        readonly problems: delete_error_ParameterType_problems_Item[],
        /**
         * @summary `entries_deleted`.
         * @public
         * @readonly
         */
        readonly entries_deleted: OPTIONAL<SequenceNumber[]>
    ) {}

    /**
     * @summary Restructures an object into a delete_error_ParameterType
     * @description
     *
     * This takes an `object` and converts it to a `delete_error_ParameterType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `delete_error_ParameterType`.
     * @returns {delete_error_ParameterType}
     */
    public static _from_object(
        _o: {
            [_K in keyof delete_error_ParameterType]: delete_error_ParameterType[_K];
        }
    ): delete_error_ParameterType {
        return new delete_error_ParameterType(_o.problems, _o.entries_deleted);
    }
}

/**
 * @summary The Leading Root Component Types of delete_error_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_delete_error_ParameterType: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problems',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'entries-deleted',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of delete_error_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_delete_error_ParameterType: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of delete_error_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_delete_error_ParameterType: $.ComponentSpec[] = [];

let _cached_decoder_for_delete_error_ParameterType: $.ASN1Decoder<delete_error_ParameterType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) delete_error_ParameterType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {delete_error_ParameterType} The decoded data structure.
 */
export function _decode_delete_error_ParameterType(el: _Element): delete_error_ParameterType {
    if (!_cached_decoder_for_delete_error_ParameterType) {
        _cached_decoder_for_delete_error_ParameterType = function (
            el: _Element
        ): delete_error_ParameterType {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problems!: delete_error_ParameterType_problems_Item[];
            let entries_deleted: OPTIONAL<SequenceNumber[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                problems: (_el: _Element): void => {
                    problems = $._decode_explicit<
                        delete_error_ParameterType_problems_Item[]
                    >(() =>
                        $._decodeSetOf<delete_error_ParameterType_problems_Item>(
                            () =>
                                _decode_delete_error_ParameterType_problems_Item
                        )
                    )(_el);
                },
                'entries-deleted': (_el: _Element): void => {
                    entries_deleted = $._decode_explicit<SequenceNumber[]>(() =>
                        $._decodeSetOf<SequenceNumber>(
                            () => _decode_SequenceNumber
                        )
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_delete_error_ParameterType,
                _extension_additions_list_spec_for_delete_error_ParameterType,
                _root_component_type_list_2_spec_for_delete_error_ParameterType,
                undefined
            );
            return new delete_error_ParameterType /* SET_CONSTRUCTOR_CALL */(
                problems,
                entries_deleted
            );
        };
    }
    return _cached_decoder_for_delete_error_ParameterType(el);
}

let _cached_encoder_for_delete_error_ParameterType: $.ASN1Encoder<delete_error_ParameterType> | null = null;

/**
 * @summary Encodes a(n) delete_error_ParameterType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The delete_error_ParameterType, encoded as an ASN.1 Element.
 */
export function _encode_delete_error_ParameterType(
    value: delete_error_ParameterType,
    elGetter: $.ASN1Encoder<delete_error_ParameterType>
): _Element {
    if (!_cached_encoder_for_delete_error_ParameterType) {
        _cached_encoder_for_delete_error_ParameterType = function (
            value: delete_error_ParameterType        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () =>
                                $._encodeSetOf<delete_error_ParameterType_problems_Item>(
                                    () =>
                                        _encode_delete_error_ParameterType_problems_Item,
                                    $.BER
                                ),
                            $.BER
                        )(value.problems, $.BER),
                        /* IF_ABSENT  */ value.entries_deleted === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSetOf<SequenceNumber>(
                                          () => _encode_SequenceNumber,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.entries_deleted, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_delete_error_ParameterType(value, elGetter);
}


/* eslint-enable */
