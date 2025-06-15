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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
import {
    MSExtensions,
    _decode_MSExtensions,
    _encode_MSExtensions,
} from '../MSAbstractService/MSExtensions.ta.mjs';
/**
 * @summary DeleteResult_delete_result_94
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteResult-delete-result-94 ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class DeleteResult_delete_result_94 {
    constructor(
        /**
         * @summary `entries_deleted`.
         * @public
         * @readonly
         */
        readonly entries_deleted: OPTIONAL<SequenceNumber[]>,
        /**
         * @summary `delete_result_extensions`.
         * @public
         * @readonly
         */
        readonly delete_result_extensions: OPTIONAL<MSExtensions>
    ) {}

    /**
     * @summary Restructures an object into a DeleteResult_delete_result_94
     * @description
     *
     * This takes an `object` and converts it to a `DeleteResult_delete_result_94`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeleteResult_delete_result_94`.
     * @returns {DeleteResult_delete_result_94}
     */
    public static _from_object(
        _o: {
            [_K in keyof DeleteResult_delete_result_94]: DeleteResult_delete_result_94[_K];
        }
    ): DeleteResult_delete_result_94 {
        return new DeleteResult_delete_result_94(
            _o.entries_deleted,
            _o.delete_result_extensions
        );
    }
}

/**
 * @summary The Leading Root Component Types of DeleteResult_delete_result_94
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeleteResult_delete_result_94: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'entries-deleted',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'delete-result-extensions',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of DeleteResult_delete_result_94
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeleteResult_delete_result_94: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DeleteResult_delete_result_94
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeleteResult_delete_result_94: $.ComponentSpec[] = [];

let _cached_decoder_for_DeleteResult_delete_result_94: $.ASN1Decoder<DeleteResult_delete_result_94> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteResult_delete_result_94
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteResult_delete_result_94} The decoded data structure.
 */
export function _decode_DeleteResult_delete_result_94(el: _Element) {
    if (!_cached_decoder_for_DeleteResult_delete_result_94) {
        _cached_decoder_for_DeleteResult_delete_result_94 = function (
            el: _Element
        ): DeleteResult_delete_result_94 {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let entries_deleted: OPTIONAL<SequenceNumber[]>;
            let delete_result_extensions: OPTIONAL<MSExtensions>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'entries-deleted': (_el: _Element): void => {
                    entries_deleted = $._decode_explicit<SequenceNumber[]>(() =>
                        $._decodeSequenceOf<SequenceNumber>(
                            () => _decode_SequenceNumber
                        )
                    )(_el);
                },
                'delete-result-extensions': (_el: _Element): void => {
                    delete_result_extensions = $._decode_explicit<MSExtensions>(
                        () => _decode_MSExtensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeleteResult_delete_result_94,
                _extension_additions_list_spec_for_DeleteResult_delete_result_94,
                _root_component_type_list_2_spec_for_DeleteResult_delete_result_94,
                undefined
            );
            return new DeleteResult_delete_result_94 /* SET_CONSTRUCTOR_CALL */(
                entries_deleted,
                delete_result_extensions
            );
        };
    }
    return _cached_decoder_for_DeleteResult_delete_result_94(el);
}

let _cached_encoder_for_DeleteResult_delete_result_94: $.ASN1Encoder<DeleteResult_delete_result_94> | null = null;

/**
 * @summary Encodes a(n) DeleteResult_delete_result_94 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteResult_delete_result_94, encoded as an ASN.1 Element.
 */
export function _encode_DeleteResult_delete_result_94(
    value: DeleteResult_delete_result_94,
    elGetter: $.ASN1Encoder<DeleteResult_delete_result_94>
) {
    if (!_cached_encoder_for_DeleteResult_delete_result_94) {
        _cached_encoder_for_DeleteResult_delete_result_94 = function (
            value: DeleteResult_delete_result_94        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.entries_deleted === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      $._encodeSequenceOf<SequenceNumber>(
                                          () => _encode_SequenceNumber,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.entries_deleted, $.BER),
                        /* IF_ABSENT  */ value.delete_result_extensions ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_MSExtensions,
                                  $.BER
                              )(value.delete_result_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DeleteResult_delete_result_94(value, elGetter);
}


/* eslint-enable */
