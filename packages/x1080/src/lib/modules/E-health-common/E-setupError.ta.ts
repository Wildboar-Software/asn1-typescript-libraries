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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    SessionType,
    _decode_SessionType,
    _encode_SessionType,
} from '../E-health-common/SessionType.ta';
export {
    SessionType,
    _decode_SessionType,
    _encode_SessionType,
} from '../E-health-common/SessionType.ta';
import {
    SessionId,
    _decode_SessionId,
    _encode_SessionId,
} from '../E-health-common/SessionId.ta';
export {
    SessionId,
    _decode_SessionId,
    _encode_SessionId,
} from '../E-health-common/SessionId.ta';
import {
    SetupError,
    _enum_for_SetupError,
    SetupError_setupNotAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    setupNotAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SetupError_facilityTemporarilyUnavailable /* IMPORTED_LONG_ENUMERATION_ITEM */,
    facilityTemporarilyUnavailable /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SetupError_facilityPermanentlyUnavailable /* IMPORTED_LONG_ENUMERATION_ITEM */,
    facilityPermanentlyUnavailable /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SetupError_unknownSessionType /* IMPORTED_LONG_ENUMERATION_ITEM */,
    unknownSessionType /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SetupError_sessionTypeNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */,
    sessionTypeNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SetupError_batchModeNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */,
    batchModeNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SetupError_continuousReturnNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */,
    continuousReturnNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SetupError_sensorTemporarilyUnavailable /* IMPORTED_LONG_ENUMERATION_ITEM */,
    sensorTemporarilyUnavailable /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SetupError_sensorPermanentlyUnavailable /* IMPORTED_LONG_ENUMERATION_ITEM */,
    sensorPermanentlyUnavailable /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_SetupError,
    _encode_SetupError,
} from '../E-health-common/SetupError.ta';
export {
    SetupError,
    _enum_for_SetupError,
    SetupError_setupNotAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    setupNotAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SetupError_facilityTemporarilyUnavailable /* IMPORTED_LONG_ENUMERATION_ITEM */,
    facilityTemporarilyUnavailable /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SetupError_facilityPermanentlyUnavailable /* IMPORTED_LONG_ENUMERATION_ITEM */,
    facilityPermanentlyUnavailable /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SetupError_unknownSessionType /* IMPORTED_LONG_ENUMERATION_ITEM */,
    unknownSessionType /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SetupError_sessionTypeNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */,
    sessionTypeNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SetupError_batchModeNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */,
    batchModeNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SetupError_continuousReturnNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */,
    continuousReturnNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SetupError_sensorTemporarilyUnavailable /* IMPORTED_LONG_ENUMERATION_ITEM */,
    sensorTemporarilyUnavailable /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SetupError_sensorPermanentlyUnavailable /* IMPORTED_LONG_ENUMERATION_ITEM */,
    sensorPermanentlyUnavailable /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_SetupError,
    _encode_SetupError,
} from '../E-health-common/SetupError.ta';

/* START_OF_SYMBOL_DEFINITION E_setupError */
/**
 * @summary E_setupError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * E-setupError ::= SEQUENCE {
 *   sessionType SessionType,
 *   sessionId   SessionId,
 *   error       SetupError,
 *   ... }
 * ```
 *
 * @class
 */
export class E_setupError {
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
         * @summary `error`.
         * @public
         * @readonly
         */
        readonly error: SetupError,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a E_setupError
     * @description
     *
     * This takes an `object` and converts it to a `E_setupError`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `E_setupError`.
     * @returns {E_setupError}
     */
    public static _from_object(
        _o: { [_K in keyof E_setupError]: E_setupError[_K] }
    ): E_setupError {
        return new E_setupError(
            _o.sessionType,
            _o.sessionId,
            _o.error,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `error`
     * @public
     * @static
     */

    public static _enum_for_error = _enum_for_SetupError;
}
/* END_OF_SYMBOL_DEFINITION E_setupError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_E_setupError */
/**
 * @summary The Leading Root Component Types of E_setupError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_E_setupError: $.ComponentSpec[] = [
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
        'error',
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_E_setupError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_E_setupError */
/**
 * @summary The Trailing Root Component Types of E_setupError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_E_setupError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_E_setupError */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_E_setupError */
/**
 * @summary The Extension Addition Component Types of E_setupError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_E_setupError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_E_setupError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_E_setupError */
let _cached_decoder_for_E_setupError: $.ASN1Decoder<E_setupError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_E_setupError */

/* START_OF_SYMBOL_DEFINITION _decode_E_setupError */
/**
 * @summary Decodes an ASN.1 element into a(n) E_setupError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {E_setupError} The decoded data structure.
 */
export function _decode_E_setupError(el: _Element) {
    if (!_cached_decoder_for_E_setupError) {
        _cached_decoder_for_E_setupError = function (
            el: _Element
        ): E_setupError {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'E-setupError contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'sessionType';
            sequence[1].name = 'sessionId';
            sequence[2].name = 'error';
            let sessionType!: SessionType;
            let sessionId!: SessionId;
            let error!: SetupError;
            sessionType = _decode_SessionType(sequence[0]);
            sessionId = _decode_SessionId(sequence[1]);
            error = _decode_SetupError(sequence[2]);
            return new E_setupError(
                sessionType,
                sessionId,
                error,
                sequence.slice(3)
            );
        };
    }
    return _cached_decoder_for_E_setupError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_E_setupError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_E_setupError */
let _cached_encoder_for_E_setupError: $.ASN1Encoder<E_setupError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_E_setupError */

/* START_OF_SYMBOL_DEFINITION _encode_E_setupError */
/**
 * @summary Encodes a(n) E_setupError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The E_setupError, encoded as an ASN.1 Element.
 */
export function _encode_E_setupError(
    value: E_setupError,
    elGetter: $.ASN1Encoder<E_setupError>
) {
    if (!_cached_encoder_for_E_setupError) {
        _cached_encoder_for_E_setupError = function (
            value: E_setupError,
            elGetter: $.ASN1Encoder<E_setupError>
        ): _Element {
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
                            /* REQUIRED   */ _encode_SetupError(
                                value.error,
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
    return _cached_encoder_for_E_setupError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_E_setupError */

/* eslint-enable */
