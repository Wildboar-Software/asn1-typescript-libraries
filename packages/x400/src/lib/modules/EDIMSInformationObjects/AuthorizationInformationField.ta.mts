/* eslint-disable */
import {
    OPTIONAL,
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
    AuthorizationInformation,
    _decode_AuthorizationInformation,
    _encode_AuthorizationInformation,
} from '../EDIMSInformationObjects/AuthorizationInformation.ta.mjs';
import {
    AuthorizationInformationQualifier,
    _decode_AuthorizationInformationQualifier,
    _encode_AuthorizationInformationQualifier,
} from '../EDIMSInformationObjects/AuthorizationInformationQualifier.ta.mjs';
/**
 * @summary AuthorizationInformationField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthorizationInformationField ::= SEQUENCE {
 *   authorization-information            [0]  AuthorizationInformation,
 *   authorization-information-qualifier
 *     [1]  AuthorizationInformationQualifier OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class AuthorizationInformationField {
    constructor(
        /**
         * @summary `authorization_information`.
         * @public
         * @readonly
         */
        readonly authorization_information: AuthorizationInformation,
        /**
         * @summary `authorization_information_qualifier`.
         * @public
         * @readonly
         */
        readonly authorization_information_qualifier: OPTIONAL<AuthorizationInformationQualifier>
    ) {}

    /**
     * @summary Restructures an object into a AuthorizationInformationField
     * @description
     *
     * This takes an `object` and converts it to a `AuthorizationInformationField`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthorizationInformationField`.
     * @returns {AuthorizationInformationField}
     */
    public static _from_object(
        _o: {
            [_K in keyof AuthorizationInformationField]: AuthorizationInformationField[_K];
        }
    ): AuthorizationInformationField {
        return new AuthorizationInformationField(
            _o.authorization_information,
            _o.authorization_information_qualifier
        );
    }
}

/**
 * @summary The Leading Root Component Types of AuthorizationInformationField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AuthorizationInformationField: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'authorization-information',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'authorization-information-qualifier',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of AuthorizationInformationField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AuthorizationInformationField: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AuthorizationInformationField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AuthorizationInformationField: $.ComponentSpec[] = [];

let _cached_decoder_for_AuthorizationInformationField: $.ASN1Decoder<AuthorizationInformationField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthorizationInformationField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthorizationInformationField} The decoded data structure.
 */
export function _decode_AuthorizationInformationField(el: _Element) {
    if (!_cached_decoder_for_AuthorizationInformationField) {
        _cached_decoder_for_AuthorizationInformationField = function (
            el: _Element
        ): AuthorizationInformationField {
            let authorization_information!: AuthorizationInformation;
            let authorization_information_qualifier: OPTIONAL<AuthorizationInformationQualifier>;
            const callbacks: $.DecodingMap = {
                'authorization-information': (_el: _Element): void => {
                    authorization_information = $._decode_implicit<AuthorizationInformation>(
                        () => _decode_AuthorizationInformation
                    )(_el);
                },
                'authorization-information-qualifier': (
                    _el: _Element
                ): void => {
                    authorization_information_qualifier = $._decode_implicit<AuthorizationInformationQualifier>(
                        () => _decode_AuthorizationInformationQualifier
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AuthorizationInformationField,
                _extension_additions_list_spec_for_AuthorizationInformationField,
                _root_component_type_list_2_spec_for_AuthorizationInformationField,
                undefined
            );
            return new AuthorizationInformationField (
                authorization_information,
                authorization_information_qualifier
            );
        };
    }
    return _cached_decoder_for_AuthorizationInformationField(el);
}

let _cached_encoder_for_AuthorizationInformationField: $.ASN1Encoder<AuthorizationInformationField> | null = null;

/**
 * @summary Encodes a(n) AuthorizationInformationField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorizationInformationField, encoded as an ASN.1 Element.
 */
export function _encode_AuthorizationInformationField(
    value: AuthorizationInformationField,
    elGetter: $.ASN1Encoder<AuthorizationInformationField>
) {
    if (!_cached_encoder_for_AuthorizationInformationField) {
        _cached_encoder_for_AuthorizationInformationField = function (
            value: AuthorizationInformationField        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_AuthorizationInformation,
                            $.BER
                        )(value.authorization_information, $.BER),
                        /* IF_ABSENT  */ value.authorization_information_qualifier ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      _encode_AuthorizationInformationQualifier,
                                  $.BER
                              )(
                                  value.authorization_information_qualifier,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AuthorizationInformationField(value, elGetter);
}


/* eslint-enable */
