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
 * Syntax of the `authenticationContext` attribute. When the
 * authentication-context package is present on a rule, these
 * requirements must be satisfied before any further
 * evaluation of the initiator; otherwise the rule evaluates
 * to FALSE. Sequence of policy identifier plus the
 * requirements that policy defines. Cor.3 replaced `ANY
 * DEFINED BY` with `AC-AUTH-CONTEXT` /
 * `AuthenticationContextSet`. ITU-T Rec. X.741 (04/95)
 * [§A.5.6](https://www.itu.int/rec/T-REC-X.741-199504-I),
 * §8.1.3.4, A.2.3; Cor.3 (02/2000)
 * [A.6](https://www.itu.int/rec/T-REC-X.741-200002-I).
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
         * @description
         *
         * `AC-AUTH-CONTEXT.&id` from
         * `AuthenticationContextSet`; identifies the
         * authentication policy. X.741 §8.1.3.4.1.1, Cor.3 A.6.
         * @public
         * @readonly
         */
        readonly authenticationPolicyId: OBJECT_IDENTIFIER,
        /**
         * @summary `requirements`.
         * @description
         *
         * Policy-defined authentication requirements, typed by
         * `authenticationPolicyId`. X.741 §8.1.3.4.1.1, Cor.3
         * A.6.
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
