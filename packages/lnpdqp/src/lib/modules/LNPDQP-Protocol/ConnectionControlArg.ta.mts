/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Digits, _decode_Digits, _encode_Digits } from "../LNPDQP-Protocol/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../LNPDQP-Protocol/Digits.ta.mjs";
import { BillingIndicators, _decode_BillingIndicators, _encode_BillingIndicators } from "../LNPDQP-Protocol/BillingIndicators.ta.mjs";
// export { BillingIndicators, _decode_BillingIndicators, _encode_BillingIndicators } from "../LNPDQP-Protocol/BillingIndicators.ta.mjs";


/**
 * @summary ConnectionControlArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionControlArg ::= [PRIVATE 18] SET {
 * --            carrierID                [4] Digits, - - Note 1
 * --            networkRoutingNumber    [4] Digits,
 * -- as2wrs does not like two equal tags
 *             digits    [4] Digits,
 *             billingIndicators        [PRIVATE 65] BillingIndicators -- Note 1
 *         }
 * ```
 * 
 * @class
 */
export
class ConnectionControlArg {
    constructor (
        /**
         * @summary `digits`.
         * @public
         * @readonly
         */
        readonly digits: Digits,
        /**
         * @summary `billingIndicators`.
         * @public
         * @readonly
         */
        readonly billingIndicators: BillingIndicators
    ) {}

    /**
     * @summary Restructures an object into a ConnectionControlArg
     * @description
     * 
     * This takes an `object` and converts it to a `ConnectionControlArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectionControlArg`.
     * @returns {ConnectionControlArg}
     */
    public static _from_object (_o: { [_K in keyof (ConnectionControlArg)]: (ConnectionControlArg)[_K] }): ConnectionControlArg {
        return new ConnectionControlArg(_o.digits, _o.billingIndicators);
    }


}

/**
 * @summary The Leading Root Component Types of ConnectionControlArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConnectionControlArg: $.ComponentSpec[] = [
    new $.ComponentSpec("digits", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("billingIndicators", false, $.hasTag(_TagClass.private, 65))
];

/**
 * @summary The Trailing Root Component Types of ConnectionControlArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConnectionControlArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConnectionControlArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConnectionControlArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConnectionControlArg: $.ASN1Decoder<ConnectionControlArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionControlArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectionControlArg (el: _Element): ConnectionControlArg {
    if (!_cached_decoder_for_ConnectionControlArg) { _cached_decoder_for_ConnectionControlArg = $._decode_implicit<ConnectionControlArg>(() => function (el: _Element): ConnectionControlArg {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let digits!: Digits;
    let billingIndicators!: BillingIndicators;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "digits": (_el: _Element): void => { digits = $._decode_implicit<Digits>(() => _decode_Digits)(_el); },
        "billingIndicators": (_el: _Element): void => { billingIndicators = $._decode_implicit<BillingIndicators>(() => _decode_BillingIndicators)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ConnectionControlArg,
        _extension_additions_list_spec_for_ConnectionControlArg,
        _root_component_type_list_2_spec_for_ConnectionControlArg,
        undefined,
    );
    return new ConnectionControlArg( /* SET_CONSTRUCTOR_CALL */
        digits,
        billingIndicators
    );
}); }
    return _cached_decoder_for_ConnectionControlArg(el);
}

let _cached_encoder_for_ConnectionControlArg: $.ASN1Encoder<ConnectionControlArg> | null = null;

/**
 * @summary Encodes a(n) ConnectionControlArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionControlArg, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectionControlArg (value: ConnectionControlArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectionControlArg) { _cached_encoder_for_ConnectionControlArg = $._encode_implicit(_TagClass.private, 18, () => function (value: ConnectionControlArg, elGetter: $.ASN1Encoder<ConnectionControlArg>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Digits, $.BER)(value.digits, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.private, 65, () => _encode_BillingIndicators, $.BER)(value.billingIndicators, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ConnectionControlArg(value, elGetter);
}


/* eslint-enable */
