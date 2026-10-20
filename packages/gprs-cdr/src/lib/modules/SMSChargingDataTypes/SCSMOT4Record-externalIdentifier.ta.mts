/* eslint-disable */
import {
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SCSMOT4Record_externalIdentifier_subscriptionIDType, _decode_SCSMOT4Record_externalIdentifier_subscriptionIDType, _encode_SCSMOT4Record_externalIdentifier_subscriptionIDType, _enum_for_SCSMOT4Record_externalIdentifier_subscriptionIDType } from "../SMSChargingDataTypes/SCSMOT4Record-externalIdentifier-subscriptionIDType.ta.mjs";


/**
 * @summary SCSMOT4Record_externalIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCSMOT4Record-externalIdentifier ::= SET {
 *    subscriptionIDType   [0] IMPLICIT ENUMERATED {
 *       eND-USER-E164       ( 0 ),
 *       eND-USER-IMSI       ( 1 ),
 *       eND-USER-SIP-URI    ( 2 ),
 *       eND-USER-NAI        ( 3 ),
 *       eND-USER-PRIVATE    ( 4 ) },
 *    subscriptionIDData   [1] IMPLICIT UTF8String
 * }
 * ```
 * 
 * @class
 */
export
class SCSMOT4Record_externalIdentifier {
    /**
     * @summary `subscriptionIDType`.
     * @public
     * @readonly
     */
    readonly subscriptionIDType: SCSMOT4Record_externalIdentifier_subscriptionIDType;
    /**
     * @summary `subscriptionIDData`.
     * @public
     * @readonly
     */
    readonly subscriptionIDData: UTF8String;

    constructor (
        subscriptionIDType: SCSMOT4Record_externalIdentifier_subscriptionIDType,
        subscriptionIDData: UTF8String
    ) {
        this.subscriptionIDType = subscriptionIDType;
        this.subscriptionIDData = subscriptionIDData;
    }

    /**
     * @summary Restructures an object into a SCSMOT4Record_externalIdentifier
     * @description
     * 
     * This takes an `object` and converts it to a `SCSMOT4Record_externalIdentifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SCSMOT4Record_externalIdentifier`.
     * @returns {SCSMOT4Record_externalIdentifier}
     */
    public static _from_object (_o: { [_K in keyof (SCSMOT4Record_externalIdentifier)]: (SCSMOT4Record_externalIdentifier)[_K] }): SCSMOT4Record_externalIdentifier {
        return new SCSMOT4Record_externalIdentifier(_o.subscriptionIDType, _o.subscriptionIDData);
    }

        /**
         * @summary The enum used as the type of the component `subscriptionIDType`
         * @public
         * @static
         */

    public static _enum_for_subscriptionIDType = _enum_for_SCSMOT4Record_externalIdentifier_subscriptionIDType;
}

/**
 * @summary The Leading Root Component Types of SCSMOT4Record_externalIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SCSMOT4Record_externalIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("subscriptionIDType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("subscriptionIDData", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of SCSMOT4Record_externalIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SCSMOT4Record_externalIdentifier: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SCSMOT4Record_externalIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SCSMOT4Record_externalIdentifier: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SCSMOT4Record_externalIdentifier: $.ASN1Decoder<SCSMOT4Record_externalIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCSMOT4Record_externalIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCSMOT4Record_externalIdentifier (el: _Element): SCSMOT4Record_externalIdentifier {
    if (!_cached_decoder_for_SCSMOT4Record_externalIdentifier) { _cached_decoder_for_SCSMOT4Record_externalIdentifier = function (el: _Element): SCSMOT4Record_externalIdentifier {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let subscriptionIDType!: SCSMOT4Record_externalIdentifier_subscriptionIDType;
    let subscriptionIDData!: UTF8String;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "subscriptionIDType": (_el: _Element): void => { subscriptionIDType = $._decode_implicit<SCSMOT4Record_externalIdentifier_subscriptionIDType>(() => _decode_SCSMOT4Record_externalIdentifier_subscriptionIDType)(_el); },
        "subscriptionIDData": (_el: _Element): void => { subscriptionIDData = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SCSMOT4Record_externalIdentifier,
        _extension_additions_list_spec_for_SCSMOT4Record_externalIdentifier,
        _root_component_type_list_2_spec_for_SCSMOT4Record_externalIdentifier,
        undefined,
    );
    return new SCSMOT4Record_externalIdentifier( /* SET_CONSTRUCTOR_CALL */
        subscriptionIDType,
        subscriptionIDData
    );
}; }
    return _cached_decoder_for_SCSMOT4Record_externalIdentifier(el);
}

let _cached_encoder_for_SCSMOT4Record_externalIdentifier: $.ASN1Encoder<SCSMOT4Record_externalIdentifier> | null = null;

/**
 * @summary Encodes a(n) SCSMOT4Record_externalIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCSMOT4Record_externalIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_SCSMOT4Record_externalIdentifier (value: SCSMOT4Record_externalIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCSMOT4Record_externalIdentifier) { _cached_encoder_for_SCSMOT4Record_externalIdentifier = function (value: SCSMOT4Record_externalIdentifier, _elGetter: $.ASN1Encoder<SCSMOT4Record_externalIdentifier>): _Element {
    return $._encodeSet([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SCSMOT4Record_externalIdentifier_subscriptionIDType, $.BER)(value.subscriptionIDType, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.subscriptionIDData, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_SCSMOT4Record_externalIdentifier(value, elGetter);
}


/* eslint-enable */
