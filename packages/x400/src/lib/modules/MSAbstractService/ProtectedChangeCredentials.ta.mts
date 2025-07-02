/* eslint-disable */
import {
    BIT_STRING,
    OBJECT_IDENTIFIER,
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
    InitiatorCredentials,
    _decode_InitiatorCredentials,
    _encode_InitiatorCredentials,
} from '../MTSAbstractService/InitiatorCredentials.ta.mjs';
/**
 * @summary ProtectedChangeCredentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectedChangeCredentials ::= SEQUENCE {
 *   algorithm-identifier  [0] IMPLICIT OBJECT IDENTIFIER,
 *   old-credentials
 *     InitiatorCredentials(WITH COMPONENTS {
 *                            protected  PRESENT
 *                          }),
 *   password-delta        [2] IMPLICIT BIT STRING
 * }
 * ```
 *
 */
export class ProtectedChangeCredentials {
    constructor(
        /**
         * @summary `algorithm_identifier`.
         * @public
         * @readonly
         */
        readonly algorithm_identifier: OBJECT_IDENTIFIER,
        /**
         * @summary `old_credentials`.
         * @public
         * @readonly
         */
        readonly old_credentials: InitiatorCredentials,
        /**
         * @summary `password_delta`.
         * @public
         * @readonly
         */
        readonly password_delta: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a ProtectedChangeCredentials
     * @description
     *
     * This takes an `object` and converts it to a `ProtectedChangeCredentials`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProtectedChangeCredentials`.
     * @returns {ProtectedChangeCredentials}
     */
    public static _from_object(
        _o: {
            [_K in keyof ProtectedChangeCredentials]: ProtectedChangeCredentials[_K];
        }
    ): ProtectedChangeCredentials {
        return new ProtectedChangeCredentials(
            _o.algorithm_identifier,
            _o.old_credentials,
            _o.password_delta
        );
    }
}

/**
 * @summary The Leading Root Component Types of ProtectedChangeCredentials
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProtectedChangeCredentials: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'algorithm-identifier',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'old-credentials',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'password-delta',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of ProtectedChangeCredentials
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProtectedChangeCredentials: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ProtectedChangeCredentials
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProtectedChangeCredentials: $.ComponentSpec[] = [];

let _cached_decoder_for_ProtectedChangeCredentials: $.ASN1Decoder<ProtectedChangeCredentials> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProtectedChangeCredentials
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectedChangeCredentials} The decoded data structure.
 */
export function _decode_ProtectedChangeCredentials(el: _Element): ProtectedChangeCredentials {
    if (!_cached_decoder_for_ProtectedChangeCredentials) {
        _cached_decoder_for_ProtectedChangeCredentials = function (
            el: _Element
        ): ProtectedChangeCredentials {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'ProtectedChangeCredentials contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'algorithm-identifier';
            sequence[1].name = 'old-credentials';
            sequence[2].name = 'password-delta';
            let algorithm_identifier!: OBJECT_IDENTIFIER;
            let old_credentials!: InitiatorCredentials;
            let password_delta!: BIT_STRING;
            algorithm_identifier = $._decode_implicit<OBJECT_IDENTIFIER>(
                () => $._decodeObjectIdentifier
            )(sequence[0]);
            old_credentials = _decode_InitiatorCredentials(sequence[1]);
            password_delta = $._decode_implicit<BIT_STRING>(
                () => $._decodeBitString
            )(sequence[2]);
            return new ProtectedChangeCredentials(
                algorithm_identifier,
                old_credentials,
                password_delta
            );
        };
    }
    return _cached_decoder_for_ProtectedChangeCredentials(el);
}

let _cached_encoder_for_ProtectedChangeCredentials: $.ASN1Encoder<ProtectedChangeCredentials> | null = null;

/**
 * @summary Encodes a(n) ProtectedChangeCredentials into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectedChangeCredentials, encoded as an ASN.1 Element.
 */
export function _encode_ProtectedChangeCredentials(
    value: ProtectedChangeCredentials,
    elGetter: $.ASN1Encoder<ProtectedChangeCredentials>
): _Element {
    if (!_cached_encoder_for_ProtectedChangeCredentials) {
        _cached_encoder_for_ProtectedChangeCredentials = function (
            value: ProtectedChangeCredentials        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => $._encodeObjectIdentifier,
                            $.BER
                        )(value.algorithm_identifier, $.BER),
                        /* REQUIRED   */ _encode_InitiatorCredentials(
                            value.old_credentials,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () => $._encodeBitString,
                            $.BER
                        )(value.password_delta, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ProtectedChangeCredentials(value, elGetter);
}


/* eslint-enable */
