/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    UTF8String,
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
} from '../E-health-common/SessionType.ta.mjs';
import {
    SessionId,
    _decode_SessionId,
    _encode_SessionId,
} from '../E-health-common/SessionId.ta.mjs';
import {
    Requirements,
    _enum_for_Requirements,
    Requirements_none /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_Requirements,
    _encode_Requirements,
} from '../E-health-common/Requirements.ta.mjs';
import {
    VoiceOptions,
    _decode_VoiceOptions,
    _encode_VoiceOptions,
} from '../E-health-common/VoiceOptions.ta.mjs';
import {
    VideoOptions,
    _decode_VideoOptions,
    _encode_VideoOptions,
} from '../E-health-common/VideoOptions.ta.mjs';
import {
    ReturnMode,
    _enum_for_ReturnMode,
    _decode_ReturnMode,
    _encode_ReturnMode,
} from '../E-health-common/ReturnMode.ta.mjs';

/**
 * @summary E_setupRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * E-setupRequest ::= SEQUENCE {
 *   sessionType      SessionType,
 *   sessionId        SessionId,
 *   requirement  [0] Requirements  DEFAULT none,
 *   voiceOptions [1] VoiceOptions  OPTIONAL,
 *   videoOptions [2] VideoOptions  OPTIONAL,
 *   returnMode       ReturnMode,
 *   sensorId         UTF8String  OPTIONAL,
 *   operations       SET SIZE (1..MAX) OF
 *     INTERACTIVE-OPERATION.&id ({SupportedOperationTypes}),
 *   first            INTERACTIVE-OPERATION.&id ({SupportedOperationTypes})
 *                      OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class E_setupRequest {
    constructor(
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
        readonly sessionId: SessionId,
        /**
         * @summary `requirement`.
         * @public
         * @readonly
         */
        readonly requirement: OPTIONAL<Requirements>,
        /**
         * @summary `voiceOptions`.
         * @public
         * @readonly
         */
        readonly voiceOptions: OPTIONAL<VoiceOptions>,
        /**
         * @summary `videoOptions`.
         * @public
         * @readonly
         */
        readonly videoOptions: OPTIONAL<VideoOptions>,
        /**
         * @summary `returnMode`.
         * @public
         * @readonly
         */
        readonly returnMode: ReturnMode,
        /**
         * @summary `sensorId`.
         * @public
         * @readonly
         */
        readonly sensorId: OPTIONAL<UTF8String>,
        /**
         * @summary `operations`.
         * @public
         * @readonly
         */
        readonly operations: INTEGER[],
        /**
         * @summary `first`.
         * @public
         * @readonly
         */
        readonly first: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a E_setupRequest
     * @description
     *
     * This takes an `object` and converts it to a `E_setupRequest`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `E_setupRequest`.
     * @returns {E_setupRequest}
     */
    public static _from_object(
        _o: { [_K in keyof E_setupRequest]: E_setupRequest[_K] }
    ): E_setupRequest {
        return new E_setupRequest(
            _o.sessionType,
            _o.sessionId,
            _o.requirement,
            _o.voiceOptions,
            _o.videoOptions,
            _o.returnMode,
            _o.sensorId,
            _o.operations,
            _o.first,
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
     * @summary The enum used as the type of the component `requirement`
     * @public
     * @static
     */

    public static _enum_for_requirement = _enum_for_Requirements;
    /**
     * @summary The enum used as the type of the component `returnMode`
     * @public
     * @static
     */

    public static _enum_for_returnMode = _enum_for_ReturnMode;
}


/**
 * @summary The Leading Root Component Types of E_setupRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_E_setupRequest: $.ComponentSpec[] = [
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
    new $.ComponentSpec(
        'requirement',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'voiceOptions',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'videoOptions',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'returnMode',
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
    new $.ComponentSpec(
        'sensorId',
        true,
        $.hasTag(_TagClass.universal, 12)
    ),
    new $.ComponentSpec(
        'operations',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'first',
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of E_setupRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_E_setupRequest: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of E_setupRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_E_setupRequest: $.ComponentSpec[] = [];


let _cached_decoder_for_E_setupRequest: $.ASN1Decoder<E_setupRequest> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) E_setupRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {E_setupRequest} The decoded data structure.
 */
export function _decode_E_setupRequest(el: _Element): E_setupRequest {
    if (!_cached_decoder_for_E_setupRequest) {
        _cached_decoder_for_E_setupRequest = function (
            el: _Element
        ): E_setupRequest {
            let sessionType!: SessionType;
            let sessionId!: SessionId;
            let requirement: OPTIONAL<Requirements> =
                E_setupRequest._default_value_for_requirement;
            let voiceOptions: OPTIONAL<VoiceOptions>;
            let videoOptions: OPTIONAL<VideoOptions>;
            let returnMode!: ReturnMode;
            let sensorId: OPTIONAL<UTF8String>;
            let operations!: INTEGER[];
            let first: OPTIONAL<INTEGER>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                sessionType: (_el: _Element): void => {
                    sessionType = _decode_SessionType(_el);
                },
                sessionId: (_el: _Element): void => {
                    sessionId = _decode_SessionId(_el);
                },
                requirement: (_el: _Element): void => {
                    requirement = $._decode_implicit<Requirements>(
                        () => _decode_Requirements
                    )(_el);
                },
                voiceOptions: (_el: _Element): void => {
                    voiceOptions = $._decode_implicit<VoiceOptions>(
                        () => _decode_VoiceOptions
                    )(_el);
                },
                videoOptions: (_el: _Element): void => {
                    videoOptions = $._decode_implicit<VideoOptions>(
                        () => _decode_VideoOptions
                    )(_el);
                },
                returnMode: (_el: _Element): void => {
                    returnMode = _decode_ReturnMode(_el);
                },
                sensorId: (_el: _Element): void => {
                    sensorId = $._decodeUTF8String(_el);
                },
                operations: (_el: _Element): void => {
                    operations = $._decodeSetOf<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                first: (_el: _Element): void => {
                    first = $._decodeInteger(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_E_setupRequest,
                _extension_additions_list_spec_for_E_setupRequest,
                _root_component_type_list_2_spec_for_E_setupRequest,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new E_setupRequest (
                sessionType,
                sessionId,
                requirement,
                voiceOptions,
                videoOptions,
                returnMode,
                sensorId,
                operations,
                first,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_E_setupRequest(el);
}


let _cached_encoder_for_E_setupRequest: $.ASN1Encoder<E_setupRequest> | null = null;


/**
 * @summary Encodes a(n) E_setupRequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The E_setupRequest, encoded as an ASN.1 Element.
 */
export function _encode_E_setupRequest(
    value: E_setupRequest,
    elGetter: $.ASN1Encoder<E_setupRequest>
): _Element {
    if (!_cached_encoder_for_E_setupRequest) {
        _cached_encoder_for_E_setupRequest = function (
            value: E_setupRequest        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_SessionType(
                                value.sessionType,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_SessionId(
                                value.sessionId,
                                $.BER
                            ),
                            /* IF_DEFAULT */ value.requirement === undefined ||
                            $.deepEq(
                                value.requirement,
                                E_setupRequest._default_value_for_requirement
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Requirements,
                                      $.BER
                                  )(value.requirement, $.BER),
                            /* IF_ABSENT  */ value.voiceOptions === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_VoiceOptions,
                                      $.BER
                                  )(value.voiceOptions, $.BER),
                            /* IF_ABSENT  */ value.videoOptions === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_VideoOptions,
                                      $.BER
                                  )(value.videoOptions, $.BER),
                            /* REQUIRED   */ _encode_ReturnMode(
                                value.returnMode,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.sensorId === undefined
                                ? undefined
                                : $._encodeUTF8String(value.sensorId, $.BER),
                            /* REQUIRED   */ $._encodeSetOf<INTEGER>(
                                () => $._encodeInteger,
                                $.BER
                            )(value.operations, $.BER),
                            /* IF_ABSENT  */ value.first === undefined
                                ? undefined
                                : $._encodeInteger(value.first, $.BER),
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
    return _cached_encoder_for_E_setupRequest(value, elGetter);
}


/* eslint-enable */
