/* eslint-disable */
import {
    OCTET_STRING,
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
    DTEAddress_numberingPlanId,
    _enum_for_DTEAddress_numberingPlanId,
    _decode_DTEAddress_numberingPlanId,
    _encode_DTEAddress_numberingPlanId,
} from '../NLM/DTEAddress-numberingPlanId.ta.mjs';

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
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'addressDigits',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of DTEAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DTEAddress: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DTEAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DTEAddress: $.ComponentSpec[] = [];


let _cached_decoder_for_DTEAddress: $.ASN1Decoder<DTEAddress> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DTEAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DTEAddress} The decoded data structure.
 */
export function _decode_DTEAddress(el: _Element): DTEAddress {
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


let _cached_encoder_for_DTEAddress: $.ASN1Encoder<DTEAddress> | null = null;


/**
 * @summary Encodes a(n) DTEAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DTEAddress, encoded as an ASN.1 Element.
 */
export function _encode_DTEAddress(
    value: DTEAddress,
    elGetter: $.ASN1Encoder<DTEAddress>
): _Element {
    if (!_cached_encoder_for_DTEAddress) {
        _cached_encoder_for_DTEAddress = function (
            value: DTEAddress        ): _Element {
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


/* eslint-enable */
