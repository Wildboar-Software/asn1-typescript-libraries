/* eslint-disable */
import {
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
    RefusedArgument,
    _decode_RefusedArgument,
    _encode_RefusedArgument,
} from '../MTSAbstractService/RefusedArgument.ta.mjs';
import {
    ExtensionType,
    _decode_ExtensionType,
    _encode_ExtensionType,
} from "./ExtensionType.ta.mjs";

/**
 * @summary RefusedOperation_refused_argument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RefusedOperation-refused-argument ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type RefusedOperation_refused_argument =
    | { built_in_argument: RefusedArgument } /* CHOICE_ALT_ROOT */
    | { refused_extension: ExtensionType } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RefusedOperation_refused_argument: $.ASN1Decoder<RefusedOperation_refused_argument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RefusedOperation_refused_argument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RefusedOperation_refused_argument} The decoded data structure.
 */
export function _decode_RefusedOperation_refused_argument(el: _Element): RefusedOperation_refused_argument {
    if (!_cached_decoder_for_RefusedOperation_refused_argument) {
        _cached_decoder_for_RefusedOperation_refused_argument = $._decode_inextensible_choice<RefusedOperation_refused_argument>(
            {
                'CONTEXT 1': [
                    'built_in_argument',
                    $._decode_implicit<RefusedArgument>(
                        () => _decode_RefusedArgument
                    ),
                ],
                '*': ['refused_extension', _decode_ExtensionType],
            }
        );
    }
    return _cached_decoder_for_RefusedOperation_refused_argument(el);
}

let _cached_encoder_for_RefusedOperation_refused_argument: $.ASN1Encoder<RefusedOperation_refused_argument> | null = null;

/**
 * @summary Encodes a(n) RefusedOperation_refused_argument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RefusedOperation_refused_argument, encoded as an ASN.1 Element.
 */
export function _encode_RefusedOperation_refused_argument(
    value: RefusedOperation_refused_argument,
    elGetter: $.ASN1Encoder<RefusedOperation_refused_argument>
): _Element {
    if (!_cached_encoder_for_RefusedOperation_refused_argument) {
        _cached_encoder_for_RefusedOperation_refused_argument = $._encode_choice<RefusedOperation_refused_argument>(
            {
                built_in_argument: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_RefusedArgument,
                    $.BER
                ),
                refused_extension: _encode_ExtensionType,
            },
            $.BER
        );
    }
    return _cached_encoder_for_RefusedOperation_refused_argument(
        value,
        elGetter
    );
}


/* eslint-enable */
