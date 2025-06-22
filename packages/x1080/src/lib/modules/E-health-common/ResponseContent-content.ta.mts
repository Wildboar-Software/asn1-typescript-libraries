/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    SessionType,
    _decode_SessionType,
    _encode_SessionType,
} from "./SessionType.ta.mjs";



/**
 * @summary ResponseContent_content
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseContent-content ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ResponseContent_content {
    constructor(
        /**
         * @summary `invokId`.
         * @public
         * @readonly
         */
        readonly invokId: OPTIONAL<INTEGER>,
        /**
         * @summary `sessionType`.
         * @public
         * @readonly
         */
        readonly sessionType: SessionType,
        /**
         * @summary `sessionId`.
         * @public
         * @readonly
         */
        readonly sessionId: INTEGER,
        /**
         * @summary `response`.
         * @public
         * @readonly
         */
        readonly response: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ResponseContent_content
     * @description
     *
     * This takes an `object` and converts it to a `ResponseContent_content`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResponseContent_content`.
     * @returns {ResponseContent_content}
     */
    public static _from_object(
        _o: {
            [_K in keyof ResponseContent_content]: ResponseContent_content[_K];
        }
    ): ResponseContent_content {
        return new ResponseContent_content(
            _o.invokId,
            _o.sessionType,
            _o.sessionId,
            _o.response,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of ResponseContent_content
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ResponseContent_content: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'invokId',
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        'sessionType',
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'sessionId',
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec('response', false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of ResponseContent_content
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ResponseContent_content: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ResponseContent_content
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ResponseContent_content: $.ComponentSpec[] = [];


let _cached_decoder_for_ResponseContent_content: $.ASN1Decoder<ResponseContent_content> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ResponseContent_content
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResponseContent_content} The decoded data structure.
 */
export function _decode_ResponseContent_content(el: _Element) {
    if (!_cached_decoder_for_ResponseContent_content) {
        _cached_decoder_for_ResponseContent_content = function (
            el: _Element
        ): ResponseContent_content {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let invokId: OPTIONAL<INTEGER>;
            let sessionType!: SessionType;
            let sessionId!: INTEGER;
            let response!: _Element;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                invokId: (_el: _Element): void => {
                    invokId = $._decodeInteger(_el);
                },
                sessionType: (_el: _Element): void => {
                    sessionType = _decode_SessionType(_el);
                },
                sessionId: (_el: _Element): void => {
                    sessionId = $._decodeInteger(_el);
                },
                response: (_el: _Element): void => {
                    response = $._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ResponseContent_content,
                _extension_additions_list_spec_for_ResponseContent_content,
                _root_component_type_list_2_spec_for_ResponseContent_content,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ResponseContent_content /* SEQUENCE_CONSTRUCTOR_CALL */(
                invokId,
                sessionType,
                sessionId,
                response,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ResponseContent_content(el);
}


let _cached_encoder_for_ResponseContent_content: $.ASN1Encoder<ResponseContent_content> | null = null;


/**
 * @summary Encodes a(n) ResponseContent_content into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponseContent_content, encoded as an ASN.1 Element.
 */
export function _encode_ResponseContent_content(
    value: ResponseContent_content,
    elGetter: $.ASN1Encoder<ResponseContent_content>
) {
    if (!_cached_encoder_for_ResponseContent_content) {
        _cached_encoder_for_ResponseContent_content = function (
            value: ResponseContent_content        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.invokId === undefined
                                ? undefined
                                : $._encodeInteger(value.invokId, $.BER),
                            /* REQUIRED   */ _encode_SessionType(
                                value.sessionType,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeInteger(
                                value.sessionId,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeAny(
                                value.response,
                                $.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ResponseContent_content(value, elGetter);
}


/* eslint-enable */
