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

/* START_OF_SYMBOL_DEFINITION UserAddress_x121 */
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
/* END_OF_SYMBOL_DEFINITION UserAddress_x121 */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UserAddress_x121 */
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
        $.hasTag(_TagClass.universal, 18),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'tsap-id',
        true,
        $.hasTag(_TagClass.universal, 19),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UserAddress_x121 */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UserAddress_x121 */
/**
 * @summary The Trailing Root Component Types of UserAddress_x121
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UserAddress_x121: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UserAddress_x121 */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UserAddress_x121 */
/**
 * @summary The Extension Addition Component Types of UserAddress_x121
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UserAddress_x121: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UserAddress_x121 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UserAddress_x121 */
let _cached_decoder_for_UserAddress_x121: $.ASN1Decoder<UserAddress_x121> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UserAddress_x121 */

/* START_OF_SYMBOL_DEFINITION _decode_UserAddress_x121 */
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
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let x121_address: OPTIONAL<NumericString>;
            let tsap_id: OPTIONAL<PrintableString>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'x121-address': (_el: _Element): void => {
                    x121_address = $._decodeNumericString(_el);
                },
                'tsap-id': (_el: _Element): void => {
                    tsap_id = $._decodePrintableString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UserAddress_x121,
                _extension_additions_list_spec_for_UserAddress_x121,
                _root_component_type_list_2_spec_for_UserAddress_x121,
                undefined
            );
            return new UserAddress_x121 /* SEQUENCE_CONSTRUCTOR_CALL */(
                x121_address,
                tsap_id
            );
        };
    }
    return _cached_decoder_for_UserAddress_x121(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UserAddress_x121 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UserAddress_x121 */
let _cached_encoder_for_UserAddress_x121: $.ASN1Encoder<UserAddress_x121> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UserAddress_x121 */

/* START_OF_SYMBOL_DEFINITION _encode_UserAddress_x121 */
/**
 * @summary Encodes a(n) UserAddress_x121 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserAddress_x121, encoded as an ASN.1 Element.
 */
export function _encode_UserAddress_x121(
    value: UserAddress_x121,
    elGetter: $.ASN1Encoder<UserAddress_x121>
) {
    if (!_cached_encoder_for_UserAddress_x121) {
        _cached_encoder_for_UserAddress_x121 = function (
            value: UserAddress_x121,
            elGetter: $.ASN1Encoder<UserAddress_x121>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_UserAddress_x121 */

/* eslint-enable */
