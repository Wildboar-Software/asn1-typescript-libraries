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
    EntryInformation,
    _decode_EntryInformation,
    _encode_EntryInformation,
} from '../MSAbstractService/EntryInformation.ta.mjs';
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
 * @summary FetchResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FetchResult ::= SET {
 *   entry-information
 *     [0]  EntryInformation OPTIONAL --if an entry was selected--,
 *   list
 *     [1]  SEQUENCE SIZE (1..ub-messages) OF SequenceNumber OPTIONAL,
 *   next                     [2]  SequenceNumber OPTIONAL,
 *   -- 1994 extension
 *   fetch-result-extensions  [3]  MSExtensions OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class FetchResult {
    constructor(
        /**
         * @summary `entry_information`.
         * @public
         * @readonly
         */
        readonly entry_information: OPTIONAL<EntryInformation>,
        /**
         * @summary `list`.
         * @public
         * @readonly
         */
        readonly list: OPTIONAL<SequenceNumber[]>,
        /**
         * @summary `next`.
         * @public
         * @readonly
         */
        readonly next: OPTIONAL<SequenceNumber>,
        /**
         * @summary `fetch_result_extensions`.
         * @public
         * @readonly
         */
        readonly fetch_result_extensions: OPTIONAL<MSExtensions>
    ) {}

    /**
     * @summary Restructures an object into a FetchResult
     * @description
     *
     * This takes an `object` and converts it to a `FetchResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FetchResult`.
     * @returns {FetchResult}
     */
    public static _from_object(
        _o: { [_K in keyof FetchResult]: FetchResult[_K] }
    ): FetchResult {
        return new FetchResult(
            _o.entry_information,
            _o.list,
            _o.next,
            _o.fetch_result_extensions
        );
    }
}

/**
 * @summary The Leading Root Component Types of FetchResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FetchResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'entry-information',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'list',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'next',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'fetch-result-extensions',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of FetchResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FetchResult: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of FetchResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FetchResult: $.ComponentSpec[] = [];

let _cached_decoder_for_FetchResult: $.ASN1Decoder<FetchResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FetchResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FetchResult} The decoded data structure.
 */
export function _decode_FetchResult(el: _Element) {
    if (!_cached_decoder_for_FetchResult) {
        _cached_decoder_for_FetchResult = function (el: _Element): FetchResult {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let entry_information: OPTIONAL<EntryInformation>;
            let list: OPTIONAL<SequenceNumber[]>;
            let next: OPTIONAL<SequenceNumber>;
            let fetch_result_extensions: OPTIONAL<MSExtensions>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'entry-information': (_el: _Element): void => {
                    entry_information = $._decode_explicit<EntryInformation>(
                        () => _decode_EntryInformation
                    )(_el);
                },
                list: (_el: _Element): void => {
                    list = $._decode_explicit<SequenceNumber[]>(() =>
                        $._decodeSequenceOf<SequenceNumber>(
                            () => _decode_SequenceNumber
                        )
                    )(_el);
                },
                next: (_el: _Element): void => {
                    next = $._decode_explicit<SequenceNumber>(
                        () => _decode_SequenceNumber
                    )(_el);
                },
                'fetch-result-extensions': (_el: _Element): void => {
                    fetch_result_extensions = $._decode_explicit<MSExtensions>(
                        () => _decode_MSExtensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_FetchResult,
                _extension_additions_list_spec_for_FetchResult,
                _root_component_type_list_2_spec_for_FetchResult,
                undefined
            );
            return new FetchResult /* SET_CONSTRUCTOR_CALL */(
                entry_information,
                list,
                next,
                fetch_result_extensions
            );
        };
    }
    return _cached_decoder_for_FetchResult(el);
}

let _cached_encoder_for_FetchResult: $.ASN1Encoder<FetchResult> | null = null;

/**
 * @summary Encodes a(n) FetchResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FetchResult, encoded as an ASN.1 Element.
 */
export function _encode_FetchResult(
    value: FetchResult,
    elGetter: $.ASN1Encoder<FetchResult>
) {
    if (!_cached_encoder_for_FetchResult) {
        _cached_encoder_for_FetchResult = function (
            value: FetchResult        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.entry_information === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_EntryInformation,
                                  $.BER
                              )(value.entry_information, $.BER),
                        /* IF_ABSENT  */ value.list === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSequenceOf<SequenceNumber>(
                                          () => _encode_SequenceNumber,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.list, $.BER),
                        /* IF_ABSENT  */ value.next === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_SequenceNumber,
                                  $.BER
                              )(value.next, $.BER),
                        /* IF_ABSENT  */ value.fetch_result_extensions ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_MSExtensions,
                                  $.BER
                              )(value.fetch_result_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_FetchResult(value, elGetter);
}


/* eslint-enable */
