/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SubscriberEquipmentType, _decode_SubscriberEquipmentType, _encode_SubscriberEquipmentType, _enum_for_SubscriberEquipmentType } from "../GenericChargingDataTypes/SubscriberEquipmentType.ta.mjs";


/**
 * @summary SubscriberEquipmentNumber
 * @description
 *
 * The Subscriber Equipment Number field contains the identification of the
 * User Equipment (UE) accessing the 3GPP system.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.1.7.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberEquipmentNumber ::= SET {
 *    subscriberEquipmentNumberType   [0] IMPLICIT SubscriberEquipmentType,
 *    subscriberEquipmentNumberData   [1] IMPLICIT OCTET STRING}
 * ```
 * 
 * @class
 */
export
class SubscriberEquipmentNumber {
    /**
     * @summary `subscriberEquipmentNumberType`.
     * @public
     * @readonly
     */
    readonly subscriberEquipmentNumberType: SubscriberEquipmentType;
    /**
     * @summary `subscriberEquipmentNumberData`.
     * @public
     * @readonly
     */
    readonly subscriberEquipmentNumberData: OCTET_STRING;

    constructor (
        subscriberEquipmentNumberType: SubscriberEquipmentType,
        subscriberEquipmentNumberData: OCTET_STRING
    ) {
        this.subscriberEquipmentNumberType = subscriberEquipmentNumberType;
        this.subscriberEquipmentNumberData = subscriberEquipmentNumberData;
    }

    /**
     * @summary Restructures an object into a SubscriberEquipmentNumber
     * @description
     * 
     * This takes an `object` and converts it to a `SubscriberEquipmentNumber`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubscriberEquipmentNumber`.
     * @returns {SubscriberEquipmentNumber}
     */
    public static _from_object (_o: { [_K in keyof (SubscriberEquipmentNumber)]: (SubscriberEquipmentNumber)[_K] }): SubscriberEquipmentNumber {
        return new SubscriberEquipmentNumber(_o.subscriberEquipmentNumberType, _o.subscriberEquipmentNumberData);
    }

        /**
         * @summary The enum used as the type of the component `subscriberEquipmentNumberType`
         * @public
         * @static
         */

    public static _enum_for_subscriberEquipmentNumberType: typeof _enum_for_SubscriberEquipmentType = _enum_for_SubscriberEquipmentType;
}

/**
 * @summary The Leading Root Component Types of SubscriberEquipmentNumber
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SubscriberEquipmentNumber: $.ComponentSpec[] = [
    new $.ComponentSpec("subscriberEquipmentNumberType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("subscriberEquipmentNumberData", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of SubscriberEquipmentNumber
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SubscriberEquipmentNumber: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SubscriberEquipmentNumber
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SubscriberEquipmentNumber: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SubscriberEquipmentNumber: $.ASN1Decoder<SubscriberEquipmentNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubscriberEquipmentNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubscriberEquipmentNumber (el: _Element): SubscriberEquipmentNumber {
    if (!_cached_decoder_for_SubscriberEquipmentNumber) { _cached_decoder_for_SubscriberEquipmentNumber = function (el: _Element): SubscriberEquipmentNumber {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let subscriberEquipmentNumberType!: SubscriberEquipmentType;
    let subscriberEquipmentNumberData!: OCTET_STRING;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "subscriberEquipmentNumberType": (_el: _Element): void => { subscriberEquipmentNumberType = $._decode_implicit<SubscriberEquipmentType>(() => _decode_SubscriberEquipmentType)(_el); },
        "subscriberEquipmentNumberData": (_el: _Element): void => { subscriberEquipmentNumberData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SubscriberEquipmentNumber,
        _extension_additions_list_spec_for_SubscriberEquipmentNumber,
        _root_component_type_list_2_spec_for_SubscriberEquipmentNumber,
        undefined,
    );
    return new SubscriberEquipmentNumber( /* SET_CONSTRUCTOR_CALL */
        subscriberEquipmentNumberType,
        subscriberEquipmentNumberData
    );
}; }
    return _cached_decoder_for_SubscriberEquipmentNumber(el);
}

let _cached_encoder_for_SubscriberEquipmentNumber: $.ASN1Encoder<SubscriberEquipmentNumber> | null = null;

/**
 * @summary Encodes a(n) SubscriberEquipmentNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriberEquipmentNumber, encoded as an ASN.1 Element.
 */
export
function _encode_SubscriberEquipmentNumber (value: SubscriberEquipmentNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubscriberEquipmentNumber) { _cached_encoder_for_SubscriberEquipmentNumber = function (value: SubscriberEquipmentNumber, _elGetter: $.ASN1Encoder<SubscriberEquipmentNumber>): _Element {
    return $._encodeSet([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SubscriberEquipmentType, $.BER)(value.subscriberEquipmentNumberType, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.subscriberEquipmentNumberData, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_SubscriberEquipmentNumber(value, elGetter);
}


/* eslint-enable */
