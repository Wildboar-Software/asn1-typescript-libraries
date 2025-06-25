/* eslint-disable */
import {
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
    SetupError,
    _enum_for_SetupError,
    _decode_SetupError,
    _encode_SetupError,
} from '../E-health-common/SetupError.ta.mjs';

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
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'sessionId',
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        'error',
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
];


/**
 * @summary The Trailing Root Component Types of E_setupError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_E_setupError: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of E_setupError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_E_setupError: $.ComponentSpec[] = [];


let _cached_decoder_for_E_setupError: $.ASN1Decoder<E_setupError> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) E_setupError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {E_setupError} The decoded data structure.
 */
export function _decode_E_setupError(el: _Element): E_setupError {
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


let _cached_encoder_for_E_setupError: $.ASN1Encoder<E_setupError> | null = null;


/**
 * @summary Encodes a(n) E_setupError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The E_setupError, encoded as an ASN.1 Element.
 */
export function _encode_E_setupError(
    value: E_setupError,
    elGetter: $.ASN1Encoder<E_setupError>
): _Element {
    if (!_cached_encoder_for_E_setupError) {
        _cached_encoder_for_E_setupError = function (
            value: E_setupError        ): _Element {
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


/* eslint-enable */
