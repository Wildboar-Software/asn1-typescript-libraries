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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    DTEAddress_numberingPlanId,
    _enum_for_DTEAddress_numberingPlanId,
    DTEAddress_numberingPlanId_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */,
    unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    DTEAddress_numberingPlanId_x121 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    x121 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    DTEAddress_numberingPlanId_e164 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    e164 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_DTEAddress_numberingPlanId,
    _encode_DTEAddress_numberingPlanId,
} from '../NLM/DTEAddress-numberingPlanId.ta.js';
export {
    DTEAddress_numberingPlanId,
    _enum_for_DTEAddress_numberingPlanId,
    DTEAddress_numberingPlanId_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */,
    unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    DTEAddress_numberingPlanId_x121 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    x121 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    DTEAddress_numberingPlanId_e164 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    e164 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_DTEAddress_numberingPlanId,
    _encode_DTEAddress_numberingPlanId,
} from '../NLM/DTEAddress-numberingPlanId.ta.js';

/* START_OF_SYMBOL_DEFINITION DTEAddress */
/**
 * @summary DTEAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DTEAddress ::= SEQUENCE {
 *   numberingPlanId  [0]  ENUMERATED {unknown(0), x121(1), e164(2)},
 *   addressDigits    [1]  OCTET STRING
 * }
 * ```
 *
 * @class
 */
export class DTEAddress {
    constructor(
        /**
         * @summary `numberingPlanId`.
         * @public
         * @readonly
         */
        readonly numberingPlanId: DTEAddress_numberingPlanId,
        /**
         * @summary `addressDigits`.
         * @public
         * @readonly
         */
        readonly addressDigits: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a DTEAddress
     * @description
     *
     * This takes an `object` and converts it to a `DTEAddress`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DTEAddress`.
     * @returns {DTEAddress}
     */
    public static _from_object(
        _o: { [_K in keyof DTEAddress]: DTEAddress[_K] }
    ): DTEAddress {
        return new DTEAddress(_o.numberingPlanId, _o.addressDigits);
    }

    /**
     * @summary The enum used as the type of the component `numberingPlanId`
     * @public
     * @static
     */

    public static _enum_for_numberingPlanId = _enum_for_DTEAddress_numberingPlanId;
}
/* END_OF_SYMBOL_DEFINITION DTEAddress */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DTEAddress */
/**
 * @summary The Leading Root Component Types of DTEAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DTEAddress: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'numberingPlanId',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'addressDigits',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DTEAddress */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DTEAddress */
/**
 * @summary The Trailing Root Component Types of DTEAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DTEAddress: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DTEAddress */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DTEAddress */
/**
 * @summary The Extension Addition Component Types of DTEAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DTEAddress: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DTEAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DTEAddress */
let _cached_decoder_for_DTEAddress: $.ASN1Decoder<DTEAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DTEAddress */

/* START_OF_SYMBOL_DEFINITION _decode_DTEAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) DTEAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DTEAddress} The decoded data structure.
 */
export function _decode_DTEAddress(el: _Element) {
    if (!_cached_decoder_for_DTEAddress) {
        _cached_decoder_for_DTEAddress = function (el: _Element): DTEAddress {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'DTEAddress contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'numberingPlanId';
            sequence[1].name = 'addressDigits';
            let numberingPlanId!: DTEAddress_numberingPlanId;
            let addressDigits!: OCTET_STRING;
            numberingPlanId = $._decode_implicit<DTEAddress_numberingPlanId>(
                () => _decode_DTEAddress_numberingPlanId
            )(sequence[0]);
            addressDigits = $._decode_implicit<OCTET_STRING>(
                () => $._decodeOctetString
            )(sequence[1]);
            return new DTEAddress(numberingPlanId, addressDigits);
        };
    }
    return _cached_decoder_for_DTEAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DTEAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DTEAddress */
let _cached_encoder_for_DTEAddress: $.ASN1Encoder<DTEAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DTEAddress */

/* START_OF_SYMBOL_DEFINITION _encode_DTEAddress */
/**
 * @summary Encodes a(n) DTEAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DTEAddress, encoded as an ASN.1 Element.
 */
export function _encode_DTEAddress(
    value: DTEAddress,
    elGetter: $.ASN1Encoder<DTEAddress>
) {
    if (!_cached_encoder_for_DTEAddress) {
        _cached_encoder_for_DTEAddress = function (
            value: DTEAddress,
            elGetter: $.ASN1Encoder<DTEAddress>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_DTEAddress_numberingPlanId,
                            $.BER
                        )(value.numberingPlanId, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => $._encodeOctetString,
                            $.BER
                        )(value.addressDigits, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DTEAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DTEAddress */

/* eslint-enable */
