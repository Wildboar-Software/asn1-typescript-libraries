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

/* START_OF_SYMBOL_DEFINITION E_terminateRequest */
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
 * @class
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
/* END_OF_SYMBOL_DEFINITION E_terminateRequest */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_E_terminateRequest */
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
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_E_terminateRequest */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_E_terminateRequest */
/**
 * @summary The Trailing Root Component Types of E_terminateRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_E_terminateRequest: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_E_terminateRequest */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_E_terminateRequest */
/**
 * @summary The Extension Addition Component Types of E_terminateRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_E_terminateRequest: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_E_terminateRequest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_E_terminateRequest */
let _cached_decoder_for_E_terminateRequest: $.ASN1Decoder<E_terminateRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_E_terminateRequest */

/* START_OF_SYMBOL_DEFINITION _decode_E_terminateRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) E_terminateRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {E_terminateRequest} The decoded data structure.
 */
export function _decode_E_terminateRequest(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_E_terminateRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_E_terminateRequest */
let _cached_encoder_for_E_terminateRequest: $.ASN1Encoder<E_terminateRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_E_terminateRequest */

/* START_OF_SYMBOL_DEFINITION _encode_E_terminateRequest */
/**
 * @summary Encodes a(n) E_terminateRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The E_terminateRequest, encoded as an ASN.1 Element.
 */
export function _encode_E_terminateRequest(
    value: E_terminateRequest,
    elGetter: $.ASN1Encoder<E_terminateRequest>
) {
    if (!_cached_encoder_for_E_terminateRequest) {
        _cached_encoder_for_E_terminateRequest = function (
            value: E_terminateRequest,
            elGetter: $.ASN1Encoder<E_terminateRequest>
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

/* END_OF_SYMBOL_DEFINITION _encode_E_terminateRequest */

/* eslint-enable */
