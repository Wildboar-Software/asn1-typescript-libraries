/* eslint-disable */
import {
    type UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SubscriptionID_subscriptionIDType, _decode_SubscriptionID_subscriptionIDType, _encode_SubscriptionID_subscriptionIDType, _enum_for_SubscriptionID_subscriptionIDType } from "./SubscriptionID-subscriptionIDType.ta.mjs";


/**
 * @summary SubscriptionID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionID ::= SET {
 *    subscriptionIDType   [0] IMPLICIT ENUMERATED {
 *       eND-USER-E164       ( 0 ),
 *       eND-USER-IMSI       ( 1 ),
 *       eND-USER-SIP-URI    ( 2 ),
 *       eND-USER-NAI        ( 3 ),
 *       eND-USER-PRIVATE    ( 4 ) },
 *    subscriptionIDData   [1] IMPLICIT UTF8String}
 * ```
 * 
 * @class
 */
export
class SubscriptionID {
    /**
     * @summary `subscriptionIDType`.
     * @public
     * @readonly
     */
    readonly subscriptionIDType: SubscriptionID_subscriptionIDType;
    /**
     * @summary `subscriptionIDData`.
     * @public
     * @readonly
     */
    readonly subscriptionIDData: UTF8String;

    constructor (
        subscriptionIDType: SubscriptionID_subscriptionIDType,
        subscriptionIDData: UTF8String
    ) {
        this.subscriptionIDType = subscriptionIDType;
        this.subscriptionIDData = subscriptionIDData;
    }

    /**
     * @summary Restructures an object into a SubscriptionID
     * @description
     * 
     * This takes an `object` and converts it to a `SubscriptionID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubscriptionID`.
     * @returns {SubscriptionID}
     */
    public static _from_object (_o: { [_K in keyof (SubscriptionID)]: (SubscriptionID)[_K] }): SubscriptionID {
        return new SubscriptionID(_o.subscriptionIDType, _o.subscriptionIDData);
    }

        /**
         * @summary The enum used as the type of the component `subscriptionIDType`
         * @public
         * @static
         */

    public static _enum_for_subscriptionIDType = _enum_for_SubscriptionID_subscriptionIDType;
}

/**
 * @summary The Leading Root Component Types of SubscriptionID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SubscriptionID: $.ComponentSpec[] = [
    new $.ComponentSpec("subscriptionIDType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("subscriptionIDData", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of SubscriptionID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SubscriptionID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SubscriptionID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SubscriptionID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SubscriptionID: $.ASN1Decoder<SubscriptionID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubscriptionID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubscriptionID (el: _Element): SubscriptionID {
    if (!_cached_decoder_for_SubscriptionID) { _cached_decoder_for_SubscriptionID = function (el: _Element): SubscriptionID {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let subscriptionIDType!: SubscriptionID_subscriptionIDType;
    let subscriptionIDData!: UTF8String;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "subscriptionIDType": (_el: _Element): void => { subscriptionIDType = $._decode_implicit<SubscriptionID_subscriptionIDType>(() => _decode_SubscriptionID_subscriptionIDType)(_el); },
        "subscriptionIDData": (_el: _Element): void => { subscriptionIDData = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SubscriptionID,
        _extension_additions_list_spec_for_SubscriptionID,
        _root_component_type_list_2_spec_for_SubscriptionID,
        undefined,
    );
    return new SubscriptionID( /* SET_CONSTRUCTOR_CALL */
        subscriptionIDType,
        subscriptionIDData
    );
}; }
    return _cached_decoder_for_SubscriptionID(el);
}

let _cached_encoder_for_SubscriptionID: $.ASN1Encoder<SubscriptionID> | null = null;

/**
 * @summary Encodes a(n) SubscriptionID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriptionID, encoded as an ASN.1 Element.
 */
export
function _encode_SubscriptionID (value: SubscriptionID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubscriptionID) { _cached_encoder_for_SubscriptionID = function (value: SubscriptionID, _elGetter: $.ASN1Encoder<SubscriptionID>): _Element {
    return $._encodeSet([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SubscriptionID_subscriptionIDType, $.BER)(value.subscriptionIDType, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.subscriptionIDData, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_SubscriptionID(value, elGetter);
}


/* eslint-enable */
