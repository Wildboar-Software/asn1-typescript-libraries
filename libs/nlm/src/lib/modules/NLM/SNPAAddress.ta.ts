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

/* START_OF_SYMBOL_DEFINITION SNPAAddress */
/**
 * @summary SNPAAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SNPAAddress ::= SEQUENCE {
 *   type     [1]  OBJECT IDENTIFIER,
 *   address  [2]  OCTET STRING
 * }
 * ```
 *
 * @class
 */
export class SNPAAddress {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OBJECT_IDENTIFIER,
        /**
         * @summary `address`.
         * @public
         * @readonly
         */
        readonly address: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a SNPAAddress
     * @description
     *
     * This takes an `object` and converts it to a `SNPAAddress`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SNPAAddress`.
     * @returns {SNPAAddress}
     */
    public static _from_object(
        _o: { [_K in keyof SNPAAddress]: SNPAAddress[_K] }
    ): SNPAAddress {
        return new SNPAAddress(_o.type_, _o.address);
    }
}
/* END_OF_SYMBOL_DEFINITION SNPAAddress */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SNPAAddress */
/**
 * @summary The Leading Root Component Types of SNPAAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SNPAAddress: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'type',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'address',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SNPAAddress */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SNPAAddress */
/**
 * @summary The Trailing Root Component Types of SNPAAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SNPAAddress: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SNPAAddress */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SNPAAddress */
/**
 * @summary The Extension Addition Component Types of SNPAAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SNPAAddress: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SNPAAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SNPAAddress */
let _cached_decoder_for_SNPAAddress: $.ASN1Decoder<SNPAAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SNPAAddress */

/* START_OF_SYMBOL_DEFINITION _decode_SNPAAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) SNPAAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SNPAAddress} The decoded data structure.
 */
export function _decode_SNPAAddress(el: _Element) {
    if (!_cached_decoder_for_SNPAAddress) {
        _cached_decoder_for_SNPAAddress = function (el: _Element): SNPAAddress {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'SNPAAddress contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'type';
            sequence[1].name = 'address';
            let type_!: OBJECT_IDENTIFIER;
            let address!: OCTET_STRING;
            type_ = $._decode_implicit<OBJECT_IDENTIFIER>(
                () => $._decodeObjectIdentifier
            )(sequence[0]);
            address = $._decode_implicit<OCTET_STRING>(
                () => $._decodeOctetString
            )(sequence[1]);
            return new SNPAAddress(type_, address);
        };
    }
    return _cached_decoder_for_SNPAAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SNPAAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SNPAAddress */
let _cached_encoder_for_SNPAAddress: $.ASN1Encoder<SNPAAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SNPAAddress */

/* START_OF_SYMBOL_DEFINITION _encode_SNPAAddress */
/**
 * @summary Encodes a(n) SNPAAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SNPAAddress, encoded as an ASN.1 Element.
 */
export function _encode_SNPAAddress(
    value: SNPAAddress,
    elGetter: $.ASN1Encoder<SNPAAddress>
) {
    if (!_cached_encoder_for_SNPAAddress) {
        _cached_encoder_for_SNPAAddress = function (
            value: SNPAAddress,
            elGetter: $.ASN1Encoder<SNPAAddress>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => $._encodeObjectIdentifier,
                            $.BER
                        )(value.type_, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () => $._encodeOctetString,
                            $.BER
                        )(value.address, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SNPAAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SNPAAddress */

/* eslint-enable */
