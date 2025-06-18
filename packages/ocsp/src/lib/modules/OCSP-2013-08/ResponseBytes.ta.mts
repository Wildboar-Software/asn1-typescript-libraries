/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary ResponseBytes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseBytes ::= SEQUENCE {
 * responseType        RESPONSE.
 *                         &id ({ResponseSet}),
 * response            OCTET STRING (CONTAINING RESPONSE.
 *                         &Type({ResponseSet}{@responseType}))}
 * ```
 *
 * @class
 */
export class ResponseBytes {
    constructor(
        /**
         * @summary `responseType`.
         * @public
         * @readonly
         */
        readonly responseType: OBJECT_IDENTIFIER,
        /**
         * @summary `response`.
         * @public
         * @readonly
         */
        readonly response: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a ResponseBytes
     * @description
     *
     * This takes an `object` and converts it to a `ResponseBytes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResponseBytes`.
     * @returns {ResponseBytes}
     */
    public static _from_object(
        _o: { [_K in keyof ResponseBytes]: ResponseBytes[_K] }
    ): ResponseBytes {
        return new ResponseBytes(_o.responseType, _o.response);
    }
}


/**
 * @summary The Leading Root Component Types of ResponseBytes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ResponseBytes: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "responseType",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "response",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];


/**
 * @summary The Trailing Root Component Types of ResponseBytes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ResponseBytes: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ResponseBytes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ResponseBytes: $.ComponentSpec[] = [];


let _cached_decoder_for_ResponseBytes: $.ASN1Decoder<ResponseBytes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ResponseBytes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResponseBytes} The decoded data structure.
 */
export function _decode_ResponseBytes(el: _Element) {
    if (!_cached_decoder_for_ResponseBytes) {
        _cached_decoder_for_ResponseBytes = function (
            el: _Element
        ): ResponseBytes {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ResponseBytes contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "responseType";
            sequence[1].name = "response";
            let responseType!: OBJECT_IDENTIFIER;
            let response!: OCTET_STRING;
            responseType = $._decodeObjectIdentifier(sequence[0]);
            response = $._decodeOctetString(sequence[1]);
            return new ResponseBytes(responseType, response);
        };
    }
    return _cached_decoder_for_ResponseBytes(el);
}


let _cached_encoder_for_ResponseBytes: $.ASN1Encoder<ResponseBytes> | null = null;


/**
 * @summary Encodes a(n) ResponseBytes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponseBytes, encoded as an ASN.1 Element.
 */
export function _encode_ResponseBytes(
    value: ResponseBytes,
    elGetter: $.ASN1Encoder<ResponseBytes>
) {
    if (!_cached_encoder_for_ResponseBytes) {
        _cached_encoder_for_ResponseBytes = function (
            value: ResponseBytes        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.responseType,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeOctetString(
                            value.response,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_ResponseBytes(value, elGetter);
}


/* eslint-enable */
