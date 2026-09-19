/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SMS_Address, _decode_SMS_Address, _encode_SMS_Address } from "../SMRS/SMS-Address.ta.mjs";
// export { SMS_Address, _decode_SMS_Address, _encode_SMS_Address } from "../SMRS/SMS-Address.ta.mjs";
import { Password, _decode_Password, _encode_Password } from "../SMRS/Password.ta.mjs";
// export { Password, _decode_Password, _encode_Password } from "../SMRS/Password.ta.mjs";


/**
 * @summary SMR_Bind
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMR-Bind ::= SEQUENCE {
 *     sc-address SMS-Address,
 *     password Password,
 *     ... 
 * }
 * ```
 * 
 * @class
 */
export
class SMR_Bind {
    constructor (
        /**
         * @summary `sc_address`.
         * @public
         * @readonly
         */
        readonly sc_address: SMS_Address,
        /**
         * @summary `password`.
         * @public
         * @readonly
         */
        readonly password: Password,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SMR_Bind
     * @description
     * 
     * This takes an `object` and converts it to a `SMR_Bind`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMR_Bind`.
     * @returns {SMR_Bind}
     */
    public static _from_object (_o: { [_K in keyof (SMR_Bind)]: (SMR_Bind)[_K] }): SMR_Bind {
        return new SMR_Bind(_o.sc_address, _o.password, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SMR_Bind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMR_Bind: $.ComponentSpec[] = [
    new $.ComponentSpec("sc-address", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("password", false, $.hasTag(_TagClass.universal, 19))
];

/**
 * @summary The Trailing Root Component Types of SMR_Bind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMR_Bind: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMR_Bind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMR_Bind: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMR_Bind: $.ASN1Decoder<SMR_Bind> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMR_Bind
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMR_Bind (el: _Element): SMR_Bind {
    if (!_cached_decoder_for_SMR_Bind) { _cached_decoder_for_SMR_Bind = function (el: _Element): SMR_Bind {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SMR-Bind contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sc-address";
    sequence[1].name = "password";
    let sc_address!: SMS_Address;
    let password!: Password;
    sc_address = _decode_SMS_Address(sequence[0]);
    password = _decode_Password(sequence[1]);
    return new SMR_Bind(
        sc_address,
        password,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_SMR_Bind(el);
}

let _cached_encoder_for_SMR_Bind: $.ASN1Encoder<SMR_Bind> | null = null;

/**
 * @summary Encodes a(n) SMR_Bind into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMR_Bind, encoded as an ASN.1 Element.
 */
export
function _encode_SMR_Bind (value: SMR_Bind, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMR_Bind) { _cached_encoder_for_SMR_Bind = function (value: SMR_Bind, elGetter: $.ASN1Encoder<SMR_Bind>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SMS_Address(value.sc_address, $.BER),
            /* REQUIRED   */ _encode_Password(value.password, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMR_Bind(value, elGetter);
}


/* eslint-enable */
