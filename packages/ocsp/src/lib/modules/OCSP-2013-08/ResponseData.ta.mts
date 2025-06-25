/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
} from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/Extensions.ta.mjs";
import {
    ResponderID,
    _decode_ResponderID,
    _encode_ResponderID,
} from "../OCSP-2013-08/ResponderID.ta.mjs";
import {
    SingleResponse,
    _decode_SingleResponse,
    _encode_SingleResponse,
} from "../OCSP-2013-08/SingleResponse.ta.mjs";
import {
    v1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    Version,
    _decode_Version,
    _encode_Version,
} from "../OCSP-2013-08/Version.ta.mjs";


/**
 * @summary ResponseData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseData ::= SEQUENCE {
 * version              [0] EXPLICIT Version DEFAULT v1,
 * responderID              ResponderID,
 * producedAt               GeneralizedTime,
 * responses                SEQUENCE OF SingleResponse,
 * responseExtensions   [1] EXPLICIT Extensions
 *                             {{re-ocsp-nonce, ...,
 *                                 re-ocsp-extended-revoke}} OPTIONAL }
 * ```
 *
 * @class
 */
export class ResponseData {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<Version>,
        /**
         * @summary `responderID`.
         * @public
         * @readonly
         */
        readonly responderID: ResponderID,
        /**
         * @summary `producedAt`.
         * @public
         * @readonly
         */
        readonly producedAt: GeneralizedTime,
        /**
         * @summary `responses`.
         * @public
         * @readonly
         */
        readonly responses: SingleResponse[],
        /**
         * @summary `responseExtensions`.
         * @public
         * @readonly
         */
        readonly responseExtensions: OPTIONAL<Extensions>
    ) {}

    /**
     * @summary Restructures an object into a ResponseData
     * @description
     *
     * This takes an `object` and converts it to a `ResponseData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResponseData`.
     * @returns {ResponseData}
     */
    public static _from_object(
        _o: { [_K in keyof ResponseData]: ResponseData[_K] }
    ): ResponseData {
        return new ResponseData(
            _o.version,
            _o.responderID,
            _o.producedAt,
            _o.responses,
            _o.responseExtensions
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return v1;
    }
}


/**
 * @summary The Leading Root Component Types of ResponseData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ResponseData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "responderID",
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        "producedAt",
        false,
        $.hasTag(_TagClass.universal, 24)
    ),
    new $.ComponentSpec(
        "responses",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "responseExtensions",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of ResponseData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ResponseData: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ResponseData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ResponseData: $.ComponentSpec[] = [];


let _cached_decoder_for_ResponseData: $.ASN1Decoder<ResponseData> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ResponseData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResponseData} The decoded data structure.
 */
export function _decode_ResponseData(el: _Element): ResponseData {
    if (!_cached_decoder_for_ResponseData) {
        _cached_decoder_for_ResponseData = function (
            el: _Element
        ): ResponseData {
            let version: OPTIONAL<Version> =
                ResponseData._default_value_for_version;
            let responderID!: ResponderID;
            let producedAt!: GeneralizedTime;
            let responses!: SingleResponse[];
            let responseExtensions: OPTIONAL<Extensions>;
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = $._decode_explicit<Version>(
                        () => _decode_Version
                    )(_el);
                },
                responderID: (_el: _Element): void => {
                    responderID = _decode_ResponderID(_el);
                },
                producedAt: (_el: _Element): void => {
                    producedAt = $._decodeGeneralizedTime(_el);
                },
                responses: (_el: _Element): void => {
                    responses = $._decodeSequenceOf<SingleResponse>(
                        () => _decode_SingleResponse
                    )(_el);
                },
                responseExtensions: (_el: _Element): void => {
                    responseExtensions = $._decode_explicit<Extensions>(
                        () => _decode_Extensions
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ResponseData,
                _extension_additions_list_spec_for_ResponseData,
                _root_component_type_list_2_spec_for_ResponseData,
                undefined
            );
            return new ResponseData(
                version,
                responderID,
                producedAt,
                responses,
                responseExtensions
            );
        };
    }
    return _cached_decoder_for_ResponseData(el);
}


let _cached_encoder_for_ResponseData: $.ASN1Encoder<ResponseData> | null = null;


/**
 * @summary Encodes a(n) ResponseData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponseData, encoded as an ASN.1 Element.
 */
export function _encode_ResponseData(
    value: ResponseData,
    elGetter: $.ASN1Encoder<ResponseData>
): _Element {
    if (!_cached_encoder_for_ResponseData) {
        _cached_encoder_for_ResponseData = function (
            value: ResponseData        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.version === undefined ||
                        $.deepEq(
                            value.version,
                            ResponseData._default_value_for_version
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Version,
                                  $.DER
                              )(value.version, $.DER),
                        /* REQUIRED   */ _encode_ResponderID(
                            value.responderID,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeGeneralizedTime(
                            value.producedAt,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeSequenceOf<SingleResponse>(
                            () => _encode_SingleResponse,
                            $.DER
                        )(value.responses, $.DER),
                        /* IF_ABSENT  */ value.responseExtensions === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Extensions,
                                  $.DER
                              )(value.responseExtensions, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_ResponseData(value, elGetter);
}


/* eslint-enable */
