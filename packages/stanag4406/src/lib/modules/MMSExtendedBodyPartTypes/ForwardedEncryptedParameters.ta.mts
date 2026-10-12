/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

import {
    MessageDeliveryTime,
    _decode_MessageDeliveryTime,
    _encode_MessageDeliveryTime,
    OtherMessageDeliveryFields,
    _decode_OtherMessageDeliveryFields,
    _encode_OtherMessageDeliveryFields,
} from "@wildboar/x400/MTSAbstractService";



/**
 * @summary ForwardedEncryptedParameters
 * @description
 * 
 * Delivery information for a message forwarded while still encrypted. The
 * envelope's content type indicates whether the inner message is an MM or an
 * IPM. All security information of the original message, including the token,
 * is forwarded. STANAG 4406 (Ed. 2), Annex A, B1.3 and clause 18.5.3.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardedEncryptedParameters ::= SET {
 *   delivery-time      [0]  MessageDeliveryTime OPTIONAL,
 *   delivery-envelope  [1]  OtherMessageDeliveryFields}
 * ```
 * 
 * @class
 */
export
class ForwardedEncryptedParameters {
    /**
     * @summary `delivery_time`.
     * @description
     *
     * Delivery time of the original message. Optional. Message delivery time as
     * in ITU-T X.411. STANAG 4406 (Ed. 2), Annex A, B1.3.
     * @public
     * @readonly
     */
    readonly delivery_time: OPTIONAL<MessageDeliveryTime>;
    /**
     * @summary `delivery_envelope`.
     * @description
     *
     * The other message-delivery fields of the original message, including the
     * content type that says whether the inner message is an MM or an IPM.
     * STANAG 4406 (Ed. 2), Annex A, B1.3.
     * @public
     * @readonly
     */
    readonly delivery_envelope: OtherMessageDeliveryFields;

    constructor (
        delivery_time: OPTIONAL<MessageDeliveryTime>,
        delivery_envelope: OtherMessageDeliveryFields
    ) {
        this.delivery_time = delivery_time;
        this.delivery_envelope = delivery_envelope;
    }

    /**
     * @summary Restructures an object into a ForwardedEncryptedParameters
     * @description
     * 
     * This takes an `object` and converts it to a `ForwardedEncryptedParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ForwardedEncryptedParameters`.
     * @returns {ForwardedEncryptedParameters}
     */
    public static _from_object (_o: { [_K in keyof (ForwardedEncryptedParameters)]: (ForwardedEncryptedParameters)[_K] }): ForwardedEncryptedParameters {
        return new ForwardedEncryptedParameters(_o.delivery_time, _o.delivery_envelope);
    }


}

/**
 * @summary The Leading Root Component Types of ForwardedEncryptedParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ForwardedEncryptedParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("delivery-time", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("delivery-envelope", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ForwardedEncryptedParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ForwardedEncryptedParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ForwardedEncryptedParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ForwardedEncryptedParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ForwardedEncryptedParameters: $.ASN1Decoder<ForwardedEncryptedParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardedEncryptedParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ForwardedEncryptedParameters (el: _Element): ForwardedEncryptedParameters {
    if (!_cached_decoder_for_ForwardedEncryptedParameters) { _cached_decoder_for_ForwardedEncryptedParameters = function (el: _Element): ForwardedEncryptedParameters {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let delivery_time: OPTIONAL<MessageDeliveryTime>;
    let delivery_envelope!: OtherMessageDeliveryFields;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "delivery-time": (_el: _Element): void => { delivery_time = $._decode_implicit<MessageDeliveryTime>(() => _decode_MessageDeliveryTime)(_el); },
        "delivery-envelope": (_el: _Element): void => { delivery_envelope = $._decode_implicit<OtherMessageDeliveryFields>(() => _decode_OtherMessageDeliveryFields)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ForwardedEncryptedParameters,
        _extension_additions_list_spec_for_ForwardedEncryptedParameters,
        _root_component_type_list_2_spec_for_ForwardedEncryptedParameters,
        undefined,
    );
    return new ForwardedEncryptedParameters( /* SET_CONSTRUCTOR_CALL */
        delivery_time,
        delivery_envelope
    );
}; }
    return _cached_decoder_for_ForwardedEncryptedParameters(el);
}

let _cached_encoder_for_ForwardedEncryptedParameters: $.ASN1Encoder<ForwardedEncryptedParameters> | null = null;

/**
 * @summary Encodes a(n) ForwardedEncryptedParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardedEncryptedParameters, encoded as an ASN.1 Element.
 */
export
function _encode_ForwardedEncryptedParameters (value: ForwardedEncryptedParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ForwardedEncryptedParameters) { _cached_encoder_for_ForwardedEncryptedParameters = function (value: ForwardedEncryptedParameters): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    if (value.delivery_time !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_MessageDeliveryTime, $.BER)(value.delivery_time, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_OtherMessageDeliveryFields, $.BER)(value.delivery_envelope, $.BER);
    _components.length = _components_i;
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_ForwardedEncryptedParameters(value, elGetter);
}


/* eslint-enable */
