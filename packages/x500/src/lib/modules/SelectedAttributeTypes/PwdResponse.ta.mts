/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PwdResponse_error,
    _decode_PwdResponse_error,
    _encode_PwdResponse_error,
    _enum_for_PwdResponse_error,
} from "../SelectedAttributeTypes/PwdResponse-error.ta.mjs";
import {
    PwdResponse_warning,
    _decode_PwdResponse_warning,
    _encode_PwdResponse_warning,
} from "../SelectedAttributeTypes/PwdResponse-warning.ta.mjs";
/**
 * @summary PwdResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PwdResponse ::= SEQUENCE {
 *   warning CHOICE {
 *     timeleft        [0] INTEGER(0..MAX),
 *     graceRemaining  [1] INTEGER(0..MAX),
 *     ... } OPTIONAL,
 *   error ENUMERATED {
 *     passwordExpired  (0),
 *     changeAfterReset (1),
 *     ... } OPTIONAL}
 * ```
 *
 * @class
 */
export class PwdResponse {
    constructor(
        /**
         * @summary `warning`.
         * @public
         * @readonly
         */
        readonly warning: OPTIONAL<PwdResponse_warning>,
        /**
         * @summary `error`.
         * @public
         * @readonly
         */
        readonly error: OPTIONAL<PwdResponse_error>
    ) {}

    /**
     * @summary Restructures an object into a PwdResponse
     * @description
     *
     * This takes an `object` and converts it to a `PwdResponse`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PwdResponse`.
     * @returns {PwdResponse}
     */
    public static _from_object(
        _o: { [_K in keyof PwdResponse]: PwdResponse[_K] }
    ): PwdResponse {
        return new PwdResponse(_o.warning, _o.error);
    }

    /**
     * @summary The enum used as the type of the component `error`
     * @public
     * @static
     */

    public static _enum_for_error = _enum_for_PwdResponse_error;
}

/**
 * @summary The Leading Root Component Types of PwdResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PwdResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("warning", true, $.not($.hasTag(_TagClass.universal, 10))),
    new $.ComponentSpec(
        "error",
        true,
        $.hasTag(_TagClass.universal, 10)
    ),
];

/**
 * @summary The Trailing Root Component Types of PwdResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PwdResponse: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of PwdResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PwdResponse: $.ComponentSpec[] = [];

let _cached_decoder_for_PwdResponse: $.ASN1Decoder<PwdResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PwdResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PwdResponse} The decoded data structure.
 */
export function _decode_PwdResponse(el: _Element) {
    if (!_cached_decoder_for_PwdResponse) {
        _cached_decoder_for_PwdResponse = function (el: _Element): PwdResponse {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let warning: OPTIONAL<PwdResponse_warning>;
            let error: OPTIONAL<PwdResponse_error>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                warning: (_el: _Element): void => {
                    warning = _decode_PwdResponse_warning(_el);
                },
                error: (_el: _Element): void => {
                    error = _decode_PwdResponse_error(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PwdResponse,
                _extension_additions_list_spec_for_PwdResponse,
                _root_component_type_list_2_spec_for_PwdResponse,
                undefined
            );
            return new PwdResponse(
                /* SEQUENCE_CONSTRUCTOR_CALL */ warning,
                error
            );
        };
    }
    return _cached_decoder_for_PwdResponse(el);
}

let _cached_encoder_for_PwdResponse: $.ASN1Encoder<PwdResponse> | null = null;

/**
 * @summary Encodes a(n) PwdResponse into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PwdResponse, encoded as an ASN.1 Element.
 */
export function _encode_PwdResponse(
    value: PwdResponse,
    elGetter: $.ASN1Encoder<PwdResponse>
) {
    if (!_cached_encoder_for_PwdResponse) {
        _cached_encoder_for_PwdResponse = function (
            value: PwdResponse        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.warning === undefined
                            ? undefined
                            : _encode_PwdResponse_warning(value.warning, $.DER),
                        /* IF_ABSENT  */ value.error === undefined
                            ? undefined
                            : _encode_PwdResponse_error(value.error, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_PwdResponse(value, elGetter);
}


/* eslint-enable */
