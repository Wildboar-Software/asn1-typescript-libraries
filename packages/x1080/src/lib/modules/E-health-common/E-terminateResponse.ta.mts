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

/**
 * @summary E_terminateResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * E-terminateResponse ::= SEQUENCE {
 *   sessionType SessionType,
 *   sessionId   SessionId,
 *   ... }
 * ```
 *
 */
export class E_terminateResponse {
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
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a E_terminateResponse
     * @description
     *
     * This takes an `object` and converts it to a `E_terminateResponse`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `E_terminateResponse`.
     * @returns {E_terminateResponse}
     */
    public static _from_object(
        _o: { [_K in keyof E_terminateResponse]: E_terminateResponse[_K] }
    ): E_terminateResponse {
        return new E_terminateResponse(
            _o.sessionType,
            _o.sessionId,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of E_terminateResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_E_terminateResponse: $.ComponentSpec[] = [
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
];


/**
 * @summary The Trailing Root Component Types of E_terminateResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_E_terminateResponse: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of E_terminateResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_E_terminateResponse: $.ComponentSpec[] = [];


let _cached_decoder_for_E_terminateResponse: $.ASN1Decoder<E_terminateResponse> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) E_terminateResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {E_terminateResponse} The decoded data structure.
 */
export function _decode_E_terminateResponse(el: _Element): E_terminateResponse {
    if (!_cached_decoder_for_E_terminateResponse) {
        _cached_decoder_for_E_terminateResponse = function (
            el: _Element
        ): E_terminateResponse {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'E-terminateResponse contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'sessionType';
            sequence[1].name = 'sessionId';
            let sessionType!: SessionType;
            let sessionId!: SessionId;
            sessionType = _decode_SessionType(sequence[0]);
            sessionId = _decode_SessionId(sequence[1]);
            return new E_terminateResponse(
                sessionType,
                sessionId,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_E_terminateResponse(el);
}


let _cached_encoder_for_E_terminateResponse: $.ASN1Encoder<E_terminateResponse> | null = null;


/**
 * @summary Encodes a(n) E_terminateResponse into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The E_terminateResponse, encoded as an ASN.1 Element.
 */
export function _encode_E_terminateResponse(
    value: E_terminateResponse,
    elGetter: $.ASN1Encoder<E_terminateResponse>
): _Element {
    if (!_cached_encoder_for_E_terminateResponse) {
        _cached_encoder_for_E_terminateResponse = function (
            value: E_terminateResponse        ): _Element {
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
    return _cached_encoder_for_E_terminateResponse(value, elGetter);
}


/* eslint-enable */
