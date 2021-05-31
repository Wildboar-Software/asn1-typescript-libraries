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

/* START_OF_SYMBOL_DEFINITION E_setupResponse */
/**
 * @summary E_setupResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * E-setupResponse ::= SEQUENCE {
 *   sessionType SessionType,
 *   sessionId   SessionId,
 *   ... }
 * ```
 *
 * @class
 */
export class E_setupResponse {
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
     * @summary Restructures an object into a E_setupResponse
     * @description
     *
     * This takes an `object` and converts it to a `E_setupResponse`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `E_setupResponse`.
     * @returns {E_setupResponse}
     */
    public static _from_object(
        _o: { [_K in keyof E_setupResponse]: E_setupResponse[_K] }
    ): E_setupResponse {
        return new E_setupResponse(
            _o.sessionType,
            _o.sessionId,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION E_setupResponse */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_E_setupResponse */
/**
 * @summary The Leading Root Component Types of E_setupResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_E_setupResponse: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_E_setupResponse */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_E_setupResponse */
/**
 * @summary The Trailing Root Component Types of E_setupResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_E_setupResponse: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_E_setupResponse */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_E_setupResponse */
/**
 * @summary The Extension Addition Component Types of E_setupResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_E_setupResponse: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_E_setupResponse */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_E_setupResponse */
let _cached_decoder_for_E_setupResponse: $.ASN1Decoder<E_setupResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_E_setupResponse */

/* START_OF_SYMBOL_DEFINITION _decode_E_setupResponse */
/**
 * @summary Decodes an ASN.1 element into a(n) E_setupResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {E_setupResponse} The decoded data structure.
 */
export function _decode_E_setupResponse(el: _Element) {
    if (!_cached_decoder_for_E_setupResponse) {
        _cached_decoder_for_E_setupResponse = function (
            el: _Element
        ): E_setupResponse {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'E-setupResponse contained only ' +
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
            return new E_setupResponse(
                sessionType,
                sessionId,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_E_setupResponse(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_E_setupResponse */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_E_setupResponse */
let _cached_encoder_for_E_setupResponse: $.ASN1Encoder<E_setupResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_E_setupResponse */

/* START_OF_SYMBOL_DEFINITION _encode_E_setupResponse */
/**
 * @summary Encodes a(n) E_setupResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The E_setupResponse, encoded as an ASN.1 Element.
 */
export function _encode_E_setupResponse(
    value: E_setupResponse,
    elGetter: $.ASN1Encoder<E_setupResponse>
) {
    if (!_cached_encoder_for_E_setupResponse) {
        _cached_encoder_for_E_setupResponse = function (
            value: E_setupResponse,
            elGetter: $.ASN1Encoder<E_setupResponse>
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
    return _cached_encoder_for_E_setupResponse(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_E_setupResponse */

/* eslint-enable */
