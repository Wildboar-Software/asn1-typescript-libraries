/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { INTERACTIVE_OPERATION } from '../E-health-common/INTERACTIVE-OPERATION.oca.mjs';
export { INTERACTIVE_OPERATION } from '../E-health-common/INTERACTIVE-OPERATION.oca.mjs';
import {
    SessionType,
    _decode_SessionType,
    _encode_SessionType,
} from "./SessionType.ta.mjs";

/* START_OF_SYMBOL_DEFINITION ErrorContent_content */
/**
 * @summary ErrorContent_content
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ErrorContent-content ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ErrorContent_content {
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
         * @summary `error`.
         * @public
         * @readonly
         */
        readonly error: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ErrorContent_content
     * @description
     *
     * This takes an `object` and converts it to a `ErrorContent_content`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ErrorContent_content`.
     * @returns {ErrorContent_content}
     */
    public static _from_object(
        _o: { [_K in keyof ErrorContent_content]: ErrorContent_content[_K] }
    ): ErrorContent_content {
        return new ErrorContent_content(
            _o.invokId,
            _o.sessionType,
            _o.sessionId,
            _o.error,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ErrorContent_content */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ErrorContent_content */
/**
 * @summary The Leading Root Component Types of ErrorContent_content
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ErrorContent_content: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'invokId',
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'sessionType',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'sessionId',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec('error', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ErrorContent_content */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ErrorContent_content */
/**
 * @summary The Trailing Root Component Types of ErrorContent_content
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ErrorContent_content: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ErrorContent_content */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ErrorContent_content */
/**
 * @summary The Extension Addition Component Types of ErrorContent_content
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ErrorContent_content: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ErrorContent_content */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ErrorContent_content */
let _cached_decoder_for_ErrorContent_content: $.ASN1Decoder<ErrorContent_content> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ErrorContent_content */

/* START_OF_SYMBOL_DEFINITION _decode_ErrorContent_content */
/**
 * @summary Decodes an ASN.1 element into a(n) ErrorContent_content
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ErrorContent_content} The decoded data structure.
 */
export function _decode_ErrorContent_content(el: _Element) {
    if (!_cached_decoder_for_ErrorContent_content) {
        _cached_decoder_for_ErrorContent_content = function (
            el: _Element
        ): ErrorContent_content {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let invokId: OPTIONAL<INTEGER>;
            let sessionType!: SessionType;
            let sessionId!: INTEGER;
            let error!: _Element;
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
                error: (_el: _Element): void => {
                    error = $._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ErrorContent_content,
                _extension_additions_list_spec_for_ErrorContent_content,
                _root_component_type_list_2_spec_for_ErrorContent_content,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ErrorContent_content /* SEQUENCE_CONSTRUCTOR_CALL */(
                invokId,
                sessionType,
                sessionId,
                error,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ErrorContent_content(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ErrorContent_content */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ErrorContent_content */
let _cached_encoder_for_ErrorContent_content: $.ASN1Encoder<ErrorContent_content> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ErrorContent_content */

/* START_OF_SYMBOL_DEFINITION _encode_ErrorContent_content */
/**
 * @summary Encodes a(n) ErrorContent_content into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorContent_content, encoded as an ASN.1 Element.
 */
export function _encode_ErrorContent_content(
    value: ErrorContent_content,
    elGetter: $.ASN1Encoder<ErrorContent_content>
) {
    if (!_cached_encoder_for_ErrorContent_content) {
        _cached_encoder_for_ErrorContent_content = function (
            value: ErrorContent_content,
            elGetter: $.ASN1Encoder<ErrorContent_content>
        ): _Element {
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
                            /* REQUIRED   */ $._encodeAny(value.error, $.BER),
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
    return _cached_encoder_for_ErrorContent_content(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ErrorContent_content */

/* eslint-enable */
