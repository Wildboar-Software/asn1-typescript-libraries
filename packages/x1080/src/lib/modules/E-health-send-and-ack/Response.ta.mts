/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    EncryptionOptions,
    _decode_EncryptionOptions,
    _encode_EncryptionOptions,
} from '../E-health-setup/EncryptionOptions.ta.mjs';
import {
    IntegrityOptions,
    _decode_IntegrityOptions,
    _encode_IntegrityOptions,
} from '../E-health-setup/IntegrityOptions.ta.mjs';

/**
 * @summary Response
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Response ::= SEQUENCE {
 *   encryptionOptions  EncryptionOptions,
 *   integrityOptions   IntegrityOptions,
 *   content
 *     OCTET STRING
 *       (CONSTRAINED BY {-- encoding of an Ack value by the current encoding rules ---- included in a CMS ContentInfo sequence for encryption and/or --
 *
 *          -- integrity if needed -- })
 * }
 * ```
 *
 * @class
 */
export class Response {
    constructor(
        /**
         * @summary `encryptionOptions`.
         * @public
         * @readonly
         */
        readonly encryptionOptions: EncryptionOptions,
        /**
         * @summary `integrityOptions`.
         * @public
         * @readonly
         */
        readonly integrityOptions: IntegrityOptions,
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a Response
     * @description
     *
     * This takes an `object` and converts it to a `Response`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Response`.
     * @returns {Response}
     */
    public static _from_object(
        _o: { [_K in keyof Response]: Response[_K] }
    ): Response {
        return new Response(
            _o.encryptionOptions,
            _o.integrityOptions,
            _o.content
        );
    }
}


/**
 * @summary The Leading Root Component Types of Response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Response: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'encryptionOptions',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'integrityOptions',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'content',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];


/**
 * @summary The Trailing Root Component Types of Response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Response: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Response: $.ComponentSpec[] = [];


let _cached_decoder_for_Response: $.ASN1Decoder<Response> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Response
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Response} The decoded data structure.
 */
export function _decode_Response(el: _Element) {
    if (!_cached_decoder_for_Response) {
        _cached_decoder_for_Response = function (el: _Element): Response {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'Response contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'encryptionOptions';
            sequence[1].name = 'integrityOptions';
            sequence[2].name = 'content';
            let encryptionOptions!: EncryptionOptions;
            let integrityOptions!: IntegrityOptions;
            let content!: OCTET_STRING;
            encryptionOptions = _decode_EncryptionOptions(sequence[0]);
            integrityOptions = _decode_IntegrityOptions(sequence[1]);
            content = $._decodeOctetString(sequence[2]);
            return new Response(encryptionOptions, integrityOptions, content);
        };
    }
    return _cached_decoder_for_Response(el);
}


let _cached_encoder_for_Response: $.ASN1Encoder<Response> | null = null;


/**
 * @summary Encodes a(n) Response into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Response, encoded as an ASN.1 Element.
 */
export function _encode_Response(
    value: Response,
    elGetter: $.ASN1Encoder<Response>
) {
    if (!_cached_encoder_for_Response) {
        _cached_encoder_for_Response = function (
            value: Response        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_EncryptionOptions(
                            value.encryptionOptions,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_IntegrityOptions(
                            value.integrityOptions,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeOctetString(
                            value.content,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Response(value, elGetter);
}


/* eslint-enable */
