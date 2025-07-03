/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "@wildboar/x500/AuthenticationFramework";
import {
    ResponseData,
    _decode_ResponseData,
    _encode_ResponseData,
} from "../OCSP-2013-08/ResponseData.ta.mjs";

/**
 * @summary BasicOCSPResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BasicOCSPResponse ::= SEQUENCE {
 * tbsResponseData      ResponseData,
 * signatureAlgorithm   AlgorithmIdentifier{SIGNATURE-ALGORITHM,
 *                         {sa-dsaWithSHA1 | sa-rsaWithSHA1 |
 *                                 sa-rsaWithMD5 | sa-rsaWithMD2, ...}},
 * signature            BIT STRING,
 * certs            [0] EXPLICIT SEQUENCE OF Certificate OPTIONAL }
 * ```
 *
 */
export class BasicOCSPResponse {
    constructor(
        /**
         * @summary `tbsResponseData`.
         * @public
         * @readonly
         */
        readonly tbsResponseData: ResponseData,
        /**
         * @summary `signatureAlgorithm`.
         * @public
         * @readonly
         */
        readonly signatureAlgorithm: AlgorithmIdentifier,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: BIT_STRING,
        /**
         * @summary `certs`.
         * @public
         * @readonly
         */
        readonly certs: OPTIONAL<Certificate[]>
    ) {}

    /**
     * @summary Restructures an object into a BasicOCSPResponse
     * @description
     *
     * This takes an `object` and converts it to a `BasicOCSPResponse`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BasicOCSPResponse`.
     * @returns {BasicOCSPResponse}
     */
    public static _from_object(
        _o: { [_K in keyof BasicOCSPResponse]: BasicOCSPResponse[_K] }
    ): BasicOCSPResponse {
        return new BasicOCSPResponse(
            _o.tbsResponseData,
            _o.signatureAlgorithm,
            _o.signature,
            _o.certs
        );
    }
}

/**
 * @summary The Leading Root Component Types of BasicOCSPResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BasicOCSPResponse: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "tbsResponseData",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "signatureAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "signature",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
    new $.ComponentSpec(
        "certs",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of BasicOCSPResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BasicOCSPResponse: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of BasicOCSPResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BasicOCSPResponse: $.ComponentSpec[] = [];

let _cached_decoder_for_BasicOCSPResponse: $.ASN1Decoder<BasicOCSPResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BasicOCSPResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BasicOCSPResponse} The decoded data structure.
 */
export function _decode_BasicOCSPResponse(el: _Element): BasicOCSPResponse {
    if (!_cached_decoder_for_BasicOCSPResponse) {
        _cached_decoder_for_BasicOCSPResponse = function (
            el: _Element
        ): BasicOCSPResponse {
            let tbsResponseData!: ResponseData;
            let signatureAlgorithm!: AlgorithmIdentifier;
            let signature!: BIT_STRING;
            let certs: OPTIONAL<Certificate[]>;
            const callbacks: $.DecodingMap = {
                tbsResponseData: (_el: _Element): void => {
                    tbsResponseData = _decode_ResponseData(_el);
                },
                signatureAlgorithm: (_el: _Element): void => {
                    signatureAlgorithm = _decode_AlgorithmIdentifier(_el);
                },
                signature: (_el: _Element): void => {
                    signature = $._decodeBitString(_el);
                },
                certs: (_el: _Element): void => {
                    certs = $._decode_explicit<Certificate[]>(() =>
                        $._decodeSequenceOf<Certificate>(
                            () => _decode_Certificate
                        )
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BasicOCSPResponse,
                _extension_additions_list_spec_for_BasicOCSPResponse,
                _root_component_type_list_2_spec_for_BasicOCSPResponse,
                undefined
            );
            return new BasicOCSPResponse(
                tbsResponseData,
                signatureAlgorithm,
                signature,
                certs
            );
        };
    }
    return _cached_decoder_for_BasicOCSPResponse(el);
}

let _cached_encoder_for_BasicOCSPResponse: $.ASN1Encoder<BasicOCSPResponse> | null = null;

/**
 * @summary Encodes a(n) BasicOCSPResponse into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BasicOCSPResponse, encoded as an ASN.1 Element.
 */
export function _encode_BasicOCSPResponse(
    value: BasicOCSPResponse,
    elGetter: $.ASN1Encoder<BasicOCSPResponse>
): _Element {
    if (!_cached_encoder_for_BasicOCSPResponse) {
        _cached_encoder_for_BasicOCSPResponse = function (
            value: BasicOCSPResponse        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ResponseData(
                            value.tbsResponseData,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.signatureAlgorithm,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeBitString(
                            value.signature,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.certs === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      $._encodeSequenceOf<Certificate>(
                                          () => _encode_Certificate,
                                          $.DER
                                      ),
                                  $.DER
                              )(value.certs, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_BasicOCSPResponse(value, elGetter);
}

/* eslint-enable */
