/* eslint-disable */
import {
    OPTIONAL,
    OCTET_STRING,
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
    Name,
    _decode_Name,
    _encode_Name,
} from '@wildboar/x500/src/lib/modules/InformationFramework/Name.ta.mjs';
import {
    UniqueIdentifier,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/UniqueIdentifier.ta.mjs';
/* START_OF_SYMBOL_DEFINITION UserInformation */
/**
 * @summary UserInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserInformation ::= SEQUENCE {
 *     userIdentifier          OCTET STRING,
 *     userName                Name,
 *     userUniqueIdentifier    UniqueIdentifier OPTIONAL }
 * ```
 *
 * @class
 */
export class UserInformation {
    constructor(
        /**
         * @summary `userIdentifier`.
         * @public
         * @readonly
         */
        readonly userIdentifier: OCTET_STRING,
        /**
         * @summary `userName`.
         * @public
         * @readonly
         */
        readonly userName: Name,
        /**
         * @summary `userUniqueIdentifier`.
         * @public
         * @readonly
         */
        readonly userUniqueIdentifier: OPTIONAL<UniqueIdentifier>
    ) {}

    /**
     * @summary Restructures an object into a UserInformation
     * @description
     *
     * This takes an `object` and converts it to a `UserInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UserInformation`.
     * @returns {UserInformation}
     */
    public static _from_object(
        _o: { [_K in keyof UserInformation]: UserInformation[_K] }
    ): UserInformation {
        return new UserInformation(
            _o.userIdentifier,
            _o.userName,
            _o.userUniqueIdentifier
        );
    }
}
/* END_OF_SYMBOL_DEFINITION UserInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UserInformation */
/**
 * @summary The Leading Root Component Types of UserInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UserInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'userIdentifier',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'userName',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'userUniqueIdentifier',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UserInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UserInformation */
/**
 * @summary The Trailing Root Component Types of UserInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UserInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UserInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UserInformation */
/**
 * @summary The Extension Addition Component Types of UserInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UserInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UserInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UserInformation */
let _cached_decoder_for_UserInformation: $.ASN1Decoder<UserInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UserInformation */

/* START_OF_SYMBOL_DEFINITION _decode_UserInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) UserInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserInformation} The decoded data structure.
 */
export function _decode_UserInformation(el: _Element) {
    if (!_cached_decoder_for_UserInformation) {
        _cached_decoder_for_UserInformation = function (
            el: _Element
        ): UserInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let userIdentifier!: OCTET_STRING;
            let userName!: Name;
            let userUniqueIdentifier: OPTIONAL<UniqueIdentifier>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                userIdentifier: (_el: _Element): void => {
                    userIdentifier = $._decodeOctetString(_el);
                },
                userName: (_el: _Element): void => {
                    userName = _decode_Name(_el);
                },
                userUniqueIdentifier: (_el: _Element): void => {
                    userUniqueIdentifier = _decode_UniqueIdentifier(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UserInformation,
                _extension_additions_list_spec_for_UserInformation,
                _root_component_type_list_2_spec_for_UserInformation,
                undefined
            );
            return new UserInformation /* SEQUENCE_CONSTRUCTOR_CALL */(
                userIdentifier,
                userName,
                userUniqueIdentifier
            );
        };
    }
    return _cached_decoder_for_UserInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UserInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UserInformation */
let _cached_encoder_for_UserInformation: $.ASN1Encoder<UserInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UserInformation */

/* START_OF_SYMBOL_DEFINITION _encode_UserInformation */
/**
 * @summary Encodes a(n) UserInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserInformation, encoded as an ASN.1 Element.
 */
export function _encode_UserInformation(
    value: UserInformation,
    elGetter: $.ASN1Encoder<UserInformation>
) {
    if (!_cached_encoder_for_UserInformation) {
        _cached_encoder_for_UserInformation = function (
            value: UserInformation        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeOctetString(
                            value.userIdentifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Name(value.userName, $.BER),
                        /* IF_ABSENT  */ value.userUniqueIdentifier ===
                        undefined
                            ? undefined
                            : _encode_UniqueIdentifier(
                                  value.userUniqueIdentifier,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UserInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UserInformation */

/* eslint-enable */
