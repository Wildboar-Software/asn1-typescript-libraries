/* eslint-disable */
import {
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
/**
 * @summary AuthenticationContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticationContext ::= SEQUENCE {
 *   authenticationPolicyId
 *     [0] IMPLICIT AC-AUTH-CONTEXT.&id({AuthenticationContextSet}),
 *   requirements
 *     [1]  AC-AUTH-CONTEXT.&Value
 *            ({AuthenticationContextSet}{@.authenticationPolicyId})
 * }
 * ```
 *
 */
export class AuthenticationContext {
    constructor(
        /**
         * @summary `authenticationPolicyId`.
         * @public
         * @readonly
         */
        readonly authenticationPolicyId: OBJECT_IDENTIFIER,
        /**
         * @summary `requirements`.
         * @public
         * @readonly
         */
        readonly requirements: _Element
    ) {}

    /**
     * @summary Restructures an object into a AuthenticationContext
     * @description
     *
     * This takes an `object` and converts it to a `AuthenticationContext`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthenticationContext`.
     * @returns {AuthenticationContext}
     */
    public static _from_object(
        _o: { [_K in keyof AuthenticationContext]: AuthenticationContext[_K] }
    ): AuthenticationContext {
        return new AuthenticationContext(
            _o.authenticationPolicyId,
            _o.requirements
        );
    }
}

/**
 * @summary The Leading Root Component Types of AuthenticationContext
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AuthenticationContext: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'authenticationPolicyId',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'requirements',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of AuthenticationContext
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AuthenticationContext: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AuthenticationContext
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AuthenticationContext: $.ComponentSpec[] = [];

let _cached_decoder_for_AuthenticationContext: $.ASN1Decoder<AuthenticationContext> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticationContext
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthenticationContext} The decoded data structure.
 */
export function _decode_AuthenticationContext(el: _Element): AuthenticationContext {
    if (!_cached_decoder_for_AuthenticationContext) {
        _cached_decoder_for_AuthenticationContext = function (
            el: _Element
        ): AuthenticationContext {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'AuthenticationContext contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'authenticationPolicyId';
            sequence[1].name = 'requirements';
            let authenticationPolicyId!: OBJECT_IDENTIFIER;
            let requirements!: _Element;
            authenticationPolicyId = $._decode_implicit<OBJECT_IDENTIFIER>(
                () => $._decodeObjectIdentifier
            )(sequence[0]);
            requirements = $._decode_implicit<_Element>(() => $._decodeAny)(
                sequence[1]
            );
            return new AuthenticationContext(
                authenticationPolicyId,
                requirements
            );
        };
    }
    return _cached_decoder_for_AuthenticationContext(el);
}

let _cached_encoder_for_AuthenticationContext: $.ASN1Encoder<AuthenticationContext> | null = null;

/**
 * @summary Encodes a(n) AuthenticationContext into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticationContext, encoded as an ASN.1 Element.
 */
export function _encode_AuthenticationContext(
    value: AuthenticationContext,
    elGetter: $.ASN1Encoder<AuthenticationContext>
): _Element {
    if (!_cached_encoder_for_AuthenticationContext) {
        _cached_encoder_for_AuthenticationContext = function (
            value: AuthenticationContext        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => $._encodeObjectIdentifier,
                            $.BER
                        )(value.authenticationPolicyId, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => $._encodeAny,
                            $.BER
                        )(value.requirements, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AuthenticationContext(value, elGetter);
}


/* eslint-enable */
