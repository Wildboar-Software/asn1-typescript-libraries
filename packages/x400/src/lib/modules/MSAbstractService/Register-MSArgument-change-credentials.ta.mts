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
    Credentials,
    _decode_Credentials,
    _encode_Credentials,
} from '../MTSAbstractService/Credentials.ta.mjs';
/**
 * @summary Register_MSArgument_change_credentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Register-MSArgument-change-credentials ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Register_MSArgument_change_credentials {
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
     * @summary Restructures an object into a Register_MSArgument_change_credentials
     * @description
     *
     * This takes an `object` and converts it to a `Register_MSArgument_change_credentials`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Register_MSArgument_change_credentials`.
     * @returns {Register_MSArgument_change_credentials}
     */
    public static _from_object(
        _o: {
            [_K in keyof Register_MSArgument_change_credentials]: Register_MSArgument_change_credentials[_K];
        }
    ): Register_MSArgument_change_credentials {
        return new Register_MSArgument_change_credentials(
            _o.old_credentials,
            _o.new_credentials
        );
    }
}

/**
 * @summary The Leading Root Component Types of Register_MSArgument_change_credentials
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Register_MSArgument_change_credentials: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of Register_MSArgument_change_credentials
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Register_MSArgument_change_credentials: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Register_MSArgument_change_credentials
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Register_MSArgument_change_credentials: $.ComponentSpec[] = [];

let _cached_decoder_for_Register_MSArgument_change_credentials: $.ASN1Decoder<Register_MSArgument_change_credentials> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Register_MSArgument_change_credentials
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Register_MSArgument_change_credentials} The decoded data structure.
 */
export function _decode_Register_MSArgument_change_credentials(el: _Element) {
    if (!_cached_decoder_for_Register_MSArgument_change_credentials) {
        _cached_decoder_for_Register_MSArgument_change_credentials = function (
            el: _Element
        ): Register_MSArgument_change_credentials {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'Register-MSArgument-change-credentials contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'old-credentials';
            sequence[1].name = 'new-credentials';
            let old_credentials!: Credentials;
            let new_credentials!: Credentials;
            old_credentials = $._decode_explicit<Credentials>(
                () => _decode_Credentials
            )(sequence[0]);
            new_credentials = $._decode_explicit<Credentials>(
                () => _decode_Credentials
            )(sequence[1]);
            return new Register_MSArgument_change_credentials(
                old_credentials,
                new_credentials
            );
        };
    }
    return _cached_decoder_for_Register_MSArgument_change_credentials(el);
}

let _cached_encoder_for_Register_MSArgument_change_credentials: $.ASN1Encoder<Register_MSArgument_change_credentials> | null = null;

/**
 * @summary Encodes a(n) Register_MSArgument_change_credentials into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Register_MSArgument_change_credentials, encoded as an ASN.1 Element.
 */
export function _encode_Register_MSArgument_change_credentials(
    value: Register_MSArgument_change_credentials,
    elGetter: $.ASN1Encoder<Register_MSArgument_change_credentials>
) {
    if (!_cached_encoder_for_Register_MSArgument_change_credentials) {
        _cached_encoder_for_Register_MSArgument_change_credentials = function (
            value: Register_MSArgument_change_credentials        ): _Element {
            return $._encodeSequence(
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
    return _cached_encoder_for_Register_MSArgument_change_credentials(
        value,
        elGetter
    );
}


/* eslint-enable */
