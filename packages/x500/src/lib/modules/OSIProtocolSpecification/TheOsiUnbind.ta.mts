/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Release_request_reason,
    _decode_Release_request_reason,
    _encode_Release_request_reason,
} from "../OSIProtocolSpecification/Release-request-reason.ta.mjs";
/**
 * @summary TheOsiUnbind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TheOsiUnbind ::= [APPLICATION 2] IMPLICIT SEQUENCE {
 *   reason  [0] IMPLICIT Release-request-reason OPTIONAL}
 * ```
 *
 */
export class TheOsiUnbind {
    constructor(
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: OPTIONAL<Release_request_reason>
    ) {}

    /**
     * @summary Restructures an object into a TheOsiUnbind
     * @description
     *
     * This takes an `object` and converts it to a `TheOsiUnbind`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TheOsiUnbind`.
     * @returns {TheOsiUnbind}
     */
    public static _from_object(
        _o: { [_K in keyof TheOsiUnbind]: TheOsiUnbind[_K] }
    ): TheOsiUnbind {
        return new TheOsiUnbind(_o.reason);
    }
}

/**
 * @summary The Leading Root Component Types of TheOsiUnbind
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TheOsiUnbind: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "reason",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of TheOsiUnbind
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TheOsiUnbind: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TheOsiUnbind
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TheOsiUnbind: $.ComponentSpec[] = [];

let _cached_decoder_for_TheOsiUnbind: $.ASN1Decoder<TheOsiUnbind> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TheOsiUnbind
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TheOsiUnbind} The decoded data structure.
 */
export function _decode_TheOsiUnbind(el: _Element): TheOsiUnbind {
    if (!_cached_decoder_for_TheOsiUnbind) {
        _cached_decoder_for_TheOsiUnbind = $._decode_implicit<TheOsiUnbind>(
            () =>
                function (el: _Element): TheOsiUnbind {
                    let reason: OPTIONAL<Release_request_reason>;
                    const callbacks: $.DecodingMap = {
                        reason: (_el: _Element): void => {
                            reason = $._decode_implicit<Release_request_reason>(
                                () => _decode_Release_request_reason
                            )(_el);
                        },
                    };
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_TheOsiUnbind,
                        _extension_additions_list_spec_for_TheOsiUnbind,
                        _root_component_type_list_2_spec_for_TheOsiUnbind,
                        undefined
                    );
                    return new TheOsiUnbind(
                        reason
                    );
                }
        );
    }
    return _cached_decoder_for_TheOsiUnbind(el);
}

let _cached_encoder_for_TheOsiUnbind: $.ASN1Encoder<TheOsiUnbind> | null = null;

/**
 * @summary Encodes a(n) TheOsiUnbind into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TheOsiUnbind, encoded as an ASN.1 Element.
 */
export function _encode_TheOsiUnbind(
    value: TheOsiUnbind,
    elGetter: $.ASN1Encoder<TheOsiUnbind>
): _Element {
    if (!_cached_encoder_for_TheOsiUnbind) {
        _cached_encoder_for_TheOsiUnbind = $._encode_implicit(
            _TagClass.application,
            2,
            () =>
                function (
                    value: TheOsiUnbind                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* IF_ABSENT  */ value.reason === undefined
                                    ? undefined
                                    : $._encode_implicit(
                                          _TagClass.context,
                                          0,
                                          () => _encode_Release_request_reason,
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
    return _cached_encoder_for_TheOsiUnbind(value, elGetter);
}


/* eslint-enable */
