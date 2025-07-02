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
 * @summary E_terminateRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * E-terminateRequest ::= SEQUENCE {
 *   sessionType SessionType,
 *   sessionId   SessionId,
 *   ... }
 * ```
 *
 */
export class E_terminateRequest {
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
     * @summary Restructures an object into a E_terminateRequest
     * @description
     *
     * This takes an `object` and converts it to a `E_terminateRequest`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `E_terminateRequest`.
     * @returns {E_terminateRequest}
     */
    public static _from_object(
        _o: { [_K in keyof E_terminateRequest]: E_terminateRequest[_K] }
    ): E_terminateRequest {
        return new E_terminateRequest(
            _o.sessionType,
            _o.sessionId,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of E_terminateRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_E_terminateRequest: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of E_terminateRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_E_terminateRequest: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of E_terminateRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_E_terminateRequest: $.ComponentSpec[] = [];


let _cached_decoder_for_E_terminateRequest: $.ASN1Decoder<E_terminateRequest> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) E_terminateRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {E_terminateRequest} The decoded data structure.
 */
export function _decode_E_terminateRequest(el: _Element): E_terminateRequest {
    if (!_cached_decoder_for_E_terminateRequest) {
        _cached_decoder_for_E_terminateRequest = function (
            el: _Element
        ): E_terminateRequest {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'E-terminateRequest contained only ' +
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
            return new E_terminateRequest(
                sessionType,
                sessionId,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_E_terminateRequest(el);
}


let _cached_encoder_for_E_terminateRequest: $.ASN1Encoder<E_terminateRequest> | null = null;


/**
 * @summary Encodes a(n) E_terminateRequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The E_terminateRequest, encoded as an ASN.1 Element.
 */
export function _encode_E_terminateRequest(
    value: E_terminateRequest,
    elGetter: $.ASN1Encoder<E_terminateRequest>
): _Element {
    if (!_cached_encoder_for_E_terminateRequest) {
        _cached_encoder_for_E_terminateRequest = function (
            value: E_terminateRequest        ): _Element {
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
    return _cached_encoder_for_E_terminateRequest(value, elGetter);
}


/* eslint-enable */
