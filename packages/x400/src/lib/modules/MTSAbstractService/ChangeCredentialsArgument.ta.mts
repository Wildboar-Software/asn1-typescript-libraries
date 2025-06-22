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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    Credentials,
    _decode_Credentials,
    _encode_Credentials,
} from '../MTSAbstractService/Credentials.ta.mjs';
/**
 * @summary ChangeCredentialsArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChangeCredentialsArgument ::= SET {
 *   old-credentials  [0]  Credentials(WITH COMPONENTS {
 *                                       simple
 *                                     }),
 *   new-credentials  [1]  Credentials(WITH COMPONENTS {
 *                                       simple
 *                                     })
 * }
 * ```
 *
 * @class
 */
export class ChangeCredentialsArgument {
    constructor(
        /**
         * @summary `old_credentials`.
         * @public
         * @readonly
         */
        readonly old_credentials: Credentials,
        /**
         * @summary `new_credentials`.
         * @public
         * @readonly
         */
        readonly new_credentials: Credentials
    ) {}

    /**
     * @summary Restructures an object into a ChangeCredentialsArgument
     * @description
     *
     * This takes an `object` and converts it to a `ChangeCredentialsArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeCredentialsArgument`.
     * @returns {ChangeCredentialsArgument}
     */
    public static _from_object(
        _o: {
            [_K in keyof ChangeCredentialsArgument]: ChangeCredentialsArgument[_K];
        }
    ): ChangeCredentialsArgument {
        return new ChangeCredentialsArgument(
            _o.old_credentials,
            _o.new_credentials
        );
    }
}

/**
 * @summary The Leading Root Component Types of ChangeCredentialsArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ChangeCredentialsArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'old-credentials',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'new-credentials',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of ChangeCredentialsArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ChangeCredentialsArgument: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ChangeCredentialsArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ChangeCredentialsArgument: $.ComponentSpec[] = [];

let _cached_decoder_for_ChangeCredentialsArgument: $.ASN1Decoder<ChangeCredentialsArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeCredentialsArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChangeCredentialsArgument} The decoded data structure.
 */
export function _decode_ChangeCredentialsArgument(el: _Element) {
    if (!_cached_decoder_for_ChangeCredentialsArgument) {
        _cached_decoder_for_ChangeCredentialsArgument = function (
            el: _Element
        ): ChangeCredentialsArgument {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let old_credentials!: Credentials;
            let new_credentials!: Credentials;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'old-credentials': (_el: _Element): void => {
                    old_credentials = $._decode_explicit<Credentials>(
                        () => _decode_Credentials
                    )(_el);
                },
                'new-credentials': (_el: _Element): void => {
                    new_credentials = $._decode_explicit<Credentials>(
                        () => _decode_Credentials
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ChangeCredentialsArgument,
                _extension_additions_list_spec_for_ChangeCredentialsArgument,
                _root_component_type_list_2_spec_for_ChangeCredentialsArgument,
                undefined
            );
            return new ChangeCredentialsArgument /* SET_CONSTRUCTOR_CALL */(
                old_credentials,
                new_credentials
            );
        };
    }
    return _cached_decoder_for_ChangeCredentialsArgument(el);
}

let _cached_encoder_for_ChangeCredentialsArgument: $.ASN1Encoder<ChangeCredentialsArgument> | null = null;

/**
 * @summary Encodes a(n) ChangeCredentialsArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeCredentialsArgument, encoded as an ASN.1 Element.
 */
export function _encode_ChangeCredentialsArgument(
    value: ChangeCredentialsArgument,
    elGetter: $.ASN1Encoder<ChangeCredentialsArgument>
) {
    if (!_cached_encoder_for_ChangeCredentialsArgument) {
        _cached_encoder_for_ChangeCredentialsArgument = function (
            value: ChangeCredentialsArgument        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_Credentials,
                            $.BER
                        )(value.old_credentials, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_Credentials,
                            $.BER
                        )(value.new_credentials, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ChangeCredentialsArgument(value, elGetter);
}


/* eslint-enable */
