/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Release_response_reason,
    _decode_Release_response_reason,
    _encode_Release_response_reason,
} from "../OSIProtocolSpecification/Release-response-reason.ta.mjs";
/**
 * @summary TheOsiUnbindRes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TheOsiUnbindRes ::= [APPLICATION 3] IMPLICIT SEQUENCE {
 *   reason  [0] IMPLICIT Release-response-reason OPTIONAL }
 * ```
 *
 */
export class TheOsiUnbindRes {
    constructor(
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: OPTIONAL<Release_response_reason>
    ) {}

    /**
     * @summary Restructures an object into a TheOsiUnbindRes
     * @description
     *
     * This takes an `object` and converts it to a `TheOsiUnbindRes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TheOsiUnbindRes`.
     * @returns {TheOsiUnbindRes}
     */
    public static _from_object(
        _o: { [_K in keyof TheOsiUnbindRes]: TheOsiUnbindRes[_K] }
    ): TheOsiUnbindRes {
        return new TheOsiUnbindRes(_o.reason);
    }
}

/**
 * @summary The Leading Root Component Types of TheOsiUnbindRes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TheOsiUnbindRes: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "reason",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of TheOsiUnbindRes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TheOsiUnbindRes: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TheOsiUnbindRes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TheOsiUnbindRes: $.ComponentSpec[] = [];

let _cached_decoder_for_TheOsiUnbindRes: $.ASN1Decoder<TheOsiUnbindRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TheOsiUnbindRes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TheOsiUnbindRes} The decoded data structure.
 */
export function _decode_TheOsiUnbindRes(el: _Element): TheOsiUnbindRes {
    if (!_cached_decoder_for_TheOsiUnbindRes) {
        _cached_decoder_for_TheOsiUnbindRes = $._decode_implicit<TheOsiUnbindRes>(
            () =>
                function (el: _Element): TheOsiUnbindRes {
                    let reason: OPTIONAL<Release_response_reason>;
                    const callbacks: $.DecodingMap = {
                        reason: (_el: _Element): void => {
                            reason = $._decode_implicit<Release_response_reason>(
                                () => _decode_Release_response_reason
                            )(_el);
                        },
                    };
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_TheOsiUnbindRes,
                        _extension_additions_list_spec_for_TheOsiUnbindRes,
                        _root_component_type_list_2_spec_for_TheOsiUnbindRes,
                        undefined
                    );
                    return new TheOsiUnbindRes(
                        reason
                    );
                }
        );
    }
    return _cached_decoder_for_TheOsiUnbindRes(el);
}

let _cached_encoder_for_TheOsiUnbindRes: $.ASN1Encoder<TheOsiUnbindRes> | null = null;

/**
 * @summary Encodes a(n) TheOsiUnbindRes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TheOsiUnbindRes, encoded as an ASN.1 Element.
 */
export function _encode_TheOsiUnbindRes(
    value: TheOsiUnbindRes,
    elGetter: $.ASN1Encoder<TheOsiUnbindRes>
): _Element {
    if (!_cached_encoder_for_TheOsiUnbindRes) {
        _cached_encoder_for_TheOsiUnbindRes = $._encode_implicit(
            _TagClass.application,
            3,
            () =>
                function (
                    value: TheOsiUnbindRes                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* IF_ABSENT  */ value.reason === undefined
                                    ? undefined
                                    : $._encode_implicit(
                                          _TagClass.context,
                                          0,
                                          () => _encode_Release_response_reason,
                                          $.DER
                                      )(value.reason, $.DER),
                            ])
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.DER
                    );
                },
            $.DER
        );
    }
    return _cached_encoder_for_TheOsiUnbindRes(value, elGetter);
}


/* eslint-enable */
