/* eslint-disable */
import {
    OPTIONAL,
    NumericString,
    PrintableString,
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
 * @summary UserAddress_x121
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserAddress-x121 ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class UserAddress_x121 {
    constructor(
        /**
         * @summary `x121_address`.
         * @public
         * @readonly
         */
        readonly x121_address: OPTIONAL<NumericString>,
        /**
         * @summary `tsap_id`.
         * @public
         * @readonly
         */
        readonly tsap_id: OPTIONAL<PrintableString>
    ) {}

    /**
     * @summary Restructures an object into a UserAddress_x121
     * @description
     *
     * This takes an `object` and converts it to a `UserAddress_x121`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UserAddress_x121`.
     * @returns {UserAddress_x121}
     */
    public static _from_object(
        _o: { [_K in keyof UserAddress_x121]: UserAddress_x121[_K] }
    ): UserAddress_x121 {
        return new UserAddress_x121(_o.x121_address, _o.tsap_id);
    }
}

/**
 * @summary The Leading Root Component Types of UserAddress_x121
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UserAddress_x121: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'x121-address',
        true,
        $.hasTag(_TagClass.universal, 18)
    ),
    new $.ComponentSpec(
        'tsap-id',
        true,
        $.hasTag(_TagClass.universal, 19)
    ),
];

/**
 * @summary The Trailing Root Component Types of UserAddress_x121
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UserAddress_x121: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of UserAddress_x121
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UserAddress_x121: $.ComponentSpec[] = [];

let _cached_decoder_for_UserAddress_x121: $.ASN1Decoder<UserAddress_x121> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserAddress_x121
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserAddress_x121} The decoded data structure.
 */
export function _decode_UserAddress_x121(el: _Element) {
    if (!_cached_decoder_for_UserAddress_x121) {
        _cached_decoder_for_UserAddress_x121 = function (
            el: _Element
        ): UserAddress_x121 {
            let x121_address: OPTIONAL<NumericString>;
            let tsap_id: OPTIONAL<PrintableString>;
            const callbacks: $.DecodingMap = {
                'x121-address': (_el: _Element): void => {
                    x121_address = $._decodeNumericString(_el);
                },
                'tsap-id': (_el: _Element): void => {
                    tsap_id = $._decodePrintableString(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UserAddress_x121,
                _extension_additions_list_spec_for_UserAddress_x121,
                _root_component_type_list_2_spec_for_UserAddress_x121,
                undefined
            );
            return new UserAddress_x121 (
                x121_address,
                tsap_id
            );
        };
    }
    return _cached_decoder_for_UserAddress_x121(el);
}

let _cached_encoder_for_UserAddress_x121: $.ASN1Encoder<UserAddress_x121> | null = null;

/**
 * @summary Encodes a(n) UserAddress_x121 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserAddress_x121, encoded as an ASN.1 Element.
 */
export function _encode_UserAddress_x121(
    value: UserAddress_x121,
    elGetter: $.ASN1Encoder<UserAddress_x121>
) {
    if (!_cached_encoder_for_UserAddress_x121) {
        _cached_encoder_for_UserAddress_x121 = function (
            value: UserAddress_x121        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.x121_address === undefined
                            ? undefined
                            : $._encodeNumericString(value.x121_address, $.BER),
                        /* IF_ABSENT  */ value.tsap_id === undefined
                            ? undefined
                            : $._encodePrintableString(value.tsap_id, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UserAddress_x121(value, elGetter);
}


/* eslint-enable */
