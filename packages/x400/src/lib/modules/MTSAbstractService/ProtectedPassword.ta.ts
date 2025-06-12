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
import {
    SIGNATURE,
    _decode_SIGNATURE,
    _encode_SIGNATURE,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/SIGNATURE.ta.js';
export {
    SIGNATURE,
    _decode_SIGNATURE,
    _encode_SIGNATURE,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/SIGNATURE.ta.js';
import {
    Password,
    _decode_Password,
    _encode_Password,
} from '../MTSAbstractService/Password.ta.js';
export {
    Password,
    _decode_Password,
    _encode_Password,
} from '../MTSAbstractService/Password.ta.js';

/* START_OF_SYMBOL_DEFINITION ProtectedPassword */
/**
 * @summary ProtectedPassword
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectedPassword ::= SET {
 *   signature
 *     SIGNATURE{SET {password  Password,
 *                    time1     [0]  UTCTime OPTIONAL,
 *                    time2     [1]  UTCTime OPTIONAL,
 *                    random1   [2]  BIT STRING OPTIONAL,
 *                    random2   [3]  BIT STRING OPTIONAL}},
 *   time1      [0]  UTCTime OPTIONAL,
 *   time2      [1]  UTCTime OPTIONAL,
 *   random1    [2]  BIT STRING OPTIONAL,
 *   random2    [3]  BIT STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ProtectedPassword {
    constructor(
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: SIGNATURE,
        /**
         * @summary `time1`.
         * @public
         * @readonly
         */
        readonly time1: OPTIONAL<UTCTime>,
        /**
         * @summary `time2`.
         * @public
         * @readonly
         */
        readonly time2: OPTIONAL<UTCTime>,
        /**
         * @summary `random1`.
         * @public
         * @readonly
         */
        readonly random1: OPTIONAL<BIT_STRING>,
        /**
         * @summary `random2`.
         * @public
         * @readonly
         */
        readonly random2: OPTIONAL<BIT_STRING>
    ) {}

    /**
     * @summary Restructures an object into a ProtectedPassword
     * @description
     *
     * This takes an `object` and converts it to a `ProtectedPassword`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProtectedPassword`.
     * @returns {ProtectedPassword}
     */
    public static _from_object(
        _o: { [_K in keyof ProtectedPassword]: ProtectedPassword[_K] }
    ): ProtectedPassword {
        return new ProtectedPassword(
            _o.signature,
            _o.time1,
            _o.time2,
            _o.random1,
            _o.random2
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ProtectedPassword */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProtectedPassword */
/**
 * @summary The Leading Root Component Types of ProtectedPassword
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProtectedPassword: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'signature',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'time1',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'time2',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'random1',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'random2',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProtectedPassword */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProtectedPassword */
/**
 * @summary The Trailing Root Component Types of ProtectedPassword
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProtectedPassword: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProtectedPassword */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProtectedPassword */
/**
 * @summary The Extension Addition Component Types of ProtectedPassword
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProtectedPassword: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProtectedPassword */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectedPassword */
let _cached_decoder_for_ProtectedPassword: $.ASN1Decoder<ProtectedPassword> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectedPassword */

/* START_OF_SYMBOL_DEFINITION _decode_ProtectedPassword */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtectedPassword
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectedPassword} The decoded data structure.
 */
export function _decode_ProtectedPassword(el: _Element) {
    if (!_cached_decoder_for_ProtectedPassword) {
        _cached_decoder_for_ProtectedPassword = function (
            el: _Element
        ): ProtectedPassword {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let signature!: SIGNATURE;
            let time1: OPTIONAL<UTCTime>;
            let time2: OPTIONAL<UTCTime>;
            let random1: OPTIONAL<BIT_STRING>;
            let random2: OPTIONAL<BIT_STRING>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                signature: (_el: _Element): void => {
                    signature = _decode_SIGNATURE(_el);
                },
                time1: (_el: _Element): void => {
                    time1 = $._decode_implicit<UTCTime>(() => $._decodeUTCTime)(
                        _el
                    );
                },
                time2: (_el: _Element): void => {
                    time2 = $._decode_implicit<UTCTime>(() => $._decodeUTCTime)(
                        _el
                    );
                },
                random1: (_el: _Element): void => {
                    random1 = $._decode_implicit<BIT_STRING>(
                        () => $._decodeBitString
                    )(_el);
                },
                random2: (_el: _Element): void => {
                    random2 = $._decode_implicit<BIT_STRING>(
                        () => $._decodeBitString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ProtectedPassword,
                _extension_additions_list_spec_for_ProtectedPassword,
                _root_component_type_list_2_spec_for_ProtectedPassword,
                undefined
            );
            return new ProtectedPassword /* SET_CONSTRUCTOR_CALL */(
                signature,
                time1,
                time2,
                random1,
                random2
            );
        };
    }
    return _cached_decoder_for_ProtectedPassword(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProtectedPassword */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectedPassword */
let _cached_encoder_for_ProtectedPassword: $.ASN1Encoder<ProtectedPassword> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectedPassword */

/* START_OF_SYMBOL_DEFINITION _encode_ProtectedPassword */
/**
 * @summary Encodes a(n) ProtectedPassword into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectedPassword, encoded as an ASN.1 Element.
 */
export function _encode_ProtectedPassword(
    value: ProtectedPassword,
    elGetter: $.ASN1Encoder<ProtectedPassword>
) {
    if (!_cached_encoder_for_ProtectedPassword) {
        _cached_encoder_for_ProtectedPassword = function (
            value: ProtectedPassword,
            elGetter: $.ASN1Encoder<ProtectedPassword>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SIGNATURE(
                            value.signature,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.time1 === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeUTCTime,
                                  $.BER
                              )(value.time1, $.BER),
                        /* IF_ABSENT  */ value.time2 === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeUTCTime,
                                  $.BER
                              )(value.time2, $.BER),
                        /* IF_ABSENT  */ value.random1 === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeBitString,
                                  $.BER
                              )(value.random1, $.BER),
                        /* IF_ABSENT  */ value.random2 === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => $._encodeBitString,
                                  $.BER
                              )(value.random2, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ProtectedPassword(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtectedPassword */

/* eslint-enable */
