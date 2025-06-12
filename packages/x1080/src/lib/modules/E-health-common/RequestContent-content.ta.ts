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
import { INTERACTIVE_OPERATION } from '../E-health-common/INTERACTIVE-OPERATION.oca.js';
export { INTERACTIVE_OPERATION } from '../E-health-common/INTERACTIVE-OPERATION.oca.js';
import {
    SessionType,
    _decode_SessionType,
    _encode_SessionType,
} from "./SessionType.ta.js";
import {
    ExchangeMode,
    ExchangeMode_sync,
    _decode_ExchangeMode,
    _encode_ExchangeMode,
} from "./ExchangeMode.ta.js";
import {
    Requirements,
    Requirements_none,
    _decode_Requirements,
    _encode_Requirements,
} from "./Requirements.ta.js";


/* START_OF_SYMBOL_DEFINITION RequestContent_content */
/**
 * @summary RequestContent_content
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestContent-content ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class RequestContent_content {
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
         * @summary `requirement`.
         * @public
         * @readonly
         */
        readonly requirement: OPTIONAL<Requirements>,
        /**
         * @summary `voice_options`.
         * @public
         * @readonly
         */
        readonly voice_options: OPTIONAL<_Element>,
        /**
         * @summary `video_options`.
         * @public
         * @readonly
         */
        readonly video_options: OPTIONAL<_Element>,
        /**
         * @summary `request`.
         * @public
         * @readonly
         */
        readonly request: _Element,
        /**
         * @summary `exchangeMode`.
         * @public
         * @readonly
         */
        readonly exchangeMode: OPTIONAL<ExchangeMode>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RequestContent_content
     * @description
     *
     * This takes an `object` and converts it to a `RequestContent_content`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestContent_content`.
     * @returns {RequestContent_content}
     */
    public static _from_object(
        _o: { [_K in keyof RequestContent_content]: RequestContent_content[_K] }
    ): RequestContent_content {
        return new RequestContent_content(
            _o.invokId,
            _o.sessionType,
            _o.sessionId,
            _o.requirement,
            _o.voice_options,
            _o.video_options,
            _o.request,
            _o.exchangeMode,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `requirement`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_requirement() {
        return Requirements_none;
    }
    /**
     * @summary Getter that returns the default value for `exchangeMode`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_exchangeMode() {
        return ExchangeMode_sync;
    }
}
/* END_OF_SYMBOL_DEFINITION RequestContent_content */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RequestContent_content */
/**
 * @summary The Leading Root Component Types of RequestContent_content
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RequestContent_content: $.ComponentSpec[] = [
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
    new $.ComponentSpec(
        'requirement',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'voice-options',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'video-options',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'request',
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'exchangeMode',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RequestContent_content */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RequestContent_content */
/**
 * @summary The Trailing Root Component Types of RequestContent_content
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RequestContent_content: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RequestContent_content */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RequestContent_content */
/**
 * @summary The Extension Addition Component Types of RequestContent_content
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RequestContent_content: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RequestContent_content */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestContent_content */
let _cached_decoder_for_RequestContent_content: $.ASN1Decoder<RequestContent_content> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestContent_content */

/* START_OF_SYMBOL_DEFINITION _decode_RequestContent_content */
/**
 * @summary Decodes an ASN.1 element into a(n) RequestContent_content
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestContent_content} The decoded data structure.
 */
export function _decode_RequestContent_content(el: _Element) {
    if (!_cached_decoder_for_RequestContent_content) {
        _cached_decoder_for_RequestContent_content = function (
            el: _Element
        ): RequestContent_content {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let invokId: OPTIONAL<INTEGER>;
            let sessionType!: SessionType;
            let sessionId!: INTEGER;
            let requirement: OPTIONAL<Requirements> =
                RequestContent_content._default_value_for_requirement;
            let voice_options: OPTIONAL<_Element>;
            let video_options: OPTIONAL<_Element>;
            let request!: _Element;
            let exchangeMode: OPTIONAL<ExchangeMode> =
                RequestContent_content._default_value_for_exchangeMode;
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
                requirement: (_el: _Element): void => {
                    requirement = $._decode_implicit<Requirements>(
                        () => _decode_Requirements
                    )(_el);
                },
                'voice-options': (_el: _Element): void => {
                    voice_options = $._decode_implicit<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
                'video-options': (_el: _Element): void => {
                    video_options = $._decode_implicit<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
                request: (_el: _Element): void => {
                    request = $._decode_implicit<_Element>(() => $._decodeAny)(
                        _el
                    );
                },
                exchangeMode: (_el: _Element): void => {
                    exchangeMode = $._decode_implicit<ExchangeMode>(
                        () => _decode_ExchangeMode
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RequestContent_content,
                _extension_additions_list_spec_for_RequestContent_content,
                _root_component_type_list_2_spec_for_RequestContent_content,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new RequestContent_content /* SEQUENCE_CONSTRUCTOR_CALL */(
                invokId,
                sessionType,
                sessionId,
                requirement,
                voice_options,
                video_options,
                request,
                exchangeMode,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_RequestContent_content(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RequestContent_content */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestContent_content */
let _cached_encoder_for_RequestContent_content: $.ASN1Encoder<RequestContent_content> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestContent_content */

/* START_OF_SYMBOL_DEFINITION _encode_RequestContent_content */
/**
 * @summary Encodes a(n) RequestContent_content into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestContent_content, encoded as an ASN.1 Element.
 */
export function _encode_RequestContent_content(
    value: RequestContent_content,
    elGetter: $.ASN1Encoder<RequestContent_content>
) {
    if (!_cached_encoder_for_RequestContent_content) {
        _cached_encoder_for_RequestContent_content = function (
            value: RequestContent_content,
            elGetter: $.ASN1Encoder<RequestContent_content>
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
                            /* IF_DEFAULT */ value.requirement === undefined ||
                            $.deepEq(
                                value.requirement,
                                RequestContent_content._default_value_for_requirement
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Requirements,
                                      $.BER
                                  )(value.requirement, $.BER),
                            /* IF_ABSENT  */ value.voice_options === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeAny,
                                      $.BER
                                  )(value.voice_options, $.BER),
                            /* IF_ABSENT  */ value.video_options === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeAny,
                                      $.BER
                                  )(value.video_options, $.BER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                3,
                                () => $._encodeAny,
                                $.BER
                            )(value.request, $.BER),
                            /* IF_DEFAULT */ value.exchangeMode === undefined ||
                            $.deepEq(
                                value.exchangeMode,
                                RequestContent_content._default_value_for_exchangeMode
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_ExchangeMode,
                                      $.BER
                                  )(value.exchangeMode, $.BER),
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
    return _cached_encoder_for_RequestContent_content(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RequestContent_content */

/* eslint-enable */
