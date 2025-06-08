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
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta';
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta';
import {
    TBSAsymmetricToken_name,
    _decode_TBSAsymmetricToken_name,
    _encode_TBSAsymmetricToken_name,
} from '../MTSAbstractService/TBSAsymmetricToken-name.ta';
export {
    TBSAsymmetricToken_name,
    _decode_TBSAsymmetricToken_name,
    _encode_TBSAsymmetricToken_name,
} from '../MTSAbstractService/TBSAsymmetricToken-name.ta';
import {
    Time,
    _decode_Time,
    _encode_Time,
} from '../MTSAbstractService/Time.ta';
export {
    Time,
    _decode_Time,
    _encode_Time,
} from '../MTSAbstractService/Time.ta';
import {
    TokenData,
    _decode_TokenData,
    _encode_TokenData,
} from '../MTSAbstractService/TokenData.ta';
export {
    TokenData,
    _decode_TokenData,
    _encode_TokenData,
} from '../MTSAbstractService/TokenData.ta';
import {
    ENCRYPTED,
    _get_decoder_for_ENCRYPTED,
    _get_encoder_for_ENCRYPTED,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/ENCRYPTED.ta';
export {
    ENCRYPTED,
    _get_decoder_for_ENCRYPTED,
    _get_encoder_for_ENCRYPTED,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/ENCRYPTED.ta';

/* START_OF_SYMBOL_DEFINITION TBSAsymmetricToken */
/**
 * @summary TBSAsymmetricToken
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSAsymmetricToken ::= SEQUENCE {
 *     signature-algorithm-identifier      AlgorithmIdentifier,
 *     name                                TBSAsymmetricToken-name,
 *     time                                Time,
 *     signed-data                         [0]  TokenData OPTIONAL,
 *     encryption-algorithm-identifier     [1]  AlgorithmIdentifier OPTIONAL,
 *     encrypted-data                      [2]  ENCRYPTED{TokenData} OPTIONAL }
 * ```
 *
 * @class
 */
export class TBSAsymmetricToken {
    constructor(
        /**
         * @summary `signature_algorithm_identifier`.
         * @public
         * @readonly
         */
        readonly signature_algorithm_identifier: AlgorithmIdentifier,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: TBSAsymmetricToken_name,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: Time,
        /**
         * @summary `signed_data`.
         * @public
         * @readonly
         */
        readonly signed_data: OPTIONAL<TokenData>,
        /**
         * @summary `encryption_algorithm_identifier`.
         * @public
         * @readonly
         */
        readonly encryption_algorithm_identifier: OPTIONAL<AlgorithmIdentifier>,
        /**
         * @summary `encrypted_data`.
         * @public
         * @readonly
         */
        readonly encrypted_data: OPTIONAL<ENCRYPTED<TokenData>>
    ) {}

    /**
     * @summary Restructures an object into a TBSAsymmetricToken
     * @description
     *
     * This takes an `object` and converts it to a `TBSAsymmetricToken`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBSAsymmetricToken`.
     * @returns {TBSAsymmetricToken}
     */
    public static _from_object(
        _o: { [_K in keyof TBSAsymmetricToken]: TBSAsymmetricToken[_K] }
    ): TBSAsymmetricToken {
        return new TBSAsymmetricToken(
            _o.signature_algorithm_identifier,
            _o.name,
            _o.time,
            _o.signed_data,
            _o.encryption_algorithm_identifier,
            _o.encrypted_data
        );
    }
}
/* END_OF_SYMBOL_DEFINITION TBSAsymmetricToken */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TBSAsymmetricToken */
/**
 * @summary The Leading Root Component Types of TBSAsymmetricToken
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TBSAsymmetricToken: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'signature-algorithm-identifier',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec('name', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'time',
        false,
        $.hasTag(_TagClass.universal, 23),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'signed-data',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'encryption-algorithm-identifier',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'encrypted-data',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TBSAsymmetricToken */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TBSAsymmetricToken */
/**
 * @summary The Trailing Root Component Types of TBSAsymmetricToken
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TBSAsymmetricToken: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TBSAsymmetricToken */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TBSAsymmetricToken */
/**
 * @summary The Extension Addition Component Types of TBSAsymmetricToken
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TBSAsymmetricToken: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TBSAsymmetricToken */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TBSAsymmetricToken */
let _cached_decoder_for_TBSAsymmetricToken: $.ASN1Decoder<TBSAsymmetricToken> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TBSAsymmetricToken */

/* START_OF_SYMBOL_DEFINITION _decode_TBSAsymmetricToken */
/**
 * @summary Decodes an ASN.1 element into a(n) TBSAsymmetricToken
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSAsymmetricToken} The decoded data structure.
 */
export function _decode_TBSAsymmetricToken(el: _Element) {
    if (!_cached_decoder_for_TBSAsymmetricToken) {
        _cached_decoder_for_TBSAsymmetricToken = function (
            el: _Element
        ): TBSAsymmetricToken {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let signature_algorithm_identifier!: AlgorithmIdentifier;
            let name!: TBSAsymmetricToken_name;
            let time!: Time;
            let signed_data: OPTIONAL<TokenData>;
            let encryption_algorithm_identifier: OPTIONAL<AlgorithmIdentifier>;
            let encrypted_data: OPTIONAL<ENCRYPTED<TokenData>>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'signature-algorithm-identifier': (_el: _Element): void => {
                    signature_algorithm_identifier = _decode_AlgorithmIdentifier(
                        _el
                    );
                },
                name: (_el: _Element): void => {
                    name = _decode_TBSAsymmetricToken_name(_el);
                },
                time: (_el: _Element): void => {
                    time = _decode_Time(_el);
                },
                'signed-data': (_el: _Element): void => {
                    signed_data = $._decode_implicit<TokenData>(
                        () => _decode_TokenData
                    )(_el);
                },
                'encryption-algorithm-identifier': (_el: _Element): void => {
                    encryption_algorithm_identifier = $._decode_implicit<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    )(_el);
                },
                'encrypted-data': (_el: _Element): void => {
                    encrypted_data = $._decode_implicit<ENCRYPTED<TokenData>>(
                        () =>
                            _get_decoder_for_ENCRYPTED<TokenData>(
                                _decode_TokenData
                            )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TBSAsymmetricToken,
                _extension_additions_list_spec_for_TBSAsymmetricToken,
                _root_component_type_list_2_spec_for_TBSAsymmetricToken,
                undefined
            );
            return new TBSAsymmetricToken /* SEQUENCE_CONSTRUCTOR_CALL */(
                signature_algorithm_identifier,
                name,
                time,
                signed_data,
                encryption_algorithm_identifier,
                encrypted_data
            );
        };
    }
    return _cached_decoder_for_TBSAsymmetricToken(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TBSAsymmetricToken */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TBSAsymmetricToken */
let _cached_encoder_for_TBSAsymmetricToken: $.ASN1Encoder<TBSAsymmetricToken> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TBSAsymmetricToken */

/* START_OF_SYMBOL_DEFINITION _encode_TBSAsymmetricToken */
/**
 * @summary Encodes a(n) TBSAsymmetricToken into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSAsymmetricToken, encoded as an ASN.1 Element.
 */
export function _encode_TBSAsymmetricToken(
    value: TBSAsymmetricToken,
    elGetter: $.ASN1Encoder<TBSAsymmetricToken>
) {
    if (!_cached_encoder_for_TBSAsymmetricToken) {
        _cached_encoder_for_TBSAsymmetricToken = function (
            value: TBSAsymmetricToken,
            elGetter: $.ASN1Encoder<TBSAsymmetricToken>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.signature_algorithm_identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_TBSAsymmetricToken_name(
                            value.name,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Time(value.time, $.BER),
                        /* IF_ABSENT  */ value.signed_data === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_TokenData,
                                  $.BER
                              )(value.signed_data, $.BER),
                        /* IF_ABSENT  */ value.encryption_algorithm_identifier ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_AlgorithmIdentifier,
                                  $.BER
                              )(value.encryption_algorithm_identifier, $.BER),
                        /* IF_ABSENT  */ value.encrypted_data === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () =>
                                      _get_encoder_for_ENCRYPTED<TokenData>(
                                          _encode_TokenData
                                      ),
                                  $.BER
                              )(value.encrypted_data, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TBSAsymmetricToken(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TBSAsymmetricToken */

/* eslint-enable */
