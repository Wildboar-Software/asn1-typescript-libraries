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
/* START_OF_SYMBOL_DEFINITION ModifyResult */
/**
 * @summary ModifyResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyResult ::= SET {
 *   entries-modified
 *     [0]  SEQUENCE SIZE (1..ub-messages) OF SequenceNumber OPTIONAL,
 *   modify-result-extensions  [1]  MSExtensions OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ModifyResult {
    constructor(
        /**
         * @summary `entries_modified`.
         * @public
         * @readonly
         */
        readonly entries_modified: OPTIONAL<SequenceNumber[]>,
        /**
         * @summary `modify_result_extensions`.
         * @public
         * @readonly
         */
        readonly modify_result_extensions: OPTIONAL<MSExtensions>
    ) {}

    /**
     * @summary Restructures an object into a ModifyResult
     * @description
     *
     * This takes an `object` and converts it to a `ModifyResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModifyResult`.
     * @returns {ModifyResult}
     */
    public static _from_object(
        _o: { [_K in keyof ModifyResult]: ModifyResult[_K] }
    ): ModifyResult {
        return new ModifyResult(
            _o.entries_modified,
            _o.modify_result_extensions
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ModifyResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ModifyResult */
/**
 * @summary The Leading Root Component Types of ModifyResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ModifyResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'entries-modified',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'modify-result-extensions',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ModifyResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ModifyResult */
/**
 * @summary The Trailing Root Component Types of ModifyResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ModifyResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ModifyResult */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ModifyResult */
/**
 * @summary The Extension Addition Component Types of ModifyResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ModifyResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ModifyResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyResult */
let _cached_decoder_for_ModifyResult: $.ASN1Decoder<ModifyResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyResult */

/* START_OF_SYMBOL_DEFINITION _decode_ModifyResult */
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyResult} The decoded data structure.
 */
export function _decode_ModifyResult(el: _Element) {
    if (!_cached_decoder_for_ModifyResult) {
        _cached_decoder_for_ModifyResult = function (
            el: _Element
        ): ModifyResult {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let entries_modified: OPTIONAL<SequenceNumber[]>;
            let modify_result_extensions: OPTIONAL<MSExtensions>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'entries-modified': (_el: _Element): void => {
                    entries_modified = $._decode_explicit<SequenceNumber[]>(
                        () =>
                            $._decodeSequenceOf<SequenceNumber>(
                                () => _decode_SequenceNumber
                            )
                    )(_el);
                },
                'modify-result-extensions': (_el: _Element): void => {
                    modify_result_extensions = $._decode_explicit<MSExtensions>(
                        () => _decode_MSExtensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ModifyResult,
                _extension_additions_list_spec_for_ModifyResult,
                _root_component_type_list_2_spec_for_ModifyResult,
                undefined
            );
            return new ModifyResult /* SET_CONSTRUCTOR_CALL */(
                entries_modified,
                modify_result_extensions
            );
        };
    }
    return _cached_decoder_for_ModifyResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ModifyResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyResult */
let _cached_encoder_for_ModifyResult: $.ASN1Encoder<ModifyResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyResult */

/* START_OF_SYMBOL_DEFINITION _encode_ModifyResult */
/**
 * @summary Encodes a(n) ModifyResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyResult, encoded as an ASN.1 Element.
 */
export function _encode_ModifyResult(
    value: ModifyResult,
    elGetter: $.ASN1Encoder<ModifyResult>
) {
    if (!_cached_encoder_for_ModifyResult) {
        _cached_encoder_for_ModifyResult = function (
            value: ModifyResult        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.entries_modified === undefined
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
                              )(value.entries_modified, $.BER),
                        /* IF_ABSENT  */ value.modify_result_extensions ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_MSExtensions,
                                  $.BER
                              )(value.modify_result_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ModifyResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ModifyResult */

/* eslint-enable */
