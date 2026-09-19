/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Spid, _decode_Spid, _encode_Spid } from "../AIN-Parameters/Spid.ta.mjs";
// export { Spid, _decode_Spid, _encode_Spid } from "../AIN-Parameters/Spid.ta.mjs";
import { Dn, _decode_Dn, _encode_Dn } from "../AIN-Parameters/Dn.ta.mjs";
// export { Dn, _decode_Dn, _encode_Dn } from "../AIN-Parameters/Dn.ta.mjs";


/**
 * @summary UserID_bri
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserID-bri ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class UserID_bri {
    constructor (
        /**
         * @summary `spid`.
         * @public
         * @readonly
         */
        readonly spid: Spid,
        /**
         * @summary `dn`.
         * @public
         * @readonly
         */
        readonly dn: Dn
    ) {}

    /**
     * @summary Restructures an object into a UserID_bri
     * @description
     * 
     * This takes an `object` and converts it to a `UserID_bri`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UserID_bri`.
     * @returns {UserID_bri}
     */
    public static _from_object (_o: { [_K in keyof (UserID_bri)]: (UserID_bri)[_K] }): UserID_bri {
        return new UserID_bri(_o.spid, _o.dn);
    }


}

/**
 * @summary The Leading Root Component Types of UserID_bri
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UserID_bri: $.ComponentSpec[] = [
    new $.ComponentSpec("spid", false, $.hasTag(_TagClass.context, 49)),
    new $.ComponentSpec("dn", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of UserID_bri
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UserID_bri: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UserID_bri
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UserID_bri: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UserID_bri: $.ASN1Decoder<UserID_bri> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserID_bri
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UserID_bri (el: _Element): UserID_bri {
    if (!_cached_decoder_for_UserID_bri) { _cached_decoder_for_UserID_bri = function (el: _Element): UserID_bri {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("UserID-bri contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "spid";
    sequence[1].name = "dn";
    let spid!: Spid;
    let dn!: Dn;
    spid = _decode_Spid(sequence[0]);
    dn = _decode_Dn(sequence[1]);
    return new UserID_bri(
        spid,
        dn,

    );
}; }
    return _cached_decoder_for_UserID_bri(el);
}

let _cached_encoder_for_UserID_bri: $.ASN1Encoder<UserID_bri> | null = null;

/**
 * @summary Encodes a(n) UserID_bri into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserID_bri, encoded as an ASN.1 Element.
 */
export
function _encode_UserID_bri (value: UserID_bri, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UserID_bri) { _cached_encoder_for_UserID_bri = function (value: UserID_bri, elGetter: $.ASN1Encoder<UserID_bri>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Spid(value.spid, $.BER),
            /* REQUIRED   */ _encode_Dn(value.dn, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UserID_bri(value, elGetter);
}


/* eslint-enable */
