/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "@wildboar/pki-stub";
import {
    Request,
    _decode_Request,
    _encode_Request,
} from "../OCSP-2013-08/Request.ta.mjs";
import {
    v1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    Version,
    _decode_Version,
    _encode_Version,
} from "../OCSP-2013-08/Version.ta.mjs";


/**
 * @summary TBSRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSRequest ::= SEQUENCE {
 * version             [0] EXPLICIT Version DEFAULT v1,
 * requestorName       [1] EXPLICIT GeneralName OPTIONAL,
 * requestList             SEQUENCE OF Request,
 * requestExtensions   [2] EXPLICIT Extensions {{re-ocsp-nonce |
 *                     re-ocsp-response, ...,
 *                     re-ocsp-preferred-signature-algorithms}} OPTIONAL }
 * ```
 *
 */
export class TBSRequest {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<Version>,
        /**
         * @summary `requestorName`.
         * @public
         * @readonly
         */
        readonly requestorName: OPTIONAL<GeneralName>,
        /**
         * @summary `requestList`.
         * @public
         * @readonly
         */
        readonly requestList: Request[],
        /**
         * @summary `requestExtensions`.
         * @public
         * @readonly
         */
        readonly requestExtensions: OPTIONAL<Extensions>
    ) {}

    /**
     * @summary Restructures an object into a TBSRequest
     * @description
     *
     * This takes an `object` and converts it to a `TBSRequest`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBSRequest`.
     * @returns {TBSRequest}
     */
    public static _from_object(
        _o: { [_K in keyof TBSRequest]: TBSRequest[_K] }
    ): TBSRequest {
        return new TBSRequest(
            _o.version,
            _o.requestorName,
            _o.requestList,
            _o.requestExtensions
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
 * @summary The Leading Root Component Types of TBSRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TBSRequest: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "requestorName",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "requestList",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "requestExtensions",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of TBSRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TBSRequest: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of TBSRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TBSRequest: $.ComponentSpec[] = [];


let _cached_decoder_for_TBSRequest: $.ASN1Decoder<TBSRequest> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TBSRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSRequest} The decoded data structure.
 */
export function _decode_TBSRequest(el: _Element): TBSRequest {
    if (!_cached_decoder_for_TBSRequest) {
        _cached_decoder_for_TBSRequest = function (el: _Element): TBSRequest {
            let version: OPTIONAL<Version> =
                TBSRequest._default_value_for_version;
            let requestorName: OPTIONAL<GeneralName>;
            let requestList!: Request[];
            let requestExtensions: OPTIONAL<Extensions>;
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = $._decode_explicit<Version>(
                        () => _decode_Version
                    )(_el);
                },
                requestorName: (_el: _Element): void => {
                    requestorName = $._decode_explicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                requestList: (_el: _Element): void => {
                    requestList = $._decodeSequenceOf<Request>(
                        () => _decode_Request
                    )(_el);
                },
                requestExtensions: (_el: _Element): void => {
                    requestExtensions = $._decode_explicit<Extensions>(
                        () => _decode_Extensions
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TBSRequest,
                _extension_additions_list_spec_for_TBSRequest,
                _root_component_type_list_2_spec_for_TBSRequest,
                undefined
            );
            return new TBSRequest(
                version,
                requestorName,
                requestList,
                requestExtensions
            );
        };
    }
    return _cached_decoder_for_TBSRequest(el);
}


let _cached_encoder_for_TBSRequest: $.ASN1Encoder<TBSRequest> | null = null;


/**
 * @summary Encodes a(n) TBSRequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSRequest, encoded as an ASN.1 Element.
 */
export function _encode_TBSRequest(
    value: TBSRequest,
    elGetter: $.ASN1Encoder<TBSRequest>
): _Element {
    if (!_cached_encoder_for_TBSRequest) {
        _cached_encoder_for_TBSRequest = function (
            value: TBSRequest        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.version === undefined ||
                        $.deepEq(
                            value.version,
                            TBSRequest._default_value_for_version
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Version,
                                  $.DER
                              )(value.version, $.DER),
                        /* IF_ABSENT  */ value.requestorName === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_GeneralName,
                                  $.DER
                              )(value.requestorName, $.DER),
                        /* REQUIRED   */ $._encodeSequenceOf<Request>(
                            () => _encode_Request,
                            $.DER
                        )(value.requestList, $.DER),
                        /* IF_ABSENT  */ value.requestExtensions === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_Extensions,
                                  $.DER
                              )(value.requestExtensions, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_TBSRequest(value, elGetter);
}


/* eslint-enable */
