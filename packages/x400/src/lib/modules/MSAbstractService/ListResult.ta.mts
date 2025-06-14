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
    EntryInformation,
    _decode_EntryInformation,
    _encode_EntryInformation,
} from '../MSAbstractService/EntryInformation.ta.mjs';
import {
    MSExtensions,
    _decode_MSExtensions,
    _encode_MSExtensions,
} from '../MSAbstractService/MSExtensions.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ListResult */
/**
 * @summary ListResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ListResult ::= SET {
 *   next                    [0]  SequenceNumber OPTIONAL,
 *   requested
 *     [1]  SEQUENCE SIZE (1..ub-messages) OF EntryInformation OPTIONAL--omitted if none found--,
 *   -- 1994 extension
 *   list-result-extensions  [2]  MSExtensions OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ListResult {
    constructor(
        /**
         * @summary `next`.
         * @public
         * @readonly
         */
        readonly next: OPTIONAL<SequenceNumber>,
        /**
         * @summary `requested`.
         * @public
         * @readonly
         */
        readonly requested: OPTIONAL<EntryInformation[]>,
        /**
         * @summary `list_result_extensions`.
         * @public
         * @readonly
         */
        readonly list_result_extensions: OPTIONAL<MSExtensions>
    ) {}

    /**
     * @summary Restructures an object into a ListResult
     * @description
     *
     * This takes an `object` and converts it to a `ListResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ListResult`.
     * @returns {ListResult}
     */
    public static _from_object(
        _o: { [_K in keyof ListResult]: ListResult[_K] }
    ): ListResult {
        return new ListResult(_o.next, _o.requested, _o.list_result_extensions);
    }
}
/* END_OF_SYMBOL_DEFINITION ListResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ListResult */
/**
 * @summary The Leading Root Component Types of ListResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ListResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'next',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'requested',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'list-result-extensions',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ListResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ListResult */
/**
 * @summary The Trailing Root Component Types of ListResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ListResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ListResult */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ListResult */
/**
 * @summary The Extension Addition Component Types of ListResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ListResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ListResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ListResult */
let _cached_decoder_for_ListResult: $.ASN1Decoder<ListResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ListResult */

/* START_OF_SYMBOL_DEFINITION _decode_ListResult */
/**
 * @summary Decodes an ASN.1 element into a(n) ListResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ListResult} The decoded data structure.
 */
export function _decode_ListResult(el: _Element) {
    if (!_cached_decoder_for_ListResult) {
        _cached_decoder_for_ListResult = function (el: _Element): ListResult {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let next: OPTIONAL<SequenceNumber>;
            let requested: OPTIONAL<EntryInformation[]>;
            let list_result_extensions: OPTIONAL<MSExtensions>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                next: (_el: _Element): void => {
                    next = $._decode_explicit<SequenceNumber>(
                        () => _decode_SequenceNumber
                    )(_el);
                },
                requested: (_el: _Element): void => {
                    requested = $._decode_explicit<EntryInformation[]>(() =>
                        $._decodeSequenceOf<EntryInformation>(
                            () => _decode_EntryInformation
                        )
                    )(_el);
                },
                'list-result-extensions': (_el: _Element): void => {
                    list_result_extensions = $._decode_explicit<MSExtensions>(
                        () => _decode_MSExtensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ListResult,
                _extension_additions_list_spec_for_ListResult,
                _root_component_type_list_2_spec_for_ListResult,
                undefined
            );
            return new ListResult /* SET_CONSTRUCTOR_CALL */(
                next,
                requested,
                list_result_extensions
            );
        };
    }
    return _cached_decoder_for_ListResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ListResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ListResult */
let _cached_encoder_for_ListResult: $.ASN1Encoder<ListResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ListResult */

/* START_OF_SYMBOL_DEFINITION _encode_ListResult */
/**
 * @summary Encodes a(n) ListResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListResult, encoded as an ASN.1 Element.
 */
export function _encode_ListResult(
    value: ListResult,
    elGetter: $.ASN1Encoder<ListResult>
) {
    if (!_cached_encoder_for_ListResult) {
        _cached_encoder_for_ListResult = function (
            value: ListResult        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.next === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_SequenceNumber,
                                  $.BER
                              )(value.next, $.BER),
                        /* IF_ABSENT  */ value.requested === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSequenceOf<EntryInformation>(
                                          () => _encode_EntryInformation,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.requested, $.BER),
                        /* IF_ABSENT  */ value.list_result_extensions ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_MSExtensions,
                                  $.BER
                              )(value.list_result_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ListResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ListResult */

/* eslint-enable */
