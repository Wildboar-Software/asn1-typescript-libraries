/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    OCSPResponseStatus,
    _decode_OCSPResponseStatus,
    _encode_OCSPResponseStatus,
    _enum_for_OCSPResponseStatus,
} from "../OCSP-2013-08/OCSPResponseStatus.ta.mjs";
import {
    ResponseBytes,
    _decode_ResponseBytes,
    _encode_ResponseBytes,
} from "../OCSP-2013-08/ResponseBytes.ta.mjs";

/**
 * @summary OCSPResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OCSPResponse ::= SEQUENCE {
 * responseStatus         OCSPResponseStatus,
 * responseBytes          [0] EXPLICIT ResponseBytes OPTIONAL }
 * ```
 *
 * @class
 */
export class OCSPResponse {
    constructor(
        /**
         * @summary `responseStatus`.
         * @public
         * @readonly
         */
        readonly responseStatus: OCSPResponseStatus,
        /**
         * @summary `responseBytes`.
         * @public
         * @readonly
         */
        readonly responseBytes: OPTIONAL<ResponseBytes>
    ) {}

    /**
     * @summary Restructures an object into a OCSPResponse
     * @description
     *
     * This takes an `object` and converts it to a `OCSPResponse`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OCSPResponse`.
     * @returns {OCSPResponse}
     */
    public static _from_object(
        _o: { [_K in keyof OCSPResponse]: OCSPResponse[_K] }
    ): OCSPResponse {
        return new OCSPResponse(_o.responseStatus, _o.responseBytes);
    }

    /**
     * @summary The enum used as the type of the component `responseStatus`
     * @public
     * @static
     */

    public static _enum_for_responseStatus = _enum_for_OCSPResponseStatus;
}


/**
 * @summary The Leading Root Component Types of OCSPResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OCSPResponse: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "responseStatus",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "responseBytes",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];


/**
 * @summary The Trailing Root Component Types of OCSPResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OCSPResponse: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of OCSPResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OCSPResponse: $.ComponentSpec[] = [];


let _cached_decoder_for_OCSPResponse: $.ASN1Decoder<OCSPResponse> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) OCSPResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OCSPResponse} The decoded data structure.
 */
export function _decode_OCSPResponse(el: _Element) {
    if (!_cached_decoder_for_OCSPResponse) {
        _cached_decoder_for_OCSPResponse = function (
            el: _Element
        ): OCSPResponse {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let responseStatus!: OCSPResponseStatus;
            let responseBytes: OPTIONAL<ResponseBytes>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                responseStatus: (_el: _Element): void => {
                    responseStatus = _decode_OCSPResponseStatus(_el);
                },
                responseBytes: (_el: _Element): void => {
                    responseBytes = $._decode_explicit<ResponseBytes>(
                        () => _decode_ResponseBytes
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OCSPResponse,
                _extension_additions_list_spec_for_OCSPResponse,
                _root_component_type_list_2_spec_for_OCSPResponse,
                undefined
            );
            return new OCSPResponse(
                /* SEQUENCE_CONSTRUCTOR_CALL */ responseStatus,
                responseBytes
            );
        };
    }
    return _cached_decoder_for_OCSPResponse(el);
}


let _cached_encoder_for_OCSPResponse: $.ASN1Encoder<OCSPResponse> | null = null;


/**
 * @summary Encodes a(n) OCSPResponse into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OCSPResponse, encoded as an ASN.1 Element.
 */
export function _encode_OCSPResponse(
    value: OCSPResponse,
    elGetter: $.ASN1Encoder<OCSPResponse>
) {
    if (!_cached_encoder_for_OCSPResponse) {
        _cached_encoder_for_OCSPResponse = function (
            value: OCSPResponse        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_OCSPResponseStatus(
                            value.responseStatus,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.responseBytes === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_ResponseBytes,
                                  $.DER
                              )(value.responseBytes, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_OCSPResponse(value, elGetter);
}


/* eslint-enable */
