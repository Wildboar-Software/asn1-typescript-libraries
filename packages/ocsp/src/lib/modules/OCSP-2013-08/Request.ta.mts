/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
} from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/Extensions.ta.mjs";
import {
    CertID,
    _decode_CertID,
    _encode_CertID,
} from "../OCSP-2013-08/CertID.ta.mjs";


/**
 * @summary Request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Request ::= SEQUENCE {
 * reqCert                    CertID,
 * singleRequestExtensions    [0] EXPLICIT Extensions
 *                                     { {re-ocsp-service-locator,
 *                                             ...}} OPTIONAL }
 * ```
 *
 * @class
 */
export class Request {
    constructor(
        /**
         * @summary `reqCert`.
         * @public
         * @readonly
         */
        readonly reqCert: CertID,
        /**
         * @summary `singleRequestExtensions`.
         * @public
         * @readonly
         */
        readonly singleRequestExtensions: OPTIONAL<Extensions>
    ) {}

    /**
     * @summary Restructures an object into a Request
     * @description
     *
     * This takes an `object` and converts it to a `Request`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Request`.
     * @returns {Request}
     */
    public static _from_object(
        _o: { [_K in keyof Request]: Request[_K] }
    ): Request {
        return new Request(_o.reqCert, _o.singleRequestExtensions);
    }
}


/**
 * @summary The Leading Root Component Types of Request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Request: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "reqCert",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "singleRequestExtensions",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
];


/**
 * @summary The Trailing Root Component Types of Request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Request: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Request: $.ComponentSpec[] = [];


let _cached_decoder_for_Request: $.ASN1Decoder<Request> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Request} The decoded data structure.
 */
export function _decode_Request(el: _Element) {
    if (!_cached_decoder_for_Request) {
        _cached_decoder_for_Request = function (el: _Element): Request {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let reqCert!: CertID;
            let singleRequestExtensions: OPTIONAL<Extensions>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                reqCert: (_el: _Element): void => {
                    reqCert = _decode_CertID(_el);
                },
                singleRequestExtensions: (_el: _Element): void => {
                    singleRequestExtensions = $._decode_explicit<Extensions>(
                        () => _decode_Extensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Request,
                _extension_additions_list_spec_for_Request,
                _root_component_type_list_2_spec_for_Request,
                undefined
            );
            return new Request(
                /* SEQUENCE_CONSTRUCTOR_CALL */ reqCert,
                singleRequestExtensions
            );
        };
    }
    return _cached_decoder_for_Request(el);
}


let _cached_encoder_for_Request: $.ASN1Encoder<Request> | null = null;


/**
 * @summary Encodes a(n) Request into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Request, encoded as an ASN.1 Element.
 */
export function _encode_Request(
    value: Request,
    elGetter: $.ASN1Encoder<Request>
) {
    if (!_cached_encoder_for_Request) {
        _cached_encoder_for_Request = function (
            value: Request        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CertID(value.reqCert, $.DER),
                        /* IF_ABSENT  */ value.singleRequestExtensions ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Extensions,
                                  $.DER
                              )(value.singleRequestExtensions, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_Request(value, elGetter);
}


/* eslint-enable */
